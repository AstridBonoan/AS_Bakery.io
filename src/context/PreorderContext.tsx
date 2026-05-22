import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import type { CartItem, PreorderForm, Product } from '../types'

const STORAGE_KEY = 'as-bakery-preorder'

interface PreorderContextValue {
  items: CartItem[]
  addItem: (product: Product, qty?: number) => void
  removeItem: (productId: string) => void
  updateQuantity: (productId: string, quantity: number) => void
  clearCart: () => void
  itemCount: number
  subtotal: number
  isModalOpen: boolean
  openModal: () => void
  closeModal: () => void
  form: PreorderForm
  updateForm: (patch: Partial<PreorderForm>) => void
  submitPreorder: () => boolean
  lastOrderId: string | null
}

const defaultForm: PreorderForm = {
  name: '',
  email: '',
  phone: '',
  pickupDate: '',
  notes: '',
}

const PreorderContext = createContext<PreorderContextValue | null>(null)

function loadCart(): CartItem[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw) as CartItem[]
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

export function PreorderProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(loadCart)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [form, setForm] = useState<PreorderForm>(defaultForm)
  const [lastOrderId, setLastOrderId] = useState<string | null>(null)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  }, [items])

  const addItem = useCallback((product: Product, qty = 1) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.product.id === product.id)
      if (existing) {
        return prev.map((i) =>
          i.product.id === product.id
            ? { ...i, quantity: i.quantity + qty }
            : i,
        )
      }
      return [...prev, { product, quantity: qty }]
    })
  }, [])

  const removeItem = useCallback((productId: string) => {
    setItems((prev) => prev.filter((i) => i.product.id !== productId))
  }, [])

  const updateQuantity = useCallback((productId: string, quantity: number) => {
    if (quantity < 1) {
      setItems((prev) => prev.filter((i) => i.product.id !== productId))
      return
    }
    setItems((prev) =>
      prev.map((i) =>
        i.product.id === productId ? { ...i, quantity } : i,
      ),
    )
  }, [])

  const clearCart = useCallback(() => setItems([]), [])

  const itemCount = useMemo(
    () => items.reduce((sum, i) => sum + i.quantity, 0),
    [items],
  )

  const subtotal = useMemo(
    () =>
      items.reduce((sum, i) => sum + i.product.price * i.quantity, 0),
    [items],
  )

  const updateForm = useCallback((patch: Partial<PreorderForm>) => {
    setForm((prev) => ({ ...prev, ...patch }))
  }, [])

  const submitPreorder = useCallback(() => {
    if (
      !form.name.trim() ||
      !form.email.trim() ||
      !form.pickupDate ||
      items.length === 0
    ) {
      return false
    }
    const orderId = `AS-${Date.now().toString(36).toUpperCase()}`
    setLastOrderId(orderId)
    clearCart()
    setForm(defaultForm)
    setIsModalOpen(false)
    return true
  }, [form, items.length, clearCart])

  const value = useMemo(
    () => ({
      items,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      itemCount,
      subtotal,
      isModalOpen,
      openModal: () => setIsModalOpen(true),
      closeModal: () => setIsModalOpen(false),
      form,
      updateForm,
      submitPreorder,
      lastOrderId,
    }),
    [
      items,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      itemCount,
      subtotal,
      isModalOpen,
      form,
      updateForm,
      submitPreorder,
      lastOrderId,
    ],
  )

  return (
    <PreorderContext.Provider value={value}>{children}</PreorderContext.Provider>
  )
}

export function usePreorder() {
  const ctx = useContext(PreorderContext)
  if (!ctx) throw new Error('usePreorder must be used within PreorderProvider')
  return ctx
}

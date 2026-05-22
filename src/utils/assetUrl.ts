/** Resolve a public-folder path for GitHub Pages base URL. */
export function assetUrl(path: string): string {
  const base = import.meta.env.BASE_URL
  return `${base}${path.replace(/^\//, '')}`
}

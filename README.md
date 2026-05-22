# A&S Bakery

A mobile-first bakery storefront built with React and Tailwind CSS — product gallery, seasonal collection, weekly specials, and a pre-order bag with pickup scheduling.

## Local development

```bash
npm install
npm run dev
```

## GitHub Pages (deploy from branch)

This repo uses **GitHub Actions** to build the site and push static files to the **`gh-pages`** branch. Configure Pages to use **Deploy from a branch**:

1. Open **Settings → Pages**
2. **Source:** Deploy from a branch
3. **Branch:** `gh-pages` / `/ (root)`
4. Save

After pushing to `main`, the workflow publishes to `gh-pages`. The live site will be at:

**https://astridbonoan.github.io/AS_Bakery.io/**

## Stack

- React 19 + TypeScript + Vite
- Tailwind CSS v4
- GitHub Actions → `gh-pages` branch

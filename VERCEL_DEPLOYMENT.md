# Vercel Deployment Guide (Next.js Frontend)

## Overview
Deploy de Next.js frontend naar Vercel met de Strapi CMS backend op DigitalOcean.

## Vercel Configuratie

### 1. Project Settings
**In Vercel dashboard:**
- **Framework Preset**: Next.js ✅ (automatisch gedetecteerd)
- **Root Directory**: `apps/web` ✅ (automatisch gedetecteerd)
- **Build Command**: `npm run build` of `next build`
- **Install Command**: `yarn install`
- **Output Directory**: Next.js default (.next)

### 2. Environment Variabelen voor Vercel

**Essentiële variabelen (kopieer deze):**
```bash
# API Connection
NEXT_PUBLIC_CMS_URL=https://jouw-digitalocean-cms.ondigitalocean.app
NEXT_PUBLIC_API_URL=https://jouw-digitalocean-cms.ondigitalocean.app/api

# Environment
NODE_ENV=production

# Optionele variabelen
NEXT_PUBLIC_MEILISEARCH_HOST=https://jouw-meilisearch.com
NEXT_PUBLIC_MEILISEARCH_API_KEY=jouw-api-key
NEXT_PUBLIC_ALGOLIA_APP_ID=jouw-app-id
NEXT_PUBLIC_ALGOLIA_SEARCH_KEY=jouw-search-key
```

## Correcte Vercel Setup

### Stap 1: Project Import
1. **Repository**: `MaenoCDA/koenzwebsite`
2. **Branch**: `main`
3. **Root Directory**: `apps/web`
4. **Framework**: Next.js (automatisch)

### Stap 2: Build Settings
```bash
Build Command: npm run build
Install Command: yarn install
Output Directory: .next
```

### Stap 3: Environment Variabelen

**VOER DEZE IN VERCEL (niet de CMS variabelen!):**

```bash
# API Connection (BELANGRIJK!)
NEXT_PUBLIC_CMS_URL=https://koenzwebsite-xxxx.ondigitalocean.app
NEXT_PUBLIC_API_URL=https://koenzwebsite-xxxx.ondigitalocean.app/api

# Search (indien gebruikt)
NEXT_PUBLIC_MEILISEARCH_HOST=
NEXT_PUBLIC_MEILISEARCH_API_KEY=
NEXT_PUBLIC_ALGOLIA_APP_ID=
NEXT_PUBLIC_ALGOLIA_SEARCH_KEY=

# Analytics (optioneel)
NEXT_PUBLIC_GA_ID=
NEXT_PUBLIC_HOTJAR_ID=

# Other
NEXT_PUBLIC_SITE_URL=https://koenzwebsite-web.vercel.app
NODE_ENV=production
```

## Belangrijke Configuratie

### 1. Next.js Config Update
De [`next.config.mjs`](apps/web/next.config.mjs) moet de CMS URL correct gebruiken:

```javascript
// In next.config.mjs
const cspHeader = `
    frame-ancestors 'self' ${process.env.NEXT_PUBLIC_CMS_URL};
`;
```

### 2. API Client Configuratie
Zorg dat de API client de juiste URL gebruikt:

```typescript
// In apps/web/utils/api/client.ts
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337/api';
```

## Deployment Proces

### Voor Deployment
1. **Zorg dat CMS draait** op DigitalOcean
2. **Test CMS API** bereikbaarheid:
   ```bash
   curl https://jouw-cms.ondigitalocean.app/api
   ```
3. **Configureer environment variabelen** in Vercel

### Deployment Stappen
1. **Push code** naar GitHub
2. **Import project** in Vercel
3. **Configureer settings** (zie hierboven)
4. **Voeg environment variabelen toe**
5. **Deploy**

## Troubleshooting

### Build Fails
```bash
# Lokale build test
cd apps/web
yarn install
yarn build

# Check voor errors
```

### API Connection Errors
```bash
# Test API bereikbaarheid
curl https://jouw-cms.ondigitalocean.app/health

# Check CORS settings in CMS
```

### Environment Variabelen Werken Niet
```bash
# Check of variabelen correct zijn ingesteld
# Moet NEXT_PUBLIC_ prefix hebben voor client-side access
```

## Post-Deployment Checks

### 1. Health Check
```bash
# Test deployed site
curl https://koenzwebsite-web.vercel.app

# Check console logs voor errors
```

### 2. API Connection Test
```bash
# Test API calls
curl https://koenzwebsite-web.vercel.app/api/content-type-links
```

### 3. CMS Admin Test
- Open: `https://jouw-cms.ondigitalocean.app/admin`
- Test content creation
- Check of content verschijnt op frontend

## Performance Optimalisatie

### 1. Image Optimization
```javascript
// In next.config.mjs
images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'jouw-cms.ondigitalocean.app',
    },
  ],
},
```

### 2. Bundle Analysis
```bash
# Lokale analyse
ANALYZE=true yarn build

# Check bundle size
```

### 3. Caching
```bash
# Configureer caching headers in CMS
# Gebruik Vercel Edge Network
```

## Custom Domain Setup

### 1. Vercel Domain
1. Ga naar Vercel dashboard → Settings → Domains
2. Voeg je domein toe
3. Configureer DNS records

### 2. CORS Update
Update CMS CORS settings:
```bash
# In DigitalOcean environment variabelen
WEB_URL=https://jouw-domein.com
```

## Monitor en Analytics

### 1. Vercel Analytics
- Automatisch ingeschakeld
- Check performance metrics
- Monitor errors

### 2. Custom Analytics
```bash
# Google Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Hotjar
NEXT_PUBLIC_HOTJAR_ID=XXXXXX
```

## Samenvatting

### ✅ Correcte Vercel Setup:
- **Framework**: Next.js
- **Root Directory**: `apps/web`
- **Build**: `npm run build`
- **Environment**: Variabelen met `NEXT_PUBLIC_` prefix

### ❌ NIET invullen in Vercel:
- CMS database variabelen
- CMS secrets
- Server-side configuratie

### 🎯 Belangrijkste:
- **API URL** moet naar DigitalOcean CMS wijzen
- **NEXT_PUBLIC_** prefix voor client-side variabelen
- **Test API connection** na deployment

De frontend en backend zijn nu gescheiden:
- **Frontend**: Vercel (Next.js)
- **Backend**: DigitalOcean (Strapi CMS)

Dit is de moderne en schaalbare aanpak! 🚀
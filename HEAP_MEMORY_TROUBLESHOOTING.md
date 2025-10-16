# JavaScript Heap Out of Memory - Render Deployment Fix

## Probleem
```
FATAL ERROR: Ineffective mark-compacts near heap limit Allocation failed - JavaScript heap out of memory
```

De build faalt tijdens de admin panel build fase omdat 2GB RAM niet voldoende is voor de Strapi admin panel compilation.

## Oplossingen

### 1. Ultra-Minimale Build Strategy

**Gebruik alleen server-side plugins:**
```bash
corepack enable && yarn install --immutable && yarn build:cms:ultra-minimal
```

**Wat dit bouwt:**
- ✅ `link` plugin - Essentieel voor link management
- ❌ `teaser` plugin - Admin panel build overslaan
- ❌ `cms` app - Admin panel build overslaan

### 2. Server-Only Build
```bash
corepack enable && yarn install --immutable && yarn build:cms:server-only
```

**Wat dit bouwt:**
- ✅ `link` plugin - Server + admin
- ✅ `teaser` plugin - Server + admin  
- ❌ `cms` app - Admin panel build overslaan

### 3. Pre-build Lokaal (Aanbevolen)

**Stap 1: Lokaal volledige build**
```bash
# Lokaal met voldoende geheugen
yarn build:cms
```

**Stap 2: Deploy dist files**
```bash
# Voeg gebouwde files toe aan git
git add apps/cms/dist/
git add apps/cms/src/plugins/*/dist/
git commit -m "Add built CMS files for deployment"
git push
```

**Stap 3: Render build command**
```bash
corepack enable && yarn install --immutable
```

### 4. Node.js Memory Optimalisatie

**Increase Node.js heap size:**
```bash
# Build command met increased memory
corepack enable && yarn install --immutable && NODE_OPTIONS="--max-old-space-size=1536" yarn build:cms:minimal
```

**Of nog meer geheugen:**
```bash
NODE_OPTIONS="--max-old-space-size=1792" yarn build:cms:minimal
```

## Render Deployment Settings

### Optie A: Ultra-Minimal (Aanbevolen voor 2GB RAM)
```bash
# Build Command
corepack enable && yarn install --immutable && yarn build:cms:ultra-minimal

# Start Command  
yarn --cwd apps/cms start
```

**Voordelen:**
- ✅ Werkt binnen 2GB RAM limit
- ✅ Snelle build time
- ✅ Core functionality beschikbaar

**Nadelen:**
- ❌ Geen admin panel interface
- ❌ Beperkte plugin functionaliteit

### Optie B: Pre-build Lokaal (Beste Functionaliteit)
```bash
# Build Command
corepack enable && yarn install --immutable

# Start Command
yarn --cwd apps/cms start
```

**Voordelen:**
- ✅ Volle functionaliteit
- ✅ Admin panel beschikbaar
- ✅ Alle plugins werken

**Nadelen:**
- ❌ Extra lokale stap nodig
- ❌ Grotere repository

### Optie C: Memory Optimalisatie
```bash
# Build Command
corepack enable && yarn install --immutable && NODE_OPTIONS="--max-old-space-size=1536" yarn build:cms:minimal

# Start Command
yarn --cwd apps/cms start
```

## Troubleshooting

### Als build nog steeds faalt:

1. **Check memory usage:**
   ```bash
   # Monitor memory tijdens build
   NODE_OPTIONS="--max-old-space-size=1024" yarn build:cms:ultra-minimal
   ```

2. **Gebruik sequential builds:**
   ```bash
   # Bouw plugins één voor één
   yarn build:cms:link && NODE_OPTIONS="--max-old-space-size=1024" yarn build:cms:teaser
   ```

3. **Disable admin panel completely:**
   ```bash
   # Skip admin build volledig
   echo "STRAPI_ADMIN_BUILD=false" >> .env.render
   ```

### Production Considerations

**Admin Panel Access:**
- Ultra-minimal build heeft geen admin interface
- Gebruik API endpoints voor content management
- Of upgrade naar Render Pro (4GB RAM)

**Functionaliteit Impact:**
- Link plugin werkt server-side
- Content management via API
- Geen web-based admin interface

## Monitoring

### Health Check
```bash
# Test als deployment succesvol was
curl https://jouw-app.onrender.com/health
```

### API Access
```bash
# Test API endpoints
curl https://jouw-app.onrender.com/api/content-type-links
```

## Aanbeveling

**Voor Render Standard (2GB RAM):**
Gebruik `yarn build:cms:ultra-minimal` voor betrouwbare deployment.

**Voor volledige functionaliteit:**
1. Pre-build lokaal
2. Push dist files
3. Deploy met alleen `yarn install --immutable`

**Future-proof:**
Upgrade naar Render Pro (4GB RAM) voor volledige builds met admin panel.
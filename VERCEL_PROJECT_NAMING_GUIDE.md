# Vercel Project Naming Guide

## Probleem
De projectnaam "koenzwebsite-web-812m" bestaat al op Vercel. Je hebt een unieke projectnaam nodig.

## Oplossingen

### Optie 1: Gebruik een Unieke Projectnaam
Verander de projectnaam in Vercel dashboard:

#### Suggesties voor CMS:
- `koenz-cms-prod`
- `koenz-cms-v2`
- `koenz-strapi-cms`
- `koenz-content-cms`
- `maeno-cms-prod`

#### Suggesties voor Frontend:
- `koenz-web-prod`
- `koenz-frontend`
- `koenz-nextjs`
- `koenz-website-v2`
- `maeno-web-prod`

### Optie 2: Verwijder Bestaand Project
Als je het bestaande project wilt verwijderen:

1. Ga naar [Vercel Dashboard](https://vercel.com/dashboard)
2. Zoek "koenzwebsite-web-812m"
3. Klik op de drie dots (...) → "Delete Project"
4. Bevestig de verwijdering
5. Maak opnieuw het project aan

### Optie 3: Gebruik Timestamp
Voeg een timestamp toe aan de projectnaam:
- `koenz-cms-2025-1016`
- `koenz-web-2025-1016`

## Correcte Vercel Setup

### Voor CMS Project:
```
Project Name: koonz-cms-prod
Framework Preset: Other
Root Directory: apps/cms
Build Command: yarn build:cms:minimal
Install Command: yarn install
```

### Voor Frontend Project:
```
Project Name: koonz-web-prod
Framework Preset: Next.js
Root Directory: apps/web
Build Command: yarn build:web
Install Command: yarn install
```

## Environment Variabelen per Project

### CMS Environment Variabelen:
```bash
NODE_ENV=production
HOST=0.0.0.0
PORT=1337
DATABASE_CLIENT=postgres
DATABASE_SSL=true
DATABASE_URL=postgresql://koenz_database_user:tsr6Wm1AqQhAgbF72baR89cZvbIWpueD@dpg-d3o9lrmr433s739tj4qg-a/koenz_database
NODE_TLS_REJECT_UNAUTHORIZED=0
ADMIN_JWT_SECRET=339d78780305c9f658886253cecee22f
JWT_SECRET=11684d92a9734b8f7eb705908c42c011
APP_KEYS=key-1,key-2,key-3
API_TOKEN_SALT=jouw-api-salt
TRANSFER_TOKEN_SALT=jouw-transfer-salt
STRAPI_URL=https://koonz-cms-prod.vercel.app
```

### Frontend Environment Variabelen:
```bash
NODE_ENV=production
NEXT_PUBLIC_STRAPI_URL=https://koonz-cms-prod.vercel.app
NEXT_PUBLIC_API_URL=https://koonz-cms-prod.vercel.app/api
```

## Aanbevolen Project Structuur

### Twee Losse Projects:
1. **CMS Project**: `koonz-cms-prod`
   - Root: `apps/cms`
   - Framework: Other
   - Doel: Strapi CMS

2. **Frontend Project**: `koonz-web-prod`
   - Root: `apps/web`
   - Framework: Next.js
   - Doel: Next.js website

### Voordelen:
- ✅ Schaalbare resources per project
- ✅ Losse deployments
- ✅ Betere performance
- ✅ Makkelijker debuggen

## Stap-voor-Stap Deploy

### Stap 1: Deploy CMS
1. Nieuw project in Vercel
2. Projectnaam: `koonz-cms-prod`
3. Root Directory: `apps/cms`
4. Voeg CMS environment variabelen toe
5. Deploy

### Stap 2: Deploy Frontend
1. Nieuw project in Vercel
2. Projectnaam: `koonz-web-prod`
3. Root Directory: `apps/web`
4. Voeg frontend environment variabelen toe
5. Deploy

### Stap 3: Testen
```bash
# Test CMS
curl https://koonz-cms-prod.vercel.app/health

# Test Frontend
curl https://koonz-web-prod.vercel.app
```

## Foutoplossing

### Als het niet werkt:
1. **Check projectnamen**: Moeten uniek zijn
2. **Verify root directory**: Moet kloppen voor elk project
3. **Environment variabelen**: Check of alle variabelen zijn ingesteld
4. **Build logs**: Check Vercel build logs voor errors

### Common Issues:
- **Project exists**: Gebruik een andere naam
- **Build fails**: Check root directory en build command
- **Environment missing**: Voeg alle required variabelen toe
- **API connection**: Check STRAPI_URL in frontend

## Samenvatting

1. **Gebruik unieke projectnamen** zoals `koonz-cms-prod` en `koonz-web-prod`
2. **Maak twee losse projects** voor CMS en frontend
3. **Configureer environment variabelen** per project
4. **Deploy los** voor optimale performance

Kies een van de bovenstaande opties en probeer opnieuw te deployen! 🚀
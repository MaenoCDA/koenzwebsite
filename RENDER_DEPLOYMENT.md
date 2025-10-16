# Render Deployment Guide

## Probleem Oplossing

De huidige deployment faalt omdat:
1. Build command bouwt alleen dependencies, niet de CMS
2. Environment variabelen niet correct ingesteld voor productie
3. Root directory niet correct ingesteld voor monorepo

## Render Settings

### 1. Root Directory
```
koenz
```

### 2. Build Command (Optimized for 2GB RAM)
```bash
corepack enable && yarn install --immutable && yarn build:cms:minimal
```

**Alternatief voor meer geheugen:**
```bash
corepack enable && yarn install --immutable && yarn deploy:render
```

### 3. Start Command
```bash
yarn --cwd apps/cms start
```

### 4. Environment Variabelen

**Essentiële variabelen:**
```
NODE_ENV=production
NODE_TLS_REJECT_UNAUTHORIZED=0
HOST=0.0.0.0
PORT=1337
```

**Database variabelen (indien nodig):**
```
DATABASE_CLIENT=mysql
DATABASE_HOST=jouw-db-host
DATABASE_PORT=3306
DATABASE_NAME=jouw-db-naam
DATABASE_USERNAME=jouw-db-user
DATABASE_PASSWORD=jouw-db-password
```

**CMS configuratie:**
```
STRAPI_URL=https://jouw-domein.onrender.com
WEB_URL=https://jouw-frontend-url
```

## Stap-voor-stap Deploy

1. **Navigeer naar je Render Web Service settings**
2. **Stel Root Directory in:** `koenz`
3. **Update Build Command:** `corepack enable && yarn install --immutable && yarn build:cms:minimal`
4. **Update Start Command:** `yarn --cwd apps/cms start`
5. **Voeg Environment Variabelen toe:**
   - `NODE_ENV=production`
   - `NODE_TLS_REJECT_UNAUTHORIZED=0`
   - `HOST=0.0.0.0`
   - `PORT=1337`
6. **Save en Redeploy**

## Health Check

Stel Health Check Path in op:
```
/health
```

## Troubleshooting

### SSL Certificate Errors
Als je nog steeds "self-signed certificate" errors krijgt:

1. **Controleer environment variabelen:**
   - `NODE_ENV=production`
   - `NODE_TLS_REJECT_UNAUTHORIZED=0`

2. **Controleer database connectie** (indien extern):
   - Zorg dat de database SSL certificaten correct zijn
   - Gebruik `DATABASE_SSL=false` voor development databases

### Build Fails
Als de build faalt:

1. **Controleer of dependencies correct zijn**
2. **Verifieer dat de CMS build succesvol is:**
   ```bash
   yarn build:cms:minimal
   ```
3. **Bij geheugenproblemen (2GB RAM limit):**
   - Gebruik `yarn build:cms:minimal` in plaats van `yarn build:cms`
   - Dit bouwt alleen essentiële plugins: link, teaser, en de main app
   - Slaat collection-types, webhook, en drag-drop plugins over

### Start Fails
Als de start faalt:

1. **Controleer logs voor specifieke errors**
2. **Verifieer environment variabelen**
3. **Controleer of poort 1337 beschikbaar is**

## Production vs Development

### Development (Lokaal)
```bash
NODE_ENV=development
NODE_TLS_REJECT_UNAUTHORIZED=0
```

### Production (Render)
```bash
NODE_ENV=production
NODE_TLS_REJECT_UNAUTHORIZED=0
```

De nieuwe configuratie zorgt ervoor dat:
- **Development**: SSL-validatie uitgeschakeld voor lokale ontwikkeling
- **Production**: SSL-validatie ingeschakeld voor veilige productie omgeving

## Monitoring

Na deployment:
1. **Controleer de health endpoint:** `https://jouw-domein.onrender.com/health`
2. **Monitor de logs** voor SSL errors
3. **Test de API endpoints** om te verifiëren dat alles werkt
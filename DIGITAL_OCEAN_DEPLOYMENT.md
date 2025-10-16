# DigitalOcean App Platform Deployment Guide

## Overview
DigitalOcean App Platform is een goede alternatief voor Render met betrouwbaardere builds en meer flexibiliteit.

## DigitalOcean vs Render

| Aspect | DigitalOcean | Render |
|--------|-------------|--------|
| RAM Limit | 1GB (Basic) / 2GB (Pro) | 2GB (Standard) |
| Build Time | Sneller | Langzamer |
| SSL Certificates | Automatisch | Handmatig |
| Environment Variables | Eenvoudig | Complex |
| Pricing | $24/mo (1GB) | $7/mo (2GB) |

## DigitalOcean Configuratie

### 1. App Settings

**Basic Configuration:**
- **Name**: `koenz-cms` (of jouw keuze)
- **Resource Type**: Web Service
- **Source**: GitHub - `MaenoCDA/koenzwebsite`
- **Branch**: `main`
- **Auto-deploy**: Enabled

### 2. Resource Settings

**Aanbevolen Setup:**
- **Instance Size**: **2 GB RAM / 2 vCPU** ($48/mo)
- **Containers**: 1 (voor CMS)
- **Public HTTP Port**: 1337 (Strapi default)

**Budget Optie:**
- **Instance Size**: **1 GB RAM / 1 vCPU** ($24/mo)
- **Containers**: 1
- **Public HTTP Port**: 1337

### 3. Build Command

**Optie A: Volledige Build (2GB RAM+)**
```bash
corepack enable && yarn install --immutable && yarn build:cms
```

**Optie B: Minimale Build (1GB RAM)**
```bash
corepack enable && yarn install --immutable && yarn build:cms:minimal
```

**Optie C: Ultra-Minimal (voor 1GB RAM)**
```bash
corepack enable && yarn install --immutable && yarn build:cms:ultra-minimal
```

### 4. Run Command

```bash
yarn --cwd apps/cms start
```

### 5. Environment Variables

**Essentiële variabelen:**
```bash
NODE_ENV=production
HOST=0.0.0.0
PORT=1337
NODE_TLS_REJECT_UNAUTHORIZED=0
STRAPI_URL=https://koenz-cms.ondigitalocean.app
WEB_URL=https://jouw-frontend-url
```

**Database (indien nodig):**
```bash
DATABASE_CLIENT=postgres
DATABASE_HOST=jouw-db-host
DATABASE_PORT=5432
DATABASE_NAME=jouw-db-naam
DATABASE_USERNAME=jouw-db-user
DATABASE_PASSWORD=jouw-db-password
DATABASE_SSL=true
```

**Secrets (Genereer nieuwe):**
```bash
APP_KEYS=app-key-1,app-key-2,app-key-3
API_TOKEN_SALT=jouw-salt
ADMIN_JWT_SECRET=jouw-jwt-secret
TRANSFER_TOKEN_SALT=jouw-transfer-salt
JWT_SECRET=jouw-secret
```

## DigitalOcean Specifieke Configuratie

### 1. Port Configuration
DigitalOcean verwacht poort 8080, maar Strapi draait op 1337:

```bash
# Environment variable
PORT=1337

# In DigitalOcean settings:
# Public HTTP port: 1337 (niet 8080!)
```

### 2. Health Check
DigitalOcean heeft geen ingebouwde health check zoals Render, maar onze `/health` endpoint werkt nog steeds:

```bash
# Test na deployment
curl https://koenz-cms.ondigitalocean.app/health
```

### 3. SSL Certificates
DigitalOcean handelt SSL automatisch af, dus geen `NODE_TLS_REJECT_UNAUTHORIZED=0` nodig voor externe requests:

```bash
# Voor DigitalOcean kun je proberen:
NODE_TLS_REJECT_UNAUTHORIZED=true

# Maar hou 0 als fallback voor database issues
```

## Deployment Stappen

### 1. Repository Voorbereiden
```bash
# Zorg dat alles gecommit is
git add .
git commit -m "Ready for DigitalOcean deployment"
git push origin main
```

### 2. DigitalOcean App Aanmaken
1. Ga naar DigitalOcean App Platform
2. "Create App" → "Git Repository"
3. Selecteer `MaenoCDA/koenzwebsite`
4. Branch: `main`
5. Resource Type: Web Service

### 3. Configureer Build Settings
```bash
# Build command (afhankelijk van RAM):
corepack enable && yarn install --immutable && yarn build:cms:minimal

# Run command:
yarn --cwd apps/cms start
```

### 4. Environment Variables Toevoegen
Voeg alle variabelen toe uit de lijst hierboven.

### 5. Deploy
Klik op "Create App" en wacht op deployment.

## Troubleshooting

### Build Fails
1. **Check logs** in DigitalOcean dashboard
2. **Memory issues**: Gebruik kleinere build command
3. **Dependency conflicts**: Check yarn.lock

### Runtime Errors
1. **Port issues**: Zorg dat `PORT=1337` is ingesteld
2. **Database connection**: Check connection string
3. **SSL issues**: Probeer `NODE_TLS_REJECT_UNAUTHORIZED=0`

### Health Check Fails
```bash
# Test handmatig
curl https://jouw-app.ondigitalocean.app/health

# Check logs voor specifieke errors
```

## Performance Optimalisatie

### 1. Instance Size
- **1GB RAM**: Goed voor development/small sites
- **2GB RAM**: Aanbevolen voor production
- **4GB RAM**: Voor grote sites met veel traffic

### 2. Build Optimization
```bash
# Gebruik minimale build voor snellere deploys
yarn build:cms:minimal

# Of pre-build lokaal voor betrouwbaarheid
yarn build:cms && git add dist/ && git commit
```

### 3. Database
- Gebruik DigitalOcean Managed Database
- Configureer connection pooling
- Monitor performance

## Monitoring

### 1. DigitalOcean Metrics
- CPU usage
- Memory usage
- Bandwidth
- Response times

### 2. Application Logs
```bash
# Check Strapi logs
# Via DigitalOcean dashboard > Logs
```

### 3. Health Monitoring
```bash
# Setup monitoring script
curl -f https://jouw-app.ondigitalocean.app/health || echo "Health check failed"
```

## Kosten

### DigitalOcean App Platform
- **1GB RAM**: $24/maand
- **2GB RAM**: $48/maand
- **Database**: $15-50/maand (afhankelijk van size)

### Total Estimated Cost
- **Budget setup**: $39/maand (1GB + Database)
- **Production setup**: $63/maand (2GB + Database)

## Voordeel vs Render

### DigitalOcean Voordelen:
✅ Betrouwbaardere builds  
✅ Automatische SSL certificaten  
✅ Geavanceerde monitoring  
✅ Betere performance  
✅ Meer controle over environment  

### Nadelen:
❌ Duurder dan Render  
❌ Minder gratis tier  

## Aanbeveling

**Voor Development**: 1GB RAM plan  
**Voor Production**: 2GB RAM plan met managed database  

DigitalOcean is betrouwbaarder dan Render en waard de extra kosten voor een production application.
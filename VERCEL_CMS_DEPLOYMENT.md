# Vercel CMS Deployment Guide

## Probleem Oplossing
De Vercel build faalde omdat patched dependencies niet werken in cloud environments. We hebben dit opgelost door de patches te verwijderen.

## Vercel CMS Configuratie

### 1. Project Settings
**In Vercel dashboard:**
- **Framework Preset**: Other
- **Root Directory**: `apps/cms`
- **Build Command**: `yarn build:cms:minimal`
- **Install Command**: `yarn install`
- **Output Directory**: Niet van toepassing

### 2. Environment Variabelen

**Essentiële variabelen (kopieer deze):**
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
```

**Nog toe te voegen (genereer zelf):**
```bash
APP_KEYS=key-1,key-2,key-3
API_TOKEN_SALT=jouw-salt
TRANSFER_TOKEN_SALT=jouw-salt
STRAPI_URL=https://jouw-cms-vercel.vercel.app
WEB_URL=https://jouw-frontend-url
```

### 3. Vercel Configuratie Bestand

Maak `apps/cms/vercel.json` aan:

```json
{
  "version": 2,
  "builds": [
    {
      "src": "server.js",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "server.js"
    }
  ],
  "env": {
    "NODE_ENV": "production"
  },
  "functions": {
    "server.js": {
      "maxDuration": 30
    }
  }
}
```

## Deployment Stappen

### 1. Update Repository
```bash
# Commit de changes
git add apps/cms/package.json
git commit -m "Remove patched dependencies for Vercel deployment"
git push origin main
```

### 2. Vercel Setup
1. Ga naar Vercel dashboard
2. "Add New Project" → Import Git Repository
3. Selecteer `MaenoCDA/koenzwebsite`
4. **Root Directory**: `apps/cms`
5. **Framework Preset**: Other

### 3. Configure Build Settings
```bash
Build Command: yarn build:cms:minimal
Install Command: yarn install
```

### 4. Environment Variabelen Toevoegen
Voeg alle variabelen toe uit de lijst hierboven.

### 5. Deploy
Klik op "Deploy"

## Belangrijke Beperkingen

### ❌ Vercel Limitaties voor Strapi CMS:
1. **Serverless Functions** - Strapi wordt serverless (niet ideaal)
2. **Database Connection Pooling** - Kan time-outs geven
3. **File Uploads** - Werken mogelijk niet goed
4. **Admin Panel Performance** - Kan traag zijn
5. **WebSocket Support** - Niet beschikbaar
6. **Cold Starts** - Eerste request kan traag zijn

### ✅ Wat werkt wel:
- API endpoints
- Content management via API
- Database operations
- Basic admin functionality

## Alternatieve Setup (Aanbevolen)

### DigitalOcean + Vercel
**CMS**: DigitalOcean App Platform ($24-48/maand)  
**Frontend**: Vercel (gratis/cheap)

**Voordelen:**
- ✅ Strapi werkt zoals bedoeld
- ✅ Betrouwbare database connecties
- ✅ File uploads werken
- ✅ Admin panel performance
- ✅ Professionele hosting

## Troubleshooting

### Build Fails
```bash
# Lokale test
cd apps/cms
yarn install
yarn build:cms:minimal
```

### Database Connection Issues
```bash
# Test connection string
node -e "
const { Client } = require('pg');
const client = new Client('postgresql://koenz_database_user:tsr6Wm1AqQhAgbF72baR89cZvbIWpueD@dpg-d3o9lrmr433s739tj4qg-a/koenz_database');
client.connect();
console.log('Connected successfully');
"
```

### Performance Issues
- Gebruik `yarn build:cms:ultra-minimal` voor snellere builds
- Monitor Vercel function logs
- Overweeg upgrade naar DigitalOcean voor betere performance

## Monitoring

### Vercel Logs
1. Ga naar Vercel dashboard → Functions tab
2. Check voor errors en warnings
3. Monitor response times

### Health Check
```bash
# Test deployed CMS
curl https://jouw-cms-vercel.vercel.app/health

# Test API
curl https://jouw-cms-vercel.vercel.app/api/content-type-links
```

## Kosten

### Vercel CMS
- **Hobby**: $20/maand
- **Pro**: $100/maand

### Totaal (Frontend + CMS)
- **Budget**: $20-40/maand
- **Production**: $100-120/maand

## Aanbeveling

**Voor Testing**: Vercel CMS is oké voor prototyping  
**Voor Production**: DigitalOcean CMS is veel betrouwbaarder

De keuze is aan jou, maar voor een serieuze application raad ik DigitalOcean aan voor de CMS.
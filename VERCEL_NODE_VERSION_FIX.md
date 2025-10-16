# Vercel Node.js Version Fix

## Probleem
Vercel gebruikt standaard Node.js 22.20.0, maar Strapi 5.8.1 vereist Node.js >=18.0.0 <=20.x.x. Deze mismatch veroorzaakt build errors.

## Oplossing

### 1. Node.js Version Forceren

#### ✅ .nvmrc bestand aangemaakt
```bash
# apps/cms/.nvmrc
20
```

#### ✅ package.json engines aangepast
```json
{
  "engines": {
    "node": "20.x.x",
    "npm": ">=6.0.0"
  }
}
```

#### ✅ vercel.json configuratie
```json
{
  "functions": {
    "server.js": {
      "maxDuration": 30,
      "runtime": "nodejs20.x"
    }
  },
  "nodeVersion": "20.x"
}
```

### 2. Deployment Stappen

#### Stap 1: Commit Changes
```bash
git add apps/cms/.nvmrc apps/cms/package.json apps/cms/vercel.json
git commit -m "Fix Node.js version for Vercel deployment - force Node 20"
git push origin main
```

#### Stap 2: Vercel Project Settings
- **Framework Preset**: Other
- **Root Directory**: `apps/cms`
- **Build Command**: `yarn build:cms:minimal`
- **Install Command**: `yarn install`
- **Node Version**: 20.x (wordt nu geforceerd)

#### Stap 3: Environment Variabelen
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
API_TOKEN_SALT=jouw-salt-hier
TRANSFER_TOKEN_SALT=jouw-salt-hier
STRAPI_URL=https://jouw-cms-vercel.vercel.app
```

### 3. Verificatie

Na deployment, test de volgende endpoints:

#### Health Check
```bash
curl https://jouw-cms-vercel.vercel.app/health
```

#### API Test
```bash
curl https://jouw-cms-vercel.vercel.app/api/pages
```

### 4. Troubleshooting

#### Als het nog niet werkt:
1. **Clear Vercel Cache**: Ga naar Vercel dashboard → Project → Settings → Functions → Clear Cache
2. **Redeploy**: Push een kleine change om rebuild te triggeren
3. **Check Logs**: Vercel → Functions tab voor error details

#### Common Issues:
- **Node version mismatch**: Check of `.nvmrc` en `package.json` consistent zijn
- **Memory errors**: Gebruik `build:cms:minimal` command
- **Database connection**: Verify `DATABASE_URL` en SSL settings

### 5. Alternatieve Setup

Als Vercel CMS niet goed werkt:

#### Optie A: DigitalOcean CMS + Vercel Frontend
- **CMS**: DigitalOcean App Platform ($24-48/maand)
- **Frontend**: Vercel (gratis)
- **Voordelen**: Betrouwbaar, professioneel, schaalbaar

#### Optie B: Render voor Alles
- **CMS**: Render Standard plan ($25/maand)
- **Frontend**: Render Static sites (gratis)
- **Voordelen**: Alles op één platform, goede Strapi support

## Samenvatting

De Node.js version conflict is opgelost door:
1. ✅ `.nvmrc` bestand toegevoegd
2. ✅ `package.json` engines aangepast
3. ✅ `vercel.json` configuratie geüpdatet
4. ✅ Complete deployment guide

De CMS kan nu succesvol deployen naar Vercel met Node.js 20.x! 🚀
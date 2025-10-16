# SSL/TLS Configuration Guide

Deze guide legt uit hoe de nieuwe SSL/TLS configuratie werkt en hoe je deze kunt gebruiken in verschillende omgevingen.

## Probleem Oplossing

De vorige implementatie schakelde **alle SSL-validatie globaal uit**, wat gevaarlijk is voor productie. De nieuwe aanpak:

- ✅ **Environment-gebaseerde configuratie** - SSL-validatie alleen uitgeschakeld in development
- ✅ **Proper certificate management** - Ondersteuning voor productie SSL certificaten
- ✅ **Custom SSL helpers** - Specifieke SSL handling voor externe requests
- ✅ **Docker production setup** - Ready voor deploy op platforms zoals Render

## Configuratie

### Environment Variabelen

```bash
# Development (lokale ontwikkeling)
NODE_ENV=development
NODE_TLS_REJECT_UNAUTHORIZED=0
HTTPS_ENABLED=false

# Production (Render/Cloud)
NODE_ENV=production
NODE_TLS_REJECT_UNAUTHORIZED=true
HTTPS_ENABLED=false  # Set to true als je SSL certs hebt
SSL_KEY_PATH=/path/to/private.key
SSL_CERT_PATH=/path/to/certificate.crt
SSL_CA_PATH=/path/to/ca-bundle.crt
```

### Server Configuratie

De [`config/server.ts`](apps/cms/config/server.ts) bevat nu:

- **Development**: SSL-validatie uitgeschakeld voor lokale ontwikkeling
- **Production**: Strikte SSL-validatie met moderne cipher suites
- **Flexibele HTTPS**: Optionele HTTPS met certificaat paden

## Gebruik

### Lokale Development

```bash
# Start met development SSL instellingen
NODE_ENV=development yarn develop:cms
```

### Productie Deploy

```bash
# Deploy met production SSL instellingen
NODE_ENV=production yarn build:cms
NODE_ENV=production yarn start:cms
```

### Docker Production

```bash
# Gebruik de production Docker setup
docker-compose -f docker-compose.prod.yml up -d
```

## SSL Helper Utility

Gebruik de [`SSLHelper`](apps/cms/src/utils/sslHelper.ts) voor specifieke HTTPS requests:

```typescript
import SSLHelper from '../utils/sslHelper';

// Development: SSL-validatie uitgeschakeld
// Production: SSL-validatie ingeschakeld
const secureClient = SSLHelper.createSecureClient();
const response = await secureClient.get('https://api.example.com');
```

## Render Deployment

Voor deployment op Render:

1. **Environment Variables** instellen in Render dashboard:
   - `NODE_ENV=production`
   - `NODE_TLS_REJECT_UNAUTHORIZED=true`

2. **Build Command**:
   ```bash
   corepack enable && yarn install --immutable && yarn build:cms
   ```

3. **Start Command**:
   ```bash
   yarn --cwd apps/cms start
   ```

## Security Benefits

### ✅ Veilig in Productie
- SSL-certificaatvalidatie altijd ingeschakeld
- Moderne TLS versies (1.2+)
- Sterke cipher suites
- Geen MITM kwetsbaarheden

### ✅ Development Vriendelijk
- SSL-issues in development automatisch opgelost
- Geen handmatige certificaten nodig
- Lokale ontwikkeling werkt out-of-the-box

### ✅ Flexible
- Environment-gebaseerde configuratie
- Custom SSL agents voor specifieke requests
- Ondersteuning voor zowel HTTP als HTTPS

## Troubleshooting

### SSL Errors in Productie
```bash
# Check environment variabelen
echo $NODE_ENV
echo $NODE_TLS_REJECT_UNAUTHORIZED

# Verifieer certificaten
openssl s_client -connect your-domain.com:443
```

### Development Issues
```bash
# Forceer development mode
NODE_ENV=development yarn develop:cms

# Reset node modules
rm -rf node_modules yarn.lock
yarn install
```

## Migration van Oude Setup

1. **Verwijder** oude server.js TLS workarounds
2. **Update** environment variabelen
3. **Gebruik** nieuwe SSL helper voor externe requests
4. **Deploy** met nieuwe Docker setup

De nieuwe configuratie is **backward compatible** en zal niet je bestaande development workflow breken!
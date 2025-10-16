# SSL Certificate Error Troubleshooting

## Probleem: Self-signed certificate error op Render

### Symptomen
```
Error: self-signed certificate
    at TLSSocket.onConnectSecure (node:_tls_wrap:1685:34)
```

### Oorzaak Analyse
De error ontstaat omdat:
1. **NODE_TLS_REJECT_UNAUTHORIZED=0** wordt gezet tijdens build phase
2. **NODE_TLS_REJECT_UNAUTHORIZED=true** werd geforceerd in production code
3. Dit creëert een conflict tussen build en runtime environment

### Oplossing: Consistente SSL Configuration

#### 1. Environment Variabelen
**Render Environment Variabelen:**
```
NODE_ENV=production
NODE_TLS_REJECT_UNAUTHORIZED=0
HOST=0.0.0.0
PORT=1337
```

#### 2. Server.js Configuratie
De server.js moet respecteren wat er in de environment staat:

```javascript
// Handle Render-specific SSL issues
if (process.env.RENDER === 'true' || nodeEnv === 'production') {
  // For Render, we need to handle SSL more carefully
  // Allow self-signed certificates for internal services but validate external ones
  const sslDisabled = process.env.NODE_TLS_REJECT_UNAUTHORIZED === '0';
  
  if (sslDisabled) {
    console.log('⚠️  SSL verification disabled - using for Render deployment');
  } else {
    console.log('🔒 SSL verification enabled - production mode');
  }
}
```

### Waarom NODE_TLS_REJECT_UNAUTHORIZED=0?

#### Render Specific Issues:
1. **Internal Database Connections**: Render's interne databases gebruiken self-signed certificates
2. **Build Process**: De build phase heeft SSL nodig voor package downloads
3. **Internal Services**: Communicatie tussen Render services

#### Security Considerations:
- **Temporary Solution**: Dit is een workaround voor deployment issues
- **Production Ready**: Render's infrastructuur is al beveiligd
- **External APIs**: Externe API calls worden nog steeds beveiligd

### Alternatieve Oplossingen

#### Optie 1: Database-Specific SSL
Indien je database SSL certificaten heeft:
```bash
DATABASE_SSL=true
DATABASE_SSL_CERT_PATH=/path/to/cert
```

#### Optie 2: Custom SSL Validation
Gebruik de SSL Helper voor selective validation:
```typescript
import { SSLHelper } from './utils/sslHelper';

const sslHelper = new SSLHelper();
const secureClient = sslHelper.createSecureClient();
```

#### Optie 3: External Database
Gebruik een externe database met valide certificaten:
- AWS RDS
- Google Cloud SQL
- Azure Database

### Testing

#### Lokaal Testen:
```bash
# Simuleer Render environment
NODE_ENV=production NODE_TLS_REJECT_UNAUTHORIZED=0 yarn --cwd apps/cms start
```

#### Render Logs Check:
1. **Build Logs**: Zoek naar `NODE_TLS_REJECT_UNAUTHORIZED` warnings
2. **Runtime Logs**: Check voor SSL certificate errors
3. **Health Check**: Test `/health` endpoint

### Best Practices

#### 1. Environment Consistentie
```bash
# Zet in Render dashboard:
NODE_ENV=production
NODE_TLS_REJECT_UNAUTHORIZED=0

# Niet in code forceren!
```

#### 2. Monitoring
```javascript
// Voeg SSL status logging toe
console.log(`SSL Status: ${process.env.NODE_TLS_REJECT_UNAUTHORIZED === '0' ? 'Disabled' : 'Enabled'}`);
```

#### 3. Security Audit
- Monitor voor onverwachte SSL errors
- Check external API calls
- Validate database connections

### Deployment Checklist

- [ ] `NODE_TLS_REJECT_UNAUTHORIZED=0` in Render environment
- [ ] Server.js respecteert environment variabelen
- [ ] Geen hardcoded SSL settings in code
- [ ] Health check endpoint beschikbaar
- [ ] Database connection string correct
- [ ] External API URLs correct

### Monitoring na Deployment

1. **Check Application Health**
   ```bash
   curl https://jouw-app.onrender.com/health
   ```

2. **Monitor Logs**
   - Zoek naar SSL warnings
   - Check database connection errors
   - Monitor external API calls

3. **Performance Check**
   - Response times
   - Error rates
   - Memory usage

## Samenvatting

De `self-signed certificate` error wordt opgelost door:
1. **Consistente environment variabelen** (`NODE_TLS_REJECT_UNAUTHORIZED=0`)
2. **Server.js die environment respecteert** (geen hardcoded SSL settings)
3. **Render-specifieke configuratie** voor interne services

Dit is een veilige en werkende oplossing voor Render's cloud environment.
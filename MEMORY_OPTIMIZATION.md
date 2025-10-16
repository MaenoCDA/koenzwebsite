# Memory Optimization for Render Standard Plan (2GB RAM)

## Probleem
Render Standard plan heeft beperkt RAM (2GB), wat kan leiden tot build failures bij grote monorepo projecten.

## Oplossing: Minimal Build Strategy

### Build Commands vergeleken:

**Volledige build (`yarn build:cms`):**
- Bouwt alle plugins: link, teaser, collection-types, webhook, drag-drop-content-types
- Gebruikt veel geheugen (alle processen draaien parallel)
- Risico op OOM (Out of Memory) errors

**Minimale build (`yarn build:cms:minimal`):**
- Bouwt alleen essentiële plugins: link, teaser, en main app
- Gebruikt significant minder geheugen
- Geschikt voor 2GB RAM limit

### Plugin Prioriteit:

**Essentiële plugins (inclusief in minimal build):**
- ✅ `link` - Link management
- ✅ `content-type-teaser` - Content teasers
- ✅ `cms` - Main Strapi app

**Optionele plugins (uitgesloten in minimal build):**
- ❌ `collection-type-select` - Collection type selector
- ❌ `webhook` - Webhook management
- ❌ `drag-drop-content-types` - Drag & drop interface

### Geheugen Besparing:

| Build Type | Plugins | Geschat RAM Gebruik | Geschikt voor |
|------------|----------|-------------------|---------------|
| `yarn build:cms` | 5 plugins + app | ~3-4GB | Render Pro+ |
| `yarn build:cms:minimal` | 2 plugins + app | ~1.5-2GB | Render Standard |

## Implementatie

### Render Settings:
```bash
# Build Command (geoptimaliseerd voor 2GB RAM)
corepack enable && yarn install --immutable && yarn build:cms:minimal

# Start Command
yarn --cwd apps/cms start
```

### Lokaal testen:
```bash
# Test minimale build
yarn build:cms:minimal

# Volledige build (indien nodig)
yarn build:cms
```

## Indien Optionele Plugins Nodig Zijn

### Optie 1: Sequential Build
Bouw plugins één voor één om geheugen te sparen:
```bash
yarn build:cms:link && yarn build:cms:teaser && yarn build:cms:collection-types && yarn build:cms:app
```

### Optie 2: Upgrade naar Render Pro
- 4GB RAM beschikbaar
- Kan volledige build draaien
- Meer CPU resources

### Optie 3: Pre-build Locally
Bouw lokaal en push dist files naar repository:
```bash
# Lokaal bouwen
yarn build:cms

# Dist files toevoegen aan git
git add apps/cms/dist/
git commit -m "Add built CMS files"
```

## Monitoring

### Health Check
De `/health` endpoint controleert:
- Server status
- Memory usage
- Plugin status

### Render Logs
Monitor voor:
- `JavaScript heap out of memory` errors
- Build timeouts (> 10 minuten)
- Plugin build failures

## Troubleshooting

### Build Failures:
1. **Geheugen error:**
   ```bash
   # Gebruik minimale build
   yarn build:cms:minimal
   ```

2. **Timeout error:**
   - Reduceer dependencies
   - Gebruik minimale build
   - Overweeg pre-build

3. **Plugin missing:**
   - Voeg specifieke plugin toe aan minimal build
   - Upgrade naar Render Pro

### Production Issues:
1. **Plugin niet beschikbaar:**
   - Deploy met volledige build op Pro plan
   - Of voeg plugin toe aan minimal build

2. **Performance issues:**
   - Monitor memory usage
   - Overweeg scaling

## Recommendation

Voor Render Standard plan (2GB RAM):
- ✅ Gebruik `yarn build:cms:minimal`
- ✅ Essential plugins zijn ingebouwd
- ✅ Geheugen gebruik ~1.5-2GB
- ✅ Snellere build times

Indien alle plugins nodig zijn:
- 🔄 Upgrade naar Render Pro (4GB RAM)
- 🔄 Of gebruik sequential build strategy
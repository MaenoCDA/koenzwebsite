# Local Development Guide

## Quick Start Commands

### 1. Install Dependencies
```bash
# Navigate to project directory
cd koenz

# Enable corepack and install dependencies
corepack enable && yarn install
```

### 2. Environment Setup
```bash
# Copy environment file
cp .env.example .env

# Edit .env file with your configuration
nano .env
```

### 3. Build Plugins (Required for first time)
```bash
# Build all CMS plugins
yarn build:cms

# OR build minimale plugins (faster)
yarn build:cms:minimal

# OR ultra-minimal (fastest)
yarn build:cms:ultra-minimal
```

### 4. Database Setup
```bash
# If using local database, make sure it's running
# Then import configuration if needed
yarn import:cms
```

### 5. Start Development Server
```bash
# Start CMS in development mode
yarn develop:cms

# OR start web app
yarn develop:web

# OR start both simultaneously
yarn start
```

## Development URLs

After starting the development servers:

- **Strapi CMS Admin**: http://localhost:1337/admin
- **Strapi API**: http://localhost:1337/api
- **Health Check**: http://localhost:1337/health
- **Web App**: http://localhost:3000 (if running)

## Development Workflow

### First Time Setup
```bash
# 1. Clone repository
git clone https://github.com/MaenoCDA/koenzwebsite.git
cd koenzwebsite/koenz

# 2. Install dependencies
corepack enable && yarn install

# 3. Setup environment
cp .env.example .env
# Edit .env with your database settings

# 4. Build plugins
yarn build:cms:minimal

# 5. Start development
yarn develop:cms
```

### Daily Development
```bash
# 1. Pull latest changes
git pull origin main

# 2. Install new dependencies (if any)
yarn install

# 3. Rebuild plugins (if changed)
yarn build:cms:minimal

# 4. Start development server
yarn develop:cms
```

## Plugin Development

### Build Specific Plugin
```bash
# Build only link plugin
yarn build:cms:link

# Build only teaser plugin
yarn build:cms:teaser

# Build specific plugin in watch mode
yarn workspace link dev
```

### Test Plugin Changes
```bash
# 1. Make changes to plugin code
# 2. Rebuild plugin
yarn build:cms:link

# 3. Restart CMS
yarn develop:cms
```

## Database Management

### Local Database Setup
```bash
# Using PostgreSQL (recommended)
createdb kenz_cms

# Using MySQL
mysql -u root -p
CREATE DATABASE kenz_cms;
```

### Database Configuration
Update `.env` file:
```bash
# PostgreSQL
DATABASE_CLIENT=postgres
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_NAME=kenz_cms
DATABASE_USERNAME=your_username
DATABASE_PASSWORD=your_password

# MySQL
DATABASE_CLIENT=mysql
DATABASE_HOST=localhost
DATABASE_PORT=3306
DATABASE_NAME=kenz_cms
DATABASE_USERNAME=your_username
DATABASE_PASSWORD=your_password
```

### Reset Database
```bash
# Drop and recreate database
yarn --cwd apps/cms strapi db:reset

# Import configuration
yarn import:cms
```

## Troubleshooting

### Common Issues

#### 1. Port Already in Use
```bash
# Find process using port 1337
lsof -i :1337

# Kill process
kill -9 <PID>

# OR use different port
PORT=3000 yarn develop:cms
```

#### 2. Build Errors
```bash
# Clear node_modules and reinstall
rm -rf node_modules
rm -rf apps/cms/node_modules
rm -rf apps/web/node_modules
corepack enable && yarn install

# Rebuild plugins
yarn build:cms:minimal
```

#### 3. Database Connection Errors
```bash
# Check database is running
pg_isready -h localhost -p 5432

# Test connection
yarn --cwd apps/cms strapi db:connection:test
```

#### 4. SSL Certificate Errors (should not happen in development)
```bash
# Verify development environment
echo $NODE_ENV
# Should output: development or be unset

# Force development mode
NODE_ENV=development yarn develop:cms
```

### Memory Issues
```bash
# Increase Node.js memory for builds
NODE_OPTIONS="--max-old-space-size=4096" yarn build:cms

# For development with memory issues
NODE_OPTIONS="--max-old-space-size=2048" yarn develop:cms
```

## Development Tips

### 1. Use Ultra-Minimal Build for Faster Development
```bash
yarn build:cms:ultra-minimal
yarn develop:cms
```

### 2. Enable Hot Reload
The development server automatically reloads on file changes.

### 3. Check Logs
```bash
# View Strapi logs in real-time
yarn develop:cms --verbose
```

### 4. Test API Endpoints
```bash
# Test health endpoint
curl http://localhost:1337/health

# Test content types
curl http://localhost:1337/api/content-type-links
```

### 5. Admin Panel Access
- URL: http://localhost:1337/admin
- Create admin user on first visit
- Use for content management during development

## Environment Variables for Development

Create `.env` file:
```bash
NODE_ENV=development
HOST=localhost
PORT=1337

# Database
DATABASE_CLIENT=postgres
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_NAME=kenz_cms
DATABASE_USERNAME=your_username
DATABASE_PASSWORD=your_password

# URLs (for development)
STRAPI_URL=http://localhost:1337
WEB_URL=http://localhost:3000

# Secrets (generate new ones for security)
APP_KEYS=dev-key-1,dev-key-2,dev-key-3
API_TOKEN_SALT=dev-salt
ADMIN_JWT_SECRET=dev-jwt-secret
TRANSFER_TOKEN_SALT=dev-transfer-salt
JWT_SECRET=dev-secret
```

## Useful Scripts

### Package Management
```bash
# Add dependency to main workspace
yarn add package-name

# Add dependency to CMS
yarn workspace cms add package-name

# Add dev dependency
yarn add -D package-name

# Remove dependency
yarn remove package-name
```

### Testing
```bash
# Test SSL configuration
node test-ssl-setup.js

# Test build
yarn build:cms:minimal

# Test start
yarn start:cms
```

### Code Quality
```bash
# Lint code
yarn lint

# Fix linting issues
yarn lint:fix

# Format code
yarn format

# Run all checks
yarn style
```

## Performance

### Speed Up Development
1. Use `yarn build:cms:ultra-minimal` for faster builds
2. Keep database small for development
3. Use SSD for better I/O performance
4. Close unnecessary applications

### Monitor Resources
```bash
# Check memory usage
top -p $(pgrep node)

# Check disk space
df -h

# Check network connections
netstat -an | grep :1337
```

## Next Steps

1. **Setup your local environment** using the commands above
2. **Create content types** in the Strapi admin panel
3. **Test API endpoints** with your custom content
4. **Develop custom plugins** if needed
5. **Deploy to production** when ready (see deployment guides)

Happy coding! 🚀
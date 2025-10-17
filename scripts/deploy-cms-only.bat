@echo off
REM CMS-only deployment script for Vercel (Windows)

echo 🚀 Deploying CMS-only to Vercel...

REM Use CMS-only configuration
echo 📦 Using CMS-only configuration...
vercel --prod --local-config vercel-cms-only.json

echo ✅ CMS deployment completed!
echo 📝 Don't forget to set up these environment variables in Vercel dashboard:
echo    - DATABASE_HOST
echo    - DATABASE_NAME  
echo    - DATABASE_USERNAME
echo    - DATABASE_PASSWORD
echo    - APP_KEYS
echo    - API_TOKEN_SALT
echo    - ADMIN_JWT_SECRET
echo    - TRANSFER_TOKEN_SALT
echo    - JWT_SECRET
echo    - STRAPI_ADMIN_BACKEND_URL

pause
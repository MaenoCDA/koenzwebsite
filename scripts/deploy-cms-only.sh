#!/bin/bash

# CMS-only deployment script for Vercel
echo "🚀 Deploying CMS-only to Vercel..."

# Check if required environment variables are set
if [ -z "$DATABASE_HOST" ]; then
    echo "❌ ERROR: DATABASE_HOST is not set"
    echo "Please set up your environment variables in Vercel dashboard"
    exit 1
fi

# Use CMS-only configuration
echo "📦 Using CMS-only configuration..."
vercel --prod --local-config vercel-cms-only.json

echo "✅ CMS deployment completed!"
echo "📝 Don't forget to set up these environment variables in Vercel:"
echo "   - DATABASE_HOST"
echo "   - DATABASE_NAME"
echo "   - DATABASE_USERNAME"
echo "   - DATABASE_PASSWORD"
echo "   - APP_KEYS"
echo "   - API_TOKEN_SALT"
echo "   - ADMIN_JWT_SECRET"
echo "   - TRANSFER_TOKEN_SALT"
echo "   - JWT_SECRET"
echo "   - STRAPI_ADMIN_BACKEND_URL"
#! /bin/bash
echo "Removing node_modules/@strapi/admin/dist"
rm -rf node_modules/@strapi/admin/dist
echo "Copying packages/strapi-admin-overrides/admin/dist"
cp -R ./packages/strapi-admin-overrides/admin/dist node_modules/@strapi/admin/

echo "Removing node_modules/@strapi/content-manager/dist"
rm -rf node_modules/@strapi/content-manager/dist
echo "Copying packages/strapi-admin-overrides/content-manager/dist"
cp -R ./packages/strapi-admin-overrides/content-manager/dist node_modules/@strapi/content-manager/

@echo off
echo Removing node_modules/@strapi/admin/dist
if exist "node_modules\@strapi\admin\dist" rmdir /s /q "node_modules\@strapi\admin\dist"
echo Copying packages/strapi-admin-overrides/admin/dist
if exist "packages\strapi-admin-overrides\admin\dist" xcopy /E /I /Y "packages\strapi-admin-overrides\admin\dist" "node_modules\@strapi\admin\dist"

echo Removing node_modules/@strapi/content-manager/dist
if exist "node_modules\@strapi\content-manager\dist" rmdir /s /q "node_modules\@strapi\content-manager\dist"
echo Copying packages/strapi-admin-overrides/content-manager/dist
if exist "packages\strapi-admin-overrides\content-manager\dist" xcopy /E /I /Y "packages\strapi-admin-overrides\content-manager\dist" "node_modules\@strapi\content-manager\dist"
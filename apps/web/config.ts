/**
 * App configuration
 */
export const DEBUG_MODE = process.env.NEXT_PUBLIC_DEBUG_MODE === 'true';
export const DEV_ENVIRONMENT = process && process.env.NODE_ENV === 'development';

/**
 * API settings
 */
export const CMS_BASE_URL = process.env.NEXT_PUBLIC_CMS_URL;
export const IMAGE_BASE_URL = process.env.NEXT_PUBLIC_IMAGE_BASE_URL;

/**
 * Locale settings
 */
export const DEFAULT_LOCALES = ['nl'];
export const DEFAULT_LOCALE = 'nl';

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SSLHelper = void 0;
const https_1 = __importDefault(require("https"));
const axios_1 = __importDefault(require("axios"));
/**
 * SSL Helper utility for handling HTTPS requests with proper SSL validation
 */
class SSLHelper {
    /**
     * Create a custom HTTPS agent for development
     */
    static createDevelopmentAgent() {
        if (process.env.NODE_ENV === 'development') {
            return new https_1.default.Agent({
                rejectUnauthorized: false,
                minVersion: 'TLSv1.2'
            });
        }
        return undefined;
    }
    /**
     * Create an Axios instance with proper SSL configuration
     */
    static createSecureClient(baseURL) {
        const httpsAgent = this.createDevelopmentAgent();
        return axios_1.default.create({
            baseURL,
            httpsAgent,
            timeout: 30000,
            headers: {
                'User-Agent': 'Strapi-CMS/1.0'
            }
        });
    }
    /**
     * Make a secure HTTPS request with proper SSL handling
     */
    static async makeSecureRequest(url, options = {}) {
        const client = this.createSecureClient();
        try {
            const response = await client.request({
                url,
                ...options
            });
            return response.data;
        }
        catch (error) {
            console.error('SSL Helper - Request failed:', error.message);
            throw error;
        }
    }
    /**
     * Check if we're in development mode
     */
    static isDevelopment() {
        return process.env.NODE_ENV === 'development';
    }
    /**
     * Check if SSL verification should be enforced
     */
    static shouldEnforceSSL() {
        return process.env.NODE_ENV === 'production';
    }
}
exports.SSLHelper = SSLHelper;
exports.default = SSLHelper;

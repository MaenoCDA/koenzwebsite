import https from 'https';
import axios from 'axios';

/**
 * SSL Helper utility for handling HTTPS requests with proper SSL validation
 */
export class SSLHelper {
  /**
   * Create a custom HTTPS agent for development
   */
  static createDevelopmentAgent() {
    if (process.env.NODE_ENV === 'development') {
      return new https.Agent({
        rejectUnauthorized: false,
        minVersion: 'TLSv1.2'
      });
    }
    return undefined;
  }

  /**
   * Create an Axios instance with proper SSL configuration
   */
  static createSecureClient(baseURL?: string) {
    const httpsAgent = this.createDevelopmentAgent();
    
    return axios.create({
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
  static async makeSecureRequest(url: string, options: any = {}) {
    const client = this.createSecureClient();
    
    try {
      const response = await client.request({
        url,
        ...options
      });
      return response.data;
    } catch (error) {
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

export default SSLHelper;
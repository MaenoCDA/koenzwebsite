import { useFetchClient } from '@strapi/strapi/admin';

import { PLUGIN_ID } from '../pluginId';

const useApi = () => {
  const { get } = useFetchClient();

  const fetchRoutes = async (params?: string) => {
    try {
      const response = await get(`/${PLUGIN_ID}/routes?${params}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching routes:', error);
      throw error;
    }
  };

  return {
    fetchRoutes,
  };
};

export default useApi;

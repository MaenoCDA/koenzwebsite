export default [
  {
    method: 'GET',
    path: '/collection-types',
    handler: 'controller.index',
    config: {
      policies: [],
      auth: false,
    },
  },
  {
    method: 'GET',
    path: '/collection-types/all',
    handler: 'controller.all',
    config: {
      policies: [],
      auth: false,
    },
  },
];

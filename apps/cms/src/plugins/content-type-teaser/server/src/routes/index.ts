export default [
  {
    method: 'POST',
    path: '/content-type-fields',
    handler: 'controller.getFields',
    config: {
      policies: [],
      auth: false,
    },
  },
];

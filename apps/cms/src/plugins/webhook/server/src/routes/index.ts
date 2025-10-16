export default [
  {
    method: 'GET',
    path: '/webhook',
    // name of the controller file & the method.
    handler: 'controller.handleWebhook',
    config: {
      policies: [],
    },
  },
];

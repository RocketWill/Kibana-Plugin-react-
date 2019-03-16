import exampleRoute from './server/routes/example';

export default function (kibana) {
  return new kibana.Plugin({
    require: ['elasticsearch'],
    name: 'siemens',
    uiExports: {
      app: {
        title: 'Siemens',
        description: 'Siemens data visualization',
        main: 'plugins/siemens/app',
        styleSheetPath: require('path').resolve(__dirname, 'public/app.scss'),
      },
      hacks: [
        'plugins/siemens/hack'
      ]
    },

    config(Joi) {
      return Joi.object({
        enabled: Joi.boolean().default(true),
      }).default();
    },

    init(server, options) { // eslint-disable-line no-unused-vars
      // Add server routes and initialize the plugin here
      exampleRoute(server);
    }
  });
}

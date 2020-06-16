module.exports = {
  pluginOptions: {
    prerenderSpa: {
      registry: undefined,
      renderRoutes: [
        '/',
        '/buttons',
        '/spinners',
        '/toggles',
        '/inputs'
      ],
      useRenderEvent: true,
      headless: true,
      onlyProduction: true
    }
  }
}

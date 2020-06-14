module.exports = {
  pluginOptions: {
    prerenderSpa: {
      registry: undefined,
      renderRoutes: [
        '/',
        '/buttons',
        '/spinners',
        '/toggles'
      ],
      useRenderEvent: true,
      headless: true,
      onlyProduction: true
    }
  }
}

module.exports = {
  plugins: [
    'babel-plugin-transform-typescript-metadata',
  ],
  presets: [
    '@vue/app',
    {
      presets: [
        [
          '@vue/app',
          {
            polyfills: [
              'es6.promise',
              'es6.symbol'
            ],
          }
        ]
      ],

    }
  ]
}

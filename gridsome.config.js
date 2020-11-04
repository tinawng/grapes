// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

// Configure plugins here
let plugins = [
  {
    use: 'gridsome-plugin-tailwindcss',
    options: {
      tailwindConfig: './tailwind.config.js',
      /* These are the default options. You don't need to set any options to get going.
        purgeConfig: {},
        presetEnvConfig: {},
        shouldPurge: true,
        shouldImport: true,
        shouldTimeTravel: true
      */
    },
  },
  {
    use: '@gridsome/source-filesystem',
    options: {
      path: './src/assets/data/markdown/**/*.md',
      typeName: 'Post'
    },
  }
]

module.exports = {
  siteName: 'Grapes',
  // Default titleTemplate is '%s - <siteName>'
  // Overrided here to avoid having 'My Site Name - My Site Name' on homepage
  titleTemplate: '%s',
  // Default is './src/favicon.png'
  icon: './src/assets/images/grapes.png',
  plugins,

  // https://github.com/gridsome/gridsome/issues/292#issuecomment-583692119
  chainWebpack: config => {
    config.resolve.alias.set('@images', '@/assets/images')
  },
}
// All configuration options: https://gridsome.org/docs/config

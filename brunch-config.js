exports.paths = {
  // Use `build` instead of `public`.
  public: 'build'
}

exports.files = {
  javascripts: {
    joinTo: 'static/js/master.js'
  },

  stylesheets: {
    joinTo: 'static/css/master.css'
  }
}

exports.modules = {
  // Bootstrap the JS with the module `main.js`.
  autoRequire: {
    'static/js/master.js': ['main']
  },

  // This will clean the common path from modules name.
  // - `app/js/main.js` will become `main.js`.
  // - `app/js/point/point.js` will become `point/point.js`.
  nameCleaner: path => path.replace(/^app\/js\//, '')
}

exports.npm = {
  // Remove the need to `require()` jQuery and Lodash in each module.
  globals: {
    '$': 'jquery',
    '_': 'lodash'
  },

  // Use stylesheets from NPM modules.
  styles: {
    'normalize.css': ['normalize.css']
  }
}

exports.plugins = {
  postcss: {
    processors: [
      require('autoprefixer')(['last 3 versions', '> 1%'])
    ]
  }
}

exports.server = {
  port: 4000
}

exports.paths = {
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
  autoRequire: {
    'static/js/master.js': ['main']
  },

  nameCleaner: path => path.replace(/^app\/js\//, '')
}

exports.npm = {
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

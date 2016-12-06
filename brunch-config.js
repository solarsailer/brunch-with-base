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

exports.server = {
  port: 4000
}

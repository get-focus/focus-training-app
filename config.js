exports.config = {
  sourceMaps: false,
  paths: {
    //"public": '../api/src/main/webapp/static/' //uncomment this lint to copy to your app server static files.
  },
  files: {
    javascripts: {
      joinTo: {
        'javascripts/app.js': /^app/,
        'javascripts/vendor.js': /^(bower_components|vendor)/
      },
      order: {
        before: ['vendor/zepto.js', 'vendor/lodash.js', 'vendor/focus.js', 'vendor/focus-components.js']
      }
    },
    stylesheets: {
      joinTo: 'stylesheets/app.css'
    },
    templates: {
      joinTo: 'javascripts/app.js'
    }
  },
  plugins: {
    uglify: {
      mangle: false,
      compress: {
        global_defs: {
          DEBUG: false
        }
      }
    },
    cleancss: {
      keepSpecialComments: 0,
      removeEmpty: true
    },
    react: {
      harmony: true
    },
    sass: {
      mode: 'ruby'
    },
    appcache: {
      staticRoot: '/static',
      network: ['*'],
      fallback: {}
    },
    browserSync: {
      port: 8080,
      logLevel: "debug"
    }
  }
};
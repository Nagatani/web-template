var dest = './build';
var src = './src';

module.exports = {
  dest: dest,
  src: src,

  ejs: {
    src: [
      src + '/**/*.ejs',
      '!' + src + '/**/_*.ejs'
    ],
    dest: dest
  },

  sass: {
    src: src + '/style/**/*.scss',
    dest: dest + '/css',
    cssnext: {
      browsers: ['last 2 versions']
    },
    minify: true
  },

  css: {
    src: src + '/style/**/*.css',
    dest: dest + '/css',
    minify: true
  },

  js: {
    src: src + '/js/**/*.js',
    dest: dest + '/js',
    uglify: true
  },

  image: {
    src: src + '/image/**/*.+(jpg|jpeg|png|gif|svg)',
    dest: dest + '/image',
    imageminOptions: {
      optimizationLevel: 8
    }
  },

  favicon: {
    src: src + '/favicon.ico',
    dest: dest
  }
}

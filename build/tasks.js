var task = require('bud');

task('bundle', function(t) {
  t.exec('browserify tests/example.js -o tests/bundle.js').then(t.done);
  //t.exec('browserify -r react -t envify -o public/build/js/react.js').then(t.done);
});//
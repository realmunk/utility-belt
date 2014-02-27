/**       
 ** This is just an example of how to use RequireJS with bootstrap and jQuery.
 ** Add any framework you want, or go plain JS to start constructing an app.
 ** For a full referance of what is possible here, see : http://requirejs.org/docs/api.html#config
**/

require.config({
  baseUrl: "../",
  paths: {
    jquery: 'assets/lib/bower/jquery/dist/jquery',
    bootstrap: 'assets/lib/bower/bootstrap/dist/js/bootstrap',
    utilityBelt: 'src/UtilityBelt'
  },
  // shim is used to help us use libraries that aren't using AMD. See requireJS: http://requirejs.org/docs/api.html#config-shim
  shim: {
    bootstrap: {
      deps: ['jquery'],
      exports: '$.fn'
    }
  }
});

require(['utilityBelt']);
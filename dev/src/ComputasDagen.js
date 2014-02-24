require.config({
  baseUrl: "../",
  paths: {
    jquery: 'assets/lib/bower/jquery/jquery',
    bootstrap: 'assets/lib/bower/bootstrap/dist/js/bootstrap',
    utilityBelt: 'src/UtilityBelt'
  },
  shim: {
    bootstrap: {
      deps: ['jquery'],
      exports: '$.fn'
    }
  }
});

require(['utilityBelt']);
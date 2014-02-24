require(

  ['jquery', 'bootstrap'],

  function ($, bootstrap) {    
    $(document).ready(function () {

      var $target = $('#content');

      $('#title').fadeIn(1000);

      $('#text').click(function () {
        $target.html('<h3>It should be asy to create web applications.</h3>');
      });

      $('#movie').click(function () {
        $.getJSON('/REST/movie/Frozen.json', function (data) {
          $target.addClass('active');
          $target.html('<p>' + JSON.stringify(data) + '</p>');
        });
      });

      $('#series').click(function () {
        $.getJSON('/REST/series/walking-dead.json', function (data) {
          $target.addClass('active');
          $target.html('<p>' + JSON.stringify(data) + '</p>');
        });
      });
    });
  }
);
/**
 ** This is the first module
 **
**/

require(

  ['jquery', 'bootstrap'],

  function ($, bootstrap) {    
    $(document).ready(function () {
      /**
       ** DISCLAIMER: this is NOT a good example of how to write a web app or JavaScript.
       ** It is only ment as a demonstration of how you can use the mocking of API calls while developing
       ** if you're interested in building an app, this will be a good read: http://singlepageappbook.com/single-page.html
       ** When writing an app ... a test-runner will do you nothing but good: http://karma-runner.github.io
      **/

      console.log("Go at em bro!");
      var $target = $('#content');

      function formatJSONForView(data) {
        var result = '';

        result += '<img class="img-responsive pull-right" src="' + data.Poster + '"/>';

        $.each(data, function (key, value) {
          result += key + " : " + value;
          result += '<br/>';
        });
        return result;
      }

      $('#title').fadeIn(1000);

      $('#movie').click(function () {
        $.getJSON('/REST/movie/Frozen.json', function (data) {
          $target.html(formatJSONForView(data));
        });
      });

      $('#series').click(function () {
        $.getJSON('/REST/series/walking-dead.json', function (data) {
          $target.html(formatJSONForView(data));
        });
      });
    });
  }
);
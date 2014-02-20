require(

  ['jquery', 'bootstrap'],

  function ($, bootstrap) {    
    // $(document).ready(function () {
    //   $.getJSON('/REST/MOVIES/Frozen.json', function (data) {
    //     var $target = $('#content');
    //     $target.addClass('active');
    //     console.log(data);
    //     $target.append('<h3>' + data.Title + '</h3>');
    //   });
    // });
    $(document).ready(function () {
      $('#title').fadeIn(1000);
    });
  }
);
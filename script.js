// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.



$(function () {

  var timeEl = $('#time'); 
  var saveEl = $('.saveBtn');
  var $hours = $('.hour');
  var currentHour = parseInt(dayjs().format('HH'));

  saveEl.on('click', function() {
    const parentDiv = this.parentNode;
    const savedHr = parentDiv.id;
  })

  var checkTime = function() {

    $hours.each(function() {
      const hour = parseInt($(this).attr('data-hour'));
    
      if (hour < currentHour) {
        $(this).addClass('past');
      } else if (hour === currentHour) {
        $(this).addClass('present');
      } else {
        $(this).addClass('future');
      }

    });
  }
  


  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //

    var displayDateTime = function () {
      var now = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
      timeEl.text(now);
    }

  





displayDateTime();
setInterval(displayDateTime, 1000);
checkTime();
});

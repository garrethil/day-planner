
$(function () {

  var timeEl = $('#time'); 
  var clearTasksBtn = $('.clearBtn');
  var saveEl = $('.saveBtn');
  var $hours = $('.hour');
  var hr9Text = $('#hr9');
  var hr10Text = $('#hr10');
  var hr11Text = $('#hr11');
  var hr12Text = $('#hr12');
  var hr13Text = $('#hr13');
  var hr14Text = $('#hr14');
  var hr15Text = $('#hr15');
  var hr16Text = $('#hr16');
  var hr17Text = $('#hr17');
  var currentHour = parseInt(dayjs().format('HH'));


  clearTasksBtn.on('click', function(){
    localStorage.removeItem('hour-9');
    localStorage.removeItem('hour-10');
    localStorage.removeItem('hour-11');
    localStorage.removeItem('hour-12');
    localStorage.removeItem('hour-13');
    localStorage.removeItem('hour-14');
    localStorage.removeItem('hour-15');
    localStorage.removeItem('hour-16');
    localStorage.removeItem('hour-17');
    getSavedTasks();
  }) 

  
  

  saveEl.on('click', function() {

    var textEl = $(this).prev();
    var savedTask = textEl.val()
    localStorage.setItem(this.id, savedTask);
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



    var getSavedTasks = function() {
      var hour9 = localStorage.getItem('hour-9');
      var hour10 = localStorage.getItem('hour-10');
      var hour11 = localStorage.getItem('hour-11');
      var hour12 = localStorage.getItem('hour-12');
      var hour13 = localStorage.getItem('hour-13');
      var hour14 = localStorage.getItem('hour-14');
      var hour15 = localStorage.getItem('hour-15');
      var hour16 = localStorage.getItem('hour-16');
      var hour17 = localStorage.getItem('hour-17');

      hr9Text.val(hour9);
      hr10Text.val(hour10);
      hr11Text.val(hour11);
      hr12Text.val(hour12);
      hr13Text.val(hour13);
      hr14Text.val(hour14);
      hr15Text.val(hour15);
      hr16Text.val(hour16);
      hr17Text.val(hour17);
    }

    var displayDateTime = function () {
      var now = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
      timeEl.text(now);
    }

  





displayDateTime();
setInterval(displayDateTime, 1000);
checkTime();
getSavedTasks();
});

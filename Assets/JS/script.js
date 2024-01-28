$(function(){
  console.log('DOMDADDY IS READY');
//displays current time
//determines past, present, or future for each line
setInterval(() => {
  $('#currentDay').text(dayjs().format('MMM DD, YYYY hh:mm:ss a'))
  var currentHour = dayjs().format("H")
  $('.time-block').each(function() {
    var timeBlock = $(this).attr('id');
   if (currentHour > timeBlock) {
      $(this).addClass('past'); 
      $(this).removeClass('future');  
      $(this).removeClass('present'); 
    } if (currentHour < timeBlock) {
      $(this).addClass('future'); 
      $(this).removeClass('past');  
      $(this).removeClass('present'); 
    }
    if (currentHour == timeBlock) {
      $(this).addClass('present'); 
      $(this).removeClass('past');  
      $(this).removeClass('future');  
    } 
  })
}, 1000);

//Saves data to local storage
$('.saveBtn').click(function () {
  var eventStuff = $(this).siblings('.description').val(); //named eventstuff because i couldnt think of a better name and now i like it so i refuse to change it
  var timeBlock = $(this).parent().attr('id');
  localStorage.setItem(timeBlock, eventStuff);
})

//Pulls data from local storage
//Loops through elements with the time-block class
//The id of each element is used to target specific textareas AND call saved data and save it to the textarea
$('.time-block').each(function(){
  var timeBlock = $(this).attr('id');
  $(this).children('.description').val(localStorage.getItem(timeBlock))
})
})

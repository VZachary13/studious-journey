var currentDay = $('#currentDay')
var currentHour;




setInterval(() => {
currentDay.text(dayjs().format('MMM DD, YYYY hh:mm:ss a'))
currentHour = dayjs().format("H")
  $('.time-block').each(function() {
    var timeBlock = $(this).attr('id');
  console.log(currentHour)
  console.log(timeBlock)
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

$('saveBtn').click(function (event) {
  var eventStuff = event.target.siblings('.description').val(); //named eventstuff because i couldnt think of a better name and now i like it so i refuse to change it
  var timeBlock = $(this).parent().attr('id');
  localStorage.setItem(timeBlock, eventStuff);
})

$('.time-block').each(function(){
  var timeBlock = $(this).attr('id');
  $(this).children('.description').val(localStorage.getItem(timeBlock))
})

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
// $(function () {
//   // TODO: Add a listener for click events on the save button. This code should
//   // use the id in the containing time-block as a key to save the user input in
//   // local storage. HINT: What does `this` reference in the click listener
//   // function? How can DOM traversal be used to get the "hour-x" id of the
//   // time-block containing the button that was clicked? How might the id be
//   // useful when saving the description in local storage?
//   //
//   // TODO: Add code to apply the past, present, or future class to each time
//   // block by comparing the id to the current hour. HINTS: How can the id
//   // attribute of each time-block be used to conditionally add or remove the
//   // past, present, and future classes? How can Day.js be used to get the
//   // current hour in 24-hour time?
//   //
//   // TODO: Add code to get any user input that was saved in localStorage and set
//   // the values of the corresponding textarea elements. HINT: How can the id
//   // attribute of each time-block be used to do this?
//   //
//   // TODO: Add code to display the current date in the header of the page.
// });

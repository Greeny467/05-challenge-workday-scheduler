

$(document).ready(function () {
  var timespace = $("#currentDay")
  var buttons = $(".saveBtn")
  var now = dayjs();
  var currentHour = now.format("H")

  function setTime() {
    var currentTime = now.format("dddd, h:m A, MMM D YYYY")
    timespace.text(currentTime)
    var timerInterval = setInterval(function() {
      now = dayjs();
      currentTime = now.format("dddd, h:m, MMM D YYYY")
      timespace.text(currentTime)
    }, 30000);
  
  }

  setTime()

  $(".time-block").each(function(){
    var hourId = $(this).attr("id")
    var hourPlace = undefined

    if (hourId == "hour-9"){
      hourPlace = 9
    }
    else if (hourId == "hour-10"){
      hourPlace = 10
    }
    else if (hourId == "hour-11"){
      hourPlace = 11
    }
    else if (hourId == "hour-12"){
      hourPlace = 12
    }
    else if (hourId == "hour-1"){
      hourPlace = 13
    }
    else if (hourId == "hour-2"){
      hourPlace = 14
    }
    else if (hourId == "hour-3"){
      hourPlace = 15
    }
    else if (hourId == "hour-4"){
      hourPlace = 16
    }
    else if (hourId == "hour-5"){
      hourPlace = 17
    }

    if (hourPlace < currentHour){
      $(this).addClass("past")
    }
    else if (hourPlace == currentHour){
      $(this).addClass("present")
    }
    else if (hourPlace > currentHour){
      $(this).addClass("future")
    }
  })

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  $("textarea").each(function(){
    var idforstorage = $(this).parent().attr("id")
    idforstorage = String(idforstorage)

    var storageItem = localStorage.getItem(idforstorage)
    $(this).val(storageItem)
  })
  
  buttons.on("click", function(event){
    var timeSlot = $(event.target).parent()
    var textBox = timeSlot.children("textarea")

    var timeId = timeSlot.attr("id")
    var itemName = String(timeId)


    var description = textBox.val()
    localStorage.setItem(itemName, description)

    $("textarea").each(function(){
      var idforstorage = $(this).parent().attr("id")
      idforstorage = String(idforstorage)
  
      var storageItem = localStorage.getItem(idforstorage)
      $(this).val(storageItem)
    })
  })


  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});

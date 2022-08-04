// Get the current day and show it at the top of the calendar
var currentDayContainer = $("#currentDay");
var calendarContainer = $(".container");
var currentDay = moment();
var currentHour = moment().format("hh");
var past = moment().subtract(1, "hours");
var future = moment().add(1, "hours");
var description;
var targetId;
var targetDescription;

currentDayContainer.html(currentDay.format("[Today is] dddd, MMMM Do YYYY"));

// Build rows
var row = "";

// Sets hours to 9am - 6pm
for (i = 9; i <= 22; i++) {

    // Create objects for time blocks
    var timeBlock = {"id": i, "time": moment().set('hour', i).format("ha"), "description": "desc"};

    // Create rows with three columns
    row = $(`<section class="row time-block">`);
    col1 = $(`<section class="col hour">${moment().set('hour', i).format("ha")}</section>`);
    col1.attr("background-color", "black");
    col2 = $(`<textarea id="description${i}" class="col description"></textarea>`);
    col3 = $(`<section class="col saveBtn"><i id="saveBtn${i}" class="fas fa-save saveIcon"></i></section></section>`);
    row.append(col1);
    row.append(col2);
    row.append(col3);

    // Add all info as a new hour block
    calendarContainer.append(row);
    
    // Check for localStorage and set to DOM
    $(".description").each(function() {
        var idToGet = "#" + $(this)[0].id;
        var localStorageStuff = localStorage.getItem(idToGet);
        $(idToGet).val(localStorageStuff);
    });
    
    description = $(`${i}`).val();

    // Color current hour red
    if (moment().set('hour', i).format("hh") === currentHour) {
        col2.addClass("present");
    }
    
    // Color past gray
    else if (moment().set('hour', i).format("hh") < currentHour) {
        col2.addClass("past");
    
    // Color future green
    } else if (moment().set('hour', i).format("hh") > currentHour) {
        col2.addClass("future");
    };
};

// Save description and time to storage
var saveIcon = $(".saveIcon");

saveIcon.click(function(event){
    targetId = event.target.id.match(/\d+/).toString();
    targetDescription = "#description" + targetId;
    localStorage.setItem(targetDescription, $(targetDescription).val());
  });



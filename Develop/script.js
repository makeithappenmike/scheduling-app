// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar - done
// WHEN I scroll down
// THEN I am presented with time blocks for standard business hours - done
// WHEN I view the time blocks for that day
// THEN each time block is color-coded to indicate whether it is in the past, present, or future
// WHEN I click into a time block
// THEN I can enter an event
// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist

// Get the current day and show it at the top of the calendar
var currentDayContainer = $("#currentDay");
var calendarContainer = $(".container");
var currentDay = moment();
var currentHour = moment().format("ha");
var past = moment().subtract(1, "hours");
var futre = moment().add(1, "hours");
console.log("current hour:", currentHour);
console.log("test", moment().set('hour', 9).format("ha"));
currentDayContainer.html(currentDay.format("[Today is] dddd, MMMM Do YYYY"));
// currentDayContainer.innerHTML = currentDay.format("dddd, MMMM Do YYYY");

// Build rows
var row = "";

// Set's hours to 9am - 6pm
for (i = 9; i <= 18; i++) {
    row = $(`<section class="row time-block">`);
    col1 = $(`<section class="col hour">${moment().set('hour', i).format("ha")}</section>`);
    col1.attr("background-color", "black");
    col2 = $(`<textarea class="col description">DESCRIPTION</textarea>`);
    col3 = $(`<section class="col saveBtn"><i class="fas fa-save"></i></section></section>`);
    row.append(col1);
    row.append(col2);
    row.append(col3);
    calendarContainer.append(row);
    console.log(i);
    // Color current hour red
    if (moment().set('hour', i).format("ha") === currentHour) {
        col1.attr("style", "background-color: red");
    }
    
    // Color past gray
    else if (moment().set('hour', i).format("ha") < currentHour) {
        col1.attr("style", "background-color: gray");
    
        // Color future green
    } else if (moment().set('hour', i).format("ha") > currentHour) {
        col1.attr("style", "background-color: green");
    };
};



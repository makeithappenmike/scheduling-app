// Get the current day and show it at the top of the calendar
var currentDayContainer = $("#currentDay");
var calendarContainer = $(".container");
var currentDay = moment();
var currentHour = moment().format("ha");
var past = moment().subtract(1, "hours");
var future = moment().add(1, "hours");
var description;
console.log("current hour:", currentHour);
console.log("test", moment().set('hour', 9).format("ha"));
currentDayContainer.html(currentDay.format("[Today is] dddd, MMMM Do YYYY"));
// currentDayContainer.innerHTML = currentDay.format("dddd, MMMM Do YYYY");

// Build rows
var row = "";

// Sets hours to 9am - 6pm
for (i = 9; i <= 18; i++) {
    if (localStorage.getItem(`timeSlot${i}`) != null) {
        JSON.parse(localStorage.getItem(`timeSlot${i}`));
        // JSON.parse(localStorage.getItem(`description${i}`));
    };
    row = $(`<section class="row time-block">`);
    col1 = $(`<section class="col hour">${moment().set('hour', i).format("ha")}</section>`);
    col1.attr("background-color", "black");
    col2 = $(`<textarea id="description${i}" class="col description">DESCRIPTION</textarea>`);
    col3 = $(`<section id="saveBtn${i}" class="col saveBtn"><i class="fas fa-save saveIcon"></i></section></section>`);
    row.append(col1);
    row.append(col2);
    row.append(col3);
    calendarContainer.append(row);
    description = $("#description").val();
    var entry = {"time": "", "description": ""};
    // localStorage.setItem(`timeSlot${i}`, i);
    // localStorage.setItem(`description${i}`, description);

    // Color current hour red
    if (moment().set('hour', i).format("ha") === currentHour) {
        col2.attr("style", "background-color: red");
    }
    
    // Color past gray
    else if (moment().set('hour', i).format("ha") < currentHour) {
        col2.attr("style", "background-color: gray");
    
        // Color future green
    } else if (moment().set('hour', i).format("ha") > currentHour) {
        col2.attr("style", "background-color: green");
    };
};

// Save description and time to storage
var saveIcon = $(".saveIcon");
saveIcon.click(function(event){
    localStorage.setItem(`timeSlot${i}`, i);
    console.log("target", event.target.id);
    console.log($(`description${i}`).val());
    localStorage.setItem(`description${i}`, description);
    console.log("click");
  });



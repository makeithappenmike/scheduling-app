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
        localStorage.getItem(`timeSlot${i}`);
        localStorage.getItem(`description${i}`);
    };
    row = $(`<section class="row time-block">`);
    col1 = $(`<section class="col hour">${moment().set('hour', i).format("ha")}</section>`);
    col1.attr("background-color", "black");
    col2 = $(`<textarea id="description${i}" class="col description">${description}${i}</textarea>`);
    col3 = $(`<section class="col saveBtn"><i id="description${i}saveBtn" class="fas fa-save saveIcon"></i></section></section>`);
    row.append(col1);
    row.append(col2);
    row.append(col3);
    calendarContainer.append(row);
    description = $(`#description${i}`).val();
    var entry = {"time": "", "description": ""};
    console.log("description", $(`description${i}`).val());

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
    var targetId = event.target.id;
    var iDnumber = targetId[11] + targetId[12];
    console.log("num", iDnumber);
    if (targetId.length > 18) {
        var targetDescription = targetId.slice(0, -7);
    };
    console.log("target", targetDescription);
    localStorage.setItem(`description${i}`, targetDescription);
    var descToAdd = $(`#description${i}`).val();
    // localStorage.setItem(`description${i}`, "new thing");
    // console.log("target", event.target.id);
    // console.log("description", $(`description${i}`).val());
    // localStorage.setItem(`description${i}`, description);
    console.log("click");
  });



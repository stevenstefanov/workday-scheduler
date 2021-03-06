// current day -> top of calendar

var currentDay = $("#currentDay");
var currentTime = moment().hour();
var tasks = [$("#8").text(), $("#9").text(), $("#10").text(), $("#11").text(), $("#12").text(), $("#13").text(), $("#14").text(), $("#15").text(), $("#16").text(), $("#17").text()];

function headerTime() {
    var today = moment().format("dddd, MMMM Do h:mm a");
    currentDay.text(today);
};

function loadSavedTasks() {
    for (var i = 8; i < 18; i++) {
        var task = JSON.parse(localStorage.getItem("i"));
        $("#i").val(task);
    }
};

function colorCoding() {
    for (var i = 8; i < 18; i++) {
        var hour = (moment(tasks[i], "H a"));
        if (currentTime == hour) {
            document.getElementById(i).classList.add("present");  
        }
        else if (currentTime > hour) {
            document.getElementById(i).classList.add("past");
        }
        else {
            document.getElementById(i).classList.add("future");
        }
    }
}



// button
    // get a reference to all of the save buttons $(".saveBtn")
    // 01-Ins_jQuery-Elements

    // add a click handler to each save button using .on() method
    // 03-Ins_Click-Events

    // traverse the DOM to get the values we need to store in localStorage .parent() .sibling()
    // 07 Dom Traverse

    // setItems in localStorage to save the values
    // 04

// handle color coding
    // use moment library to get the current hour
    // momentsjs.com/docs/#/get-set/hour

    // get a reference to all timeblocks

    // loop through the timeblocks
    //unit 03

    // get the data-hour value timeblocks[i].data("hour")

    // if, esle - condition we compare the currentHour with timeBlock < (past), === (present), else (future)

    // adding or removing (or both) classes

// get data from local storage and populate the timeblocks
    // getItem

    // reference to the textarea (id) 

    // .val()

    // approach
    // -> $("textarea");
    // -> loop
    // -> get a reference to the id of parent()
    // -> .val() = localStorage.getItem(parentID)



// call the colorCoding function
    // setInterval -> .15000
    // unit 04

function init() {
    loadSavedTasks();
    headerTime();
    colorCoding();
}
    
init();
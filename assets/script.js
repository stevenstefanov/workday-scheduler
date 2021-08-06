//Current day -> top of calendar

var currentDay = $("#currentDay");
var currentTime = moment().hour();
var tasks = [$("#0").text(), $("#1").text(), $("#2").text(), $("#3").text(), $("#4").text(), $("#5").text(), $("#6").text(), $("#7").text(), $("#8").text(), $("#9").text()];

init();

//Shows time and the current date at the top of the page
function headerTime() {
    var today = moment().format("dddd, MMMM Do h:mm a");
    currentDay.text(today);
};

//Pulls any saved tasks from local storage into the fields
$(document).ready(function(){
    $(".textarea").each(function(){
        var id = $(this).attr("id");
        var value = localStorage.getItem(id);
        $(this).val(value);
    });
  });

//Shows whether a task is in the past, present, or future
function colorCoding() {
    for (var i = 0; i < tasks.length; i++) {
        var hour = (moment(tasks[i], "H a"));
        var currentHour = moment(currentTime, "H a");
        if (currentHour.isSame(hour)) {
            document.getElementById(i+10).classList.add("present");  
        }
        else if (currentHour.isAfter(hour)) {
            document.getElementById(i+10).classList.add("past");
        }
        else {
            (currentHour.isBefore(hour))
            document.getElementById(i+10).classList.add("future");
        }
    }
};

//When the "Save" button is clicked, any text entered in field is saved to local storage
$(".btn-primary").on("click", handleSave)

function handleSave(event){
  var value = $(this).siblings(".textarea").val();
  var key = $(this).siblings(".textarea").attr("id");
  localStorage.setItem(key, value);
}

function init() {
    headerTime();
    setInterval (colorCoding(), 1500);
};
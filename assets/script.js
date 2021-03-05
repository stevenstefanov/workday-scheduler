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

// current day -> top of calendar
    // moment library - .format()
    // 25-Ins_Moment-Format

// call the colorCoding function
    // setInterval -> .15000
    // unit 04
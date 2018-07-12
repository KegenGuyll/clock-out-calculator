$(document).ready(function(){
    $('.timepicker').timepicker();
  });

function Calculate() {

    //finds the clock-in time
    var clockINtime = document.getElementById("clock-in").value;
    console.log(clockINtime);

    //finds the lunch-out time
    var lunchOUTtime = document.getElementById("lunch-out").value;
    console.log(lunchOUTtime);

    //finds the lunch-in time
    var lunchINtime = document.getElementById("lunch-in").value;
    console.log(lunchINtime);


    //takes the first two numbers from the string
    var clockInHours = clockINtime.slice(0,2);
    var clockInMin = clockINtime.slice(3,6);

    var lunchOutHours = lunchOUTtime.slice(0,2);
    var lunchOutMin = lunchOUTtime.slice(3,6);

    var lunchInHours = lunchINtime.slice(0,2);
    var lunchInMin = lunchINtime.slice(3,6);


    //converts hours to min
    var clockInMin1 = clockInHours * 60;
    var lunchMin1 = lunchOutHours * 60;
    var lunchMin2 = lunchInHours * 60;

    // adds all the min together
    var clockInMinTotal     = Number(clockInMin) + Number(clockInMin1);
    var clockOutMealTotal   = Number(lunchOutMin) + Number(lunchMin1);
    var clockInMealTotal    = Number(lunchInMin) + Number(lunchMin2);

    var clockOutMin         = clockInMinTotal + 480;
    var mealTime            = clockInMealTotal - clockOutMealTotal;
    var clockOutMinFinal    = mealTime + clockOutMin;

    var clockOutHour = parseInt(clockOutMinFinal / 60);
    var clockOutMin = clockOutMinFinal % 60;

    var clockOutHourFinal = clockOutHour - 12;

    var clockOutTime = clockOutHourFinal + ":" + clockOutMin;
    console.log(clockOutTime);

    document.getElementById("time").innerHTML = clockOutTime + " PM";





}
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
    //finds the clock-out time
    var clockOUTtime = document.getElementById("clock-out").value;
    console.log(clockOUTtime);

    //finds the time you spend at lunch




    //takes the hours from lunchout
    var lunchOutHH = lunchOUTtime.slice(0,2);
    console.log("lunchOUTHH:  = " + lunchOutHH);

    var lunchMIN = lunchOutHH * 60;

    var lunchOutMM = lunchOUTtime.slice(3,5);
    console.log("lunchOUTMM:  = " + lunchOutMM);

    lunchMIN += +lunchOutMM;
    console.log("total min " + lunchMIN);


    var lunchInHH = lunchINtime.slice(0,2);
    console.log("lunchINHH:  = " + lunchInHH);

    var lunchMINtemp = lunchInHH * 60;

    var lunchInMM = lunchOUTtime.slice(3,5);
    console.log("lunchINMM:  = " + lunchInMM);

    lunchMINtemp -= +lunchInMM;
    console.log("total min " + lunchMINtemp);

    lunchMINtemp -= +lunchMIN;
    console.log("total min " + lunchMIN);

    //var lunchIN = moment(lunchINtime, "HH:mm");
    //console.log("lunchOUTtime  = " + lunchOUT);
    //console.log("lunchINtime  = " + lunchIN);

    //console.log(JSON.stringify({ lunchOUTtime }));
    //lunchtime = lunchOUT - lunchIN;
    //console.log(lunchtime);

}
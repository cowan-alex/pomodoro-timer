var button = $('button');
// var countdownDate = new Date("00:25:00").getTime();
let time = 0
// 25 * 60;
var oneSecond;

function setTime() {
  time = 25 * 60;
   oneSecond = setInterval(anotherFunction, 1000);
}


function anotherFunction() {
  let distance = time

  var minutes = Math.floor(distance / 60);
  var seconds = Math.floor((distance % 60));

  console.log(time);
  $("#time").text(minutes + "m " + seconds + "s");

  if (time <=0) {
    clearInterval(oneSecond);
    document.getElementById("time").innerHTML = "Time for a break!";
  }
  time--;
}

button.on("click", setTime);

// your code here:

var seconds = 0;
var timerId;


$("#start").click(function(){
timerId = setInterval(updateTime, 1000)
return seconds;
})

$("#pause").click(function(){
clearInterval(timerId);
console.log("pause fired");
})

$("#reset").click(function(){
  clearInterval(timerId);
  seconds = 0;
  $('#timer').html("Stop Watch")
})

function updateTime () {
seconds = seconds + 1;
$('#timer').html('Time Elapsed: ' + seconds);
console.log(seconds);
}

// 8. Inside your click handler for the reset button...
//   - Stop the timer using `clearInterval()`.
//   - Reset the timer.
//   - Replace the time in your HTML with the original "Stop Watch" text.

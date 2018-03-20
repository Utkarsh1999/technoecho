var i = -1;
var txt = ' Welcome to the world of Tech'; /* The text */
var speed = 100; /* The speed/duration of the effect in milliseconds */
//document.getElementById("one").onload = function(){typeWriter()}
function typeWriter() {
  if (i < txt.length) {
    document.getElementById("one").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
//window.alert("script loaded");
typeWriter();
//
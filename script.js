let myHour = document.getElementById("myHour");
let myMin = document.getElementById("myMin");
document.getElementById("myStop").style.display = "none";
setInterval(() => {
  let date = new Date();
  document.getElementById("hrr").innerHTML = date.getHours();
  document.getElementById("hrr").style.padding = "8px";
  document.getElementById("hrr").style.borderRadius = "5px";
  document.getElementById("hrr").style.backgroundColor = "blue";
  document.getElementById("hrr").style.color = "white";
  document.getElementById("hrr").style.boxShadow = "2px 2px rgba(0,0,0,0.5)";
  // document.getElementById("col").innerHTML = " : "

  document.getElementById("min").innerHTML = date.getMinutes();
  document.getElementById("min").style.padding = "8px";
  document.getElementById("min").style.borderRadius = "5px";
  document.getElementById("min").style.backgroundColor = "blue";
  document.getElementById("min").style.color = "white";
  document.getElementById("min").style.boxShadow = "2px 2px rgba(0,0,0,0.5)";
  // date.getMinutes().length == 1?document.getElementById("min").innerHTML ="0" + date.getMinutes() :document.getElementById("min").innerHTML = date.getMinutes()
  // document.getElementById("cok").innerHTML = " : "
  document.getElementById("sec").innerHTML = date.getSeconds();
  document.getElementById("sec").style.padding = "8px";
  document.getElementById("sec").style.borderRadius = "5px";
  document.getElementById("sec").style.backgroundColor = "blue";
  document.getElementById("sec").style.color = "white";
  document.getElementById("sec").style.boxShadow = "2px 2px rgba(0,0,0,0.5)";
  document.getElementById("ampm").style.padding = "8px";
  document.getElementById("ampm").style.borderRadius = "5px";
  document.getElementById("ampm").style.backgroundColor = "blue";
  document.getElementById("ampm").style.color = "white";
  document.getElementById("ampm").style.boxShadow = "2px 2px rgba(0,0,0,0.5)";
  // date.getMinutes().length === 1?document.getElementById("sec").innerHTML ="0" + date.getSeconds() :document.getElementById("min").innerHTML = date.getSeconds()
  date.getHours() >= 12
    ? (document.getElementById("ampm").innerHTML = "PM")
    : (document.getElementById("ampm").innerHTML = "AM");
  if (myHour.value == date.getHours() && myMin.value == date.getMinutes()) {
    document.getElementById("myAudio").play();
    document.getElementById("show").innerHTML = "Alarm Ringing";
    document.getElementById("show").style.color = "red";
    document.getElementById("myStop").style.display = "block";
    document.getElementById("myStop").style.margin = "auto";
    document.getElementById("myStart").style.display = "none";
  }
}, 1000);
function myAlarm() {
  myHour.value === "" && myMin.value === ""
    ? (document.getElementById("show").innerHTML = "Please set an Alarm")
    : (document.getElementById("show").innerHTML =
        "An Alarm has been set to " + myHour.value + ":" + myMin.value);
}
function myEnd() {
  document.getElementById("myAudio").pause();
  document.getElementById("show").innerHTML = "You can set an Alarm";
  document.getElementById("show").style.color = "blue";
  document.getElementById("myStart").style.display = "block";
  document.getElementById("myStop").style.display = "none";
  document.getElementById("myStart").style.margin = "auto";
}
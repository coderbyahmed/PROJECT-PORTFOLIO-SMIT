var hours = document.getElementById("hours");
var minutes = document.getElementById("minutes");
var seconds = document.getElementById("seconds");
var date = document.getElementById("date");
var dayNameEl = document.getElementById("dayName");
var months = document.getElementById("month");
var years = document.getElementById("year");
var ampm = document.getElementById("ampm");



function showZero() {
  hours.innerHTML = "00";
  minutes.innerHTML = "00";
  seconds.innerHTML = "00";
  date.innerHTML = "00";
  months.innerHTML = "-----";
  years.innerHTML = "0000";
  ampm.innerHTML = "";
  dayNameEl.innerHTML = "------";


}

var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

var monthNames = [
  "January","February","March","April","May","June",
  "July","August","September","October","November","December"
];

function updateTime() {
  var dateObject = new Date();

  var hour = dateObject.getHours();
  var realHour = hour;

  var minute = dateObject.getMinutes();
  var second = dateObject.getSeconds();

  var day = dateObject.getDate();
  var year = dateObject.getFullYear();

  var dayIndex = dateObject.getDay();
  var dayName = dayNames[dayIndex];

  var monthIndex = dateObject.getMonth();
  var month = monthNames[monthIndex];

  var am = "AM";

  if (hour >= 12) {
    am = "PM";
    if (hour > 12) hour = hour - 12;
  }

  if (hour == 0) hour = 12;

  if (hour < 10) hour = "0" + hour;
  if (minute < 10) minute = "0" + minute;
  if (second < 10) second = "0" + second;
  if (day < 10) day = "0" + day;

  hours.innerHTML = hour;
  minutes.innerHTML = minute;
  seconds.innerHTML = second;
  date.innerHTML = day;
  months.innerHTML = month;
  years.innerHTML = year;
  ampm.innerHTML = am;
  dayNameEl.innerHTML = dayName;




}

showZero();

setTimeout(function () {
  updateTime();
  setInterval(updateTime, 1000);
}, 1000);

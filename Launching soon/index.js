var countDown = new Date("Nov 20, 2024 00:00:00").getTime();
var x = setInterval(function () {
  var now = new Date().getTime();
  var distance = countDown - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.querySelector(".days_num").innerHTML = days;
  document.querySelector(".hours_num").innerHTML = hours;
  document.querySelector(".minutes_num").innerHTML = minutes;
  document.querySelector(".seconds_num").innerHTML = seconds;
}, 1000);

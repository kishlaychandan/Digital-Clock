let hour = document.querySelector(".hour");
let minute = document.querySelector(".minute");
let second = document.querySelector(".second");
let daynight = document.querySelector(".daynight");

setInterval(() => {
  let date = new Date();
//   console.log(date);
  let hr = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
//   console.log(hr, min, sec);
  let ampm = "";
  if (hr > 12) {
    hr = hr - 12;
    hr="0"+hr;
    ampm = "PM";
  } else {
    hr="0"+hr;
    ampm = "AM";
  }
  if(min<10)min="0"+min;
  if(sec<10)sec="0"+sec;
  
  hour.innerText = hr;
  minute.innerText = min;
  second.innerText = sec;
  daynight.innerText = ampm;
}, 500);

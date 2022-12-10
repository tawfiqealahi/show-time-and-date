function myTime() {
  const myDate = new Date();
  let hr,
    min =
      myDate.getMinutes() < 10
        ? "0" + myDate.getMinutes()
        : myDate.getMinutes();
  let sec =
    myDate.getSeconds() < 10 ? "0" + myDate.getSeconds() : myDate.getSeconds();
  let M = myDate.getHours() > 12 ? "PM" : "AM";

  if (myDate.getHours() == 0) {
    hr = 12;
  } else if (myDate.getHours() > 12) {
    hr = myDate.getHours() - 12;
  } else {
    hr=myDate.getHours();
  };

  const currentTime=hr +" : "+ min + " : "+ sec +" : ";

  document.getElementsByClassName("H")[0].innerHTML =currentTime;
  document.getElementsByClassName("M")[0].innerHTML=M;


  const dayList = [
    "sunday",
    "monday",
    "tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "saturday"
  ];
  const monthList=[
    "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
  ];
  const day = myDate.getDate();

  const currentDate = dayList[myDate.getDay()] + ", " + monthList[myDate.getMonth()] + day; 
  document.getElementsByClassName("date")[0].innerHTML=currentDate

};

myTime();
setInterval(function(){
    myTime();
}, 1000);



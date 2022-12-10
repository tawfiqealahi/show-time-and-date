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

  if (myDate.getHours()==0){
    hr =12;
  }else if(myDate.getHours()<12){

  }


}

const dayList = [
  "saturday",
  "sunday",
  "monday",
  "tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
];

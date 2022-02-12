
setInterval(setClock, 1000);

const hourhand = document.querySelector('.hour');
const minutehand = document.querySelector('.minute');
const secondhand = document.querySelector('.second');





function setClock() {
     const currentDate = new Date();
     const secondsRatio = currentDate.getSeconds() / 60;
     const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
     const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;

     setRotation(secondhand, secondsRatio);
     setRotation(minutehand, minutesRatio);
     setRotation(hourhand, hoursRatio);
}

function setRotation(element, rotationratio) {
   element.style.setProperty('--rotation', rotationratio * 360 )
}

setClock();
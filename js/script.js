const newSpring = '1 Mar 2022';

const daysElement = document.getElementById('days'),
      hoursElement = document.getElementById('hours'),
      minsElement = document.getElementById('mins'),
      secondsElement = document.getElementById('seconds'),
      timeInterval = setInterval(countdown,1000);

function countdown(){
    const newSpringDate = new Date(newSpring);
    const currentDate = new Date();

    const totalSeconds = (newSpringDate - currentDate) / 1000;

    if(totalSeconds <= 0 ) {
        clearInterval(timeInterval);
        document.querySelector('.countdown').innerHTML = '<h1 class="countdown__title">Spring is here already</h1>';
    }

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysElement.innerHTML = days;
    hoursElement.innerHTML = formatTime(hours);
    minsElement.innerHTML = formatTime(minutes);
    secondsElement.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? (`0${time}`) : time;
}

//initial call
countdown();

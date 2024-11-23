const daysValue = document.querySelector('#days');
const hoursValue = document.querySelector('#hours');
const minutesValue = document.querySelector('#mins');
const secondsValue = document.querySelector('#secs');
const countdownDateTime = new Date(2024, 11, 5, 0, 0, 0).getTime();

function countDown() {
    const dateTimeNow = new Date().getTime();
    let difference = countdownDateTime - dateTimeNow;

    
    let daysValueNumber = Math.floor(difference / (1000 * 60 * 60 * 24));
    
    let hoursValueNumber = Math.floor(difference / (1000 * 60 * 60) % 24);
    
    let minutesValueNumber = Math.floor(difference / (1000 * 60) % 60);
    
    let secondsValueNumber = Math.floor(difference / (1000) % 60);

    daysValue.innerHTML = daysValueNumber;
    hoursValue.innerHTML = hoursValueNumber;
    minutesValue.innerHTML = minutesValueNumber;
    secondsValue.innerHTML = secondsValueNumber;

    console.log(daysValueNumber, hoursValueNumber, minutesValueNumber, secondsValueNumber);
}

setInterval(countDown,1000);
 
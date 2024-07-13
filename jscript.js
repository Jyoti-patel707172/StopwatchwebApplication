var isStop = true;
var har = 0;
var min = 0;
var sec = 0;
var milsec = 0;
var lapCount = 1;
var timerInterval;

function start() {
    if (isStop) {
        isStop = false;
        timerInterval = setInterval(timer, 10); // Run timer every 10 milliseconds
    }
}

function timer() {
    milsec++;
    if (milsec == 100) {
        milsec = 0;
        sec++;
    }

    if (sec == 60) {
        sec = 0;
        min++;
    }

    if (min == 60) {
        min = 0;
        har++;
    }

    // Display format with milliseconds
    let formattedTime = `${har.toString().padStart(2, '0')} : ${min.toString().padStart(2, '0')} : ${sec.toString().padStart(2, '0')} : ${milsec.toString().padStart(2, '0')}`;
    document.getElementById('startimes').innerHTML = `<h1>${formattedTime}</h1>`;
}

function stop() {
    clearInterval(timerInterval); // Stop the timer interval
    isStop = true;
}

function reset() {
    clearInterval(timerInterval); // Stop the timer interval
    isStop = true;
    milsec = 0;
    sec = 0;
    min = 0;
    har = 0;
    lapCount = 1;
    document.getElementById('startimes').innerHTML = `<h1>00 : 00 : 00 : 00</h1>`;
    document.getElementById('lapList').innerHTML = ''; // Clear lap list on reset
}

function recordLap() {
    // Format the current time into a string
    let lapTime = `${har.toString().padStart(2, '0')} : ${min.toString().padStart(2, '0')} : ${sec.toString().padStart(2, '0')} : ${milsec.toString().padStart(2, '0')}`;

    // Create a new <p> element to display the lap time
    let lapItem = document.createElement('p');
    lapItem.textContent = `Lap ${lapCount}: ${lapTime}`;

    // Append the new <p> element to the 'lapList' div
    let lapListDiv = document.getElementById('lapList');
    lapListDiv.appendChild(lapItem);

    // Increment the lap count for the next lap
    lapCount++;
}
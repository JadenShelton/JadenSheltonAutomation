function updateClock() {
    const clockDiv = document.getElementById('zuluClockDisplay');
    const now = new Date();

    //add date in UTC
    const year = now.getUTCFullYear();
    const month = (now.getUTCMonth() + 1).toString().padStart(2, '0');
    const day = now.getUTCDate().toString.padStart(2, '0');
    // Format the time with leading zeros
    const hours = now.getUTCHours().toString().padStart(2, '0');
    const minutes = now.getUTCMinutes().toString().padStart(2, '0');
    const seconds = now.getUTCSeconds().toString().padStart(2, '0');
    
    const timeString = `${month} ${day}, ${year} at ${hours}:${minutes}:${seconds} Z`;

    clockElement.textContent = timeString;
}

// Call the function once to display immediately
updateClock();

// Then, update the clock every 1000 milliseconds (1 second)
setInterval(updateClock, 1000);


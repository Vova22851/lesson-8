const clockElement = document.getElementById('clock');
const selectTimeZona = document.getElementById('timeZona');
const local_timezona = document.getElementById('local')

function updateClock() {
    const now = new Date();
    const timeZona = parseInt(selectTimeZona.value, 10);
    const hours = String(now.getUTCHours() + timeZona).padStart(2, "0");
    const minutes = String(now.getUTCMinutes()).padStart(2, "0");;
    const seconds = String(now.getUTCSeconds()).padStart(2, "0");
    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
    local_timezona.textContent = Intl.DateTimeFormat().resolvedOptions().timeZone;
}

// let timeZona = 0;

//console.log(timeZona);

setInterval(updateClock, 1000);

selectTimeZona.addEventListener('change', updateClock(timeZona));


// const difrent_time_UTC = new Date().getTimezoneOffset() / 60;
// const timeZona = Intl.DateTimeFormat().resolvedOptions().timeZone;
// const timeZona2 = new Date().DateTimeFormat().resolvedOptions().timeZone;
// document.getElementById('clock2').textContent = timeZona2;
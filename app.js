const hours = document.querySelector(".hour");
const min = document.querySelector(".minute");
const sec = document.querySelector(".second");


function tiktak() {
    let second = new Date().getSeconds();
    let minute = new Date().getMinutes();
    let hour = new Date().getHours();

    hours.style.transform = `rotate(${180 + hour * 30}deg)`;
    sec.style.transform = `rotate(${180 + second * 6}deg)`;
    min.style.transform = `rotate(${180 + minute * 6}deg)`;
}

setInterval(tiktak, 1000);
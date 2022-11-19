const analogSecond = document.querySelector(".analog-second");
const analogMinute = document.querySelector(".analog-minute");
const analogHour = document.querySelector(".analog-hour");

setInterval(() => {
    const second = new Date().getSeconds();
    const minute = new Date().getMinutes();
    const hour = new Date().getHours();

    analogSecond.style.transform = `translate(-100%, -100%) rotate(${
        second * 6
    }deg)`;
    analogMinute.style.transform = `translate(-100%, -100%) rotate(${
        minute * 6
    }deg)`;
    analogHour.style.transform = `translate(-100%, -100%) rotate(${
        30 * hour + minute / 2
    }deg)`;

    if (second * 6 >= 360) analogSecond.style.transition = "none";
    else analogSecond.style.transition = "";
    // document.querySelector("#a").innerHTML = second / 6;
}, 500);

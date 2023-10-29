let daily = document.querySelector(".daily");
let weekly = document.querySelector(".weekly");
let monthly = document.querySelector(".monthly");
let currentTime = document.querySelectorAll(".time");
let previousTime = document.querySelectorAll(".previous-time");

daily.addEventListener("click", () => {
  fetch("data.json")
    .then((res) => res.json())
    .then((data) => {
      data.forEach((da, index) => {
        currentTime[index].textContent = da.timeframes.daily.current + "hrs";
        previousTime[index].textContent = da.timeframes.daily.previous + "hrs";
      });
    });
});

weekly.addEventListener("click", () => {
  fetch("data.json")
    .then((res) => res.json())
    .then((data) => {
      data.forEach((da, index) => {
        currentTime[index].textContent = da.timeframes.weekly.current + "hrs";
        previousTime[index].textContent = da.timeframes.weekly.previous + "hrs";
      });
    });
});

monthly.addEventListener("click", () => {
  fetch("data.json")
    .then((res) => res.json())
    .then((data) => {
      data.forEach((da, index) => {
        currentTime[index].textContent = da.timeframes.monthly.current + "hrs";
        previousTime[index].textContent =
          da.timeframes.monthly.previous + "hrs";
      });
    });
});

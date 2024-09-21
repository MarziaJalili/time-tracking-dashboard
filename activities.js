const dataList = [
    {
        class: "work",
        title: "Work",
        timeframes: {
            daily: {
                current: 5,
                previous: 7
            },
            weekly: {
                current: 32,
                previous: 36
            },
            monthly: {
                current: 103,
                previous: 128
            }
        }
    },
    {
        class: "play",
        title: "Play",
        timeframes: {
            daily: {
                current: 1,
                previous: 2
            },
            weekly: {
                current: 10,
                previous: 8
            },
            monthly: {
                current: 23,
                previous: 29
            }
        }
    },
    {
        class: "study",
        title: "Study",
        timeframes: {
            daily: {
                current: 0,
                previous: 1
            },
            weekly: {
                current: 4,
                previous: 7
            },
            monthly: {
                current: 13,
                previous: 19
            }
        }
    },
    {
        class: "exercise",
        title: "Exercise",
        timeframes: {
            daily: {
                current: 1,
                previous: 1
            },
            weekly: {
                current: 4,
                previous: 5
            },
            monthly: {
                current: 11,
                previous: 18
            }
        }
    },
    {
        class: "social",
        title: "Social",
        timeframes: {
            daily: {
                current: 1,
                previous: 3
            },
            weekly: {
                current: 5,
                previous: 10
            },
            monthly: {
                current: 21,
                previous: 23
            }
        }
    },
    {
        class: "self-care",
        title: "Self Care",
        timeframes: {
            daily: {
                current: 0,
                previous: 1
            },
            weekly: {
                current: 2,
                previous: 2
            },
            monthly: {
                current: 7,
                previous: 11
            }
        }
    }
]

const activities = document.querySelector(".activities");
const dailyBtn = document.querySelector(".daily-button")
const weeklyBtn = document.querySelector(".weekly-button")
const monthlyBtn = document.querySelector(".monthly-button")


let activitiesHTML = '';

dataList.forEach(item => {
    activitiesHTML += `
    <div class="back-ground ${item.class}">
        <section>
          <div class="title">
            <span>${item.title}</span>
            <img src="images/icon-ellipsis.svg" alt="">
          </div>
          <div class="amount-of-time">
            <em class="current-amount">${item.timeframes.weekly.current}hrs</em>
            <span class="pervious-amount">Last Week - ${item.timeframes.weekly.previous}hrs</span>
          </div>
        </section>
      </div>
    `
});

activities.innerHTML = activitiesHTML;

// daily

dailyBtn.addEventListener("click", () => {
    dailyBtn.classList.add("active");
    monthlyBtn.classList.remove("active")
    weeklyBtn.classList.remove("active")
    generate("daily")
});

//monthly

monthlyBtn.addEventListener("click", () => {
    monthlyBtn.classList.add("active");
    dailyBtn.classList.remove("active")
    weeklyBtn.classList.remove("active")

    generate("monthly")
});

// weekly

weeklyBtn.addEventListener("click", () => {
    weeklyBtn.classList.add("active");
    monthlyBtn.classList.remove("active")
    dailyBtn.classList.remove("active")

    generate('weekly');
});

// DRY code ladies and gentlemen

function generate(period) {
    activitiesHTML = '';
    dataList.forEach(item => {
        activitiesHTML += `
        <div class="back-ground ${item.class}">
            <section>
              <div class="title">
                <span>${item.title}</span>
                <img src="images/icon-ellipsis.svg" alt="">
              </div>
              <div class="amount-of-time">
                <em class="current-amount">${item.timeframes[period].current}hrs</em>
                <span class="pervious-amount">Last Week - ${item.timeframes[period].previous}hrs</span>
              </div>
            </section>
          </div>
        `
    });
    activities.innerHTML = activitiesHTML;
}


const total_counter = document.querySelector(".total-views");
async function updateTotalViews() {
    let response = await fetch("https://api.soominchae.net/getAndUpdateTotalViews")
    console.log(response)
    let data = await response.json()
    console.log(data);
    total_counter.innerHTML = `Views : ${data}`
}

const today_counter = document.querySelector(".today-views");
async function updateTodayViews() {
    let response = await fetch("https://api.soominchae.net/getAndUpdateTodayCount" )
    console.log(response)
    let data = await response.json()
    console.log(data);
    today_counter.innerHTML = `Today : ${data}`
}

updateTotalViews()

updateTodayViews()
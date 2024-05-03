fetch('s3://soomin-cloud-resume-challenge/key.json')
    .then((response) => response.json())
    .then((json) => console.log(json))


const total_counter = document.querySelector(".total-views");
async function updateTotalViews() {
    let response = await fetch("https://api.soominchae.net/getAndUpdateTotalViews", {
        method: "GET",
        withCredentials: true,
        headers: custom_headers
    });
    console.log(response)
    let data = await response.json()
    console.log(data);
    total_counter.innerHTML = `Views : ${data}`
}

const today_counter = document.querySelector(".today-views");
async function updateTodayViews() {
    let response = await fetch("https://api.soominchae.net/getAndUpdateTodayCount" , {
        method: "GET",
        withCredentials: true,
        headers: custom_headers
    });
    console.log(response)
    let data = await response.json()
    console.log(data);
    today_counter.innerHTML = `Today : ${data}`
}

updateTotalViews()

updateTodayViews()
const counter = document.querySelector(".counter-number");
async function updateCounter() {
    let response = await fetch("https://api.soominchae.net/views");
    let data = await response.json()
    console.log(data);
    counter.innerHTML = `Views : ${data}`
}

updateCounter()
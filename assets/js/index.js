const counter = document.querySelector(".counter-number");
async function updateCounter() {
    let response = await fetch("https://6xy2i2ssxc.execute-api.ap-northeast-2.amazonaws.com/dev");
    let data = await response.json()
    console.log(data);
    counter.innerHTML = `Views : ${data}`
}

updateCounter()
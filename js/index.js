// Your code goes here
document.querySelector("body").addEventListener("keydown", () => {
    document.querySelector("body").style.backgroundColor = "blue";
})

document.querySelector("body").addEventListener("keyup", () => {
    document.querySelector("body").style.backgroundColor = "white";
})

document.querySelector("h2").addEventListener("mouseenter", () => {
    document.querySelector(".intro").style.backgroundColor = "hotpink";
})

document.querySelector("h2").addEventListener("mouseleave", () => {
    document.querySelector(".intro").style.backgroundColor = "";
})

document.querySelector("img").addEventListener("click", () => {
    document.querySelector("img").setAttribute("src", "img/destination.jpg");
})

document.querySelector('img').addEventListener("dblclick", () => {
    document.querySelector("img").setAttribute("src", "img/fun-bus.jpg");
})

document.querySelector('body').addEventListener('wheel', () => {
    document.querySelector('body').style.color = 'red';
})

document.querySelector('.content-destination img').addEventListener('contextmenu', () => {
    document.querySelector('.content-destination img').setAttribute("src", "img/fun-bus.jpg");
})

document.querySelector(".img-content img").addEventListener('pointerover', (e) => {
    console.log("Pointer moved in!");
    e.stopPropagation();
});

document.querySelector(".img-content").addEventListener('pointerover', () => {
    console.log("Pointer moved in!")
});

document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === 'visible') {
        document.querySelector('title').textContent = 'Fun Bus Travel Agency';
    } else {
        document.querySelector('title').textContent = 'Come Back To This Tab!';
    }
})

document.querySelectorAll('a').forEach(item => item.addEventListener("click", (event) => {
    event.preventDefault();
}));
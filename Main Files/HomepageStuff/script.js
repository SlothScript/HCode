root = document.querySelector(":root")
ele = document.getElementById("ul")
setInterval(() => {
    console.log(getComputedStyle(root).getPropertyValue("--size"))
    console.log(getComputedStyle(root).getPropertyValue("--movefar"))
}, 200)

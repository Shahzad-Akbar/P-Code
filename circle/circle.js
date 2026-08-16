const canvas = document.getElementById("canvas")
const cxt = canvas.getContext('2d')
let num;
let circleCount = 0;
let circles = [];



canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

canvas.addEventListener("click", function (event) {

    if (circleCount >= 2) {
        cxt.clearRect(0, 0, canvas.width, canvas.height);
        circleCount = 0
        circles = [];

    } else {
        num = Math.floor(Math.random() * 100);            //for random radius
        const circle = {
            x: event.clientX,
            y: event.clientY,
            radius: num
        };

        circles.push(circle);

        drawCircle(circle.x, circle.y, circle.radius)
        circleCount++;
    }

    if (circles.length === 2) {
        checkInterSection(circles[0], circles[1]);
    }

});

function drawCircle(x, y, radius) {
    console.log(num);
    cxt.beginPath()
    cxt.arc(x, y, radius, 0, Math.PI * 2);
    cxt.stroke()

}

function checkInterSection(circle1, circle2) {
    dx = circle1.x - circle2.x;
    dy = circle1.y - circle2.y;

    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance <= (circle1.radius + circle2.radius)) {
        console.log("Yes Intersection")
    } else {
        console.log("No Intersecting");
    }

}

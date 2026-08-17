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

    if (distance > (circle1.radius + circle2.radius)) {
        console.log("Not Intersection");
        console.log("0 Pixel intersection");
    } else {
        console.log("Yes Intersecting");

        // Create temporary canvases
    const canvas1 = document.createElement("canvas");
    const canvas2 = document.createElement("canvas");

    canvas1.width = canvas.width;
    canvas1.height = canvas.height;

    canvas2.width = canvas.width;
    canvas2.height = canvas.height;

    const ctx1 = canvas1.getContext("2d");
    const ctx2 = canvas2.getContext("2d");

    // Draw first circle
    ctx1.beginPath();
    ctx1.arc(
        circle1.x,
        circle1.y,
        circle1.radius,
        0,
        Math.PI * 2
    );
    ctx1.fill();

    // Draw second circle
    ctx2.beginPath();
    ctx2.arc(
        circle2.x,
        circle2.y,
        circle2.radius,
        0,
        Math.PI * 2
    );
    ctx2.fill();

    // Get pixel data
    const pixels1 = ctx1.getImageData(
        0,
        0,
        canvas.width,
        canvas.height
    ).data;

    const pixels2 = ctx2.getImageData(
        0,
        0,
        canvas.width,
        canvas.height
    ).data;

    let intersectionPixels = 0;

    // Every pixel has 4 values:
    // R, G, B, Alpha
    for (let i = 3; i < pixels1.length; i += 4) {

        const alpha1 = pixels1[i];
        const alpha2 = pixels2[i];

        // Pixel exists in BOTH circles
        if (alpha1 > 0 && alpha2 > 0) {
            intersectionPixels++;
        }
    }

    console.log("Intersection pixels:", intersectionPixels)
    }

}

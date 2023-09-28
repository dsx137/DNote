// 获取canvas元素和绘图上下文
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var validSwipeLength = 100;
var validSwipeTime = 300;

function Point(x, y) { return { "x": x, "y": y } }

var currentPoint;
var startPoint;
var endPoint;
var tStart = null;
var tEnd = null;

var menuButton;

// 设置圆的颜色和线宽
var startColor = "#f7808078"
var endColor = "#83f3c08c";

// 设置大圆和小圆的半径
var bigRadius = 50;
var smallRadius = 0;
var speed = 1;
var interval = 1;

var timer = null;

//------------------------

function clearGraph() {
    clearInterval(timer);
    smallRadius = 0;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function updateValues(e) {
    if (e.touches[0]) currentPoint = Point(e.touches[0].clientX, e.touches[0].clientY);
    if (e.changedTouches[0]) endPoint = Point(e.changedTouches[0].clientX, e.changedTouches[0].clientY);
    if (endPoint && startPoint) vector = Point(endPoint.x - startPoint.x, endPoint.y - startPoint.y);
    menuButton = document.getElementsByClassName("book")[0];
}

function isValidSwipe(e) { updateValues(e); return vector.x < 0 == menuButton.classList.contains("with-summary") && Math.abs(vector.x) > validSwipeLength }

// 定义一个函数绘制两个同心圆
function drawCircles(context, x, y) {
    context.beginPath();
    context.fillStyle = "white";
    context.strokeStyle = startColor;
    context.lineWidth = 15;
    smallRadius = (Date.now() - tStart) / validSwipeTime * bigRadius;
    if (smallRadius >= bigRadius) {
        smallRadius = bigRadius;
        context.strokeStyle = endColor;
    }
    // 绘制大圆
    context.beginPath();
    context.arc(x, y, bigRadius, 0, Math.PI * 2, false);
    context.stroke();
    // 绘制小圆
    context.beginPath();
    context.arc(x, y, smallRadius, 0, Math.PI * 2, false);
    context.fill();
    context.closePath();
}

function canvas_arrow(context, fromx, fromy, tox, toy) {
    context.beginPath();
    tox = (Math.abs(vector.x) - bigRadius - 20) / Math.abs(vector.x) * (tox - fromx) + fromx;
    toy = (Math.abs(vector.x) - bigRadius - 20) / Math.abs(vector.x) * (toy - fromy) + fromy;
    var headLength = 20; // 箭头的长度
    var angle = Math.atan2(toy - fromy, tox - fromx); // 箭头的角度
    // 绘制直线
    context.moveTo(fromx, fromy);
    context.lineTo(tox, toy);
    // 绘制箭头
    context.lineTo(tox - headLength * Math.cos(angle - Math.PI / 6), toy - headLength * Math.sin(angle - Math.PI / 6));
    context.moveTo(tox, toy);
    context.lineTo(tox - headLength * Math.cos(angle + Math.PI / 6), toy - headLength * Math.sin(angle + Math.PI / 6));
    context.stroke();
    context.closePath();
}

//-----------------------------

document.addEventListener("touchstart", function (e) {
    //获取第一个触点的横坐标
    startPoint = Point(e.touches[0].clientX, e.touches[0].clientY);
    tStart = Date.now();
    updateValues(e);
});

// 监听touchmove事件
document.addEventListener("touchmove", function (e) {
    updateValues(e);
    clearInterval(timer);
    if (isValidSwipe(e)) {
        timer = setInterval(function () {
            if (smallRadius < bigRadius) {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                drawCircles(ctx, currentPoint.x, currentPoint.y);
                // 绘制箭头
                // canvas_arrow(ctx, startPoint.x, startPoint.y, endPoint.x, endPoint.y);
            }
        }, interval);
    }
});

//添加touchend事件监听器
document.addEventListener("touchend", function (e) {
    updateValues(e);
    tEnd = Date.now();
    if (tEnd - tStart > validSwipeTime) {
        if (isValidSwipe(e)) {
            menuButton.classList.toggle("with-summary");
        }
    }
    clearGraph();
});

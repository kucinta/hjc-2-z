## 1704 HTML5 Canvas
2017.05.24 [HTML/CSS]

Test it http://eldus.github.io/1704 or http://io.github.eldus.com:81/1704

HTML5 provides a "Canvas API" for drawing primitives such as line, arc, rectangle, as well as supporting transformation, just like any 2D Graphics API.

```
<canvas id="canvas" height="200" width="300">Canvas is not supported</canvas>

<script>
window.addEventListener("load", draw, true);
function draw() {
  // Retrieve the canvas element and set its CSS style
  var canvas = document.getElementById("canvas");
  canvas.width  = 500;
  canvas.height = 300;
  // Get the 2D drawing context for the canvas element
  var context = canvas.getContext("2d");

  // Draw a Rectangle using the rect primitive
  context.fillStyle = "rgb(0, 255, 0)";
  context.fillRect(30, 80, 100, 120);  // x, y, width, height
  context.strokeStyle = "#0000FF";
  context.strokeRect(30, 80, 100, 120);
}
</script>
```

#### More
D3: Data-Driven Documents: D3 (or D3.js) is a JavaScript library for visualizing data using web standards. D3 helps you bring data to life using SVG, Canvas and HTML. D3 combines powerful visualization and interaction techniques with a data-driven approach to DOM manipulation, giving you the full capabilities of modern browsers and the freedom to design the right visual interface for your data.

https://github.com/d3/d3

#### Reference

* https://www3.ntu.edu.sg/home/ehchua/programming/webprogramming/HTML5.html
* https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial
* https://html.spec.whatwg.org/#the-canvas-element

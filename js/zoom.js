$(document).ready(function () {
  var scroll_zoom = new ScrollZoom($("#container"), 4, 0.5);
});

function ScrollZoom(container, max_scale, factor) {
  var target = container.children().first();
  var size = { w: target.width(), h: target.height() };
  var pos = { x: 0, y: 0 };
  var zoom_target = { x: 0, y: 0 };
  var zoom_point = { x: 0, y: 0 };
  var scale = 1;
  target.css("transform-origin", "0 0");
  target.on("mousewheel DOMMouseScroll", scrolled);

  function scrolled(e) {
    var offset = container.offset();
    zoom_point.x = e.pageX - offset.left;
    zoom_point.y = e.pageY - offset.top;

    e.preventDefault();
    var delta = e.delta || e.originalEvent.wheelDelta;
    if (delta === undefined) {
  
      delta = e.originalEvent.detail;
    }
    delta = Math.max(-1, Math.min(1, delta)); 

    zoom_target.x = (zoom_point.x - pos.x) / scale;
    zoom_target.y = (zoom_point.y - pos.y) / scale;
  
    scale += delta * factor * scale;
    scale = Math.max(1, Math.min(max_scale, scale));

    pos.x = -zoom_target.x * scale + zoom_point.x;
    pos.y = -zoom_target.y * scale + zoom_point.y;

    if (pos.x > 0) pos.x = 0;
    if (pos.x + size.w * scale < size.w) pos.x = -size.w * (scale - 1);
    if (pos.y > 0) pos.y = 0;
    if (pos.y + size.h * scale < size.h) pos.y = -size.h * (scale - 1);

    update();
  }

  function update() {
    target.css(
      "transform",
      "translate(" +
        pos.x +
        "px," +
        pos.y +
        "px) scale(" +
        scale +
        "," +
        scale +
        ")"
    );
  }
}

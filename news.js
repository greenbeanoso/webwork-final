var imgs = document.querySelectorAll("#map img:not(:nth-of-type(0)");
var text = document.querySelectorAll("#map p");
var dots = document.querySelectorAll("#map button");
var index = 0;
var timeoutID;
dots.forEach((dot, i) => {
  dot.addEventListener("click", function () {
    index = i;
    upd();
  });
});

function upd() {
  clearTimeout(timeoutID);
  timeoutID = setTimeout(function () {
    index++;
    upd();
  }, 2500);
  if (index < 0) index = imgs.length - 1;
  index = index % imgs.length;
  for (var i = 0; i < imgs.length; i++) {
    imgs[i].style.opacity = "0";
    text[i].style.opacity = "0";
  }
  imgs[index].style.opacity = "1";
  text[index].style.opacity = "1";
}
upd();

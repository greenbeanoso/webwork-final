var imgs = document.querySelectorAll("#imgcar img");
var ttext = document.querySelectorAll("#imgcar p:nth-of-type(even)");
var btext = document.querySelectorAll("#imgcar p:nth-of-type(odd)");
var dots = document.getElementsByName("dots");
var btns = document.querySelectorAll("#control button");
var index = 0;
var timeoutID;
dots.forEach((dot, i) => {
  dot.addEventListener("click", function () {
    index = i;
    upd();
  });
});
btns[0].addEventListener("click", function () {
  index--;
  upd();
});
btns[1].addEventListener("click", function () {
  index++;
  upd();
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
    ttext[i].style.opacity = "0";
    btext[i].style.opacity = "0";
  }
  imgs[index].style.opacity = "1";
  ttext[index].style.opacity = "1";
  btext[index].style.opacity = "1";
  dots[index].checked = true;
}
upd();

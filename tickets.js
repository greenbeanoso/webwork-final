var dragzone = document.querySelector("#dragzone");
var dropzone = document.querySelector("#dropzone");
var answer = [];
var userAnswer = "";
function sub(event) {
  event.preventDefault();
  fetch("tickets.php");
  dropzone.childNodes.forEach((element) => {
    userAnswer += element.textContent;
  });
  console.log(answer, userAnswer);
  if (answer == userAnswer) {
    fetch(
      `tickets.php?fristName=${GV("fristName")}&lastName=${GV(
        "lastName"
      )}&phone=${GV("phone")}&password=${GV("password")}`
    ).then(() => {
      location.href = "home.html";
    });
  } else {
    alert("驗證碼錯誤");
  }
}
function gen() {
  dragzone.innerHTML = ``;
  dropzone.innerHTML = ``;
  for (let i = 0; i < 4; i++) {
    answer.push(Math.floor(Math.random() * 10));
    dragzone.innerHTML += `<div>${answer[i]}</div>`;
  }
  answer = answer.sort().join("");
  $("#dragzone div").draggable({
    revert: "invalid",
    connectToSortable: "#dropzone",
  });
  $("#dropzone").sortable({
    update: function (event, ui) {
      $("#dropzone div").draggable({
        active: false,
      });
    },
  });
}
gen();
function GV(el) {
  return document.getElementsByName(el)[0].value;
}

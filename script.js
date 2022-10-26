console.log('show it"s working or not');
let music = new Audio("ting.wav");
let wonImage = new Image("wongif.gif");
let isGameOver = false;

let turn = " X";

// Function to change the turn
const changeTurn = () => {
  return turn === " X" ? " O" : " X";
};

//Function to Check Win
const checkWin = () => {
  let textBox = document.getElementsByClassName("textBox");
  let wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  wins.forEach((e) => {
    if (
      textBox[e[0]].innerText === textBox[e[1]].innerText &&
      textBox[e[2]].innerText === textBox[e[1]].innerText &&
      textBox[e[0]].innerText !== ""
    ) {
      document.querySelector(".info").innerText =
        textBox[e[0]].innerText + " - WINNER";
      document
        .querySelector(".imgBox")
        .getElementsByTagName("img")[0].style.height = "200px";
      isGameOver = true;
    }
  });
};

//Game Logic

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
  let textBox = element.querySelector(".textBox");
  element.addEventListener("click", () => {
    if (textBox.innerText === "") {
      textBox.innerText = turn;
      turn = changeTurn();
      music.play();
      checkWin();
      if (!isGameOver) {
        document.getElementsByClassName("info")[0].innerText =
          "Turn For" + turn;
      }
    }
  });
});

// function reset() {
//   console.log("show click working");
//   document.getElementsByClassName("textBox").innerText = "";
// }
reset.addEventListener("click", () => {
  let textBox = document.querySelectorAll(".textBox");
  Array.from(textBox).forEach((element) => {
    element.innerText = "";
  });
  document
    .querySelector(".imgBox")
    .getElementsByTagName("img")[0].style.height = "0px";
  turn = "X";
  isGameOver = false;
  document.getElementsByClassName("info")[0].innerText = "Turn For" + turn;
});

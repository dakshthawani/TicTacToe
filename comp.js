var buttons = [];
var pot = "X";
var started = false;
var xWon = 0;
var zeroWon = 0;
var buttonIds = [];
var gameWon = false;

function clicking() {

$("button").click(function() {
  if(!started) {
  if(!buttons.includes(this)) {
  $(this).text("X");
  pot = "0";
  buttons.push(this);
  buttonIds.push(this.id);
  $(this).addClass("element0");
  $(".chance").text("0's Turn")
  var currentButton = this.id;
  winCheck();
  commaOne(pot);
  animatePress(currentButton);
}}
})
}
function commaOne(inputOne){
  if(!started) {
  var zaza = Math.floor(Math.random()*9) + 1;
  console.log(zaza);
  if(!(buttonIds).includes("a" + zaza)) {
    var buttonsNew = $("#a" + zaza);
    setTimeout(function(){
    $("#a" + zaza).text("0");
    pot = "X";
    },250);
    buttonIds.push("a" + zaza);
    buttons.push("#a" + zaza)[0];
    $("#a" + zaza).addClass("element1");
    winCheck();
    $(".chance").text("X's Turn")
    var currentButton = (zaza);
    animatePress(currentButton);
  }
  else if(buttonIds.length == 9){
    console.log("tie");
  }
  else{
    commaOne(pot);
  }
}
}

clicking();

$(".restart").click(function(){
  animatePress(this.id);
  $("button").html("&nbsp;");
  $(".winner").text("");
  $(".chance").text("X's Turn");
  $("button").removeClass("element1");
  $("button").removeClass("element0");
  started = false;
  pot = "X";
  buttons = [];
  buttonIds = [];
  gameWon = false;
  // clicking();
})


function winCheck(){
  if (gameWon) {
    return;
  }
  var winningSamples = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ];
  for (let i = 0; i < winningSamples.length; i++) {
    var combination = winningSamples[i];
    var values = [];
    for (let j = 0; j < combination.length; j++) {
      values.push($("button").eq(combination[j]).text());
    }
    if (values.every(function(value){
        return value === "X"
      })) {
      $(".winner").text("X Wins");
      xWon++;
      $(".score").html("X wins : "+  "&nbsp;"+ " " + xWon+ "<br>" + "0 wins : " + "&nbsp;" + " " + zeroWon);
      gameWon = true;
      startOver();
      return;
    }
    else if(values.every(function(value){
        return value === "0"
      })) {
      $(".winner").text("0 Wins");
      zeroWon++;
      $(".score").html("X wins : "+  "&nbsp;"+ " " + xWon+ "<br>" + "0 wins : " + "&nbsp;" + " " + zeroWon);
      gameWon = true;
      startOver();
      return;
    }
}

if(buttonIds.length == 9 && $(".winner").text() == ""){
  console.log("tie");
  $(".winner").text("It's a tie!");
  startOver();
}
}

function startOver(){
  buttons = [];
  started = true;
  if (!started) {
    winCheck();
    started = true;
  }
  
}

function animatePress(choosen){
  $("#" + choosen).addClass("pressed")
  setTimeout(function(){
    $("#" + choosen).removeClass("pressed")
  }, 100)
}


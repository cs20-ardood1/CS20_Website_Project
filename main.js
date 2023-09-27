// Website Project

// Button Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  let score = 0;
  score += markQuestion(1, "5");
  score += markQuestion(2, "NBA");
  score += markQuestion(3, "overtime");
  score += markQuestion(4, "30");

  // Raw score output
  if (score === 0) {
    document.getElementById("output").innerHTML = 0;
  } else if (score === 1) {
    document.getElementById("output").innerHTML = 1;
  } else if (score === 2) {
    document.getElementById("output").innerHTML = 2;
  } else if (score === 3) {
    document.getElementById("output").innerHTML = 3;
  } else {
    document.getElementById("output").innerHTML = 4;
  }

  // Celebration output
  if (score === 0) {
    document.getElementById("output3").innerHTML =
      "You didn't solve any of the questions correctly, Try again";
  } else if (score === 1) {
    document.getElementById("output3").innerHTML = "Better luck next time";
  } else if (score === 2) {
    document.getElementById("output3").innerHTML = "You passed";
  } else if (score === 3) {
    document.getElementById("output3").innerHTML = "Well done";
  } else {
    document.getElementById("output3").innerHTML = "Excellent, you got 4/4";
  }

  //Percentage output
  if (score === 0) {
    document.getElementById("output2").innerHTML = "0%";
  } else if (score === 1) {
    document.getElementById("output2").innerHTML = "25%";
  } else if (score === 2) {
    document.getElementById("output2").innerHTML = "50%";
  } else if (score === 3) {
    document.getElementById("output2").innerHTML = "75%";
  } else {
    document.getElementById("output2").innerHTML = "100%";
  }
}

function markQuestion(qNum, correctAnswer) {
  let score = 0;
  let answer = document.getElementById(`ans-${qNum}`).value.toLowerCase();

  if (answer === correctAnswer.toLowerCase()) {
    document.getElementById(
      `feedback-${qNum}`
    ).innerHTML = `<p class='purple'>Correct</p>`;
    score = 1;
  } else {
    document.getElementById(
      `feedback-${qNum}`
    ).innerHTML = `<p class='purple'>Incorrect</p>`;
    score = 0;
  }
  return score;
}

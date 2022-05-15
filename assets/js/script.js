function checkers() {
  var correct = ["Java", "Nairobi", "2", "4", "15", "30", "66", "30", "5", "5"];
  var score = 0;
  var question1 = document.querySelector(
    'input[name="question1"]:checked'
  ).value;
  var question2 = document.querySelector(
    'input[name="question2"]:checked'
  ).value;
  var question3 = document.querySelector(
    'input[name="question3"]:checked'
  ).value;
  var question4 = document.querySelector(
    'input[name="question4"]:checked'
  ).value;
  var question5 = document.querySelector(
    'input[name="question5"]:checked'
  ).value;
  var question6 = document.querySelector(
    'input[name="question6"]:checked'
  ).value;
  var question7 = document.querySelector(
    'input[name="question7"]:checked'
  ).value;
  var question8 = document.querySelector(
    'input[name="question8"]:checked'
  ).value;
  var question9 = document.querySelector(
    'input[name="question9"]:checked'
  ).value;
  var question10 = document.querySelector(
    'input[name="question10"]:checked'
  ).value;
  var done = document.getElementById("done");
  var quiz = document.getElementById("quiz");
  if (question1 == correct[0]) {
    score += 1;
  } else if (question1 != correct[0]) {
    score += 0;
  }
  if (question2 == correct[1]) {
    score += 1;
  } else if (question2 != correct[1]) {
    score += 0;
  }
  if (question3 == correct[2]) {
    score += 2;
  } else if (question3 != correct[2]) {
    score += 0;
  }
  if (question4 == correct[3]) {
    score += 2;
  } else if (question4 != correct[3]) {
    score += 0;
  }
  if (question5 == correct[4]) {
    score += 2;
  } else if (question5 != correct[4]) {
    score += 0;
  }
  if (question6 == correct[5]) {
    score += 2;
  } else if (question6 != correct[5]) {
    score += 0;
  }
  if (question7 == correct[6]) {
    score += 2;
  } else if (question7 != correct[6]) {
    score += 0;
  }
  if (question8 == correct[7]) {
    score += 2;
  } else if (question8 != correct[7]) {
    score += 0;
  }
  if (question9 == correct[8]) {
    score += 3;
  } else if (question9 != correct[8]) {
    score += 0;
  }
  if (question10 == correct[9]) {
    score += 3;
  } else if (question10 != correct[9]) {
    score += 0;
  }
  quiz.style.display = "none";
  if (score <= 5) {
    done.textContent = "you scored ${score}. POOR!";
  } else if (score <= 10) {
    done.textContent = "you scored ${score}. FAIR";
  } else if (score <= 15) {
    done.textContent = "you scored ${score}. GOOD!";
  } else if (score <= 20) {
    done.textContent = "you scored ${score}. EXCELLENT!!";
  }
}

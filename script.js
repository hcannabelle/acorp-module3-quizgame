let question = {
  title: "Michael Myers is the masked killer in which slasher franchise?",
  alternatives: [
    "Halloween",
    "Friday the 13th",
    "Chucky",
    "A Nightmare on Elmstreet",
  ],
  correctAnswer: 0,
};

function showQuestion(q) {
  let questionDiv = document.getElementById("triviaQuestion");
  questionDiv.textContent = q.title;
}

let possibleAnswer = document.querySelectorAll(".possibleAnswer");

possibleAnswer.forEach(function (element, index) {
  element.textContent = q.alternatives[index];
  element.addEventListener("click", function () {
    if (q.correctAnswer == index) {
      console.log("Correct Answer!");
    } else {
      console.log("Wrong Answer!");
    }
  });
});

showQuestion(question);

let btn = document.getElementById("btn");
btn.addEventListener("click", function () {});

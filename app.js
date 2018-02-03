var buttons = document.querySelectorAll('input');
var answerButton = document.getElementById('answerButton');

function getTotal() {
var totalScore = 0;
    for (var i = 0; i < buttons.length; i++) {
    if (buttons[i].checked) {
      if (buttons[i].value === 'yes') {
        totalScore++;
      }
    } 
  }
  return totalScore;
}

answerButton.addEventListener('click', function(e) {
  e.preventDefault();
  var answerTotal = getTotal();
  console.log(`Your overall score is ${answerTotal}`);
});

//another fn to display results?

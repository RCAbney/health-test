const buttons = document.querySelectorAll('input');
const answerButton = document.getElementById('answerButton');

function getTotal() {
let totalScore = 0;
    for (let i = 0; i < buttons.length; i++) {
    if (buttons[i].checked) {
      if (buttons[i].value === 'yes') {
        totalScore++;
      }
    } 
  }
  return totalScore;
}


function getResults(answerTotal) {
  const resultsP = document.querySelector('p.results');
  let risk = '';
  let counsel = '[schedule counsel with your PCP]';
  if (answerTotal <= 2) {
    risk = 'low';
    counsel = '';
  } else if (answerTotal > 2 && answerTotal < 5) {
    risk = 'intermediate';
    counsel = '[schedule counsel with your PCP]';
  } else {
    risk = 'high';
    counsel = '[schedule counsel with your PCP]';
  }
  resultsP.textContent = `Your overall score is ${answerTotal} - ${risk} risk of OSA ${counsel}`;
}

answerButton.addEventListener('click', function(e) {
  e.preventDefault();
  const answerTotal = getTotal();
  getResults(answerTotal);
});


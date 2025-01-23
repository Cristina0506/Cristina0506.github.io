window.onload = function () {
    const loggedInUser = sessionStorage.getItem('loggedInUser');
  
    if (!loggedInUser) {
    
      window.location.href = 'login.html';
      return;
    }
  
    
    document.getElementById('welcomeMessage').textContent = `Bine ai venit, ${loggedInUser}!`;
  
    
    document.getElementById('logoutButton').addEventListener('click', () => {
      sessionStorage.removeItem('loggedInUser');
      window.location.href = 'login.html';
    });
}
  const quizQuestions = [


    {
        question: "Cand a fost publicat romanul <O zi din viata lui Ivan Denisovici>?",
        options: ["2002", "1962", "1970", "1959"],
        correctAnswer: 1
    },
    {
        question: "Care este autorul romanului?",
        options: ["Georgi Adamovici", "Constantin Badighin", "Aleksander Soljenitin", "Mihail Bulgakov"],
        correctAnswer: 2
    },
    {
        question: "Care este numarul de inregistrare a personajului principal in lagar ?",
        options: [" CH-854 ", "CH-559", "CH-043", "CH-421"],
        correctAnswer: 0
    },
    {
      question: "De ce este condamnat personajul principal?",
      options: ["hotie", "uciderea unui om politic", "impotrivire fata de regim", "tradare a patriei mame dupa acuzatia sa de spionaj"],
      correctAnswer: 3
  },
  {
  question: "Cand reuseste autorul sa se reintoarca in Rusia?",
  options: ["1987", "2005", "1994", "1996"],
  correctAnswer: 3
},
{
  question: "In ce perioada de timp a existat sistemul de lagare din Rusia?",
  options: ["1920-1950", "1910-1930", "1915-1960", "1950-1970"],
  correctAnswer: 0
}

   ];
  
  
  const quizContainer = document.createElement('div');
  quizContainer.style.fontFamily = "Arial, sans-serif";
  quizContainer.style.margin = "20px";
  quizContainer.style.padding = "20px";
  quizContainer.style.border = "1px solid #ccc";
  quizContainer.style.borderRadius = "10px";
  quizContainer.style.width = "400px";
  quizContainer.style.color = "blue";
  quizContainer.background = "grey";
  
  
  const questionElement = document.createElement('h2');
  quizContainer.appendChild(questionElement);
  
  
  const optionsContainer = document.createElement('div');
  optionsContainer.style.marginTop = "10px";
  quizContainer.appendChild(optionsContainer);
  
  const feedbackElement = document.createElement('p');
  feedbackElement.style.marginTop = "10px";
  feedbackElement.style.fontWeight = "bold";
  quizContainer.appendChild(feedbackElement);
  
  const scoreElement = document.createElement('p');
  scoreElement.style.marginTop = "10px";
  scoreElement.style.fontWeight = "bold";
  scoreElement.style.color = "blue";
  quizContainer.appendChild(scoreElement);
  
  document.body.appendChild(quizContainer);
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  function loadQuestion() {
    
    optionsContainer.innerHTML = '';
    feedbackElement.textContent = '';
  
    const currentQuestion = quizQuestions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
  
    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.textContent = option;
        button.style.margin = "5px";
        button.style.padding = "10px";
        button.style.border = "1px solid #ccc";
        button.style.borderRadius = "5px";
        button.style.cursor = "pointer";
        button.style.color = "blue"
  
        button.addEventListener('click', () => handleAnswer(index));
        optionsContainer.appendChild(button);
    });
  }
  
  function handleAnswer(selectedIndex) {
    const currentQuestion = quizQuestions[currentQuestionIndex];
  
    if (selectedIndex === currentQuestion.correctAnswer) {
        feedbackElement.textContent = "Correct!";
        feedbackElement.style.color = "green";
        score++;
    } else {
        feedbackElement.textContent = `Wrong! The correct answer was "${currentQuestion.options[currentQuestion.correctAnswer]}".`;
        feedbackElement.style.color = "red";
    }
  
    currentQuestionIndex++;
    if (currentQuestionIndex < quizQuestions.length) {
        setTimeout(loadQuestion, 2000); 
    } else {
        endQuiz();
    }
  }
  
  function endQuiz() {
    questionElement.textContent = "Quiz Over!";
    optionsContainer.innerHTML = '';
    feedbackElement.textContent = `You scored ${score}/${quizQuestions.length}!`;
    feedbackElement.style.color = "blue";
  }
  
  loadQuestion();
  
 

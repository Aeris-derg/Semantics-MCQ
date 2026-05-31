// Semantics MCQ Logic Engine

document.addEventListener('DOMContentLoaded', () => {
  // --- State Variables ---
  let currentCategory = 'all'; // Default is welcome screen
  let currentQuestions = [];
  let currentIndex = 0;
  let correctAnswersCount = 0;
  let incorrectAnswersCount = 0;
  let selectedChoice = null;
  let answersHistory = [];

  // --- Topic Titles Mapping ---
  const topicTitles = {
    week1: "Part 1: Intro to Semantics & Signs",
    week2_3: "Part 2: Utterance, Sentence, Proposition",
    week4_5: "Part 3: Sense, Reference, Denotation",
    week5_6: "Part 4: Lexical & Structural Meaning",
    week6_8: "Part 5: Lexical Senses & Relations",
    week9_10: "Part 6: Referring Expressions & Equatives",
    week10_11: "Part 7: Predicates & Sense Relations",
    random: "Random Mix Quiz"
  };

  // --- DOM Elements ---
  const themeToggle = document.getElementById('theme-toggle');
  const tabs = document.querySelectorAll('.tab-btn');
  const welcomePanel = document.getElementById('welcome-panel');
  const quizPanel = document.getElementById('quiz-panel');
  const resultsPanel = document.getElementById('results-panel');
  
  const startRandomBtn = document.getElementById('start-random-btn');
  const restartBtn = document.getElementById('restart-btn');
  const backHomeBtn = document.getElementById('back-home-btn');
  const nextBtn = document.getElementById('next-btn');

  const quizTopic = document.getElementById('quiz-topic');
  const correctScore = document.getElementById('correct-score');
  const incorrectScore = document.getElementById('incorrect-score');
  const progressText = document.getElementById('progress-text');
  const progressBarFill = document.getElementById('progress-bar-fill');

  const questionNum = document.getElementById('question-num');
  const questionText = document.getElementById('question-text');
  const optionsContainer = document.getElementById('options-container');

  const explanationCard = document.getElementById('explanation-card');
  const explanationTitle = document.getElementById('explanation-title');
  const explanationContent = document.getElementById('explanation-content');
  const explIconClass = document.getElementById('expl-icon-class');

  const finalPercentage = document.getElementById('final-percentage');
  const resultHeadline = document.getElementById('result-headline');
  const resultDescription = document.getElementById('result-description');
  const resTotalQuestions = document.getElementById('res-total-questions');
  const resCorrectCount = document.getElementById('res-correct-count');
  const resIncorrectCount = document.getElementById('res-incorrect-count');
  const reviewList = document.getElementById('review-list');

  // --- Theme Management ---
  const initTheme = () => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
  };

  const updateThemeIcon = (theme) => {
    const icon = themeToggle.querySelector('i');
    if (theme === 'dark') {
      icon.className = 'fa-solid fa-sun';
    } else {
      icon.className = 'fa-solid fa-moon';
    }
  };

  themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
  });

  initTheme();

  // --- Utility Functions ---
  
  // Shuffling array using Fisher-Yates algorithm
  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // Helper to format linguistic notation beautifully in HTML
  const formatLinguisticText = (text) => {
    if (!text) return '';
    return text
      // Replace words wrapped in single/double stars with italics (for sentence citation)
      .replace(/\*([^*]+)\*/g, '<em class="citation">$1</em>')
      // Highlight semantic features [+MALE], [-ADULT] etc
      .replace(/(\[[+\-][A-Z\s]+\])/g, '<code class="feature">$1</code>')
      // Highlight semantic anomalies prefixed with # (e.g. #The door is open)
      .replace(/(^|\s)(#[a-zA-Z\s'’]+(?=[\s\.,]|$))/g, '$1<code class="anomaly">$2</code>');
  };

  // --- Quiz Core Logic ---

  // Initialize a new quiz
  const startQuiz = (category) => {
    currentCategory = category;
    correctAnswersCount = 0;
    incorrectAnswersCount = 0;
    currentIndex = 0;
    answersHistory = [];

    // Filter questions based on category
    if (category === 'random') {
      // Random Mix chooses 10 random questions across all sections
      currentQuestions = shuffleArray(window.questionsData).slice(0, 10);
    } else {
      // Specific Part quiz chooses all 10 questions of that week
      currentQuestions = window.questionsData.filter(q => q.category === category);
    }

    // Switch panels
    welcomePanel.classList.remove('active');
    resultsPanel.classList.remove('active');
    quizPanel.classList.add('active');

    // Update Tab Navigation Active Status
    tabs.forEach(tab => {
      if (tab.getAttribute('data-category') === category) {
        tab.classList.add('active');
      } else {
        tab.classList.remove('active');
      }
    });

    loadQuestion();
  };

  // Load question to the DOM
  const loadQuestion = () => {
    selectedChoice = null;
    nextBtn.disabled = true;
    explanationCard.classList.add('hide');

    const currentQuestion = currentQuestions[currentIndex];
    
    // Update labels and progress
    quizTopic.textContent = topicTitles[currentCategory] || "Linguistics Quiz";
    correctScore.textContent = correctAnswersCount;
    incorrectScore.textContent = incorrectAnswersCount;
    questionNum.textContent = currentIndex + 1;
    progressText.textContent = `Question ${currentIndex + 1} of ${currentQuestions.length}`;
    
    const progressPercent = ((currentIndex + 1) / currentQuestions.length) * 100;
    progressBarFill.style.width = `${progressPercent}%`;

    // Render text with formatting
    questionText.innerHTML = formatLinguisticText(currentQuestion.question);

    // Render Option Buttons
    optionsContainer.innerHTML = '';
    Object.entries(currentQuestion.options).forEach(([letter, content]) => {
      const optionBtn = document.createElement('button');
      optionBtn.className = 'option-btn';
      optionBtn.setAttribute('data-choice', letter);
      optionBtn.innerHTML = `
        <span class="option-letter">${letter}</span>
        <span class="option-content">${formatLinguisticText(content)}</span>
        <span class="option-status-icon"><i class="fa-regular fa-circle"></i></span>
      `;
      optionBtn.addEventListener('click', () => selectAnswer(letter));
      optionsContainer.appendChild(optionBtn);
    });

    // Update navigation button text
    if (currentIndex === currentQuestions.length - 1) {
      nextBtn.querySelector('span').textContent = 'Finish Quiz';
      nextBtn.querySelector('i').className = 'fa-solid fa-flag-checkered';
    } else {
      nextBtn.querySelector('span').textContent = 'Next Question';
      nextBtn.querySelector('i').className = 'fa-solid fa-arrow-right';
    }
  };

  // Handle option selection
  const selectAnswer = (choice) => {
    if (selectedChoice !== null) return; // Prevent double click
    selectedChoice = choice;

    const currentQuestion = currentQuestions[currentIndex];
    const isCorrect = choice === currentQuestion.correct;
    
    if (isCorrect) {
      correctAnswersCount++;
    } else {
      incorrectAnswersCount++;
    }

    // Update scores in status bar
    correctScore.textContent = correctAnswersCount;
    incorrectScore.textContent = incorrectAnswersCount;

    // Highlight options in UI
    const optionButtons = optionsContainer.querySelectorAll('.option-btn');
    optionButtons.forEach(btn => {
      btn.disabled = true; // Disable all
      const btnChoice = btn.getAttribute('data-choice');
      
      if (btnChoice === currentQuestion.correct) {
        btn.classList.add('correct');
      } else if (btnChoice === choice) {
        btn.classList.add('incorrect');
      }
    });

    // Record answer in history
    answersHistory.push({
      question: currentQuestion.question,
      options: currentQuestion.options,
      correct: currentQuestion.correct,
      userChoice: choice,
      isCorrect: isCorrect,
      explanation: currentQuestion.explanations[choice]
    });

    // Show Explanation Card with animations
    explanationCard.className = 'explanation-card card'; // Reset classes
    if (isCorrect) {
      explanationCard.classList.add('correct-expl');
      explanationTitle.textContent = "Correct Answer";
      explIconClass.className = 'fa-solid fa-circle-check';
    } else {
      explanationCard.classList.add('incorrect-expl');
      explanationTitle.textContent = "Incorrect Choice";
      explIconClass.className = 'fa-solid fa-circle-xmark';
    }
    explanationContent.innerHTML = formatLinguisticText(currentQuestion.explanations[choice]);
    explanationCard.classList.remove('hide');

    // Enable next button
    nextBtn.disabled = false;
  };

  // Next Button event handler
  nextBtn.addEventListener('click', () => {
    if (currentIndex < currentQuestions.length - 1) {
      currentIndex++;
      loadQuestion();
    } else {
      showResults();
    }
  });

  // Display final results screen
  const showResults = () => {
    quizPanel.classList.remove('active');
    resultsPanel.classList.add('active');

    const scorePercentage = Math.round((correctAnswersCount / currentQuestions.length) * 100);
    finalPercentage.textContent = `${scorePercentage}%`;
    
    resTotalQuestions.textContent = currentQuestions.length;
    resCorrectCount.textContent = correctAnswersCount;
    resIncorrectCount.textContent = incorrectAnswersCount;

    // Generate score-based messaging
    if (scorePercentage === 100) {
      resultHeadline.textContent = "Perfect! Semantics Master 👑";
      resultDescription.textContent = "Outstanding work! You have successfully mastered every definition, distinction, and semantic exception in this section.";
    } else if (scorePercentage >= 80) {
      resultHeadline.textContent = "Excellent Job! 🌟";
      resultDescription.textContent = "You have a solid and impressive grasp of semantic analysis. Almost perfect!";
    } else if (scorePercentage >= 60) {
      resultHeadline.textContent = "Linguist Apprentice 📚";
      resultDescription.textContent = "Good effort. Reviewing the incorrect items below will help solidify the trickier semantics concepts.";
    } else {
      resultHeadline.textContent = "Needs Review 🔍";
      resultDescription.textContent = "Semantic theories can be abstract. We suggest re-reading the slides and retaking the quiz to strengthen your foundation.";
    }

    // Build detailed review list
    reviewList.innerHTML = '';
    answersHistory.forEach((item, index) => {
      const reviewItem = document.createElement('div');
      reviewItem.className = `review-item ${item.isCorrect ? 'correct-answer' : 'wrong-answer'}`;
      
      const optionsTextList = Object.entries(item.options)
        .map(([letter, text]) => `<div class="review-choice-item"><strong>${letter}:</strong> ${formatLinguisticText(text)}</div>`)
        .join('');

      reviewItem.innerHTML = `
        <span class="review-q-num">Question ${index + 1} (${item.isCorrect ? 'Correct' : 'Incorrect'})</span>
        <div class="review-q-text">${formatLinguisticText(item.question)}</div>
        <div class="review-details">
          <div class="review-choice your-choice">
            <span class="choice-marker"><i class="${item.isCorrect ? 'fa-solid fa-check' : 'fa-solid fa-xmark'}"></i> Your Choice:</span> 
            <span>${item.userChoice} - ${formatLinguisticText(item.options[item.userChoice])}</span>
          </div>
          ${!item.isCorrect ? `
          <div class="review-choice correct-choice">
            <span class="choice-marker"><i class="fa-solid fa-check"></i> Correct:</span>
            <span>${item.correct} - ${formatLinguisticText(item.options[item.correct])}</span>
          </div>
          ` : ''}
        </div>
        <div class="review-expl">
          <strong>Feedback explanation:</strong> ${formatLinguisticText(item.explanation)}
        </div>
      `;
      reviewList.appendChild(reviewItem);
    });
  };

  // --- Navigation Event Listeners ---

  // Tab switching
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const category = tab.getAttribute('data-category');
      
      // Update Tab Navigation Active Status
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      if (category === 'all') {
        currentCategory = 'all';
        quizPanel.classList.remove('active');
        resultsPanel.classList.remove('active');
        welcomePanel.classList.add('active');
      } else {
        startQuiz(category);
      }
    });
  });

  // Action Buttons
  startRandomBtn.addEventListener('click', () => startQuiz('random'));
  restartBtn.addEventListener('click', () => startQuiz(currentCategory));
  backHomeBtn.addEventListener('click', () => {
    currentCategory = 'all';
    quizPanel.classList.remove('active');
    resultsPanel.classList.remove('active');
    welcomePanel.classList.add('active');
    tabs.forEach(t => {
      if (t.getAttribute('data-category') === 'all') {
        t.classList.add('active');
      } else {
        t.classList.remove('active');
      }
    });
  });
});

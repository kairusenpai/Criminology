// Main Application Logic
// Handles quiz functionality, navigation, and user interaction

// State management
let currentQuiz = {
    subject: null,
    questions: [],
    currentIndex: 0,
    answers: [],
    selectedOption: null,
    submitted: false
};

// Progress storage key
const QUIZ_PROGRESS_KEY = 'criminology_quiz_progress';

// Navigation
function navigateTo(section) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    
    // Show target section
    document.getElementById(section).classList.add('active');
    
    // Update nav buttons
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.section === section) {
            btn.classList.add('active');
        }
    });

    // Load section-specific data
    if (section === 'quiz') {
        loadSubjectSelection();
    } else if (section === 'dashboard') {
        loadDashboard();
    } else if (section === 'subjects') {
        loadSubjectsList();
    }
}

// Initialize navigation
document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        navigateTo(btn.dataset.section);
    });
});

// Load subject selection for quiz
function loadSubjectSelection() {
    const container = document.getElementById('subjectSelection');
    const subjects = getAllSubjects();
    
    container.innerHTML = subjects.map(subject => `
        <button class="subject-btn" data-subject="${subject.key}">
            <strong>${subject.name}</strong>
            <small>${subject.questions.length} questions</small>
        </button>
    `).join('');

    // Add click handlers
    container.querySelectorAll('.subject-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            container.querySelectorAll('.subject-btn').forEach(b => b.classList.remove('selected'));
            btn.classList.add('selected');
            currentQuiz.subject = btn.dataset.subject;
        });
    });
}

// Start quiz
function startQuiz() {
    if (!currentQuiz.subject) {
        alert('Please select a subject');
        return;
    }

    const questionCount = parseInt(document.getElementById('questionCount').value);
    const situationalOnly = document.getElementById('situationalOnly').checked;

    // Check for saved progress
    const savedProgress = loadQuizProgress(currentQuiz.subject);
    if (savedProgress) {
        const resume = confirm(`You have an unfinished quiz for this subject. Resume from question ${savedProgress.currentIndex + 1}?`);
        if (resume) {
            currentQuiz = savedProgress;
            document.querySelector('.quiz-setup').style.display = 'none';
            document.getElementById('quizContainer').style.display = 'block';
            document.getElementById('quizResults').style.display = 'none';
            loadQuestion();
            return;
        } else {
            // Clear saved progress if user wants to start fresh
            clearQuizProgress(currentQuiz.subject);
        }
    }

    // Get questions for selected subject
    let questions = getQuestionsBySubject(currentQuiz.subject);
    
    // Filter for situational only if requested
    if (situationalOnly) {
        questions = questions.filter(q => q.isSituational);
    }

    // Shuffle and select questions
    questions = shuffleArray(questions).slice(0, Math.min(questionCount, questions.length));

    if (questions.length === 0) {
        alert('No questions available for the selected criteria');
        return;
    }

    // Initialize quiz state
    currentQuiz.questions = questions;
    currentQuiz.currentIndex = 0;
    currentQuiz.answers = [];
    currentQuiz.selectedOption = null;
    currentQuiz.submitted = false;

    // Show quiz container
    document.querySelector('.quiz-setup').style.display = 'none';
    document.getElementById('quizContainer').style.display = 'block';
    document.getElementById('quizResults').style.display = 'none';

    // Load first question
    loadQuestion();
}

// Load current question
function loadQuestion() {
    const question = currentQuiz.questions[currentQuiz.currentIndex];
    const subjectInfo = getSubjectInfo(currentQuiz.subject);

    // Update header
    document.getElementById('quizSubject').textContent = subjectInfo.name;
    document.getElementById('questionProgress').textContent = 
        `Question ${currentQuiz.currentIndex + 1} of ${currentQuiz.questions.length}`;

    // Display question
    document.getElementById('questionText').textContent = question.question;

    // Display scenario image if situational
    const imageContainer = document.getElementById('questionImage');
    if (question.isSituational) {
        imageContainer.innerHTML = `<strong>📋 Situational Problem</strong><br>Read the scenario carefully before answering.`;
        imageContainer.style.display = 'block';
    } else {
        imageContainer.style.display = 'none';
    }

    // Display options
    const optionsContainer = document.getElementById('optionsContainer');
    optionsContainer.innerHTML = question.options.map((option, index) => `
        <button class="option-btn" data-index="${index}">
            ${String.fromCharCode(65 + index)}. ${option}
        </button>
    `).join('');

    // Add click handlers for options
    optionsContainer.querySelectorAll('.option-btn').forEach(btn => {
        btn.addEventListener('click', () => selectOption(parseInt(btn.dataset.index)));
    });

    // Reset state
    currentQuiz.selectedOption = null;
    currentQuiz.submitted = false;
    document.getElementById('feedback').classList.remove('show', 'correct', 'incorrect');

    // Hide previous button initially
    const prevBtn = document.getElementById('prevBtn');
    if (prevBtn) {
        prevBtn.style.display = currentQuiz.currentIndex > 0 ? 'inline-block' : 'none';
    }
}

// Select an option
function selectOption(index) {
    if (currentQuiz.submitted) return;

    currentQuiz.selectedOption = index;

    // Update visual selection
    document.querySelectorAll('.option-btn').forEach((btn, i) => {
        btn.classList.remove('selected');
        if (i === index) {
            btn.classList.add('selected');
        }
    });
}

// Submit answer
function submitAnswer() {
    if (currentQuiz.selectedOption === null) {
        alert('Please select an answer');
        return;
    }

    if (currentQuiz.submitted) return;

    currentQuiz.submitted = true;
    const question = currentQuiz.questions[currentQuiz.currentIndex];
    const isCorrect = currentQuiz.selectedOption === question.correct;

    // Record answer
    currentQuiz.answers.push({
        questionId: question.id,
        selected: currentQuiz.selectedOption,
        correct: question.correct,
        isCorrect: isCorrect,
        isSituational: question.isSituational,
        explanation: question.explanation
    });

    // Show feedback
    const feedback = document.getElementById('feedback');
    feedback.classList.add('show', isCorrect ? 'correct' : 'incorrect');
    feedback.innerHTML = `
        <strong>${isCorrect ? '✓ Correct!' : '✗ Incorrect'}</strong>
        <p>${question.explanation}</p>
        ${!isCorrect ? `<p><strong>Correct Answer:</strong> ${String.fromCharCode(65 + question.correct)}. ${question.options[question.correct]}</p>` : ''}
    `;

    // Update option buttons to show correct/incorrect
    document.querySelectorAll('.option-btn').forEach((btn, i) => {
        if (i === question.correct) {
            btn.classList.add('correct');
        } else if (i === currentQuiz.selectedOption && !isCorrect) {
            btn.classList.add('incorrect');
        }
    });

    // Hide previous button after answering
    const prevBtn = document.getElementById('prevBtn');
    if (prevBtn) {
        prevBtn.style.display = 'none';
    }

    // Save progress
    saveQuizProgress();
}

// Navigate to previous question
function previousQuestion() {
    if (currentQuiz.currentIndex > 0) {
        currentQuiz.currentIndex--;
        loadQuestion();
    }
}

// Navigate to next question
function nextQuestion() {
    if (!currentQuiz.submitted) {
        alert('Please submit your answer first');
        return;
    }

    if (currentQuiz.currentIndex < currentQuiz.questions.length - 1) {
        currentQuiz.currentIndex++;
        loadQuestion();
    } else {
        showResults();
    }
}

// Show quiz results
function showResults() {
    const correctCount = currentQuiz.answers.filter(a => a.isCorrect).length;
    const totalCount = currentQuiz.questions.length;
    const percentage = (correctCount / totalCount) * 100;

    // Update results display
    document.getElementById('finalScore').textContent = `${percentage.toFixed(1)}%`;
    document.getElementById('correctCount').textContent = correctCount;
    document.getElementById('incorrectCount').textContent = totalCount - correctCount;
    document.getElementById('totalCount').textContent = totalCount;

    // Update score circle
    const scoreCircle = document.querySelector('.score-circle');
    scoreCircle.style.background = `conic-gradient(#e94560 ${percentage}%, #0f3460 ${percentage}%)`;

    // Show results
    document.getElementById('quizContainer').style.display = 'none';
    document.getElementById('quizResults').style.display = 'block';

    // Record performance
    analyzer.recordQuiz(currentQuiz.subject, correctCount, totalCount, currentQuiz.answers);

    // Clear saved progress since quiz is complete
    clearQuizProgress(currentQuiz.subject);
}

// Review answers
function reviewAnswers() {
    // Create a simple review modal
    let reviewHTML = '<div style="max-height: 500px; overflow-y: auto; padding: 20px;">';
    
    currentQuiz.answers.forEach((answer, index) => {
        const question = currentQuiz.questions[index];
        reviewHTML += `
            <div style="margin-bottom: 20px; padding: 15px; background: rgba(26, 26, 46, 0.8); border-radius: 8px; border-left: 4px solid ${answer.isCorrect ? '#4caf50' : '#f44336'};">
                <p><strong>Q${index + 1}:</strong> ${question.question}</p>
                <p><strong>Your Answer:</strong> ${String.fromCharCode(65 + answer.selected)}. ${question.options[answer.selected]}</p>
                <p><strong>Correct Answer:</strong> ${String.fromCharCode(65 + answer.correct)}. ${question.options[answer.correct]}</p>
                <p><strong>Explanation:</strong> ${answer.explanation}</p>
            </div>
        `;
    });
    
    reviewHTML += '</div>';
    
    // Create modal
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed; top: 0; left: 0; width: 100%; height: 100%;
        background: rgba(0,0,0,0.8); display: flex; align-items: center; justify-content: center;
        z-index: 1000;
    `;
    modal.innerHTML = `
        <div style="background: #1a1a2e; padding: 30px; border-radius: 16px; max-width: 800px; width: 90%; max-height: 90vh; overflow-y: auto;">
            <h2 style="color: #e94560; margin-bottom: 20px;">Answer Review</h2>
            ${reviewHTML}
            <button onclick="this.closest('div').parentElement.remove()" style="margin-top: 20px; padding: 12px 30px; background: #e94560; color: white; border: none; border-radius: 8px; cursor: pointer;">Close</button>
        </div>
    `;
    document.body.appendChild(modal);
}

// Reset quiz
function resetQuiz() {
    currentQuiz = {
        subject: null,
        questions: [],
        currentIndex: 0,
        answers: [],
        selectedOption: null,
        submitted: false
    };

    document.querySelector('.quiz-setup').style.display = 'block';
    document.getElementById('quizContainer').style.display = 'none';
    document.getElementById('quizResults').style.display = 'none';
    
    loadSubjectSelection();
}

// Cancel quiz (save progress)
function cancelQuiz() {
    if (currentQuiz.answers.length > 0) {
        const confirmCancel = confirm('Your progress will be saved. You can continue this quiz later by selecting the same subject. Cancel?');
        if (confirmCancel) {
            saveQuizProgress();
            resetQuiz();
        }
    } else {
        resetQuiz();
    }
}

// Save quiz progress to localStorage
function saveQuizProgress() {
    const progress = {
        subject: currentQuiz.subject,
        questions: currentQuiz.questions,
        currentIndex: currentQuiz.currentIndex,
        answers: currentQuiz.answers,
        selectedOption: currentQuiz.selectedOption,
        submitted: currentQuiz.submitted
    };
    localStorage.setItem(QUIZ_PROGRESS_KEY, JSON.stringify(progress));
}

// Load quiz progress from localStorage
function loadQuizProgress(subject) {
    try {
        const saved = localStorage.getItem(QUIZ_PROGRESS_KEY);
        if (saved) {
            const progress = JSON.parse(saved);
            if (progress.subject === subject) {
                return progress;
            }
        }
    } catch (e) {
        console.error('Error loading quiz progress:', e);
    }
    return null;
}

// Clear quiz progress from localStorage
function clearQuizProgress(subject) {
    try {
        const saved = localStorage.getItem(QUIZ_PROGRESS_KEY);
        if (saved) {
            const progress = JSON.parse(saved);
            if (progress.subject === subject) {
                localStorage.removeItem(QUIZ_PROGRESS_KEY);
            }
        }
    } catch (e) {
        console.error('Error clearing quiz progress:', e);
    }
}

// Load dashboard
function loadDashboard() {
    const data = analyzer.getDashboardData();
    
    // Overall performance chart
    const overallChart = document.getElementById('overallChart');
    if (data.overall.totalQuestions > 0) {
        overallChart.innerHTML = `
            <div style="text-align: center; width: 100%;">
                <div style="font-size: 3rem; color: #e94560; font-weight: bold;">${data.overall.averageScore.toFixed(1)}%</div>
                <div style="color: #a0a0a0;">Overall Score</div>
                <div style="margin-top: 20px; color: #a0a0a0;">
                    ${data.overall.totalQuestions} questions answered<br>
                    ${data.overall.totalQuizzes} quizzes taken
                </div>
            </div>
        `;
    } else {
        overallChart.innerHTML = '<p style="color: #a0a0a0; text-align: center;">No quiz data yet. Take a quiz to see your performance!</p>';
    }

    // Subject breakdown
    const subjectBreakdown = document.getElementById('subjectBreakdown');
    const subjects = getAllSubjects();
    subjectBreakdown.innerHTML = subjects.map(subject => {
        const metric = data.subjectMetrics[subject.key];
        if (!metric) {
            return `
                <div class="subject-item">
                    <span class="subject-name">${subject.name}</span>
                    <span class="subject-score">Not attempted</span>
                </div>
            `;
        }
        const trendIcon = metric.trend === 'improving' ? '📈' : metric.trend === 'declining' ? '📉' : '➡️';
        return `
            <div class="subject-item">
                <span class="subject-name">${subject.name} ${trendIcon}</span>
                <span class="subject-score">${metric.averageScore.toFixed(1)}%</span>
            </div>
        `;
    }).join('');

    // Strengths
    const strengthsList = document.getElementById('strengthsList');
    if (data.strengths.length > 0) {
        strengthsList.innerHTML = data.strengths.map(s => {
            const subjectInfo = getSubjectInfo(s.subject);
            return `
                <div class="strength-item">
                    <span>✓</span>
                    <div>
                        <strong>${subjectInfo.name}</strong>
                        <small style="color: #a0a0a0;">${s.score.toFixed(1)}% - ${s.trend}</small>
                    </div>
                </div>
            `;
        }).join('');
    } else {
        strengthsList.innerHTML = '<p style="color: #a0a0a0;">Take more quizzes to identify your strengths!</p>';
    }

    // Weaknesses
    const weaknessesList = document.getElementById('weaknessesList');
    if (data.weaknesses.length > 0) {
        weaknessesList.innerHTML = data.weaknesses.map(w => {
            const subjectInfo = getSubjectInfo(w.subject);
            return `
                <div class="weakness-item">
                    <span>⚠</span>
                    <div>
                        <strong>${subjectInfo.name}</strong>
                        <small style="color: #a0a0a0;">${w.score.toFixed(1)}% - ${w.trend}</small>
                    </div>
                </div>
            `;
        }).join('');
    } else {
        weaknessesList.innerHTML = '<p style="color: #a0a0a0;">Great! No significant weaknesses identified.</p>';
    }

    // ML Recommendations
    const mlRecommendations = document.getElementById('mlRecommendations');
    if (data.recommendations.length > 0) {
        mlRecommendations.innerHTML = data.recommendations.map(rec => {
            const typeIcon = rec.type === 'priority' ? '🎯' : rec.type === 'urgent' ? '🚨' : rec.type === 'maintenance' ? '🔧' : '💡';
            return `
                <div class="recommendation-item">
                    <h4>${typeIcon} ${rec.title}</h4>
                    <p>${rec.description}</p>
                    <p><strong>Action:</strong> ${rec.action}</p>
                </div>
            `;
        }).join('');
    } else {
        mlRecommendations.innerHTML = '<p style="color: #a0a0a0;">Take more quizzes to get personalized recommendations!</p>';
    }

    // Readiness prediction
    if (data.readiness) {
        const readinessHTML = `
            <div class="recommendation-item" style="border-left-color: ${data.readiness.ready ? '#4caf50' : '#f44336'};">
                <h4>${data.readiness.ready ? '✅ Board Exam Ready' : '📚 Keep Practicing'}</h4>
                <p>${data.readiness.message}</p>
                <p><strong>Confidence Level:</strong> ${data.readiness.confidence}</p>
                <p><strong>Predicted Score:</strong> ${data.readiness.score.toFixed(1)}%</p>
            </div>
        `;
        mlRecommendations.innerHTML += readinessHTML;
    }
}

// Load subjects list
function loadSubjectsList() {
    const container = document.getElementById('subjectsList');
    const subjects = getAllSubjects();
    
    container.innerHTML = subjects.map(subject => {
        const situationalCount = subject.questions.filter(q => q.isSituational).length;
        return `
            <div class="subject-detail-card">
                <h3>${subject.name}</h3>
                <p>${subject.description}</p>
                <div class="subject-stats">
                    <div class="subject-stat">
                        <span>${subject.questions.length}</span>
                        <small>Total Questions</small>
                    </div>
                    <div class="subject-stat">
                        <span>${situationalCount}</span>
                        <small>Situational</small>
                    </div>
                    <div class="subject-stat">
                        <span>${subject.questions.length - situationalCount}</span>
                        <small>Standard</small>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

// Utility function to shuffle array
function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

// Add cancel button to quiz interface
function addCancelButton() {
    const quizHeader = document.querySelector('.quiz-header');
    if (quizHeader && !document.getElementById('cancelQuizBtn')) {
        const cancelBtn = document.createElement('button');
        cancelBtn.id = 'cancelQuizBtn';
        cancelBtn.textContent = 'Cancel Quiz';
        cancelBtn.style.cssText = 'margin-left: auto; padding: 8px 16px; background: #f44336; color: white; border: none; border-radius: 4px; cursor: pointer;';
        cancelBtn.addEventListener('click', cancelQuiz);
        quizHeader.appendChild(cancelBtn);
    }
}

// Call addCancelButton when quiz container is shown
const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        if (mutation.target.id === 'quizContainer' && mutation.target.style.display === 'block') {
            addCancelButton();
        }
    });
});

// Start observing after DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const quizContainer = document.getElementById('quizContainer');
    if (quizContainer) {
        observer.observe(quizContainer, { attributes: true, attributeFilter: ['style'] });
    }
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    // Start at home section
    navigateTo('home');
});

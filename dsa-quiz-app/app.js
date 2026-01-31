document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const topicGrid = document.getElementById('topic-grid');
    const landingSection = document.getElementById('landing-section');
    const quizSection = document.getElementById('quiz-section');
    const resultSection = document.getElementById('result-section');
    const backBtn = document.getElementById('back-btn');
    const themeToggle = document.getElementById('theme-toggle');

    // Quiz Elements
    const questionText = document.getElementById('question-text');
    const optionsContainer = document.getElementById('options-container');
    const progressBar = document.getElementById('progress-bar');
    const questionCountSpan = document.getElementById('question-count');
    const nextBtn = document.getElementById('next-btn');
    const feedbackArea = document.getElementById('feedback-area');

    // Result Elements
    const finalScore = document.getElementById('final-score');
    const resultMessage = document.getElementById('result-message');
    const circlePath = document.getElementById('score-circle-path');
    const restartBtn = document.getElementById('restart-btn');
    const confettiCanvas = document.getElementById('confetti-canvas');

    // State
    let currentTopic = null;
    let currentQuestions = [];
    let currentQuestionIndex = 0;
    let score = 0;
    let currentLang = localStorage.getItem('lang') || 'en';

    // Translations
    const translations = {
        en: {
            app_title: "DSA Master",
            hero_title: "Master Data Structures",
            hero_subtitle: "Select a topic to test your knowledge with curated questions from top resources.",
            btn_back: "← Back",
            btn_next: "Next Question",
            quiz_completed: "Quiz Completed!",
            result_msg: "Great job!",
            btn_restart: "Try Another Topic",
            footer_resources: "Study Resources:",
            loading: "Loading question...",
            correct: "Correct!",
            incorrect: "Incorrect.",
            score_perfect: "Perfect! You're a DSA Master! 🏆",
            score_great: "Great job! You know your stuff. 🚀",
            score_good: "Good effort! Keep practicing. 📚",
            score_retry: "Don't give up! Review the concepts and try again. 💪",
            confirm_exit: "Exit quiz? Progress will be lost.",
            res_trees: "Trees (Tutorialspoint)",
            res_dsa: "1000 DSA Questions (Sanfoundry)",
            res_complexity: "Time Complexity (GFG)",
            random_quiz: "Random Quiz",
            random_quiz_desc: "Test yourself with random questions from all topics",
            select_questions: "Select Number of Questions",
            start_quiz: "Start Quiz",
            cancel: "Cancel",
            questions_label: "Questions:"
        },
        ar: {
            app_title: "أستاذ الخوارزميات",
            hero_title: "أتقن هياكل البيانات",
            hero_subtitle: "اختر موضوعاً لاختبار معرفتك بأسئلة مختارة من أفضل المصادر.",
            btn_back: "← رجوع",
            btn_next: "السؤال التالي",
            quiz_completed: "اكتمل الاختبار!",
            result_msg: "عمل رائع!",
            btn_restart: "جرب موضوعاً آخر",
            footer_resources: "مصادر الدراسة:",
            loading: "جاري تحميل السؤال...",
            correct: "صحيح!",
            incorrect: "إجابة خاطئة.",
            score_perfect: "ممتاز! أنت أستاذ في الخوارزميات! 🏆",
            score_great: "عمل رائع! أنت تعرف مجالك جيداً. 🚀",
            score_good: "جهد جيد! استمر في التدريب. 📚",
            score_retry: "لا تستسلم! راجع المفاهيم وحاول مرة أخرى. 💪",
            confirm_exit: "هل تريد الخروج؟ سيتم فقدان التقدم.",
            res_trees: "الأشجار (Tutorialspoint)",
            res_dsa: "1000 سؤال في هياكل البيانات (Sanfoundry)",
            res_complexity: "التعقيد الزمني (GFG)",
            random_quiz: "اختبار عشوائي",
            random_quiz_desc: "اختبر نفسك بأسئلة عشوائية من جميع المواضيع",
            select_questions: "اختر عدد الأسئلة",
            start_quiz: "ابدأ الاختبار",
            cancel: "إلغاء",
            questions_label: "الأسئلة:"
        }
    };

    // DOM Elements for Language
    const langToggle = document.getElementById('lang-toggle');
    const langText = langToggle.querySelector('.lang-text');

    // Language Management
    const setLanguage = (lang) => {
        currentLang = lang;
        localStorage.setItem('lang', lang);
        document.body.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
        langText.textContent = lang === 'ar' ? 'English' : 'العربية';

        // Update Static Text
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });

        // Re-render content if active
        if (!landingSection.classList.contains('hidden-section')) {
            initLanding(); // Re-render grid for titles
        } else if (!quizSection.classList.contains('hidden-section')) {
            loadQuestion(); // Re-render question
        } else if (!resultSection.classList.contains('hidden-section')) {
            // Update result text
            const percentage = Math.round((score / currentQuestions.length) * 100);
            let msgKey = 'score_retry';
            if (percentage === 100) msgKey = 'score_perfect';
            else if (percentage >= 70) msgKey = 'score_great';
            else if (percentage >= 50) msgKey = 'score_good';

            resultMessage.textContent = translations[lang][msgKey];
        }
    };

    langToggle.addEventListener('click', () => {
        const newLang = currentLang === 'en' ? 'ar' : 'en';
        setLanguage(newLang);
    });

    // Initialize Theme
    const initTheme = () => {
        const savedTheme = localStorage.getItem('theme') || 'dark';
        document.body.setAttribute('data-theme', savedTheme);
        // ... theme logic unchanged ...
    };
    initTheme();

    themeToggle.addEventListener('click', () => {
        const current = document.body.getAttribute('data-theme');
        const newTheme = current === 'dark' ? 'light' : 'dark';
        document.body.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });

    // Initialize Landing Page
    const initLanding = () => {
        topicGrid.innerHTML = '';

        // Add Random Quiz Card First
        const randomCard = document.createElement('div');
        randomCard.className = 'topic-card random-quiz-card';
        const randomTitle = translations[currentLang].random_quiz;
        const randomDesc = translations[currentLang].random_quiz_desc;

        randomCard.innerHTML = `
            <div style="font-size: 2rem; margin-bottom: 1rem;">🎲</div>
            <h3>${randomTitle}</h3>
            <p>${randomDesc}</p>
        `;
        randomCard.addEventListener('click', () => showQuestionSelector());
        topicGrid.appendChild(randomCard);

        // Add Topic Cards
        quizData.forEach(topic => {
            const card = document.createElement('div');
            card.className = 'topic-card';
            // Use localized title/description if available, else fallback
            const title = (currentLang === 'ar' && topic.title_ar) ? topic.title_ar : topic.title;
            const desc = (currentLang === 'ar' && topic.description_ar) ? topic.description_ar : topic.description;

            card.innerHTML = `
                <div style="font-size: 2rem; margin-bottom: 1rem;">${topic.icon}</div>
                <h3>${title}</h3>
                <p>${desc}</p>
            `;
            card.addEventListener('click', () => startQuiz(topic));
            topicGrid.appendChild(card);
        });

        switchSection(landingSection);
    };

    const switchSection = (section) => {
        [landingSection, quizSection, resultSection].forEach(s => {
            s.classList.add('hidden-section');
            s.classList.remove('active-section');
        });
        section.classList.remove('hidden-section');
        section.classList.add('active-section');
    };

    // Quiz Logic
    const startQuiz = (topic) => {
        currentTopic = topic;
        currentQuestions = [...topic.questions].sort(() => 0.5 - Math.random());
        currentQuestionIndex = 0;
        score = 0;

        switchSection(quizSection);
        loadQuestion();
    };

    // Show Question Selector Modal
    const showQuestionSelector = () => {
        // Calculate total questions
        const totalQuestions = quizData.reduce((sum, topic) => sum + topic.questions.length, 0);

        // Create modal
        const modal = document.createElement('div');
        modal.className = 'modal-overlay';
        modal.innerHTML = `
            <div class="modal-content glass-card">
                <h2 data-i18n="select_questions">${translations[currentLang].select_questions}</h2>
                <div class="question-selector">
                    <label for="question-count">${translations[currentLang].questions_label}</label>
                    <input type="range" id="question-count" min="5" max="${Math.min(totalQuestions, 50)}" value="10" step="5">
                    <span id="question-count-display">10</span>
                </div>
                <div class="modal-actions">
                    <button class="secondary-btn" id="cancel-btn">${translations[currentLang].cancel}</button>
                    <button class="primary-btn" id="start-random-btn">${translations[currentLang].start_quiz}</button>
                </div>
            </div>
        `;

        document.body.appendChild(modal);

        // Update display on slider change
        const slider = modal.querySelector('#question-count');
        const display = modal.querySelector('#question-count-display');
        slider.addEventListener('input', (e) => {
            display.textContent = e.target.value;
        });

        // Cancel button
        modal.querySelector('#cancel-btn').addEventListener('click', () => {
            document.body.removeChild(modal);
        });

        // Start button
        modal.querySelector('#start-random-btn').addEventListener('click', () => {
            const count = parseInt(slider.value);
            document.body.removeChild(modal);
            startRandomQuiz(count);
        });

        // Close on overlay click
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                document.body.removeChild(modal);
            }
        });
    };

    // Start Random Quiz
    const startRandomQuiz = (questionCount) => {
        // Collect all questions from all topics
        const allQuestions = [];
        quizData.forEach(topic => {
            topic.questions.forEach(q => {
                allQuestions.push(q);
            });
        });

        // Shuffle and select
        const shuffled = allQuestions.sort(() => 0.5 - Math.random());
        currentQuestions = shuffled.slice(0, questionCount);

        // Create a virtual topic for random quiz
        currentTopic = {
            id: 'random',
            title: translations[currentLang].random_quiz,
            title_ar: translations[currentLang].random_quiz,
            icon: '🎲'
        };

        currentQuestionIndex = 0;
        score = 0;

        switchSection(quizSection);
        loadQuestion();
    };

    const loadQuestion = () => {
        const question = currentQuestions[currentQuestionIndex];

        // Update Progress
        const progress = ((currentQuestionIndex) / currentQuestions.length) * 100;
        progressBar.style.width = `${progress}%`;
        const qCountText = currentLang === 'ar' ?
            `سؤال ${currentQuestionIndex + 1}/${currentQuestions.length}` :
            `Question ${currentQuestionIndex + 1}/${currentQuestions.length}`;
        questionCountSpan.textContent = qCountText;

        // Render Text
        const text = (currentLang === 'ar' && question.text_ar) ? question.text_ar : question.text;
        questionText.innerHTML = text;

        // Render Options
        optionsContainer.innerHTML = '';
        const options = (currentLang === 'ar' && question.options_ar) ? question.options_ar : question.options;

        options.forEach((opt, index) => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.textContent = opt;
            btn.addEventListener('click', () => handleOptionSelect(index, btn));
            optionsContainer.appendChild(btn);
        });

        // Reset State
        nextBtn.disabled = true;
        feedbackArea.classList.add('hidden');
        feedbackArea.className = 'feedback hidden'; // reset classes
        feedbackArea.textContent = '';

        const nextText = translations[currentLang].btn_next;
        nextBtn.textContent = nextText;
    };

    const handleOptionSelect = (selectedIndex, btn) => {
        if (!nextBtn.disabled) return;

        const question = currentQuestions[currentQuestionIndex];
        const isCorrect = selectedIndex === question.correct;
        const explanation = (currentLang === 'ar' && question.explanation_ar) ? question.explanation_ar : question.explanation;

        const allBtns = optionsContainer.querySelectorAll('.option-btn');
        allBtns[question.correct].classList.add('correct');

        const t = translations[currentLang];

        if (isCorrect) {
            score++;
            btn.classList.add('correct');
            feedbackArea.className = 'feedback correct';
            feedbackArea.innerHTML = `<strong>${t.correct}</strong> ${explanation}`;
        } else {
            btn.classList.add('incorrect');
            feedbackArea.className = 'feedback incorrect';
            feedbackArea.innerHTML = `<strong>${t.incorrect}</strong> ${explanation}`;
        }

        feedbackArea.classList.remove('hidden');
        nextBtn.disabled = false;

        const progress = ((currentQuestionIndex + 1) / currentQuestions.length) * 100;
        progressBar.style.width = `${progress}%`;
    };

    nextBtn.addEventListener('click', () => {
        currentQuestionIndex++;
        if (currentQuestionIndex < currentQuestions.length) {
            loadQuestion();
        } else {
            showResults();
        }
    });

    const showResults = () => {
        switchSection(resultSection);
        const percentage = Math.round((score / currentQuestions.length) * 100);

        let currentScore = 0;
        const interval = setInterval(() => {
            if (currentScore >= percentage) clearInterval(interval);
            else currentScore++;
            finalScore.textContent = `${currentScore}%`;
            // Arabic numerals if needed, but percentage is usually universal enough
        }, 20);

        const offset = 100 - percentage;
        circlePath.style.strokeDasharray = `${percentage}, 100`;

        let msgKey = 'score_retry';
        if (percentage === 100) msgKey = 'score_perfect';
        else if (percentage >= 70) msgKey = 'score_great';
        else if (percentage >= 50) msgKey = 'score_good';

        resultMessage.textContent = translations[currentLang][msgKey];
        if (percentage === 100) triggerConfetti();
    };

    backBtn.addEventListener('click', () => {
        if (confirm(translations[currentLang].confirm_exit)) {
            switchSection(landingSection);
        }
    });

    // Initialize with default language
    setLanguage(currentLang);
});

// Simple Confetti Implementation
function triggerConfetti() {
    const canvas = document.getElementById('confetti-canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const confetti = [];
    const colors = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'];

    for (let i = 0; i < 150; i++) {
        confetti.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,
            color: colors[Math.floor(Math.random() * colors.length)],
            size: Math.random() * 10 + 5,
            speed: Math.random() * 5 + 2,
            angle: Math.random() * 6.28
        });
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        let active = false;
        confetti.forEach(p => {
            p.y += p.speed;
            p.x += Math.sin(p.angle) * 2;

            if (p.y < canvas.height) active = true;

            ctx.fillStyle = p.color;
            ctx.fillRect(p.x, p.y, p.size, p.size);
        });

        if (active) requestAnimationFrame(animate);
    }

    animate();
}

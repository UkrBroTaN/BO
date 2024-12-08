const toggleButton = document.getElementById('theme-toggle'); // Отримуємо тумблер за ID
const body = document.body; // Отримуємо тіло документа

// Завантаження попередньої теми з localStorage
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-theme'); // Якщо збережена тема темна, додаємо клас темної теми
    toggleButton.checked = true; // Встановлюємо тумблер в "увімкнутий" стан
}

// Обробка зміни стану тумблера
toggleButton.addEventListener('change', () => {
    body.classList.toggle('dark-theme'); // Перемикаємо клас темної теми на body
    
    // Збереження вибору теми в localStorage
    if (body.classList.contains('dark-theme')) {
        localStorage.setItem('theme', 'dark'); // Зберігаємо темну тему
    } else {
        localStorage.setItem('theme', 'light'); // Зберігаємо світлу тему
    }
});
let score = 0;
const correctAnswers = {
    1: "2006",
    2: "Lua",
    3: "Робукс",
    4: "Так",
    5: "Девід Башуцкі",
};

function checkAnswer(button, answer) {
    const questionIndex = [...button.parentNode.parentNode.children].indexOf(button.parentNode) + 1;
    const resultDiv = document.getElementById("result");

    if (answer === correctAnswers[questionIndex]) {
        button.style.backgroundColor = "green";
        score++;
    } else {
        button.style.backgroundColor = "red";
    }

    // Disable buttons for the current question
    const buttons = button.parentNode.querySelectorAll("button");
    buttons.forEach(btn => btn.disabled = true);

    // Check if all questions are answered
    if (Object.keys(correctAnswers).length === score) {
        resultDiv.textContent = `Ви відповіли правильно на ${score} з ${Object.keys(correctAnswers).length} питань!`;
        resultDiv.style.color = "green";
    } else if ([...document.querySelectorAll("button")].every(btn => btn.disabled)) {
        resultDiv.textContent = `Ви відповіли правильно на ${score} з ${Object.keys(correctAnswers).length} питань. Спробуйте ще раз!`;
        resultDiv.style.color = "red";
    }
}
// Показувати кнопку при прокручуванні
window.addEventListener("scroll", () => {
    const backToTop = document.getElementById("backToTop");
    if (window.scrollY > 300) { // Висота після якої кнопка з'явиться
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }
});

// Функція для повернення до верху сторінки
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
// Список фактів
const facts = [
    "У Roblox є понад 40 мільйонів активних ігор!",
    "Платформа Roblox з'явилася в 2006 році.",
    "Більше половини користувачів Roblox — діти віком до 16 років.",
    "У Roblox можна створювати ігри за допомогою мови Lua.",
    "Розробники на Roblox заробили понад $500 млн за рік.",
    "Roblox Studio — інструмент для створення ігор, який доступний кожному.",
    "У Roblox є своя віртуальна валюта під назвою Robux.",
    "Roblox підтримує багатокористувацький режим для взаємодії між гравцями.",
    "На Roblox регулярно проводять віртуальні концерти відомих виконавців.",
    "Roblox можна використовувати для навчання програмуванню та 3D-моделюванню."
];

// Функція для вибору випадкового факту
function getRandomFact() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    return facts[randomIndex];
}

// Логіка зміни факту при натисканні кнопки
const factElement = document.getElementById('fact');
const refreshButton = document.getElementById('refresh-btn');

refreshButton.addEventListener('click', () => {
    factElement.textContent = getRandomFact();
});

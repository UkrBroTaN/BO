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
    button.parentNode.querySelectorAll("button").forEach(btn => btn.disabled = true);

    // Check if all questions are answered
    const totalQuestions = Object.keys(correctAnswers).length;
    const answeredQuestions = document.querySelectorAll("button[disabled]").length / 3; // Assuming 3 buttons per question

    if (answeredQuestions === totalQuestions) {
        resultDiv.textContent = `Ви відповіли правильно на ${score} з ${totalQuestions} питань!`;
        resultDiv.style.color = "green";
    } else if (answeredQuestions === totalQuestions) {
        resultDiv.textContent = `Ви відповіли правильно на ${score} з ${totalQuestions} питань. Спробуйте ще раз!`;
        resultDiv.style.color = "red";
    }
}
function getRandomFact() {
    return facts[Math.floor(Math.random() * facts.length)];
}
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
    button.parentNode.querySelectorAll("button").forEach(btn => btn.disabled = true);

    // Check if all questions are answered
    const totalQuestions = Object.keys(correctAnswers).length;
    const answeredQuestions = document.querySelectorAll("button[disabled]").length / 3; // Assuming 3 buttons per question

    if (answeredQuestions === totalQuestions) {
        resultDiv.textContent = `Ви відповіли правильно на ${score} з ${totalQuestions} питань!`;
        resultDiv.style.color = "green";
    } else if (answeredQuestions === totalQuestions) {
        resultDiv.textContent = `Ви відповіли правильно на ${score} з ${totalQuestions} питань. Спробуйте ще раз!`;
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
    "Roblox можна використовувати для навчання програмуванню та 3D-моделюванню.",
    "Роблокс - це інтерактивний формат шоу, де глядачі можуть голосувати за своїх улюблених учасників, щоб вони залишилися в шоу.",
    "Перший роблокс відбувся в 2001 році в США на каналі MTV.",
    "Роблокс став дуже популярним у багатьох країнах, включаючи Великобританію, Індію та Японію.",
    "Роблокс часто включає різні виклики та завдання, які учасники повинні виконати, щоб забезпечити своє місце в шоу.",
    "Роблокс має багато різних версій, включаючи різні жанри, такі як музика, танці, комедія та спорт.",
    "Роблокс пропонує широкий спектр міні-ігор, створених користувачами, де гравці можуть створювати власні світи та сценарії.",
    "Роблокс має вбудовану економіку з валютою, яка називається Robux, що дозволяє купувати та продавати віртуальні предмети.",
    "Роблокс активно підтримує освітні ініціативи, пропонуючи інструменти для навчання програмуванню та дизайну.",
    "Роблокс дозволяє гравцям з різних куточків світу взаємодіяти та співпрацювати в реальному часі.",
    "Роблокс має різноманітні фестивалі та заходи, які святкують різні культурні події та святкування.",
    "Роблокс використовує власну систему програмування, яка називається Lua, що дозволяє гравцям створювати складні ігрові механіки.",
    "Роблокс має власну платформу для розробників, де користувачі можуть публікувати свої ігри і отримувати дохід від гравців.",
    "Роблокс регулярно проводить конкурси для розробників з цінними призами та можливістю показати свої навички.",
    "Роблокс підтримує широкий спектр жанрів, від пригодницьких ігор до симуляторів життя, надаючи щось цікаве для кожного гравця.",
    "Роблокс активно працює над забезпеченням безпеки своїх користувачів, запроваджуючи різні механізми модерації та захисту.",
    "Роблокс використовує власну систему програмування, яка називається Lua, що дозволяє гравцям створювати складні ігрові механіки.",
    "Роблокс має власну платформу для розробників, де користувачі можуть публікувати свої ігри і отримувати дохід від гравців.",
    "Роблокс регулярно проводить конкурси для розробників з цінними призами та можливістю показати свої навички.",
    "Роблокс підтримує широкий спектр жанрів, від пригодницьких ігор до симуляторів життя, надаючи щось цікаве для кожного гравця.",
    "Роблокс активно працює над забезпеченням безпеки своїх користувачів, запроваджуючи різні механізми модерації та захисту.",
    "Роблокс має велику кількість тематичних парків та атракціонів, створених гравцями, які можна досліджувати.",
    "Роблокс пропонує інтерактивні уроки та навчальні матеріали для новачків, щоб допомогти їм освоїти основи розробки ігор.",
    "Роблокс дозволяє створювати та брати участь у різних спортивних змаганнях, включаючи віртуальні марафони та змагання з паркуру.",
    "Роблокс має численні спільноти та форуми, де гравці можуть обмінюватися ідеями та співпрацювати над проектами.",
    "Роблокс дозволяє створювати інтерактивні історії та квести, де гравці можуть зануритися у вигадані світи та вирішувати загадки.",
];

// Функція для вибору випадкового факту
function getRandomFact() {
    return facts[Math.floor(Math.random() * facts.length)];
}

// Логіка зміни факту при натисканні кнопки
const factElement = document.getElementById('fact');
const refreshButton = document.getElementById('refresh-btn');

refreshButton.addEventListener('click', () => {
    factElement.textContent = getRandomFact();
});
document.getElementById('commentForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const commentInput = document.getElementById('commentInput');
    const commentText = commentInput.value;
    
    if (commentText.trim() === '') return;

    const commentDiv = document.createElement('div');
    commentDiv.className = 'comment';
    commentDiv.textContent = commentText;

    document.getElementById('comments').appendChild(commentDiv);

    commentInput.value = '';
});

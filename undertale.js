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
    1: "2015",
    2: "Фріск",
    3: "6",
    4: "Ні",
    5: "Тобі фокс",
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
    "Гру Undertale створив Тобі Фокс майже повністю самостійно",
    "Гра вийшла 15 вересня 2015 року",
    "Основна ідея гри — вибір між насильством і милосердям",
    "У Undertale три основні шляхи: Пацифіст, Нейтральний і Геноцид",
    "Санс — один із найпопулярніших персонажів гри",
    "Бойова система поєднує елементи RPG та 'bullet hell'",
    "Ім’я головного героя — Фріск, але його відкривають тільки на Пацифістському шляху",
    "Якщо назвати персонажа 'Frisk' на початку гри, вона одразу перейде в складний режим",
    "Сюжет гри натхненний серією Mother (EarthBound)",
    "У грі багато гумору, але є і глибокі драматичні моменти",
    "Головний антагоніст гри — Флауї, який не має душі",
    "Флауї колись був Азріелем Дрімурром, сином короля Асгора і королеви Торіель",
    "Ім’я Чара походить від слова 'character' (персонаж)",
    "На Геноцидному шляху останній бос — Санс",
    "Якщо пройти Геноцидний шлях, гра запам’ятає це навіть після видалення збережень",
    "Музика Megalovania з бою з Сансом вперше з’явилася в Radiation Halloween Hack",
    "Мегаловенія також використовувалася у фанатській грі Homestuck",
    "Тобі Фокс працював композитором для гри Deltarune, яка є його наступним проєктом",
    "В Undertale є секретний бос — Гастер",
    "Гастер — загадковий персонаж, який колись був королівським ученим",
    "Його можна знайти лише через спеціальні умови в грі",
    "У грі є секретні персонажі-спрайти, які з’являються випадково",
    "Існує теорія, що Папайрус знає про збереження та завантаження гри",
    "Санс має одне з найменших здоров’їв серед босів — лише 1 HP",
    "Попри це, він уникає майже всіх атак і є одним із найскладніших босів",
    "Атакуючи Санса, гравець бачить, що він лише дряпає його",
    "Санс називає дитину 'малим' незалежно від статі",
    "Він єдиний персонаж, який використовує шрифт Comic Sans у тексті",
    "Папайрус говорить шрифтом Papyrus",
    "У файлах гри є невикористані спрайти персонажів",
    "Ім’я Папайруса могло бути 'Times New Roman', але Тобі Фокс змінив його",
    "Музика Папайруса називається Bonetrousle",
    "У грі є багато прихованих діалогів, які залежать від вибору гравця",
    "Якщо чекати 10 хвилин перед останнім боєм на Геноцидному шляху, Санс дає додатковий діалог",
    "На Пацифістському шляху можна потанцювати з Грейт Догом, якщо не атакувати його",
    "Флауї має багато унікальних реплік, якщо гравець часто перезапускає гру",
    "Якщо пройти гру абсолютно без збережень, Флауї відзначить це",
    "Торіель любить читати книги про равликів",
    "У файлах гри є приховані музичні треки, які не використовуються",
    "Музика гри адаптується до ситуацій, змінюючись під час важливих подій",
    "Пісня Hopes and Dreams грає під час фінального бою з Азріелем",
    "На Нейтральному шляху бій з Флауї має кілька варіантів залежно від вибору гравця",
    "У деяких сценах можна побачити Гастера або його залишки",
    "Санс згадує 'жарт з молочком', який залишається нерозгаданим",
    "Теммі створювалася з допомогою художниці Temmie Chang",
    "Теммі Коледж коштує 9999 золотих, але після знижки лише 1 золоту",
    "Після фінального бою на Пацифістському шляху можна пограти в 'догрес' із Теммі",
    "Під час Геноцидного шляху магазини стають порожніми",
    "Якщо вбити всіх монстрів у локації, написи 'But nobody came…' починають з’являтися в боях",
    "Бойова система була натхненна Shin Megami Tensei",
    "Тобі Фокс спочатку планував гру як жартівливий експеримент",
    "Сюжет Undertale критикує класичні RPG за примушування до вбивств",
    "В Undertale можна врятувати навіть босів",
    "Геноцидний шлях робить світ гри темнішим і похмурішим",
    "Геноцидний шлях змінює деякі мелодії на зловісніші версії",
    "Після Геноцидного шляху навіть нове проходження змінюється",
    "Кожен шлях має унікальні фінали та додаткові сцени",
    "Після Геноцидного шляху фон у головному меню змінюється на темніший",
    "Під час Пацифістського шляху можна подружитися з усіма босами",
    "Якщо пройти гру без вбивств, Флауї стає Азріелем на мить",
    "Гравці часто створюють власні історії та альтернативні версії гри",
    "Undertale має активну фан-спільноту та багато фанатських творів",
    "Deltarune — офіційне продовження, що розповідає нову історію",
    "Санс і Папайрус названі на честь шрифтів",
    "Азріель — це анаграма слова 'Laissez-faire'",
    "Якщо часто вбивати, персонажі стають холоднішими до Фріск",
    "Санс натякає, що може подорожувати між всесвітами",
    "Тобі Фокс з'явився в Super Smash Bros. як костюм Санса",
    "Якщо гравець зупиниться під час бою з Сансом, він засне",
    "Undertale виграла кілька престижних нагород за інноваційність",
    "Тобі Фокс також написав усю музику до гри",
];

// Функція для вибору випадкового факту
function getRandomFact() {
    return facts[Math.floor(Math.random() * facts.length)];
}

// Логіка зміни факту при натисканні кнопки
const factElement = document.getElementById('fact');
const refreshButton = document.getElementById('refresh-btn');
    "Roblox була створена Девідом Башукі та Еріком Касселем у 2004 році.", 

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
let images = JSON.parse(localStorage.getItem("images")) || ["placeholder.jpg", "image2.jpg", "image3.jpg"]; // Отримуємо зображення з localStorage або використовуємо дефолтні
let currentIndex = 0;

// Функція для оновлення зображення
function navigateImage(direction) {
    const displayImage = document.getElementById("display-image");

    // Оновлюємо індекс зображення
    currentIndex += direction;
    if (currentIndex < 0) currentIndex = images.length - 1;
    if (currentIndex >= images.length) currentIndex = 0;

    // Оновлюємо джерело зображення
    displayImage.src = images[currentIndex];
}

// Функція для запуску завантаження
function triggerUpload() {
    document.getElementById("upload-input").click();
}

// Функція для обробки завантаженого зображення
function uploadImage() {
    const input = document.getElementById("upload-input");
    if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = (e) => {
            // Додаємо нове зображення до масиву
            images.push(e.target.result);
            currentIndex = images.length - 1; // Оновлюємо індекс на останнє завантажене зображення
            
            // Оновлюємо localStorage з новим масивом зображень
            localStorage.setItem("images", JSON.stringify(images));
            
            navigateImage(0); // Показуємо нове завантажене зображення
        };
        reader.readAsDataURL(input.files[0]); // Читаємо файл як DataURL
    }
}

// Отримуємо кнопку і меню
const dropdownBtn = document.querySelector('.dropdown-btn');
const dropdownContent = document.querySelector('.dropdown-content');

// Додаємо обробник подій
dropdownBtn.addEventListener('click', () => {
  dropdownContent.classList.toggle('show');
});

// Закриваємо список, якщо натиснути поза ним
window.addEventListener('click', (event) => {
  if (!event.target.matches('.dropdown-btn')) {
    const dropdowns = document.querySelectorAll('.dropdown-content');
    dropdowns.forEach((dropdown) => {
      if (dropdown.classList.contains('show')) {
        dropdown.classList.remove('show');
      }
    });
  }
});

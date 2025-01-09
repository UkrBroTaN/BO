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
    "Офіційний реліз гри відбувся у 2006 році.", 
    "Користувачі можуть створювати власні ігри за допомогою платформи Roblox Studio.", 
    "Roblox Studio використовує мову програмування Lua.", 
    "На платформі є понад 40 мільйонів різних ігор.", 
    "Деякі користувачі заробляють реальні гроші завдяки створенню ігор у Roblox.", 
    "У 2020 році кількість активних користувачів на місяць перевищила 150 мільйонів.", 
    "Внутрішня валюта Roblox називається Robux.", 
    "Можливості кастомізації аватарів у Roblox майже безмежні.", 
    "Roblox стала публічною компанією у 2021 році, вийшовши на Нью-Йоркську фондову біржу.", 
    "Roblox доступна на платформах PC, Mac, iOS, Android та Xbox One.", 
    "Гравці можуть створювати та продавати власні предмети у віртуальному магазині.", 
    "Roblox проводить різні онлайн-заходи та конкурси для користувачів.", 
    "Є спеціальні віртуальні події, такі як концерти та прем'єри фільмів.", 
    "Roblox використовує систему фільтрації контенту, щоб захистити молодих гравців.", 
    "Гравці можуть приєднуватися до груп та спільнот за інтересами.", 
    "Деякі популярні ігри в Roblox мають мільйони відвідувань.", 
    "Roblox підтримує функцію чату для гравців.", 
    "Є можливість записувати відео ігрового процесу в Roblox.", 
    "Roblox має свою академію для навчання розробці ігор - Roblox Education.", 
    "Roblox співпрацює з освітніми установами для проведення навчальних програм.", 
    "У Roblox є своя мережа розробників - Roblox DevHub.", 
    "Гравці можуть отримувати досягнення та нагороди за свої досягнення у грі.", 
    "Є програма Roblox Premium, яка надає додаткові можливості та бонуси.", 
    "Роблокс підтримує багатокористувацький режим гри.", 
    "У Roblox є можливість створювати та використовувати скрипти.", 
    "Деякі користувачі створюють власні міні-ігри всередині великих ігор.", 
    "Roblox має активну спільноту на форумах та соціальних мережах.", 
    "У Roblox є своя система голосування за ігри.", 
    "Є можливість проводити стріми ігрового процесу.", 
    "В Roblox є вбудована система створення аудіотреків.", 
    "Деякі ігри в Roblox створюються за мотивами відомих фільмів та серіалів.", 
    "Roblox підтримує використання VR-окулярів.", 
    "Є можливість створювати власні текстури для ігрових об'єктів.", 
    "Roblox має офіційний магазин з брендовою продукцією.", 
    "Користувачі можуть брати участь у бета-тестуванні нових функцій.", 
    "Roblox використовує хмарні технології для зберігання даних ігор.", 
    "У Roblox є функція голосового чату.", 
    "Гравці можуть створювати власні аватарні анімації.", 
    "Roblox підтримує кілька мов для користувачів з різних країн.", 
    "У Roblox є можливість створювати ігрові об'єкти з фізичними властивостями.", 
    "Roblox має вбудовані інструменти для тестування ігор.", 
    "Користувачі можуть створювати власні сценарії для ігор.", 
    "У Roblox є віртуальні свята та події.", 
    "Деякі розробники в Roblox стали відомими завдяки своїм іграм.", 
    "Є можливість створювати власні ігрові інтерфейси.", 
    "Roblox підтримує інтеграцію з іншими сервісами та платформами.", 
    "Гравці можуть створювати власні клуби та групи.", 
    "Roblox має систему рейтингів для ігор.", 
    "Є можливість створювати багатокористувацькі онлайн-ігри.", 
    "В Roblox є офіційний блог, де розповідають про новини та оновлення.", 
    "Roblox регулярно проводить конкурси для розробників.", 
    "Користувачі можуть обмінюватися ігровими предметами.", 
    "У Roblox є власний ринок для торгівлі ігровими предметами.", 
    "Roblox використовує технології штучного інтелекту для поліпшення ігрового досвіду.", 
    "Гравці можуть створювати власні ігрові персонажі.", 
    "У Roblox є можливість створювати інтерактивні сюжети для ігор.", 
    "Деякі ігри в Roblox мають мільярди відвідувань.", 
    "Roblox підтримує функцію автоматичного збереження прогресу в грі.", 
    "Є можливість створювати ігри з відкритим світом.", 
    "Roblox має свою віртуальну валюту для розробників - DevEx.", 
    "Деякі ігри в Roblox мають власні економічні системи.", 
    "Гравці можуть створювати власні рівні складності для ігор.", 
    "У Roblox є функція створення віртуальних магазинів.", 
    "Користувачі можуть створювати власні звукові ефекти для ігор.", 
    "Roblox підтримує створення багатомірних ігор.", 
    "Деякі ігри в Roblox стали популярнішими за відомі консольні ігри.", 
    "Roblox має свою систему досягнень та нагород.", 
    "У Roblox є можливість створювати власні ігрові механіки.", 
    "Користувачі можуть створювати власні сценарії для персонажів.", 
    "Roblox підтримує створення інтерактивних карт.", 
    "Гравці можуть створювати власні конкурси та турніри.", 
    "В Roblox є функція запису та редагування відео з ігрового процесу.", 
    "Деякі ігри в Roblox стали основою для створення реальних настільних ігор.", 
    "У Roblox є вбудовані інструменти для створення анімацій.", 
    "Користувачі можуть створювати власні внутрішньоігрові завдання.", 
    "Roblox підтримує створення ігор для всіх вікових груп.", 
    "У Roblox є система тестування продуктивності ігор.", 
    "Користувачі можуть створювати власні аватарні аксесуари.", 
    "Roblox має систему збереження та завантаження користувацьких налаштувань.", 
    "У Roblox є віртуальні музеї та виставки.", 
    "Гравці можуть створювати власні фестивалі та заходи.", 
    "Користувачі можуть створювати власні віртуальні школи та класи.", 
    "В Roblox є можливість створювати багатокористувацькі кооперативні ігри.", 
    "Roblox підтримує створення інтерактивних енциклопедій.", 
    "Гравці можуть створювати власні віртуальні тури.", 
    "У Roblox є функція створення віртуальних спортивних заходів.", 
    "Roblox підтримує створення інтерактивних підручників.",
    "Roblox був заснований у 2004 році",  
"Гра була офіційно випущена у 2006 році",  
"Засновниками Roblox є Девід Басзукі та Ерік Кассель",  
"Roblox спочатку називався DynaBlocks",  
"Користувачі можуть створювати власні ігри у Roblox Studio",  
"Roblox використовує Lua як основну мову програмування",  
"У Roblox є своя віртуальна валюта під назвою Robux",  
"Robux можна купити за реальні гроші або заробити в іграх",  
"У Roblox можна грати як на ПК, так і на мобільних пристроях",  
"На платформі доступно мільйони ігор",  
"У Roblox є функція аватарів, які можна налаштовувати",  
"Roblox популярний серед дітей і підлітків",  
"Є можливість продавати ігрові предмети через Marketplace",  
"Користувачі можуть створювати групи в Roblox",  
"Roblox активно підтримує розробників своїх ігор",  
"Розробники отримують 70% від продажів через Robux",  
"Щодня Roblox відвідують десятки мільйонів користувачів",  
"Roblox доступний у понад 180 країнах світу",  
"Є можливість створювати скрипти для автоматизації у грі",  
"Roblox Studio доступний для безкоштовного завантаження",  
"Гравці можуть додавати друзів і спілкуватися через чат",  
"У Roblox є функція голосового чату",  
"Платформа має фільтрацію вмісту для дітей",  
"Roblox підтримує VR-ігри",  
"У Roblox є система бейджів для досягнень",  
"Користувачі можуть створювати костюми для своїх аватарів",  
"Існують офіційні події Roblox із призами",  
"Roblox випустив мобільний додаток у 2012 році",  
"Robux можна обміняти на реальні гроші через DevEx",  
"У Roblox є система приватних серверів",  
"Користувачі можуть створювати свої карти",  
"Roblox має кілька жанрів ігор, включаючи симулятори та шутери",  
"Roblox використовує 3D-графіку",  
"У Roblox є система партнерських програм для розробників",  
"Вік користувачів Roblox переважно 9-16 років",  
"У Roblox є інтеграція з Twitch для стрімінгу",  
"Існують ігри, що відтворюють популярні фільми та серіали",  
"У Roblox є своя музика та звукові ефекти",  
"У платформу регулярно додаються оновлення",  
"Roblox дозволяє створювати гільдії для спільної гри",  
"Користувачі можуть купувати та продавати аксесуари",  
"У Roblox є система рейтингу ігор",  
"Гравці можуть відзначати улюблені ігри",  
"У Roblox є система донатів для підтримки розробників",  
"Користувачі можуть створювати власні інтерфейси",  
"Roblox співпрацює з великими брендами",  
"На платформі є освітні програми для дітей",  
"Roblox використовує клієнт-серверну архітектуру",  
"У Roblox є офіційна програма для навчання кодування",  
"Користувачі можуть створювати свої анімації",  
"Існують спільноти для підтримки новачків",  
"Roblox був найпопулярнішою платформою для ігор у 2021 році",  
"Є система репортів для модерації контенту",  
"Roblox має свою систему нагород",  
"Користувачі можуть створювати історії в іграх",  
"Roblox підтримує мобільні та комп’ютерні контролери",  
"Платформа має багатий вибір аксесуарів",  
"Roblox підтримує кілька мов інтерфейсу",  
"У Roblox можна налаштовувати фізику об'єктів",  
"На платформі є офіційний блог для новин",  
"Roblox має партнерські ігри з реальними компаніями",  
"У Roblox є система навчання для програмістів",  
"Користувачі можуть робити подарунки друзям",  
"На платформі доступні тематичні івенти",  
"Roblox має унікальну систему економіки",  
"Розробники можуть створювати музику для своїх ігор",  
"У Roblox є система банів за порушення правил",  
"Гравці можуть зберігати прогрес у хмарі",  
"У Roblox є система спільного створення ігор",  
"Користувачі можуть створювати арени для битв",  
"Roblox має інтеграцію зі сторонніми інструментами",  
"У Roblox є бібліотека ресурсів для розробників",  
"Ігри в Roblox можуть бути однокористувацькими або багатокористувацькими",  
"На платформі є популярні ігри з мільйонами гравців",  
"Roblox підтримує створення 3D-моделей",  
"У Roblox є система обміну предметами",  
"Користувачі можуть налаштовувати текстури об'єктів",  
"Roblox підтримує створення головоломок",  
"У Roblox є освітні ігри",  
"На платформі є інтеграція з Discord",  
"Roblox підтримує стрімінг безпосередньо з гри",  
"У Roblox є система завантаження модулів",  
"Гравці можуть створювати власні скін-паки",  
"Roblox підтримує створення карт із сюжетами",  
"У Roblox можна організовувати турніри",  
"Користувачі можуть створювати складні механізми",  
"Roblox має свою систему досягнень",  
"На платформі є спеціальні ігри для вечірок",  
"У Roblox є функція фото-режиму",  
"Платформа підтримує HDR-графіку",  
"У Roblox є колекційні предмети",  
"Гравці можуть використовувати анімаційні ролики",  
"У Roblox можна налаштувати погоду у грі",  
"Платформа підтримує інтеграцію з YouTube",  
"Roblox дозволяє створювати інтерактивні карти",  
"Користувачі можуть обирати між різними стилями гри",  
"На платформі є ігри з відкритим світом",  
"Roblox має свій офіційний мерч",  
"У Roblox є система оновлень ресурсів у реальному часі",  
"Платформа дозволяє створювати ігри для будь-якого віку",  
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

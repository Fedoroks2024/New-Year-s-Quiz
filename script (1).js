const quizTitle = document.getElementById('quiz-title');
const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const nextButton = document.getElementById('next-button');
const resultContainer = document.getElementById('result-container');
const resultText = document.getElementById('result-text');
const restartButton = document.getElementById('restart-button');
const backToMainButton = document.getElementById('back-to-main');


let currentQuestionIndex = 0;
let score = 0;
let quizId;
let questions = [];

const allQuizzes = {
    "1": {
        title: "Новый год",
        questions: [
            {
              question: "Какой символ Нового года?",
                options: ["Заяц", "Снежинка", "Елка", "Тыква"],
                answer: 2
            },
            {
                question: "Кто главный в Новый Год?",
                options: ["Санта Клаус", "Дед Мороз", "Снегурочка", "Ведьма"],
                answer: 1
            },
            {
                question: "Сколько дней выходных на Новый год?",
                options: ["10", "1", "7", "3"],
                answer: 0
            },
            {
                question: "Какой напиток пьют на Новый год?",
                options: ["Чай", "Кофе", "Шампанское", "Сок"],
                answer: 2
            },
            {
                question: "Что наряжают на Новый год?",
                options: ["Тыкву", "Елку", "Берёзу", "Пальму"],
                answer: 1
            },
            {
                question: "Какой салат популярен на Новый год?",
                options: ["Оливье", "Цезарь", "Греческий", "Мимоза"],
                answer: 0
            },
            {
                question: "Когда наступает Новый год?",
                options: ["21 декабря", "1 января", "7 января", "31 декабря"],
                answer: 1
            },
            {
                question: "Что дарят на Новый год?",
                options: ["Деньги", "Подарки", "Билеты", "Цветы"],
                answer: 1
            },
            {
              question: "Где обычно встречают Новый год?",
                options: ["В лесу", "Дома", "В ресторане", "В гостях"],
                answer: 1
            },
            {
              question: "Какое блюдо готовят на Новый Год?",
                options: ["Борщ", "Плов", "Холодец", "Солянка"],
                answer: 2
           }
        ]
    },
  "2": {
        title: "Зимние праздники",
        questions: [
            {
                question: "Какой праздник отмечают 25 декабря?",
                options: ["Рождество", "Новый год", "День благодарения", "Пасха"],
                answer: 0
            },
            {
                question: "Какой из этих праздников не зимний?",
                 options: ["Масленица", "День Святого Патрика", "Крещение", "День святого Валентина"],
                 answer: 1
             },
            {
                question: "Какой праздник отмечают православные 7 января?",
                options: ["Рождество", "Крещение", "Пасха", "Троица"],
                answer: 0
            },
            {
                question: "В какой стране появился праздник Ханука?",
                options: ["Греция", "Италия", "Израиль", "Египет"],
                answer: 2
            },
            {
                question: "Какой праздник связан с колядками?",
                options: ["День знаний", "Пасха", "Масленица", "Святки"],
                answer: 3
            },
            {
                question: "Какой праздник связан с купанием в проруби?",
                options: ["Троица", "Крещение", "День Ивана Купала", "Масленица"],
                answer: 1
             },
             {
                question: "Какой праздник отмечается за семь недель до Пасхи?",
                options: ["Масленица", "Крещение", "День Святого Валентина", "Новый год"],
                answer: 0
             },
             {
              question: "Какой праздник связан с проводами зимы?",
                options: ["Новый год", "День благодарения", "Масленица", "День независимости"],
                answer: 2
             },
             {
                 question: "Какому святому посвящено Рождество?",
                options: ["Святому Николаю", "Святому Валентину", "Святому Патрику", "Святому Духу"],
                answer: 0
             },
             {
              question: "Какой праздник связан с гаданием?",
                 options: ["День святого Валентина", "Новый год", "Святки", "Масленица"],
                 answer: 2
             }
        ]
    },
    "3": {
        title: "История Нового года",
        questions: [
           {
                question: "В какой стране впервые начали отмечать Новый год?",
                options: ["Египет", "Рим", "Греция", "Китай"],
                answer: 0
            },
            {
                question: "Когда Новый год отмечали 1 сентября?",
                options: ["В древней Руси", "В Риме", "В Китае", "В Египте"],
                answer: 0
            },
            {
                question: "Когда в России Новый год начали отмечать 1 января?",
                options: ["Пётр I", "Екатерина II", "Иван Грозный", "Александр III"],
                answer: 0
            },
            {
              question: "Кто ввел традицию наряжать елку?",
               options: ["Пётр I", "Екатерина II", "Александр II", "Николай II"],
                answer: 0
            },
            {
                question: "Кто считается прообразом Деда Мороза?",
               options: ["Иисус Христос", "Святой Николай", "Зевс", "Один"],
                 answer: 1
            },
            {
                question: "Когда появился обычай запускать фейерверки на Новый год?",
                options: ["В 18 веке", "В 15 веке", "В древности", "В 20 веке"],
                answer: 2
            },
            {
                question: "Какой город был центром новогодних гуляний в царской России?",
                 options: ["Москва", "Петербург", "Киев", "Казань"],
                answer: 1
            },
           {
                question: "Как назывался новогодний праздник у древних славян?",
                options: ["Коляда", "Масленица", "Иван Купала", "Яблочный Спас"],
                answer: 0
           },
            {
                question: "В каком году Россия перешла на григорианский календарь?",
                options: ["1918", "1917", "1921", "1922"],
                answer: 0
            },
            {
               question: "Какой персонаж сопровождал Деда Мороза в советское время?",
               options: ["Баба Яга", "Леший", "Снегурочка", "Кикимора"],
               answer: 2
            }
        ]
    },
    "4": {
        title: "Новогодние фильмы",
        questions: [
            {
                question: "Какой фильм известен как классика новогоднего кино?",
                options: ["Один дома", "Гарри Поттер", "Титаник", "Аватар"],
                answer: 0
            },
            {
              question: "В каком фильме звучит песня 'Jingle Bell Rock'?",
              options: ["Один дома", "Гринч", "Реальная любовь", "Плохой Санта"],
              answer: 0
            },
            {
              question: "В каком фильме герой мечтает о 'чуде' на Новый год?",
              options: ["Дневник Бриджит Джонс", "Интуиция", "Ирония судьбы", "Отпуск по обмену"],
              answer: 2
            },
           {
                question: "Какой фильм основан на сказке 'Морозко'?",
                options: ["Чародеи", "12 месяцев", "Снежная королева", "Морозко"],
                 answer: 3
           },
            {
                question: "Кто сыграл главного героя в фильме 'Один дома'?",
                options: ["Маколей Калкин", "Джон Траволта", "Том Круз", "Джим Керри"],
                answer: 0
            },
            {
               question: "В каком фильме героини меняются домами на Рождество?",
                options: ["Реальная любовь", "Интуиция", "Отпуск по обмену", "Дневник Бриджит Джонс"],
                answer: 2
            },
            {
                question: "Какой фильм считается пародией на новогодние киноленты?",
                options: ["Зелёная миля", "Плохой Санта", "Дневник памяти", "Унесенные ветром"],
                 answer: 1
            },
            {
                question: "В каком фильме главная героиня - волшебница?",
                options: ["Золушка", "Чародеи", "Русалочка", "Белоснежка"],
                 answer: 1
            },
            {
                question: "Какой фильм рассказывает о необычном рождественском духе?",
                options: ["Полярный экспресс", "Гринч", "Хранители снов", "Чудо на 34-й улице"],
                answer: 3
           },
            {
                question: "Какой фильм рассказывает про новогоднюю авантюру в аэропорту?",
                options: ["Ирония судьбы", "Ёлки", "Один дома 2", "Трудности перевода"],
                answer: 2
            }
        ]
    },
    "5": {
        title: "Новогодние традиции",
        questions: [
             {
                question: "Что обычно кладут под елку на Новый год?",
                 options: ["Камни", "Подарки", "Журналы", "Деньги"],
                 answer: 1
             },
            {
                question: "Какой фрукт ассоциируется с новогодними праздниками?",
                options: ["Банан", "Апельсин", "Яблоко", "Груша"],
                answer: 1
            },
            {
                question: "Какой напиток обычно пьют под бой курантов?",
               options: ["Чай", "Сок", "Шампанское", "Кофе"],
                 answer: 2
             },
            {
                question: "Что обычно загадывают под бой курантов?",
                options: ["Желание", "Поздравление", "Тост", "Загадку"],
                 answer: 0
             },
            {
               question: "Какой обычай связан с приходом Нового года?",
                options: ["Перестановка мебели", "Открытие дверей", "Уборка дома", "Разбивание посуды"],
                answer: 2
            },
            {
                question: "Какой персонаж приносит подарки на Новый год в США?",
                options: ["Дед Мороз", "Снегурочка", "Санта Клаус", "Гном"],
                answer: 2
            },
            {
                question: "Какая традиция связана с двенадцатью виноградинами в Испании?",
                 options: ["Рождество", "Новый год", "Масленица", "День благодарения"],
                 answer: 1
            },
            {
               question: "Какой обычай связан с масками на Новый год?",
                options: ["Китай", "Бразилия", "Италия", "Индия"],
                answer: 1
            },
           {
                 question: "Какая традиция связана с новогодними пирогами?",
                  options: ["Германия", "Франция", "Англия", "Америка"],
                 answer: 2
            },
             {
              question: "Какая традиция связана с первым гостем в Новом году?",
                options: ["Германия", "Ирландия", "Шотландия", "Япония"],
                 answer: 2
             }
        ]
    },
      "6": {
        title: "Новогодние песни",
        questions: [
          {
              question: "Какая песня является символом новогоднего настроения?",
               options: ["Jingle Bells", "Let It Be", "Hotel California", "Bohemian Rhapsody"],
              answer: 0
          },
          {
              question: "Какая песня обычно звучит на Рождество?",
              options: ["We Wish You a Merry Christmas", "Happy Birthday", "The Sound of Silence", "Stairway to Heaven"],
               answer: 0
           },
          {
                question: "Какой популярной новогодней песне более 100 лет?",
                 options: ["Last Christmas", "Feliz Navidad", "Jingle Bell Rock", "Silent Night"],
                 answer: 3
          },
           {
                question: "Кто исполняет песню 'Last Christmas'?",
                options: ["Wham!", "Queen", "The Beatles", "Coldplay"],
                answer: 0
          },
          {
                question: "Какая песня начинается словами 'Happy holidays are coming'?",
                options: ["Jingle Bell Rock", "Santa Claus is Coming to Town", "Wonderful Christmastime", "Coca-Cola Holiday Song"],
                 answer: 3
          },
          {
               question: "Какой популярной песне посвящена зимняя тематика?",
               options: ["Summer of '69", "Yesterday", "Winter Wonderland", "Imagine"],
               answer: 2
          },
           {
                question: "Какая песня просит 'Let it snow'?",
                options: ["Jingle Bells", "Let It Snow", "White Christmas", "Santa Baby"],
               answer: 1
          },
          {
                question: "Какая песня рассказывает о том, как Санта приезжает в город?",
               options: ["Jingle Bell Rock", "Santa Claus is Coming to Town", "Feliz Navidad", "It's Beginning to Look a Lot Like Christmas"],
                answer: 1
           },
            {
                question: "Какая песня поётся с пожеланием счастливого Рождества?",
                options: ["Last Christmas", "Feliz Navidad", "Happy New Year", "All I Want for Christmas Is You"],
                answer: 1
            },
            {
                question: "Какая песня начинается словами 'All the lights are shining so brightly'?",
               options: ["Let It Snow", "Jingle Bells", "White Christmas", "Happy New Year"],
                answer: 3
            }
        ]
    },
     "7": {
        title: "Новогодние герои",
        questions: [
           {
               question: "Как зовут главного волшебника Нового года?",
               options: ["Гринч", "Санта Клаус", "Дед Мороз", "Гарри Поттер"],
               answer: 2
           },
           {
                question: "Кто помогает Деду Морозу?",
                 options: ["Снежная Королева", "Баба Яга", "Снегурочка", "Фея"],
                answer: 2
           },
            {
                 question: "Какого персонажа бояться дети?",
                 options: ["Бабу Ягу", "Деда Мороза", "Снегурочку", "Лешего"],
                 answer: 0
            },
            {
                question: "В какой стране живёт Санта Клаус?",
                options: ["Россия", "Германия", "США", "Финляндия"],
                 answer: 2
           },
           {
                question: "Кто является антагонистом в новогодней сказке?",
               options: ["Белоснежка", "Золушка", "Гринч", "Снегурочка"],
                answer: 2
           },
            {
               question: "Какой персонаж приходит с подарками в итальянской традиции?",
               options: ["Баба Яга", "Санта Клаус", "Фея Бефана", "Гном"],
                answer: 2
            },
             {
                question: "Какой персонаж сопровождает Деда Мороза на праздниках?",
                options: ["Леший", "Кикимора", "Русалка", "Снегурочка"],
                answer: 3
             },
             {
                question: "Кто развозит подарки на санях с оленями?",
               options: ["Гринч", "Дед Мороз", "Санта Клаус", "Зимний волшебник"],
                answer: 2
            },
            {
                question: "Какой персонаж является символом праздничного настроения?",
                options: ["Злой волшебник", "Кот Баюн", "Снеговик", "Леший"],
                answer: 2
            },
            {
               question: "Кто приносит подарки детям в Нидерландах?",
                options: ["Дед Мороз", "Санта Клаус", "Синтерклаас", "Бефана"],
                 answer: 2
            }
        ]
    },
    "8": {
        title: "Новогодние угощения",
        questions: [
           {
               question: "Какой салат традиционно готовят на Новый год в России?",
               options: ["Цезарь", "Греческий", "Оливье", "Мимоза"],
                answer: 2
           },
           {
               question: "Какой напиток обычно пьют на новогодний стол?",
                options: ["Чай", "Сок", "Шампанское", "Кофе"],
                answer: 2
           },
           {
               question: "Какой десерт готовят на Рождество?",
               options: ["Шоколадный торт", "Имбирное печенье", "Тирамису", "Чизкейк"],
                answer: 1
           },
            {
               question: "Какие фрукты часто подают на новогодний стол?",
               options: ["Ананас", "Апельсины", "Киви", "Манго"],
                answer: 1
           },
            {
               question: "Какой горячий напиток популярен в зимние праздники?",
                options: ["Чай с лимоном", "Какао", "Глинтвейн", "Кофе с молоком"],
                 answer: 2
           },
            {
              question: "Какое блюдо часто готовят в качестве основного на Новый год?",
                options: ["Плов", "Борщ", "Запеченная утка", "Суши"],
                 answer: 2
            },
            {
                question: "Какой вид печенья часто пекут на Новый год?",
                 options: ["Шоколадное печенье", "Овсяное печенье", "Имбирное печенье", "Песочное печенье"],
                 answer: 2
             },
           {
                 question: "Какой десерт готовят в Италии на Рождество?",
                options: ["Панеттоне", "Тирамису", "Крем-брюле", "Чизкейк"],
                answer: 0
            },
             {
                question: "Какой десерт часто готовят в Великобритании на Рождество?",
                options: ["Рождественский пудинг", "Шоколадный торт", "Фруктовый торт", "Пирог с яблоками"],
                answer: 0
            },
            {
                 question: "Какой хлеб обычно пекут на Рождество в Германии?",
               options: ["Чёрный хлеб", "Штоллен", "Белый хлеб", "Ржаной хлеб"],
                answer: 1
             }
        ]
    },
     "9": {
        title: "Зимние виды спорта",
        questions: [
           {
                 question: "Какой вид спорта включает катание на доске по снегу?",
                options: ["Хоккей", "Фигурное катание", "Сноуборд", "Керлинг"],
                answer: 2
            },
             {
                question: "Какой вид спорта играют с шайбой на льду?",
                 options: ["Конькобежный спорт", "Биатлон", "Хоккей", "Фристайл"],
                 answer: 2
             },
             {
                 question: "Какой вид спорта сочетает в себе лыжный спорт и стрельбу?",
                 options: ["Биатлон", "Фристайл", "Сноубординг", "Керлинг"],
                answer: 0
             },
             {
                question: "Какой вид спорта включает скольжение по льду на коньках?",
                options: ["Скелетон", "Конькобежный спорт", "Бобслей", "Фристайл"],
                answer: 1
             },
            {
               question: "Какой вид спорта включает прыжки на лыжах с трамплина?",
               options: ["Горные лыжи", "Фристайл", "Прыжки с трамплина", "Сноубординг"],
                answer: 2
           },
            {
               question: "Какой вид спорта включает спуск на санях по ледяной трассе?",
                 options: ["Сноубординг", "Кёрлинг", "Бобслей", "Фигурное катание"],
                  answer: 2
             },
             {
                 question: "Какой вид спорта включает скольжение по льду с щетками?",
                 options: ["Фигурное катание", "Керлинг", "Шорт-трек", "Бобслей"],
                answer: 1
             },
             {
                 question: "Какой вид спорта включает скоростное скольжение по льду?",
                options: ["Хоккей", "Биатлон", "Шорт-трек", "Скелетон"],
                answer: 2
             },
            {
                 question: "Какой вид спорта включает трюки на лыжах?",
                options: ["Горные лыжи", "Сноубординг", "Фристайл", "Конькобежный спорт"],
                answer: 2
            },
            {
                question: "Какой вид спорта связан со спуском на лыжах с горы?",
                 options: ["Биатлон", "Горные лыжи", "Фристайл", "Конькобежный спорт"],
                answer: 1
            }
        ]
    },
    "10": {
        title: "Мифы и легенды Нового года",
        questions: [
          {
               question: "Какой мифологический персонаж является символом Нового года в Японии?",
                options: ["Ороти", "Аматэрасу", "Шинигами", "Сингоро"],
                answer: 3
          },
           {
               question: "Какая легенда связана с елкой на Новый год?",
                 options: ["Дерево исцеления", "Дерево любви", "Дерево процветания", "Дерево жизни"],
                 answer: 3
           },
           {
                question: "Какой персонаж считался прообразом Деда Мороза в славянской мифологии?",
               options: ["Зевс", "Святой Николай", "Морозко", "Перун"],
                 answer: 2
           },
           {
                question: "Какой миф объясняет появление снега?",
                 options: ["Слезы богов", "Песок из пустыни", "Перья ангелов", "Дыхание дракона"],
                answer: 2
           },
           {
                question: "Какой персонаж из мифов и легенд приносит подарки детям в Италии?",
                 options: ["Баба Яга", "Фея Бефана", "Гном", "Леший"],
                 answer: 1
           },
           {
                question: "Какой миф объясняет появление новогодней звезды?",
                 options: ["Звезда надежды", "Звезда процветания", "Вифлеемская звезда", "Звезда удачи"],
                answer: 2
            },
           {
                question: "Какой миф связан с обычаем украшать дом к Новому году?",
               options: ["Защита от злых духов", "Привлечение богов", "Привлечение удачи", "Привлечение любви"],
                answer: 0
          },
           {
                question: "Какой миф рассказывает о происхождении новогодних фейерверков?",
                options: ["Голоса богов", "Гнев дракона", "Магия солнца", "Салюты духов"],
                 answer: 3
          },
           {
                 question: "Какой миф связан с новогодним гаданием?",
                 options: ["Просьба к богам", "Поиск сокровищ", "Предсказание будущего", "Проверка сил"],
                 answer: 2
           },
            {
                 question: "Какой персонаж является символом нового начала?",
                options: ["Баба Яга", "Леший", "Снеговик", "Дед Мороз"],
                answer: 3
           }
        ]
    }
};
function getQuizIdFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
}

function startQuiz() {
    quizId = getQuizIdFromUrl();
    if (!quizId || !allQuizzes[quizId]) {
      alert('Неверный идентификатор квиза.');
      return;
    }
    const currentQuiz = allQuizzes[quizId];
    questions = currentQuiz.questions;
    quizTitle.textContent = currentQuiz.title;
    currentQuestionIndex = 0;
    score = 0;
    resultContainer.classList.add('hidden');
    nextButton.textContent = "Следующий вопрос";
    showQuestion();
}

function showQuestion() {
    if (currentQuestionIndex >= questions.length) {
        showResult();
        return;
    }

    const question = questions[currentQuestionIndex];
    questionElement.textContent = question.question;
    optionsElement.innerHTML = '';

    question.options.forEach((option, index) => {
        const li = document.createElement('li');
        li.textContent = option;
        li.addEventListener('click', () => selectAnswer(index));
        optionsElement.appendChild(li);
    });

    if (currentQuestionIndex === questions.length - 1) {
        nextButton.textContent = "Показать результат";
    }
}


function selectAnswer(index) {
    const selectedOption = optionsElement.children[index];
  
    if (selectedOption.classList.contains('selected')) {
      return;
    }
    
    Array.from(optionsElement.children).forEach(li => li.classList.remove('selected'));
  
    selectedOption.classList.add('selected');
    
    const question = questions[currentQuestionIndex];
    if (index === question.answer) {
        score++;
    }
}

function updateScoreInStorage(score) {
    const totalScore = parseInt(localStorage.getItem('totalScore') || '0');
    localStorage.setItem('totalScore', totalScore + score);
}

function showResult() {
    questionElement.textContent = '';
    optionsElement.innerHTML = '';
    resultText.textContent = `Вы набрали ${score} из ${questions.length} баллов!`;
    resultContainer.classList.remove('hidden');
    const quizTitle = document.getElementById('quiz-title');
const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const nextButton = document.getElementById('next-button');
const resultContainer = document.getElementById('result-container');
const resultText = document.getElementById('result-text');
const restartButton = document.getElementById('restart-button');
const backToMainButton = document.getElementById('back-to-main');


let currentQuestionIndex = 0;
let score = 0;
let quizId;
let questions = [];

const allQuizzes = {
    "1": {
        title: "Новый год",
        questions: [
            {
              question: "Какой символ Нового года?",
                options: ["Заяц", "Снежинка", "Елка", "Тыква"],
                answer: 2
            },
            {
                question: "Кто главный в Новый Год?",
                options: ["Санта Клаус", "Дед Мороз", "Снегурочка", "Ведьма"],
                answer: 1
            },
            {
                question: "Сколько дней выходных на Новый год?",
                options: ["10", "1", "7", "3"],
                answer: 0
            },
            {
                question: "Какой напиток пьют на Новый год?",
                options: ["Чай", "Кофе", "Шампанское", "Сок"],
                answer: 2
            },
            {
                question: "Что наряжают на Новый год?",
                options: ["Тыкву", "Елку", "Берёзу", "Пальму"],
                answer: 1
            },
            {
                question: "Какой салат популярен на Новый год?",
                options: ["Оливье", "Цезарь", "Греческий", "Мимоза"],
                answer: 0
            },
            {
                question: "Когда наступает Новый год?",
                options: ["21 декабря", "1 января", "7 января", "31 декабря"],
                answer: 1
            },
            {
                question: "Что дарят на Новый год?",
                options: ["Деньги", "Подарки", "Билеты", "Цветы"],
                answer: 1
            },
            {
              question: "Где обычно встречают Новый год?",
                options: ["В лесу", "Дома", "В ресторане", "В гостях"],
                answer: 1
            },
            {
              question: "Какое блюдо готовят на Новый Год?",
                options: ["Борщ", "Плов", "Холодец", "Солянка"],
                answer: 2
           }
        ]
    },
  "2": {
        title: "Зимние праздники",
        questions: [
            {
                question: "Какой праздник отмечают 25 декабря?",
                options: ["Рождество", "Новый год", "День благодарения", "Пасха"],
                answer: 0
            },
            {
                question: "Какой из этих праздников не зимний?",
                 options: ["Масленица", "День Святого Патрика", "Крещение", "День святого Валентина"],
                 answer: 1
             },
            {
                question: "Какой праздник отмечают православные 7 января?",
                options: ["Рождество", "Крещение", "Пасха", "Троица"],
                answer: 0
            },
            {
                question: "В какой стране появился праздник Ханука?",
                options: ["Греция", "Италия", "Израиль", "Египет"],
                answer: 2
            },
            {
                question: "Какой праздник связан с колядками?",
                options: ["День знаний", "Пасха", "Масленица", "Святки"],
                answer: 3
            },
            {
                question: "Какой праздник связан с купанием в проруби?",
                options: ["Троица", "Крещение", "День Ивана Купала", "Масленица"],
                answer: 1
             },
             {
                question: "Какой праздник отмечается за семь недель до Пасхи?",
                options: ["Масленица", "Крещение", "День Святого Валентина", "Новый год"],
                answer: 0
             },
             {
              question: "Какой праздник связан с проводами зимы?",
                options: ["Новый год", "День благодарения", "Масленица", "День независимости"],
                answer: 2
             },
             {
                 question: "Какому святому посвящено Рождество?",
                options: ["Святому Николаю", "Святому Валентину", "Святому Патрику", "Святому Духу"],
                answer: 0
             },
             {
              question: "Какой праздник связан с гаданием?",
                 options: ["День святого Валентина", "Новый год", "Святки", "Масленица"],
                 answer: 2
             }
        ]
    },
    "3": {
        title: "История Нового года",
        questions: [
           {
                question: "В какой стране впервые начали отмечать Новый год?",
                options: ["Египет", "Рим", "Греция", "Китай"],
                answer: 0
            },
            {
                question: "Когда Новый год отмечали 1 сентября?",
                options: ["В древней Руси", "В Риме", "В Китае", "В Египте"],
                answer: 0
            },
            {
                question: "Когда в России Новый год начали отмечать 1 января?",
                options: ["Пётр I", "Екатерина II", "Иван Грозный", "Александр III"],
                answer: 0
            },
            {
              question: "Кто ввел традицию наряжать елку?",
               options: ["Пётр I", "Екатерина II", "Александр II", "Николай II"],
                answer: 0
            },
            {
                question: "Кто считается прообразом Деда Мороза?",
               options: ["Иисус Христос", "Святой Николай", "Зевс", "Один"],
                 answer: 1
            },
            {
                question: "Когда появился обычай запускать фейерверки на Новый год?",
                options: ["В 18 веке", "В 15 веке", "В древности", "В 20 веке"],
                answer: 2
            },
            {
                question: "Какой город был центром новогодних гуляний в царской России?",
                 options: ["Москва", "Петербург", "Киев", "Казань"],
                answer: 1
            },
           {
                question: "Как назывался новогодний праздник у древних славян?",
                options: ["Коляда", "Масленица", "Иван Купала", "Яблочный Спас"],
                answer: 0
           },
            {
                question: "В каком году Россия перешла на григорианский календарь?",
                options: ["1918", "1917", "1921", "1922"],
                answer: 0
            },
            {
               question: "Какой персонаж сопровождал Деда Мороза в советское время?",
               options: ["Баба Яга", "Леший", "Снегурочка", "Кикимора"],
               answer: 2
            }
        ]
    },
    "4": {
        title: "Новогодние фильмы",
        questions: [
            {
                question: "Какой фильм известен как классика новогоднего кино?",
                options: ["Один дома", "Гарри Поттер", "Титаник", "Аватар"],
                answer: 0
            },
            {
              question: "В каком фильме звучит песня 'Jingle Bell Rock'?",
              options: ["Один дома", "Гринч", "Реальная любовь", "Плохой Санта"],
              answer: 0
            },
            {
              question: "В каком фильме герой мечтает о 'чуде' на Новый год?",
              options: ["Дневник Бриджит Джонс", "Интуиция", "Ирония судьбы", "Отпуск по обмену"],
              answer: 2
            },
           {
                question: "Какой фильм основан на сказке 'Морозко'?",
                options: ["Чародеи", "12 месяцев", "Снежная королева", "Морозко"],
                 answer: 3
           },
            {
                question: "Кто сыграл главного героя в фильме 'Один дома'?",
                options: ["Маколей Калкин", "Джон Траволта", "Том Круз", "Джим Керри"],
                answer: 0
            },
            {
               question: "В каком фильме героини меняются домами на Рождество?",
                options: ["Реальная любовь", "Интуиция", "Отпуск по обмену", "Дневник Бриджит Джонс"],
                answer: 2
            },
            {
                question: "Какой фильм считается пародией на новогодние киноленты?",
                options: ["Зелёная миля", "Плохой Санта", "Дневник памяти", "Унесенные ветром"],
                 answer: 1
            },
            {
                question: "В каком фильме главная героиня - волшебница?",
                options: ["Золушка", "Чародеи", "Русалочка", "Белоснежка"],
                 answer: 1
            },
            {
                question: "Какой фильм рассказывает о необычном рождественском духе?",
                options: ["Полярный экспресс", "Гринч", "Хранители снов", "Чудо на 34-й улице"],
                answer: 3
           },
            {
                question: "Какой фильм рассказывает про новогоднюю авантюру в аэропорту?",
                options: ["Ирония судьбы", "Ёлки", "Один дома 2", "Трудности перевода"],
                answer: 2
            }
        ]
    },
    "5": {
        title: "Новогодние традиции",
        questions: [
             {
                question: "Что обычно кладут под елку на Новый год?",
                 options: ["Камни", "Подарки", "Журналы", "Деньги"],
                 answer: 1
             },
            {
                question: "Какой фрукт ассоциируется с новогодними праздниками?",
                options: ["Банан", "Апельсин", "Яблоко", "Груша"],
                answer: 1
            },
            {
                question: "Какой напиток обычно пьют под бой курантов?",
               options: ["Чай", "Сок", "Шампанское", "Кофе"],
                 answer: 2
             },
            {
                question: "Что обычно загадывают под бой курантов?",
                options: ["Желание", "Поздравление", "Тост", "Загадку"],
                 answer: 0
             },
            {
               question: "Какой обычай связан с приходом Нового года?",
                options: ["Перестановка мебели", "Открытие дверей", "Уборка дома", "Разбивание посуды"],
                answer: 2
            },
            {
                question: "Какой персонаж приносит подарки на Новый год в США?",
                options: ["Дед Мороз", "Снегурочка", "Санта Клаус", "Гном"],
                answer: 2
            },
            {
                question: "Какая традиция связана с двенадцатью виноградинами в Испании?",
                 options: ["Рождество", "Новый год", "Масленица", "День благодарения"],
                 answer: 1
            },
            {
               question: "Какой обычай связан с масками на Новый год?",
                options: ["Китай", "Бразилия", "Италия", "Индия"],
                answer: 1
            },
           {
                 question: "Какая традиция связана с новогодними пирогами?",
                  options: ["Германия", "Франция", "Англия", "Америка"],
                 answer: 2
            },
             {
              question: "Какая традиция связана с первым гостем в Новом году?",
                options: ["Германия", "Ирландия", "Шотландия", "Япония"],
                 answer: 2
             }
        ]
    },
      "6": {
        title: "Новогодние песни",
        questions: [
          {
              question: "Какая песня является символом новогоднего настроения?",
               options: ["Jingle Bells", "Let It Be", "Hotel California", "Bohemian Rhapsody"],
              answer: 0
          },
          {
              question: "Какая песня обычно звучит на Рождество?",
              options: ["We Wish You a Merry Christmas", "Happy Birthday", "The Sound of Silence", "Stairway to Heaven"],
               answer: 0
           },
          {
                question: "Какой популярной новогодней песне более 100 лет?",
                 options: ["Last Christmas", "Feliz Navidad", "Jingle Bell Rock", "Silent Night"],
                 answer: 3
          },
           {
                question: "Кто исполняет песню 'Last Christmas'?",
                options: ["Wham!", "Queen", "The Beatles", "Coldplay"],
                answer: 0
          },
          {
                question: "Какая песня начинается словами 'Happy holidays are coming'?",
                options: ["Jingle Bell Rock", "Santa Claus is Coming to Town", "Wonderful Christmastime", "Coca-Cola Holiday Song"],
                 answer: 3
          },
          {
               question: "Какой популярной песне посвящена зимняя тематика?",
               options: ["Summer of '69", "Yesterday", "Winter Wonderland", "Imagine"],
               answer: 2
          },
           {
                question: "Какая песня просит 'Let it snow'?",
                options: ["Jingle Bells", "Let It Snow", "White Christmas", "Santa Baby"],
               answer: 1
          },
          {
                question: "Какая песня рассказывает о том, как Санта приезжает в город?",
               options: ["Jingle Bell Rock", "Santa Claus is Coming to Town", "Feliz Navidad", "It's Beginning to Look a Lot Like Christmas"],
                answer: 1
           },
            {
                question: "Какая песня поётся с пожеланием счастливого Рождества?",
                options: ["Last Christmas", "Feliz Navidad", "Happy New Year", "All I Want for Christmas Is You"],
                answer: 1
            },
            {
                question: "Какая песня начинается словами 'All the lights are shining so brightly'?",
               options: ["Let It Snow", "Jingle Bells", "White Christmas", "Happy New Year"],
                answer: 3
            }
        ]
    },
     "7": {
        title: "Новогодние герои",
        questions: [
           {
               question: "Как зовут главного волшебника Нового года?",
               options: ["Гринч", "Санта Клаус", "Дед Мороз", "Гарри Поттер"],
               answer: 2
           },
           {
                question: "Кто помогает Деду Морозу?",
                 options: ["Снежная Королева", "Баба Яга", "Снегурочка", "Фея"],
                answer: 2
           },
            {
                 question: "Какого персонажа бояться дети?",
                 options: ["Бабу Ягу", "Деда Мороза", "Снегурочку", "Лешего"],
                 answer: 0
            },
            {
                question: "В какой стране живёт Санта Клаус?",
                options: ["Россия", "Германия", "США", "Финляндия"],
                 answer: 2
           },
           {
                question: "Кто является антагонистом в новогодней сказке?",
               options: ["Белоснежка", "Золушка", "Гринч", "Снегурочка"],
                answer: 2
           },
            {
               question: "Какой персонаж приходит с подарками в итальянской традиции?",
               options: ["Баба Яга", "Санта Клаус", "Фея Бефана", "Гном"],
                answer: 2
            },
             {
                question: "Какой персонаж сопровождает Деда Мороза на праздниках?",
                options: ["Леший", "Кикимора", "Русалка", "Снегурочка"],
                answer: 3
             },
             {
                question: "Кто развозит подарки на санях с оленями?",
               options: ["Гринч", "Дед Мороз", "Санта Клаус", "Зимний волшебник"],
                answer: 2
            },
            {
                question: "Какой персонаж является символом праздничного настроения?",
                options: ["Злой волшебник", "Кот Баюн", "Снеговик", "Леший"],
                answer: 2
            },
            {
               question: "Кто приносит подарки детям в Нидерландах?",
                options: ["Дед Мороз", "Санта Клаус", "Синтерклаас", "Бефана"],
                 answer: 2
            }
        ]
    },
    "8": {
        title: "Новогодние угощения",
        questions: [
           {
               question: "Какой салат традиционно готовят на Новый год в России?",
               options: ["Цезарь", "Греческий", "Оливье", "Мимоза"],
                answer: 2
           },
           {
               question: "Какой напиток обычно пьют на новогодний стол?",
                options: ["Чай", "Сок", "Шампанское", "Кофе"],
                answer: 2
           },
           {
               question: "Какой десерт готовят на Рождество?",
               options: ["Шоколадный торт", "Имбирное печенье", "Тирамису", "Чизкейк"],
                answer: 1
           },
            {
               question: "Какие фрукты часто подают на новогодний стол?",
               options: ["Ананас", "Апельсины", "Киви", "Манго"],
                answer: 1
           },
            {
               question: "Какой горячий напиток популярен в зимние праздники?",
                options: ["Чай с лимоном", "Какао", "Глинтвейн", "Кофе с молоком"],
                 answer: 2
           },
            {
              question: "Какое блюдо часто готовят в качестве основного на Новый год?",
                options: ["Плов", "Борщ", "Запеченная утка", "Суши"],
                 answer: 2
            },
            {
                question: "Какой вид печенья часто пекут на Новый год?",
                 options: ["Шоколадное печенье", "Овсяное печенье", "Имбирное печенье", "Песочное печенье"],
                 answer: 2
             },
           {
                 question: "Какой десерт готовят в Италии на Рождество?",
                options: ["Панеттоне", "Тирамису", "Крем-брюле", "Чизкейк"],
                answer: 0
            },
             {
                question: "Какой десерт часто готовят в Великобритании на Рождество?",
                options: ["Рождественский пудинг", "Шоколадный торт", "Фруктовый торт", "Пирог с яблоками"],
                answer: 0
            },
            {
                 question: "Какой хлеб обычно пекут на Рождество в Германии?",
               options: ["Чёрный хлеб", "Штоллен", "Белый хлеб", "Ржаной хлеб"],
                answer: 1
             }
        ]
    },
     "9": {
        title: "Зимние виды спорта",
        questions: [
           {
                 question: "Какой вид спорта включает катание на доске по снегу?",
                options: ["Хоккей", "Фигурное катание", "Сноуборд", "Керлинг"],
                answer: 2
            },
             {
                question: "Какой вид спорта играют с шайбой на льду?",
                 options: ["Конькобежный спорт", "Биатлон", "Хоккей", "Фристайл"],
                 answer: 2
             },
             {
                 question: "Какой вид спорта сочетает в себе лыжный спорт и стрельбу?",
                 options: ["Биатлон", "Фристайл", "Сноубординг", "Керлинг"],
                answer: 0
             },
             {
                question: "Какой вид спорта включает скольжение по льду на коньках?",
                options: ["Скелетон", "Конькобежный спорт", "Бобслей", "Фристайл"],
                answer: 1
             },
            {
               question: "Какой вид спорта включает прыжки на лыжах с трамплина?",
               options: ["Горные лыжи", "Фристайл", "Прыжки с трамплина", "Сноубординг"],
                answer: 2
           },
            {
               question: "Какой вид спорта включает спуск на санях по ледяной трассе?",
                 options: ["Сноубординг", "Кёрлинг", "Бобслей", "Фигурное катание"],
                  answer: 2
             },
             {
                 question: "Какой вид спорта включает скольжение по льду с щетками?",
                 options: ["Фигурное катание", "Керлинг", "Шорт-трек", "Бобслей"],
                answer: 1
             },
             {
                 question: "Какой вид спорта включает скоростное скольжение по льду?",
                options: ["Хоккей", "Биатлон", "Шорт-трек", "Скелетон"],
                answer: 2
             },
            {
                 question: "Какой вид спорта включает трюки на лыжах?",
                options: ["Горные лыжи", "Сноубординг", "Фристайл", "Конькобежный спорт"],
                answer: 2
            },
            {
                question: "Какой вид спорта связан со спуском на лыжах с горы?",
                 options: ["Биатлон", "Горные лыжи", "Фристайл", "Конькобежный спорт"],
                answer: 1
            }
        ]
    },
    "10": {
        title: "Мифы и легенды Нового года",
        questions: [
          {
               question: "Какой мифологический персонаж является символом Нового года в Японии?",
                options: ["Ороти", "Аматэрасу", "Шинигами", "Сингоро"],
                answer: 3
          },
           {
               question: "Какая легенда связана с елкой на Новый год?",
                 options: ["Дерево исцеления", "Дерево любви", "Дерево процветания", "Дерево жизни"],
                 answer: 3
           },
           {
                question: "Какой персонаж считался прообразом Деда Мороза в славянской мифологии?",
               options: ["Зевс", "Святой Николай", "Морозко", "Перун"],
                 answer: 2
           },
           {
                question: "Какой миф объясняет появление снега?",
                 options: ["Слезы богов", "Песок из пустыни", "Перья ангелов", "Дыхание дракона"],
                answer: 2
           },
           {
                question: "Какой персонаж из мифов и легенд приносит подарки детям в Италии?",
                 options: ["Баба Яга", "Фея Бефана", "Гном", "Леший"],
                 answer: 1
           },
           {
                question: "Какой миф объясняет появление новогодней звезды?",
                 options: ["Звезда надежды", "Звезда процветания", "Вифлеемская звезда", "Звезда удачи"],
                answer: 2
            },
           {
                question: "Какой миф связан с обычаем украшать дом к Новому году?",
               options: ["Защита от злых духов", "Привлечение богов", "Привлечение удачи", "Привлечение любви"],
                answer: 0
          },
           {
                question: "Какой миф рассказывает о происхождении новогодних фейерверков?",
                options: ["Голоса богов", "Гнев дракона", "Магия солнца", "Салюты духов"],
                 answer: 3
          },
           {
                 question: "Какой миф связан с новогодним гаданием?",
                 options: ["Просьба к богам", "Поиск сокровищ", "Предсказание будущего", "Проверка сил"],
                 answer: 2
           },
            {
                 question: "Какой персонаж является символом нового начала?",
                options: ["Баба Яга", "Леший", "Снеговик", "Дед Мороз"],
                answer: 3
           }
        ]
    }
};
function getQuizIdFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
}

function startQuiz() {
    quizId = getQuizIdFromUrl();
    if (!quizId || !allQuizzes[quizId]) {
      alert('Неверный идентификатор квиза.');
      return;
    }
    const currentQuiz = allQuizzes[quizId];
    questions = currentQuiz.questions;
    quizTitle.textContent = currentQuiz.title;
    currentQuestionIndex = 0;
    score = 0;
    resultContainer.classList.add('hidden');
    nextButton.textContent = "Следующий вопрос";
    showQuestion();
}

function showQuestion() {
    if (currentQuestionIndex >= questions.length) {
        showResult();
        return;
    }

    const question = questions[currentQuestionIndex];
    questionElement.textContent = question.question;
    optionsElement.innerHTML = '';

    question.options.forEach((option, index) => {
        const li = document.createElement('li');
        li.textContent = option;
        li.addEventListener('click', () => selectAnswer(index));
        optionsElement.appendChild(li);
    });

    if (currentQuestionIndex === questions.length - 1) {
        nextButton.textContent = "Показать результат";
    }
}


function selectAnswer(index) {
    const selectedOption = optionsElement.children[index];
  
    if (selectedOption.classList.contains('selected')) {
      return;
    }
    
    Array.from(optionsElement.children).forEach(li => li.classList.remove('selected'));
  
    selectedOption.classList.add('selected');
    
    const question = questions[currentQuestionIndex];
    if (index === question.answer) {
        score++;
    }
}

function updateScoreInStorage(score) {
    const totalScore = parseInt(localStorage.getItem('totalScore') || '0');
    localStorage.setItem('totalScore', totalScore + score);
}

function showResult() {
    questionElement.textContent = '';
    optionsElement.innerHTML = '';
    resultText.textContent = `Вы набрали ${score} из ${questions.length} баллов!`;
    resultContainer.classList.remove('hidden');
    
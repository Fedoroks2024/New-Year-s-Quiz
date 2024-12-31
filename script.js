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
        title: "Новый год: Оливье и странные традиции",
        questions: [
            {
                question: "Какой символ Нового года вызывает у вас больше вопросов: олень с красным носом или Дед Мороз в шубе летом?",
                options: ["Олень, конечно!", "Дед Мороз, ну бред же!", "Оба вызывают когнитивный диссонанс", "Я за Снегурочку, она хотя бы адекватна"],
                answer: 2
            },
            {
                question: "Если бы у вас был выбор: застрять в лифте с кучей бенгальских огней или с самим Оливье, что бы вы выбрали?",
                options: ["Огни! Праздник же!", "Оливье, хоть пожру нормально", "А можно вообще не застревать?", "А есть ли доставка в лифте?"],
                answer: 2
            },
            {
                question: "Сколько раз вы обещали себе начать новую жизнь с Нового года и сколько раз вы реально это сделали?",
                options: ["Раз 50, но 0 прогресса", "Обещал - сделал, как штык!", "Ну... я как-то забил", "А зачем вообще что-то начинать?"],
                answer: 0
            },
            {
                question: "Какой напиток больше подходит для встречи Нового года: шампанское, которое стреляет пробкой, или глинтвейн, который проливается на скатерть?",
                options: ["Шампанское, адреналинчик!", "Глинтвейн, тепло и лампово", "Главное, чтобы был!", "А можно и то, и другое?"],
                answer: 2
            },
            {
                question: "Что наряжают на Новый год: ёлку или себя в костюм снежинки, потому что на работе корпоратив?",
                options: ["Ёлку, конечно! Что за вопросы?", "Себя, надо же как-то выделиться!", "Можно нарядить и то, и другое!", "Лучше сразу в пижаме"],
                answer: 2
            },
             {
                question: "Какой салат вызывает больше ностальгии: Оливье с горошком или Селедка под шубой, которая никогда не заканчивается?",
                options: ["Оливье, как в детстве", "Селедка, это классика!", "А можно просто майонез?", "Я вообще веган, где мой салат?"],
                answer: 0
            },
              {
                question: "Когда наступает Новый год: 1 января, когда все уже спят, или 31 декабря, когда все ещё режут салаты?",
                options: ["1 января, когда тишина", "31 декабря, пока есть силы", "А можно 2 января?", "Когда просплюсь, тогда и наступит"],
                answer: 2
            },
            {
                question: "Что вы предпочтете получить в подарок: носки или деньги?",
                options: ["Носки, ну а вдруг?", "Деньги, чтобы купить носки", "Лучше сертификат в спа", "А зачем подарки? Я и так хорош!"],
                 answer: 1
            },
             {
                question: "Где лучше встречать Новый год: дома с кошкой или в гостях, где все пытаются петь караоке?",
                options: ["Дома с кошкой, уютно же", "В гостях, там веселее", "Где есть еда, там и хорошо", "А можно на море?"],
                 answer: 0
            },
            {
                question: "Какое блюдо говорит о вашем отношении к Новому году: холодец, который трясется от радости, или торт, который вы съели еще вчера?",
                options: ["Холодец, пусть трясется!", "Торт, он же такой вкусный!", "Я просто хочу пиццу", "Диета, где ты?"],
                answer: 2
            }
        ]
    },
    "2": {
        title: "Зимние праздники: От елки до проруби",
        questions: [
            {
                question: "Какой праздник отмечают 25 декабря: тот, где дарят подарки, или тот, где все уходят в загул?",
                 options: ["Рождество, подарки!", "Новый год, загул!", "А что, есть другой вариант?", "Главное, чтобы выходной!"],
                answer: 0
            },
            {
                question: "Какой из этих праздников не зимний: тот, где все в шапках, или тот, где все в купальниках?",
                options: ["Тот, где в шапках", "Тот, где в купальниках", "А разве есть летние?", "Я потерялся во времени"],
                answer: 1
            },
            {
                question: "Какой праздник отмечают православные 7 января: тот, где кушают кутью, или тот, где гадают на судьбу?",
                 options: ["Тот, где кутью", "Тот, где гадают", "А где кушать то?", "Зачем гадать? Ешь и радуйся!"],
                answer: 0
            },
            {
                question: "В какой стране появился праздник Ханука: там, где много свечей, или там, где много мацы?",
                options: ["Там, где свечи", "Там, где маца", "А где там вкусно?", "Главное, чтобы тепло"],
                answer: 2
            },
            {
                question: "Какой праздник связан с колядками: тот, где ходят по домам, или тот, где слушают поздравления?",
                options: ["Тот, где ходят", "Тот, где слушают", "А где дают деньги?", "Мне главное поесть!"],
                answer: 0
            },
            {
                question: "Какой праздник связан с купанием в проруби: тот, где закаляешься, или тот, где болеешь потом?",
                options: ["Тот, где закаляешься", "Тот, где болеешь", "А зачем купаться?", "Я лучше дома посижу"],
                answer: 0
             },
             {
                question: "Какой праздник отмечается за семь недель до Пасхи: тот, где блины едят, или тот, где постятся?",
                options: ["Тот, где блины", "Тот, где постятся", "А можно и то, и другое?", "Я вообще только по фастфуду!"],
                answer: 0
             },
             {
                question: "Какой праздник связан с проводами зимы: тот, где сжигают чучело, или тот, где радуются весне?",
                options: ["Тот, где сжигают", "Тот, где радуются", "А можно просто сбежать?", "Я зиму люблю больше!"],
                answer: 0
             },
             {
                 question: "Какому святому посвящено Рождество: тому, кто дарил подарки, или тому, кто молился за всех?",
                options: ["Тому, кто дарил", "Тому, кто молился", "А где подарки то?", "Зачем молиться? Лучше пить"],
                answer: 0
             },
             {
              question: "Какой праздник связан с гаданием: тот, где ищут женихов, или тот, где смотрят в зеркало?",
                 options: ["Тот, где женихов", "Тот, где смотрят в зеркало", "А можно просто спать?", "Я и так всё знаю"],
                 answer: 1
             }
        ]
    },
     "3": {
        title: "История Нового года: От фараонов до петард",
        questions: [
           {
                question: "В какой стране впервые начали отмечать Новый год: там, где пирамиды, или там, где драконы?",
                options: ["Там, где пирамиды", "Там, где драконы", "А где там вкусно?", "Главное, чтобы было весело"],
                answer: 0
            },
            {
                question: "Когда Новый год отмечали 1 сентября: тогда, когда шли в школу, или тогда, когда собирали урожай?",
                options: ["Когда шли в школу", "Когда собирали урожай", "А что, так было?", "Главное, чтобы не работать"],
                answer: 0
            },
           {
               question: "Когда в России Новый год начали отмечать 1 января: тогда, когда Пётр I сказал, или тогда, когда все заснули после курантов?",
               options: ["Когда Пётр I сказал", "Когда все заснули", "А что, разве не всегда?", "Главное, чтобы был выходной"],
                answer: 0
           },
            {
                question: "Кто ввел традицию наряжать елку: тот, кто любил леса, или тот, кому было скучно?",
               options: ["Тот, кто любил леса", "Тот, кому было скучно", "А зачем ее наряжать?", "Главное, чтобы игрушки были красивые"],
                answer: 0
           },
           {
                question: "Кто считается прообразом Деда Мороза: тот, кто дарит подарки, или тот, кто морозит всех?",
               options: ["Тот, кто дарит", "Тот, кто морозит", "Я думал, это просто персонаж", "А кто подарки принесёт тогда?"],
                answer: 1
           },
            {
                question: "Когда появился обычай запускать фейерверки на Новый год: тогда, когда кто-то впервые взорвал петарду, или тогда, когда все стали бояться собак?",
                options: ["Когда взорвали петарду", "Когда стали бояться собак", "А что, были петарды?", "Главное, чтобы бабахнуло"],
                answer: 2
            },
            {
                question: "Какой город был центром новогодних гуляний в царской России: тот, где все пили шампанское, или тот, где была ёлка на площади?",
                 options: ["Тот, где шампанское", "Тот, где ёлка", "А разве не везде?", "Главное, чтобы было весело"],
                answer: 1
            },
           {
                question: "Как назывался новогодний праздник у древних славян: тот, где пели песни, или тот, где танцевали хороводы?",
                options: ["Тот, где пели", "Тот, где танцевали", "А что, так было?", "Главное, чтобы еда была"],
                answer: 0
           },
           {
                question: "В каком году Россия перешла на григорианский календарь: тогда, когда все запутались, или тогда, когда решили, что так будет лучше?",
                options: ["Когда все запутались", "Когда решили, что лучше", "А что такое григорианский?", "Главное, чтобы был выходной"],
                 answer: 0
           },
            {
               question: "Какой персонаж сопровождал Деда Мороза в советское время: та, кто была в шубе, или та, кто была в кокошнике?",
                 options: ["Та, кто в шубе", "Та, кто в кокошнике", "А что, было много вариантов?", "Главное, чтобы красивая была"],
                 answer: 1
            }
        ]
    },
      "4": {
         title: "Новогодние фильмы: От 'Иронии' до 'Один дома'",
         questions: [
            {
               question: "Какой фильм известен как классика новогоднего кино: тот, где все напиваются, или тот, где все попадают в смешные ситуации?",
                 options: ["Тот, где напиваются", "Тот, где смешные ситуации", "А что, есть другие варианты?", "Главное, чтобы было весело"],
                  answer: 1
            },
            {
               question: "В каком фильме звучит песня 'Jingle Bell Rock': том, где Кевин забыт, или том, где все поют?",
               options: ["Тот, где Кевин забыт", "Тот, где все поют", "А что это за песня?", "Главное, чтобы была новогодняя"],
                 answer: 0
            },
            {
                question: "В каком фильме герой мечтает о чуде на Новый год: там, где все меняются местами, или там, где все ждут звонка?",
                  options: ["Там, где меняются местами", "Там, где ждут звонка", "А где здесь магия?", "Главное, чтобы чудо было!"],
                   answer: 1
            },
            {
               question: "Какой фильм основан на сказке 'Морозко': тот, где все мерзнут, или тот, где все добрые?",
                 options: ["Тот, где мерзнут", "Тот, где добрые", "А где здесь колдун?", "Главное, чтобы со счастливым концом"],
                  answer: 0
            },
             {
               question: "Кто сыграл главного героя в фильме 'Один дома': тот, кто бегал от бандитов, или тот, кто кричал на всех?",
                  options: ["Тот, кто бегал", "Тот, кто кричал", "А разве он не был один?", "Главное, чтобы бандитов победил"],
                  answer: 0
            },
           {
               question: "В каком фильме героини меняются домами на Рождество: том, где все влюбляются, или том, где все едят индейку?",
                 options: ["Тот, где влюбляются", "Тот, где едят индейку", "А что, так можно?", "Главное, чтобы было празднично"],
                  answer: 0
            },
            {
               question: "Какой фильм считается пародией на новогодние киноленты: тот, где все смешные, или тот, где все глупые?",
                  options: ["Тот, где смешные", "Тот, где глупые", "А что, так бывает?", "Главное, чтобы не скучно"],
                   answer: 1
            },
             {
                question: "В каком фильме главная героиня - волшебница: там, где есть феи, или там, где есть колдуны?",
                  options: ["Там, где феи", "Там, где колдуны", "А где здесь принцессы?", "Главное, чтобы было волшебство"],
                    answer: 1
             },
             {
               question: "Какой фильм рассказывает о необычном рождественском духе: там, где все летают, или там, где все поют?",
                  options: ["Там, где все летают", "Там, где все поют", "А где здесь олени?", "Главное, чтобы было по-доброму"],
                  answer: 1
             },
              {
                question: "Какой фильм рассказывает про новогоднюю авантюру в аэропорту: там, где все теряются, или там, где все находят любовь?",
                  options: ["Там, где все теряются", "Там, где все находят любовь", "А где здесь багаж?", "Главное, чтобы все успели"],
                   answer: 0
              }
           ]
     },
    "5": {
        title: "Новогодние традиции: От гирлянд до горошка",
        questions: [
            {
                question: "Что обычно кладут под елку на Новый год: то, что блестит, или то, что съедобно?",
                options: ["То, что блестит", "То, что съедобно", "А можно и то, и другое?", "Главное, чтобы не колючее"],
                answer: 1
             },
            {
                question: "Какой фрукт ассоциируется с новогодними праздниками: тот, который чистят, или тот, который режут?",
                 options: ["Тот, который чистят", "Тот, который режут", "А можно просто фрукт?", "Главное, чтобы витамины были"],
                  answer: 1
            },
             {
               question: "Какой напиток обычно пьют под бой курантов: тот, который пенится, или тот, который греет?",
                options: ["Тот, который пенится", "Тот, который греет", "А можно и то, и другое?", "Главное, чтобы было весело"],
                 answer: 0
            },
             {
               question: "Что обычно загадывают под бой курантов: то, что сбудется, или то, что забудется?",
                options: ["То, что сбудется", "То, что забудется", "А зачем загадывать?", "Главное, чтобы было хорошо"],
                answer: 0
             },
             {
                question: "Какой обычай связан с приходом Нового года: тот, где все убирают, или тот, где все мусорят?",
                options: ["Тот, где убирают", "Тот, где мусорят", "А можно просто отдыхать?", "Главное, чтобы в чистоте"],
                 answer: 0
             },
             {
                question: "Какой персонаж приносит подарки на Новый год в США: тот, кто в красном, или тот, кто на оленях?",
                options: ["Тот, кто в красном", "Тот, кто на оленях", "А где тут Дед Мороз?", "Главное, чтобы были подарки"],
                 answer: 0
            },
              {
                 question: "Какая традиция связана с двенадцатью виноградинами в Испании: тот, где едят, или тот, где загадывают?",
                 options: ["Тот, где едят", "Тот, где загадывают", "А зачем виноград?", "Главное, чтобы было весело"],
                 answer: 0
             },
             {
                question: "Какой обычай связан с масками на Новый год: тот, где все прячутся, или тот, где все танцуют?",
                options: ["Тот, где прячутся", "Тот, где танцуют", "А что, так можно?", "Главное, чтобы было загадочно"],
                  answer: 0
            },
              {
                 question: "Какая традиция связана с новогодними пирогами: тот, где едят, или тот, где пекут?",
                 options: ["Тот, где едят", "Тот, где пекут", "А можно просто торт?", "Главное, чтобы вкусно было"],
                  answer: 0
              },
            {
                 question: "Какая традиция связана с первым гостем в Новом году: тот, кто придет с подарками, или тот, кто придет с плохим настроением?",
                 options: ["Тот, кто с подарками", "Тот, кто с плохим настроением", "А что, так бывает?", "Главное, чтобы пришел не с пустыми руками"],
                  answer: 0
             }
        ]
    },
       "6": {
        title: "Новогодние песни: От колокольчиков до 'Last Christmas'",
        questions: [
            {
                question: "Какая песня является символом новогоднего настроения: та, где звонят колокольчики, или та, где все поют 'Jingle Bells'?",
                options: ["Та, где колокольчики", "Та, где поют 'Jingle Bells'", "А что, есть другие варианты?", "Главное, чтобы праздничная была"],
                 answer: 0
            },
              {
                 question: "Какая песня обычно звучит на Рождество: та, где все желают 'Merry Christmas', или та, где поют про ангелов?",
                 options: ["Та, где 'Merry Christmas'", "Та, где про ангелов", "А что, есть другая?", "Главное, чтобы душевная была"],
                  answer: 0
              },
             {
                 question: "Какой популярной новогодней песне более 100 лет: та, где все радуются, или та, где все тихо поют?",
                 options: ["Та, где радуются", "Та, где тихо поют", "А что, они старые?", "Главное, чтобы слова знали"],
                  answer: 1
             },
             {
                question: "Кто исполняет песню 'Last Christmas': те, кто пел про любовь, или те, кто пел про разлуку?",
                 options: ["Те, кто про любовь", "Те, кто про разлуку", "А я не помню кто", "Главное, чтобы пели красиво"],
                  answer: 0
            },
             {
               question: "Какая песня начинается словами 'Happy holidays are coming': та, где все бегут, или та, где все ждут?",
                options: ["Та, где все бегут", "Та, где все ждут", "А кто поет это?", "Главное, чтобы с новогодним настроем"],
                 answer: 0
            },
              {
                question: "Какой популярной песне посвящена зимняя тематика: та, где снег, или та, где лед?",
                options: ["Та, где снег", "Та, где лед", "А где тут мороз?", "Главное, чтобы холодно было"],
                 answer: 1
              },
            {
              question: "Какая песня просит 'Let it snow': та, где все хотят снега, или та, где все хотят тепла?",
               options: ["Та, где хотят снега", "Та, где хотят тепла", "А зачем снег?", "Главное, чтобы красиво было"],
                answer: 1
            },
            {
               question: "Какая песня рассказывает о том, как Санта приезжает в город: та, где все ждут подарки, или та, где все ждут чуда?",
                 options: ["Та, где ждут подарки", "Та, где ждут чуда", "А когда подарки дадут?", "Главное, чтобы приехал поскорее"],
                  answer: 0
            },
            {
                 question: "Какая песня поётся с пожеланием счастливого Рождества: та, где все веселятся, или та, где все обнимаются?",
                options: ["Та, где веселятся", "Та, где обнимаются", "А где шампанское?", "Главное, чтобы счастливыми были"],
                  answer: 1
            },
            {
                question: "Какая песня начинается словами 'All the lights are shining so brightly': та, где все наряжают елку, или та, где все смотрят на фейерверк?",
                 options: ["Та, где наряжают елку", "Та, где смотрят на фейерверк", "А где гирлянды?", "Главное, чтобы красиво светилось"],
                 answer: 0
           }
        ]
    },
     "7": {
       title: "Новогодние герои: От Деда Мороза до Гринча",
         questions: [
            {
                question: "Как зовут главного волшебника Нового года: тот, кто дарит подарки, или тот, кто всех морозит?",
                options: ["Тот, кто дарит", "Тот, кто морозит", "А кто главный то?", "Главное, чтобы подарки принес"],
                 answer: 1
            },
            {
                question: "Кто помогает Деду Морозу: та, кто в кокошнике, или та, кто в шубке?",
                 options: ["Та, кто в кокошнике", "Та, кто в шубке", "А кто тут главная?", "Главное, чтобы помогала хорошо"],
                answer: 1
           },
            {
                question: "Какого персонажа бояться дети: того, кто с метлой, или того, кто с рогами?",
                 options: ["Того, кто с метлой", "Того, кто с рогами", "А что, бояться надо?", "Главное, чтобы не обижал"],
                answer: 0
            },
            {
                question: "В какой стране живёт Санта Клаус: там, где олени, или там, где эльфы?",
                 options: ["Там, где олени", "Там, где эльфы", "А как там кормят?", "Главное, чтобы были подарки"],
                 answer: 2
            },
            {
                question: "Кто является антагонистом в новогодней сказке: тот, кто крадет подарки, или тот, кто портит праздник?",
                options: ["Тот, кто крадет подарки", "Тот, кто портит праздник", "А кто тут плохой?", "Главное, чтобы исправился"],
                answer: 1
            },
            {
                question: "Какой персонаж приходит с подарками в итальянской традиции: тот, кто на метле, или тот, кто в чулке?",
                 options: ["Тот, кто на метле", "Тот, кто в чулке", "А как он летает?", "Главное, чтобы подарок принес"],
                answer: 1
            },
              {
                 question: "Какой персонаж сопровождает Деда Мороза на праздниках: тот, кто в кокошнике, или тот, кто в шапке?",
                options: ["Тот, кто в кокошнике", "Тот, кто в шапке", "А что, так можно?", "Главное, чтобы была красивая"],
                 answer: 1
              },
            {
                question: "Кто развозит подарки на санях с оленями: тот, кто толстый, или тот, кто в красном?",
               options: ["Тот, кто толстый", "Тот, кто в красном", "А что, так можно?", "Главное, чтобы довезли подарки"],
                answer: 1
            },
            {
               question: "Какой персонаж является символом праздничного настроения: тот, кто с морковкой, или тот, кто в шапке?",
               options: ["Тот, кто с морковкой", "Тот, кто в шапке", "А почему он не в шубе?", "Главное, чтобы было весело"],
                 answer: 1
           },
            {
                question: "Кто приносит подарки детям в Нидерландах: тот, кто на коне, или тот, кто на лодке?",
                options: ["Тот, кто на коне", "Тот, кто на лодке", "А что, так можно?", "Главное, чтобы подарок доставил"],
                 answer: 2
            }
        ]
    },
    "8": {
        title: "Новогодние угощения: От оливье до штоллена",
        questions: [
            {
               question: "Какой салат традиционно готовят на Новый год в России: тот, где все намешано, или тот, где все под шубой?",
                 options: ["Тот, где все намешано", "Тот, где все под шубой", "А что, есть другие варианты?", "Главное, чтобы вкусно было"],
                 answer: 0
           },
           {
                question: "Какой напиток обычно пьют на новогодний стол: тот, что пузырится, или тот, что согревает?",
                 options: ["Тот, что пузырится", "Тот, что согревает", "А что, есть безалкогольный?", "Главное, чтобы было празднично"],
                answer: 0
           },
            {
               question: "Какой десерт готовят на Рождество: тот, что с изюмом, или тот, что с корицей?",
                 options: ["Тот, что с изюмом", "Тот, что с корицей", "А можно просто торт?", "Главное, чтобы сладко было"],
                 answer: 1
            },
           {
                question: "Какие фрукты часто подают на новогодний стол: те, что круглые, или те, что оранжевые?",
                options: ["Те, что круглые", "Те, что оранжевые", "А можно просто фрукты?", "Главное, чтобы витамины были"],
                 answer: 1
            },
            {
                 question: "Какой горячий напиток популярен в зимние праздники: тот, что с вином, или тот, что с какао?",
                 options: ["Тот, что с вином", "Тот, что с какао", "А можно просто чай?", "Главное, чтобы тепло было"],
                  answer: 0
            },
            {
                question: "Какое блюдо часто готовят в качестве основного на Новый год: то, что пекут, или то, что жарят?",
                options: ["То, что пекут", "То, что жарят", "А можно просто пиццу?", "Главное, чтобы сытно было"],
                answer: 1
            },
            {
               question: "Какой вид печенья часто пекут на Новый год: тот, что с имбирем, или тот, что с шоколадом?",
                options: ["Тот, что с имбирем", "Тот, что с шоколадом", "А можно просто пряник?", "Главное, чтобы было вкусненько"],
                answer: 0
            },
            {
                question: "Какой десерт готовят в Италии на Рождество: тот, что с цукатами, или тот, что с кремом?",
                options: ["Тот, что с цукатами", "Тот, что с кремом", "А можно просто пасту?", "Главное, чтобы было по-итальянски"],
                answer: 0
           },
            {
                question: "Какой десерт часто готовят в Великобритании на Рождество: тот, что с сухофруктами, или тот, что с ромом?",
                 options: ["Тот, что с сухофруктами", "Тот, что с ромом", "А что, так можно?", "Главное, чтобы было по-английски"],
                 answer: 0
            },
             {
                 question: "Какой хлеб обычно пекут на Рождество в Германии: тот, что со специями, или тот, что с марципаном?",
                 options: ["Тот, что со специями", "Тот, что с марципаном", "А можно просто булку?", "Главное, чтобы было по-немецки"],
                 answer: 1
             }
        ]
    },
    "9": {
        title: "Зимние виды спорта: От коньков до сноуборда",
        questions: [
            {
                 question: "Какой вид спорта включает катание на доске по снегу: тот, где все падают, или тот, где все скользят?",
                options: ["Тот, где все падают", "Тот, где все скользят", "А что, так можно?", "Главное, чтобы весело было"],
                  answer: 1
           },
           {
                question: "Какой вид спорта играют с шайбой на льду: тот, где все толкают, или тот, где все бьют?",
                 options: ["Тот, где все толкают", "Тот, где все бьют", "А что, бывает по-другому?", "Главное, чтобы шайбу забили"],
                 answer: 1
            },
            {
                question: "Какой вид спорта сочетает в себе лыжный спорт и стрельбу: тот, где бегут, или тот, где стреляют?",
                options: ["Тот, где бегут", "Тот, где стреляют", "А можно просто бегать?", "Главное, чтобы в цель попадали"],
                answer: 0
           },
            {
               question: "Какой вид спорта включает скольжение по льду на коньках: тот, где все танцуют, или тот, где все бегут?",
                options: ["Тот, где все танцуют", "Тот, где все бегут", "А можно просто на коньках?", "Главное, чтобы скользили хорошо"],
                 answer: 1
            },
             {
                 question: "Какой вид спорта включает прыжки на лыжах с трамплина: тот, где все летают, или тот, где все падают?",
                options: ["Тот, где все летают", "Тот, где все падают", "А что, так можно?", "Главное, чтобы приземлились"],
                answer: 0
           },
            {
                question: "Какой вид спорта включает спуск на санях по ледяной трассе: тот, где все кричат, или тот, где все молчат?",
                options: ["Тот, где все кричат", "Тот, где все молчат", "А что, так бывает?", "Главное, чтобы доехали"],
                 answer: 0
            },
            {
                question: "Какой вид спорта включает скольжение по льду с щетками: тот, где все метут, или тот, где все толкают?",
                 options: ["Тот, где все метут", "Тот, где все толкают", "А что, так можно?", "Главное, чтобы дошли до конца"],
                 answer: 1
             },
           {
                 question: "Какой вид спорта включает скоростное скольжение по льду: тот, где все обгоняют, или тот, где все падают?",
                options: ["Тот, где все обгоняют", "Тот, где все падают", "А что, так бывает?", "Главное, чтобы были быстрее всех"],
                 answer: 0
           },
           {
                 question: "Какой вид спорта включает трюки на лыжах: тот, где все летают, или тот, где все крутятся?",
                options: ["Тот, где все летают", "Тот, где все крутятся", "А что, так можно?", "Главное, чтобы было красиво"],
                 answer: 1
            },
             {
                question: "Какой вид спорта связан со спуском на лыжах с горы: тот, где все едут, или тот, где все падают?",
                options: ["Тот, где все едут", "Тот, где все падают", "А что, так можно?", "Главное, чтобы доехали до низа"],
                 answer: 1
            }
        
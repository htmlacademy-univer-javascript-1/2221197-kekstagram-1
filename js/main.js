function selectNumberRange(min, max) {
  if (min < 0 || max <= min) {
    throw 'You passed invalid arguments';
  }

  return Math.floor(Math.random() * (max - min)) + min;
}

//
// function checkStringLength(comment, maxLength) {
//   return comment.length <= maxLength;
// }


const MESSAGE = ['Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
  'Заткнись и возьми мои деньги',
  'Пальма для лица',
  'Мое выражение лица, когда кто-то заявляет об очевидном',
  'Нет, правда. Это очень интересно',
  'OMG Кто, черт возьми, заботится?'];

const NAMES = ['Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон',
  'Мара Стараг',
  'Катернин Берск',
  'Катернин Шемов',
  'Павел Немецк',
  'Алетра Стараг',
  'Нана Нарарис',
  'Цефрея Хорнрейвен',
  'Донлин Хетингтон',
  'Кетра Виндрил',
  'Тез Тебрил',
  'Кхемед Башар',
  'Кхемед Сан',
  'Мейлиль Кхалид',
  'Пора Кхалид',
  'Судейман Рейн',
  'Аот Фезим',
  'Эхпут-Ки Анскульд',
  'Тола Фезим',
  'Умара Анкхалаб',
  'Аот Анскульд',
  'Имзель Илтазяра',
  'Файварра Улмокина',
  'Ральмевик Стаянога',
  'Владислак Улмокина',
  'Имзель Нина',
  'Вонда Агосто',
  'Дона Маривальди',
  'Фаила Агосто',
  'Антон Ивальди',
  'Умберо Фалоне',
  'Маларк Бакмэн',
  'Джессаиль Эвенвуд',
  'Мири Грэйкасл',
  'Шандри Бакмэн',
  'Тесселе Дрэгон',
  'Вэнь Лао',
  'Ксяо Вань',
  'Лей Пинь',
  'Бай Лао',
  'Чен Пинь',
  'Фанн Тиоив',
  'Фивин Куалантри',
  'Тамиорн Лунный Блеск',
  'Альтеа Отронус',
  'Куиш Ксилосент',
  'Силусс Литоари',
  'Улл Бнеу',
  'Виарти Вулу',
  'Линзеюн Уалошот',
  'Плуан Бнеу',
  'Аркилун Грен Ула',
  'Лик Ксогоголь',
  'Иеруша Эксил',
  'Тхава Зззксаакстрот',
  'Надарр Туреш',
  'Аран Чумбиксиринниш'];

const DESCRIPTION = ['Если смогу, я сделаю это. Конец истории.',
  'Смейтесь как только умеете, любите столько, сколько живете.',
  'Помните: вы единственный человек, который может наполнить ваш мир солнечным светом.',
  'Я полностью уверена, что я — диснеевская принцесса, которую еще не придумали.',
  'Не позволяйте кому-то затушить ваши искры только потому, что их свет сияет в чьих-то глазах.',
  'Делайте в вашей жизни то, что меньше заставляет вас смотреть в свой телефон.',
  'Улыбка — единственный тренд в моде, который актуален всегда.',
  'Никогда не ищите свое счастье там, где вы его однажды потеряли.',
  'Жизнь похожа на фотокамеру: вам просто нужно смотреть на нее с улыбкой.',
  'Моя жизнь меняется, потому что меняю ее я.',
  'Всегда начинайте свой день с хороших людей и кофе.'];

const USENAME = [];

function getRandomComments(commentsArray, usedName, names) {
  const comments = [];
  const countComments = selectNumberRange(0, 11);
  for (let i = 0; i < countComments; i++) {
    const ID = selectNumberRange(25, 1000);
    let nameUsers = names[selectNumberRange(0, names.length)];
    while (nameUsers in usedName) {
      nameUsers = names[selectNumberRange(0, names.length)];
    }
    usedName[i] = nameUsers;
    comments[i] = {
      id: ID,
      avatar: `img/avatar-${selectNumberRange(1, 6)}.svg`,
      message: commentsArray[selectNumberRange(0, commentsArray.length)],
      name: nameUsers
    };
  }
  return comments;
}

function getPhotosDescriptions(names, useName, description, message) {
  const arrayPhotos = [];
  const usePhotos = [];
  for (let i = 0; i < 25; i++) {
    const ID = selectNumberRange(1, 25);
    let numberPhoto = selectNumberRange(1, 25);
    while (numberPhoto in usePhotos) {
      numberPhoto = selectNumberRange(1, 25);
    }
    let nameUser = names[selectNumberRange(0, names.length)];
    while (nameUser in useName) {
      nameUser = names[selectNumberRange(0, names.length)];
    }
    useName[i] = nameUser;
    const LIKES = selectNumberRange(15, 200);
    usePhotos[i] = numberPhoto;
    arrayPhotos[i] = {
      id: ID,
      url: `photos/${numberPhoto}.jpg`,
      description: description[selectNumberRange(0, description.length)],
      likes: LIKES,
      comments: getRandomComments(message, useName, names),
      name: nameUser
    };
  }
  return arrayPhotos;
}

console.log(getPhotosDescriptions(NAMES, USENAME, DESCRIPTION, MESSAGE));

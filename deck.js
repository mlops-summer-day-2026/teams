/* Колода пасхалок. Каждая карта — своя картинка, нарисованная вручную в SVG.
   viewBox у всех 0 0 64 64, цвета берутся из палитры страницы. */

const DECK = [
  {
    id: 1, emoji: '🎮', name: 'Конами-код',
    desc: 'Тайная комбинация — клики, свайпы или клавиши — открывает секретный экран',
    art: `<rect x="6" y="18" width="52" height="30" rx="9" fill="#2a2a3d"/>
      <rect x="15" y="29" width="14" height="4.5" rx="2" fill="#f2f2f7"/>
      <rect x="19.75" y="24.25" width="4.5" height="14" rx="2" fill="#f2f2f7"/>
      <circle cx="45" cy="29" r="4" fill="#ff5c39"/><circle cx="52" cy="36" r="4" fill="#ffc046"/>
      <path d="M20 12l4 5h-8z" fill="#4d7cff"/><path d="M32 12l4 5h-8z" fill="#4d7cff"/>
      <path d="M44 17l-4-5h8z" fill="#35d07f"/>`
  },
  {
    id: 2, emoji: '👔', name: 'Режим начальника',
    desc: 'Тройной клик по логотипу — и продукт мгновенно выглядит скучно-корпоративно',
    art: `<path d="M22 8l10 6 10-6 6 6-10 8H26l-10-8z" fill="#e8e8f0"/>
      <path d="M32 22l7 5-4 22-3 8-3-8-4-22z" fill="#4d7cff"/>
      <path d="M28 27h8l-1 6h-6z" fill="#3560d8"/>`
  },
  {
    id: 3, emoji: '🗣️', name: 'Голосовой комплимент',
    desc: 'При вводе имени заказчика продукт вслух говорит ему комплимент',
    art: `<path d="M8 14h36a6 6 0 016 6v16a6 6 0 01-6 6H24l-10 8v-8H8a6 6 0 01-6-6V20a6 6 0 016-6z" fill="#2a2a3d"/>
      <path d="M26 22c4-5 10-1 0 8-10-9-4-13 0-8z" fill="#ff5c39"/>
      <path d="M52 20c4 4 4 12 0 16M57 15c7 7 7 21 0 28" stroke="#ffc046" stroke-width="3.5" fill="none" stroke-linecap="round"/>`
  },
  {
    id: 4, emoji: '🚨', name: 'Слово-триггер',
    desc: 'Слово «дедлайн» в любом поле включает сирену и красную тревогу',
    art: `<path d="M18 42a14 14 0 0128 0z" fill="#ff5c39"/>
      <rect x="14" y="42" width="36" height="8" rx="3" fill="#8a8aa0"/>
      <path d="M32 8v8M14 16l5 6M50 16l-5 6M4 34h8M52 34h8" stroke="#ffc046" stroke-width="3.5" stroke-linecap="round"/>
      <circle cx="32" cy="34" r="5" fill="#ffd9cf" opacity=".55"/>`
  },
  {
    id: 5, emoji: '🎉', name: 'Пиксель-сюрприз',
    desc: 'Невидимая кнопка в углу экрана взрывается конфетти',
    art: `<rect x="6" y="40" width="8" height="8" fill="#ff5c39" transform="rotate(20 10 44)"/>
      <rect x="24" y="10" width="7" height="7" fill="#ffc046" transform="rotate(-25 27 13)"/>
      <rect x="44" y="16" width="8" height="8" fill="#4d7cff" transform="rotate(35 48 20)"/>
      <rect x="50" y="42" width="7" height="7" fill="#35d07f" transform="rotate(-15 53 45)"/>
      <rect x="14" y="22" width="6" height="6" fill="#8fabff" transform="rotate(40 17 25)"/>
      <rect x="34" y="46" width="7" height="7" fill="#ffc046" transform="rotate(15 37 49)"/>
      <circle cx="32" cy="30" r="6" fill="#f2f2f7"/>`
  },
  {
    id: 6, emoji: '💤', name: 'Продукт скучает',
    desc: 'Тридцать секунд бездействия — и он начинает храпеть или ныть',
    art: `<circle cx="28" cy="36" r="18" fill="#ffc046"/>
      <path d="M20 32c2-3 6-3 8 0M28 32" stroke="#0a0a12" stroke-width="2.5" fill="none" stroke-linecap="round"/>
      <path d="M20 33c2-2 6-2 8 0M30 33c2-2 6-2 8 0" stroke="#0a0a12" stroke-width="2.5" fill="none" stroke-linecap="round"/>
      <ellipse cx="28" cy="42" rx="5" ry="3.5" fill="#0a0a12"/>
      <text x="44" y="22" font-size="14" font-weight="800" fill="#8fabff">Z</text>
      <text x="52" y="13" font-size="10" font-weight="800" fill="#8fabff">z</text>`
  },
  {
    id: 7, emoji: '🔢', name: '42',
    desc: 'Ввод числа 42 где угодно выдаёт «Смысл жизни найден. Можно расходиться»',
    art: `<text x="32" y="46" font-size="40" font-weight="800" fill="#35d07f" text-anchor="middle" font-family="ui-monospace,monospace">42</text>
      <circle cx="32" cy="32" r="27" stroke="#35d07f" stroke-width="2" fill="none" opacity=".35"/>`
  },
  {
    id: 8, emoji: '🏝️', name: 'Босс-мод',
    desc: 'Скрытая страница со списком дел: уволиться, уехать на Бали, вернуться, доделать спринт',
    art: `<circle cx="48" cy="16" r="8" fill="#ffc046"/>
      <path d="M4 50c8-4 16-4 24 0s16 4 32 0v10H4z" fill="#4d7cff" opacity=".65"/>
      <ellipse cx="30" cy="50" rx="20" ry="5" fill="#ffd98a"/>
      <path d="M30 50V28" stroke="#8a5a2b" stroke-width="4" stroke-linecap="round"/>
      <path d="M30 28c-8-6-16-4-18 1 6-3 12-2 18 1zM30 28c8-6 16-4 18 1-6-3-12-2-18 1zM30 28c-3-8 1-14 6-15-3 5-4 10-6 15z" fill="#35d07f"/>`
  },
  {
    id: 9, emoji: '🏆', name: 'Ачивка',
    desc: 'Десять кликов подряд по одному месту — медаль «Тестировщик года» с фанфарами',
    art: `<path d="M22 6l8 18h-6L14 12zM42 6l-8 18h6l10-12z" fill="#ff5c39"/>
      <circle cx="32" cy="38" r="18" fill="#ffc046"/>
      <circle cx="32" cy="38" r="13" fill="#ffdb8a"/>
      <path d="M32 30l2.6 5.4 6 .8-4.3 4.2 1 6-5.3-2.9-5.3 2.9 1-6-4.3-4.2 6-.8z" fill="#a86a12"/>`
  },
  {
    id: 10, emoji: '🦆', name: 'Утёнок-психолог',
    desc: 'На слово «помоги» приходит резиновая уточка и даёт мудрый совет',
    art: `<ellipse cx="30" cy="42" rx="20" ry="13" fill="#ffc046"/>
      <circle cx="42" cy="26" r="12" fill="#ffc046"/>
      <path d="M52 26h10l-8 6z" fill="#ff8a3d"/>
      <circle cx="45" cy="23" r="2.6" fill="#0a0a12"/>
      <path d="M14 44c6 4 14 4 20 0" stroke="#e8a626" stroke-width="2.5" fill="none" stroke-linecap="round"/>`
  },
  {
    id: 11, emoji: '🕰️', name: 'Режим 1999',
    desc: 'Секретная кнопка превращает дизайн в сайт из девяностых: Comic Sans и мигающие гифки',
    art: `<rect x="6" y="10" width="52" height="36" rx="4" fill="#c9c9d6"/>
      <rect x="11" y="15" width="42" height="26" rx="2" fill="#101a2e"/>
      <rect x="15" y="19" width="22" height="3" fill="#35d07f"/>
      <rect x="15" y="25" width="30" height="3" fill="#35d07f" opacity=".7"/>
      <rect x="15" y="31" width="14" height="3" fill="#35d07f" opacity=".45"/>
      <rect x="24" y="46" width="16" height="6" fill="#a8a8bb"/>
      <rect x="18" y="52" width="28" height="4" rx="2" fill="#c9c9d6"/>`
  },
  {
    id: 12, emoji: '🐈', name: 'Дно интернета',
    desc: 'Скролл до самого низа открывает кота и надпись «Ты дошёл до конца интернета»',
    art: `<path d="M14 24l-3-13 12 7zM50 24l3-13-12 7z" fill="#8a8aa0"/>
      <ellipse cx="32" cy="34" rx="20" ry="17" fill="#8a8aa0"/>
      <circle cx="25" cy="31" r="3" fill="#0a0a12"/><circle cx="39" cy="31" r="3" fill="#0a0a12"/>
      <path d="M32 37l-3 3h6z" fill="#ff5c39"/>
      <path d="M8 34h10M8 40h10M46 34h10M46 40h10" stroke="#c9c9d6" stroke-width="1.8" stroke-linecap="round"/>`
  },
  {
    id: 13, emoji: '🌧️', name: 'Эмодзи-дождь',
    desc: 'Ввод названия команды запускает дождь из эмодзи по всему экрану',
    art: `<path d="M18 26a10 10 0 0119-4 8 8 0 011 16H20a8 8 0 01-2-12z" fill="#c9c9d6"/>
      <circle cx="20" cy="48" r="5" fill="#ffc046"/><circle cx="33" cy="54" r="4.5" fill="#ff5c39"/>
      <circle cx="45" cy="47" r="5" fill="#35d07f"/><circle cx="27" cy="43" r="3.5" fill="#4d7cff"/>
      <circle cx="18.5" cy="47" r=".9" fill="#0a0a12"/><circle cx="21.5" cy="47" r=".9" fill="#0a0a12"/>
      <path d="M18.5 50c1 1 2.5 1 3.5 0" stroke="#0a0a12" stroke-width="1" fill="none" stroke-linecap="round"/>`
  },
  {
    id: 14, emoji: '🎤', name: 'Шёпот',
    desc: 'Продукт в случайный момент шёпотом произносит имя одного из членов команды',
    art: `<rect x="26" y="8" width="12" height="26" rx="6" fill="#f2f2f7"/>
      <path d="M20 28a12 12 0 0024 0" stroke="#ff5c39" stroke-width="3.5" fill="none" stroke-linecap="round"/>
      <path d="M32 40v10M25 52h14" stroke="#8a8aa0" stroke-width="3.5" stroke-linecap="round"/>
      <path d="M50 20c3 4 3 12 0 16M8 20c-3 4-3 12 0 16" stroke="#ffc046" stroke-width="2.5" fill="none" stroke-linecap="round" opacity=".8"/>`
  },
  {
    id: 15, emoji: '🪞', name: 'Зеркало',
    desc: 'Секретное действие переворачивает весь интерфейс вверх ногами на пять секунд с извинением',
    art: `<rect x="10" y="6" width="44" height="24" rx="3" fill="#4d7cff" opacity=".85"/>
      <rect x="10" y="34" width="44" height="24" rx="3" fill="#4d7cff" opacity=".3"/>
      <text x="32" y="25" font-size="17" font-weight="800" fill="#0a0a12" text-anchor="middle">АБВ</text>
      <text x="32" y="53" font-size="17" font-weight="800" fill="#0a0a12" text-anchor="middle"
            transform="rotate(180 32 47)" opacity=".7">АБВ</text>`
  }
];

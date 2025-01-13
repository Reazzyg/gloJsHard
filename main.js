let lang = 'ru';
let ruDays = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
let enDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

if (lang === 'ru') {
  console.log(ruDays);
} else if (lang === 'en') {
  console.log(enDays);
}

switch (lang) {
  case 'ru':
    console.log(ruDays);
    break;
  case 'en':
    console.log(enDays);
    break;
}

let output = {
  'ru': ruDays,
  'en': enDays,
};
console.log(output[lang]);

let namePerson = 'Артем';

namePerson === 'Артем'
  ? console.log('Директор')
  : namePerson === 'Александр'
  ? console.log('Преподаватель')
  : console.log('Студент');

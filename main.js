const ShowDate = {
  months: [
    'января',
    'февраля',
    'марта',
    'апреля',
    'мая',
    'июня',
    'июля',
    'августа',
    'сентября',
    'октября',
    'ноября',
    'декабря',
  ],
  weekDays: [
    'понедельник',
    'вторник',
    'среда',
    'четверг',
    'пятница',
    'суббота',
    'воскресенье',
  ],

  addZero(value) {
    return value < 10 ? '0' + value : value;
  },

  changeHourDeclension(num) {
    if (num % 100 >= 11 && num % 100 <= 14) {
      return 'часов';
    }
    const lastDigit = num % 10;
    if (lastDigit === 1) {
      return 'час';
    } else if (lastDigit >= 2 && lastDigit <= 4) {
      return 'часа';
    }
    return 'часов';
  },

  getCorrectedDayOfWeek(dayOfWeek) {
    return dayOfWeek === 0 ? 6 : dayOfWeek - 1;
  },

  formatFullDate(date) {
    const dayOfWeek = this.getCorrectedDayOfWeek(date.getDay());
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    const hour = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    return `Сегодня ${this.weekDays[dayOfWeek]}, ${day} ${
      this.months[month]
    } ${year} года, ${hour} ${this.changeHourDeclension(
      hour,
    )} ${minutes} минут ${seconds} секунды`;
  },

  formatSimpleDate(date) {
    const day = this.addZero(date.getDate());
    const month = this.addZero(date.getMonth() + 1);
    const year = date.getFullYear();
    const hour = this.addZero(date.getHours());
    const minutes = this.addZero(date.getMinutes());
    const seconds = this.addZero(date.getSeconds());

    return `${day}.${month}.${year} - ${hour}:${minutes}:${seconds}`;
  },
};

console.log(ShowDate.formatFullDate(new Date()));

setInterval(() => {
  console.log(ShowDate.formatSimpleDate(new Date()));
}, 1000);

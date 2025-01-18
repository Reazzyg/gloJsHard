const week = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const body = document.querySelector('body');
let dayOfWeek = new Date().getDay();
let htmlContent = '';

dayOfWeek = dayOfWeek === 0 ? 6 : dayOfWeek - 1;

week.forEach((day, index) => {
  if (index === dayOfWeek) {
    if (index === 5 || index === 6) {
      htmlContent += `<p><b><i>${day}</i></b></p>`;
    } else {
      htmlContent += `<p><b>${day}</b></p>`;
    }
  } else if (index === 5 || index === 6) {
    htmlContent += `<p><i>${day}</i></p>`;
  } else {
    htmlContent += `<p>${day}</p>`;
  }
});

body.innerHTML = htmlContent;

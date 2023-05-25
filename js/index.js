const btn = document.querySelector(".btn-toggle");
const theme = document.querySelector("#theme-link");
btn.addEventListener("click", function() {
  if (theme.getAttribute("href") == "css/light-theme.css") {
    theme.href = "css/dark-theme.css";
  } else {
    theme.href = "css/light-theme.css";
  }
});

  let dayNames = ["Воскресенье","Понедельник","Вторник","Среда","Четверг","Пятница","Суббота"];
  let monthNames = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", 
  "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];
  let now = new Date();
  let weekNumber = Math.ceil(now.getDate() / 7);
const fullDate = dayNames[now.getDay()] + ", "  +   weekNumber +  " " +'неделя' + " " + monthNames[now.getMonth()] + " " + now.getFullYear()  + " " + 'года';
const dateDivs = document.querySelectorAll('.date');
dateDivs.forEach(div => div.textContent = "Дата добавления на сайт:" + " " + fullDate )

  const btnUp = {
    el: document.querySelector('.btn-up'),
    show() {
      this.el.classList.remove('btn-up_hide');
    },
    hide() {
      this.el.classList.add('btn-up_hide');
    },
    addEventListener() {
      window.addEventListener('scroll', () => {
        const scrollY = window.scrollY || document.documentElement.scrollTop;
        scrollY > 400 ? this.show() : this.hide();
      });
      document.querySelector('.btn-up').onclick = () => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      }
    }
  }
  
  btnUp.addEventListener();

  function openForm() {
    document.getElementById("add-form").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("add-form").style.display = "none";
  }
const button = document.querySelector(".btn"); 
button.addEventListener("click", function()
{
  alert('Заказ успешно оформлен!');
}
);

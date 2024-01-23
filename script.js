// let pass = prompt("Enter the Password:", "");
// if (pass == null)  window.location = "index.html";
// else if (pass.toLowerCase() == "ww")  
//       window.location = "page/index-next-1.html";
// else  window.location = "index.html";


document.addEventListener("DOMContentLoaded", function() {
  var loader = document.querySelector(".loading-animation");
  var content = document.querySelector(".content");

  setTimeout(function() {
    loader.style.opacity = 0;
    setTimeout(function() {
      loader.style.display = "none";
      content.style.display = "block";
    }, 600);
  }, 1000);
});


function handleSubmit(event) {
      event.preventDefault(); // Предотвратить стандартное поведение отправки формы
      const formData = new FormData(event.target); // Получить данные формы
      const name = formData.get('name');
      const email = formData.get('email');
      
      
      // Можно выполнить дополнительные действия с данными, например, отправить на сервер
      
      // Переход на другую страницу
      window.location.href = 'page/index-next-1.html';
    }
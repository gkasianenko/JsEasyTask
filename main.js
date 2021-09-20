//Алгоритм


//1. Найти на странице участвующие элементы во взаимодействии

const carImage = document.querySelector("#car-img");

const colorItems = document.querySelectorAll(".colorItem");

//2. Отследить события пользователя

colorItems.forEach(function(item) {
    item.addEventListener("click", function(event){
        
        //3. Функции, которые сработают после пользовательских событий
    
        //Находим значение аттрибута data-file у кружочков
        const fileName = event.target.dataset.file;
      
      //Назначаем новую строку src картинке авто через конкатенацию
        carImage.src = `https://webcademy.ru/files/js2020/solaris/${fileName}`;

        //4. Делаем кнопку по клику активной
        const prevActiveButton = document.querySelector(".colorItem--active");

        prevActiveButton.classList.remove("colorItem--active");

        event.target.classList.add("colorItem--active");


        

    });
});





const colorsSelector = document.querySelector("#colorsSelector");
let colorsItems = document.querySelectorAll(".colorItem");
const carsItems = document.querySelectorAll(".car-item");

colorsSelector.addEventListener("click", changeColor);

function changeColor(event) {

    //Функция выделения выбранного цвета кружком
    if(event.target.classList.contains("colorItem")) {
       colorsItems.forEach(function(item){
            item.classList.remove("colorItem--active");
        });

    //Выделить цель клика кружком
    event.target.classList.add("colorItem--active");

    //Находим цвета машин и вносим в массив


        carsItems.forEach(function(item) {

            item.classList.add("none");

            if(event.target.classList.contains("colorWhite") && item.getAttribute("data-color") == "colorWhite"){
                item.style.display = "inline";

            } 
            else if(event.target.classList.contains("colorRed") && item.getAttribute("data-color") == "colorRed") {
                item.style.display = "inline";
                
            } 
            else if(event.target.classList.contains("colorGraphite") && item.getAttribute("data-color") == "colorGraphite") {
                item.style.display = "inline";
               
            }
            else if(event.target.classList.contains("colorWhitePure") && item.getAttribute("data-color") == "colorWhitePure") {
                item.style.display = "inline";
                
            }
            else if(event.target.classList.contains("colorBlack") && item.getAttribute("data-color") == "colorBlack") {
                item.style.display = "inline";
               
            }
            else if(event.target.classList.contains("colorOrange") && item.getAttribute("data-color") == "colorOrange") {
                item.style.display = "inline";
            }
            else if(event.target.classList.contains("colorBlue") && item.getAttribute("data-color") == "colorBlue") {
                item.style.display = "inline";

            } else {
                item.style.display = "none";
            }

        });

    }

};

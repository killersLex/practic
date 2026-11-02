//#region 1
// document - класс олицитворяющий HTML страницу в которой мы вызываем скрипт
// getElementById() - функция, ищущая объект по ID указанномиу в документе
// "" - выделение текстовой части
// . - исполнение относительно объекта/класса
const m1 = document.getElementById("1massage");
// textContent - пекременная хранимая в объекте
// = - званк присвоения присваивает переменной значение
m1.textContent = "Текст найден";
//#endregion
//#region 2-3
const counter = document.getElementById("counter");
counter.textContent = 0;
const uper = document.getElementById("up");
const reseterCounter = document.getElementById("reset");
const countStep = document.getElementById("countStep");
const StepErr = document.getElementById("inputStepErr")
let count = 0;
function plus()
{
let step = Number(countStep.value)
if (step > 0){
    StepErr.textContent = "";
    uper.textContent= "+" + step;
    if (count+step<11)
        {
            count += step;
        }
        else{
            count = -10+(count+step-10);
        }
        counter.textContent = count;
}
else {
StepErr.textContent= "err.fku: Чувак, ты шагаешь криво так нельзя";
}
        
}
// число и элемент вывода и- разные переменные по этому и разные значения
// не понял вопроса
function resetCount()
{
    count = 0;
    counter.textContent = count;
    StepErr.textContent = "";
    countStep.value = 1;
    uper.textContent= "+1";
}
uper.addEventListener("click", plus);
reseterCounter.addEventListener("click", resetCount)
//#endregion
//#region 4
const cardStyle = document.getElementById("Card_0");
const styleChange = document.getElementById("cardAction_0");
let style = false;
function ChangeStyle(){
    if(style == 0)
    {
        cardStyle.classList.toggle("in-select");
        style = 1;
    }
    if(style == 1){
        cardStyle.classList.toggle("card")
        style = 0;
    }
}
styleChange.addEventListener("click", ChangeStyle);

// объявляем без точки потомучто и так уже уточнили, что нежно переключить стиль
// 

//#endregion
//#region 5. Первый fetch: GET одной записи

const getCardDescription = document.getElementById("cardDescription_1");
const getCardTitle = document.getElementById("cardTitle_1");
const getCardStatus = document.getElementById("status");
const getCardBtn = document.getElementById("cardAction_1"); // Кнопка GET (по аналогии с cardAction_0)

let isLoading = false; 

async function requestPost() {
    if (isLoading) return; 

    const url = "https://api.artic.edu/api/v1/artworks/129884";
    isLoading = true;
    getCardStatus.textContent = "Статус: Загрузка...";
    getCardBtn.disabled = true;

    try {
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error(`Ошибка сервера: ${response.status}`);
        }

        const post = await response.json();

        getCardTitle.textContent = post.title;
        getCardDescription.textContent = post.body;
        getCardStatus.textContent = "Статус: Данные успешно загружены";

    } catch (error) {
        getCardStatus.textContent = `Статус: Ошибка! (${error.message})`;
        getCardTitle.textContent = "Не удалось загрузить данные";
        getCardDescription.textContent = "Проверьте подключение к сети и попробуйте снова.";
    } finally {
        isLoading = false;
        getCardBtn.disabled = false; 
    }
}

getCardBtn.addEventListener("click", requestPost);
//#endregion
//#region Переменные
//================================================================================================================================================================================================================================
const api = `https://api.m0ckly.site/m/demo/posts`;
//#region Quest 1
const filmDescription_q1 = document.getElementById(`filmDescription_q1`);
const moreInfoBtn_q1 = document.getElementById(`moreInfo_q1`);
let more_q1 = false;
//#endregion Quest 1
//#region Quest 2
const title_q2 =document.getElementById(`title_q2`);
const titleInput_q2 = document.getElementById(`titleInput_q2`);
const changeTitleBtn_q2 = document.getElementById(`changeTitleBtn_q2`);
//#endregion Quest 2
//#region Quest 3
const titleSelectorDisplay_q3 = document.getElementById(`sFilmTitle_q3`);
const timeDispley_q3 = document.getElementById(`time_q3`);
const seansSelector_q3 = document.getElementById(`selector_q3`);
const checkChildren_q3 = document.getElementById(`child_q3`);
const sellStatusDisplay_q3 = document.getElementById(`sellStatus_q3`);
const cenaDisplay_q3 = document.getElementById(`cena_q3`);
let cena_q3 = [150, 300, 600];
let timme_q3 = [`7:00`, `13:00`, `20:00`];
let sell_q3 = 0.15;
let seansType_q3 = [
    `утренний, "Анатомический театр", за авторством "Детский метал-хор Всесоюзного радио"`,
    `дневной, "Псих", за авторством "Детский метал-хор Всесоюзного радио"`,
    `вечерний, "Первый снег", за автоорством "Бездна Анального Угнетения"`
];
let selectHistory_q3 = [null, null]
//#endregion Quest 3
//#region Quest 4
const personStege_q4 = document.getElementById(`personStege_q4`);
const filpStageLimit_q4 = document.getElementById(`filpStageLimit_q4`);
const result_q4 = document.getElementById(`result_q4`);
const resultbtn_q4 = document.getElementById(`resultbtn_q4`);
//#endregion Quest 4

//================================================================================================================================================================================================================================
//#endregion Переменные


//#region Функции
//================================================================================================================================================================================================================================
//#region Quest 1
filmDescription_q1.textContent = `Типо боль...`
function changeDesc_q1() {
if(!more_q1){
more_q1 = true;
filmDescription_q1.textContent = `Типо большое описание \n прям очень большое \n ну супер большое прям`
}   
else{
more_q1 = false;
filmDescription_q1.textContent = `Типо боль...`
} 
}
//#endregion Quest 1
//#region Quest 2

function changeTitle_q2(){
    if (titleInput_q2.value.trim() !== ``){
        title_q2.textContent = titleInput_q2.value;
    }
    else{
        title_q2.textContent = `Хорошее кино рядом`;
    }
}
//#endregion Quest 2
//#region Quest 3
function changeSesion(){
selectHistory_q3[1] = selectHistory_q3[0];
selectHistory_q3[0] = seansSelector_q3.value;
let sq3 = selectHistory_q3[0];


timeDispley_q3.textContent = `Время: ` + timme_q3[sq3];
titleSelectorDisplay_q3.textContent = `Сеанс: ` + seansType_q3[sq3];
if (!checkChildren_q3.checked){
    sellStatusDisplay_q3.textContent = `Статус скидки: не акктивна`
    cenaDisplay_q3.textContent = `Стоимость: ` + cena_q3[sq3]+`₿`;
}
else
{
    sellStatusDisplay_q3.textContent = `Статус скидки: акктивна ` +  sell_q3*100 + `%`;
    cenaDisplay_q3.textContent = `Стоимость: ` + cena_q3[sq3]*(1-sell_q3)+`₿`;
}
}
//#endregion Quest 3
//#region Quest 4
function comparison_q4(){
    if (personStege_q4.value.trim() == '' || filpStageLimit_q4.value.trim() == ''){
        if(personStege_q4.value.trim() == '') result_q4.textContent = `отказано, вы не ввели свой возраст или ввели его не коректно`;
        else if(filpStageLimit_q4.value.trim() == '') result_q4.textContent = `отказано, вы не ввели ограничение фильма или ввели его не коректно`;
    }
    else if (personStege_q4.value < filpStageLimit_q4.value)
    {
        result_q4.textContent = `отказано, ограничение: ` + filpStageLimit_q4.value + `, вам же ` + personStege_q4.value + ` лет`; 
    }
    else{
        result_q4.textContent = `разрешенно, ограничение: ` + filpStageLimit_q4.value + `, вам уже есть ` + personStege_q4.value + ` лет`;
    }
}
//#endregion Quest 4

//================================================================================================================================================================================================================================
//#endregion Функции


//#region Эвенты
//================================================================================================================================================================================================================================
//#region Quest 1
moreInfoBtn_q1.addEventListener("click", changeDesc_q1)
//#endregion Quest 1
//#region Quest 2
changeTitleBtn_q2.addEventListener("click", changeTitle_q2);
//#endregion Quest 2
//#region Quest 3
seansSelector_q3.addEventListener(`change`, changeSesion);
checkChildren_q3.addEventListener(`change`, changeSesion);
//#endregion Quest 3
//#region Quest 4
resultbtn_q4.addEventListener(`click`, comparison_q4);
//#endregion Quest 4

//================================================================================================================================================================================================================================
//#endregion Эвент
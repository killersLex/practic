//#region Переменные

    //#region Changer
        const Changer_btn = document.getElementById(`change_btn`);
        const Changer_msg = document.getElementById(`message_change`);
        let changer_chng = false;
    //#endregion Changer

    //#region HelloName
const helloName_txt = document.getElementById(`helloName_txt`);
const helloName_input = document.getElementById(`helloName_input`);
const helloName_btn = document.getElementById(`helloName_btn`);
    //#endregion HelloName

//#endregion Переменные


//#region Функции
    //#region Changer
        function clicker(){

        if (changer_chng == false){
        changer_chng = true;
        Changer_msg.textContent = `Включено`;
        Changer_btn.textContent = `Bыключить`;
        }
        else{
            changer_chng = false;
            Changer_msg.textContent = `Выключено`;
            Changer_btn.textContent = `Включить`;
        }
    }
    //#endregion

    //#region HelloName
        function helloName(){
                helloName_txt.textContent = `Добрового времени суток, `+helloName_input.value;
        }
    //#endregion

//#endregion
//#region Эвенты
    //#region changer
        Changer_btn.addEventListener("click", clicker);
    //#endregion

    //#region HelloName
        helloName_input.addEventListener("input", helloName);
    //#endregion HelloName

//#endregion
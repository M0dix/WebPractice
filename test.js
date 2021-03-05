function sled_vopr(){
    if(document.getElementById('vopros9').style.display == "block"){
        if (checkRadioButtons('9') == true){
        document.getElementById('vopros9').style.display = "none";
        document.getElementById('vopros10').style.display = "block";
        document.getElementById('kn_sl').style.display = "none";
        document.getElementById('kn_pr').style.display = "block";
        }
        else{
            alert("Вы не выбрали вариант ответа");
        }

    }
    if(document.getElementById('vopros8').style.display == "block"){
        if (checkRadioButtons('8') == true){
        document.getElementById('vopros8').style.display = "none";
        document.getElementById('vopros9').style.display = "block";
        }
        else {
            alert("Вы не выбрали вариант ответа")
        }        
    }
    if(document.getElementById('vopros7').style.display == "block"){
        if (checkRadioButtons('7') == true){
        document.getElementById('vopros7').style.display = "none";
        document.getElementById('vopros8').style.display = "block";
        }
        else {
            alert("Вы не выбрали вариант ответа");
        }
    }
    if(document.getElementById('vopros6').style.display == "block"){
        if (checkRadioButtons('6') == true){
        document.getElementById('vopros6').style.display = "none";
        document.getElementById('vopros7').style.display = "block";
        }
        else {
            alert("Вы не выбрали вариант ответа");
        }
    }
    if(document.getElementById('vopros5').style.display == "block"){
        if (checkRadioButtons('5') == true) {
        document.getElementById('vopros5').style.display = "none";
        document.getElementById('vopros6').style.display = "block";
        }
        else {
            alert("Вы не выбрали вариант ответа");
        }
    }
    if(document.getElementById('vopros4').style.display == "block"){
        if (checkRadioButtons('4') == true) {
        document.getElementById('vopros4').style.display = "none";
        document.getElementById('vopros5').style.display = "block";
        }
        else {
            alert("Вы не выбрали вариант ответа");
        }
    }
    if(document.getElementById('vopros3').style.display == "block"){
        if (checkRadioButtons('3') == true) {
        document.getElementById('vopros3').style.display = "none";
        document.getElementById('vopros4').style.display = "block";
        }
        else {
            alert("Вы не выбрали вариант ответа");
        }
    }
    if(document.getElementById('vopros2').style.display == "block"){
         if (checkRadioButtons('2') == true) {
        document.getElementById('vopros2').style.display = "none";
        document.getElementById('vopros3').style.display = "block";
        }
        else {
            alert("Вы не выбрали вариант ответа");
        }
    }
    if(document.getElementById('vopros1').style.display == "block"){
        if (checkRadioButtons('1') == true){
        document.getElementById('vopros1').style.display = "none";
        document.getElementById('vopros2').style.display = "block";
        }
        else alert("Вы не выбрали вариант ответа");
    }
}


function checkRadioButtons(x){
    var inp = document.getElementsByName(x);
    for (var i = 0; i < inp.length; i++){
        if (inp[i].type == "radio" && inp[i].checked == true){
            return true;
        }
    }
    return false;
}

function proverit(){
    if (checkRadioButtons('10') == true){
    let ball=0;
    var otveti = "";
    for(var i = 1; i<=10; i++){
        var rad=document.getElementsByName(i);
        for (let j=0;j<rad.length;j++){
            if (rad[j].checked&&rad[j].value==1){
                ball+=1;
                otveti += "<br><span id='nvo'>Вопрос "+i+". Вы ответили верно.</span>";    
            }
            else if(rad[j].checked&&rad[j].value!=1){
                 otveti += "<br><span id='nvo'>Вопрос "+i+". Вы ответили неверно.</span>"; 
            }
        }
    }
    document.getElementById('rezultat').style.display = "block";
    document.getElementById('vopros10').style.display = "none";
    document.getElementById('kn_pr').style.display = "none";
    vsego_zadach=10;
    procent= (ball/vsego_zadach)*100;
    procent = procent.toFixed();
    document.getElementById('rezultat').innerHTML = "<span id='ot'>Задания выполнены верно на "+procent+"%.</span><br><br>"+otveti;
    }
    else alert("Вы не выбрали вариант ответа");
}
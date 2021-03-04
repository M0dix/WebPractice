function sled_vopr(){
    if(document.getElementById('vopros9').style.display == "block"){
        document.getElementById('vopros9').style.display = "none";
        document.getElementById('vopros10').style.display = "block";
        document.getElementById('kn_sl').style.display = "none";
        document.getElementById('kn_pr').style.display = "block";
    }
    if(document.getElementById('vopros8').style.display == "block"){
        document.getElementById('vopros8').style.display = "none";
        document.getElementById('vopros9').style.display = "block";
    }
    if(document.getElementById('vopros7').style.display == "block"){
        document.getElementById('vopros7').style.display = "none";
        document.getElementById('vopros8').style.display = "block";
    }
    if(document.getElementById('vopros6').style.display == "block"){
        document.getElementById('vopros6').style.display = "none";
        document.getElementById('vopros7').style.display = "block";
    }
    if(document.getElementById('vopros5').style.display == "block"){
        document.getElementById('vopros5').style.display = "none";
        document.getElementById('vopros6').style.display = "block";
    }
    if(document.getElementById('vopros4').style.display == "block"){
        document.getElementById('vopros4').style.display = "none";
        document.getElementById('vopros5').style.display = "block";
    }
    if(document.getElementById('vopros3').style.display == "block"){
        document.getElementById('vopros3').style.display = "none";
        document.getElementById('vopros4').style.display = "block";
    }
    if(document.getElementById('vopros2').style.display == "block"){
        document.getElementById('vopros2').style.display = "none";
        document.getElementById('vopros3').style.display = "block";
    }
    if(document.getElementById('vopros1').style.display == "block"){
        document.getElementById('vopros1').style.display = "none";
        document.getElementById('vopros2').style.display = "block";
    }
}

function proverit(){
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
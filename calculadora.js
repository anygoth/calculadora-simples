const visor = document.getElementById("resultado");
function insert(num){
visor.innerHTML += num;

}

function clean(){
 visor.innerHTML = "";   


}
let numeroVisor = visor.textContent;
function back(){
visor.innerHTML = numeroVisor.substring(0,numeroVisor.length -1);
}
function calcular(){
 let numeroVisor = visor.textContent
 visor.innerText = eval(numeroVisor);   
}
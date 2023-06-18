//Variables de los numeros definidas en el DOM
const n0ELDOM = document.getElementsByClassName("n0")[0]
const n1ELDOM = document.getElementsByClassName("n1")[0]
const n2ELDOM = document.getElementsByClassName("n2")[0]
const n3ELDOM = document.getElementsByClassName("n3")[0]
const n4ELDOM = document.getElementsByClassName("n4")[0]
const n5ELDOM = document.getElementsByClassName("n5")[0]
const n6ELDOM = document.getElementsByClassName("n6")[0]
const n7ELDOM = document.getElementsByClassName("n7")[0]
const n8ELDOM = document.getElementsByClassName("n8")[0]
const n9ELDOM = document.getElementsByClassName("n9")[0]

//Variables de operadores
const sumaELDOM = document.getElementsByClassName("suma")[0]
const restaELDOM = document.getElementsByClassName("resta")[0]
const igualELDOM = document.getElementsByClassName("igual")[0]
const multiplicarELDOM = document.getElementsByClassName("multiplicacion")[0]
const divisionELDOM = document.getElementsByClassName("divisor")[0]


//Variable de la pantalla definidia en el DOM
const pantallaELDOM = document.getElementsByClassName("pantalla-arriba")[0]



//Mostar en pantalla los numeros de los botones
n0ELDOM.addEventListener("click", handleClick0)
function handleClick0(){
    pantallaELDOM.innerText += "0";
    
}
n1ELDOM.addEventListener("click", handleClick1)
function handleClick1(){
    pantallaELDOM.innerText += 1;
}
n2ELDOM.addEventListener("click", handleClick2)
function handleClick2(){
    pantallaELDOM.innerText += 2;
}
n3ELDOM.addEventListener("click", handleClick3)
function handleClick3(){
    pantallaELDOM.innerText += 3;
}
n4ELDOM.addEventListener("click", handleClick4)
function handleClick4(){
    pantallaELDOM.innerText += 4;
}
n5ELDOM.addEventListener("click", handleClick5)
function handleClick5(){
    pantallaELDOM.innerText += 5;
}
n6ELDOM.addEventListener("click", handleClick6)
function handleClick6(){
    pantallaELDOM.innerText += 6;
}
n7ELDOM.addEventListener("click", handleClick7)
function handleClick7(){
    pantallaELDOM.innerText += 7;
}
n8ELDOM.addEventListener("click", handleClick8)
function handleClick8(){
    pantallaELDOM.innerText += 8;
}
n9ELDOM.addEventListener("click", handleClick9)
function handleClick9(){
    pantallaELDOM.innerText += 9;
}

//Funcion Clear
const clear = document.getElementsByClassName("reset")[0];
clear.addEventListener("click", handleClickreset)
function handleClickreset() {
    pantallaELDOM.innerText = ""; 
}

//Variable para almacenar numeros 
let numeros = [];
//Variable para almacenar operadores
let operador = "";

let resultado; 

//Funcion Igual
igualELDOM.addEventListener("click", handleClickigual)
    function handleClickigual(){
        numeros.push(Number(pantallaELDOM.innerText));
  let operacion = '';
  for (let i = 0; i < numeros.length; i++) {
    if (i % 2 === 0) {
      // Número
      operacion += numeros[i];
    } else {
      // Operador
      operacion += ' ' + numeros[i] + ' ';
    }
  }
  
  let resultado = eval(operacion); // Evalúa la expresión matemática
  
  pantallaELDOM.innerText = resultado;
  numeros = [];
  operador = "";
    }
//Funcion Suma
sumaELDOM.addEventListener("click",handleClicksuma)
function handleClicksuma(){
    operador = "+";
    numeros.push(Number(pantallaELDOM.innerText), "+");
    pantallaELDOM.innerText = "";
}
//Funcion Resta
restaELDOM.addEventListener("click",handleClickresta)
function handleClickresta(){
    operador = "-";
    numeros.push(Number(pantallaELDOM.innerText),"-");
    pantallaELDOM.innerText = "";
}
//Funcion Multiplicar
multiplicarELDOM.addEventListener("click",handleClickmultiplicar)
function handleClickmultiplicar(){
    operador = "*";
    numeros.push(Number(pantallaELDOM.innerText), "*");
    pantallaELDOM.innerText = "";
}
//Funcion Dividir
divisionELDOM.addEventListener("click",handleClickdivision)
function handleClickdivision(){
    operador = "/";
    numeros.push(Number(pantallaELDOM.innerText), "/");
    pantallaELDOM.innerText = "";
}










class Calculadora{

 sumar =(num1,num2)=> parseInt(num1) + parseInt(num2);

 restar =(num1,num2)=> parseInt(num1) - parseInt(num2);

 multiplicar =(num1,num2)=> parseInt(num1) * parseInt(num2);

 dividir =(num1,num2)=> parseInt(num1) / parseInt(num2);

 potencia =(num1,exp)=> parseInt(num1)**parseInt(exp);//Potencia Math.pow(parseInt(num1), parseInt(exp))

 raizcuadrada =(num1)=> Math.sqrt(num1);
 
 raizcubica =(num1) => Math.cbrt(num1);

};

const calculadora = new Calculadora();

alert("Escoja la operacion a realizar: ");
operacion = prompt("1: Suma, 2: Resta, 3: Multiplicacion, 4: Division, 5:Potenciacion ");

if (operacion ==1){
    let numero1 = prompt("Primer termino: ");
    let numero2 = prompt("Segundo termino: ");
    document.write(`El resultado es: ${calculadora.sumar(numero1, numero2)}`);
}else if (operacion ==2){
    let numero1 = prompt("Primer termino: ");
    let numero2 = prompt("Segundo termino: ");
    document.write(`El resultado es: ${calculadora.restar(numero1, numero2)}`);
} else if (operacion ==3){
    let numero1 = prompt("Primer termino: ");
    let numero2 = prompt("Segundo termino: ");
    document.write(`El resultado es: ${calculadora.multiplicar(numero1, numero2)}`);
} else if (operacion ==4){
    let numero1 = prompt("Primer termino: ");
    let numero2 = prompt("Segundo termino: ");
    document.write(`El resultado es: ${calculadora.dividir(numero1, numero2)}`);
}else if (operacion ==5){
    let numero1 = prompt("Primer termino (Base): ");
    let numero2 = prompt("Segundo termino (Exponente): ");
    document.write(`El resultado es: ${calculadora.potencia(numero1, numero2)}`);
}else if (operacion == 6){
    let numero1 = prompt("Conocer raiz cuadrada de: ");
    document.write(`El resultado es: ${calculadora.raizcuadrada(numero1)}`);
}else if (operacion == 7){
    let numero1 = prompt("Conocer raiz cubica de: ");
    document.write(`El resultado es: ${calculadora.raizcubica(numero1)}`);
}else{
    alert("Lo ingresado no es una opcion.");
}

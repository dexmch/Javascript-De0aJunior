/* PROBLEMA 1
let free = false;

const validarCliente =(time)=>{
    let edad = prompt("Dime tu edad: ");
    if (edad > 18){
        if (time >=2 && time < 7 && !free){
            alert("Podes pasar gratis, porque sos la primer presona despues de las 2 AM");
            free = true;
        }else{     alert(`son las ${time}hs y podes pasar, pero tienes que pagar la entrada`);        };
    } else {    alert("mira papu, sos menor de edad por ende no vas a pasar, MAQUINOLA");   };
};*/

//validarCliente(23);
//PROBLEMA 2
/*let cantidad = prompt("Ingrese la cantidad de alumno que tiene: ");
let alumnosTotales =[];

for ( i=0; i<cantidad; i++ ){
    alumnosTotales[i] = [prompt("Indique el nombre: "+ (i+1)),0];

};

const tomarAsistencia = (nombre,p) =>{
    let presencia = prompt(nombre);
    if(presencia == "p" || presencia == "P"){
        alumnosTotales[p][1]++;
    };
};

for (i = 0; i<30; i++){
    for(alumno in alumnosTotales){
        tomarAsistencia(alumnosTotales[alumno][0], alumno);
    };
};

for (alumno in alumnosTotales){
    let resultado = `${alumnosTotales[alumno][0]}:  </br>
            Presentes: ${alumnosTotales[alumno][1]} </br>
            Ausentes: ${30 - alumnosTotales[alumno][1]}</br>
            `;
    if (30 - alumnosTotales[alumno][1] > 18){
        resultado +="<b style='color:red'> REPROBADO POR INASISTENCIAS</b><br></br>"
    }else{
        resultado+="<br></br>"
    }
    document.write(resultado);
};*/

//PROBLEMA 3

const sumar =(num1,num2)=> parseInt(num1) + parseInt(num2);

const restar =(num1,num2)=> parseInt(num1) - parseInt(num2);

const multiplicar =(num1,num2)=> parseInt(num1) * parseInt(num2);

const dividir =(num1,num2)=> parseInt(num1) / parseInt(num2);

alert("Escoja la operacion a realizar: ");
operacion = prompt("1: Suma, 2: Resta, 3: Multiplicacion, 4: Division ");

if (operacion ==1){
    "<h2>SUMA</h2>"   
    let numero1 = prompt("Primer termino: ");
    let numero2 = prompt("Segundo termino: ");
    document.write(`El resultado es: ${sumar(numero1, numero2)}`)
}else if (operacion ==2){
    "<h2>Resta</h2>"   
    let numero1 = prompt("Primer termino: ");
    let numero2 = prompt("Segundo termino: ");
    document.write(`El resultado es: ${restar(numero1, numero2)}`)
} else if (operacion ==3){
    "<h2>Multiplicacion</h2>"   
    let numero1 = prompt("Primer termino: ");
    let numero2 = prompt("Segundo termino: ");
    document.write(`El resultado es: ${multiplicar(numero1, numero2)}`)
} else if (operacion ==4){
    "<h2>DIVISION</h2>"   
    let numero1 = prompt("Primer termino: ");
    let numero2 = prompt("Segundo termino: ");
    document.write(`El resultado es: ${dividir(numero1, numero2)}`)
}else{
    alert("Lo ingresado no es una opcion.");
}
let pc1 = {
    nombre: "DexmPC",
    procesador: "AMD Ryzen 5",
    ram: "8GB",
    espacio: "250GB"
};

let nombre= pc1["nombre"];
let procesador = pc1["procesador"];

frase =`El nombre de mi pc es ${nombre} </br> 
        El  tipo de proccesador es ${procesador}</br>`;

document.write(frase);

let numero = 0;

while(numero<=13){
    
    numero++;
    if (numero ==10){
        continue;
    }
    
    document.write(numero+ "</br>");
}

/* 
for (...in...){ devuelve la posicion de los elementos del arrary};
for (...of...){ devuelve el contenido de los elementos del arrary, ademas recorre todo el array};
*/

array1=["maria", "josefa", "roberta"];
array2=["pedro", "marcelo", array1, "Josefina"];

forRancio: //sentencia LABEL
for (let array in array2){
    if (array == 2){
        for(let array of array1){
            continue forRancio;
            document.write(array + "</br>");
            
        };
    }else{
        document.write(array2[array] + "</br>");
    }
};
const obtenerInformacion = (materia)=>{
    materias={
        fisica:["Hernandez", "juan", "pepito", "cofla", "maria", "Dachel"],
        programacion:["Saltos", "pedro", "juan", "pepito", "Dachel"],
        logica:["Godinez" ,"pedro", "cofla", "maria", "Dachel"],
        quimica: ["Miraba" ,"pedro", "juan", "pepito", "cofla", "maria"]
    };
    if(materias[materia]!==undefined){
        return [materias[materia], materia, materias];
    }else{
        return materias;
    }
};

const  mostrarMaterias = (materia) => {
    let informacion = obtenerInformacion(materia);
    if (informacion !=false){
    
    let profesor = obtenerInformacion(materia)[0][0];
    let alumnos = obtenerInformacion(materia)[0];
    alumnos.shift();
    
    document.write(`El profesor de la materia de <b>${informacion[1]} es: </b> <b style='color:green'>${profesor} </b></br>
        Los alumnos son: <b style ='color:blue'>${alumnos}</b><br></br>
    `);
    };
};

const cantidadDeClases = (alumno) => {
    let informacion = obtenerInformacion();
    let info = obtenerInformacion();
    let clasesPresentes =[];
    let cantidadTotal =  0;
    for(info in informacion){
        if(informacion[info].includes(alumno)){
            cantidadTotal++;
            clasesPresentes.push(" " + info );
        }
    }
    return `<b style='color:blue'> ${alumno}</b> esta en <b>${cantidadTotal}</b> clases: <b>${clasesPresentes}</b></br>
    `;
};

mostrarMaterias("fisica");
mostrarMaterias("programacion");
mostrarMaterias("logica");
mostrarMaterias("quimica");

document.writeln(cantidadDeClases("Dachel"));
document.writeln(cantidadDeClases("cofla"));
document.writeln(cantidadDeClases("maria"));
document.writeln(cantidadDeClases("juan"));
document.writeln(cantidadDeClases("pedro"));
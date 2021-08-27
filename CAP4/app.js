let materias={
    fisica:["Hernandez", "juan", "pepito", "cofla", "maria", "Dachel"],
    programacion:["Saltos", "pedro", "juan", "pepito", "Dachel"],
    logica:["Godinez" ,"pedro", "cofla", "maria", "Dachel"],
    quimica: ["Miraba" ,"pedro", "juan", "pepito", "cofla", "maria"]
};

const inscribir =(alumno, materia)=>{
    personas = materias[materia];
    if (alumno.length >=21 ){
        document.write(`lo siento <b>${alumno}</b>, el cupo para <b>${materia}</b> esta copada.`);
    }else{
        personas.push(alumno);
        if (materia == "fisica"){
            materias={
                fisica: personas,
                programacion: materias['programacion'],
                logica: materias['logica'],
                quimica: materias['quimica']
            };
        }else if (materia == "programacion"){
            materias={
                fisica: materias['fisica'],
                programacion: personas,
                logica: materias['logica'],
                quimica: materias['quimica']
            };
        }else if (materia == "logica"){
            materias={
                fisica: materias['fisica'],
                programacion: materias['programacion'],
                logica: personas,
                quimica: materias['quimica']
            };
        } else if (materia == "quimica"){
            materias={
                fisica: materias['fisica'],
                programacion: materias['programacion'],
                logica: materias['logica'],
                quimica: personas
            };
        }
        document.write(`Felicidades! ${alumno} te has inscrito a la materia ${materia} correctamente.`)
    }
};

inscribir("Dachel", "programacion");
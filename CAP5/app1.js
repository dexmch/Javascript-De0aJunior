const materias ={
    fisica: [90,6,4,"fisica"],
    matematica: [84,8,2, "matematica"],
    logica: [92,7,4, "logica"],
    quimica: [96,6,3, "quimica"],
    calculo: [91,5,2, "calculo"],
    programacion: [79,7,4, "programacion"],
    biologia: [75,9,2, "biologia"],
    bbdd: [89,9,1, "bbdd"],
    algebra: [100,10,4, "algebra"]
};


const aprobo=()=>{
    for (materia in materias){

        let asistencias = materias[materia][0];
        let promedio = materias[materia][1];
        let trabajos = materias[materia][2];

        console.log(materias[materia][3]);

        if (asistencias >= 90) {
            console.log("%c     Asistencias en orden", "color:green");
        }else{
            console.log("%c     Falta de asisistencias", "color:red");
        }

        if (promedio >= 7) {
            console.log("%c     Promedio en orden", "color:green");
        }else{
            console.log("%c     Promedio reprobrado", "color:red");
        }

        if (trabajos >= 3) {
            console.log("%c     Trabajos practicos en orden", "color:green");
        }else{
            console.log("%c     Trabajos practicos insuficientes", "color:red");
        }


    };
};

aprobo();
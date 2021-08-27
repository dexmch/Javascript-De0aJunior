class App{
    constructor(descargas, puntuacion, peso){
        this.descargas = descargas;
        this.puntuacion = puntuacion;
        this.peso = peso;
        this.iniciada = false;
        this.instalada = false;
    };

    instalar(){
        if(this.instalada == false){
            this.instalada = true;
            if(this.instalada==true){
                alert("App instalada correctamente");
            }else{
                alert("Ha ocurrido un error")
            };
        };
    };

    desinstalar(){
        if(this.instalada == true){
            this.instalada = false;
            if (this.instalada == false){
                alert("App desinstalada correctamente");
            }else{
                alert("Ha ocurrido un error")
            };
        };
    };

    abrir(){
        if(this.iniciada == false && this.instalada == true){
            this.iniciada = true;
            alert("App iniciada");
        };
    };

    cerrar(){
        if(this.iniciada == true && this.instalada == true){
            this.iniciada = false;
            alert("App cerrada");
        };
    };

    appInfo(){
        return`
        Descargas:<b> ${this.descargas}</b></br>
        Puntuacion:<b> ${this.puntuacion}</b></br>
        Peso:<b> ${this.peso}</b></br>
        `;
    }

};

app1 = new App("16.000", "5 estrellas", "900mb");
app2 = new App("6.000", "4 estrellas", "400mb");
app3 = new App("2.000", "3 estrellas", "1GB");
app4 = new App("78.000", "2 estrellas", "300mb");
app5 = new App("5.000", "3.5 estrellas", "250mb");
app6 = new App("36.000", "4.7 estrellas", "500mb");
app7 = new App("10.000", "3.4 estrellas", "200mb");

document.write(`
${app1.appInfo()}</br>
${app2.appInfo()}</br>
${app3.appInfo()}</br>
${app4.appInfo()}</br>
${app5.appInfo()}</br>
${app6.appInfo()}</br>
${app7.appInfo()}</br>
`);
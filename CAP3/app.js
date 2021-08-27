class celulares{
    constructor(color, peso, rdp, rdc, ram){
        this.color = color;
        this.peso = peso;
        this.resolucionDePantalla = rdp;
        this.resolucionDeCamara = rdc;
        this.memoriaRam = ram;
        this.encendido = false;
    };
    
    presionarBotonEncendido(){
        if(this.encendido == false){
            alert("celular prendido");
            this.encendido =true;
        }else{
            alert("El celular ya esta apagado");
        }
    };
    
    reiniciar(){
        if(this.encendido == true){
            alert("Reiniciando celular");
        }else{
            alert("El celular esta apagado");
            this.encendido = false;
        }
    };
    
    tomarFoto(){
        alert(`Foto tomada en una resolucion de: ${this.resolucionDeCamara}`);
    }

    grabarVideo(){
        alert(`Grabando video en resolucion de: ${this.resolucionDeCamara}`);
    }

    mobileInfo(){
        return`
        Color: <b>${this.color}</b></br>
        Peso: <b>${this.peso}</b></br>
        Resolucion de camara: <b>${this.resolucionDePantalla}</b></br>
        Resolucion de video: <b>${this.resolucionDeCamara}</b></br>
        Memoria Ram: <b>${this.memoriaRam}</b></br>
        `;
    };

};

class celularAltaGama extends celulares{
    constructor(color, peso, rdp, rdc, ram, rcde){
        super(color, peso, rdp, rdc, ram);
        this.resolucionDeCamaraExtra = rcde;
    };

    grabarVideoLento(){
        alert("Se esta grabando en camara lenta");
    };

    reconocimientoFacial(){
        alert("Se inicia el reconocimiento facial");
    };

    infoAltaGama(){
        return this.mobileInfo() + `Resolucion de camara tracera ${this.resolucionDeCamaraExtra}`;
    };

};

/*
celular1 = new celulares("rojo","150gr", "5'", "full hd", "2GB");
celular2 = new celulares("gris","100gr", "5'", "720 hd", "2GB");
celular3 = new celulares("blanco","250gr", "8'", "4k UHD", "4GB");


celular1.presionarBotonEncendido();
celular1.tomarFoto();
celular1.grabarVideo();
celular1.reiniciar();
celular1.presionarBotonEncendido();
*/
celular1 = new celularAltaGama("blanco","250gr", "8'", "4k UHD", "4GB", "full hd");
celular2 = new celularAltaGama("Azul","250gr", "8'", "4k UHD", "4GB", "hd");

document.write(`
    ${celular1.infoAltaGama()} </br>
    ${celular2.infoAltaGama()} </br>
    
`);

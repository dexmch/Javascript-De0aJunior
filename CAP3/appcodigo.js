class Animal {
    constructor(especie,edad,color){
        this.especie = especie; //this.especie= crea una propiedad llamada especie.
        this.edad = edad;
        this.color = color;
        this.informacion= `Soy ${this.especie}, tengo ${this.edad} y soy de color ${this.color}`;
    }

    //verInformacion = () => document.write(this.informacion + "</br>");
    verInformacion(){
        document.write(this.informacion + "</br>");
    };
};

class Perro extends Animal{
    constructor(especie, edad, color, raza){
        super(especie, edad, color);
        this.raza = null;
    };

    static ladrar(){
        alert("Guau");
    };

    set setRaza(newName){
        this.raza = newName;
    };

    get getRaza(){
        return this.raza;
    };

};

const perro = new Perro("perro", "5", "cafe", "doberman");
const gato = new Animal("gato", "2", "negro");
const pajaro = new Animal("pajaro", "1", "verde");

//document.write(perro.informacion + "</br>" + gato.informacion + "</br>" + pajaro.informacion);

perro.setRaza= "Golden";
document.writeln(perro.getRaza);
//gato.verInformacion();
//pajaro.verInformacion();
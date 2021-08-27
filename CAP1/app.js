//Caso de cofla
//Primera solucion
dineroCofla = prompt("Cuanto dinero tienes Cofla?");
dineroRoberto = prompt("Cuanto dinero tienes Roberto?");
dineroPedro = prompt("Cuanto dinero tienes Pedro?");

dineroCofla = parseInt(dineroCofla);

if (dineroCofla >= 0.6 && dineroCofla < 1){
    alert("Cofla, te alcanza para el helado de agua");
    alert("y te sobran "+(dineroCofla -0.6));
}
else if(dineroCofla >= 1 && dineroCofla < 1.6){
    alert("Cofla, te alcanza para el helado de crema");
    alert("y te sobran "+(dineroCofla -1));
}
else if(dineroCofla >= 1.6 && dineroCofla < 1.7){
    alert("Cofla, te alcanza para el helado de heladix");
    alert("y te sobran "+(dineroCofla -1.6));
}
else if(dineroCofla >= 1.7 && dineroCofla < 1.8){
    alert("Cofla, te alcanza para el helado de heladovix");
    alert("y te sobran "+(dineroCofla -1.7));
}
else if(dineroCofla >= 1.8 && dineroCofla < 2.9){
    alert("Cofla, te alcanza para el helado de helardo");
    alert("y te sobran "+(dineroCofla -1.8));
}
else if(dineroCofla >= 2.9){
    alert("Cofla te alcanza para el Helado con confeti o el pote de 1/4 kg");
    alert("y te sobran "+(dineroCofla -2.9));
}
else{ alert("Lo siento, Cofla, no te alcanza para comprar.");}


//ROBERTO
if (dineroRoberto >= 0.6 && dineroRoberto < 1){
    alert("Roberto, te alcanza para el helado de agua");
}
else if(dineroRoberto >= 1 && dineroRoberto < 1.6){
    alert("Roberto, te alcanza para el helado de crema");
}
else if(dineroRoberto >= 1.6 && dineroRoberto < 1.7){
    alert("Roberto, te alcanza para el helado de heladix");
}
else if(dineroRoberto >= 1.7 && dineroRoberto < 1.8){
    alert("Roberto, te alcanza para el helado de heladovix");
}
else if(dineroRoberto >= 1.8 && dineroRoberto < 2.9){
    alert("Roberto, te alcanza para el helado de helardo");
}
else if(dineroRoberto >= 2.9){
    alert("Roberto te alcanza para el Helado con confeti o el pote de 1/4 kg");
}
else{ alert("Lo siento, Roberto, no te alcanza para comprar.");}

//Pedro
if (dineroPedro >= 0.6 && dineroPedro < 1){
    alert("Pedro, te alcanza para el helado de agua");
}
else if(dineroPedro >= 1 && dineroPedro < 1.6){
    alert("Pedro, te alcanza para el helado de crema");
}
else if(dineroPedro >= 1.6 && dineroPedro < 1.7){
    alert("Pedro, te alcanza para el helado de heladix");
}
else if(dineroPedro >= 1.7 && dineroPedro < 1.8){
    alert("Pedro, te alcanza para el helado de heladovix");
}
else if(dineroPedro >= 1.8 && dineroPedro < 2.9){
    alert("Pedro, te alcanza para el helado de helardo");
}
else if(dineroPedro >= 2.9){
    alert("Pedro, te alcanza para el helado con confeti o el pote de 1/4 kg");
}
else{ alert("Lo siento, Pedro, no te alcanza para comprar.");}
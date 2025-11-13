// ESERCIZIO 1

let voto = 29;

if(voto < 18){
    console.log("insufficiente");
}else if(voto >= 18 && voto < 21){
    console.log("sufficiente"); 
}else if(voto >= 24 && voto < 27){
console.log("buono");
}else if(voto >= 27 && voto <= 29){
    console.log("ottimo");
}else if(voto = 30){
    console.log("eccelente");
}

// ESERCIZIO 2

// let temperatura = prompt("Che tempo fa oggi?")

// if(temperatura < -10){
//     console.log("copriti…ancora ti raffreddi");
// }else if(temperatura < 0){
//     console.log("non è tanto il freddo quanto l’umidità");
// }else if(temperatura < 20){
//     console.log("non ci sono più le mezze stagioni"); 
// }else if(temperatura >= 30){
//     console.log("lu mare, lu sule e lu ientu"); 
// }else if(temperatura < 30){
//     console.log("mi dia una peroni sudata");
// }

// ESERCIZIO 3

let num = 2;

for(let i = 1; i <= 10; i++){
  console.log(num + " x " + i + " = " + (num * i));
}

// ESERCIZIO 4

let bevande;

do{
  bevande = prompt("Seleziona un prodotto: Tasto 1 - Acqua, Tasto 2 - Coca Cola, Tasto 3 - Birra");

  switch(bevande){
    case "1":
      console.log("Hai selezionato l'acqua");
      break;
    case "2":
      console.log("Hai selezionato la Coca Cola");
      break;
    case "3":
      console.log("Hai selezionato la birra");
      break;
    default:
      console.log("Non hai selezionato niente...");
  }

}while(bevande !== "1" && bevande !== "2" && bevande !== "3");

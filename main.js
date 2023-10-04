//Booleanos
const booleano1 = true;
const booleano2 = false;
const booleanoAnd = booleano1 && booleano2;
const booleanoOr = booleano1 || booleano2;
const booleanoNot = !booleano1 && !booleano2;
const booleanoMix0 = booleanoOr && booleanoNot;

//Operadores
const valorDivision = (17/3).toFixed(2);
console.log(valorDivision);
const valorResto = 17%7;

//Lógica de programación
const a = 9
const b = "9"
if (a == b) {
    console.log("Son iguales");
}else {
    console.log("No son iguales");
}
if (a === b) {
    console.log("Son iguales");
}else {
    console.log("No son iguales, es un number y un string");
}
                //Mochila
const mochila = ["libreta", "ordenador", "botella", "auriculares", "merienda", "cargador"]
if (mochila.length > 10) { console.log("No puedo cargar con tantas cosas");

} else if (mochila.length <= 10 && mochila.length>= 2){
console.log("Qué bien voy con mi mochila");
} else {
    console.log("Creo que no necesito mochila.");
}

                    //Festivo
const diaFestivo = true
diaFestivo ? console.log("Hoy no trabajo"): console.log("Hoy trabajo");

  // TEST 1

const ordenador = {
    marca: "La pava",
    tipo: "portátil",
    perifericos: ["keyboard","touchPad",],
    almacenamiento: {
        discos: ["SSD", "HDD",],
        maestro: 0,
    }
}

  if (typeof ordenador === "object") {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }

// TEST 2
if (ordenador.marca === "La pava") {
    console.log("apruebas");
  } else {
    console.log("suspendes");}

// TEST 3
if (ordenador.tipo === "portátil") {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }
  // TEST 4
  if (ordenador.perifericos[1] === "touchPad") {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }

// TEST 5
if (ordenador["almacenamiento"]["discos"][1] === "HDD") {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }
 //VAR TEST 5
  if (ordenador.almacenamiento.discos[1] === "HDD") {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }

// TEST 6
if (ordenador.almacenamiento.maestro === 0) {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }







const arr = [
    { length:0,
        name: "pepito",
        age: 25,
  }, 
    { height:3,
        name: "pepito",
        age: 27,
  },
  {width:4,
    age: 24,
    name:"J",

}]
  

 // TEST 1
      if (typeof arr === "object" && arr.length >= 0) {
        console.log("apruebas ok");
      } else {
        console.log("suspendes");
      }
// TEST 2
    if (typeof arr[0] === "object") {
      console.log("apruebas");
    } else {
      console.log("suspendes");
    }
 // TEST 3
 if (typeof arr[1] === "object") {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }
 // TEST 4
 if (typeof arr[2] === "object") {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }
 // TEST 5
 if (arr.length === 3) {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }
// TEST 6
if (arr[0].name === arr[1].name) {
    console.log("aprobada");
  } else {
    console.log("suspendes");
  }
 // TEST 6
 if (arr[1].name === "pepito") {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }
 // TEST 7
 if (arr[1].age > arr[2].age) {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }
// TEST 8
if (arr[0].age === 25) {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }
// TEST 9
if (typeof arr[2].name === "string") {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }
// TEST 10
if (arr[2].name[0] === "J") {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }



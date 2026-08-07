// Ambito Global
var globalVar = "Soy una Variable con ambito global";
let globalLet = 'También soy global, pero con ámbito de let';
const globalConst = "Soy una constante global";

{
    // Ambito de bloque
    var blockVar = "Soy un var con ambito de bloque";
    let blockLet = "Soy un let con ambito de bloque";
    const blockConst = "Soy un const con ambito de bloque";
}

// Alcance global
console.log(globalVar); // Salida: "Soy una variable global"
console.log(globalLet); // Salida: "También soy global, pero con alcance de let"
console.log(globalConst); // Salida: "Soy una constante global"

//Block Scope
//console.log(blockVar);
//console.log(blockLet);

function show(){
    var functionVar = "Soy una var con alcance de bloque";
    let functionLet = "Soy un let con alcance de bloque";
    const functionConst = "Soy un const con alcance de bloque";
    }
    show();
    
    console.log(functionVar); // Lanza ReferenceError
    console.log(functionLet); // Lanza ReferenceError
    console.log(functionConst); // Lanza ReferenceError
    
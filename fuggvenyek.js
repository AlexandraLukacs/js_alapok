export function udvozles() {
    console.log("jó reggelt mindenkinek!")
}

export function elagazas() {
    /* Írj kódot, ami a szam válétozóról eldönti, hogy 0, páros, páratlan */
    /* == a két értéket hasonlít össze */
    /* === a két értéket és a két típust is összehasonlítja */
    if (szam === 0){ //"0"===0  az egyik szöveg a másik szám
        console.log(`a ${szam} változó értéke 0`)
    }else if (szam % 2 === 0){ //"0"%2 --> 0%2 -> 0
        console.log(`a ${szam} változó értéke páros`)
    }else if (szam % 2 === 1){
        console.log(`a ${szam} változó értéke páratlan`)
    }/*else{
        console.log(`a szam változó nem szám`)
    }*/

}

export function ciklus1(){
    /* Írjuk ki 10x a consolra, hogy "Szép nap van!" */
    for (let index = 0; index < 10; index++) {
        console.log(`${index}. "Szép nap van!"`)
    }
}

export function ciklus2() {
    /* Írjuk ki 10x a consolra, hogy "Szép nap van!" while ciklussal*/
    let index=0;
    while (index<10){
        console.log(`${index}. "Szép nap van!"`);
        index++;
    }
}
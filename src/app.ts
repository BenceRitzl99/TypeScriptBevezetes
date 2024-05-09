console.log("Működik a TS");

var age: number;
age = 23;  //age = "aa"; --> nem fordítja le mert típusos a nyelv, kevesebb a hibalehetőség
var price: number = 3.5; // adhatok neki egyből értéket
var price2 = 3.7; // nem kötelező a típúst így megadni
//var price3; --> nem szereti, any típus 

var valami: any;
valami = 35;
valami = "alma";
valami = true; // any lehet bármi

var jo_ido_van: boolean; //igaz hamis
jo_ido_van = true;

var szam: number = 0b101;

console.log(szam);

//Tömb
//üres

const szamok: number[] = [];
const nevek: string[] = [];
szamok.push(35); // adok hozzá számot
szamok.push(72);
nevek.push("Lajos");
console.log(szamok);

const sorozat: number[] = [3, 6, 9];
const felelok: string[] = ["Lajos", "Emese", "János"];
felelok.push("Béla"); 

function nevjegy():void {   // nincs visszatérési érték
    console.log("Nagy János");
    console.log("Budapest");
}
nevjegy();

function osszead(num1: number, num2: number):number {  //):number --> nem kötelező
    let osszeg: number = num1 + num2;
    return osszeg;
}
console.log(osszead(30, 35));

// function valamiMas():never {
//     throw new Error("Hiba!");
//     console.log("------utána-------") // hiba után nem írja ki
// }
// valamiMas();

var ara: string | number;  //Alt GR + W = |
ara = 35;
ara = "mindent veszítesz";

enum SzovegesEnum {
    ValasztasA = "A",
    ValasztasB = "B",
}
console.log(SzovegesEnum.ValasztasA)

enum Irany {
    ESZAK = "Észak",
    DEL = "Dél",
    KELET = "Kelet",
    NYUGAT = "Nyugat"
}
var jatekosIrany: Irany.DEL;
if (jatekosIrany) {};

function showData(name: string, city: string = "Budapest") {
    console.log(name, city)
}
showData("Lajos"); //alapértelmezett Budapest
showData("Lajos", "Szeged");
console.log("aaaaaa")
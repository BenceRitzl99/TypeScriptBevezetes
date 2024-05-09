console.log("Működik a TS");
var age;
age = 23; //age = "aa"; --> nem fordítja le mert típusos a nyelv, kevesebb a hibalehetőség
var price = 3.5; // adhatok neki egyből értéket
var price2 = 3.7; // nem kötelező a típúst így megadni
//var price3; --> nem szereti, any típus 
var valami;
valami = 35;
valami = "alma";
valami = true; // any lehet bármi
var jo_ido_van; //igaz hamis
jo_ido_van = true;
var szam = 5;
console.log(szam);
//Tömb
//üres
var szamok = [];
var nevek = [];
szamok.push(35); // adok hozzá számot
szamok.push(72);
nevek.push("Lajos");
console.log(szamok);
var sorozat = [3, 6, 9];
var felelok = ["Lajos", "Emese", "János"];
felelok.push("Béla");
function nevjegy() {
    console.log("Nagy János");
    console.log("Budapest");
}
nevjegy();
function osszead(num1, num2) {
    var osszeg = num1 + num2;
    return osszeg;
}
console.log(osszead(30, 35));
// function valamiMas():never {
//     throw new Error("Hiba!");
//     console.log("------utána-------") // hiba után nem írja ki
// }
// valamiMas();
var ara; //Alt GR + W = |
ara = 35;
ara = "mindent veszítesz";
var SzovegesEnum;
(function (SzovegesEnum) {
    SzovegesEnum["ValasztasA"] = "A";
    SzovegesEnum["ValasztasB"] = "B";
})(SzovegesEnum || (SzovegesEnum = {}));
console.log(SzovegesEnum.ValasztasA);
var Irany;
(function (Irany) {
    Irany["ESZAK"] = "\u00C9szak";
    Irany["DEL"] = "D\u00E9l";
    Irany["KELET"] = "Kelet";
    Irany["NYUGAT"] = "Nyugat";
})(Irany || (Irany = {}));
var jatekosIrany;
if (jatekosIrany) { }
;
function showData(name, city) {
    if (city === void 0) { city = "Budapest"; }
    console.log(name, city);
}
showData("Lajos"); //alapértelmezett Budapest
showData("Lajos", "Szeged");
console.log("aaaaaa");

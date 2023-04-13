// qui faccio inserire i km che vuole percorrere
let km = prompt("inserisci kilometraggio");
km = parseFloat(km)
// qui faccio inserire l età 
let eta = prompt("inserisci età");
eta = parseInt(eta).toFixed(2)
// qui setto il prezzo al km
let price = (km * 0.21)
price = parseFloat(price)
// con queste due variabili definisco lo sconto da applicare in base all età inserita con una sottrazione
let discount20 = ((km * 0.21) * 0.2)
let discount40 = ((km * 0.21) * 0.4)
// con l if imposto l alert da far comparire 
if (eta < 18) {
    alert ("il prezzo del tuo biglietto è " + parseFloat(price - discount20).toFixed(2) + " €")
} else if (eta > 65) {
    alert ("il prezzo del tuo biglietto è " + parseFloat(price - discount40).toFixed(2) + " €")
}
else {
    alert ("il prezzo del tuo biglietto è " + parseFloat(price).toFixed(2) + " €")
}








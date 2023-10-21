
// let limit = Math.floor(Math.random()*5)

// console.log(limit)

let ad = prompt('Adinizi daxil edin:');

let num = +prompt('0-dan 5-e kimi reqem daxil edin');

let limit = Math.floor(Math.random() * 6);
let netice; if (num == limit) { netice = `${ad} Uddun qaqa halaldi`; }

else if (num > 5) {
    netice = `${ad} siz 5-den boyuk reqem daxil etmemisiniz`
} else if (num !== limit) {
    netice = `  ${ad}, siz ${num} Daxil ettiniz, Udus reqemi ise ${limit}-dir. Davay DOMOY`
};


document.getElementById("cevab").innerHTML = netice;



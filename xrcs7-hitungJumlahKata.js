function hitungJumlahKata(kalimat){
    var kata = kalimat.split(' ');

    for(i = kata.length; i > 0; i--){
        if(i[' '] === kata[' ']){
            return i;
            break;
        }
    }
}

// TEST CASES
console.log(hitungJumlahKata('I have a dream')); // 4
console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
console.log(hitungJumlahKata('A song to sing')); // 4
console.log(hitungJumlahKata('I')); // 1
console.log(hitungJumlahKata('I believe I can code')); // 5
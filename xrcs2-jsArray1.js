var word = 'Hello world!';

function balikString(word){
    var balik = '';

    for(i = word.length - 1; i >=0; i-- ){
        balik += word[i];
    }
    return balik;
}

console.log(balikString(word));
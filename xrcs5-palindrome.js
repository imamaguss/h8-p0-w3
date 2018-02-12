function palindrome(kata){
    var balik = '';
    for(var i = kata.length - 1; i >= 0; i--){
        balik += kata[i];     
    }
    if(balik === kata){
        return true;
    } 
    return false;       
}

// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false

// return kata.split('').reverse().join('') == kata ;
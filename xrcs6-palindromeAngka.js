function angkaPalindrome(num){
    num++;

    for(var i = num; i > 0; i++){
        var stringNum = String(i);
        var balik = '';
        
        for (var j = stringNum.length - 1; j >= 0; j--) {
            balik += stringNum[j];   
        }

        if(i == balik){
            return i;
            break;
        } 
    }
} 
// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001
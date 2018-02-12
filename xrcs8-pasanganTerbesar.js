function pasanganTerbesar(num) {
    var strNum = String(num);
    var take = [];

    for(i = 0 ; i < strNum.length-1; i++){
        take.push(strNum[i]+strNum[i+1]);
    }

     take.sort(function(num1,num2){
         return num1 < num2;
         
     });
           return +take[0]
}
  
// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99
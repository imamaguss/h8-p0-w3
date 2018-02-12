function targetTerdekat(arr) {
    var xPosition = [];
    var oPosition = [];
    var distance = [];

    for(var i = 0; i < arr.length; i++){
        if(arr[i] === 'o'){
            oPosition.push(i);
        }
        
        if(arr[i] === 'x'){
            xPosition.push(i);            
        }
    }

    var tmpDistance = 0;
    for(var j = 0; j < xPosition.length; j++){
        tmpDistance = xPosition[j] - oPosition;
        
        if(tmpDistance<0) tmpDistance *= -1;
            distance.push(tmpDistance);
    }
    
    distance = distance.sort(function (a, b){
        return a - b;
    })

    if(xPosition.length === 0){
        return 0;
    }    

    return distance[0];        
}

// TEST CASES
console.log(targetTerdekat(['', '', 'o', '', '', 'x', '', 'x'])); // 3
console.log(targetTerdekat(['o', '', '', '', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', '', '', '', 'x', 'x', '', 'o'])); // 1
console.log(targetTerdekat(['', '', 'o', ''])); // 0
console.log(targetTerdekat(['', 'o', '', 'x', 'x', '', '', 'x'])); // 2
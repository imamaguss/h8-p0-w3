function groupAnimals(animals) {
    animals.sort(function(a,b){
        return a[0] > b[0];
    });

    var hewan = [];   
    var next = 0;
    for (var i = 0; i < animals.length; i++) {
        if(hewan.length === 0){
            hewan.push([animals[i]]);
        } else if(hewan[next][0][0] === animals[i][0]){
            hewan[next].push(animals[i]);
        } 
        else {
            hewan.push([animals[i]]);
            next++; 
        }               
    }
    return hewan;
}
  
// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]
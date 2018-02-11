var input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling(){
    //splice to add 'Elsharawy'
    input.splice(1, 1, 'Roman Alamsyah Elsharawy');
    
    console.log(input);
 
    //switch case month
    var date = input[3];
    var newDate = date.split("/");
    var month = Number(newDate[1]);
    var newMonth = '';

    switch(month){
        case 1:{newMonth = 'Januari'; break;}
        case 2:{newMonth = 'Februari'; break;}
        case 3:{newMonth = 'Maret'; break;}
        case 4:{newMonth = 'April'; break;}
        case 5:{newMonth = 'Mei'; break;}
        case 6:{newMonth = 'Juni'; break;}
        case 7:{newMonth = 'Juli'; break;}
        case 8:{newMonth = 'Agustus'; break;}
        case 9:{newMonth = 'September'; break;}
        case 10:{newMonth = 'Oktober'; break;}
        case 11:{newMonth = 'November'; break;}
        case 12:{newMonth = 'Desember'; break;}
        default:{newMonth = '00';}
    }
    console.log(newMonth);

    //sort by decending
    newDate.sort(function(num1, num2){
        return num1 < num2;
    })
    console.log(newDate);

    //format tanggal '-'
    joinDate = newDate.join('-');
    console.log(joinDate);

    //slice to get name
    var newInput = input[1].slice(0, 15);
    console.log(newInput);
}

dataHandling();
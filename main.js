
var tablero = ' ';

for (x= 0; x< 8; x++){
    for (y= 0; y< 8; y++)

    if ((y+x)%2 ===0){
        tablero+='*';
    }
    else{
        tablero += '#'
    }
    tablero+= '\n'
    }
    console.log(tablero);




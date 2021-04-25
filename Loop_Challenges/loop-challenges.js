//Print odds 1-20 code//
var result=0;
for(var i=1; i<=20; i++){
    if (i%2 != 0) {
        console.log(result+i)
    }
}

//Print the sequence//
for(var i=4; i>=-3.5; i-= 1.5){
    console.log(i)
}

//Sigma//
var sum=1;
for(var i=2; i<=100; i++){
    sum = sum+i;
    }
console.log(sum);

//Factorial//
function factorial(){
    var product = 1;
    for (var n = 1; product <= 1e8; n++){
         product = product * (n+1);
    }
    return n;
}  
console.log(factorial())
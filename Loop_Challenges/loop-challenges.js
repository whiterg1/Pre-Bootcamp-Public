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
function factorial(n){
    if(n> 0 && n<=1){
        return 1;
    }else{
        return n * factorial(n-1)
    }
}
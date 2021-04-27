function fibonacciArray() {
    var fibArr = [0, 1];
    var output = document.getElementById("fib-output")
    for(var i=2; i<10; i++){
        fibArr.push (fibArr[i-1] + fibArr[i-2]);
    }
    output.innerHTML = fibArr
}
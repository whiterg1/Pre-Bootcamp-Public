//High Pass Filter//
function highPass(arr, cutoff) {
    var filteredArr = [];
    for(var i=0; i<arr.length; i++){
        if (arr[i] > cutoff){
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result);

//Evens or Odds
function evensOfOdds(arr) {
    var totalOdds = 0;
    var totalEvens = 0;
        for(var i=0; i<arr.length; i++){
            if(arr[i] % 2 == 0){
                totalEvens=arr[i]+totalEvens;
            }else{
                totalOdds=arr[i]+totalOdds;
            }
        }
        if(totalEvens>totalOdds){
            result = "Evens are Larger";
            return result;
        }if(totalOdds>totalEvens){
            result = "Odds are Larger";
        }if(totalOdds == totalEvens){
            result = "Tied";
        }return result;
    }
var result = evensOfOdds([6, 8, 3, 10, -2, 5, 9]);
console.log(result);


//Better Than Average//
function betterThanAverage(arr) {
    var sum = 0;
    var count = 0;
    for(var i=0; i<=arr.length; i++){
        if (arr.length > i){
            sum = sum + arr[i];
        }
        else if(i == arr.length){
            sum = sum/arr.length;
        }
    }
    for(var i=0; i<arr.length; i++){
        if(arr[i]>sum){
            count = count + 1;
        }
    }return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result);

//Fibonacci Array//
function fibonacciArray(n) {
    var fibArr = [0, 1];
    for(var i=2; i<n; i++){
        fibArr.push (fibArr[i-1] + fibArr[i-2]);
    }
    return fibArr;
}
var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

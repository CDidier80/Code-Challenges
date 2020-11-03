let bigArray = []
for (i=0; i < 100; i++) {
    bigArray.push(i)
}

const divisibilityTest = function(number, divisor) {
        if (number % divisor === 0 ) {
            return true
        } else {
            return false
        }
    }
    
const fizzBuzzTest = function(arr, fizzValue, buzzValue) {
    for (i=0; i < arr.length; i++){
        let stringToLog = ""
        if (divisibilityTest(arr[i], fizzValue)) {stringToLog += "fizz"}
        if (divisibilityTest(arr[i], buzzValue)) {stringToLog += "buzz"}  
        (stringToLog.length === 0) ? console.log(i) : console.log(stringToLog)
}}

// test
fizzBuzzTest(bigArray, 3, 5)





// const testNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// testNums.forEach(function(element){console.log(fizzBuzzTest(element))})    throws forEach not a function error

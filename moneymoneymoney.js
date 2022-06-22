// This is the link to this JavaScript Coding Challenge
// https://www.codewars.com/kata/563f037412e5ada593000114/train/javascript

function calculateYears(principal, interest, tax, desired) {
    if(principal == desired){
        console.log(0)
    } else {
        counter = 0
        while(principal<=desired){
            amount = []
            amount.pop()
            principal = (principal*(1+interest)) - tax*((principal*(1+interest))-principal)
            counter++
            amount.push(principal)
        }
    // console.log(principal.toFixed(2), counter)
    console.log(`Number of years required: ${counter}\nAmount: ${principal.toFixed(2)}`)
    }
}
calculateYears(1000, 0.05, 0.18, 1120)
console.log('========')
calculateYears(1000,0.01625,0.18,1200)
console.log('========')
calculateYears(1000,0.05,0.18,1000)
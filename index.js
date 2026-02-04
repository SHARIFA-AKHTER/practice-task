//Remove duplicates
// const array =  [1,2,2,3,4,4,5,6]
// const uniqueArray = [...new Set(array)]
// console.log(uniqueArray);

//object array filter
// const users =[
//     {name: "sharifa",age: 28},
//     {name: "shahin",age: 38},
//     {name: "samiha",age: 18}
// ]
// const adults = users.filter(user => user.age>=22)
// const users =[
//     {name: "Samiha",age: 25},
//     {name: "Sami",age: 28},
//     {name: "Samir",age: 35},
//     {name: "Safa",age: 19},
// ]

// const adults = users.filter(user => user.age>=20)
// const adults = users.filter(user => user.age<=20)
// console.log(adults);

//Reverse a String(olta)
// const str = "hello";
// const reversed = str.split('').reverse().join('')
// console.log(reversed);

//Find Max Number
// const numbers = [10,40,50,5,100]
// const max = Math.max(...numbers)
// console.log(max);

//Fetch Data
// async function grtData() {
//     const res = await fetch('https: //jsonplaceholder.typecode.com/todos/1')
//     const data = await res.json()
//     console.log(data);
// }
// getData();

//Find the Largest Number new
// const numbers = [10,20,40,50,100]
// const max = Math.max(...numbers)
// // console.log(max);purono 
// let largest = numbers[0]
// for(let i =1; i < numbers.length; i ++){
//     if(numbers[i] > largest){
//         largest = numbers[i]
//     }
// }
// console.log(largest);

//reduce
// const nums = [1,2,3,4,5]
// const sum = nums.reduce((total, n) => total+n,0)
// console.log(sum)

// Check for Palindrome
// function isPalindrome(str) {
//     const reversed = str.split('').reverse().join('');
//     return str === reversed;
// }

// console.log(isPalindrome("level")); // true
// const data = [1, 2, 3, 4, 5, 6];

// const evens = data.filter(num => num % 2 === 0);
// const odds = data.filter(num => num % 2 !== 0);

function countVowels(str) {
    const vowels = "aeiouAEIOU";
    let count = 0;
    for (let char of str) {
        if (vowels.includes(char)) count++;
    }
    return count;
}
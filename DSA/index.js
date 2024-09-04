// // recurssion 
// // check if palindrome

// function isPalindrome(str) {
//     let start = 0;
//     let end = str.length -1;
//     while(start !== end) {
//        if (str[start] === str[end]) {
//            start = start+1;
//            end = end -1
//            continue;
//        } else {
//         return false
//        }
//     }
//     return true
// }

// console.log(isPalindrome("1234786321"))

// // Fibonacci Series

// function getFibonacci(n) {
//     const arr = [0,1]
//     for(i = 2; i <= n; i++) {
//         arr.push(arr[i -1] + arr[i-2])
//     }
//     return arr;
// }

// console.log(fibonacciTwo(10))

// function fibonacciTwo(n) {
//     let last = 1;
//     let secondLast = 0;
//     console.log(secondLast, last)
//     for(let i =2; i <= n; i++){
//         let curr = last+secondLast;
//         console.log(curr)
//         secondLast = last;
//         last = curr;
//     }
// }

// // Hashing

// // Number Hashing

// let arr = [1, 2, 1, 3, 2, 1];

// let HasArr = Array(13).fill(0);

// for (let i = 0; i < arr.length; i++) {
//     HasArr[arr[i]] = HasArr[arr[i]] + 1;
// }

// console.log(HasArr[1], HasArr[4], HasArr[2]);

// character Hashing

// let letters = "abcdabddaaacff";
// let letterHashArr = Array(256).fill(0);

// letters = letters.split("");
// for (let i = 0; i < letters.length; i++) {
//     const charCode = letters[i].charCodeAt(0)
//     letterHashArr[charCode] = letterHashArr[charCode] + 1;
// }

// console.log(letterHashArr[102])

// Find The Highest Lowest Frequency Element

// let arr = [1, 2, 1, 5, 2,2,2, 1];

// let hashArr = Array(13).fill(0)

// for(let i = 0; i < arr.length ; i++) {
//     hashArr[arr[i]] = hashArr[arr[i]] + 1
// }



// let maxFrequency = 0;
// let minFrequency = Infinity;

// for(let i = 0; i< hashArr.length; i++) {
//     if(hashArr[i] > maxFrequency) {
//         maxFrequency = hashArr[i]
//     }
//     if(hashArr[i] !== 0 && hashArr[i] < minFrequency) {
//         minFrequency = hashArr[i]
//     }
// }

// for(i = 0; i <hashArr?.length; i++){
//     if(hashArr[i] === maxFrequency) {
//         console.log("maxFrequency Number", i, ":", maxFrequency)
//     } 
//     if(hashArr[i] === minFrequency) {
//         console.log("Min Frequency Number", i, ":", minFrequency)
//     }
// }


// Selection Sort



// selectionSortedData = (arr) => {
//     for(let i = 0; i < arr.length; i++) {
//         let minIndex = i
//         for(let j = i + 1; j < arr.length; j++) {
//             if(arr[j]< arr[minIndex]) {
//                 minIndex = j
//             }
//         }

//         if(minIndex !== i) {
//             let swap;
//             swap =arr[i];
//             arr[i] = arr[minIndex];
//             arr[minIndex] = swap
//         }
//     }

//     return arr

// }

// console.log(selectionSortedData(arr))

// Bubble Sort

// const getBubbleSortedArr = (arr) => {
//     let swapped;
//     let n =  arr.length
//     do {
//         swapped = false;
//         for(i = 0; i < n; i++) {
//             if(arr[i] > arr[i+1]) {
//                 let temp;
//                 temp = arr[i+1];
//                 arr[i+1] = arr[i];
//                 arr[i] = temp; 
//                 swapped = true
//             }
//         }
//         n--
//     } while(swapped)
//     return arr
// }

// console.log(getBubbleSortedArr(arr))


//  Insertion Sort
let arr = [7, 5, 9, 2, 8]

const getInsertionSortedData = (arr) => {
  for(let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;
    while(j >= 0 && arr[j] > key) {
        arr[j+1] = arr[j]
        j = j-1;
    }
    arr[j+1] = key
  }
  return arr
}

console.log(getInsertionSortedData(arr))


// Merge sort







// Sample Strings
let sample1 = "This ( is unbalanced." //false
let sample2 = "(This (is (a) balanced) string.)" //true
let sample3 = "This is () also ) unbalanced." //false
let sample4 = "Balanced." //true

// Write your solution below:

// const has_balanced_parens = (string) => {
//     let left = 0;
//     let right = 0;
//     for(let i = 0; i < string.length; i++){
//         if(string[i] === '('){
//             left++;
//         }else if(string[i] === ')'){
//             right++;
//         }
//     }
//     if(left === right){
//         return true
//     }
//     return false;
// }

const hasBalancedParens = string => {
    let counter = 0
    
    for(i = 0; i < string.length; i++){
      if (string[i] === '(') {
        counter += 1
      } else if (string[i] ===')'){
        counter += -1
      } if (counter < 0) {
        return false
      }
    }
    return !counter ? true : false
  }

console.log(has_balanced_parens("This ( is unbalanced."))

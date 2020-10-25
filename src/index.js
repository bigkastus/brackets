module.exports = function check(str, bracketsConfig) {
    
        let stack = []        
        
        for(let bracket of str) {                       
            let bracketsIndex = bracketsConfig.indexOf(bracket)
      
          if (bracketsIndex === -1){
            continue
          }
      
          if(bracketsIndex % 2 === 0) {
            stack.push(bracketsIndex + 1)
          } else {            
            if(stack.pop() !== bracketsIndex) {                
              return false;              
            }
          }
        }   
        return stack.length === 0                    



//     let stack = [];
//   let lastBr;

//     for (let i = 0; i < str.length; i++) {
//         if (str[i] == '[' || str[i] == '(' || str[i] == '<') {
//             stack.push(str[i]);
//         } else if (str[i] == ']' || str[i] == ')' || str[i] == '}' || str[i] == '>') {
//             if (stack.length) {
//               lastBr = stack[stack.length - 1];
//               if ( (lastBr == '[' && str[i] == ']') ||
//                    (lastBr == '(' && str[i] == ')') ||
//                    (lastBr == '<' && str[i] == '>') ) {
//                     stack.pop();
//               }
//             } else return false;
//           }
//     }
//   return (!stack.length);
}

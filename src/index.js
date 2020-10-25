module.exports = function check(str, bracketsConfig) {
    let stack = [];
  let lastBr;

    for (let i = 0; i < str.length; i++) {
        if (str[i] == '[' || str[i] == '(' || str[i] == '<') {
            stack.push(str[i]);
        } else if (str[i] == ']' || str[i] == ')' || str[i] == '}' || str[i] == '>') {
            if (stack.length) {
              lastBr = stack[stack.length - 1];
              if ( (lastBr == '[' && str[i] == ']') ||
                   (lastBr == '(' && str[i] == ')') ||
                   (lastBr == '<' && str[i] == '>') ) {
                    stack.pop();
              }
            } else return false;
          }
    }
  return (!stack.length);
}

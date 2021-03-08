//Object Destructuring Problem 1 ES5:

//var obj = {
//    numbers: {
//      a: 1,
//      b: 2
//    }
//  };
  
//  var a = obj.numbers.a;
//  var b = obj.numbers.b;

//Object Destructuring Problem 1 ES2015

const obj = {
    numbers: {
      a: 1,
      b: 2
    }
  }

  let {numbers: {a, b}} = obj 

//ES5 Array Swap:

//var arr = [1, 2];
//var temp = arr[0];
//arr[0] = arr[1];
//arr[1] = temp;

//ES2015 Array Swap
//https://github.com/sveltejs/svelte/issues/3234
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Cant_access_lexical_declaration_before_init
//and TA Zarko's help, which finally helped me solve the problem.

let arr = [1, 2];

[arr[0], arr[1]] = [arr[1], arr[0]]

//Write a function called raceResults that accepts a single array argument. It should return an object with the keys first, second, third and rest.

function raceResults([first, second, third, ...rest]){
  return {first, second, third, rest}
}


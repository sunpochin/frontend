## JS
- https://www.g2i.co/blog/2021-front-end-developer-interview-questions-and-answers
1. What is the difference between == and ===?
    - Doubles equals checks for value only. Before checking, it does any necessary type coercion. For example, the string "1" will be == to the integer 1, but it will not be ===. Many projects these days prefer to always use ===. Although, some folks advocate writing code that works well with the == type coercion.
    - ss

1. What is the `this` keyword in JavaScript?
    - this is a little tricky in JavaScript. Its value is determined by what the function you are inside of is called. In the global state, this is set to the window object. The value of this also depends on whether or not you are in strict mode. Inside a top-level function, a strict mode this will be undefined, whereas a non-strict mode this will be the window object. It's also worth knowing that the value of this can be overwritten with the bind method.

1. What is the difference between let, const, and var?
    * Originally, var was the only option JavaScript had for defining variables. In ES6, we got const and let as additional options. The important takeaways are:
      1. Variables defined with const cannot be reassigned.
      2. Const and let variables are block-scoped.
      3. Var variables are function scoped.
      4. Variables defined with var are hoisted.
        - Demo: https://jsfiddle.net/sunpochin/3ezog6uq/6/ 
        - https://shubo.io/javascript-hoisting/ quote:"關於 var 可以「重複宣告」以及「先使用後宣告」，你可能會很好奇，這樣為什麼會對？畢竟這違反我們對一般程式語言的認知。其實這是因為：在 JavaScript 中，不管你在函數中的哪一行用 var 宣告變數，一律視為在函數的第一行宣告。也就是說，不論你宣告 var 變數的位置在哪，宣告的動作一律都會被「抬升」到函式的最頂端，這個特性就叫做 hoisting (提升)。要注意的是，只有「宣告」這個動作有 hoisting (提升) 的特性，賦值 (把值指定給變數) 的動作不會 hoisting。"
      - function hoisting: "這個特性可以解決一個問題，也就是兩個函數需要互相呼叫彼此的狀態，也就是 A() 裡面會呼叫到 B()，而 B() 裡面會呼叫的 A() 的遞迴狀況。"

1. What is the difference between == and ===?
  - type === check type.
  - https://jsfiddle.net/sunpochin/Lthqewoj/8/
  
1. How can you access HTML elements with JavaScript?
  - Familiarize yourself with getElementById, querySelector, and querySelectorAll.

1. What options do we have to store data?
  - You can store user data in localStorage, cookies, or sessionStorage.

3. What is functional programming in JavaScript?
  - Functional programming refers to using pure functions. In the context of JavaScript, this means familiarizing yourself with map, filter, and reduce. It's also worth understanding the concept of immutability.

 teeee
5. fff

  - 
  - Q. ssssssss
3. Question 2
  - A. ssssssss
  - Q. ssssssss
  Q. 

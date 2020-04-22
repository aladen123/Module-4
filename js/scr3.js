aladenGreeter.sayHello();
johnGreeter.sayHi();

// Immediately Invoked Function Expression
// IIFE
(function (name) {
  console.log("Hello " + name);
})("Coursera!");


var names = ["aladen", "abdalla", "ali", "omer"];
console.log(names);

for (var i = 0; i < names.length; i++) {
  console.log("Hello " + names[i]);
}

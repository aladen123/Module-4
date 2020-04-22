(function (window) {
  var johnGreeter = {};
  johnGreeter.name = "John";
  var greeting = "Hi ";
  johnGreeter.sayHi = function () {
    console.log(greeting + johnGreeter.name);
  }

  window.johnGreeter = johnGreeter;

})(window);

var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

for (var i = 0; i < names.length; i++) {
	console.log("Hello " + name);

	var firstLetter = names[i].charAt(0).toLowerCase();




 if (firstLetter === 'j') {

   firstLetter.byeSpeaker.speak(names[i]);
  } 
  else 
  {
    firstLetter.helloSpeaker.speak(names[i]);
  }
}
console.log("Good Bye " + helloSpeaker(names[i]))


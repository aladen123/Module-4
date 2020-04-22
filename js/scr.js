//closu
function makMultplier (multiplier) {
	// body...
function b () {
	// body...
	console.log("multiplier is :" + multiplier);
}
b();
	return (
		function (x) {

			// body...
			return multiplier * x;
		}

		);
}

var doubleAll = makMultplier(2);
console.log(doubleAll(30));

(function (window) {
  var aladenGreeter = {};
  aladenGreeter.name = "aladen";
  aladenGreeter.ega = "22";
  var greeting = "Hello ";
  aladenGreeter.sayHello = function () {
    console.log(greeting + aladenGreeter.ega);
  }

  window.aladenGreeter = aladenGreeter;

})(window);
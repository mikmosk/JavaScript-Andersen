var arr = [1, 2, 3, [4, 5, 6, [7, 8, 9, [0]]]];

var newArr = [];

function makeArrayOneD(arr) {
	if (!Array.isArray(arr)) {
		return false;
	}
	
	for (var i = 0; i < arr.length; i++) {
		if (!Array.isArray(arr[i])) {
	   		newArr.push(arr[i]);
	   	} else {    	
	   		makeArrayOneD(arr[i]);
	   	}
	}
  
  return newArr;
}
console.log(makeArrayOneD(arr));

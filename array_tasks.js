var arrayTasks = {

	concat: function (arr1, arr2) {
		var tempArray = [];
		for (var item of arr1) {
			tempArray.push(item);
		}
		for (var item of arr2) {
			tempArray.push(item);
		}
		return tempArray;
	},

	insertAt: function (arr, itemToAdd, index) {
		var tempArray = [];
		for (var i = index; i < arr.length; i++) {
			tempArray.push(arr[i]);
		}
		arr[index] = itemToAdd;
		for (var item of tempArray) {
			arr.push(item);
		}
		return arr;
	},

	square: function (arr) {
		var tempArray = [];
		for (var item of arr) {
			tempArray.push(item * item);
		}
		return tempArray;
	},

	// sum: function (arr) {
		
	// },

	// findDuplicates: function (arr) {
		
	// },

	// removeAndClone: function (arr, valueToRemove) {
		
	// },

	// findIndexesOf: function (arr, itemToFind) {
		
	// },

	// sumOfAllEvenNumbersSquared: function (arr) {
		
	// }

}

module.exports = arrayTasks

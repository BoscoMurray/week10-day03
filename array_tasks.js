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

	sum: function (arr) {
		var total = 0;
		for (var item of arr) {
			total += item;
		}
		return total;
	},

	findDuplicates: function (arr) {
		var tempArray = [];
		for (var i = 0; i < arr.length; i++) {
			if (arr.lastIndexOf(arr[i]) !== i &&
				tempArray.lastIndexOf(arr[i]) === -1)  {
					tempArray.push(arr[i]);
				}
		}
		return tempArray;
	},

	removeAndClone: function (arr, valueToRemove) {
		var tempArray = [];
		for (var item of arr) {
			if (item !== valueToRemove) tempArray.push(item);
		}
		return tempArray;
	},

	findIndexesOf: function (arr, itemToFind) {
		var tempArray = [];
		for (var i = 0; i < arr.length; i++) {
			if (arr[i] === itemToFind) tempArray.push(i);
		}
		return tempArray;
	},

	sumOfAllEvenNumbersSquared: function (arr) {
		var total = 0
		for (var item of arr) {
			if (item % 2 === 0) {
				total += (item*item);
			}
		}
		return total;
	}

}

module.exports = arrayTasks

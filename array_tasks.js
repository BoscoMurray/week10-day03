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

	// insertAt: function (arr, itemToAdd, index) {
		
	// },

	// square: function (arr) {
		
	// },

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

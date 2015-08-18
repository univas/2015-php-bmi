var BMIService = {

	getIndex: function(weight, height) {
		if(typeof(weight) === 'number' && typeof(height) === 'number') {
			return weight / (height * height);
		}
		return null;
	},
	
	getDescription: function (index) {
		//TODO to be implemented
		return "";
	}
	
};
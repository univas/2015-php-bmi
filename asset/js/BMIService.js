var BMIService = {

	getIndex: function(weight, height, callback) {
		$.ajax({
		  url: 'services/bmi.action.php',
		  data: {'weight': weight, 'height': height},
		  success: function(result) {
		  	callback(parseFloat(result));
		  },
		  error: function() {
		  	callback(null);
		  }
		});
	},
	
	getDescription: function (index) {
		//TODO to be implemented
		return "";
	}
	
};
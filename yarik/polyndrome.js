function reverse(str){
	var reversed = '';
	for (var i = 0; i < str.length; i++) {
		reversed = str[i] + reversed;
	}
	return reversed
}

function cleaner(str, min, max){
	var cleanString = "";
	var min = min || 97;
	var max = max || 122;
	for (var i = 0; i < str.length; i++) {
		if(str.charCodeAt(i) >= min && str.charCodeAt(i) <= max){
			cleanString += str[i];
		}
	}
	return cleanString;
}
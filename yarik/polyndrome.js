var cString = "I did, did I, Madam I'm Adam, racecar"
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

function longestPolyndrome(str) {
	var polSet = str.toLowerCase().split(" ");
	var longest = ""
	for (var i = 0; i < polSet.length; i++) {
		if( polSet[i] === cleaner(reverse(polSet[i])) ) {
			if(polSet[i].length > longest.length) {
				longest = polSet[i]
			}
		}
	}
	return longest
}

console.log(longestPolyndrome('Racecar madamimadam maam') )

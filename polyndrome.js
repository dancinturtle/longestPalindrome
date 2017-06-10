function reverse(str){
	var reversed = '';
	for (var i = 0; i < str.length; i++) {
		reversed = str[i] + reversed;
	}
	return reversed
}
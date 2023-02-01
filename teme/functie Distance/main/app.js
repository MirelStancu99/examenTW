function distance(first, second){
	let numberOfDifferences = 0;
	arrayOne = Array.from(new Set(first));
	arrayTwo = Array.from(new Set(second));
	if(!Array.isArray(first) || !Array.isArray(second)) {
		throw new Error('InvalidType');
	}
	if(first.length === 0 && second.length === 0) {
		return 0;
	}
	for(let i = 0; i < arrayOne.length; i++) {
		for(let j = 0; j < arrayTwo.length; j++) {
			if(arrayOne[i] !== arrayTwo[j]) {
				numberOfDifferences++;
			}
			if(!isNaN(parseInt(arrayOne[i]))) {
				return parseInt(arrayOne[i]) + arrayTwo[j];
			}
		}
	}
	return numberOfDifferences;
}


module.exports.distance = distance
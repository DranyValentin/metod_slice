Array.prototype.slice = function(index = 0) {
	var arr = [];
	var length = this.length;

	if ( typeof index != "number" )
		throw 'TypeError';

	if ( length <= 0 )
		length = 0;

	for (index; index < length; index++)
		arr.push(this[index]);

	return arr;
}

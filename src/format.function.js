/**
 * var jsonTest = "동해물과 {key1}이 마르고 닳도록 {KEY_2}이 보우하사 우리나라만세";
 * var arrayTest = "동해물과 {0}이 마르고 닳도록 {1}이 보우하사 우리나라만세";
 * 
 * console.log(format(jsonTest, { key1: '백두산', KEY_2: '하느님' })); => 동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라만세
 * console.log(format(arrayTest, '백두산', '하느님')); => 동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라만세
 *
 * TODO: requirejs 지원
 */
var format = function(str) {
	if (arguments.length === 0) { return ''; }
	if (arguments.length === 1) { return String(str); }
	
	var param;
	// arguments[0] == JSON
	if (arguments.length === 2 && typeof arguments[1] === 'object' && !('length' in arguments[1])) {
		param = arguments[1];
	// arguments == array
	} else {
		param = arguments;
	}
	
	var formattedStr = str.replace(/\{[A-Za-z0-9\_\.]+\}/g, function(key, ki){
		val = param[key.substring(1, key.length - 1)];
		
		if (val === undefined || val === null) { val = ''; } // || 연산자를 사용하면 0도 걸려서 사용할 수 없다.
		
		return val;
	});
	
	return formattedStr;
}
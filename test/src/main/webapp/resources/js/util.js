"use strict";
$.prototype.nullChecker=x=>{
	let flag = true;
	let i = 0;
	for(i in x)
		if(x[i] ===''){
			flag = false; break;
		}
	return flag;
};
$.prototype.zeroChecker=x=>{
	let flag = false;
	let i = 0;
	for(i in x)
		if(i == 0){
			flag = true; break;
		}
	return flag;
};
/**
 * 
 * 
 * 
 */
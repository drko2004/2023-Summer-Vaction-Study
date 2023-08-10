const age = parseInt(prompt("How old?"));
//console.log(typeof "15", typeof parseInt("15"));
//console.log(isNaN(age));

//if(condition){
	/// condition === true
//} else {
	// condition === false
//}

if(isNaN(age) || age < 0){
	console.log("plz age");
} else if(age < 18){
	alert("cho ding");
} else {
	console.log("can drink");
}
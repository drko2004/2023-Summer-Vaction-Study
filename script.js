const score = parseInt(prompt("점수?"));

if(isNaN(score) || age < 0){
	alert("숫자 입력...");
} else if(score >= 90){
	alert("A");
} else if(score >= 80 && score > 90){
	alert("B");
}	else if(score >= 70 && score > 80){
	alert("C");
} else {
		alert("D");
}

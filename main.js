

// var clickHandler= function(pos){
// 	document.getElementById(pos).innerHTML = "X";
// 	// alert(pos)
// }

// var cubeClass = document.getElementsByClassName("cube");

// var clickHandler = function(){
// 	var attr = this.getAttribute("id");
// 	alert(attr);
// 	document.getElementById(attr).innerHTML = "X";
// }

// for(var i=0;  i < cubeClass.length; i++){
// 	cubeClass[i].addEventListener('click', clickHandler , false)
// ;};


// function _innerHtml(Html){
// 	return document.getElementById(attr).innerHTML
// };

// if(_innerHtml('0') == 'X' && _innerHtml('1') == 'X' && _innerHtml('2') == 'X'){
// 	alert("Player playing with X Wins !!!");
// }

 var cubeClass=document.getElementsByClassName("cube");

var clickHandler=function(){
 var attr=this.getAttribute("id");
 document.getElementById(attr).innerHTML="X";
 if (_innerHtml('0')== 'X' && _innerHtml('1')== 'X' && _innerHtml('2')== 'X') {

  alert("playing....");
 };
};

for (var i = 0; i < cubeClass.length; i++) {
 cubeClass[i].addEventListener('click',clickHandler,false);
};



function _innerHtml(attr){

 return document.getElementById(attr).innerHTML;
}
let doc = document.getElementById("screen");

function display(num){
    doc.value += num; 
}

function equal(){
	doc.value = eval(doc.value);
}
		
function allclear(){
	doc.value = "";
}
		
function del(){
	doc.value = doc.value.slice(0,-1);
}
//your JS code here. If required.
var inputField = document.getElementByID('fname');
inputField.addEventListner('blur',function(){
	if(inputField.value.length <= 100){
	inputField.value = inputField.value.toUpperCase();
	}
	})
	
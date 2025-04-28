//your JS code here. If required.
var inputField = document.getElementByID('fname');
inputField.addEventListner('blur',function(){
	inputField.value = inputField.value.toUpperCase();
})
	
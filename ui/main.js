console.log('Loaded!');
//Change the text in HTML

var element = document.getElementById('main-text')

element.innerHTML = 'New value'

//Move the image
var img = document.getElementById('madi')
img.onClick = function {
  img.style.marginLeft = 100px;
};
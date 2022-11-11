
let myBox = document.createElement('input');
let run = document.createElement('button');
myBox.style.width = '250px';
myBox.style.height = '100px';
myBox.style.zIndex = '10';
myBox.style.position = 'absolute';
myBox.style.top = '0';
myBox.style.left = '0';
run.innerHTML = 'Run JavaScript';
run.style.background = 'black';
run.style.color = 'white';
run.style.fontFamily = 'Verdana';
run.style.width = '60px';
run.style.height = '40px';
run.style.position = 'absolute';
run.style.top = '100px';
run.style.left = '0';
run.style.zIndex = '10';
myBox.id = 'injected-run-js-input';
run.id = 'injected-run-js-button';
document.body.appendChild(myBox);
document.body.appendChild(run);
document.querySelector('#injected-run-js-button').onclick = function() {
  new Function(`try{${document.querySelector('#injected-run-js-input').value}}catch(err){document.querySelector('#injected-run-js-input').value = err.message}`)();
}

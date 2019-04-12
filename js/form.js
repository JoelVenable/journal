buildHeader();
let main = addHTMLElement('main', body);
request.onload = function () {
  var blogPostObj = request.response;
}

buildForm();




buildFooter();




function buildForm() {
  const form = addHTMLElement('form',main);
  form.setAttribute('method', 'post');
  form.setAttribute('action',''); // Do something
  addHTMLElement('input')


}


function addInputItem(type, text, parent) {
  let item = 
}
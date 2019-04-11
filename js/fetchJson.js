
const request = fetchJsonRequest('../db/data.json');



request.onload = function () {
  var blogPostObj = request.response;
  blogPostObj.forEach(post => {
    let div = addHTMLElement('div', main, '', ['blogpost']);
    addHTMLElement('h3', div, post.postTitle);
  })

}




function fetchJsonRequest(jsonURL) {
  var request = new XMLHttpRequest();
  request.open('GET', jsonURL);
  request.responseType = 'json';
  request.send();
  return request;
}
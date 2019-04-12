var request = fetchJsonRequest('../db/data.json');

var main = document.querySelector('main');

request.onload = function () {
  var blogPostObj = request.response;
  blogPostObj.forEach(post => {
    let div = addHTMLElement('div', main, 'blogpost');
    addHTMLElement('h3', div, '', post.postTitle);
  })

}

function buildBlogPost(post) {
  let div = addHTMLElement('div', main, 'blogpost');
  let heading = addHTMLElement('section', div, 'blogpost__heading');
  addHTMLElement('h3',heading, '', post.postTitle);
  let imageSection = addHTMLElement('section',div,'blogpost__image');
  addHTMLImage(imageSection,post.postImg);
  addHTMLElement('p',div,)

}

function addHTMLElement(htmlTag, parent, classesToAdd, htmlContent) {
  htmlElement = document.createElement(htmlTag);
  htmlElement.textContent = htmlContent;
  htmlElement.classList.add(classesToAdd);
  parent.appendChild(htmlElement);

  return htmlElement;
}

function addHTMLImage(parent,imageObject) {
  image = document.createElement('img');
  let src = image.createAttribute('src');
  src.value = imageObject.url;
  let alt = image.createAttribute('alt');
  alt.value = imageObject.alt;
  parent.appendChild(image);
  return image;
}


function fetchJsonRequest(jsonURL) {
  var request = new XMLHttpRequest();
  request.open('GET', jsonURL);
  request.responseType = 'json';
  request.send();
  return request;
}
function addHTMLElement(htmlTag, parent, htmlContent, classArray) {
  htmlElement = document.createElement(htmlTag);
  htmlElement.textContent = htmlContent;
  if (classArray !== undefined) {
    classArray.forEach(item => {
      htmlElement.classList.add(item);
    })
  }
  parent.appendChild(htmlElement);
  return htmlElement;
}


function addHTMLImage(parent, imageObject) {
  image = document.createElement('img');
  let src = image.createAttribute('src');
  src.value = imageObject.url;
  let alt = image.createAttribute('alt');
  alt.value = imageObject.alt;
  parent.appendChild(image);
  return image;
}

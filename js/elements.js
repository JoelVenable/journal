const body = document.querySelector('body');
const flexbox = 'flex-container';
const socialItems = [{
      "href": "https://www.facebook.com/carlossantana/",
      "iconName": "logo-facebook"
    },
    {
      "href": "https://twitter.com/santanacarlos?lang=en",
      "iconName": "logo-twitter"
    },
    {
      "href": "https://www.santana.com/",
      "iconName": "cloudy"
    },
    {
      "href": "https://www.youtube.com/user/santanaofficial",
      "iconName": "logo-youtube"
    }
  ],
  navItems = [{
      "href": "/",
      "title": "Home"
    },
    {
      "href": "blog.html",
      "title": "Blog"
    },
    {
      "href": "tools.html",
      "title": "Helpful Tools"
    },
    {
      "href": "portfolio.html",
      "title": "Portfolio"
    }
  ];



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
  image.src = imageObject.url;
  image.alt = imageObject.alt;
  parent.appendChild(image);
  return image;
}


function buildHeader() {
  let header = addHTMLElement('header', body, '', [flexbox]);
  addHTMLElement('h1', header, "Joel's Journal");
  let nav = addHTMLElement('nav', header);
  let ul = addHTMLElement('ul', nav, '', [flexbox]);
  navItems.forEach(item => {
    let li = addHTMLElement('li', ul);
    addLink(item, li);
  })
}


function buildFooter() {
  let footer = addHTMLElement('footer', body);
  addHTMLElement('h4', footer, 'Connect with Joel:');
  let ul = addHTMLElement('ul', footer, );
  socialItems.forEach(item => {
    addSocialLink(item, ul);
  })
}


function addLink(linkObject, parent) {
  var link = document.createElement('a');
  link.href = linkObject.href;
  link.text = linkObject.title;
  parent.appendChild(link);
  return link;
}

function addSocialLink(linkObject, parent) {
  var li = addHTMLElement('li', parent);
  var anchor = document.createElement('a');
  anchor.href = linkObject.href;
  li.appendChild(anchor);
  var icon = addHTMLElement('ion-icon', anchor);
  icon.setAttribute('name', linkObject.iconName);


}


function buildBlogPost(post) {
  let div = addHTMLElement('div', main, '', ['blogpost']);
  div.id = post.id;
  let heading = addHTMLElement('section', div, '', ['blogpost__heading']);
  addHTMLElement('h3', heading, post.postTitle);
  let imgDiv = addHTMLElement('div', div, '', ['blogpost__image']);
  addHTMLImage(imgDiv, post.postImg);
  addHTMLElement('p', div, post.content)

}




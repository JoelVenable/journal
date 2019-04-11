

var main = document.querySelector('main');


function buildBlogPost(post) {
  let div = addHTMLElement('div', main, 'blogpost');
  let heading = addHTMLElement('section', div, 'blogpost__heading');
  addHTMLElement('h3',heading, '', post.postTitle);
  let imageSection = addHTMLElement('section',div,'blogpost__image');
  addHTMLImage(imageSection,post.postImg);
  addHTMLElement('p',div,)

}






main();


function main() {
  const body = document.querySelector('body');


  buildHeader(body);
  addHTMLElement('main',body)
  //  TODO: Add blog posts
  API.fetchJsonRequest().then(object => {
    console.log(object);
    object.forEach(element => {
      console.log(element)
      return buildBlogPost(element)
    });
  })

  buildFooter(body);

}
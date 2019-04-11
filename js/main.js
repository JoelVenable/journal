
buildHeader();
let main = addHTMLElement('main', body);
request.onload = function () {
  var blogPostObj = request.response;
  blogPostObj.forEach(post => {
    buildBlogPost(post);
  })

}
buildFooter();

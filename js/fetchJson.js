
const request = fetchJsonRequest('../db/data.json');








function fetchJsonRequest(jsonURL) {
  var request = new XMLHttpRequest();
  request.open('GET', jsonURL);
  request.responseType = 'json';
  request.send();
  return request;
}
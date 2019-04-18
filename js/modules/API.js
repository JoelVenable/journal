const API = {
  jsonURL: "http://localhost:8088/entries",
  fetchJsonRequest() {
    console.log(this.jsonURL);
    return fetch(this.jsonURL)
      .then(response => response.json())
  }
}



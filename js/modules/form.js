var journalEntries = [];

function submitForm() {
  entry = {
    postTitle: document.querySelector("#postTitle").value,
    date: document.querySelector("#date").value,
    postImg: {
      url: document.querySelector("#imgUrl").value,
      alt: document.querySelector("#imgAlt").value
    },
    content: document.querySelector("#content").value,
    mood: document.querySelector("#mood").value
  };
  clearForm();
  journalEntries.push(entry);
}




function clearForm() {
  document.querySelector("#postTitle").value = "";
  document.querySelector("#date").value = "";
  document.querySelector("#imgUrl").value = "";
  document.querySelector("#imgAlt").value = "";
  document.querySelector("#content").value = "";
  document.querySelector("#mood").value = "";
}

function buildForm() {
  const body = document.querySelector('body');
  const fragment = document.createDocumentFragment();
  const modal = addHTMLElement('div',fragment,'',['modal']);
  const modalOverlay = addHTMLElement('div',modal,'',['modal-overlay']);
  modalOverlay.id = "modal-overlay";
  const div = addHTMLElement("div", modalOverlay, "", ["wrapper"]);
  const headerDiv = addHTMLElement("div", div, "", ["modal-header-div"]);
  addHTMLElement("h2", headerDiv, "Add a Journal Entry", ["modal-header"]);
  const form = addHTMLElement("form", div);
  form.setAttribute("method", "post");
  form.setAttribute("action", "javascript:submitForm()"); // Do something
  addInputItem("text", "postTitle", "Concepts covered: ", form);
  addInputItem("date", "date", "Date: ", form);
  addInputItem("text", "mood", "Feeling: ", form);
  addInputItem("text", "imgUrl", "Image URL: ", form);
  addInputItem("text", "imgAlt", "Image Alt text: ", form);
  addInputItem("textarea", "content", "Spew some text: ", form);
  addInputItem("submit", "submit", "", form);
  body.appendChild(fragment);
}

function addInputItem(type, id, text, parent) {
  let div = document.createElement("div");
  let item = document.createElement("input");
  item.setAttribute("type", type);
  item.id = id;
  let label = document.createElement("label");
  label.setAttribute("for", id);

  label.textContent = text;
  div.appendChild(label);
  div.appendChild(item);
  parent.appendChild(div);
}

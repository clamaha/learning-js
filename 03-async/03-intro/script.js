
function rulesFunction() {
fetch('becode.json')
    .then((response) => response.json())
    .then(json => newList(json))
    .catch((error) => {
    console.error("Error loading BeCode rules:", error);
  });
}
function newList (json){
    let ul = document.createElement("ul");
    document.body.appendChild(ul);

    for (let txt of json){
        const li = document.createElement("li");
        li.innerText = txt;
        ul.appendChild(li);
    }
}

let div = document.createElement("div");
document.body.appendChild(div);

document.querySelector("#random").onclick = function(){ 
    fetch("https://api.chucknorris.io/jokes/random")
    .then(response => response.json())
    .then(data => {
        div.innerHTML = data.value;
    })
    .catch((error) => {
            console.error("Error loading Chuck Norris fact:", error);
    });
}
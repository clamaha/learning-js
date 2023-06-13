
/* changing the title*/
document.title
document.title = "Modifying the DOM"

/* displaying the children*/
const bodyChildren = document.body.children[1].children;
for (const child of bodyChildren) {
    
  console.log(child);
}


/* changing the background color*/
function randomBg() {
    let x = Math.floor(Math.random() * 255);
    let y = Math.floor(Math.random() * 255);
    let z = Math.floor(Math.random() * 255);
    let bgColor = "rgb(" + x + "," + y + "," + z + ")";

 console.log(bgColor);
    document.body.style.background = bgColor;
    }
randomBg();
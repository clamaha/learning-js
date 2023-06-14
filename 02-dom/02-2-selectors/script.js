
/*adding a title to all important elements*/
const importantElements = document.querySelectorAll('.important');

importantElements.forEach(element => {
  element.setAttribute('title', 'This is an important item');
});

/*looping through images*/
const imgs = document.querySelectorAll('img');
for (let i = 0; i < imgs.length; i++) {
    const images = imgs[i];

    if(image.classList.contains('important')){
    image.style.display = 'none';
    }
}

/*looping through paragraphs*/
const par = document.querySelectorAll('p');
for (let i = 0; i < par.length; i++) {
    const paragraphs = par[i];

    console.log('content:',paragraphs.textContent);
    if (paragraphs.classList.lenght > 0)

console.log('class:', paragraphs.classList);
}

/*giving a random text color to paragraphs*/
const para = document.querySelectorAll('p');

function randomColor() {
    let x = Math.floor(Math.random() * 255);
    let y = Math.floor(Math.random() * 255);
    let z = Math.floor(Math.random() * 255);
    let txtcolor = "rgb(" + x + "," + y + "," + z + ")";

    console.log(txtColor);
    document.body.paragraph.style.color = txtcolor;
}
randomColor();

  

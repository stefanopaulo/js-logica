const paragraphs = document.querySelector('.paragraphs');
const texts = paragraphs.querySelectorAll('p');

const stylesBody = getComputedStyle(document.body);
const backgroundColorBody = stylesBody.backgroundColor;

for (let text of texts) {
    text.style.backgroundColor = backgroundColorBody;
    text.style.color = '#fff';
    text.style.padding = '5px 10px';
}

const elements = [
    {tag: 'p', text: 'Frase 1'},
    {tag: 'div', text: 'Frase 2'},
    {tag: 'section', text: 'Frase 3'},
    {tag: 'footer', text: 'Frase 4'}
];

const container = document.querySelector('.container');
const div = document.createElement('div');

for (let i = 0; i < elements.length; i++) {
    const { tag, text } = elements[i];
    let element = document.createElement(tag);
    let elementText = document.createTextNode(text)
    
    element.appendChild(elementText);
    div.appendChild(element);
}

container.appendChild(div);

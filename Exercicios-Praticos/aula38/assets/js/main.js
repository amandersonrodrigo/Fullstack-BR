const div = document.querySelector('.paragrafos');
const ps = div.querySelectorAll('p');

const corDeFundo = getComputedStyle(document.body);
const backgroundColor = corDeFundo.backgroundColor;
console.log(backgroundColor)

ps.forEach((p) => {
   p.style.backgroundColor = backgroundColor;
   p.style.color = 'white';
});
const titulo = document.querySelector('h1');
titulo.textContent = 'Corinthians'; // Altera o texto interno

const div = document.querySelector('#container');
div.textContent = "cu"

const imagem = document.querySelector('img');
imagem.setAttribute('src', 'images/avatar.jpg');
imagem.alt = 'Avatar de Usuário';

const caixa = document.querySelector('.box');
caixa.style.backgroundColor = 'lightgreen';
caixa.style.border = '10px solid black';

caixa.classList.add('oculta');
caixa.classList.toggle('oculta');
caixa.classList.remove('oculta');

const novoItem = document.createElement('li');
novoItem.textContent = 'Novo item';
document.querySelector('ul').appendChild(novoItem);
novoItem.remove();

const botao = document.getElementById('meuBotao');
botao.addEventListener('click', () => {
  alert('Você clicou no botão!');
});
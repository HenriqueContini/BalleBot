var botao = document.querySelector('.cabecalho-botao-nav')
var nav = document.querySelector('.cabecalho-menu')

botao.addEventListener('click', () => {
    botao.classList.toggle('cabecalho-botao-nav-ativo')
    nav.classList.toggle('cabecalho-menu-ativo')
})
export default function initMenu() {
    const linksMenu = document.querySelectorAll('a[href^="#"]')

    function handleClick (event) {
        //Limpar Classe Ativa do Item quando clicar em outro
        linksMenu.forEach((link) => {
            link.classList.remove('ativo')
        })
        //
        event.currentTarget.classList.add('ativo')
    }

    linksMenu.forEach((link) => {
        link.addEventListener('click', handleClick)
    })
}
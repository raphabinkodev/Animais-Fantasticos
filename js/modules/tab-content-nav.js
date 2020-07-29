export default function tabContentNav() {
    // **** Navegação por TAB ****//

    const tabMenu = document.querySelectorAll('.js-tabmenu li')
    const tabContent = document.querySelectorAll('.js-tabcontent section')

    //Verificação para Ver se os Item Existem
    if (tabMenu.length && tabContent.length) {
        tabContent[0].classList.add('active')
    }
    //

    //Adicionar Classe Ativa na Section para Exibir o Conteúdo RElacionado
    function activeTab(index) {
        //Limpar Classe ativa do item quando clicar em outro
        tabContent.forEach((content) => {
            content.classList.remove('active')
        })
        //
        tabContent[index].classList.add('active')
    }

    tabMenu.forEach((itemMenu, index) => {
        itemMenu.addEventListener('click', () => {
            activeTab(index)
        })
    })
}
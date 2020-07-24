function initMenu() {
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
initMenu()


function tabContentNav () {
                        // **** Navegação por TAB ****//
                        
    const tabMenu = document.querySelectorAll('.js-tabmenu li')
    const tabContent = document.querySelectorAll('.js-tabcontent section')

    //Verificação para Ver se os Item Existem
    if(tabMenu.length && tabContent.length){
    tabContent[0].classList.add('active')
    }
    //

    //Adicionar Classe Ativa na Section para Exibir o Conteúdo RElacionado
    function activeTab (index) {
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
tabContentNav()

function tabAccordion(){
    const accordionList = document.querySelectorAll('.js-accordion dt')

    function activeAccordion(event) {
        this.classList.add('active')
        this.nextElementSibling.classList.add('active')
    }

    accordionList.forEach((item) => {
        item.addEventListener('click', activeAccordion)
    })
}
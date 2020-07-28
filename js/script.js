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

    function activeAccordion() {
        this.classList.toggle('active')
        this.nextElementSibling.classList.toggle('active')
    }

    accordionList.forEach((item) => {
        item.addEventListener('click', activeAccordion)
    })
}

tabAccordion()

//Scroll Suave para Link Interno
function scrollSuave(){
    const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]')

    function scrollToSection(event) {
        event.preventDefault()
        const href = event.currentTarget.getAttribute('href')
        const section = document.querySelector(href)
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        })

        //Forma Alterantiva
        // const topo = section.offsetTop;
        // window.scrollTo({
        //     top: topo,
        //     behavior: 'smooth',
        // })
    }

    linksInternos.forEach((link) => {
        link.addEventListener('click', scrollToSection) 
    })
}

scrollSuave()

//Animação do Scroll
function animarScroll(){
    const sections = document.querySelectorAll('.js-scroll')
    if(sections.length) {
        const windowsHeight = window.innerHeight * 0.55
        function animaScroll() {
            sections.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top
                const isSectionVisible = (sectionTop - windowsHeight) < 0
                if (isSectionVisible)
                    section.classList.add('active') 
                // else if (sectionTop > 0){
                //     section.classList.remove('active')
                // }
            })
        }
        animaScroll()
        window.addEventListener('scroll', animaScroll)
    }
}
animarScroll()
import outsideClick from './outsideclick.js'

export default function initMenuMobile() {
    const menuButton = document.querySelector('.menu-mobile')
    const menuList = document.querySelector('.lista-menu')
    const eventos = ['click', 'touchstart']

    if(menuButton){
        function openMenu(event) {
            menuList.classList.toggle('active')
            menuButton.classList.toggle('active')


        }
        eventos.forEach((evento) => {
            menuButton.addEventListener('click', openMenu)
        })
    }
}
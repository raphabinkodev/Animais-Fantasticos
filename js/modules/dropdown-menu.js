import outsideClick from './outsideclick.js'

export default function initDropdownMenu(){
    const dropdownMenus = document.querySelectorAll('[data-dropdown]')

    function handleClick(event) {
        this.classList.add('active')
        outsideClick(this, ['click', 'touchstart', 'onmouseenter'], () => {
            this.classList.remove('active')
        })
    }

    dropdownMenus.forEach(menu => {
        ['click', 'touchstart'].forEach(userEvent => {
            menu.addEventListener(userEvent, handleClick)
        })
    })
}
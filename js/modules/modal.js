export default function initModal() {
    const botaoAbrir = document.querySelector('.abrir-modal')
    const botaoFechar = document.querySelector('.fechar')
    const containerModal = document.querySelector('.modal-container')

    if (botaoAbrir && botaoFechar && containerModal) {
        function toggleModal(event) {
            event.preventDefault()
            containerModal.classList.toggle('active')
        }

        function clickFora(event) {
            if (event.target === this)
                toggleModal(event)
        }

        botaoAbrir.addEventListener('click', toggleModal)
        botaoFechar.addEventListener('click', toggleModal)
        containerModal.addEventListener('click', clickFora)
    }
}

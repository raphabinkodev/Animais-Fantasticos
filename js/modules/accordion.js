export default function tabAccordion() {
    const accordionList = document.querySelectorAll('.js-accordion dt')

    function activeAccordion() {
        this.classList.toggle('active')
        this.nextElementSibling.classList.toggle('active')
    }

    accordionList.forEach((item) => {
        item.addEventListener('click', activeAccordion)
    })
}
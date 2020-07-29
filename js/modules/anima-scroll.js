//Animação do Scroll
export default function animarScroll(){
    const sections = document.querySelectorAll('.js-scroll')
    if(sections.length) {
        const windowsHeight = window.innerHeight * 0.45
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
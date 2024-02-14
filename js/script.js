//Type script js
var typeds = new Typed(".typing", {
    strings: ["Web Designer", "Web Devoloper", "Youtuber", "Blogger"],
    typeSpeed: 80,
    backSpeed: 80,
});
var typeds = new Typed(".typing-2", {
    strings: ["Web Designer", "Web Devoloper", "Youtuber", "Blogger"],
    typeSpeed: 80,
    backSpeed: 80,
});
//show/Hide FAQs answer
const faqs = document.querySelectorAll('.faq');
faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

        //change incon
        const incon = faq.querySelector('.faq_icon i');
        if (incon.className === 'fa-solid fa-plus') {
            incon.className = 'fa-solid fa-minus'
        }
        else {
            incon.className = 'fa-solid fa-plus'
        }
    });
});
//Show/hide nav menu
const menu = document.querySelector('.nav_menu');
const mentBtn = document.querySelector('#open_menu-btn');
const closeBtn = document.querySelector('#close_menu-btn');

mentBtn.addEventListener('click', () => {
    menu.style.display = 'flex';
    closeBtn.style.display = "inline-block";
    mentBtn.style.display = 'none';
})
const closeNav = () => {
    ment.style.display = 'none';
    closeBtn.style.display = 'none';
    mentBtn.style.display = 'inline-block'
}
closeBtn.addEventListener('click', closeNav)

// nav color change on scroll
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 100)
})
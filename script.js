const links = document.querySelectorAll('nav a');
const path = window.location.href
links.forEach(link => {
    link.addEventListener('click', (event)=>{
       links.forEach(link => {link.classList.remove('active')})
        event.currentTarget.classList.add('active')

    })
});


document.getElementById('menu-icon').addEventListener('click', () =>{
    document.querySelector('ul').classList.toggle('show-menu');
} )

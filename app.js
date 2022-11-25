const toggle = document.querySelector('.toggle')

toggle.addEventListener('click',()=>{
    document.body.classList.toggle('light-mode');
    toggle.classList.toggle('active');
})
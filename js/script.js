const btn = document.querySelector('.btn')
const sidebar = document.querySelector('.sidebar')
btn.addEventListener('click', ()=>{
    sidebar.classList.toggle('toggle-sidebar');
})
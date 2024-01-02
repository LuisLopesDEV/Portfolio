const openMenu = document.querySelector('.open')
const closeMenu = document.querySelector('.close')
const menu = document.querySelector('.list')
const overlay_home = document.querySelector('.overlay-header')

openMenu.addEventListener('click', ()=>{
    menu.classList.remove('hidden');
    overlay_home.classList.remove('hidden');
    setInterval(()=>{
        menu.style.display='flex'
        overlay_home.style.display='block'
    }, 10)
});


closeMenu.addEventListener('click', ()=>{
    menu.classList.add('hidden');
    overlay_home.classList.add('hidden');
    setTimeout(() => {
        menu.style.display = 'none';
        overlay_home.style.display = 'none';
    }, 1500);
});

const sanMenu = document.querySelector('.san-menu');
const sanMenuContainer = document.querySelector('.san-menu-container');
const sanMenuContainerClose = document.querySelector('.san-menu-container p');

sanMenu.addEventListener('click', () => {
    sanMenuContainer.classList.add('san-menu-container-display');
})

sanMenuContainerClose.addEventListener('click', () => {
    sanMenuContainer.classList.remove('san-menu-container-display');
})
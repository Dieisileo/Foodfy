function openModal(modalID) {
  const modal = document.getElementById(modalID);
  modal.classList.add('open');
  modal.addEventListener('click', (e) => {
    if(e.target.id == modalID || e.target.className == 'close') {
      modal.classList.remove('open')
    }
  });
}

const cardID = document.querySelector('#card0');
cardID.addEventListener('click', () => openModal('modalRecipe0'))
function openModal(modalID) {
  var modal = document.getElementById(modalID);
  modal.classList.add('open');
  modal.addEventListener('click', (e) => {
    if(e.target.id == modalID || e.target.className == 'close') {
      modal.classList.remove('open')
    }
  });
}

var cardID = document.querySelector('#card0');
cardID.addEventListener('click', () => openModal('modalRecipe0'))

var cardID = document.querySelector('#card1');
cardID.addEventListener('click', () => openModal('modalRecipe1'))

var cardID = document.querySelector('#card2');
cardID.addEventListener('click', () => openModal('modalRecipe2'))

var cardID = document.querySelector('#card3');
cardID.addEventListener('click', () => openModal('modalRecipe3'))

var cardID = document.querySelector('#card4');
cardID.addEventListener('click', () => openModal('modalRecipe4'))

var cardID = document.querySelector('#card5');
cardID.addEventListener('click', () => openModal('modalRecipe5'))

var cardID = document.querySelector('#card6');
cardID.addEventListener('click', () => openModal('modalRecipe0'))

var cardID = document.querySelector('#card7');
cardID.addEventListener('click', () => openModal('modalRecipe1'))

var cardID = document.querySelector('#card8');
cardID.addEventListener('click', () => openModal('modalRecipe2'))

var cardID = document.querySelector('#card9');
cardID.addEventListener('click', () => openModal('modalRecipe3'))

var cardID = document.querySelector('#card10');
cardID.addEventListener('click', () => openModal('modalRecipe4'))

var cardID = document.querySelector('#card11');
cardID.addEventListener('click', () => openModal('modalRecipe5'))
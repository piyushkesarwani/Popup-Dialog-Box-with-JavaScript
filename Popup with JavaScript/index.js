const openModalButton = document.querySelector('.open-modal')
const closeModalButton = document.querySelector('.close-modal-button')
const overlay = document.querySelector('#overlay')

overlay.addEventListener('click', () => {
	const modal = document.querySelector('.modal')
	closeModal(modal)
})

openModalButton.addEventListener('click', () => {
	const modal = document.querySelector('#modal')
	openModal(modal)
})

closeModalButton.addEventListener('click', () => {
	const modal = document.querySelector('#modal')
	closeModal(modal);
})

function openModal(modal){
	if(modal==null) return
	modal.classList.add('active')
	overlay.classList.add('active')
}

function closeModal(modal){
	if(modal == null)
		return

	modal.classList.remove('active')
	overlay.classList.remove('active')
}
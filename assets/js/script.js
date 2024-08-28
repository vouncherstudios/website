'use strict';

// Prevent context menu
document.addEventListener('contextmenu', event => event.preventDefault());

function openModal() {
    document.getElementById('marketplacesModal').classList.remove('hidden');
}

function closeModal() {
    document.getElementById('marketplacesModal').classList.add('hidden');
}

document.querySelector('#marketplaces').addEventListener('click', function(event) {
    event.preventDefault();
    openModal();
});
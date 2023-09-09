console.log("Hey there");

const sidebar = document.querySelector(".sidebar");
const openSidebar = document.getElementById("open-sidebar");
const closeSidebar = document.getElementById("close-sidebar");

function toggleNav() {
	sidebar.classList.toggle("open");
}

openSidebar.addEventListener("click", toggleNav);
closeSidebar.addEventListener("click", toggleNav);

// events.js
const inquireBtns = document.querySelectorAll(".inquire");
const closeModal = document.getElementById("close-modal");
const form = document.querySelector("form");

form.addEventListener("submit", handleFormSubmit);
function handleFormSubmit(e) {
	e.preventDefault();
	console.log("Form submitted.");
}

inquireBtns.forEach((button) => {
	button.addEventListener("click", toggleModal);
});

closeModal.addEventListener("click", toggleModal);

function toggleModal() {
	const modal = document.querySelector(".modal");
	modal.classList.toggle("hidden");
}

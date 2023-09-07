console.log("Hey there");

const sidebar = document.querySelector(".sidebar");
const openBtn = document.getElementById("open-btn");
const closeBtn = document.getElementById("close-btn");

function toggleNav() {
	sidebar.classList.toggle("open");
}

openBtn.addEventListener("click", toggleNav);
closeBtn.addEventListener("click", toggleNav);

import { buildMenu } from "./menu.js";
import { buildHome } from "./home.js";
import { buildEvents, listenForClicks } from "./event.js";

console.log("Hey there");

const mainContent = document.getElementById("content");
const sidebar = document.querySelector(".sidebar");
const openSidebar = document.getElementById("open-sidebar");
const closeSidebar = document.getElementById("close-sidebar");

function toggleNav() {
	sidebar.classList.toggle("open");
}

openSidebar.addEventListener("click", toggleNav);
closeSidebar.addEventListener("click", toggleNav);

// home.js
document.getElementById("home-btn").addEventListener("click", () => {
	mainContent.textContent = "";
	mainContent.appendChild(buildHome());
});

// events.js
document.getElementById("events-btn").addEventListener("click", () => {
	mainContent.textContent = "";
	mainContent.appendChild(buildEvents());
	listenForClicks();
});

// menu.js
document.getElementById("menu-btn").addEventListener("click", () => {
	mainContent.textContent = "";
	mainContent.appendChild(buildMenu());
});

////////////// EXPORTS ///////////////
export const elFactory = (type, attributes, children = []) => {
	return { type, attributes, children };
};

export function htmlFactory(obj) {
	const el = document.createElement(obj.type);
	const attributes = obj.attributes;

	for (let key in attributes) {
		el[key] = attributes[key];
	}

	obj.children?.forEach((child) => {
		el.appendChild(htmlFactory(child));
	});

	return el;
}

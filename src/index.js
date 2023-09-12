import { buildMenu } from "./menu.js";
import { buildHome } from "./home.js";
import { buildEvents, listenForClicks } from "./event.js";

const mainContent = document.getElementById("content");
const sidebar = document.querySelector(".sidebar");

document.querySelectorAll(".sidebar-toggler").forEach((button) => {
	button.addEventListener("click", () => {
		sidebar.classList.toggle("open");
	});
});

function handleBuildClick(tabChoice) {
	mainContent.textContent = "";
	mainContent.appendChild(
		tabChoice === "home-btn"
			? buildHome()
			: tabChoice === "events-btn"
			? buildEvents()
			: buildMenu()
	);
	sidebar.classList = "sidebar";
	if (tabChoice === "events-btn") {
		listenForClicks();
	}
}

document.querySelectorAll(".nav-btn").forEach((button) => {
	button.addEventListener("click", (e) => {
		handleBuildClick(e.target.id);
	});
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

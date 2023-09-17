import { buildMenu } from "./menu.js";
import { buildHome } from "./home.js";
import { buildEvents, listenForClicks } from "./event.js";
import { buildConstants } from "./constants.js";

const allContent = document.getElementById("all-content");
allContent.textContent = "";
[...buildConstants()].forEach((section) => allContent.appendChild(section));

const changingContent = document.getElementById("changing-content");
changingContent.appendChild(buildHome());

const sidebar = document.querySelector(".sidebar");
document.querySelectorAll(".sidebar-toggler").forEach((button) => {
	button.addEventListener("click", () => {
		sidebar.classList.toggle("open");
	});
});

function handleBuildClick(tabChoice) {
	changingContent.textContent = "";
	changingContent.appendChild(
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
export function elFactory(type, attributes, children = []) {
	return { type, attributes, children };
}

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

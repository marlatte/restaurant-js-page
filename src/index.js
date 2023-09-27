import { buildMenu } from "./menu.js";
import { buildHome } from "./home.js";
import { buildEvents, listenForClicks } from "./event.js";
import { buildAboutUs } from "./about-us.js";
import { buildConstants } from "./constants.js";
import "./styles/reboot-util.css";
import "./styles/constants.css";
import "./styles/home.css";
import "./styles/menu.css";
import "./styles/events.css";
import "./styles/about.css";

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

document.querySelectorAll(".nav-btn").forEach((button) => {
	button.addEventListener("click", (e) => {
		handleBuildClick(e.target.id);
	});
});

function handleBuildClick(tabChoice) {
	changingContent.textContent = "";
	changingContent.appendChild(
		{
			"home-btn": buildHome(),
			"events-btn": buildEvents(),
			"menu-btn": buildMenu(),
			"about-btn": buildAboutUs(),
		}[tabChoice]
	);
	sidebar.classList = "sidebar";
	if (tabChoice === "events-btn") {
		listenForClicks();
	}
}

document.getElementById("contact-btn").addEventListener("click", () => {
	handleBuildClick("about-btn");
});

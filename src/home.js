export function displayHome() {
	const mainContent = document.getElementById("content");
	mainContent.appendChild(buildHome());
}

function buildHome() {
	const homeSection = document.createElement("section");
	homeSection.classList.add("home");
}

function buildHero() {
	const hero = document.createElement("div");
	hero.classList.add("hero");
}

function buildLanterns() {}

function buildHours() {
	const hoursContainer = document.createElement("div");
	hoursContainer.classList.add("hours-container");
}

function setHours() {
	// Store hours in array of objects
	// Iterate through and create divs with class=`${schedule.split(" ").join("-")}`
	// eg: {schedule: "operating hours", m-f: "4pm-11pm", sat: "2pm-2am", sun: "2pm-10pm"}
	// Need a check for last key since there's no happy hour on sunday
}

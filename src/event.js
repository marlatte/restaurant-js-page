import { htmlFactory, elFactory } from "./index.js";

/*
- events
	- content
	- photos
		- for each pic, use an array of objects to store the link and altText together, 
		- Iterate over them with .map(image, index) to create each image-container
			- If it's at an odd index, create a div.tier, else add it to the last tier.
	- call-to-action
	- form modal
*/

export function buildEvents() {
	const [eventsContent, photos, callToAction, modalForm] = [
		"content",
		"photos",
		"call-to-action",
		"modal close-modal hidden",
	].map((el) => {
		return elFactory("article", { classList: el });
	});

	eventsContent.children.push(
		elFactory("div", { classList: "art" }),
		elFactory("div", { classList: "text" }, createTextChildren())
	);

	// photos.children.push(...createPhotos());

	callToAction.children.push(
		elFactory("p", { textContent: "Let us host your next event" }),
		elFactory("button", {
			classList: "inquire",
			type: "button",
			textContent: "Inquire Now",
		})
	);

	// modalForm.children.push(...createModal());

	return htmlFactory(
		elFactory("div", { classList: "events dynamic" }, [
			eventsContent,
			photos,
			callToAction,
			modalForm,
		])
	);
}

export function listenForClicks() {
	const inquireBtns = document.querySelectorAll(".inquire");
	inquireBtns.forEach((button) => {
		button.addEventListener("click", toggleModal);
	});

	const closeModal = document.querySelectorAll(".close-modal");
	closeModal.forEach((closer) => {
		closer.addEventListener("click", toggleModal);
	});

	function toggleModal() {
		const modal = document.querySelector(".modal");
		modal.classList.toggle("hidden");
	}

	// const form = document.querySelector("form");
	// form.addEventListener("submit", (e) => {
	// 	e.preventDefault();
	// 	console.log("Form submitted.");
	// 	toggleModal();
	// });
}

function createTextChildren() {
	const textChildren = [
		["h1", "Private Dining & Events"],
		["h2", "Special Events"],
		[
			"p",
			"With two levels of dining and a bar on each floor, the restaurant offers seating for up 220 guests within approximately 5,000 square-footage. Upon entry into the restaurant through a glass entryway is a 24- seat bar for guests to enjoy a drink, snack, or full dinner.",
		],
		[
			"p",
			"There are multiple areas of the restaurant that can host private and semi-private events as the restaurant boasts two semi-private rooms that both seat 20 guests, as well as the upstairs Mezzanine level, which seats up to 50 and 8 at the bar. Seating will be available outdoors seasonally.",
		],
		["h2", "Cocktail Parties, Receptions, Buyouts"],
		[
			"p",
			"We are pleased to offer our services for your next occasions. Book our entire restaurant for a special evening, catered just for you and your guests. Let us bring the ASSET experience to your wedding, birthdays and other large events",
		],
		["p", "Inquire or contact us at"],
	].map((entry) => {
		return elFactory(entry[0], { textContent: entry[1] });
	});

	textChildren[textChildren.length - 1].children.push(
		elFactory("a", {
			href: "tel:+1-212-517-1987",
			textContent: "+1 212 517 1987",
		})
	);

	textChildren.push(
		elFactory("div", { classList: "call-to-action" }, [
			elFactory("button", {
				classList: "inquire",
				type: "button",
				textContent: "Inquire Now",
			}),
		])
	);
	return textChildren;
}

function createPhotos() {
	// Returns array of children
}

function createModal() {
	// Returns array of children
}

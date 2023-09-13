import { elFactory } from "./index.js";

export function createForm() {
	// Create sections containers for the complicated parts
	const [formContact, formDetails, formExtras] = [
		"form-contact",
		"form-details",
		"form-extras",
	].map((el) => {
		return elFactory("section", { classList: el });
	});

	formContact.children.push(
		elFactory("h4", { textContent: "Contact" }),
		...createContactSection()
	);

	// Create form element and overarching structure
	const formElement = elFactory("form", {}, [
		elFactory("section", { classList: "form-header" }, [
			elFactory("h3", { textContent: "Let's get some info!" }),
			elFactory("button", {
				type: "button",
				class: "close-btn",
				id: "close-modal",
				textContent: "×",
			}),
		]),
		elFactory("div", { classList: "form-content" }, [
			formContact,
			formDetails,
			formExtras,
		]),
		elFactory("button", { type: "submit", textContent: "Submit" }),
	]);
	return formElement;
}

function createContactSection() {
	// Iterate over input details to create first section of form
	return [
		["First Name", "text"],
		["Last Name", "text"],
		["Email", "email"],
		["Phone", "tel"],
		["Company", "text"],
	]
		.map((pair) => {
			const kebab = pair[0].toLowerCase().split(" ").join("-");
			return elFactory("div", { classList: "form-item" }, [
				elFactory("label", { for: kebab, textContent: pair[0] + ":" }),
				elFactory("input", { id: kebab, type: pair[1] }),
			]);
		})
		.reduce((acc, currentItem, index) => {
			if (!(index & 1)) {
				// If even, create row with currentItem as a child
				acc.push(
					elFactory("div", { classList: "form-row" }, [currentItem])
				);
				return acc;
			} else {
				// If odd, add currentItem to previous row
				acc[acc.length - 1].children.push(currentItem);
				return acc;
			}
		}, []);
}

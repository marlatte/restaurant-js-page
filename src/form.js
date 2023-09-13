import { elFactory } from "./index.js";

function formRowFactory(formDataArrays) {
	return formDataArrays
		.map((pair) => {
			const kebab = pair[0].toLowerCase().split(" ").join("-");
			return elFactory("div", { classList: "form-item" }, [
				elFactory("label", {
					htmlFor: kebab,
					textContent: pair[0] + ":",
				}),
				elFactory("input", {
					id: kebab,
					type: pair[1],
					autocomplete: pair[2],
				}),
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

function createDetailSection() {
	// First form-item
	const eventType = elFactory("div", { classList: "form-item" }, [
		elFactory("label", {
			htmlFor: "event-type",
			textContent: "Type of Event:",
		}),
		elFactory("input", {
			id: "event-type",
			type: "text",
			placeholder: "Birthday, Business Dinner, etc.",
			autocomplete: "off",
		}),
	]);

	// Multiple choice radio buttons
	const location = elFactory("fieldset", { classList: "location" }, [
		elFactory("legend", { textContent: "Location:" }),
		...[
			["asset", "329 Columbus Ave."],
			["tessa", "349 Amsterdam Ave."],
		].map((pair) => {
			return elFactory("div", { classList: "form-item" }, [
				elFactory("label", {}, [
					elFactory("input", {
						name: "location",
						type: "radio",
						value: pair[0],
					}),
					elFactory("span", {
						textContent: pair[0].toUpperCase() + " - " + pair[1],
					}),
				]),
			]);
		}),
	]);

	// Last 2 rows of this section
	const byTheNumbers = formRowFactory([
		["Party Size", "number", "off"],
		["Date", "date", "off"],
		["Start Time", "time", "off"],
		["End Time", "time", "off"],
	]);

	return [eventType, location, ...byTheNumbers];
}

function createExtrasSection() {
	// 1 form-item with textarea and 1 with select
	const [textAreaItem, selectItem] = [
		["extra-info", "textarea"],
		["referral-source", "select"],
	].map((pair) => {
		return elFactory("div", { classList: "form-item" }, [
			elFactory("label", { htmlFor: pair[0] }),
			elFactory(pair[1], { name: pair[0], id: pair[0] }),
		]);
	});

	// Add text content to each <label>
	textAreaItem.children[0].attributes.textContent =
		"Is there any additional information you would like to add?";
	selectItem.children[0].attributes.textContent =
		"How did you hear about us?";

	// Add attributes to <textarea>
	textAreaItem.children[1].attributes.rows = "6";
	textAreaItem.children[1].attributes.placeholder =
		"Surprises, Dietary Needs, etc.";

	// Add 9 <option>'s to <select>
	const optionsArray = [
		"EventUp",
		"Instagram",
		"Facebook",
		"Tripleseat Restaurants",
		"Search Engine",
		"Email",
		"Other",
		"Website",
	].map((text) => {
		return elFactory("option", {
			value: text.split(" ")[0].toLowerCase(),
			textContent: text,
		});
	});

	selectItem.children[1].children.push(
		elFactory("option", {
			value: "",
			textContent: "Select an option",
			selected: true,
		}),
		...optionsArray
	);

	return [textAreaItem, selectItem];
}

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
		...formRowFactory([
			["First Name", "text", "given-name"],
			["Last Name", "text", "family-name"],
			["Email", "email", "email"],
			["Phone", "tel", "tel"],
			["Company", "text", "organization"],
		])
	);

	formDetails.children.push(
		elFactory("h4", { textContent: "Event Details" }),
		...createDetailSection()
	);

	formExtras.children.push(
		elFactory("h4", { textContent: "Extras" }),
		...createExtrasSection()
	);

	// Create form element and overarching structure
	const formElement = elFactory("form", {}, [
		elFactory("section", { classList: "form-header" }, [
			elFactory("h3", { textContent: "Let's get some info!" }),
			elFactory("button", {
				type: "button",
				classList: "close-modal close-btn",
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

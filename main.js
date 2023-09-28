/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/dom-factories.js
function elFactory(type, attributes, children = []) {
	return { type, attributes, children };
}

function htmlFactory(obj) {
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

function formRowFactory(formDataArrays) {
	return formDataArrays
		.map((formData) => {
			const kebab = formData[0].toLowerCase().split(" ").join("-");
			return elFactory("div", { classList: "form-item" }, [
				elFactory("label", {
					htmlFor: kebab,
					textContent: formData[0] + ":",
				}),
				elFactory("input", {
					id: kebab,
					type: formData[1],
					autocomplete: formData[2],
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

;// CONCATENATED MODULE: ./src/menu.js


function buildMenu() {
	const dinnerLink =
		"https://www.assetrestaurant.com/_files/ugd/54a4cd_3a7a0a55ae744fceaec853bc0b19c7b2.pdf";
	const wineLink =
		"https://www.assetrestaurant.com/_files/ugd/54a4cd_381e50de69ac4b3dae5f805513c334d6.pdf";

	return htmlFactory(
		elFactory("div", { classList: "menu dynamic" }, [
			elFactory("div", { classList: "menu-art" }),
			elFactory("div", { classList: "menu-text" }, [
				...["dinner", "wine"].map((text) => {
					return elFactory("a", {
						textContent: text,
						classList: "menu-link",
						href: text === "dinner" ? dinnerLink : wineLink,
						target: "_blank",
					});
				}),
				elFactory("h1", { classList: "brand", textContent: "AE" }),
			]),
		])
	);
}

;// CONCATENATED MODULE: ./src/home.js


function buildHome() {
	const heroText = elFactory("div", { classList: "hero-text" }, [
		elFactory("h1", { classList: "brand", textContent: "AE" }),
		elFactory("div", { classList: "reservations" }, [
			elFactory("a", {
				href: "https://resy.com/cities/ny/asset",
				textContent: "reservations",
			}),
		]),
		elFactory("div", { classList: "scroll-down" }, [
			elFactory("a", { href: "#hours" }, [
				elFactory("i", {
					classList: "fa fa-angle-down",
				}),
			]),
		]),
	]);

	const lanterns = elFactory("div", { classList: "lanterns" });
	for (let i = 0; i < 3; i++) {
		lanterns.children.push(
			elFactory("div", { classList: "lantern" }, [
				...["top", "body", "bottom"].map((text) => {
					return elFactory("div", {
						classList: text,
					});
				}),
			])
		);
	}

	const hoursDetails = [
		{
			schedule: "operating hours",
			hoursText: {
				"monday-friday": "4pm-11pm",
				saturday: "2pm-2am",
				sunday: "2pm-10pm",
			},
		},
		{
			schedule: "dinner hours",
			hoursText: {
				"monday-thursday": "5pm-10pm",
				friday: "5pm-11pm",
				saturday: "2pm-11pm",
				sunday: "2pm-9pm",
			},
		},
		{
			schedule: "happy hour",
			hoursText: {
				"monday-friday": "4pm-6pm",
				saturday: "10pm-12am",
			},
		},
	];

	const hoursDivs = hoursDetails.map((hoursObject) => {
		return elFactory(
			"div",
			{
				classList: hoursObject.schedule.split(" ").join("-"),
			},
			[
				elFactory("h2", { textContent: hoursObject.schedule + ":" }),
				...Object.entries(hoursObject.hoursText).map((entry) => {
					return elFactory("p", {
						textContent: `${entry[0]}: ${entry[1]} `,
					});
				}),
			]
		);
	});

	const homeDiv = elFactory("div", { classList: "home dynamic" }, [
		elFactory("section", { classList: "hero" }, [
			elFactory("div", { classList: "art" }),
			heroText,
			lanterns,
		]),
		elFactory("section", { classList: "hours-container" }, [
			elFactory("div", { classList: "hours", id: "hours" }, hoursDivs),
		]),
	]);
	return htmlFactory(homeDiv);
}

;// CONCATENATED MODULE: ./src/form.js


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

function createForm() {
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

;// CONCATENATED MODULE: ./src/event.js



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
		["p", "Inquire below or contact us at:"],
	].map((entry) => {
		return elFactory(entry[0], { textContent: entry[1] });
	});

	textChildren[textChildren.length - 1].children.push(
		elFactory("a", {
			href: "tel:+1-212-517-1987",
			textContent: "+1 212 517 1987",
			classList: "underline",
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
	return [
		{
			src: "https://static.wixstatic.com/media/bbf025b2a19440d197cbef666fffbc8e.jpg/v1/fill/w_999,h_600,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/bbf025b2a19440d197cbef666fffbc8e.jpg",
			alt: "People drinking at a bar",
		},
		{
			src: "https://static.wixstatic.com/media/54a4cd_a265a2f258344c159c3d06fcebd940ee~mv2.jpg/v1/fill/w_666,h_600,al_l,q_85,usm_0.66_1.00_0.01,enc_auto/54a4cd_a265a2f258344c159c3d06fcebd940ee~mv2.jpg",
			alt: "A glass of wine and plate of food",
		},
		{
			src: "https://static.wixstatic.com/media/54a4cd_95184a86aeee42bc8f2b65d4148acddf~mv2_d_1950_1308_s_2.jpg/v1/fill/w_666,h_600,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/54a4cd_95184a86aeee42bc8f2b65d4148acddf~mv2_d_1950_1308_s_2.jpg",
			alt: "A DJ booth",
		},
		{
			src: "https://static.wixstatic.com/media/54a4cd_b2e536abf0ea436d90557c5e528a1ec0~mv2.png/v1/fill/w_999,h_600,al_l,q_90,usm_0.66_1.00_0.01,enc_auto/54a4cd_b2e536abf0ea436d90557c5e528a1ec0~mv2.png",
			alt: "A bar full of people",
		},
		{
			src: "https://static.wixstatic.com/media/54a4cd_66643885bf2e44d7a5f9396cd26f6e97~mv2.jpg/v1/fill/w_833,h_550,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/54a4cd_66643885bf2e44d7a5f9396cd26f6e97~mv2.jpg",
			alt: "An empty bar, lit from underneath",
		},
		{
			src: "https://static.wixstatic.com/media/54a4cd_5c02480400154bbebd0758eb2f8d7b8d~mv2_d_1600_1200_s_2.jpg/v1/fill/w_833,h_550,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/54a4cd_5c02480400154bbebd0758eb2f8d7b8d~mv2_d_1600_1200_s_2.jpg",
			alt: "Restaurant staff",
		},
	]
		.map((imgObj, index) => {
			const [src, alt] = [imgObj.src, imgObj.alt];
			return elFactory("div", { classList: "image-container" }, [
				elFactory("img", { src, alt }),
			]);
		})
		.reduce((acc, currentImg, index) => {
			if (!(index & 1)) {
				// If even, create tier with child img
				acc.push(elFactory("div", { classList: "tier" }, [currentImg]));
				return acc;
			} else {
				// If odd, add img child to previous tier
				acc[acc.length - 1].children.push(currentImg);
				return acc;
			}
		}, []);
}

function buildEvents() {
	const [eventsContent, photos, callToAction, modalElement] = [
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

	photos.children.push(...createPhotos());

	callToAction.children.push(
		elFactory("p", { textContent: "Let us host your next event" }),
		elFactory("button", {
			classList: "inquire",
			type: "button",
			textContent: "Inquire Now",
		})
	);

	modalElement.children.push(createForm());

	return htmlFactory(
		elFactory("div", { classList: "events dynamic" }, [
			eventsContent,
			photos,
			callToAction,
			modalElement,
		])
	);
}

function listenForClicks() {
	const modal = document.querySelector(".modal");

	const inquireBtns = document.querySelectorAll(".inquire");
	inquireBtns.forEach((button) => {
		button.addEventListener("click", () => {
			modal.classList.remove("hidden");
		});
	});

	const closeModalBtns = document.querySelectorAll(".close-modal");
	closeModalBtns.forEach((closer) => {
		closer.addEventListener("click", (e) => {
			if (e.target.classList.value.includes("close-modal")) {
				modal.classList.add("hidden");
			}
		});
	});

	const form = document.querySelector("form");
	form.addEventListener("submit", (e) => {
		e.preventDefault();
		console.log("Form submitted.");
		modal.classList.add("hidden");
	});
}

;// CONCATENATED MODULE: ./src/about-us.js


function buildAboutUs() {
	return htmlFactory(
		elFactory("div", { classList: "about" }, [
			elFactory("p", { classList: "text", textContent: "" }, [
				elFactory("a", {
					classList: "underline phone",
					href: "tel:+1-212-517-1987",
					textContent: "212-517-1987",
				}),
			]),
			elFactory("div", { classList: "map-container" }, [
				elFactory("div", { classList: "map-tack" }, []),
				elFactory("div", { classList: "map-string" }, [
					elFactory("div", { classList: "left" }),
					elFactory("div", { classList: "right" }),
				]),
				elFactory("div", { classList: "map-wood map-top" }, []),
				elFactory("div", { classList: "map-canvas" }, [
					elFactory("iframe", {
						src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.202843386356!2d-73.97953792388756!3d40.77955453347718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259c8390b0e97%3A0x2cb1160aef377d0b!2sASSET!5e0!3m2!1sen!2sus!4v1695868373928!5m2!1sen!2sus",
						width: "100%",
						height: "450",
						loading: "lazy",
						referrerPolicy: "no-referrer-when-downgrade",
					}),
				]),
				elFactory("div", { classList: "map-wood map-bottom" }, []),
			]),
		])
	);
}

;// CONCATENATED MODULE: ./src/constants.js


function createSocialIcons() {
	// returns div.socials with 4 links, each containing an <i>
	return elFactory(
		"div",
		{ classList: "socials" },
		[
			{
				name: "instagram",
				link: "https://www.instagram.com/assetrestaurant/",
			},
			{
				name: "facebook",
				link: "https://www.facebook.com/assetrestaurant/",
			},
			{
				name: "yelp",
				link: "https://www.yelp.com/biz/asset-new-york?osq=asset",
			},
			{
				name: "tripadvisor",
				link: "https://www.tripadvisor.com/Restaurant_Review-g60763-d19284346-Reviews-Asset-New_York_City_New_York.html",
			},
		].map((pair) => {
			return elFactory("a", { href: pair.link }, [
				elFactory("i", {
					classList: `fa fa-${pair.name}`,
					ariaHidden: true,
				}),
			]);
		})
	);
}

function buildConstants() {
	const sidebar = elFactory("div", { classList: "sidebar dynamic" }, [
		elFactory("button", {
			type: "button",
			classList: "close-btn sidebar-toggler",
			id: "close-sidebar",
			textContent: "×",
		}),
		elFactory(
			"nav",
			{},
			["home", "menu", "events", "about"].map((button) => {
				return elFactory("button", {
					type: "button",
					classList: "nav-btn",
					id: `${button}-btn`,
					textContent: button,
				});
			})
		),
	]);

	const header = elFactory("header", {}, [
		elFactory("button", {
			type: "button",
			classList: "sidebar-toggler",
			id: "open-sidebar",
			textContent: "☰",
		}),
		createSocialIcons(),
	]);

	const footer = elFactory("footer", {}, [
		createSocialIcons(),
		elFactory("div", { classList: "author" }, [
			elFactory("p", { textContent: "Walker" }),
			elFactory(
				"a",
				{
					href: "https://github.com/marlatte",
					target: "_blank",
				},
				[elFactory("i", { classList: "fa fa-github" })]
			),
			elFactory("p", { textContent: "Marlatt" }),
		]),
		elFactory("div", { classList: "contact-container" }, [
			elFactory("button", {
				type: "button",
				id: "contact-btn",
				textContent: "Contact Us",
			}),
		]),
	]);

	return [
		sidebar,
		header,
		elFactory("main", { id: "changing-content" }),
		footer,
	].map((section) => {
		return htmlFactory(section);
	});
}

;// CONCATENATED MODULE: ./src/index.js












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

/******/ })()
;
//# sourceMappingURL=main.js.map
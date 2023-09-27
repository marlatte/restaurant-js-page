import { elFactory, htmlFactory } from "./dom-factories.js";

export function buildHome() {
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

import { elFactory } from "./index.js";

export function buildMenu() {
	return elFactory({
		type: "div",
		attributes: {
			classList: "menu dynamic",
		},
		children: [
			{
				type: "div",
				attributes: {
					classList: "menu-art",
				},
			},
			{
				type: "div",
				attributes: {
					classList: "menu-text",
				},
				children: [
					{
						type: "a",
						attributes: {
							classList: "menu-link",
							href: "#",
							textContent: "dinner",
						},
					},
					{
						type: "a",
						attributes: {
							classList: "menu-link",
							href: "#",
							textContent: "wine",
						},
					},
					{
						type: "h1",
						attributes: {
							classList: "brand",
							textContent: "AE",
						},
					},
				],
			},
		],
	});
}

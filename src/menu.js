import { elFactory, htmlFactory } from "./dom-factories.js";

export function buildMenu() {
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

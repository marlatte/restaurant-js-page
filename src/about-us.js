import { elFactory, htmlFactory } from "./dom-factories";

export function buildAboutUs() {
	return htmlFactory(
		elFactory("div", { classList: "address", textContent: "" }, [
			elFactory("a", {
				classList: "underline",
				href: "https://goo.gl/maps/1bbNQt1JpWeHJ7hb9",
				textContent: "329 Columbus Ave, NYC",
			}),
			elFactory("a", {
				classList: "underline",
				href: "tel:+1-212-517-1987",
				textContent: "+1 212 517 1987",
			}),
		])
	);
}

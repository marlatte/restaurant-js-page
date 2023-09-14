import { elFactory, htmlFactory } from "./index.js";

export function buildConstants() {
	// returns div.sidebar, header, main#changing-content, footer

	const footer = elFactory("footer", {}, [
		elFactory("div", { classList: "contact" }, [
			createSocialIcons(),
			elFactory("p", { classList: "address", textContent: "" }),
		]),
	]);
	// Add "box" to classList of div.socials
}

function createSocialIcons() {
	// returns div.socials with 4 links, each containing an <i>
}

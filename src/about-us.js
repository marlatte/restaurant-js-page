import { elFactory, htmlFactory } from "./dom-factories";

export function buildAboutUs() {
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

import { elFactory, htmlFactory } from "./index.js";

export function buildConstants() {
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
			["home", "menu", "events"].map((button) => {
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

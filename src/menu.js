// <div class="menu-art"></div>
// <div class="menu-text">
// <a href="#" class="menu-link">dinner</a>
// <a href="#" class="menu-link">wine</a>
// <h1 class="brand">AE</h1>
// </div>

export function buildMenu() {
	const menuDiv = document.createElement("div");
	menuDiv.classList = "menu dynamic";

	const art = document.createElement("div");
	const text = document.createElement("div");
	art.classList = "menu-art";
	text.classList = "menu-text";

	menuDiv.appendChild;

	return { menuDiv };
}

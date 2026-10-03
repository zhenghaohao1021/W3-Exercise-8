import { g as escape_html, r as ensure_array_like } from "../../chunks/server.js";
import { t as Item } from "../../chunks/Item.js";
//#region src/lib/Brand.svelte
function Brand($$renderer) {
	const brands = [
		"Apple",
		"GAN Cube",
		"MoYu Cube",
		"The Cubicle",
		"Microsoft"
	];
	$$renderer.push(`<ul class="brand-list svelte-2o74q4"><!--[-->`);
	const each_array = ensure_array_like(brands);
	for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
		let brand = each_array[$$index];
		$$renderer.push(`<li class="svelte-2o74q4">${escape_html(brand)}</li>`);
	}
	$$renderer.push(`<!--]--></ul>`);
}
//#endregion
//#region src/routes/+page.svelte
function _page($$renderer) {
	$$renderer.push(`<div class="container svelte-1uha8ag"><div class="header svelte-1uha8ag"><h1 class="svelte-1uha8ag">🏠 Welcome to My SvelteKit Site</h1> <p class="svelte-1uha8ag">Routing, layouts, and component imports with SvelteKit</p></div> <div class="section svelte-1uha8ag"><h2 class="svelte-1uha8ag">Items I Can See:</h2> `);
	Item($$renderer, {});
	$$renderer.push(`<!----></div> <div class="section svelte-1uha8ag"><h2 class="svelte-1uha8ag">Brands:</h2> `);
	Brand($$renderer, {});
	$$renderer.push(`<!----></div></div>`);
}
//#endregion
export { _page as default };

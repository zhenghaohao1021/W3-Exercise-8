import { g as escape_html, r as ensure_array_like } from "./server.js";
//#region src/lib/Item.svelte
function Item($$renderer) {
	const items = [
		"My laptop screen",
		"The keyboard and trackpad",
		"A MoYu RS3M 2020 cube",
		"A GAN 356 Air SM cube",
		"A YongJoe Meta 3 Cube"
	];
	$$renderer.push(`<ol class="item-list svelte-zefpzk"><!--[-->`);
	const each_array = ensure_array_like(items);
	for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
		let item = each_array[$$index];
		$$renderer.push(`<li class="svelte-zefpzk">${escape_html(item)}</li>`);
	}
	$$renderer.push(`<!--]--></ol>`);
}
//#endregion
export { Item as t };

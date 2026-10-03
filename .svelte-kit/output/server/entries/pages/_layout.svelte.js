import { n as derived, t as attr_class } from "../../chunks/server.js";
import { t as page } from "../../chunks/state.js";
//#region src/routes/+layout.svelte
function _layout($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { children } = $$props;
		const currentPath = derived(() => page.url.pathname);
		$$renderer.push(`<div class="layout-container svelte-12qhfyh"><header class="svelte-12qhfyh"><h1 class="site-title svelte-12qhfyh">🌐 My SvelteKit Site</h1> <nav aria-label="Main navigation" class="svelte-12qhfyh"><a href="/"${attr_class("svelte-12qhfyh", void 0, { "active": currentPath() === "/" })}>Home</a> <a href="/about"${attr_class("svelte-12qhfyh", void 0, { "active": currentPath().startsWith("/about") })}>About</a> <a href="/contact"${attr_class("svelte-12qhfyh", void 0, { "active": currentPath().startsWith("/contact") })}>Contact</a></nav></header> <main class="svelte-12qhfyh">`);
		children($$renderer);
		$$renderer.push(`<!----></main> <footer class="svelte-12qhfyh"><p class="svelte-12qhfyh">Built with SvelteKit | Activity 08 | W3 Course</p></footer></div>`);
	});
}
//#endregion
export { _layout as default };

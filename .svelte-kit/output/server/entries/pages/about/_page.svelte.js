import "../../../chunks/server.js";
import { t as Item } from "../../../chunks/Item.js";
//#region src/routes/about/+page.svelte
function _page($$renderer) {
	$$renderer.push(`<div class="about-container svelte-cwls5q"><h1 class="svelte-cwls5q">📖 About This Project</h1> <div class="content-section svelte-cwls5q"><h2>Project Overview</h2> <p>This project demonstrates the use of SvelteKit for building a modern web application. It includes routing, layouts, and component imports.</p></div> <div class="content-section svelte-cwls5q"><h2>My Component Import</h2> `);
	Item($$renderer, {});
	$$renderer.push(`<!----></div></div>`);
}
//#endregion
export { _page as default };

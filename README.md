# Activity 08 — SvelteKit Routing

> **🛠️ Stack for this lesson** — SvelteKit 2 · Vite · Node 20.19+.
> 📥 Template: [/learn/w3/template/activity-08-sveltekit-routing](/learn/w3/template/activity-08-sveltekit-routing)

A real SvelteKit project with three routes already wired up — `/`, `/about`, `/contact` — and a shared `+layout.svelte`. You'll build two reusable components in `src/lib/`, hook them into the home page via the `$lib` alias, finish navigation, and put real content on the About / Contact pages.

**Time:** ~60 minutes · **Concept:** Concept 08 — SvelteKit

---

## What You'll Build

| # | TODO | Where |
|---|------|-------|
| 1 | `src/lib/Item.svelte` — an ordered list of 5 things you see right now | new file |
| 2 | `src/lib/Brand.svelte` — an unordered list of the matching brands | new file |
| 3 | Import both with the `$lib` alias and render them on the home page | `src/routes/+page.svelte` |
| 4 | Replace the placeholder blocks on the home page with the real components | `src/routes/+page.svelte` |
| 5 | Add a `<nav>` with `/`, `/about`, `/contact` links to the layout header | `src/routes/+layout.svelte` |
| 6 | Reuse one of your `$lib` components on the About page | `src/routes/about/+page.svelte` |
| 7 | Write a short paragraph about you / this project | `src/routes/about/+page.svelte` |
| 8 | Replace the contact-page placeholder with real info or a form | `src/routes/contact/+page.svelte` |

## Run It

```bash
npm install
npm run dev
```

Open `http://localhost:5173`. Edit any file and the browser hot-reloads.

## Verify

- [ ] `/` renders the ordered list (numbered) and unordered list (bulleted) — placeholder blocks are gone.
- [ ] The header navigation links work without a full reload — `/`, `/about`, `/contact` all swap content while the header/footer stay put.
- [ ] `/about` shows your paragraph and at least one `$lib` component.
- [ ] `/contact` shows real contact info or a working form (no submission required).
- [ ] No "Cannot find module '$lib/...'" errors and no leftover yellow `⚠️ TODO` placeholder boxes.

## Stretch

- Add a `/projects` route with a list of cards.
- Highlight the active link in the nav using `page.url.pathname` from `$app/state`.
- Move the gradient background into a CSS variable in `src/app.html` and theme-switch with a button in the layout.

## 🪞 Reflect on Your Work

Answer in 2-3 sentences each, in your Notes doc. Your tutor reads these as part of grading.

1. **What did you learn that you didn't know before?** Name the most surprising thing — file-based routing, the `$lib` alias, how `{@render children()}` draws the page inside the layout, anything that bit you.
2. **How did you collaborate with AI?** If you used Claude / ChatGPT / Cursor / Copilot, what part of the work did *you* contribute — the prompt, the verification, the design decision, the bug-fix? If you didn't use AI, what was the hardest thing to figure out alone?
3. **How do you know your code works?** Describe one specific thing you did to confirm — a screenshot of `/about`, a test you ran, a behavior you watched on hot reload.

> AI is a great collaborator. Owning your thinking, verifying the output, and explaining your design choices is what *learning* looks like in this course.

## Submit

When the Verify checklist is green, head to **[/learn/w3/certification](/learn/w3/certification)** and submit your repo URL or a zipped project (exclude `node_modules/`).

<!-- claude-template-fix: readme-v3 -->

<script>
  import { page } from '$app/state';
  let { children } = $props();
  const currentPath = $derived(page.url.pathname);
</script>

<style>
  :global(body) {
    margin: 0;
    padding: 0;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    min-height: 100vh;
  }

  .layout-container {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  header {
    background: rgba(255, 255, 255, 0.95);
    padding: 1.5rem 2rem;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  }

  .site-title {
    font-size: 1.8rem;
    font-weight: bold;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    background-clip: text;
    -webkit-text-fill-color: transparent;
    margin: 0 0 1rem 0;
  }

  nav {
    display: flex;
    gap: 1.5rem;
  }

  nav a {
    text-decoration: none;
    color: #495057;
    font-weight: 500;
    padding: 0.5rem 1rem;
    border-radius: 6px;
    transition: all 0.2s;
  }

  nav a:hover {
    background: #f8f9fa;
    color: #667eea;
  }

  nav a.active {
    background: #667eea;
    color: white;
  }

  main {
    flex: 1;
    padding: 2rem;
  }

  footer {
    background: rgba(255, 255, 255, 0.95);
    padding: 1.5rem 2rem;
    text-align: center;
    color: #6c757d;
    margin-top: auto;
  }

  footer p {
    margin: 0;
  }
</style>

<div class="layout-container">
  <header>
    <h1 class="site-title">🌐 My SvelteKit Site</h1>

    <nav aria-label="Main navigation">
      <a href="/" class:active={currentPath === '/'}>Home</a>
      <a href="/about" class:active={currentPath.startsWith('/about')}>About</a>
      <a href="/contact" class:active={currentPath.startsWith('/contact')}>Contact</a>
    </nav>
  </header>

  <main>
    {@render children()}
  </main>

  <footer>
    <p>Built with SvelteKit | Activity 08 | W3 Course</p>
  </footer>
</div>

<script>
  import Item from '$lib/Item.svelte';
</script>

<style>
  .about-container {
    max-width: 800px;
    margin: 0 auto;
    background: white;
    border-radius: 12px;
    padding: 3rem;
    box-shadow: 0 4px 16px rgba(0,0,0,0.15);
  }

  h1 {
    font-size: 2.5rem;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 1.5rem;
  }

  .content-section {
    margin-top: 2rem;
    padding: 1.5rem;
    background: #f8f9fa;
    border-radius: 8px;
    border-left: 4px solid #667eea;
  }
</style>

<div class="about-container">
  <h1>📖 About This Project</h1>

  <div class="content-section">
    <h2>Project Overview</h2>
    <p>This project demonstrates the use of SvelteKit for building a modern web application. It includes routing, layouts, and component imports.</p>
  </div>

  <div class="content-section">
    <h2>My Component Import</h2>
    <Item />
  </div>
</div>

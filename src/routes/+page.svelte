<script>
  import Item from '$lib/Item.svelte';
  import Brand from '$lib/Brand.svelte';
</script>

<style>
  .container {
    max-width: 900px;
    margin: 0 auto;
    padding: 3rem 2rem;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  }

  .header {
    text-align: center;
    margin-bottom: 3rem;
    padding-bottom: 2rem;
    border-bottom: 2px solid #e9ecef;
  }

  .header h1 {
    font-size: 2.5rem;
    background: linear-gradient(135deg, #2c50f0 0%, #362bad 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 0.5rem;
  }

  .header p {
    color: #8ac3f6;
    font-size: 1.1rem;
  }

  .section {
    background: white;
    border-radius: 12px;
    padding: 2rem;
    margin-bottom: 2rem;
    box-shadow: 0 2px 8px rgba(0,0,0,0.08);
    transition: transform 0.2s, box-shadow 0.2s;
  }

  .section:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 16px rgba(0,0,0,0.12);
  }

  .section h2 {
    color: #495057;
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
    padding-bottom: 0.5rem;
    border-bottom: 2px solid #667eea;
  }
</style>

<div class="container">
  <div class="header">
    <h1>🏠 Welcome to My SvelteKit Site</h1>
    <p>Routing, layouts, and component imports with SvelteKit</p>
  </div>

  <div class="section">
    <h2>Items I Can See:</h2>
    <Item />
  </div>

  <div class="section">
    <h2>Brands:</h2>
    <Brand />
  </div>
</div>

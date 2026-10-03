<script>
  const brands = [
    "Apple",
    "GAN Cube",
    "MoYu Cube",
    "The Cubicle",
    "Microsoft"
  ];
</script>

<ul class="brand-list">
  {#each brands as brand}
    <li>{brand}</li>
  {/each}
</ul>

<style>
  .brand-list {
    margin: 0;
    padding-left: 1.5rem;
    color: #495057;
    font-size: 1.05rem;
    line-height: 1.8;
  }

  .brand-list li {
    margin-bottom: 0.35rem;
  }
</style>

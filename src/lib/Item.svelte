<script>
  const items = [
    "My laptop screen",
    "The keyboard and trackpad",
    "A MoYu RS3M 2020 cube",
    "A GAN 356 Air SM cube",
    "A YongJoe Meta 3 Cube",
  ];
</script>

<ol class="item-list">
  {#each items as item}
    <li>{item}</li>
  {/each}
</ol>

<style>
  .item-list {
    margin: 0;
    padding-left: 1.5rem;
    color: #495057;
    font-size: 1.05rem;
    line-height: 1.8;
  }

  .item-list li {
    margin-bottom: 0.35rem;
  }
</style>

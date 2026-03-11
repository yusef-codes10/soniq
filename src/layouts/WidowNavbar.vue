<script setup>
</script>

<template>
  <nav>
    <div class="logo">
      <h1>Widow</h1>
    </div>
    <ul class="links">
      <li>Dashboard</li>
      <li>Operations</li>
      <li>Intel</li>
      <li>Assets</li>
    </ul>
    <div class="bt"></div>
  </nav>
</template>

<style scoped>
:root {
  --brand-color: #dd3c27;
  --brand-hover: #ef4646;
  --brand-transition: #150807;

  --bg-color: #080808;
  --bg-secondary: #111111;

  /* ── Typography ── */
  --font-display: 'Rajdhani', 'Orbitron', sans-serif;
  --font-body: 'Share Tech Mono', 'Courier New', monospace;
  --font-ui: 'Exo 2', 'Rajdhani', sans-serif;
}

nav {
  font-family: var(--font);
  padding: 1rem 1.4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: var(--bg-color);
  backdrop-filter: blur(12px);
}
.links {
  display: flex;
  align-items: center;
  gap: 1rem;
  list-style: none;
}
</style>
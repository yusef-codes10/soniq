<script setup></script>

<template>
  <nav>
    <h2 class="logo">Soniq</h2>
    <div class="links">
      <ul>
        <li>Layouts</li>
        <li>buttons</li>
        <li>forms</li>
        <li>Components</li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 1.5rem;
  /* background-color: #d7d6cb; */
  padding: 0.75rem 1rem;
  border-radius: 0.25rem;
  border: solid 0.125rem #121212;

  box-shadow: 0.25rem 0.25rem #121212;
  height: 10dvh;

  background-color: var(--bg-color);
  z-index: 10;
}

ul {
  display: inline-flex;
  list-style-type: none;
  gap: 1rem;
  cursor: pointer;
}
</style>

<script setup></script>

<template>
  <nav>
    <h2 class="logo">
      <RouterLink :to="{ name: 'Home' }">Soniq</RouterLink>
    </h2>
    <div class="links">
      <ul class="hidden">
        <li><RouterLink :to="{ name: 'Layouts' }">Layouts</RouterLink></li>
        <li><RouterLink :to="{ name: 'Buttons' }">Buttons</RouterLink></li>
        <li><RouterLink :to="{ name: 'Forms' }">Forms</RouterLink></li>
        <li><RouterLink :to="{ name: 'Components' }">Components</RouterLink></li>
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

  background-color: var(--brand-color);
  z-index: 10;
}

ul {
  display: inline-flex;
  list-style-type: none;
  gap: 1rem;
  cursor: pointer;
}

a {
  text-decoration: none;
  color: var(--text-color);
}

@media (max-width: 620px) {
  .hidden {
    display: none;
  }
}
</style>

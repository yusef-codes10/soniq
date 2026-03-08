<script setup></script>

<template>
  <div class="home">
    <div class="cta">
      <h1>The Fastest CSS Library Ever</h1>
      <div class="search-input">
        <input type="search" name="" id="" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.home {
  font-size: 1rem;
  /* background-color: var(--bg-color); */
  /* max-height: 90dvh; */
  height: 90dvh;

  display: flex;
  justify-content: center;
  align-content: center;

  background-color: sienna;
}

.search-input {
  width: 100%;
}

input {
  /* padding: 1rem 2rem; */
  width: 100%;
  font-size: 2rem;
  padding: 0.75rem 1rem;
  border-radius: 0.25rem;
  border: solid 0.25rem #121212;

  box-shadow: 0.25rem 0.25rem #121212;

  outline: none;

  transition: translate 200ms, box-shadow 200ms;
}

input:hover {
  translate: 0 0.125rem;
  box-shadow: 0.125rem 0.125rem #121212;
}
</style>

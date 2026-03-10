<script setup>
// the ruter for the search
import { useRouter } from 'vue-router'
import { ref } from 'vue'

const route = useRouter()

const searchQuery = ref('')

const submitSearch = () => {
  if (!searchQuery.value) return

  // here we push to the router of search
  route.push({
    name: 'Search',
    query: { q: searchQuery.value },
  })
  // all;s left is to render the esult to the search view
}
</script>

<template>
  <div class="home">
    <div class="cta">
      <h1>The Fastest CSS Library Ever</h1>
      <div class="search-input">
        <i class="fa-brands fa-sistrix"></i>
        <input
          type="search"
          placeholder="Search ..."
          v-model="searchQuery"
          @keydown.enter="submitSearch"
        />
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
  align-items: center;

  /* background-color: var(--bg-color); */
}

.home h1 {
  font-size: clamp(2rem, 6vw + 0.5rem, 4rem);
  margin: 1rem 0;
}

.search-input {
  width: clamp(280px, 60vw, 700px);
  margin: 0 auto;
  position: relative;
}

.search-input i {
  font-size: 1.7rem;
  position: absolute;
  top: 18px;
  right: 15px;
  z-index: 2;
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

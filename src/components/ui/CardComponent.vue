<script setup>
import { defineProps } from 'vue'

defineProps({
  comp: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div class="card border">
    {{ comp.name }}
    <div class="card-content">
      <div class="preview">
        <slot></slot>
      </div>
    </div>
    <!-- <div class="code">
      <slot name="code" />
    </div> -->
    <button class="border">
      &lt;/&gt;
      <RouterLink :to="{ name: 'Details', params: { slug: comp.slug } }"> Get Code </RouterLink>
    </button>
  </div>
</template>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 100%;
  /* set a reasonable max height to constrain large content */
  max-height: 30rem; /* you can adjust */
  background-color: var(--brand-color);
  padding: 0.75rem 1rem;
  box-sizing: border-box;
  overflow: hidden; /* clips anything outside card, scroll is on inner content */
}

.card-header {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  flex-shrink: 0; /* header stays visible */
}

.card-content {
  flex: 1 1 auto; /* takes remaining space */
  min-height: 200px;
  min-width: 0; /* allows proper shrinking inside flex */
  overflow: auto; /* scrolls if content is too big */
  padding-right: 0.25rem; /* optional, avoids scrollbar overlap */
}

button {
  background: var(--secondary-hover);
  align-self: flex-end;
  cursor: pointer;
  font-size: 1.2rem;
  padding: 6px 12px;
  flex-shrink: 0; /* button stays visible */
}

button:hover {
  background-color: var(--secondary-color);
}

button:active {
  translate: 0 0.125rem;
  box-shadow: 0.125rem 0.125rem #121212;
}

a {
  text-decoration: none;
  color: inherit;
}
</style>
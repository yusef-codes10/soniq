<script setup>
import { defineProps, onMounted } from 'vue'

import Prism from 'prismjs'

import 'prismjs/components/prism-markup'
import 'prismjs/components/prism-css'
import 'prismjs/components/prism-javascript'

import 'prismjs/themes/prism-tomorrow.css'

onMounted(() => {
  Prism.highlightAll()
})

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
  max-height: 50rem; /* you can adjust */
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
  height: 260px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.preview {
  transform: scale(0.65);
  transform-origin: center;
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
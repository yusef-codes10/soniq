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
    This is the card {{ comp.name }}
    <div class="card-content">
      <slot></slot>
    </div>
    <div class="code">
      <slot name="code" />
    </div>
    <button class="border">
      &lt;/&gt;
      <RouterLink :to="{ name: 'Details', params: { slug: comp.slug } }"> Get Code </RouterLink>
    </button>
  </div>
</template>

<style scoped>
.card {
  height: auto;
  /* width: auto; */
  background-color: springgreen;
  font-size: 2rem;
  padding: 0.75rem 1rem;

  display: flex;
  flex-direction: column;
  width: 100%; /* was: auto */
  max-width: 100%;
  overflow: hidden; /* clip anything that still escapes */
  box-sizing: border-box;
}

.card-content {
  flex: 1;
  min-width: 0;
}

.code {
  min-width: 0;
}

button {
  background: var(--brand-color);
  align-self: flex-end;
  justify-self: flex-end;
  cursor: pointer;
  font-size: 1.2rem;
  padding: 6px 12px;
}

button:hover {
  background-color: var(--brand-hover);
}

button:active {
  translate: 0 0.125rem;
  box-shadow: 0.125rem 0.125rem #121212;
}

.card-content,
.code {
  min-width: 0;
}
</style>
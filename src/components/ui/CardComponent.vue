<script setup>
import { defineProps } from 'vue'

defineProps({
  title: {
    type: String,
  },
})
</script>

<template>
  <div class="card border">
    This is the card {{ title }}
    <slot></slot>
    <button class="border">&lt;/&gt; Get Code</button>
  </div>
</template>

<style scoped>
.card {
  height: auto;
  width: 100%;
  background-color: springgreen;
  font-size: 2rem;
  padding: 0.75rem 1rem;

  display: flex;
  flex-direction: column;
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
</style>
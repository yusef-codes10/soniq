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
    <button>&lt;/&gt; Get Code</button>
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
  background: none;
  border: none;
  align-self: flex-end;
  justify-self: flex-end;
}
</style>
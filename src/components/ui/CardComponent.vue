<script setup>
</script>

<template>
  <div class="card border">
    This is the card
    <slot></slot>
  </div>
</template>

<style scoped>
.card {
  height: auto;
  width: 100%;
  background-color: springgreen;
  font-size: 2rem;
  padding: 0.75rem 1rem;
}
</style>
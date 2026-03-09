<script setup>
import { computed } from 'vue'
import parseVueSource from '@/utils/parseVueSource.js'

const props = defineProps({
  source: String,
})

const parsed = computed(() => parseVueSource(props.source))
</script>

<template>
  <div class="code-container">
    <div class="code-header">HTML</div>
    <pre class="code">{{ parsed.template }}</pre>

    <div class="code-header">CSS</div>
    <pre class="code">{{ parsed.styles }}</pre>
  </div>
</template>

<style scoped>
.code-container {
  overflow: auto;
  height: 200px;
}
</style>
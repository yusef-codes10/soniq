<script setup>
import { defineProps, computed } from 'vue'
import CodeSection from '@/components/ui/CodeSection.vue'

const props = defineProps({
  slug: {
    type: String,
    required: true,
  },
})

import { componentsStore } from '@/stores/componentStore.js'

const myStore = componentsStore()

const card = computed(() => {
  const cards = [...myStore.buttonsArray, ...myStore.cardsArray, ...myStore.formsArray]
  return cards.find((el) => el.slug === props.slug)
})
</script>

<template>
  <div class="details">
    <div class="details-page border">
      <div class="title">
        <h3>{{ card?.name }}</h3>
      </div>

      <div class="preview">
        <component :is="card?.component" />
      </div>

      <div class="code-section">
        <CodeSection :source="card?.source" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.details {
  /* min-height: 60dvh; */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 1rem;
}

.details-page {
  position: relative;
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  min-height: 500px;
  height: 600px;
  /* overflow: hidden; */
}

.title {
  position: absolute;
  top: 0rem;
  left: 0rem;
  color: inherit;
  /* background-color: green; */
  font-size: 1.2rem;
  z-index: 10;
  padding: 0.6rem 0.8rem;
}

.preview {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
  border-right: 1px solid #3c3c3c;
  overflow: auto;
}

.code-section {
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

:deep(.code-container) {
  width: 100%;
  height: 100%;
}

/* ── Tablet ── */
@media (max-width: 900px) {
  .details {
    align-items: flex-start;
    padding: 2.5rem 1rem 2rem;
  }

  .details-page {
    width: 100%;
    flex-direction: column;
    height: auto;
    min-height: unset;
  }

  .title {
    position: static;
    padding: 0.75rem 1rem 0;
  }

  .preview {
    min-height: 220px;
    border-right: none;
    border-bottom: 1px solid #3c3c3c;
  }

  .code-section {
    width: 100%;
    height: 400px;
  }
}

/* ── Mobile ── */
@media (max-width: 480px) {
  .details {
    padding: 1.5rem 0.5rem 1rem;
  }

  .details-page {
    width: 100%;
    border-radius: 4px;
  }

  .preview {
    min-height: 180px;
    padding: 1rem;
  }

  .code-section {
    height: 350px;
  }
}
</style>
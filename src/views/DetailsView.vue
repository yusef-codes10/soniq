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

console.log(myStore.buttonsArray)
console.log(myStore.cardsArray)
console.log(card.value)

// utility
// import parseVueSource from '@/utils/parseVueSource.js'

// const parsed = computed(() => parseVueSource(card.value.source))
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

      <CodeSection :source="card?.source" />
    </div>
  </div>
</template>
<style scoped>
.details {
  height: 90dvh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.details-page {
  width: 80%;
  background-color: red;
  /* border: 2px solid green; */
  display: flex;
  justify-content: space-between;
  min-height: 500px;
  height: 500px; /* establishes real height */
}

.preview {
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

/* FIXME: center this text */
.preview h2 {
  /* justify-self: flex-start; */
  align-self: flex-start;
  text-align: center;
}
</style>
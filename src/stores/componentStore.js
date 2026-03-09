import { defineStore } from 'pinia'
import { ref } from 'vue'
import buttons from '@/data/buttons.js'
import cards from '@/data/cards.js'

export const componentsStore = defineStore('components', () => {
  // now what we ahve to do is to use and define every sinhle array here
  // also combine/merge all the arrays here, need them on search
  //  * state
  const buttonsArray = ref(buttons)
  const cardsArray = ref(cards)

  return {
    buttonsArray,
    cards,
  }
})

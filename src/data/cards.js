import CardComp1 from '@/components/cards/CardComp1.vue'
import CardComp1Source from '@/components/cards/CardComp1.vue?raw'

import CardComp2 from '@/components/cards/CardComp2.vue'
import CardComp2Source from '@/components/cards/CardComp2.vue?raw'

import CardComp3 from '@/components/cards/CardComp3.vue'
import CardComp3Source from '@/components/cards/CardComp3.vue?raw'

import CardComp4 from '@/components/cards/CardComp4.vue'
import CardComp4Source from '@/components/cards/CardComp4.vue?raw'
import { markRaw } from 'vue'

// this is the cards file
const cards = [
  {
    id: 1,
    name: 'card-1',
    slug: 'card-1',
    component: markRaw(CardComp1),
    source: CardComp1Source,
  },
  {
    id: 2,
    name: 'card-2',
    slug: 'card-2',
    component: markRaw(CardComp2),
    source: CardComp2Source,
  },
  {
    id: 3,
    name: 'card-3',
    slug: 'card-3',
    component: markRaw(CardComp3),
    source: CardComp3Source,
  },
  {
    id: 4,
    name: 'card-4',
    slug: 'card-4',
    component: markRaw(CardComp4),
    source: CardComp4Source,
  },
]

export default cards

// ! having the code source as an attribute is not scalable whatsoever
// ! we can use vite raw attribute

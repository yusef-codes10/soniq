import ButtonComp1 from '@/components/buttons/ButtonComp1.vue'
import ButtonComp1Source from '@/components/buttons/ButtonComp1.vue?raw'

// buttons array
const buttons = [
  {
    id: 1,
    name: 'Retro Button',
    component: ButtonComp1,
    html: `
  <button>Retro</button>

        `,
    css: `
        button {
  background-color: var(--secondary-color);
  font-family: 'Jersey 10', sans-serif;
  font-size: 1.5rem;
  /* background-color: #d7d6cb; */
  padding: 0.75rem 1rem;
  border-radius: 0.25rem;
  border: solid 0.125rem #121212;

  box-shadow: 0.25rem 0.25rem #121212;

  cursor: pointer;

  transition: translate 200ms, box-shadow 200ms;
}

button:active {
  translate: 0 0.125rem;
  box-shadow: 0.125rem 0.125rem #121212;
}
        
        `,
  },
]

export default buttons

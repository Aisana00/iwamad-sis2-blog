import type { Post } from '../types'

export const posts: Post[] = [
  {
    id: 1,
    title: 'Why I Started Learning React',
    author: 'Manas',
    date: '2026-09-02',
    tags: ['react', 'study'],
    excerpt: 'Plain HTML pages got repetitive. Components promised a way out.',
    body: [
      'At the start of the semester every page I built repeated the same header and footer.',
      'React lets me write the header once as a component and reuse it on every page.',
    ],
  },
  {
    id: 2,
    title: 'TypeScript Saved Me From Myself',
    author: 'Manas',
    date: '2026-09-10',
    tags: ['typescript'],
    excerpt: 'A typo in a prop name used to cost me an hour. Now it costs a red line.',
    body: [
      'With types the editor tells me when I pass a string where a number is expected.',
      'Typing props with an interface made my components easier to read as well.',
    ],
  },
  {
    id: 3,
    title: 'Routing Without Page Reloads',
    author: 'Manas',
    date: '2026-09-18',
    tags: ['react-router'],
    excerpt: 'How a single-page app changes pages while the header stays put.',
    body: [
      'React Router swaps only the part of the page inside the Outlet.',
      'NavLink knows which page is active, so the menu marks it automatically.',
    ],
  },
  {
    id: 4,
    title: 'State: The Memory of a Component',
    author: 'Manas',
    date: '2026-09-27',
    tags: ['react', 'state'],
    excerpt: 'useState is the reason a like button remembers it was clicked.',
    body: [
      'A component re-renders when its state changes, and the screen updates at once.',
      'Keeping likes in Context lets every post keep its own count across pages.',
    ],
  },
  {
    id: 5,
    title: 'Writing My First Tests',
    author: 'Manas',
    date: '2026-10-05',
    tags: ['testing', 'vitest'],
    excerpt: 'Vitest and Testing Library check my app the way a reader uses it.',
    body: [
      'Testing Library renders a component and lets me click it with userEvent.',
      'If a test turns red after a change, I know exactly what I broke.',
    ],
  },
]

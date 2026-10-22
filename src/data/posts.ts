import type { Post } from '../types'

export const posts: Post[] = [
  {
    id: 1,
    title: 'Third Year of IT Management at KBTU',
    author: 'Aisana',
    date: '2026-09-02',
    tags: ['kbtu', 'study'],
    excerpt: 'Why a manager-to-be is learning to write React code.',
    body: [
      'I study IT Management at KBTU, and this year we finally build real web apps.',
      'A manager who understands how the code works can plan tasks and talk to developers much better.',
    ],
  },
  {
    id: 2,
    title: 'TypeScript Catches My Mistakes Early',
    author: 'Aisana',
    date: '2026-09-10',
    tags: ['typescript'],
    excerpt: 'A typo in a prop name used to break the page. Now the editor warns me first.',
    body: [
      'With types, VS Code shows a red line when I pass the wrong kind of data.',
      'Describing props with an interface also makes my components easier to read.',
    ],
  },
  {
    id: 3,
    title: 'Routing Without Page Reloads',
    author: 'Aisana',
    date: '2026-09-18',
    tags: ['react-router'],
    excerpt: 'How one page app changes pages while the header stays in place.',
    body: [
      'React Router only swaps the part of the page inside the Outlet.',
      'NavLink knows which page is open, so the menu highlights it by itself.',
    ],
  },
  {
    id: 4,
    title: 'State Is the Memory of a Component',
    author: 'Aisana',
    date: '2026-09-27',
    tags: ['react', 'state'],
    excerpt: 'useState is the reason a like button remembers that I clicked it.',
    body: [
      'When state changes, React renders the component again and the screen updates.',
      'I keep likes in Context, so every post keeps its own like across pages.',
    ],
  },
  {
    id: 5,
    title: 'Managing My Deadlines Like a Project',
    author: 'Aisana',
    date: '2026-10-05',
    tags: ['management', 'study'],
    excerpt: 'Using what I learn in project management to survive the semester.',
    body: [
      'I split every assignment into small tasks and give each one a day, like a sprint.',
      'Small commits on GitHub work the same way: steady progress instead of one night before the deadline.',
    ],
  },
]
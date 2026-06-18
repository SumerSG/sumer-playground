import { configureStore, createSlice } from '@reduxjs/toolkit'

const initialPosts = [
  {
    id: 1,
    title: 'Bridging Hardware and Business Strategy',
    excerpt: 'How my background in electrical engineering informs my approach to product management and strategic decision-making in tech.',
    date: '2024-01-15',
    tag: 'Strategy',
    readTime: '5 min read',
  },
  {
    id: 2,
    title: 'React Performance Patterns in Enterprise Apps',
    excerpt: 'Lessons learned from optimizing large-scale React applications using Redux Toolkit and modern state management practices.',
    date: '2024-02-22',
    tag: 'Engineering',
    readTime: '8 min read',
  },
  {
    id: 3,
    title: 'The Future of AI in Traditional Industries',
    excerpt: 'Reflections from my internship at ai& on how artificial intelligence is reshaping legacy sectors and creating new value.',
    date: '2024-03-10',
    tag: 'AI',
    readTime: '6 min read',
  },
]

const blogSlice = createSlice({
  name: 'blog',
  initialState: {
    posts: initialPosts,
    filter: 'All',
  },
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload
    },
  },
})

export const { setFilter } = blogSlice.actions

export const store = configureStore({
  reducer: {
    blog: blogSlice.reducer,
  },
})

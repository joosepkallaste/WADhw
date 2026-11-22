import { createStore } from 'vuex'

export default createStore({
  strict: true,
  state: {
    posts: [
      {
        id: 1,
        author: "Indrek",
        createdAt: "October 6, 2026",
        text: "A quiet street in Tartu.",
        image: "https://picsum.photos/id/22/600/360",
        likes: 21
      },
      {
        id: 2,
        author: "Markus",
        createdAt: "October 6, 2026",
        text: "Coffee before the morning lecture.",
        image: null,
        likes: 11
      },
      {
        id: 3,
        author: "Tiit",
        createdAt: "October 6, 2026",
        text: "Got absolutely knackered here.",
        image: "https://picsum.photos/id/22/600/360",
        likes: 5
      },
      {
        id: 4,
        author: "Raz",
        createdAt: "October 6, 2026",
        text: "What a lad.",
        image: null,
        likes: 8
      },
      {
        id: 5,
        author: "Athena",
        createdAt: "October 5, 2026",
        text: "On this street a bloke got silly drunk and past out.",
        image: "https://picsum.photos/id/22/600/360",
        likes: 14
      },
      {
        id: 6,
        author: "Boris",
        createdAt: "October 5, 2026",
        text: "Guten morgen!",
        image: null,
        likes: 3
      },
      {
        id: 7,
        author: "Ingrid",
        createdAt: "October 5, 2026",
        text: "Lovely weather",
        image: "https://picsum.photos/id/16/600/360",
        likes: 19
      },
      {
        id: 8,
        author: "Maks",
        createdAt: "October 4, 2026",
        text: "What a wonderful day",
        image: null,
        likes: 7
      },
      {
        id: 9,
        author: "CHarlotte",
        createdAt: "October 3, 2026",
        text: "wazzzup!",
        image: null,
        likes: 4
      },
      {
        id: 10,
        author: "Mater",
        createdAt: "October 3, 2026",
        text: "Waaaazzzzzzzuup!",
        image: "https://picsum.photos/seed/weekend/600/360",
        likes: 12
      }
    ]
  },
  mutations: {
    INCREMENT_LIKE(state, postId) {
      const post = state.posts.find(p => p.id === postId)
      if (post) {
        post.likes += 1
      }
    },
    RESET_LIKES(state) {
      state.posts.forEach(post => {
        post.likes = 0
      })
    }
  },
  actions: {
    likePost({ commit }, postId) {
      commit('INCREMENT_LIKE', postId)
    },
    resetLikes({ commit }) {
      commit('RESET_LIKES')
    }
  }
})
<template>
  <section class="feed" aria-label="Posts">
    <PostComponent
      v-for="post in posts"
      :key="post.id"
      :post="post"
    />

    <button type="button" class="reset-btn" @click="resetLikes">
      Reset likes
    </button>
  </section>
</template>

<script>
import PostComponent from "@/components/Post.vue"

export default {
  name: "MainView",
  components: {
    PostComponent
  },
  computed: {
    posts() {
      return this.$store.state.posts
    }
  },
  methods: {
    resetLikes() {
      this.$store.dispatch("resetLikes")
    }
  }
}
</script>

<style scoped>
.feed {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
}

.reset-btn {
  margin-top: 10px;
  padding: 10px 24px;
  background: #6c9bd1;
  color: #111;
  font-weight: bold;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-size: 1rem;
}

.reset-btn:hover {
  background: #5585bd;
}
</style>
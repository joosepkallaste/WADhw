<template>
  <article class="post-card">
    <header class="post-header">
      <div class="author-info">
        <img src="/profile.svg" alt="Profile" class="avatar" />
        <span>{{ post.author }}</span>
      </div>
      <time>{{ post.createdAt }}</time>
    </header>

    <img
      v-if="post.image"
      :src="post.image"
      :alt="post.author + '\'s post image'"
      class="post-image"
    />

    <p class="post-text">{{ post.text }}</p>

    <div class="post-footer">
      <button type="button" class="like-btn" @click="likePost">
        👍 Like
      </button>
      <span class="likes-count">{{ post.likes }} likes</span>
    </div>
  </article>
</template>

<script>
export default {
  name: "PostComponent",
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  methods: {
    likePost() {
      this.$store.dispatch("likePost", this.post.id)
    }
  }
}
</script>

<style scoped>
.post-card {
  width: min(100%, 430px);
  margin: 0 auto;
  background: #dedede;
  border-radius: 8px;
  padding: 14px;
}

.post-header {
  margin: 0 0 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  font-size: 0.9rem;
}

.author-info {
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: bold;
}

.avatar {
  width: 32px;
  height: 32px;
}

.post-image {
  width: 100%;
  max-height: 260px;
  object-fit: cover;
  border-radius: 4px;
}

.post-text {
  margin: 10px 0;
  text-align: left;
}

.post-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 8px;
}

.like-btn {
  background: #345d86;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 6px 12px;
  cursor: pointer;
  font-size: 0.95rem;
}

.like-btn:hover {
  background: #274768;
}

.likes-count {
  font-weight: bold;
}
</style>
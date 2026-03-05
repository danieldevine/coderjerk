<script setup>
import { data as posts } from "./posts.data.js";

const props = defineProps({
  title: { type: String, default: "Latest Posts" },
});
</script>

<template>
  <div class="latest-posts">
    <div class="header">
      <h2 v-if="props.title">{{ props.title }}</h2>
    </div>
    <div class="posts">
      <a v-for="post in posts" :key="post.url" :href="post.url" class="post">
        <h3>{{ post.frontmatter.title }}</h3>
        <p v-if="post.frontmatter.description">
          {{ post.frontmatter.description }}
        </p>
        <time v-if="post.frontmatter.date">{{
          new Date(post.frontmatter.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })
        }}</time>
      </a>
    </div>
  </div>
</template>

<style scoped>
.latest-posts {
  max-width: 1152px;
  margin: 0 auto;
  padding: 2rem 1.5rem 4rem;
}

.header h2 {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
}

.posts {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.25rem;
}

.post {
  display: block;
  padding: 1.25rem;
  border-radius: 8px;
  border: 1px solid var(--vp-c-divider);
  text-decoration: none;
  transition: border-color 0.2s;
}

.post:hover {
  border-color: var(--vp-c-brand-1);
}

.post h3 {
  font-size: 1rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin-bottom: 0.5rem;
}

.post p {
  font-size: 0.875rem;
  color: var(--vp-c-text-2);
  margin-bottom: 0.5rem;
  line-height: 1.5;
}

.post time {
  font-size: 0.8rem;
  color: var(--vp-c-text-3);
}
</style>

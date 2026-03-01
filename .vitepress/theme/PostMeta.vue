<script setup>
import { useData } from "vitepress";
const { frontmatter } = useData();
</script>

<template>
  <h1 v-if="frontmatter.title" class="blog__title">{{ frontmatter.title }}</h1>
  <div
    v-if="frontmatter.date || frontmatter.tags || frontmatter.author"
    class="post-meta"
  >
    <div v-if="frontmatter.date || frontmatter.author" class="byline">
      <span v-if="frontmatter.author" class="author">{{
        frontmatter.author
      }}</span>
      <span v-if="frontmatter.author && frontmatter.date" class="separator"
        >&middot;</span
      >
      <time v-if="frontmatter.date" class="date">{{
        new Date(frontmatter.date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })
      }}</time>
    </div>
    <div v-if="frontmatter.tags" class="tags">
      <span v-for="tag in frontmatter.tags" :key="tag" class="tag">{{
        tag
      }}</span>
    </div>
  </div>
</template>

<style scoped>
.blog__title {
  font-size: 4rem;
  line-height: normal;
  margin-bottom: 1.5rem;
  font-weight: 900;
}
.post-meta {
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid var(--vp-c-divider);
}

.byline {
  margin-bottom: 1rem;
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
}

.separator {
  margin: 0 0.4rem;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-top: 0.5rem;
}

.tag {
  font-size: 0.8rem;
  padding: 0.15rem 0.5rem;
  border-radius: 4px;
  background: var(--vp-c-default-soft);
  color: var(--vp-c-text-2);
}
</style>

---
layout: home

hero:
  name: "Coderjerk"
  text: "Stuff about web development"
  tagline: by Dan Devine
  actions:
    - theme: brand
      text: Read The Blog
      link: /blog/
    - theme: alt
      text: The Stuff
      link: /stuff
---

<script setup>
import LatestPosts from './.vitepress/theme/LatestPosts.vue'
</script>

<LatestPosts />

<script setup>
const items = [
  {
    title: "Meantain",
    url: "https://www.meantain.com",
    description:
      "A powerful website maintenance and management platform that I'm currently building",
  },
  {
    title: "Personal Github",
    url: "https://github.com/danieldevine",
    description: "Where all the crap lives",
  },
  {
    title: "Icenberg",
    url: "https://github.com/maverick-international/Icenberg",
    description:
      "Cleans up and simplifies ACF templates which often involve a lot of repetition and logic tangled up in presentation (in true WordPress style).",
  },
  {
    title: "Bird Elephant",
    url: "https://birdelephant.com",
    description:
      "A PHP library for the Twitter API v2, making it easy to interact with tweets, users, spaces, and more. On the slide since X came along.",
  },
  {
    title: "Hank's Inferno",
    url: "https://hanks-inferno.coderjerk.com",
    description:
      "Dante's Inferno told through the works of Hank Williams, old bot.",
  },
  {
    title: "Maverick",
    url: "https://www.maverick-intl.com",
    description: "Where I work.",
  },
];
</script>

<template>
  <div class="stuff-cards">
    <a
      v-for="item in items"
      :key="item.url"
      :href="item.url"
      target="_blank"
      rel="noopener noreferrer"
      class="card"
    >
      <h3>{{ item.title }}</h3>
      <p class="description">{{ item.description }}</p>
      <span class="link">{{ item.url }}</span>
    </a>
  </div>
</template>

<style scoped>
.stuff-cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.25rem;
  margin-top: 1.5rem;
}

.card {
  display: block;
  padding: 1.25rem;
  border-radius: 8px;
  border: 1px solid var(--vp-c-divider);
  text-decoration: none;
  transition:
    border-color 0.2s,
    box-shadow 0.2s;
}

.card:hover {
  border-color: var(--vp-c-brand-1);
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
}

.card h3 {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin: 0 0 0.5rem;
}

.card .description {
  font-size: 0.875rem;
  color: var(--vp-c-text-2);
  line-height: 1.5;
  margin: 0 0 0.75rem;
}

.card .link {
  font-size: 0.8rem;
  color: var(--vp-c-brand-1);
  word-break: break-all;
}
</style>

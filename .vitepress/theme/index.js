import DefaultTheme from "vitepress/theme";
import { h } from "vue";
import PostMeta from "./PostMeta.vue";

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      "doc-before": () => h(PostMeta),
    });
  },
};

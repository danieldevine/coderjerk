import DefaultTheme from "vitepress/theme";
import { h } from "vue";
import PostMeta from "./PostMeta.vue";

const GtmNoscript = {
  setup() {
    return () =>
      h("noscript", null, [
        h("iframe", {
          src: "https://www.googletagmanager.com/ns.html?id=GTM-NJZFPW",
          height: "0",
          width: "0",
          style: "display:none;visibility:hidden",
        }),
      ]);
  },
};

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      "layout-top": () => h(GtmNoscript),
      "doc-before": () => h(PostMeta),
    });
  },
};

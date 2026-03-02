import { defineConfig } from "vitepress";
import markDownItFootnote from "markdown-it-footnote";

export default defineConfig({
  title: "Coderjerk",
  description: "Stuff about web development",
  cleanUrls: true,
  srcExclude: ["README.md"],

  head: [
    [
      "script",
      {},
      `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NJZFPW');`,
    ],
  ],
  themeConfig: {
    logo: { light: "/logo.svg", dark: "/logo-dark.svg" },
    siteTitle: false,
    nav: [
      { text: "Home", link: "/" },
      { text: "Blog", link: "/blog/" },
      // { text: "Articles", link: "/articles/" },
      { text: "About", link: "/about" },
      { text: "Stuff", link: "/stuff" },
    ],

    sidebar: {
      "/blog/": [
        {
          text: "Blog Posts",
          items: [
            { text: "Introducing Icenberg", link: "/blog/icenberg" },
            {
              text: "Gifting Labour to Big Business",
              link: "/blog/gifting-labour-to-big-business",
            },
            {
              text: "The Complicated Futility of WordPress",
              link: "/blog/the-complicated-futility-of-wordpress",
            },
            {
              text: "Why I Wrote a Twitter Library",
              link: "blog/bird-elephant-why-i-wrote-my-own-twitter-apiv2-library.md",
            },
          ],
        },
      ],
      "/articles/": [
        {
          text: "Articles",
          items: [],
        },
      ],
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/danieldevine/coderjerk" },
    ],
  },
  markdown: {
    config: (md) => {
      md.use(markDownItFootnote);
    },
  },
});

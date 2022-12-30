<template>
  <div class="portfolio">
    <h1>Portfolio</h1>
    <GlobalFilter :elements="elements" filter-key="topics" />
  </div>
</template>

<script>
import { useMeta } from "vue-meta";
import GlobalFilter from "@/components/Filter/GlobalFilter.vue";
import repos from "@/assets/repos.json";

export default {
  name: "PortfolioView",
  components: { GlobalFilter },
  data() {
    return {
      elements: repos.reduce((acc, el) => {
        acc.push({
          alt: el.name + " - " + el.description,
          src: `https://opengraph.githubassets.com/28bc32c10307ac96cd8440175fb12189086d58f013d3b2fa91a585056d0e2db0/${el.full_name}`,
          topics: el.topics,
          width: "400",
          url: el.html_url,
        });
        return acc;
      }, []),
    };
  },
  setup() {
    useMeta({
      title: "Portfolio",
    });
  },
};
</script>

<style scoped>
h1 {
  margin-bottom: 2rem;
}
</style>

<template>
  <div class="readme" v-html="readme">
  </div>
</template>

<script>
import repos from "@/assets/repos.json";
import { marked } from "marked";

export default {
  name: "PortfolioDetails",
  data() {
    return {
      repo: repos.find((repo) => repo.id === parseInt(this.$route.params.id)),
      repos,
      readme: null,
    };
  },
  async mounted() {
    this.readme = await fetch(`https://raw.githubusercontent.com/${this.repo.full_name}/${this.repo.default_branch}/README.md`).then((res) => res.text());
    this.readme = marked(this.readme);
  },
};
</script>

<style scoped></style>

<template>
  <div class="portfolio">
    <h1>This is an portfolio page</h1>
  </div>
</template>

<script>
import {useMeta} from "vue-meta";

export default {
  name: "PortfolioView",
  setup() {
    useMeta({
      title: "Portfolio",
    });
  },
};
</script>

<style scoped>

</style>
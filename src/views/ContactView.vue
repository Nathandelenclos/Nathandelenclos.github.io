<template>
  <div class="contact">
    <h1>This is an contact page</h1>
  </div>
</template>

<script>
import {useMeta} from "vue-meta";

export default {
  name: "ContactView",
  setup() {
    useMeta({
      title: "Contact",
    });
  },
};
</script>

<style scoped>

</style>
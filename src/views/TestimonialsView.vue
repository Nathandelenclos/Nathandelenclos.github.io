<template>
  <div class="testimonials">
    <h1>This is an testimonials page</h1>
  </div>
</template>

<script>
import { useMeta } from "vue-meta";

export default {
  name: "TestimonialsView",
  setup() {
    useMeta({
      title: "Testimonials",
    });
  },
};
</script>

<style scoped></style>

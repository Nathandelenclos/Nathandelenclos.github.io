<template>
  <a :href="url" target="_blank"><img v-bind="$props" /></a>
</template>

<script>
export default {
  name: "ElementFilter",
  props: {
    alt: String,
    src: String,
    width: String,
    url: String,
  },
};
</script>

<style scoped>
img {
  transition-duration: 0.2s;
  max-width: 100%;
  box-shadow: 10px 10px 40px -18px rgba(0,0,0,0.75);
  -webkit-box-shadow: 10px 10px 40px -18px rgba(0,0,0,0.75);
  -moz-box-shadow: 10px 10px 40px -18px rgba(0,0,0,0.75);
}
img:hover {
  transform: scale(1.2);
}
</style>
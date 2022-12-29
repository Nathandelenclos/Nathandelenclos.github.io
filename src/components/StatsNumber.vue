<template>
  <div class="stats">
    <h4>{{ number }}</h4>
    <p>{{ title }}</p>
  </div>
</template>

<script>
export default {
  name: "StatsNumber",
  props: ["number", "title"],
};
</script>

<style scoped>
.stats {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.stats > p {
  font-weight: bold;
  font-size: 20px;
}
.stats > h4 {
  font-weight: bold;
  font-size: 42px;
  line-height: 1;
}
</style>
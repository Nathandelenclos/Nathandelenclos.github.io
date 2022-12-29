<template>
  <div class="stats">
    <h4>0</h4>
    <p>{{ title }}</p>
  </div>
</template>

<script>
export default {
  name: "StatsNumber",
  props: ["number", "title"],
  mounted() {
    let actual = 0;
    for (let i = 0; i < 20; i++) {
      setTimeout(() => {
        actual += parseInt(this.$props.number) / 20;
        this.$el.querySelector("h4").innerHTML = Math.floor(actual);
      }, Math.pow(i, 2.5));
    }
  },
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
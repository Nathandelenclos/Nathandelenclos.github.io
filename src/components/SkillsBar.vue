<template>
  <div class="skillsBar">
    <div class="title-skills">
      <p>{{ title }}</p>
      <p>{{ percent }}%</p>
    </div>
    <div class="container">
      <div class="skills" style="width: 0%"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "skillsBar",
  props: ["percent", "title"],
  mounted() {
    let actual = 0;
    for (let i = 0; i < 100; i++) {
      setTimeout(() => {
        actual += this.$props.percent / 100;
        this.$el.querySelector(".skills").style.width = actual + "%";
      }, Math.pow(i, 1.6));
    }
  },
};
</script>

<style scoped>
.title-skills {
  display: flex;
  justify-content: space-between;
}
.container {
  width: 100%;
  height: 15px;
  background-color: var(--belge-third);
}

.skills {
  height: 15px;
  background-color: var(--blue);
  text-align: right;
  color: white;
}
</style>
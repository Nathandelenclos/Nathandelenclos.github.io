<template>
  <div class="title-skills">
    <p>{{ title }}</p>
    <p>{{ percent }}%</p>
  </div>
  <div class="container">
    <div class="skills" v-bind:style="style()"></div>
  </div>
</template>

<script>
export default {
  name: "skillsBar",
  props: ["percent", "title"],
  data() {
    return {
      style: () => {
        return `width: ${this.$props.percent}%;`;
      },
    };
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
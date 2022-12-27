<template>
  <a target="_blank" v-bind:href="link">
    <img v-bind:src="src()" v-bind:alt="type + ' icon'" class="icon" />
  </a>
</template>

<script>
import github from "../../assets/icons/icon_github.svg";
import facebook from "../../assets/icons/icon_facebook.svg";
import instagram from "../../assets/icons/icon_instagram.svg";
import linkedin from "../../assets/icons/icon_linkedin.svg";
export default {
  name: "iconLinks",
  props: ["link", "type"],
  data() {
    return {
      src: () => {
        switch (this.$props.type) {
          case "github":
            return github;
          case "facebook":
            return facebook;
          case "instagram":
            return instagram;
          case "linkedin":
            return linkedin;
        }
      },
    };
  },
  mounted() {
    console.log(this.src());
  },
};
</script>

<style scoped>
.icon {
  width: 24px;
  transition-duration: 0.2s;
}
.icon:hover {
  transform: scale(1.5);
}
</style>

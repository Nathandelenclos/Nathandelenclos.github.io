<template>
  <h1>Resume</h1>
  <p>
    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry's standard dummy text ever since the
    1500s, when an unknown printer took a galley of type and scrambled it to
    make a type specimen book. It has survived not only five centuries, but also
    the leap into electronic typesetting, remaining essentially unchanged. It
    was popularised in the 1960s with the release of Letraset sheets containing
    Lorem Ipsum passages, and more recently with desktop publishing software
    like Aldus PageMaker including versions of Lorem Ipsum.
  </p>
  <h2>TimeLine</h2>
  <TimeLine style="margin-top: 2rem">
    <TimeLineElement v-for="item of timeline" :side="item.side" class="opacity-animate">
      <h2>{{ item.title }}</h2>
      <p>
        {{ item.content }}
      </p>
    </TimeLineElement>
  </TimeLine>
</template>

<script>
import TimeLine from "@/components/TimeLine.vue";
import TimeLineElement from "@/components/timeLineElement.vue";

export default {
  name: "ResumeView",
  components: { TimeLineElement, TimeLine },
  data() {
    return {
      timeline: [
        {
          title: "2022",
          content:
            "Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. " +
            "Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.",
          side: "left",
        },
        {
          title: "2021",
          content:
            "Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. " +
            "Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.",
          side: "right",
        },
        {
          title: "2020",
          content:
            "Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. " +
            "Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.",
          side: "left",
        },
        {
          title: "2019",
          content:
            "Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. " +
            "Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.",
          side: "right",
        },
        {
          title: "2018",
          content:
            "Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. " +
            "Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.",
          side: "left",
        },
      ],
    };
  },
  mounted() {
    let time = 100;
    for (let section of document.getElementsByClassName("opacity-animate")) {
      setTimeout(() => {
        section.style.opacity = "1";
      }, time);
      time += 250;
    }
  },
};
</script>

<style scoped>
h2 {
  margin-top: 2rem;
}
.opacity-animate {
  transition: opacity 1s;
  opacity: 0;
}
</style>

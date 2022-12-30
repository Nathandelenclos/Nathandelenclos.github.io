<template>
  <div class="filter">
    <div class="btn-filters">
      <button @click="filterSelection('all')" class="active">all</button>
      <button v-for="type in filtersType" @click="filterSelection(type)">
        {{ type }}
      </button>
    </div>
    <div class="elements-filter">
      <component v-for="item in elements" :is="item.component ?? ElementFilter" v-bind="item" :class="'filter-element ' + item[filterKey].join(' ') + ' show'">
        {{ item }}
      </component>
    </div>
  </div>
</template>

<script>
import ElementFilter from "@/components/Filter/ElementFilter.vue";

export default {
  name: "GlobalFilter",
  computed: {
    ElementFilter() {
      return ElementFilter;
    },
  },
  props: {
    elements: Object,
    filterKey: String,
  },
  methods: {
    filterSelection(type) {
      const elements = this.$el.querySelector(".elements-filter").children;
      const buttons = this.$el.querySelector(".btn-filters").children;
      for (let element of elements) {
        const classList = element.className.split(" ");
        if (classList.includes("show")) {
          classList.splice(classList.indexOf("show"), 1);
        }
        if (classList.includes(type)) {
          classList.push("show");
        }
        if (type === "all") {
          classList.push("show");
        }
        element.className = classList.join(" ");
      }
      for (let button of buttons) {
        const classList = button.className.split(" ");
        if (classList.includes("active")) {
          classList.splice(classList.indexOf("active"), 1);
        }
        if (button.innerHTML === type) {
          classList.push("active");
        }
        button.className = classList.join(" ");
      }
    },
  },
  data() {
    return {
      filtersType: [
        ...new Set(
          this.$props.elements.reduce((acc, element) => {
            acc.push(...element[this.$props.filterKey]);
            return acc;
          }, [])
        ),
      ],
    };
  },
};
</script>

<style scoped>
.elements-filter {
  display: flex;
  flex-wrap: wrap;
  margin: 2rem 0;
  justify-content: space-evenly;
  gap: 1rem;
}
.btn-filters {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
}
.filter-element {
  display: none;
  transition-duration: 0.2s;
}
.show {
  display: block;
}
.active {
  background-color: var(--blue);
  color: var(--belge-third);
}
.active:hover {
  background-color: var(--blue);
}
button {
  padding: 15px 32px;
  background-color: var(--belge-second);
  font-size: 16px;
  border: none;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  border-radius: 5%;
  transition-duration: 0.5s;
  text-transform: uppercase;
  box-shadow: 10px 9px 22px 0px rgba(0,0,0,0.27);
  -webkit-box-shadow: 10px 9px 22px 0px rgba(0,0,0,0.27);
  -moz-box-shadow: 10px 9px 22px 0px rgba(0,0,0,0.27);
}
button:hover {
  background-color: var(--belge-first);
}
@media screen and (max-width: 700px) {
  .elements-filter {
    flex-direction: column;
    align-content: center;
  }
  .btn-filters {
    justify-content: space-around;
  }
}
</style>

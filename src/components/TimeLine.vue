<template>
  <div class="timeline">
    <slot />
  </div>
</template>

<script>
export default {
  name: "TimeLine",
}
</script>

<style scoped>
.timeline {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
}

.timeline::after {
  content: '';
  position: absolute;
  width: 6px;
  background-color: var(--belge-third);
  top: 0;
  bottom: 0;
  left: 50%;
  margin-left: -3px;
}

@media screen and (max-width: 600px) {
  .timeline::after {
    left: 31px;
  }
}
</style>
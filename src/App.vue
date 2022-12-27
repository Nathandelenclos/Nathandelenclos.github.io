<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import IconLinks from "@/components/icons/iconLinks.vue";
</script>

<template>
  <nav>
    <img src="./assets/me.webp" alt="profile" id="profile" />
    <h1>Nathan<br />Delenclos</h1>
    <div class="link">
      <icon-links
        link="https://www.instagram.com/delenclosnathan/?hl=fr"
        type="instagram"
      ></icon-links>
      <icon-links
        link="https://www.facebook.com/profile.php?id=100012122866827"
        type="facebook"
      ></icon-links>
      <icon-links
        link="https://github.com/Nathandelenclos"
        type="github"
      ></icon-links>
      <icon-links
        link="https://www.linkedin.com/in/nathan-delenclos/"
        type="linkedin"
      ></icon-links>
    </div>
    <div class="navigation">
      <RouterLink to="/">
        <img src="./assets/icons/icon_user.svg" alt="icon user"/>
        About
      </RouterLink>
      <RouterLink to="/resume">
        <img src="./assets/icons/icon_file.svg" alt="icon user"/>
        Resume
      </RouterLink>
      <RouterLink to="/portfolio">
        <img src="./assets/icons/icon_wallet.svg" alt="icon user" />
        Portfolio
      </RouterLink>
      <RouterLink to="/testimonials">
        <img src="./assets/icons/icon_comment_bubble.svg" alt="icon user"/>
        Testimonials
      </RouterLink>
      <RouterLink to="/contact">
        <img src="./assets/icons/icon_send.svg" alt="icon send"/>
        Contact
      </RouterLink>
    </div>
    <img src="./assets/icons/back.svg" alt="back" id="back" />
  </nav>

  <main>
    <RouterView />
  </main>
</template>

<style scoped>
nav {
  width: 600px;
  height: 100%;
  background-color: var(--blue);
  display: flex;
  flex-direction: column;
  align-items: center;
}
nav > img {
  width: 70%;
  border-radius: 50%;
  margin-top: 1rem;
  margin-bottom: 1rem;
}
nav > h1 {
  color: var(--belge-first);
  margin-bottom: 1rem;
  font-size: 35px;
  line-height: normal;
}
.navigation {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 50%;
  justify-content: space-evenly;
}

.link {
  margin-top: 1rem;
  display: flex;
  width: 75%;
  justify-content: space-evenly;
  color: white;
  fill: var(--belge-second);
}
a {
  display: flex;
  gap: 10px;
  font-size: 20px;
  color: var(--belge-second);
  text-decoration: none;
}
a:hover {
  color: var(--belge-third);
}
#back {
  width: 40%;
  margin-top: 2rem;
}
main {
  margin: 2rem 4rem;
}
</style>

<script lang="ts">
import IconLinks from "@/components/icons/iconLinks.vue";
import { useMeta } from "vue-meta";
export default {
  name: "App",
  components: { IconLinks },
  setup() {
    useMeta({
      title: "",
      description: "Website of Nathan Delenclos",
    });
  },
  methods: {
    hiddenOrShow(event: any) {
      const width = parseInt(
        document.getElementsByTagName("nav")[0]?.style.width
      );
      if (width > 150 || isNaN(width)) {
        this.hidden(event);
      } else {
        this.show(event);
      }
    },
    show(event: any) {
      const nav: HTMLElement = document.getElementsByTagName("nav")[0];
      const main: HTMLElement = document.getElementsByTagName("main")[0];
      let marginLeft = 150;

      const interval = setInterval(() => {
        main.style.marginLeft = marginLeft + "px";
        nav.style.width = marginLeft - 50 + "px";
        marginLeft += 3;
        if (marginLeft > 300) {
          clearInterval(interval);
          for (let elementsByTagNameKey of nav.getElementsByTagName("p")) {
            elementsByTagNameKey.className = "";
          }
          for (let elementsByTagNameKey of nav.getElementsByTagName("h1")) {
            elementsByTagNameKey.className = "";
          }
        }
      }, 5);
      event.srcElement.style.transform = "rotate(0deg)";
    },
    hidden(event: any) {
      const nav: HTMLElement = document.getElementsByTagName("nav")[0];
      const main: HTMLElement = document.getElementsByTagName("main")[0];
      let marginLeft = 300;
      for (let elementsByTagNameKey of nav.getElementsByTagName("p")) {
        elementsByTagNameKey.className += "hidden";
      }
      for (let elementsByTagNameKey of nav.getElementsByTagName("h1")) {
        elementsByTagNameKey.className += "hidden";
      }
      const interval = setInterval(() => {
        main.style.marginLeft = marginLeft + "px";
        nav.style.width = marginLeft - 50 + "px";
        marginLeft -= 3;
        if (marginLeft < 150) {
          clearInterval(interval);
        }
      }, 5);
      event.srcElement.style.transform = "rotate(180deg)";
    },
  },
};
</script>

<template>
  <metainfo>
    <template v-slot:title="{ content }">{{
      content ? `${content} | Nathan Delenclos` : `Nathan Delenclos`
    }}</template>
  </metainfo>
  <nav>
    <img src="@/assets/me.webp" alt="profile" id="profile" />
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
        <img src="@/assets/icons/icon_user.svg" alt="icon user" />
        <p>About</p>
      </RouterLink>
      <RouterLink to="/resume">
        <img src="@/assets/icons/icon_file.svg" alt="icon user" />
        <p>Resume</p>
      </RouterLink>
      <RouterLink to="/portfolio">
        <img src="@/assets/icons/icon_wallet.svg" alt="icon user" />
        <p>Portfolio</p>
      </RouterLink>
      <RouterLink to="/testimonials">
        <img src="@/assets/icons/icon_comment_bubble.svg" alt="icon user" />
        <p>Testimonials</p>
      </RouterLink>
      <RouterLink to="/contact">
        <img src="@/assets/icons/icon_send.svg" alt="icon send" />
        <p>Contact</p>
      </RouterLink>
    </div>
    <img
      src="@/assets/icons/back.svg"
      alt="back"
      id="back"
      @click="hiddenOrShow"
    />
  </nav>

  <main>
    <RouterView />
  </main>
</template>

<style scoped>
nav {
  width: 250px;
  height: 100%;
  position: fixed;
  background-color: var(--blue);
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
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
  width: 50px;
  margin-top: 2rem;
  transition: transform 0.3s;
}
main {
  margin: 2rem 2rem 2rem 300px;
}
.hidden {
  display: none;
}
@media screen and (max-width: 950px) {
  #back {
    display: none;
  }
  nav > h1 {
    display: none;
  }
  nav {
    width: 100px;
  }
  main {
    margin-left: 150px;
  }
  .link {
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
  .navigation > a > p {
    display: none;
  }
}
</style>

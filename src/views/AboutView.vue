<template>
  <h1>About</h1>
  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
    dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
    software like Aldus PageMaker including versions of Lorem Ipsum.</p>
  <section class="description">
    <img src="@/assets/me.webp" alt="me" />
    <div class="right-part">
      <h3>Developer Full-stack</h3>
      <div class="elements">
        <p v-for="desc in descriptions">
          <b>{{desc.title}}:</b> {{desc.result}}
        </p>
      </div>
    </div>
  </section>
  <section class="facts">
    <h2>Facts</h2>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
      dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
    <div class="statsFacts">
      <stats v-for="stat in stats" :title="stat.title" :number="stat.number" />
    </div>
  </section>
  <section class="skills">
    <h2>Skills</h2>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
      dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
    <div class="skillsBars">
      <div v-for="(lang, key) in skills" class="skillBar">
        <skills-bar  v-bind:percent="lang" v-bind:title="key"/>
      </div>
    </div>
  </section>
</template>

<style scoped>
h1 {
  color: var(--belge-first);
  font-size: 48px;
  font-weight: bold;
}
h3 {
  color: var(--belge-first);
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 1rem;
  margin-top: 1rem;
}
h2 {
  color: var(--belge-first);
  font-size: 42px;
  font-weight: bold;
}
section {
  transition: opacity 1s;
  opacity: 0;
  margin-top: 2rem;
}
.description {
  display: flex;
  width: 100%;
}
.description > img {
  border-radius: 10%;
  width: 15rem;
}
.right-part {
  margin-left: 2rem;
  width: 100%;
}
.elements {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 1rem;
}
.elements > p {
  width: 40%;
}
.elements > p > b {
  font-weight: bold;
}
.facts {
  margin-top: 2rem;
}
.statsFacts {
  display: flex;
  justify-content: space-evenly;
  margin-top: 2rem;
}
.skillsBars {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.skillBar {
  display: block;
  width: 45%;
  margin-bottom: 1rem;
}
</style>

<script>
import Stats from "@/components/stats.vue";
import SkillsBar from "@/components/skillsBar.vue";
import repos from "@/assets/repos.json";

function getAge(dateString) {
  const today = new Date();
  const birthDate = new Date(dateString);
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}
function getTotalNumberLine(project) {
  let numberOfLines = 0;
  for (const lang in project.languages) {
    numberOfLines += project.languages[lang];
  }
  return numberOfLines;
}

function getUniqueLanguage(repos) {
  const languages = [];
  repos.forEach((project) => {
    for (const lang in project.languages) {
      if (!languages.includes(lang)) {
        languages.push(lang);
      }
    }
  });
  return languages;
}

function getSkillsPercent(repos) {
  const languages = {};
  let sum = 0;
  repos.forEach((project) => {
    for (const lang in project.languages) {
      languages[lang] = languages[lang]
        ? languages[lang] + project.languages[lang]
        : project.languages[lang];
      sum += project.languages[lang];
    }
  });
  for (const lang in languages) {
    languages[lang] = (100 * languages[lang]) / sum;
    languages[lang] = languages[lang].toFixed(2);
  }
  console.log(languages);
  return languages;
}
export default {
  components: { SkillsBar, Stats },
  data() {
    return {
      skills: getSkillsPercent(repos),
      stats: [
        {
          title: "Projects",
          number: repos.length,
        },
        {
          title: "ligne de code",
          number: repos.reduce((previous, actual) => {
            return previous + getTotalNumberLine(actual);
          }, 0),
        },
        {
          title: "Language de programmation",
          number: getUniqueLanguage(repos).length,
        },
        {
          title: "Kb",
          number: repos.reduce((previous, actual) => {
            return previous + actual.size;
          }, 0),
        },
      ],
      descriptions: [
        {
          title: "Birthday",
          result: "9 jully 2003",
        },
        {
          title: "Age",
          result: getAge("07/09/2003"),
        },
        {
          title: "Website",
          result: document.location.host,
        },
        {
          title: "Email",
          result: "nathan.delenclos@gmail.col",
        },
        {
          title: "Phone",
          result: "+33 7 83 34 96 14",
        },
        {
          title: "City",
          result: "Lille 59000, France",
        },
      ],
    };
  },
  mounted() {
    let time = 100;
    for (let section of document.getElementsByTagName("section")) {
      setTimeout(() => {
        section.style.opacity = "1";
      }, time);
      time += 250;
    }
  },
};
</script>
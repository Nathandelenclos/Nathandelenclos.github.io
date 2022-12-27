<template>
  <h1>About</h1>
  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
    dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
    software like Aldus PageMaker including versions of Lorem Ipsum.</p>
  <div class="description">
    <img src="../assets/me.webp" alt="me" />
    <div class="right-part">
      <h3>Developer Full-stack</h3>
      <div class="elements">
        <p v-for="desc in descriptions">
          <b>{{desc.title}}:</b> {{desc.result}}
        </p>
      </div>
    </div>
  </div>
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
.description {
  margin-top: 2rem;
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
</style>

<script>
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
export default {
  data() {
    return {
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
};
</script>
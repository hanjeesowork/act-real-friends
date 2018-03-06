<template>
  <main>
    <header>
      Conan
    </header>
    <section>
      <header>
        최소 5명의 평가자를 입력해 주세요.
      </header>
      <name-card v-for="(index) in count" :key="index"></name-card>
      <img @click="addPerson" src="@/assets/add-person.png"/>
    </section>
    <footer>
      <button>
        저장
      </button>
    </footer>
  </main>
</template>

<script>
  import nameCard from '@/components/NameCard.vue'

  export default {
    name: "name-list",
    components: {nameCard},

    data: function () {
      return {
        count: 5
      }
    },

    methods: {
      addPerson() {
        this.count = this.count + 1
      }
    }
  }
</script>

<style scoped>

  main {
    background: url("../assets/namelist-background.png");
    background-size: contain;
    height: 100vh;
  }

  main > header {
    width: 229.6px;
    height: 32px;
    font-family: NanumSquareRoundR;
    font-size: 28px;
    font-weight: bold;
    line-height: 1.14;
    color: rgba(0, 0, 0, 0.8);
    padding-top: 40px;
    padding-left: 20px;
    padding-bottom: 10px;
  }

  section {
    background: #ffffff;
    width: 340px;
    height: calc(100% - 159px);
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    margin: auto;
    overflow-y: scroll;
  }

  section > header {
    font-size: 14px;
    line-height: 50px;
    color: #3d3d3d;
    border-bottom: 1px solid #e8e8ec;
    padding-left: 17px;
  }

  footer {
    background: #ffffff;
    width: 340px;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    margin: auto;
  }

  button {
    width: 80px;
    height: 32px;
    border-radius: 20px;
    background-color: #4a4bd9;
    font-size: 16px;
    line-height: 32px;
    color: #ffffff;
    border: 0;
    margin-top : 16px;
    margin-left: 240px;
    margin-bottom: 18px;
  }

  img {
    padding-left: 20px;
    margin-top: 14px;
  }

</style>

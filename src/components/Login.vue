<template>
  <main>
    <article>
      <header>
        ACT HR
      </header>
      <section>
        <input id="id" placeholder="이름"/>
      </section>
      <section>
        <input type="password" id="password" placeholder="비밀번호"/>
      </section>
      <button @click="login">
        로그인
      </button>
    </article>
  </main>
</template>

<script>
  import firebase from 'firebase'

  export default {
    name: "login",

    methods: {
      login() {
        firebase.auth().signInWithEmailAndPassword(document.getElementById('id').value, document.getElementById('password').value)
          .then((result) => {
            this.$router.push('/friendsList')
          })
          .catch((reject) => {
            alert(reject.message)
          })
      }
    },


    mounted() {

    }
  }
</script>

<style scoped>
  main {
    background-image: url("../assets/login-background.png");
    background-size: contain;
    height: 100vh;
    display: flex;
    justify-content: center;
  }

  article {
    margin-top: 134px;
  }

  header {
    font-family: NanumSquareRoundEB;
    font-size: 36px;
    line-height: 1.33;
    color: #ffffff;
    margin-bottom: 30px;
  }

  section {
    margin-bottom: 16px;
  }

  section > input {
    width: 280px;
    height: 40px;
    border: 0;
    border-bottom: 1px solid #a0a4ee;
    background: 0;
    font-size: 18px;
    color: #ffffff;
  }

  section > input::placeholder {
    color: #7076e4;
  }

  button {
    width: 100px;
    height: 40px;
    border-radius: 20px;
    background-color: #ffffff;
    font-family: NanumGothicR;
    font-size: 18px;
    font-weight: bold;
    line-height: 1.22;
    color: #3046e4;
    margin-top: 12px;
    border: 0;
    float: right;
  }

</style>

<template>
  <main>
    <article>
      <header>
        ACT HR
      </header>
      <section>
        <input placeholder="이름"/>
      </section>
      <section>
        <input placeholder="비밀번호"/>
      </section>
      <button>
        로그인
      </button>
    </article>
  </main>
</template>

<script>
  export default {
    name: "login"
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

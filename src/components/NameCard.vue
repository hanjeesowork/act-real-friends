<template>
  <article>
    <header>
      평가자
    </header>
    <input placeholder="이름"/>
    <input placeholder="소속부서"/>
  </article>
</template>

<script>
  export default {
    name: "name-card"
  }
</script>

<style scoped>
  article {
    width: 300px;
    height: 52px;
    margin: auto;
    border-bottom: 1px solid #e8e8ec;
    padding-top: 12px;
  }

  article > header {
    font-size: 12px;
    font-weight: bold;
    color: #888888;
  }

  input {
    border: 0;
    font-size: 16px;
    width: 144px;
    height: 36px;
    padding: 0;
  }

  input:nth-of-type(1) {
    margin-right: 7px;
  }

  input:focus {
    outline: none;
  }

  input::placeholder {
    color: #b2b2b2;
    font-size: 16px;
  }

</style>

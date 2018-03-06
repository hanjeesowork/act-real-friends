<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>
  @font-face {
    font-family: 'NanumSquareRoundR';
    src: url('assets/NanumSquareRoundR.eot') format('truetype');
  }

  @font-face {
    font-family: 'NanumSquareRoundEB';
    src: url('assets/NanumSquareRoundEB.eot') format('truetype');
  }

  @font-face {
    font-family: 'NanumGothicR';
    src: url('assets/NanumGothic-Regular.eot') format('truetype');
  }

  #app {
    width: 100vw;
    height: 100vh;
  }

  body {
    margin: 0;
    font-family: "NanumGothicR";
  }
</style>

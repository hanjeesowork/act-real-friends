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
    src: url('assets/NanumSquareRoundR.ttf') format('truetype');
  }

  @font-face {
    font-family: 'NanumSquareRoundEB';
    src: url('assets/NanumSquareRoundEB.ttf') format('truetype');
  }

  @font-face {
    font-family: 'NanumGothicR';
    src: url('assets/NanumGothic-Regular.ttf') format('truetype');
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

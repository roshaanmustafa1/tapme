<template>
  <div id="app">
    <header-main />
    <router-view />
    <footer-main />
  </div>
</template>

<script>
import HeaderMain from "./components/HeaderMain.vue";
import FooterMain from "./components/FooterMain.vue";
export default {
  components: { HeaderMain, FooterMain },
};
</script>

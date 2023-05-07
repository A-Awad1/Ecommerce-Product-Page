<template>
  <AppHeader />
  <router-view />
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";
export default {
  components: {
    AppHeader,
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;700&display=swap");
#app {
  font-family: "Kumbh Sans", sans-serif;
  min-height: 100vh;
  position: relative;
}
</style>

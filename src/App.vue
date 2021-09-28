<template>
  <v-app>
    <header>
      <el-header></el-header>
    </header>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import ElHeader from "./components/ElHeader.vue";
export default {
  name: "App",
  components: { ElHeader },

  data: () => ({
    
    //
  }),
};
</script>
<style>
#app {
  font-family: "Lato", sans-serif;
  background-color: #36292924 ;
  background-size: contain;
}
</style>

<template>
  <v-app>
    <header>
      <el-header></el-header>
    </header>
    <v-main class="container">
      <router-view class="router-view" />
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
  height: 50%;
  /* background-color: rgba(0, 0, 0, 0.157) transparent; */
  /* background-image: url("https://strapiprovider.s3.us-east-2.amazonaws.com/Macena_65efa93b55.jpg");
  background-repeat: no-repeat;
  background-position: top; */
}
</style>

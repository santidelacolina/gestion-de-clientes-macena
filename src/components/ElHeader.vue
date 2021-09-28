<template>
  <v-container>
    <v-app-bar id="headerBar" app extended>
      <v-row align="center" justify="center">
        <v-col cols="4">
          <v-img :src="{ logoMacena }"></v-img>
        </v-col>
        <v-col cols="8">
          <v-app-bar-title>
            <h2>Gestion de Clientes</h2>
          </v-app-bar-title>
        </v-col>
      </v-row>
    </v-app-bar>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      logoMacena: require("../assets/macena.png"),
    };
  },
};
</script>

<style>
#headerBar {
  color: #fff;
  background: #002942;
  height: 135px;
  border-bottom: none;
  box-shadow: 0 0 10px rgb(0 0 0 / 50%);
}
</style>

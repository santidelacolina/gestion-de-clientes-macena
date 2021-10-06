<template>
  <v-container fluid>
    <v-app-bar id="headerBar" app extended>
      <v-row dense align="center" justify="start">
        <v-col sm="3" md="3" lg="3">
          <v-img
            class="logoMacena"
            position="center"
            src="https://www.macena.com.ar/img/macena.png"
            contain
          ></v-img>
        </v-col>
        <v-col sm="2" md="2" lg="2"></v-col>
        <v-col sm="6" md="4" lg="4">
          <v-app-bar-title>
            <h3 class="titulo">Gestión de Clientes</h3>
          </v-app-bar-title>
        </v-col>
      </v-row>
    </v-app-bar>
  </v-container>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style>
#headerBar {
  color: #fff;

  background: #002942;
  height: 135px;
  border-bottom: none;
  /* box-shadow: 0 0 10px rgb(0 0 0 / 50%); */
}
.titulo {
  font-size: 150%;
  letter-spacing: 0.1rem;
  font-weight: 500;
}
.logoMacena {
  height: 20%;
  width: 40%;

  position: fixed;
}
</style>

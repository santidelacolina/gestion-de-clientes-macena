<template>
  <v-app>
    <v-main>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4" lg="4">
            <v-card raised elevation="10" light>
              <v-container >
                <validation-observer ref="observer" v-slot="{ invalid }">
                  <form @submit.prevent="submit">
                    <validation-provider
                      v-slot="{ errors }"
                      name="User"
                      rules="required"
                    >
                      <v-text-field
                        v-model="name"
                        :error-messages="errors"
                        label="User"
                        required
                      ></v-text-field>
                    </validation-provider>
                    <validation-provider
                      v-slot="{ errors }"
                      name="Password"
                      rules="required|min:8"
                    >
                      <v-text-field
                        v-model="password"
                        type="password"
                        :counter="8"
                        :error-messages="errors"
                        label="Password"
                        required
                      ></v-text-field>
                    </validation-provider>
                    <v-row justify="center" align="center">

                    <v-btn class="mr-4" elevation="5" type="submit" :disabled="invalid">
                      submit
                    </v-btn>
                    <v-btn @click="clear" elevation="5"> clear </v-btn>
                    </v-row>
                    
                  </form>
                </validation-observer>
              </v-container>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { required, digits, min, regex } from "vee-validate/dist/rules";
import {
  extend,
  ValidationObserver,
  ValidationProvider,
  setInteractionMode,
} from "vee-validate";

setInteractionMode("eager");

extend("digits", {
  ...digits,
  message: "{_field_} needs to be {length} digits. ({_value_})",
});

extend("required", {
  ...required,
  message: "{_field_} can not be empty",
});

extend("min", {
  ...min,
  message: "{_field_} may not be less than {length} characters",
});

extend("regex", {
  ...regex,
  message: "{_field_} {_value_} does not match {regex}",
});

export default {
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data: () => ({
    name: "",
    password: "",
  }),

  methods: {
    submit() {
      this.$refs.observer.validate();
    },
    clear() {
      this.name = "";

      this.$refs.observer.reset();
    },
  },
};
</script>

<style></style>

<template>
  <v-app>
    <v-main>
      <v-container fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4" lg="4">
            <v-container>
              <v-row justify="center" align="center">
                <v-card elevation="10" light min-width="80%" height="300px">
                  <validation-observer ref="observer" v-slot="{ invalid }">
                    <form @submit.prevent="submit">
                      <validation-provider
                        v-slot="{ errors }"
                        name="User"
                        rules="required"
                      >
                        <v-col cols="12">
                          <v-text-field
                            v-model="name"
                            :error-messages="errors"
                            label="User"
                            required
                          >
                          </v-text-field>
                        </v-col>
                      </validation-provider>
                      <validation-provider
                        v-slot="{ errors }"
                        name="Password"
                        rules="required|min:8"
                      >
                        <v-col>
                          <v-text-field
                            v-model="password"
                            type="password"
                            :counter="8"
                            :error-messages="errors"
                            label="Password"
                            required
                            ><v-icon>mdi-account</v-icon>
                          </v-text-field>
                        </v-col>
                      </validation-provider>
                      <v-col cols="12">
                        <v-spacer></v-spacer>
                      </v-col>
                      <v-row justify="center" align="center">
                        <v-col cols="12" sm="8" md="4" lg="4">
                          <v-btn
                            rounded
                            large
                            color="#0071ce"
                            elevation="10"
                            type="submit"
                            :disabled="invalid"
                          >
                            Log In
                          </v-btn>
                        </v-col>
                      </v-row>
                    </form>
                  </validation-observer>
                </v-card>
              </v-row>
            </v-container>
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
  message: "{_field_} must contain at least {length} characters",
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

<style scoped>
form {
  min-width: 100%;
  height: 50px !important;
  line-height: 50px !important;
  background: #fff !important;
  color: #0071ce !important;
  border: none !important;
  border-radius: 0 !important;
  margin-bottom: 5px;
  margin-right: 2px;
}
</style>

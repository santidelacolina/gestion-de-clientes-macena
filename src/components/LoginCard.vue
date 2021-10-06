<template>
  <v-app>
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col sm="6" md="4" lg="3" xl="2">
          <v-card elevation="10" light min-width="80%" height="300px">
            <validation-observer ref="observer" v-slot="{ invalid }">
              <form class="loginForm" @submit.prevent="submit">
                <v-container fluid>
                  <v-row justify="center" align="center" align-content="center">
                    <v-col cols="12">
                      <validation-provider
                        v-slot="{ errors }"
                        name="User"
                        rules="required"
                      >
                        <v-text-field
                          class="camposForm"
                          v-model="name"
                          :error-messages="errors"
                          label="User"
                          required
                        >
                        </v-text-field>
                        <!-- <v-icon>mdi-account</v-icon> -->
                      </validation-provider>
                    </v-col>
                    <v-col cols="12">
                      <validation-provider
                        v-slot="{ errors }"
                        name="Password"
                        rules="required"
                      >
                        <v-text-field
                          class="camposForm"
                          v-model="password"
                          type="password"
                          :error-messages="errors"
                          label="Password"
                          required
                        >
                        </v-text-field>
                      </validation-provider>
                    </v-col>
                    <v-container fluid>
                      <v-row justify="center">
                        <v-col cols="5">
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
                    </v-container>
                  </v-row>
                </v-container>
              </form>
            </validation-observer>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import axios from "axios";
import { mapActions } from "vuex";
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
  created() {
    this.getUsers();
  },
  methods: {
    ...mapActions(["getUsers"]),
    submit() {
      this.$refs.observer.validate();
      const user = { name: this.name, password: this.password };
      const url = "https://users-macena-default-rtdb.firebaseio.com/users.json";
      let submitUser = async () => {
        try {
          const res = await axios.post(url, user);

          return res;
        } catch (err) {
          console.log(
            "🚀 ~ file: LoginCard.vue ~ line 125 ~ submitUser ~ err",
            err
          );
        }
      };
      submitUser().then((data) =>
        console.log("🚀 ~ file: LoginCard.vue ~ line 135 ~ submit ~ data", data)
      );
    },
    clear() {
      this.name = "";

      this.$refs.observer.reset();
      this.$refs.observer.reset();
    },
  },
};
</script>

<style scoped>
.loginForm {
  min-width: 100%;
  height: 40px !important;
  line-height: 50px !important;
  /* background: #fff !important; */
  color: #0071ce !important;
  border: none !important;
  border-radius: 0 !important;
  margin-bottom: 5px;
  margin-right: 2px;
}
.camposForm {
  color: #0071ce !important;
}
</style>

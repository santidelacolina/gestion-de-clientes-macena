import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex);

export default new Vuex.Store({
  state: { users: [] },
  actions: {
    getUsers({ commit }) {
      const url = "https://users-macena-default-rtdb.firebaseio.com/users.json";
      let callUsers = async () => {
        try {
          const res = await axios.get(url);
          const data = await res.data;
          for (let key in data) {
            const user = data[key];
            user.id = key;
            commit("GET_USERS", user);
            console.log(
              "🚀 ~ file: index.js ~ line 19 ~ callUsers ~ users",
              user
            );
          }
        } catch (err) {
          console.log(
            "🚀 ~ file: LoginCard.vue ~ line 125 ~ submitUser ~ err",
            err
          );
        }
      };
      callUsers();
    },
  },
  mutations: {
    GET_USERS(){
      
    }
  },

  modules: {},
});

const auth = {
  login: function (id, password) {
    window.alert(`login id: ${id} \n password: ${password}`);
  },
};

const loginTemplate = `
  <div class="text-center m-5">
    <input type="text" placeholder="ログインID" v-model="userId" class="mb-3"><br>
    <input type="password" placeholder="パスワード"　v-model="password" class="mb-3"><br>
    <button @click="login">ログイン</button>
  </div>`;

Vue.component("user-login", {
  template: loginTemplate,
  data: function () {
    return {
      userId: "",
      password: "",
    };
  },
  methods: {
    login: function () {
      auth.login(this.userId, this.password);
    },
  },
});

new Vue({
  el: "#login-example",
});

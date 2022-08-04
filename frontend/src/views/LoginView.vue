<template>
  <div class="container">
    <div v-if="error" class="alert alert-danger" role="alert">
      {{ error }}
    </div>
    <h2>Login</h2>
    <hr />
    <form>
      <label for="usr">Email:</label>
      <input v-model="email" type="text" class="form-control" id="usr" />
      <label for="usr">Password:</label>
      <input v-model="password" type="password" class="form-control" id="pwd" />
      <button @click.prevent="loginPage" type="submit" class="btn btn-primary">
        Login
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "loginPage",
  data: () => ({
    email: "",
    password: "",
    error: "",
  }),
  methods: {
    loginPageNew() {
      try {
        // TODO: Read difference between Then and try catch https://stackoverflow.com/questions/42648956/what-is-faster-try-catch-vs-promise
        const result = this.axios.post("http://localhost:3000/api/user/login", {
          email: this.email,
          password: this.password,
        });
        this.$store.dispatch("login", {
          name: result.data.user.fullName,
          id: result.data.userId,
          email: result.data.user.email,
          token: result.data.token,
        });
        this.$router.push("/");
      } catch (e) {
        console.log(e)
        this.error = "Invalid username/password";
      }
    },
    loginPage() {
      this.axios
        .post("http://localhost:3000/api/user/login", {
          email: this.email,
          password: this.password,
        })
        .then((result) => {
          //FIXME get token from result.data.token and pass to login action
          this.$store.dispatch("login", {
            name: result.data.user.fullName,
            id: result.data.userId,
            email: result.data.user.email,
            token: result.data.token,
          });
          this.$router.push("/");
        })
        .catch((error) => {
          console.log(error);
          this.error = "Invalid username/password";
        });
    },
  },
};
</script>

<style>
form {
  width: 40%;
  min-width: 350px;
  top: 25%;
  transform: translate(-50%) -50%;
  padding: 40px;
  box-sizing: border-box;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 0 20px #000000b3;
  font-family: Monsterrat;
  margin: auto;
  margin-top: 50px;
  margin-bottom: 80px;
}
</style>

<template>
  <div class="container">
    <h2>Sign up</h2>
    <hr />
    <form>
      <label for="usr">First name:</label>
      <input
        v-model="firstName"
        type="text"
        class="form-control"
        id="firstName"
      />
      <label for="pwd">Last name:</label>
      <input
        v-model="lastName"
        type="text"
        class="form-control"
        id="lastName"
      />
      <label for="pwd">email:</label>
      <input v-model="email" type="text" class="form-control" id="email" />
      <label for="usr">Password:</label>
      <input v-model="password" type="password" class="form-control" id="pwd" />
      <button @click.prevent="onSubmit" type="submit" class="btn btn-primary">Sign up</button>
    </form>
  </div>
</template>

<script>
export default {
  data: () => ({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  }),
  methods: {
    onSubmit() {
      this.axios.post("http://localhost:3000/api/user/signup", {
        fullName: `${this.firstName} ${this.lastName}`,
        email: this.email,
        password: this.password,
      });
      alert("successful");
      this.$router.push("/login");
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
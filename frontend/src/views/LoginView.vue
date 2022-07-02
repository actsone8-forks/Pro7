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
      <button @click.prevent="loginPage"  type="submit" class="btn btn-primary">Login</button>
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
    loginPage() {
      console.log(this.email);
      console.log(this.password);

      fetch('http://localhost:3000/api/user/login', {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: this.email,
          password: this.password
        }),
      })
        .then(response => response.json())
        .then(data => {
          console.log('Success:', data);
          if (data.token) {
            localStorage.setItem('user', JSON.stringify(data))
          }

          this.$router.push({ name: "home" })
        })
        .catch((error) => {
          console.error('Error:', error);
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
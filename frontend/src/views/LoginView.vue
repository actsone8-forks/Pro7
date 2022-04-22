<template>
  <div class="container">
    <h2>Login</h2>
    <hr />
    <form>
      <label for="usr">email:</label>
      <input v-model="email" type="text" class="form-control" id="usr" />
      <label for="usr">Password:</label>
      <input v-model="password" type="password" class="form-control" id="pwd" />
      <button @click="onSubmit" class="btn" method="post">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "CreatePost",
  data: () => ({
    email: "",
    password: "",
  }),
  methods: {
    onSubmit(e) {
      this.axios
        .post("http://localhost:3000/api/user/login", {
          email: this.email,
          password: this.password,
        })
        .then((result) => {
          console.warn(result.data.token);
          // TODO store token localstorage
        });
      // TODO catch error for invalid login and display for user
      e.preventDefault();
    },
  },
};
// localStorage.setItem('usertoken',result.data.token)
//   onSubmit() {
//     console.log("form submitted");
//     //TO DO use fetch api for user credentials POST to the backend
//     //if succsess store token (localstorage)
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
label {
  font-family: Monsterrat;
  margin: auto;
  margin-top: 5px;
  margin-bottom: 8px;
}
button {
  display: block;
  background: #1c92d2;
  padding: 14px 0;
  color: black;
  text-transform: uppercase;
  cursor: pointer;
  margin-top: 8px;
  width: 100%;
}
button:hover {
  background: beige;
  transition: 0.5s;
}
.btn {
  display: block;
  background: #1c92d2;
  padding: 8px 0;
  color: black;
  text-transform: uppercase;
  cursor: pointer;
  margin-top: 1px;
  width: 10%;
  margin: auto;
}
</style>
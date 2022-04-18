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
      <button @click="onSubmit" class="btn">Sign up</button>
    </form>
  </div>
</template>

<script>
export default {
  methods: {
    onSubmit() {
      let fullName = this.firstName + " " + this.lastName;
      console.log(fullName);
      //TO DO create fetch request for http POST sending user form info above
      //checke for success response for be server 201
    },
  },
  data: () => ({
    firstName: "",
    lastName: "",
    email:"",
    password:"",
  }),
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
  width: 100px;
  margin: auto;
}
</style>
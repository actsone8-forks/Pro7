<template>
  <div>
    <h2>Delete</h2>
    <hr />
    <form>
      <h3>Delete your Groupomania account!</h3>
      <h5>Are you sure? Your profile will be removed from Groupomania site!</h5>
      <button @click.prevent="deleteUser" class="btn" method="post">
        Delete user
      </button>
    </form>
  </div>
</template>
<script>
export default {};
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
  margin: auto;
}
h3, h5{
    color: red;
}
</style>

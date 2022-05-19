<template>
  <div>
    <h2>Delete</h2>
    <hr />
    <form>
      <h3>Delete your Groupomania account!</h3>
      <!-- FIXME user is undefined here -->
      <button @click.prevent="deleteUser(id)" class="btn" method="post">
        Delete user
      </button>
    </form>
  </div>
</template>
<script>
export default {
  name: 'DeleteUser',
  data(){
  },
  methods:{
    getData()
    {
this.axios.get('http://localhost:3000/user').then((result)=>{
  console.warn(result)
  this.user=result.data
})
    },
    deleteUser() // FIXME id is undefined, remove method arguement 'id'
    {
      // TODO grab the currently logged on user id stored by login in Vuex store
      //     by using the Vuex store's getter you add in store/index.js

      let response = confirm('are you sure?')
      if(response){
          this.$store.dispatch('deleteUser', id);
        }
      
      // TODO add JWT token to request header
      // FIXME this URL wont work until the route is fixed on the backend
      this.axios.delete("http://localhost:3000/user/"+id).then(()=>{
         // TODO Vue code needs formatting (may need to install Vetur)
  this.getData();
   alert("successful");
      this.$router.push("/login");
}) // FIXME add catch block in case there was an error HTTP status returned
    }
  },
  mounted()
    {
    this.getData()
  }
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
  margin: auto;
}
h3,
h5 {
  color: red;
}
</style>

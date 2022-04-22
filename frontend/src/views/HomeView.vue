<template>
  <div class="home">
    <div class="row">
      <div class="col-md-3 homeColumn">
        <UserCard />
      </div>
      <div class="col-md-9 homeColumn2">
        <CreatePost />
      </div>
    </div>
  </div>
</template>

<script>
import CreatePost from "../components/CreatePost.vue";
import UserCard from "../components/UserCard.vue";

export default {
  name: "HomeView",
  components: {
    CreatePost,
    UserCard,
  },
};
</script>
<style>
.homeColumn {
  background-color: aqua;
  height: 200px;
}
.homeColumn2 {
  height: 200px;
}
.home {
  margin: 2rem 5rem;
}
</style>

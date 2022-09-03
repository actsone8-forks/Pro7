<template>
  <div class="card" style="width: 100%">
    <img class="user-image" :src="getUserImage" />
    <div class="card-body">
      <p class="card-title">{{ userName }}</p>
      <p class="card-title">{{ email }}</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item"></li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn;
    },
    isLoggedOut() {
      return !this.isLoggedIn;
    },
    userName() {
      return this.$store.getters.userName;
    },
    email() {
      return this.$store.getters.email;
    },
    getUserImage() {
      return "https://i.pravatar.cc/150?img=" + this.$store.getters.userId;
    },
  },
};
</script>

<style scoped>
.card {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  padding: 1vh;
  align-items: center;
  border-color: rgb(128, 152, 153);
}

.card-body {
  display: flex;
  justify-content: center;
  align-items: center;
}

.post-user-image {
  margin-right: 10px;
}

.user-image {
  height: 85px;
  width: 85px;
  border-radius: 100%;
}
</style>
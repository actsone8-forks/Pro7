<template>
  <div class="post-feed">
    <h2>Your timeline</h2>

    <div class="post-item" v-for="post in posts" :key="post.user">
      <div class="post-user-info">
        <div class="post-user-image">
          <img class="user-image" :src="getUserImage(post.User.id)" />
        </div>

        <h3 class="post-username">{{ post.User.fullName }}</h3>
      </div>

      <div>
        <p class="post-message">{{ post.message }}</p>
      </div>
      <div class="post-date">
        <p>{{ formatDate(post.createdAt) }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import dayjs from "dayjs";

export default {
  props: ["posts"],
  methods: {
    formatDate(date) {
      return dayjs(date).format("HH:mm A, MMMM DD YYYY");
    },
    getUserImage(id) {
      return "https://i.pravatar.cc/150?img=" + id;
    },
  },
};
</script>

<style>
.post-item {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-items: center;
  border-bottom: 1px solid #ccc;
  margin-top: 1em;
}

.post-user-info {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin-bottom: 0.5em;
}

.post-user-image {
  margin-right: 10px;
}

.user-image {
  height: 45px;
  width: 45px;
  border-radius: 100%;
}

.post-username {
  font-size: 1em;
  align-self: flex-end;
}
.post-message {
  font-size: 1.2em;
  font-weight: 400;
  margin-top: 0.5em;
  text-align: start;
}

.post-date {
  font-size: 0.8em;
  font-weight: 400;
  color: #414141;
}
</style>
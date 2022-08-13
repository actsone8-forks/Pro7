<template>
    <div class="post">
        <div class="post-user-info">
        <div class="post-user-image">
          <img class="user-image" :src="getUserImage" />
        </div>

        <h3 class="post-username">{{ post.user.fullName }}</h3>
      </div>

      <div>
        <p class="post-message">{{ post.message }}</p>
      </div>
      <!-- Check if post contains files before rendering file -->
      <div v-if="this.post.files.length > 0" class="post-image">
        <img :src="getPostImage" />
      </div>
      <div class="post-date">
        <p>{{ formatDate }}</p>
      </div>
    </div>
</template>

<script>
import dayjs from "dayjs";

export default {
  props: ["post"],
  computed: {
    formatDate() {
      return dayjs(this.post.createdAt).format("HH:mm A, MMMM DD YYYY");
    },
    getUserImage() {
      return "https://i.pravatar.cc/150?img=" + this.post.user.id;
    },
    getPostImage() {
      const src = 'data:' + this.post.files[0].type + ';base64,' + btoa(
          new Uint8Array(this.post.files[0].data.data)
          .reduce((data, byte) => data + String.fromCharCode(byte), '')
      );

      return src
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

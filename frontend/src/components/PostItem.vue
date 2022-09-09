<template>
  <div v-on:click="click()" class="post-item">
    <div class="post-user-info">
      <div class="post-user-image">
        <img class="user-image" :src="getUserImage" />
      </div>

      <h3 class="post-username">{{ post.user.fullName }}</h3>
    </div>

    <div> 
      <!-- <p v-if ="readCount>0" class="post-message post-message-read">{{
      truncateMessage }}</p>
      <p v-else  class="post-message">{{truncateMessage}}</p> -->
      <p class="post-message" :class="getReadClass()">{{truncateMessage}}</p>
    </div>
    <!-- Check if post contains files before rendering file -->
    <div v-if="this.post.files.length > 0" class="post-image">
      <div :class="getReadClass()"><img :src="getPostImage" /></div>
    </div>
    <div class="post-date">
      <p>{{ formatDate }}</p>
    </div>
    <div class="post-read">
      <!-- <img :src="`${publicPath}view.png`"> -->
      <p class="post-read-count">Read: {{ readCount }}</p>
    </div>
  </div>
</template>

<script>
import dayjs from "dayjs";

export default {
  props: ["post", "onclick"],
  data() {
    return {
      publicPath: process.env.BASE_URL,
    };
  },
  methods: {
    click() {
      console.log(this.publicPath);
      this.onclick(this.post);
    },
    getReadClass() {
      const currentUserId = this.$store.getters.userId;
      const postUserId = this.post.user.id;
      const postViews = this.post.views ? Object.values(this.post.views):[];
      console.log(postViews)
      const isByCurrentUser = (postUserId == currentUserId);
      const isRead =  postViews.includes(currentUserId);
      let className = '';
      if (isByCurrentUser || isRead) {
        className = 'post-message-read';
      }
      return className;
    }
  },
  computed: {
    formatDate() {
      return dayjs(this.post.createdAt).format("HH:mm A, MMMM DD YYYY");
    },
    getUserImage() {
      return "https://i.pravatar.cc/150?img=" + this.post.user.id;
    },
    getPostImage() {
      const src =
        "data:" +
        this.post.files[0].type +
        ";base64," +
        btoa(
          new Uint8Array(this.post.files[0].data.data).reduce(
            (data, byte) => data + String.fromCharCode(byte),
            ""
          )
        );

      return src;
    },
    truncateMessage() {
      return this.post.message.length > 45
        ? this.post.message.substring(0, 45) + "..."
        : this.post.message;
    },
    readCount() {
      return !!this.post.views && !!this.post.views.length
        ? this.post.views.length
        : 0;
    },
  },
};
</script>

<style scoped>
.post-item {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* justify-items: center; */
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
  font-weight: bold;
  margin-top: 0.5em;
  text-align: start;
}

.post-message-read {
  font-weight: 400;
}

.post-date {
  font-size: 0.8em;
  font-weight: 400;
  color: #414141;
}

.post-read {
  align-self: right;
  display: flex;
}

.post-read-count {
  font-size: 0.7em;
  color: #6b6b6b;
}
.post-message-read img{
opacity: 0.5;
}
</style>

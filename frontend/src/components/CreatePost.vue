<template>
  <div id="createPost">
    <div class="row">
      <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
          <span class="navbar-brand mb-0 h1">Messages</span>
          <span class="navIcon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
              <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
              <path
                d="M287.9 0C297.1 0 305.5 5.25 309.5 13.52L378.1 154.8L531.4 177.5C540.4 178.8 547.8 185.1 550.7 193.7C553.5 202.4 551.2 211.9 544.8 218.2L433.6 328.4L459.9 483.9C461.4 492.9 457.7 502.1 450.2 507.4C442.8 512.7 432.1 513.4 424.9 509.1L287.9 435.9L150.1 509.1C142.9 513.4 133.1 512.7 125.6 507.4C118.2 502.1 114.5 492.9 115.1 483.9L142.2 328.4L31.11 218.2C24.65 211.9 22.36 202.4 25.2 193.7C28.03 185.1 35.5 178.8 44.49 177.5L197.7 154.8L266.3 13.52C270.4 5.249 278.7 0 287.9 0L287.9 0zM287.9 78.95L235.4 187.2C231.9 194.3 225.1 199.3 217.3 200.5L98.98 217.9L184.9 303C190.4 308.5 192.9 316.4 191.6 324.1L171.4 443.7L276.6 387.5C283.7 383.7 292.2 383.7 299.2 387.5L404.4 443.7L384.2 324.1C382.9 316.4 385.5 308.5 391 303L476.9 217.9L358.6 200.5C350.7 199.3 343.9 194.3 340.5 187.2L287.9 78.95z" />
            </svg></span>
        </div>
      </nav>
    </div>
    <div class="createPostRow">
      <div class="iconCol">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
          <path
            d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z" />
        </svg>
      </div>
      <div class="createPostCol">
        <input type="text" placeholder="What is in your mind?" v-model="post" />
        <div class="post d-flex justify-content-end">
          <button class="btn btn-primary" @click="postTweet">tweet</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'userInfo'
  ],
  data() {
    return {
      post: "",
    };
  },
  methods: {
    postTweet() {
      let newPost = { user: this.userInfo.username, post: this.post };
      this.$emit("postTweet", newPost);
      this.post = "";
    },
  },
};
</script>

<style>
.post {
  width: 100%;
}

.navIcon svg {
  width: 30px;
  height: 30px;
}

.createPostRow {
  margin: 0 12px;
  display: flex;
}

.iconCol {
  padding: 12px;
  width: fit-content;
  height: 100%;
}

.iconCol svg {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
}

.createPostCol {
  height: 100%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}

.createPostCol input {
  width: 100%;
  margin: 12px;
  font-size: 1, 5rem;
}
</style>
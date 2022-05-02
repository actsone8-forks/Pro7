<template>
  <div class="home">
    <div class="row">
      <div class="col-md-3 homeColumn"> Chit-chat at work!</div>
      <div class="col-md-9 homeColumn2">
        <CreatePost :posts="posts" @postTweet="postTweet" />
        <FeedPage :posts="posts" />
      </div>
    </div>
  </div>
</template>

<script>
import CreatePost from "../components/CreatePost.vue";
import FeedPage from "../components/FeedPage.vue";

export default {
  name: "HomeView",
  data() {
    return {
      posts: [
        {
          user: "Tom",
          post: "My first post here",
        },
        { user: "Eelika", post: "I`m feeling good today" },
      ],
    };
  },
  components: {
    CreatePost,
    FeedPage,
  },
  methods: {
    postTweet(post) {
      this.posts.push(post);
    },
  },
};
</script>
<style>
.homeColumn {
  height: 200px;
  font-size: 30px;
  color:#1c92d2;
 
}
.homeColumn2 {
  height: 200px;
}
.home {
  margin: 2rem 5rem;
}
</style>

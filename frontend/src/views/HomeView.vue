<template>
  <div class="home">
    <div class="row">
      <div class="col-md-3 homeColumn"> Chit-chat at work!</div>
      <div class="col-md-9 homeColumn2">
        <CreatePost :posts="posts" @postTweet="postTweet" />
        <FeedPage :posts="posts" />
        <DeleteUser/>
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
      posts: [],
    };
  },
  components: {
    CreatePost,
    FeedPage,
  },
  methods: {
    postTweet(post) {
      try {
        if (post.post === "" || post.user === '') throw "Input required";
        this.posts.unshift(post);
        localStorage.setItem('posts', JSON.stringify(this.posts))
      } catch (error) {
        alert(error);
      }
     
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

<template>
  <div class="home">Hello
    <div class="row">
      <div class="col-md-3 homeColumn">
        <UserCard :userInfo="userInfo" />
      </div>
      <div class="col-md-9 homeColumn2">
        <CreatePost :posts="posts" @postTweet="postTweet" :userInfo="userInfo" />
        <FeedPage :posts="posts" />
      </div>
    </div>
  </div>
</template>

<script>
import CreatePost from "../components/CreatePost.vue";
import FeedPage from "../components/FeedPage.vue";
import UserCard from "../components/UserCard.vue";

export default {
  name: "HomeView",
  data() {
    return {
      posts: [],
      user: [],
      userInfo: [],
    };
  },
  components: {
    CreatePost,
    FeedPage,
    UserCard,
  },
  methods: {
    postTweet(post) {
      try {
        if (post.post === "" || post.user === "") throw "Input required";
        this.posts.unshift(post);
        localStorage.setItem('posts', JSON.stringify(this.posts));
      } catch (error) {
        alert(error);
      }
    },
  },
  mounted() {
    this.user = JSON.parse(localStorage.getItem("user"))
      ? JSON.parse(localStorage.getItem("user"))
      : {};

    if (!this.user) {
      this.$router.push({ name: "landingView" });

    }
    if (this.user && this.user.id) {
      fetch(`http://localhost:3000/api/user/${this.user.id}`)
        .then((res) => res.json())
        .then((data) => {
          localStorage.setItem("userInfo", JSON.stringify(data));
        });

    }
    this.posts = JSON.parse(localStorage.getItem("posts"))
      ? JSON.parse(localStorage.getItem("posts"))
      : [];
  },

  computed: {
    UserInfo: () => {
      return JSON.parse(localStorage.getItem("userInfo"))
        ? JSON.parse(localStorage.getItem("userInfo"))
        : []
    }
  },
};
</script>
<style>
.home {
  margin: 2rem 5rem;
}
</style>

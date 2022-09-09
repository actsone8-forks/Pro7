<template>
  <div class="home">
    <div class="row">
      <div class="col-md-3 homeColumn">
        <UserCard :userInfo="userInfo" />
      </div>
      <div class="col-md-9 homeColumn2">
        <div v-if="isLoading">
          <h1>Loading...</h1>
        </div>
        <div v-else>
          <CreatePost
            :posts="posts"
            @postTweet="postTweet"
            :userInfo="userInfo"
          />
          <FeedPage :posts="posts" />
        </div>
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
      isLoading: true,
    };
  },
  components: {
    CreatePost,
    FeedPage,
    UserCard,
  },
  methods: {
    async postTweet(post) {
      try {
        if ((!post.file && post.post === "") || post.user === "") throw "Input required";
        const user = JSON.parse(localStorage.getItem("authenticatedUser"));
        // Form datas are used to send files to the server
        const formData = new FormData();
        formData.append("file", post.file);
        formData.append("post", post.post);
        formData.append("user", user.id);

        await this.axios.post("http://localhost:3000/api/posts/add", formData, {
          headers: {
            Authorization: `Bearer ${this.$store.state.token}`,
            // Setting content type to multipart/form-data will enable the server to handle the file upload
            "Content-Type": "multipart/form-data",
          },
        });
        this.getPosts();
      } catch (error) {
        alert(error);
      }
    },

    async getPosts() {
      try {
        this.posts = [];
        const result = await this.axios.get("http://localhost:3000/api/posts", {
          headers: {
            Authorization: `Bearer ${this.$store.state.token}`,
          },
        });
        this.posts = result.data;
        this.isLoading = false;
      } catch (error) {
        alert(error);
      }
    },
  },
  async mounted() {
    await this.getPosts();
  },

  computed: {
    UserInfo: () => {
      return JSON.parse(localStorage.getItem("userInfo"))
        ? JSON.parse(localStorage.getItem("userInfo"))
        : [];
    },
  },
};
</script>
<style>
.home {
  margin: 2rem 5rem;
}
</style>

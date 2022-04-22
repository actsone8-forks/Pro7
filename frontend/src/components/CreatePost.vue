 <template>
  <div id="createPost">
    <form @submit="postData" method="post">
      <input
        type="text"
        name="author"
        placeholder="author"
        v-model="posts.author"
      />
      <br />
      <br />
      <input
        type="text"
        name="title"
        placeholder="title"
        v-model="posts.title"
      />
      <br />
      <br />
      <button type="submit">Post</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "CreatePost",
  data() {
    return {
      posts: {
        title: null,
        author: null,
      },
    };
  },
  methods: {
    postData(e) {
      this.axios
        .post("http://localhost:3000/api/post/", this.post)
        .then((result) => {
          console.warn(result);
        });
      e.preventDefault();
    },
  },
};
</script>

<style>
.navIcon svg {
  width: 30px;
  height: 30px;
}
.createPostRow {
  margin: 0 12px;
}
.iconCol {
  padding: 12px;
}
.iconCol svg {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
}
</style>
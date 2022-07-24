<template>
  <div class="chat-box">
    <div class="createPostRow" v-for="(post,) in posts" :key="post.user">
      <div class="iconCol">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
          <path
            d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z" />
        </svg>
      </div>
      <div class="createPostCol">
        <h2>{{ post.user }}</h2>
        <div class="post d-flex justify-content-start">
          <p>{{ post.post }}</p>
        </div>
        <!-- <div class="card-body1" v-if="typeof data.message.isRead"></div>
        
          <button class="btn btn-primary" @click="isRead(index)= false" :disabled="!data.message.isRead">
            <i class="fa fa-envelope-open" aria-hidden="true"></i>&nbsp; Mark as unread</button>
          <button class="btn btn-primary" @click="isRead(index) = true" :disabled="data.message.isRead"></button>
        -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["posts"],
};
</script>


<style>
.createPostRow {
  margin-bottom: 2rem;
}
</style>
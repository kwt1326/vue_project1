<template>
  <div class="container">
    <h1>Welcome My WebGame World!</h1>
    <div class="page_list">
      <div @click="go('test')">Go to API TestPage</div>
      <div @click="go('chat')">Go to ChatRoom</div>
    </div>
  </div>
</template>

<script>
export default {
  methods : {
    go: function ( page ) {
      this.$router.push(page);
    }
  }
}
</script>

<style src="./index.scss" scoped>

</style>
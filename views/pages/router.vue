<template>
  <div id='app'>
    <router-view name='headerComponent'></router-view>
      <router-view></router-view>
    <router-view name='footerComponent'></router-view>
  </div>
</template>

<script>
import router from '../../routes';

export default {
  router
}
</script>

<style lang="scss" scoped>
</style>
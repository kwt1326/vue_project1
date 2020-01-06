<template>
  <div class="headerContainer" v-once>
    <div class="mainButton"><span><h2>Re:Life</h2></span></div>
    <li :key="data" v-for="data in navButtons">{{ data }}</li>
  </div>
</template>

<script>
export default {
  name: 'headerComponent',
  props: {},
  data () {
    return {
      navButtons : ['Archive', 'Tags', 'Infos', 'About'],
    }
  },
  mounted () {

  },
}
</script>

<style src="./header.scss" scoped></style>
<template>
  <div>
    <p @click="ping">GameServer PingTest</p>
    <div>{{ ping_result }}</div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'mainPage',
  props: {},
  data () {
    return {
      ping_result: '',
    }
  },
  mounted () {

  },
  methods: {
    ping: function () {
      axios({
          method : 'get',
          url : 'http://localhost:8090/api/v1/ping',
        })
        .then(res => {
          this.ping_result = res.data;
        })
        .catch(err => {
            alert(`서버 오류 : ${err}`);
        })
    }
  }
}
</script>

<style>

</style>
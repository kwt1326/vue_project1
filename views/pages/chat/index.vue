<template>
  <div class="container">
    <div class="chat_space">
      <p>Chat Room</p>
      <div class="chats_place">
        <div class="chat_item" v-bind:key="index" v-bind:left="elem.left" v-for="(elem, index) in chat_items">
          <div class="chat_item_wrap">
            <div class="chat_title" v-if="elem.left === 'true'">{{elem.user}} ></div>
            <div class="chat_content">{{elem.content}}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="input_wrap">
      <span>메시지 : </span>
      <input v-model="input_chat" />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      input_chat: '',
      chat_items: [
          { left: 'true', content: "Go", user: "other_boy"},
          { left: 'true', content: "C++", user: "other_boy"},
          { left: 'false', content: "javaScript", user: "other_girl"},
        ],
    }
  },
  methods: {
    sendMsg: function () {
      axios({
          method: 'post',
          url: 'http://localhost:8090/api/v1/send_message',
          data: {
            
          }
        })
        .then(res => {
          this.ping_result = res.data;
        })
        .catch(err => {
            alert(`서버 오류 : ${err}`);
        })
    }
  },
  mounted () {
  },
}
</script>

<style src="./chat.scss" scoped>

</style>
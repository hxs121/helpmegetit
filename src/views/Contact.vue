<template>
  <mu-paper :z-depth="1" class="demo-list-wrap">
    <mu-appbar color="#9c27b0">
      <mu-button icon type="button" class="back" @click="back()" style="position: fixed; top:1%;">
        <mu-icon value="arrow_back" left color="white"></mu-icon>
      </mu-button>
    </mu-appbar>
    <mu-container class="feedback">
      <mu-text-field v-model="number" type="number" placeholder="联系电话" icon="phone" full-width></mu-text-field>
      <br/>
      <mu-text-field v-model="content" multi-line :rows="5" icon="comment" placeholder="请给我们您对该应用的宝贵意见！"
                     full-width></mu-text-field>
      <br/>
    </mu-container>
    <mu-button style="position: absolute; bottom: 54%; right: 10%" type="button" color="#f50057" @click="send()">
      发送
      <mu-icon right value="send"></mu-icon>
    </mu-button>
  </mu-paper>
</template>

<script>
export default {
  name: "Contact",
  data() {
    return {
      number: '',
      content: ''
    }
  },
  methods: {
    send() {
      localStorage.setItem("number", this.number)
      localStorage.setItem("content", this.content)
      this.number = ''
      this.content = ''
    },
    back() {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss">
.demo-list-wrap {
  width: 100%;
  overflow: hidden;
}
.feedback {
  position: absolute;
  top: 15%;
}

.back {
  position: absolute;
  left: 2%;
  top: 2%;
}
</style>

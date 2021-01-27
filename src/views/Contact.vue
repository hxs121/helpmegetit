<template>
  <div>
    <mu-appbar style="position: fixed; top:0 ; left: 0; width: 100%;">
      <mu-button icon type="button" class="back" @click="back()">
        <mu-icon value="arrow_back" left color="black"></mu-icon>
      </mu-button>
    </mu-appbar>
    <mu-container class="feedback">
      <mu-text-field v-model="number" type="number" placeholder="联系电话" icon="phone" full-width></mu-text-field>
      <br/>
      <mu-text-field v-model="content" multi-line :rows="5" icon="comment" placeholder="请给我们您对该应用的宝贵意见！"
                     full-width></mu-text-field>
      <br/>
    </mu-container>
    <mu-button style="position: absolute; bottom: 54%; right: 10%" type="button" color="blue" @click="send()">
      发送
      <mu-icon right value="send"></mu-icon>
    </mu-button>
  </div>
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

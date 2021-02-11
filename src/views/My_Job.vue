<template>
  <mu-paper :z-depth="1" class="demo-list-wrap">
    <mu-appbar color="green" style="text-align: center">
      我的接单
      <mu-button icon type="button" class="back" @click="back()" style="position: fixed; top:1%;">
        <mu-icon value="arrow_back" left color="white"></mu-icon>
      </mu-button>
    </mu-appbar>
    <mu-list textline="two-line" v-for="(job,index) in Lists" :key="index" >
      <mu-list-item avatar :ripple="false">
        <mu-list-item-content>
          <mu-list-item-title>帮忙内容:{{ job.title }}</mu-list-item-title>
          <mu-list-item-sub-title>
            具体要求:{{ job.content }}
          </mu-list-item-sub-title>
          <mu-list-item-after-text>赏金:{{ job.income }}元</mu-list-item-after-text>
        </mu-list-item-content>
      </mu-list-item>
      <mu-divider></mu-divider>
    </mu-list>
  </mu-paper>
</template>

<script>
import store from '@/store'

export default {
  name: "My_Job",
  store,
  computed: {
    Lists() {
      return store.state.jobs
    }
  },
  methods: {
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
.back {
  position: absolute;
  left: 2%;
  top: 2%;
}
</style>

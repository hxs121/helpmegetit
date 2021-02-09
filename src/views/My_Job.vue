<template>
  <div>
    <mu-appbar color="green" style="text-align: center;position: fixed; top:0 ; left: 0; width: 100%;">
      我的接单
      <mu-button icon type="button" class="back" @click="back()">
        <mu-icon value="arrow_back" left color="white"></mu-icon>
      </mu-button>
    </mu-appbar>
    <mu-list textline="two-line" v-for="(job,index) in Lists" :key="index" style="position: fixed; top: 7%">
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
  </div>
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
.back {
  position: absolute;
  left: 2%;
  top: 2%;
}
</style>

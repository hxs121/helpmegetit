<template>
  <mu-paper :z-depth="1" class="demo-list-wrap">
    <mu-appbar color="#ffcd38" style="text-align: center">
      我的发布
    </mu-appbar>
    <mu-button icon type="button" class="back" @click="back()">
      <mu-icon value="arrow_back" left color="white"></mu-icon>
    </mu-button>
    <mu-list textline="two-line" v-for="(item,index) in pageLists" :key="index">
      <mu-list-item avatar :ripple="false" >
        <mu-list-item-content>
          <mu-list-item-title>帮忙{{ item.problem }}</mu-list-item-title>
          <mu-list-item-sub-title>
            具体要求:{{ item.details }}
          </mu-list-item-sub-title>
        </mu-list-item-content>
        <mu-list-item-action>
          <mu-list-item-after-text>赏金:{{ item.money }}元</mu-list-item-after-text>
        </mu-list-item-action>
      </mu-list-item>
      <mu-divider></mu-divider>
    </mu-list>
  </mu-paper>
</template>

<script>
import store from '@/store'
export default {
  name: "Mypost",
  store,
  computed:{
    pageLists() {
      return store.state.lists
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
  top: 0.5%;
}
</style>

<template>
  <mu-paper :z-depth="1" class="demo-list-wrap">
    <mu-appbar color="#ff9800" style="text-align: center">
      接单大厅
    </mu-appbar>
    <mu-list textline="two-line" v-for="(item,index) in pageLists" :key="index">
      <mu-list-item avatar :ripple="true" button @click="temp">
        <mu-list-item-content>
          <mu-list-item-title>帮忙{{ item.problem }}</mu-list-item-title>
          <mu-list-item-sub-title style="color: rgba(0, 0, 0, .87)">地址:{{ item.address }}</mu-list-item-sub-title>
          <mu-list-item-sub-title>
            具体要求:{{ item.details }}
          </mu-list-item-sub-title>
        </mu-list-item-content>
        <mu-list-item-action>
          <mu-list-item-after-text>建议送达时间:{{ item.timeValue }}</mu-list-item-after-text>
          <mu-list-item-after-text>赏金:{{ item.money }}元</mu-list-item-after-text>
        </mu-list-item-action>
      </mu-list-item>
      <mu-divider></mu-divider>
    </mu-list>
    <mu-dialog title="您已成功接单" width="360" :open.sync="openSimple">
      其余功能还未完成
      <mu-button slot="actions" flat color="primary" @click="closeSimpleDialog">好</mu-button>
    </mu-dialog>
  </mu-paper>
</template>

<script>
import store from '@/store'

export default {
  name: "Help_Center",
  store,
  data(){
    return{
      openSimple:false
    }
  },
  computed: {
    pageLists() {
      return store.state.lists
    }
  },
  methods:{
    temp(){
      this.openSimple = true
    },
    closeSimpleDialog(){
      this.openSimple = false
      store.commit('myAddJob', {
        title: this.problem,
        content: this.details,
        income: this.money
      })
    }
  }
}
</script>

<style lang="scss">
.demo-list-wrap {
  width: 100%;
  overflow: hidden;
}
</style>

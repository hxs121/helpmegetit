<template>
  <div>
    <mu-flex justify-content="around">
      <mu-chip class="demo-chip" @click="login" color="">
        <mu-avatar :size="78">
          <img src="@/assets/logo.png" alt="">
        </mu-avatar>
        <p>{{ message }}</p>
      </mu-chip>
      <mu-flex justify-content="center" style="position: fixed; top: 18%; right: 3%">
        <mu-button @click="openAlertDialog" round small color="#ef5350">注  销</mu-button>
      </mu-flex>
      <mu-dialog title="提示！" width="550" max-width="80%" :esc-press-close="false" :overlay-close="false" :open.sync="openAlert">
        您确定要注销账号吗？
        <mu-button slot="actions" flat color="primary" @click="closeAlertDialog">取消</mu-button>
        <mu-button slot="actions" flat color="primary" @click="logout">好</mu-button>
      </mu-dialog>
      <mu-list style="position: absolute;top: 25%;">
        <mu-list-item button :ripple="true" to="address">
          <mu-list-item-action>
            <mu-icon value="location_on"></mu-icon>
          </mu-list-item-action>
          <mu-list-item-title>收货地址</mu-list-item-title>
        </mu-list-item>
        <mu-list-item button :ripple="true" to="my_post">
          <mu-list-item-action>
            <mu-icon value="flight_takeoff"></mu-icon>
          </mu-list-item-action>
          <mu-list-item-title>我的发布</mu-list-item-title>
        </mu-list-item>
        <mu-list-item button :ripple="true" to="my_job">
          <mu-list-item-action>
            <mu-icon value="add_shopping_cart"></mu-icon>
          </mu-list-item-action>
          <mu-list-item-title>我的接单</mu-list-item-title>
        </mu-list-item>
        <mu-list-item button :ripple="true" to="contact">
          <mu-list-item-action>
            <mu-icon value="drafts"></mu-icon>
          </mu-list-item-action>
          <mu-list-item-title>联系我们</mu-list-item-title>
        </mu-list-item>
      </mu-list>
    </mu-flex>
  </div>
</template>

<script>
import store from '@/store'
export default {
  name: "Account",
  store,
  methods: {
    login() {
      this.$router.push('login')
    },
    logout() {
      localStorage.clear()
      this.openAlert = false
      location.reload()
      // this.$store.commit('changeLogin',false)
    },
    openAlertDialog () {
      this.openAlert = true;
    },
    closeAlertDialog () {
      this.openAlert = false;
    }
  },
  data() {
    return {
      message: localStorage.getItem("username"),
      openAlert: false
    }
  }
}
</script>

<style lang="scss">
.demo-chip {
  position: fixed;
  top: 2%;
  width: 90%;
  height: 12%;
  text-align: center;
  margin: 8px;
  vertical-align: middle;
}
</style>

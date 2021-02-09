<template>
  <div>
    <router-view/>
    <link rel="stylesheet" href="https://cdn.bootcss.com/material-design-icons/3.0.1/iconfont/material-icons.css">
    <div>
      <mu-container class="container" color="green">
        <mu-bottom-nav :value="bottomNav">
          <mu-bottom-nav-item title="接单大厅" icon="home" to="/help_center" value="help_center"></mu-bottom-nav-item>
          <mu-bottom-nav-item title="发布任务" icon="location_on" to="/job_offer" value="job_offer"></mu-bottom-nav-item>
          <mu-bottom-nav-item title="个人中心" icon="people" to="/account" value="account"></mu-bottom-nav-item>
        </mu-bottom-nav>
      </mu-container>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bottomNav: 'help_center'
    }
  },
  created() {
    this.checkNav()
  },
  watch: {
    '$route': 'checkNav'
  },
  methods: {
    checkNav() {
      if (this.$route.path === 'help_center') {
        this.bottomNav = 'help_center'
      }
      if (this.$route.path === 'job_offer') {
        this.bottomNav = 'job_offer'
      }
      if (this.$route.path === 'account') {
        this.bottomNav = 'account'
      }
    }
  }

}

</script>
<style lang="scss">
.container {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  max-width: 100%;
}

.alert-demo-wrapper {
  width: 100%;

  > .mu-alert {
    margin-bottom: 16px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  > .mu-button {
    margin: 0 auto;
    display: block;
  }
}
</style>

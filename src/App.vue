<template>
  <div>
    <router-view/>
    <link rel="stylesheet" href="https://cdn.bootcss.com/material-design-icons/3.0.1/iconfont/material-icons.css">
    <div>
      <mu-container class="container" color="green">
        <mu-bottom-nav>
          <mu-bottom-nav-item title="求帮忙" icon="home" to="/help_center"></mu-bottom-nav-item>
          <mu-bottom-nav-item title="跑腿大厅" icon="location_on" to="/job_offer"></mu-bottom-nav-item>
          <mu-bottom-nav-item title="个人中心" icon="people" to="/account"></mu-bottom-nav-item>
        </mu-bottom-nav>
      </mu-container>
    </div>
  </div>
</template>

<script>
export default {
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

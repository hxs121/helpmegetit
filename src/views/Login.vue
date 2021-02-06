<template>
  <div>
    <mu-container>
      <mu-appbar style="position: fixed; top:0 ; left: 0; width: 100%;" color="primary" z-depth="6">
        <form v-if="!isAgree">
          <mu-button icon slot="left" style="position: relative; left: -3%; bottom: -3.4px" type="button"
                     @click="goBack">
            <mu-icon value="arrow_back"></mu-icon>
          </mu-button>
          登录
        </form>
        <form v-else>
          <mu-button icon slot="left" style="position: relative; left: -3%; bottom: -3.4px" type="button"
                     @click="goLogin">
            <mu-icon value="arrow_back"></mu-icon>
          </mu-button>
          注册
        </form>
      </mu-appbar>
      <mu-form ref="form" :model="validateForm" class="mu-demo-form" v-if="!isAgree"><!-- 未登录状态-->
        <mu-form-item label="用户名" prop="username" :rules="usernameRules">
          <mu-text-field v-model="validateForm.username" prop="username"></mu-text-field>
        </mu-form-item>
        <mu-form-item label="密码" prop="password" :rules="passwordRules">
          <mu-text-field type="password" v-model="validateForm.password" prop="password"></mu-text-field>
        </mu-form-item>
        <mu-form-item >
          <mu-button color="primary" @click="submit">登录</mu-button>
          <mu-button @click="register">注册</mu-button>
        </mu-form-item>
      </mu-form>
      <mu-form ref="form" :model="validateForm" class="mu-demo-form" v-else>
        <mu-form-item label="用户名" prop="username" :rules="usernameRules">
          <mu-text-field v-model="validateForm.username" prop="username"></mu-text-field>
        </mu-form-item>
        <mu-form-item label="密码" prop="password" :rules="passwordRules">
          <mu-text-field type="text" v-model="validateForm.password" prop="password"></mu-text-field>
        </mu-form-item>
        <mu-form-item label="确认密码" prop="password" :rules="passwordRepeatRules">
          <mu-text-field type="text" v-model="validateForm.repeat" prop="password"></mu-text-field>
        </mu-form-item>
        <mu-form-item>
          <mu-button color="primary" @click="addUser">确定</mu-button>
          <mu-button @click="clear">重置</mu-button>
        </mu-form-item>
      </mu-form>
    </mu-container>
  </div>
</template>

<script>
import store from '@/store'

export default {
  name: "Login",
  store,
  data() {
    return {
      usernameRules: [
        {validate: (val) => !!val, message: '必须填写用户名'},
        {validate: (val) => val.length <= 20, message: '用户名长度小于20'}
      ],
      passwordRules: [
        {validate: (val) => !!val, message: '必须填写密码'},
        {validate: (val) => val.length >= 3 && val.length <= 20, message: '密码长度大于3小于20'}
      ],
      passwordRepeatRules: [
        {validate: (val) => !!val, message: '必须填写密码'},
        {validate: (val) => val.length >= 3 && val.length <= 20, message: '密码长度大于3小于20'}
      ],
      validateForm: {
        username: '',
        password: '',
      },
      isAgree: false
    }
  },
  methods: {
    submit() {
      this.$refs.form.validate().then((result) => {
        if (result) {
          if (localStorage.getItem("username") === this.validateForm.username && localStorage.getItem("password") === this.validateForm.password) {
            this.validateForm = {
              username: '',
              password: '',
            }
            alert("登录成功！")
            this.$router.push('Account')
          } else if (this.validateForm.username === '') {
            alert("请输入用户名")
          } else if (this.validateForm.password === '') {
            alert("密码不得为空！")
          } else {
            alert("用户名或密码错误！")
          }
        } else {
          alert("用户名或密码错误！")
        }
      })
    },
    register() {
      this.validateForm = {
        username: '',
        password: '',
      }
      this.isAgree = true
    },
    addUser() {
      this.$refs.form.validate().then((result) => {
        if (result) {
          if (this.validateForm.password === this.validateForm.repeat) {
            localStorage.setItem("username", this.validateForm.username)
            localStorage.setItem("password", this.validateForm.password)
            this.validateForm = {
              username: '',
              password: '',
            }
            this.isAgree = false
            alert("注册成功！")
          } else if (this.validateForm.username === '') {
            alert("用户名不得为空")
          } else {
            alert("两次密码输入不一致！")
          }
        } else {
          alert("密码不符合要求！")
        }
      });
    },
    clear() {
      this.$refs.form.clear();
      this.validateForm = {
        username: '',
        password: '',
        isAgree: false
      };
    },
    goBack() {
      this.$router.go(-1)
    },
    goLogin() {
      this.isAgree = false
    }
  }
}
</script>

<style lang="scss">
.mu-demo-form {
  position: fixed;
  top: 12%;
  left: 4%;
  width: 92%;
  max-width: 460px;
}
</style>

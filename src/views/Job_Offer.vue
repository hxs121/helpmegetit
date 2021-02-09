<template>
  <mu-container>
    <mu-appbar color="#2196f3" class="head">
      发布任务
    </mu-appbar>
    <mu-form :model="form" class="mu-demo-form" :label-position="labelPosition" label-width="200" ref="form">
      <mu-form-item prop="problem" label="需要别人帮您什么？" :rules="problemRule">
        <mu-select v-model="form.problem">
          <mu-option v-for="option , index in options" :key="option" :label="option" :value="option"></mu-option>
        </mu-select>
      </mu-form-item>
      <mu-form-item prop="address" label="请输入目的地" :rules="addressRule">
        <mu-text-field multi-line :rows="1" :rows-max="10" v-model="form.address"></mu-text-field>
      </mu-form-item>
      <mu-form-item prop="details" label="有什么具体的要求？" :rules="detailsRule">
        <mu-text-field multi-line :rows="3" :rows-max="10" v-model="form.details"></mu-text-field>
      </mu-form-item>
      <mu-form-item prop="timeValue" label="期望送达时间" :rules="timeRule">
        <mu-date-input type="time" v-model="form.timeValue" clock-type="24hr" actions
                       label-float view-type="list" multi-line :rows="1"></mu-date-input>
      </mu-form-item>
      <mu-form-item prop="money" label="输入您的回馈￥" label-position="top" :rules="moneyRule">
        <mu-text-field v-model="form.money" oninput="value=value.replace(/[^\d]/g,'')"></mu-text-field>
      </mu-form-item>
      <mu-button color="#f50057" type="button" @click="sendInfo" style="position: fixed; right:41%;">发 布</mu-button>
    </mu-form>
  </mu-container>
</template>

<script>
import store from '@/store'
import dayjs from 'dayjs'

export default {
  name: "Job_Offer",
  store,
  data() {
    return {
      options: [
        '拿快递', '拿外卖', '带饭', '代买'
      ],
      labelPosition: 'top',
      form: {
        problem: '',
        details: '',
        timeValue: '',
        address: '',
        money: ''
      },
      problemRule: [
        {validate: (val) => !!val, message: '必须填写'}
      ],
      addressRule: [
        {validate: (val) => !!val, message: '必须填写'}
      ],
      detailsRule: [
        {validate: (val) => !!val, message: '必须填写'}
      ],
      timeRule: [
        {validate: (val) => !!val, message: '必须填写'}
      ],
      moneyRule: [
        {validate: (val) => !!val, message: '必须填写'}
      ]
    }
  },
  methods: {
    sendInfo() {
      this.$refs.form.validate().then((result) => {
        if (result) {
          store.commit('addItem', {
            problem: this.form.problem,
            details: this.form.details,
            timeValue: dayjs(this.form.timeValue).format('HH:mm'),
            address: this.form.address,
            money: this.form.money
          })
          this.$router.push('help_center')
          alert("发布成功！")
        }
      })
    }
  }
}
</script>

<style lang="scss">
.mu-demo-form {
  width: 100%;
  max-width: 460px;
}

.head {
  text-align: center;
  width: 100%;
  position: fixed;
  top: 0%;
  left: 0%;
  overflow: hidden;
}
</style>

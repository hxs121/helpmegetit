<template>
  <mu-container>
    <mu-form :model="form" class="mu-demo-form" :label-position="labelPosition" label-width="200">
      <mu-form-item prop="select" label="需要别人帮您什么？">
        <mu-select v-model="form.select">
          <mu-option v-for="option, index in options" :key="option" :label="option" :value="option"></mu-option>
        </mu-select>
      </mu-form-item>
      <mu-form-item prop="textarea" label="请输入目的地">
        <mu-text-field multi-line :rows="1" :rows-max="10" v-model="form.address"></mu-text-field>
      </mu-form-item>
      <mu-form-item prop="textarea" label="有什么具体的要求？">
        <mu-text-field multi-line :rows="3" :rows-max="10" v-model="form.details"></mu-text-field>
      </mu-form-item>
      <mu-col span="12" lg="4" sm="6">
        <mu-date-input icon="today" type="time" v-model="form.timeValue" clock-type="24hr" label="期望送达时间" actions
                       label-float format="hh:mm"></mu-date-input>
      </mu-col>
      <mu-form-item prop="input" label="输入您的回馈￥" label-position="top">
        <mu-text-field v-model="form.money" oninput="value=value.replace(/[^\d]/g,'')"></mu-text-field>
      </mu-form-item>
      <mu-button color="primary" type="button" @click="sendInfo" style="position: fixed; right:41%;">发 布</mu-button>
    </mu-form>
  </mu-container>
</template>

<script>
import store from '@/store'

export default {
  name: "Job_Offer",
  store,
  data() {
    return {
      options: [
        '快递', '外卖', '带饭', '代买'
      ],
      labelPosition: 'top',
      form: {
        select:'',
        details: '',
        timeValue: '',
        address: '',
        money: ''
      }
    }
  },
  methods: {
    sendInfo() {
      store.commit('addItem', {
        select: this.form.select,
        details: this.form.details,
        timeValue: this.form.timeValue,
        address: this.form.address,
        money: this.form.money
      })
      this.$router.push('Help_Center')
    }
  }
}
</script>

<style lang="scss">
.mu-demo-form {
  width: 100%;
  max-width: 460px;
}
</style>

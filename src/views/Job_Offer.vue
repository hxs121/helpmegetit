<template>
<!--  <div>-->
<!--    <p>标题</p>-->
<!--    <label>-->
<!--      <input type="text" v-model="title">-->
<!--    </label>-->
<!--    <p>内容</p>-->
<!--    <label>-->
<!--      <input type="text" v-model="content">-->
<!--    </label>-->
<!--    <div class="btn" @click="add()">添加</div>-->
<!--  </div>-->
  <mu-container>
    <mu-flex align-items="center" style="padding-bottom: 8px;">
      <span style="margin-right: 16px;">Label Position:</span>
      <mu-radio v-model="labelPosition" style="margin-right: 16px;" value="top" label="Top"></mu-radio>
      <mu-radio v-model="labelPosition" style="margin-right: 16px;" value="left" label="Left"></mu-radio>
      <mu-radio v-model="labelPosition" style="margin-right: 16px;" value="right" label="Right"></mu-radio>
    </mu-flex>
    <mu-form :model="form" class="mu-demo-form" :label-position="labelPosition" label-width="200">
      <mu-form-item prop="select" label="需要别人帮您什么？">
        <mu-select v-model="form.select">
          <mu-option v-for="option, index in options" :key="option" :label="option" :value="option"></mu-option>
        </mu-select>
      </mu-form-item>

      <mu-col span="12" lg="4" sm="6">
        <mu-date-input  icon="today" container="dialog" v-model="timeValue" label="期望送达时间" type="time" actions label-float full-width clock-type="24hr"></mu-date-input>
      </mu-col>
      <mu-form-item prop="radio" label="Radio">
        <mu-radio v-model="form.radio" value="male" label="Male"></mu-radio>
        <mu-radio v-model="form.radio" value="female" label="Female"></mu-radio>
      </mu-form-item>
      <mu-form-item prop="checkbox" label="Checkbox">
        <mu-checkbox v-model="form.checkbox" value="eat" label="Eat"></mu-checkbox>
        <mu-checkbox v-model="form.checkbox" value="sleep" label="Sleep"></mu-checkbox>
        <mu-checkbox v-model="form.checkbox" value="run" label="Run"></mu-checkbox>
        <mu-checkbox v-model="form.checkbox" value="movie" label="Movie"></mu-checkbox>
      </mu-form-item>

      <mu-form-item prop="textarea" label="Textarea">
        <mu-text-field multi-line :rows="3" :rows-max="6" v-model="form.textarea"></mu-text-field>
      </mu-form-item>
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
      title: '',
      content: '',
      options: [
        '快递', '外卖', '带饭', '代买'
      ],
      labelPosition: 'top',
      form: {
        input: '',
        select: '',
        date: '',
        radio: '',
        checkbox: [],
        switch: false,
        slider: 30,
        textarea: '',
        timeValue:undefined
      }
    }
  },
  methods: {
    add() {
      store.commit('addItem', {
        title: this.title,
        content: this.content,
      })
      this.title=''
      this.content=''
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

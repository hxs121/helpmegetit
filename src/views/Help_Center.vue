<template>
  <div>
    <ul>
      <li v-for="(item,index) in pageLists"
          :key="index">
        {{ item.title }}-{{ item.content }}-{{item.select}}-{{item.details}}-{{item.timeValue}}-{{item.address}}-{{item.money}}
      </li>
    </ul>
  </div>
</template>

<script>
import store from '@/store'
export default {
  name: "Help_Center",
  store,
  computed: {
    pageLists() {
      return store.state.lists
    }
  }
}
</script>

<style scoped>

</style>

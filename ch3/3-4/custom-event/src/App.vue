<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Component from './components/Component.vue';

export default {
  data() {
    return {
      msg: '초기 메시지',
      msg2: '초기 메시지 2',
    }
  },
  components: {
    Component,
  }
}
</script>

<template>
  <p>{{ `[${msg}] : ${msg2}` }}</p>
  <Component v-model:msg="msg" v-model:msg2="msg2" />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

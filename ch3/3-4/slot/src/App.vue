<!-- // 최상위 주석은 html 주석.

음, react 에서는 props 로 아래로 데이터가 흘러가야 한다.
지금의 slot 은 아래에서 위로 끌어올리기라 Thinking in React 사고에서는 쓸 수 없군.

-->

<template>
  <Component>
    <template v-slot="slotProps"> ✔️ {{ slotProps.item }} </template>
  </Component>
</template>

<script>
import Component from './components/Component.vue';

export default {
  components: {
    Component,
  }
}
</script>

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

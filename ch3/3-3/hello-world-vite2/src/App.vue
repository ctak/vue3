<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from '/@components/HelloWorld.vue';
//import * as Code3 from '/@components/C_3Dash7.vue'; // 이 부분도 실패하네.
import Foo01 from '/@components/Foo01.vue';
import Foo02 from '/@components/Foo02.vue';
import TestEventListener from '/@components/TestEventListener.vue';
import TestVIf from '/@components/TestVIf.vue';
import TestVFor from '/@components/TestVFor.vue';
import TestComputed from '/@components/TestComputed.vue';
import TestWatch from '/@components/TestWatch.vue';
</script>

/*
// vscode 에서 아무리 빨간색이라도 vue3 에서는 template 의 ROOT 는 필요없어.
*/
<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + Vite" />
  <hr />
  <Foo01 />
  <hr />
  <Foo02 />
  <hr />
  <TestEventListener />
  <hr />
  <TestVIf />
  <hr />
  <TestVFor />
  <hr />
  <TestComputed />
  <hr />
  <TestWatch />
  <hr />
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

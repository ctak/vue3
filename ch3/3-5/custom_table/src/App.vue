<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import MyTable from './components/MyTable.vue'

export default {
  name: 'App',
  data() {
    return {
      header: ['1번 제목', '2번 제목'],
      rows: [
        [{ data: '1번 내용' }, {data: '2번 내용'}],
        [{ data: '1번 내용2', colspan: 2}],
      ],
      rows2: [
        [{ data: '1번 내용' }, {data: '2번 내용'}],
        [{ data: '1번 내용2', colspan: 2}],
        [{ data: '1번 내용3', rowspan: 3}, { data: '2번 내용3'}],
        [{ data: '2번 내용4' }],
        [{ data: '2번 내용5' }],
      ]
    }
  },
  components: {
    MyTable,
  }
}
</script>

<template>
  <h1>{{ header }}</h1>
  <MyTable v-bind:header="header" :rows="rows" />
  <h2>Practice</h2>
  <my-table :header="header" :rows="rows2" />
</template>

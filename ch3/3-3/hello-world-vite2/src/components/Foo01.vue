<template>
  <div id="date">
    {{ date }}
  </div>
  <div v-pre>{{ date }}</div>
  <div id="date2">{{ date2 }}</div>
</template>

<script>
export default {
  // composition API
  setup() {
    const date = Date().toString();
    return { 
      date,
      onMounted() { // 이런 것은 setup 에서 어떻게 사용하는 것인지...
        console.log('[%s] onMounted', 'Foo01');
      },

    };
  },

  // options api
  data() {
    return {
      date2: Date().toString(),
    }
  },
}
</script>

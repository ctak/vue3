<template>
  <p>{{ count_o }}</p>
  <button @click="count_o++">Options API 카운트 증가</button>
  <p>{{ count_c_1 }}</p>
  <button @click="count_c_1++">Composition API 1st 카운트 증가</button>
  <p>{{ count_c_2 }}</p>
  <button @click="count_c_2++">Composition API 2nd 카운트 증가</button>
  <p>상태: {{ state }}</p>
  <button @click="onStop()">watchEffect 중지</button>
</template>

<script>
import { ref, watch, watchEffect } from 'vue';

export default {
  // Options API
  data() {
    return {
      count_o: 0,
    }
  },
  watch: {
    count_o: (cur, prev) => {
      console.log('Options API watch: ' + prev + ' ==> ' + cur);
    },
  },

  // Composition API
  setup() {

    // set 에서 선언만으로 하는 것은 script 에서 setup 을 썼을 때임.
    const count_c_1 = ref(0);
    const count_c_2 = ref(0);
    const state = ref('실행 중');

    watch(
      count_c_1,
      (cur, prev) => {
        console.log('Composition API Watch ' + prev + ' ==> ' + cur)
      },
      {
        immediate: true,
      }
    );

    watch([count_c_1, count_c_2], (cur, prev) => {{
      console.log('Composition API Multiple Watch ' + prev + ' ==> ' + cur)
    }});

    // watchEffect() 의 return 도 function 이네.
    const stop = watchEffect(
      () => {
        console.log('Composition API watchEffect Called ' + count_c_2.value)
      },
      {
        flush: 'post',
      },
    )

    const onStop = () => {
      state.value = '중지';
      stop();
    }

    return {
      count_c_1,
      count_c_2,
      state,
      onStop,
    }

  }
}
</script>

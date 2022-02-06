<template>
  <p>줄임말과 원래말을 입력하세요.</p>
  <input type="text" v-bind:value="abbr" /><!-- js event loop 가 있을 때 다시 돌아옴. -->
  <input type="text" v-model="normal" />
  <hr />
  <abbr v-bind:title="normal">{{ abbr }}</abbr>
</template>

<script setup>

/* import { ref } from 'vue'; // ref 는 프록시. 밸류를 감싸는 proxy. const

export default {
  // Composition API
  setup() {
    const abbr = ref('DOPT')
    const normal = ref('Dong Project Team');
    return { abbr, normal };
  }
};
 */
/* 이건 사라짐.
ref: abbr = 'DOPT'
ref: normal = 'Dong Project Team'
*/
import { ref } from 'vue';

/* defineProps({ // 이건 없어도 됨.
  abbr: String,
  normal: String,
})
 */
const abbr = ref('DOPT');
const normal = ref('Dong Project Team');

</script>

import { createApp } from 'vue'

const app = createApp({
  template: `
    <div style="height: 1000px; border: 1px solid red;">
      <p v-notification:right="100">고정 자리에 표시하기</p>
    </div>
  `,
});

app.directive('notification', (el, binding, vnode, preNode) => {
  el.style.position = 'fixed';
  el.style[binding.arg || 'top'] = binding.value + 'px';
  el.style.border = '1px solid blue';
});

app.mount('#app');

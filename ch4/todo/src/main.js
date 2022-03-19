import { createApp } from 'vue'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.esm.min.js'; // 이건 왜 바로 import 하지? // MDN 에서는 [어떠한 바인딩 없이 모듈 전체의 사이드 이펙트만 가져옵니다] 로 표기.

import { DateTime } from 'luxon';

const app = createApp(App);
app.provide('today', DateTime.now().toFormat('yyyy-MM-dd'));
app.mount('#app');

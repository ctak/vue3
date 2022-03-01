<template>
  <label>이름 : </label>
  <input type="text" v-model="result.name" placeholder="이름" /><br />
  <label>나이 : </label>
  <input type="number" v-model="result.age" placeholder="나이" /><br />
  <label>성별(Radio) : </label>
  <label>남성</label>
  <input type="radio" name="gender" v-model="result.gender" value="male" /><!-- 여기서는 name 을 쓰는데, 다른 input 에서는 name을 안 써도 되네. -->
  <label>여성</label>
  <input type="radio" name="gender" v-model="result.gender" value="female" /><!-- select 의 결과는 array 일 테지. -->
  <br />
  <label>취미 : </label>
  <span v-for="hobby in hobby_options" :key="hobby">
    <input type="checkbox" v-model="result.hobby" v-bind:value="hobby" /><label>{{ hobby }}</label>
  </span><br />
  <label>비번 : </label>
  <input type="password" v-model="result.password" /><br />
  <label>국가 : </label>
  <select v-model="result.country">
    <option v-for="country in country_options" :key="country">
      {{ country }}
    </option>
  </select><br />

  <label>날짜 : </label>
  <input type="date" v-model="result.date" /><br />

  <label>시간 : </label>
  <input type="time" v-model="result.time" /><br />

  <label>색상 : </label>
  <input type="color" v-model="result.color" /><br />

  <label>범위 : </label>
  <input type="range" min="1" max="100" v-model="result.range" /><br />

  <div>
    <h3>결과</h3>
    <hr />
    {{ result }}
  </div>
</template>

<script>
import { reactive } from 'vue';

export default {
  setup() {

    const name = '';
    const age = 0;
    // const gender = null; // default 가 '' false 면 선택이 되지 않는군. 재미있는 게 undefined 일 때는 view 에 보이지 않고 null 일 때는 view 에 보이네.
    const gender = 'male';
    const hobby = []; // 일단 '스포츠' 는 고정이군. 처음부터 배열이군.
    const hobby_options = ['스포츠', '그림', '음악', '코딩'];
    const password = '';
    const country = '한국';
    const country_options = ['한국', '미국', '중국'];
    
    const now = new Date();
    now.setDate(now.getDate() - 1);
    // const date = now; // now 로 했을 때는 먹히지 않음. date 는 물론 어젝밧을 가지고 있음.
    // const date = '2022-02-28'; // 아 문자로만 해야 먹히는군.
    const date = now.toISOString().substring(0, 10); // 결국 이렇게 해야 날짜를 표현할 수 있군. 그런데 이렇게 했을 시, ISOString 이라 문제가 발생하겠군.
    
    const time = ''; // [null] 일 때는 비어 있음. 오전/오후 도 힘듦. '' 도 마찬가지 임. 

    const color = '#ff0000';

    const range = 50;

    const result = reactive({
      name,
      age,
      gender,
      hobby,
      password,
      country,
      date,
      time,
      color,
      range,
    });

    return {
      result,
      hobby_options,
      country_options,
    }
  },
}
</script>

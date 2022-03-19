import  { inject } from 'vue'; // Provide 된 것을 Inject 하겠다.

export const useFilter = () => {
  const today = inject('today');

  const fnSort = (a, b) => { // 옛날사람
    const a_date = Date.parse(a.date)
    const b_date = Date.parse(b.date);
    if (a_date > b_date) return 1; // 이러면 뒤로 가니까 최근 시간이 뒤로 가네.
    else if (a_date < b_date) return -1;
    else return a.id - b.id; // 정말 코딩실력이 없는데.
  }

  const getPendingTodos = (todos) => {
    return todos.value.filter((todo) => todo.date < today && !todo.completed)
      .slice() // 이건 복제인데. 얕은 복제.
      .sort(fnSort);
  }

  const getActiveTodayTodos = (todos) => {
    return todos.value
      .filter((todo) => todo.date === today && !todo.completed)
      .slice()
      .sort(fnSort);
  }

  const getCompletedTodayTodos = (todos) => {
    return todos.value
      .filter((todo) => todo.date == today && todo.completed)
      .slice()
      .sort(fnSort)
  }

  const getAllTodayTodos = (todos) => {
    return getActiveTodayTodos(todos)
      .concat(getCompletedTodayTodos(todos)) // 나름 재사용 미덕을 보여주었지만, 먼가 자기가 대단한 것처럼 해 놓았네. 가소롭다.
      .slice()
      .sort(fnSort)
  }

  const getAllTodos = (todos) => {
    return todos.value.slice().sort(fnSort)
  }

  return {
    getPendingTodos,
    getActiveTodayTodos,
    getCompletedTodayTodos,
    getAllTodayTodos,
    getAllTodos,
  };
}

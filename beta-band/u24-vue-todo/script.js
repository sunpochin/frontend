new Vue({
  el:'#app',
  data: {
    title: '哈嘍，Vue',
    message: 'message, vue',
    isCompleted: true,
    firstTodo: {
      title: '學習 Vue Template 的使用',
      completed: true,
    },
    secondTodo: {
      title: '學習在 Vue Template 中進行條件判斷',
      completed: false,
    },
    thirdTodo: {
      title: '學習在 Vue Template 中使用迴圈',
      completed: true,
    }
  }
})
  
const VimHeader = {
  template:`
    <div class="p-3 text-center">
      <div class="header_tittle my-3 py-3 mx-auto text-white mw-100px">
        <h1 class="display-3">Vim道</h1>
      </div>
    </div>
  `
}

const app = new Vue({
  el: "#app",
  data: {
    questionMode: true,
    questions: [],
    answer_check: true,
  },
  methods: {
    questionChoose: function () {
      this.questionMode = false;
      clickedStartProblems();
      this.questions = questionArray;
    },
    answerCheck: function () {
      this.questionMode = false;
      this.answer_check = false;
      judgeAnswer();
    },
    nextQuestion: function () {
      nextQuestionShow();
      this.answer_check = true;
    },
  },
  components: {
    'vim-header': VimHeader
  }
});

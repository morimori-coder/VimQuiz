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
});

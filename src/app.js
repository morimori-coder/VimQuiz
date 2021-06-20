const app = new Vue({
  el: "#app",
  data: {
    questionMode: true,
    answer_check: true,
    questions: [],
    questionLength,
  },
  methods: {
    questionChoose: function () {
      this.questionMode = false;
      clickedStartProblems();
      this.questions = questionArray;
      this.questionLength = questionLength;
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

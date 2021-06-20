const app = new Vue({
  el: "#app",
  data: {
    questionMode: true,
    answerCheckMode: true,
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
      this.answerCheckMode = false;
      judgeAnswer();
    },
    nextQuestion: function () {
      nextQuestionShow();
      this.answerCheckMode = true;
    },
  },
});

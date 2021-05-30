const { createRouter, createWebHistory, createWebHashHistory } = VueRouter;
const { createApp } = Vue;

const HeaderComponent = {
  template: `
  <div class="p-3 text-center">
    <div class="header_tittle my-3 py-3 mx-auto text-white mw-100px">
      <h1 class="display-3">Vim道</h1>
    </div>
  </div>
`,
};

const PrimaryButton = {
  template: `
  <div class="button_area m-3 m-md-5">
    <router-link to="/quiz">
      <button class="button-primary p-2 text-white" onclick="ClickedStartProblems()">問題スタート</button>
    </router-link>
  </div>`,
};


const DifficultyCheckPage = {
  // 最終的にページ全体を1コンポーネントにする。そのコンポーネント内にパーツ化したコンポーネントを読み込む
  template: `
  <HeaderComponent></HeaderComponent>
  <div class="text_area w-auto mx-4 mx-md-5 text-white">
      <p class="p-3">vimコマンド練習アプリ</p>
      <!-- 難易度選択部分は別コンポーネントに切り出す予定 -->
      <p class="px-3">難易度選択</p>
      <div class="m-3">
        <form name="difficult">
          <label class="difficulty_choose_label mb-4">
            <input type="radio" name="difficulty_choose" value="易しい" />
            <span class="text-white difficulty_level">易しい</span>
          </label>
          <label class="difficulty_choose_label">
            <input type="radio" name="difficulty_choose" value="難しい" />
            <span class="text-white difficulty_level">難しい</span>
          </label>
        </form>
      </div>
    </div>
    <PrimaryButton></PrimaryButton>
  `,
  components: {
    HeaderComponent: HeaderComponent,
    PrimaryButton: PrimaryButton,
  },
};

const QuizPage = {
  template: "<div>Quizページです</div>",
};

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/index.html", component: DifficultyCheckPage },
    { path: "/quiz", component: QuizPage },
  ],
});

const app = createApp({});
app.use(router);
window.vm = app.mount("#app");

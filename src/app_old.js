const { createRouter, createWebHistory, createWebHashHistory } = VueRouter;
const { createApp } = Vue;

// ローカル環境で/VimQuizのURLに遷移するためのボタン。リリース環境では削除する。
const DevelopButton = {
  template: `
  <div class="button_area m-3 m-md-5">
    <router-link to="/VimQuiz">
      <button class="btn btn-danger p-2 text-white">開発環境用ボタン</button>
    </router-link>
  </div>
  <router-link tag="p" to="/page1">page1</router-link>
  `,
};

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
      <button class="button-primary p-2 text-white" onclick="clickedStartProblems()">問題スタート</button>
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
  template: `
  <HeaderComponent></HeaderComponent>
  <div class="text_area w-auto mx-4 mx-md-5 text-white">
    <p class="p-2">説明文にあうVimコマンドを入力してください</p>
    <p class="p-2">Q1: Vimを一時停止する</p>
    <!-- 仮の問題文 -->
    <div>
      <form name="extra_keys">
        <label class="extra_keys p-2 m-2">Ctrl</label
        ><input type="radio" name="command" value="ctrl" />
        <label class="extra_keys p-2 m-2">Shift</label
        ><input type="radio" name="command" value="shift" />
        <label class="extra_keys p-2 m-2">Esc</label
        ><input type="radio" name="command" value="esc" />
      </form>
    </div>
    <textarea class="answer_area w-100 h-50 my-3 text-white" placeholder="コマンドを入力してください"></textarea>
  </div>

  <!-- ボタン間のマージンが効いていないため修正予定 -->
  <div class="button_area m-3 mx-md-5">
    <button class="button-primary p-2 text-white" onclick="someFunc()">
      答え合わせ
    </button>
    <button class="button-primary p-2 text-white" onclick="someFunc()">
      次の問題へ
    </button>
  </div>
  `,
  components: {
    HeaderComponent: HeaderComponent,
  },
};

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/index.html", component: DevelopButton },
    // ローカル環境での開発用のルート。リリース環境では削除する。
    { path: "/VimQuiz", component: DifficultyCheckPage },
    { path: "/quiz", component: QuizPage },
    { path: "/page1", component: httpVueLoader("./page1.vue") },
  ],
});

const app = createApp({});
app.use(router);
window.vm = app.mount("#app");

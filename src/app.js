const { createApp } = Vue;

const StartPage = {
  // 最終的にページ全体を1コンポーネントにする。そのコンポーネント内にパーツ化したコンポーネントを読み込む
  template: `
  <div class="text_area w-auto mx-4 mx-md-5 text-white">
      <p class="p-3">vimコマンド練習アプリ</p>
      <!-- 難易度選択部分は別コンポーネントに切り出す予定 -->
      <p class="px-3">難易度選択</p>
      <div class="m-3">
        <form name="difficult">
          <label class="difficulty_choose_label mb-4">
            <input type="radio" value="易しい" />
            <span class="text-white difficulty_level">易しい</span>
          </label>
          <label class="difficulty_choose_label">
            <input type="radio" value="難しい" />
            <span class="text-white difficulty_level">難しい</span>
          </label>
        </form>
      </div>
    </div>
  `,
};

const PrimaryButton = {
  template: `
  <div class="button_area m-3 m-md-5">
    <button class="button-primary p-2 text-white" onclick="DifficultyCheck()">問題スタート</button>
  </div>`,
};

const app = createApp({
  components: {
    "main-contents": StartPage,
    "primary-button": PrimaryButton,
  },
});
// app.use(router);
window.vm = app.mount("#app");

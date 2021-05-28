
// ヘッダーコンポーネントはapp.jsに移動予定
const headerTemplate = `
  <div class="p-3 text-center">
    <slot name="header"></slot>
  </div>
`;

Vue.component("page-header", {
  template: headerTemplate,
});

new Vue({
  el: "#header",
});

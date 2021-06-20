// level_question_1.jsonから取得したすべての問題を入れる
let allProblem;
// 前回解けなかった問題を入れる
let lastUncorrectQuestions;

// asyncを指定することで、非同期処理となる
// functionを()でくくることで即時関数になる)
(async function getJsonFile() {
    axios.get('./level_question_1.json')
        // thenで成功した場合の処理
        // getしてきたjsonファイルデータをグローバル(どこからでも参照できる)変数に保持する
        .then(res => allProblem = res.data)

        // catchはエラーが起こったときに行う処理
        .catch(res => console.log(res))

        // 最終的に必ず行う処理
        .finally(res => console.log('finally'))
}());

// Localstorageに保存しているJson形式のデータを取得する
(async function getLSJson() {
    // この時点では単に、jsonという名前のLocalstorageデータを取りに行っている
    var data = localStorage.getItem('json');

    // 取得できなかったら処理を返す(次の行に進まない)
    if(data === null){
        lastUncorrectQuestions = null;
        return;
    }

    // 取得できたデータをjson形式に変換
    lastUncorrectQuestions = JSON.parse(data);
}());
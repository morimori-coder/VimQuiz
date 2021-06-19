// 難易度を入れておく変数(ラジオボタンのラベル)
let difficultyValue;
// 問題数
let questionLength;

// 「問題スタート」ボタンをクリックしたときに呼び出される関数
// 難易度と出題数の設定をする
function clickedStartProblems() {
    difficultyValue = radioButtonCheck(document.difficult);
    if(difficultyValue === undefined){
        alert('難易度が選択されていません');

        // 難易度が選択されていなければ早期リターン
        return;
    }

    // 難易度に合わせて問題を格納
    // allProbemはgetJson.jsのグローバル変数
    // allProbemの中身を見るとわかるが、0番目がeasy、1番目がdifficultとなっている
    switch (difficultyValue) {
        case '易しい':
            questionArray = allProblem[0].questions;
            break;

        case '難しい':
            questionArray = allProblem[1].questions;
            break;

        case '間違えた問題':
            questionArray = lastUncorrectQuestions;
        default:
        // 常に入る処理
    }

    // 間違えた問題モード選択時、nullが入る可能性があるため
    if(questionArray != null){
        arrayShuffle(questionArray);
    }
    else{
        alert('前回全問正解してますよ！');
    }

    questionLength = radioButtonCheck(document.number_of_questions);
    if(questionLength == undefined || questionLength == null) {
        questionLength = questionArray.length;
    }
}

// 難易度または問題するのラジオボタンをチェック
function radioButtonCheck(radioButtons){

    let result;
   
   // ラジオボタンの数だけ判定を繰り返す
   // この場合、0～(ラジオボタンの数-1)番目までのfor文にしている
    for(var i=0; i<radioButtons.length; i++){
 
        // i番目のラジオボタンがチェックされているかを判定
        if(radioButtons[i].checked){ 
            flag = true;
            result = radioButtons[i].value;

            // flagがtrueになった時点でfor文を抜ける
            break;
        }
    }

    return result;
}
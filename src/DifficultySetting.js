/////////////////////  難易度関連(start)  //////////////\
// 初期画面で選択状態のラジオボタンを取得する

// 難易度を入れておく変数(ラジオボタンのラベル)
let difficultyValue;

// 出題する問題と解答を入れる変数
let questionArray;

// 「問題スタート」ボタンをクリックしたときに呼び出される関数
function clickedStartProblems() {
    difficultyCheck();

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

        default:
        // どちらでもない場合にする処理を入れる(今のところ処理内容は未定)
    }

    arrayShuffle(questionArray);

    // problemChange();
}

// 難易度チェック
function difficultyCheck(){
    var flag = false; // 選択されているか否かを判定するフラグ
   
   // ラジオボタンの数だけ判定を繰り返す
   // この場合、0～(ラジオボタンの数-1)番目までのfor文にしている
    for(var i=0; i<document.difficult.length; i++){
 
        // i番目のラジオボタンがチェックされているかを判定
        if(document.difficult[i].checked){ 
            flag = true;
            difficultyValue = document.difficult[i].value;

            // このalertはリリース時には削除する予定
            // リリース前だけどうっとしいのでコメントアウト
            // alert(difficultyValue + "が選択されました。");

            // flagがtrueになった時点でfor文を抜ける
            break;
        }
    }
  
    // 何も選択されていない場合の処理
    // デフォルトで選択されているようにすればこのif文自体が不要になる
    if(!flag){ 
        alert("項目が選択されていません。");
    }
}
/////////////////////  難易度関連(end)  //////////////
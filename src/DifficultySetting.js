/////////////////////  難易度関連(start)  //////////////\
// 初期画面で選択状態のラジオボタンを取得する
// 今回はラジオボタンから難易度が取れればそれで十分

// 難易度を入れておく変数(ラジオボタンのラベル)
let difficultyValue;

// 「問題スタート」ボタンをクリックしたときに呼び出される関数
function clickedStartProblems(){
    difficultyCheck();
    console.log(allProblem)
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
            alert(difficultyValue + "が選択されました。");

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
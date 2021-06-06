function someFunc() {
    let textLabel = document.getElementsByClassName('button-primary p-2 text-white');

    //  textLabel.item = 'hoge';
}

let currentQuestion;
let currentAnswer;

// 配列をランダムに並び変える
const arrayShuffle = (array) => {
    for (var i = (array.length - 1); 0 < i; i--) {

        // 0〜(i+1)の範囲で値を取得
        var r = Math.floor(Math.random() * (i + 1));

        // 要素の並び替えを実行
        var tmp = array[i];
        array[i] = array[r];
        array[r] = tmp;

    }
    currentQuestion = array[0].question;
    currentAnswer = array[0].answer;
}

// 解答を判定
const judgeAnswer = () => {
    // 入力された解答を取得
    let anserArea = document.getElementById("answerArea")
    let inputedAnswer = anserArea.value;
    let extraKey = "";

    // 選択されている特殊キーを取得
    for (var i = 0; i < document.extra_keys.length; i++) {
        // i番目のラジオボタンがチェックされているかを判定
        if (document.extra_keys[i].checked) {
            extraKey = document.extra_keys[i].value;
            // ラジオボタンのため、選択された値が取れた時点でfor文を抜ける
            break;
        }
    }

    // 答え合わせの後に表示する解答
    let displayAnswer = currentAnswer;

    // 特殊キーが存在する場合は、displayAnserの表示を「Ctrl + z」みたいにしたいので成形している
    let anserExtraKey = currentAnswer.match(/Ctrl|Shift|Esc/g);
    if (anserExtraKey != null) {
        displayAnswer = currentAnswer.replace(anserExtraKey[0], anserExtraKey[0] + " + ");
    }

    // \nは改行コード
    if (currentAnswer === (extraKey + inputedAnswer)) {
        anserArea.value = "正解！" + "\n" + displayAnswer + " : " + currentQuestion;
    }
    else {
        anserArea.value = "不正解！" + "\n" + displayAnswer + " : " + currentQuestion;
    }
}

// javascriptの変数って任意のタイミングで解放できるのか調べても良いかも
//  →使わなかった問題を格納する変数分のメモリが無駄な気がする

// クイズ画面の各要素を取得し、変数に保持する
// 「問題文」ラベル
// 「キーボード」チェックボックス(数未定)
// 「回答欄」テキストボックス
// 「問題スタート」ボタン
// 「答え合わせ」ボタン
// 「次の問題へ」ボタン


////////////// 問題出力 //////////////
// Questions配列の0番目から順に問題を出題して行く
// 「問題文」ラベルへ出題内容を代入する
// この時にすでに答えはcurrentAnswerに持たせても良いかも

////////////// 答え合わせ //////////////
// 「答え合わせ」ボタン押下時イベントに対して関数を代入する
// 「回答欄」テキストボックスの値とcurrentAnswerを比較する
// 正解/不正解の判定をする
// 正解/不正解および解答を表示する
// 「次の問題へ」ボタンを有効にし、他のボタンは無効にする
// 「次の問題へ」を押下したら、問題出力処理を再度行う

// 最後の問題の答え合わせ画面で「次の問題へ」ボタンを押下したら、
// 最終結果を出力する


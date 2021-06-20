// 出題する問題と解答を入れる変数
let questionArray;
// (画面上で)いま出題している問題
let currentQuestion;
// (画面上で)いま出題している問題の解答
let currentAnswer;
// 出題済みの問題のカウンター
let questionCounter = 0;
// Ctrl,Shift,ESCキーで選択されたものを入れる
let checkedRadioButton;
// 間違えた問題のインデックス
let uncorrectAnsIndex = new Array();

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

    // 第一問を変数に格納
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
        // &&判定で選択状態のラジオボタンのvalueがnoneだった場合はif文に入らないようにしている
        // &&演算子は短絡評価といって、左側の式がfalseなら右側の式を評価しないで全体をfalseにする演算子
        if (document.extra_keys[i].checked && document.extra_keys[i].value !== "none") {
            checkedRadioButton = document.extra_keys[i];
            extraKey = checkedRadioButton.value;
            // ラジオボタンのため、選択された値が取れた時点でfor文を抜ける
            break;
        }
    }

    // 答え合わせの後に表示する解答
    let displayAnswer = detectExtrakey(currentAnswer);

    // \nは改行コード
    if (currentAnswer === (extraKey + inputedAnswer)) {
        anserArea.value = "正解！" + "\n" + displayAnswer + " : " + currentQuestion;
    }
    else {
        anserArea.value = "不正解！" + "\n" + displayAnswer + " : " + currentQuestion;
        // 不正解だった問題の配列番号を保持しておく
        uncorrectAnsIndex.push(questionCounter);
    }
}

// 特殊キーの存在チェックしをし、答えを「Ctrl + z」のような形式に変換している
const detectExtrakey = (answer) => {
    let checkedAnswer = answer.match(/Ctrl|:/g);
    if (checkedAnswer != null) {
        answer = answer.replace(checkedAnswer[0], checkedAnswer[0] + " + ");
    }
    return answer;
}

// 「次の問題へ」ボタンを押した際の処理
function nextQuestionShow() {
    // ラジオボタンが選択されている場合は、選択解除する
    if (checkedRadioButton != undefined) {
        checkedRadioButton.checked = false;
    }

    // 問題を次に進める
    questionCounter += 1;

    // 解答欄の取得とリフレッシュ
    let anserArea = document.getElementById("answerArea");
    anserArea.value = "";

    // 最後の問題まで進んでいるか？を判定している
    if (questionCounter < questionLength) {
        // 画面に出題する問題と答えを格納している
        currentQuestion = questionArray[questionCounter].question
        currentAnswer = questionArray[questionCounter].answer;

        // 問題文を変更
        let questionStatement = document.getElementById("questionStatement");
        questionStatement.innerText = (questionCounter + 1) + "/" + questionLength
            + currentQuestion;
    }
    else {
        finalQuestionFinish(anserArea);
    }
}

// 最後問題が終わっていたら呼び出す関数
const finalQuestionFinish = (anserAreaTextBox) => {
    let defaultStatement = document.getElementById("defaultStatement");
    defaultStatement.innerText = "";
    let questionStatement = document.getElementById("questionStatement");
    questionStatement.innerText = "ブラウザの更新ボタンで初期画面に戻ります。";

    if (uncorrectAnsIndex.length == 0) {
        anserAreaTextBox.value = "全問正解です！\nやったね！！";
    }
    else {
        anserAreaTextBox.value = "間違えた問題はこちらです。\n"
    }

    // 「間違えた問題」モードのために保存する問題を入れる
    const questionsToSave = [];

    // uncorrectAnsIndexに要素が一つも存在しないの場合、このfor文の中には入らない
    // 拡張for文とか言われるものだったはず(var i; i < unncorrectAnsIndexほにゃららとか書かないで済む)
    for (const i of uncorrectAnsIndex) {
        anserAreaTextBox.value += (i + 1) + "/" + questionLength
            + questionArray[i].question + "\n"
            + "答え : " + detectExtrakey(questionArray[i].answer) + "\n";

            questionsToSave.push({question:questionArray[i].question, answer:questionArray[i].answer});
    }

    // localStorageにJson形式で配列をセットする
    localStorage.setItem('json', JSON.stringify(questionsToSave));
}
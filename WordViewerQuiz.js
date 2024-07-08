// function showWordViewerQuiz() {
//     const phraseList = [
//         ["シンリョクの季節", "新緑"],
//         ["iphoneをジュウデンする", "充電"],
//         ["先生にソウダンする", "相談"],
//         ["アキバレの空", "秋晴れ"],
//         ["時間をサイテキに使う", "最適"],
//         ["コウカテキな方法", "効果的"],
//         ["ジュンビが整う", "準備"],
//         ["レイセイな判断", "冷静"],
//         ["テンコウが変わる", "天候"],
//         ["キョウイクの問題", "教育"],
//         ["カイシャの代表", "会社"],
//         ["ショウライの夢", "将来"],
//         ["トショカンに行く", "図書館"],
//         ["カイケツ策を考える", "解決"],
//         ["ジョウキョウを説明する", "状況"],
//         ["コウガクの発展", "工学"],
//         ["シンガッキが始まる", "新学期"],
//         ["セイカクを知る", "性格"],
//         ["カンガエカタを学ぶ", "考え方"],
//         ["レキシを勉強する", "歴史"],
//         ["センタクの自由", "選択"],
//         ["ジッケンを行う", "実験"],
//         ["シュウカンを守る", "習慣"],
//         ["スイエイの練習", "水泳"],
//         ["ユウキを持つ", "勇気"],
//         ["ゲンジツを見る", "現実"],
//         ["セイセキが上がる", "成績"],
//         ["タンサンを飲む", "炭酸"],
//         ["カンキョウを守る", "環境"],
//         ["コウソクを守る", "校則"]
//     ];




























function showWordViewerQuiz() {
    const phraseList = [
        ["シンリョクの季節", "新緑"],
        ["iphoneをジュウデンする", "充電"],
        ["カンキョウを守る", "環境"],
        ["コウソクを守る", "校則"]
    ];

    let phraseListIncorrect = [];
    let currentPhraseIndex = 0;
    const interactedPhrases = [];

    function updatePhraseLabel() {
        const phraseLabel = document.getElementById("phrase-label");
        if (currentPhraseIndex >= 0 && currentPhraseIndex < phraseList.length) {
            phraseLabel.textContent = phraseList[currentPhraseIndex][0];
        } else {
            phraseLabel.textContent = "No more words";
            if (phraseListIncorrect.length === 0) {
                displayPassMessageWithDelay();
            } else {
                displayInteractedPhrasesWithDelay();
            }
        }
    }

    function displayInteractedPhrases() {
        const resultDiv = document.getElementById('phrase-label');
        let tableHtml = "<table><tr><th>Phrase</th><th>Kanji</th></tr>";
        for (const phrase of interactedPhrases) {
            tableHtml += `<tr><td>${phrase[0]}</td><td>${phrase[1]}</td></tr>`;
        }
        tableHtml += "</table>";
        resultDiv.innerHTML = tableHtml;
        resultDiv.classList.remove('hidden');
    }

    function displayInteractedPhrasesWithDelay() {
        const phraseLabel = document.getElementById("phrase-label");
        phraseLabel.innerHTML = "<span class='typing'>結果は...</span>";
        setTimeout(displayInteractedPhrases, 3000);
    }

    function displayPassMessageWithDelay() {
        const phraseLabel = document.getElementById("phrase-label");
        phraseLabel.innerHTML = "<span class='typing'>合格!!</span><br>";
        setTimeout(function() {
            phraseLabel.innerHTML = "合格!!<br>メニューへ";
        }, 3000);
    }

    function checkAnswer() {
        const value = document.getElementById('example').value;
        const resultDiv = document.getElementById('result');
        resultDiv.classList.remove('hidden');

        if (value == 2) {
            resultDiv.innerHTML = "<知らない　　　　　　　　　知ってる！>";
        } else if (value == 1 || value == 3) {
            resultDiv.innerHTML = phraseList[currentPhraseIndex][1];
            if (value == 1) {
                interactedPhrases.push(phraseList[currentPhraseIndex]);
                phraseListIncorrect.push(phraseList[currentPhraseIndex]); // Save incorrect answers
            }
            if (currentPhraseIndex == phraseList.length - 1) {
                if (phraseListIncorrect.length === 0) {
                    displayPassMessageWithDelay();
                } else {
                    displayInteractedPhrasesWithDelay();
                    document.getElementById('example').style.display = 'none';
                    document.getElementById('revenge-button').style.display = 'block';
                }
            }
            currentPhraseIndex = Math.min(currentPhraseIndex + 1, phraseList.length);
        } else {
            resultDiv.innerHTML = "let's swipe";
        }
    }

    function resetSlider() {
        document.getElementById('example').value = 2;
        updatePhraseLabel();
        document.getElementById('result').classList.add('hidden');
    }

    function retryIncorrectPhrases() {
        if (phraseListIncorrect.length > 0) {
            phraseList.length = 0;
            for (const phrase of phraseListIncorrect) {
                phraseList.push(phrase);
            }
            phraseListIncorrect = [];
            currentPhraseIndex = 0;
            interactedPhrases.length = 0;
            document.getElementById('example').style.display = 'block';
            document.getElementById('revenge-button').style.display = 'none';
            resetSlider();
            updatePhraseLabel();
        }
    }

    document.getElementById('example').addEventListener('input', checkAnswer);
    document.getElementById('example').addEventListener('change', resetSlider);
    document.getElementById('revenge-button').addEventListener('click', retryIncorrectPhrases);

    updatePhraseLabel();
}

function backMenu() {
    window.location.href = 'WordViewer.html';
}

document.addEventListener('DOMContentLoaded', showWordViewerQuiz);

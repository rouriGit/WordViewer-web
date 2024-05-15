// 最初の画面（WordViewerStart）を表示する関数
function showStartScreen() {
    document.getElementById("content").innerHTML = `
        <h1>Welcome to WordViewer</h1>
        <button onclick="showChoiceScreen()">Start</button>
    `;
}

// 学年選択画面（WordViewerChoice）を表示する関数
function showChoiceScreen() {
    document.getElementById("content").innerHTML = `
        <h1>Choose Your Grade</h1>
        <button onclick="showWordViewer(1)">1年生</button>
        <button onclick="showWordViewer(2)">2年生</button>
        <button onclick="showWordViewer(3)">3年生</button>
        <button onclick="showWordViewer(4)">4年生</button>
        <button onclick="showWordViewer(5)">5年生</button>
        <button onclick="showWordViewer(6)">6年生</button>
    `;
}

// 漢字表示画面（WordViewer）を表示する関数
function showWordViewer(grade) {
    // 仮のデータ
    const wordList = [
            ["圧", "アツ", "圧力", "圧倒", "圧縮", "圧勝", "強圧"],
            ["囲", "かこ(う)かこ(む)・イ", "包囲", "囲碁", "周囲", "囲む", "囲い"],
            ["移", "うつ(す)うつ(る)・イ", "移動", "移民", "移転", "移行", "移植"],
            ["因", "よ・イン", "原因", "因果", "要因", "因縁", "因習"],
            ["永", "なが(い)・エイ", "永遠", "永久", "永住", "永続", "永日"],
            ["液", "えき", "液体", "血液", "消化液", "液晶", "粘液"],
            ["栄", "さか・エイ", "栄光", "栄養", "繁栄", "栄える", "栄え"],
            ["営", "いとな(む)・エイ", "営業", "経営", "営み", "営む", "営利"],
            ["衛", "エイ", "衛生", "衛星", "守衛", "自衛", "防衛"],
            ["易", "やさ(しい)・イ", "容易", "易しい", "難易度", "安易", "易学"],
            ["異", "こと・イ", "異常", "異議", "異文化", "異動", "異性"],
            ["遺", "のこ・イ", "遺伝", "遺跡", "遺産", "遺言", "遺体"],
            ["域", "イキ", "地域", "区域", "領域", "境域", "方面域"],
            ["影", "かげ・エイ", "影響", "影響力", "映像", "撮影", "影響力"],
            ["欠", "か・ケツ", "欠点", "欠席", "欠陥", "欠員", "欠ける"],
            ["押", "お・オウ", "押印", "押収", "押さえる", "押し出す", "押し切る"],
            ["欧", "オウ", "欧州", "欧米", "欧文", "西欧", "北欧"],
            ["央", "オウ", "中央", "央画", "央子", "央区", "央線"],
            ["桜", "さくら・オウ", "桜花", "桜前線", "桜並木", "夜桜", "桜色"],
            ["恩", "オン", "恩返し", "恩人", "恩情", "恩師", "恩恵"],
            ["可", "か", "可能", "可決", "価格", "可愛い", "可視化"],
            ["仮", "かり・カ", "仮定", "仮名", "仮設", "仮面", "仮想"],
            ["河", "かわ・カ", "河川", "大河", "河口", "銀河", "河岸"],
            ["過", "す・カ", "過去", "通過", "過ぎる", "過ごす", "過ち"],
            ["賀", "ガ", "祝賀", "賀正", "年賀", "賀詞", "年賀状"],
            ["快", "こころよ・カイ", "快適", "快速", "愉快", "快楽", "快晴"],
            ["解", "と・カイ", "解決", "解答", "解散", "解説", "理解"],
            ["格", "カク", "性格", "合格", "格好", "格差", "資格"],
            ["確", "たし・カク", "確認", "確信", "確実", "確定", "明確"],
            ["額", "ひたい・ガク", "額縁", "額面", "金額", "額帯", "額書"],
            ["刊", "カン", "週刊", "月刊", "新刊", "創刊", "刊行"],
            ["幹", "みき・カン", "幹線", "幹部", "幹事", "幹細胞", "幹竹"],
            ["慣", "な・カン", "慣用", "慣性", "慣行", "慣例", "慣れる"],
            ["眼", "まなこ・ガン", "眼球", "眼鏡", "眼力", "眼科", "視眼"],
            ["基", "もと・キ", "基本", "基準", "基地", "基盤", "基礎"],
            ["寄", "よ・キ", "寄付", "寄宿", "寄生", "寄港", "寄せる"],
            ["規", "キ", "規則", "規律", "規範", "規格", "規約"],
            ["記", "しる・キ", "記録", "記念", "日記", "記入", "記事"],
            ["義", "ギ", "正義", "義務", "義理", "講義", "義理人情"],
            ["儀", "ギ", "儀式", "礼儀", "行儀", "意義", "礼儀作法"],
            ["疑", "うたが・ギ", "疑問", "疑惑", "疑心", "疑似", "疑う"],
            ["吸", "す・キュウ", "吸収", "吸引", "吸う", "吸盤", "吸着"],
            ["巨", "キョ", "巨大", "巨人", "巨額", "巨星", "巨富"],
            ["許", "ゆる・キョ", "許可", "許容", "許す", "許諾", "特許"],
            ["境", "さかい・キョウ", "境界", "境遇", "国境", "境内", "境地"],
            ["均", "キン", "平均", "均等", "均一", "均衡", "均整"],
            ["禁", "キン", "禁止", "禁煙", "禁忌", "禁固", "禁令"],
            ["句", "ク", "文句", "成句", "俳句", "詩句", "短句"],
            ["郡", "グン", "郡部", "郡山", "郡域", "郡内", "郡制"],
            ["群", "む・グン", "群集", "群衆", "群れ", "群島", "群体"],
            ["径", "ケイ", "直径", "半径", "径路", "径行", "径長"],
            ["景", "ケイ", "景色", "風景", "景気", "景観", "景品"],
            ["芸", "ゲイ", "芸術", "芸能", "芸人", "園芸", "手芸"],
            ["欠", "か・ケツ", "欠点", "欠席", "欠陥", "欠員", "欠ける"],
            ["結", "むす・ケツ", "結婚", "結果", "結論", "結合", "結ぶ"],
            ["建", "た・ケン", "建設", "建物", "建築", "建てる", "建造"],
            ["健", "すこ・ケン", "健康", "健在", "健診", "健全", "健やか"],
            ["憲", "ケン", "憲法", "憲章", "憲政", "立憲", "違憲"],
            ["権", "ケン", "権利", "権力", "権限", "権威", "政権"],
            ["源", "みなもと・ゲン", "源泉", "水源", "起源", "資源", "根源"],
            ["厳", "きび・ゲン", "厳格", "厳重", "厳しい", "厳守", "厳然"],
            ["己", "おのれ・コ", "自己", "知己", "克己", "利己", "己心"],
            ["呼", "よ・コ", "呼吸", "呼称", "呼ぶ", "呼び出す", "呼応"],
            ["固", "かた・コ", "固定", "固有", "固体", "固める", "固執"],
            ["功", "コウ", "成功", "功績", "功罪", "功労", "業績"],
            ["好", "この・コウ", "好意", "好感", "好調", "好き", "好む"],
            ["航", "コウ", "航空", "航海", "航行", "飛航", "船航"],
            ["候", "そうろう・コウ", "気候", "候補", "後候", "冷候", "候鳥"],
            ["構", "かま・コウ", "構造", "構想", "構築", "構える", "構う"],
            ["鉱", "コウ", "鉱山", "鉱物", "鉱石", "鉱業", "鉱脈"],
            ["興", "おこ・コウ", "興味", "興行", "興奮", "興す", "興す"],
            ["講", "コウ", "講義", "講演", "講座", "講習", "講読"],
            ["告", "つ・コク", "告白", "告訴", "告知", "告げる", "報告"],
            ["混", "ま・コン", "混雑", "混乱", "混同", "混じる", "混ぜる"],
            ["査", "サ", "調査", "検査", "捜査", "査定", "査察"],
            ["差", "さ・サ", "差別", "差異", "差額", "差し引き", "差す"],
            ["財", "サイ", "財産", "財政", "経財", "財宝", "資財"],
            ["罪", "つみ・ザイ", "犯罪", "罪悪", "有罪", "無罪", "罪人"],
            ["雑", "ザツ", "雑誌", "雑音", "混雑", "複雑", "雑草"],
            ["酸", "す・サン", "酸素", "酸性", "酸化", "酸っぱい", "酸味"],
            ["賛", "サン", "賛成", "賛同", "賛美", "賛歌", "賛否"],
            ["至", "いた・シ", "至急", "至高", "至る", "至って", "至難"],
            ["私", "わたくし・シ", "私立", "私生活", "私有", "私服", "私財"],
            ["詩", "シ", "詩人", "詩歌", "詩集", "詩情", "詩的"],
            ["詞", "シ", "歌詞", "詞章", "詞意", "詞曲", "詞文"],
            ["誌", "シ", "雑誌", "記誌", "刊誌", "誌名", "冊誌"],
            ["視", "シ", "視覚", "視点", "視力", "視野", "視察"],
            ["試", "こころ・シ", "試験", "試合", "試みる", "試し", "試行"],
            ["詞", "シ", "歌詞", "詞章", "詞意", "詞曲", "詞文"],
            ["伺", "うかが・シ", "伺候", "伺い", "伺察", "伺点", "伺者"],
            ["児", "ジ", "児童", "育児", "小児", "小児科", "孤児"],
            ["持", "も・ジ", "持参", "持続", "支持", "保持", "持ち物"],
            ["次", "つ・ジ", "次回", "次第", "次元", "次ぐ", "次ぐ"],
            ["示", "しめ・ジ", "示唆", "示談", "示威", "示す", "指示"],
            ["治", "なお・ジ", "治療", "治安", "政治", "治める", "治水"],
            ["辞", "や・ジ", "辞書", "辞任", "辞表", "辞退", "辞める"],
            ["式", "シキ", "形式", "儀式", "式場", "公式", "方程式"],
            ["識", "シキ", "知識", "識別", "識者", "意識", "識見"],
            ["質", "シツ", "品質", "本質", "性質", "質疑", "質量"],
            ["社", "シャ", "会社", "社会", "社員", "社長", "神社"],
            ["者", "もの・シャ", "記者", "研究者", "若者", "学者", "患者"],
            ["射", "い・シャ", "射撃", "射精", "射る", "発射", "射殺"],
            ["捨", "す・シャ", "捨てる", "捨て子", "放捨", "捨生", "棄捨"],
            ["取", "と・シュ", "取得", "取材", "取引", "取る", "取り"],
            ["受", "う・ジュ", "受験", "受理", "受付", "受ける", "受け入れ"],
            ["授", "さず・ジュ", "教授", "授与", "授業", "授かる", "授ける"],
            ["樹", "ジュ", "樹木", "樹立", "樹齢", "樹脂", "果樹"],
            ["収", "おさ・シュウ", "収入", "収穫", "収録", "収める", "収支"],
            ["州", "シュウ", "州立", "州境", "州道", "州政府", "州議会"],
            ["習", "なら・シュウ", "学習", "練習", "習得", "習慣", "習う"],
            ["集", "あつ・シュウ", "集合", "集会", "集める", "集団", "収集"],
            ["週", "シュウ", "週間", "週末", "毎週", "週刊", "週日"],
            ["述", "の・ジュツ", "記述", "述べる", "述語", "述懐", "述成"],
            ["術", "ジュツ", "技術", "芸術", "手術", "武術", "術語"],
            ["準", "ジュン", "準備", "準決", "基準", "準備", "準じる"],
            ["序", "ジョ", "序論", "序列", "秩序", "序曲", "序章"],
            ["将", "ショウ", "将来", "将軍", "将棋", "大将", "将校"],
            ["照", "て・ショウ", "照明", "対照", "照合", "照らす", "照れ"],
            ["象", "ショウ", "現象", "対象", "象徴", "象形", "映像"],
            ["賞", "ショウ", "賞金", "受賞", "褒賞", "称賛", "賞品"],
            ["省", "かえり・セイ", "省略", "省エネ", "反省", "省察", "省く"],
            ["星", "ほし・セイ", "星座", "星空", "明星", "北極星", "星団"],
            ["精", "セイ", "精密", "精力", "精神", "精進", "精鋭"],
            ["製", "セイ", "製品", "製造", "製作", "製薬", "製鋼"],
            ["税", "ゼイ", "税金", "消費税", "課税", "納税", "関税"],
            ["積", "つ・セキ", "面積", "積分", "積極", "積む", "積もる"],
            ["設", "もう・セツ", "設置", "設計", "設定", "設立", "設ける"],
            ["説", "と・セツ", "説明", "説得", "解説", "小説", "伝説"],
            ["接", "つ・セツ", "接触", "接続", "直接", "接近", "接する"],
            ["折", "お・セツ", "折衷", "折る", "折れる", "挫折", "折り紙"],
            ["節", "ふし・セツ", "節約", "関節", "季節", "節目", "調節"],
            ["説", "と・セツ", "説明", "説得", "解説", "小説", "伝説"],
            ["専", "セン", "専門", "専攻", "専属", "専用", "専念"],
            ["泉", "いずみ・セン", "温泉", "泉水", "泉源", "冷泉", "泉都"],
            ["浅", "あさ・セン", "浅瀬", "浅薄", "浅海", "浅緑", "浅墓"],
            ["洗", "あら・セン", "洗濯", "洗顔", "洗車", "洗う", "洗い物"],
            ["染", "そ・セン", "染料", "感染", "染色", "染まる", "染める"],
            ["善", "よ・ゼン", "改善", "善行", "善意", "善悪", "善人"],
            ["然", "ゼン", "自然", "当然", "天然", "突然", "全然"],
            ["祖", "ソ", "祖先", "祖母", "祖国", "祖父", "先祖"],
            ["素", "ソ", "素材", "素質", "素朴", "元素", "素顔"],
            ["総", "ソウ", "総合", "総額", "総理", "総数", "総裁"],
            ["造", "つく・ゾウ", "製造", "造船", "構造", "造る", "造形"],
            ["増", "ふ・ゾウ", "増加", "増大", "増額", "増す", "増える"],
            ["蔵", "くら・ゾウ", "蔵書", "冷蔵", "宝蔵", "蔵入", "蔵人"],
            ["属", "ゾク", "所属", "属国", "配属", "所属", "直属"],
            ["続", "つづ・ゾク", "続行", "続編", "続く", "続ける", "連続"],
            ["卒", "ソツ", "卒業", "卒業生", "卒倒", "卒中", "卒後"],
            ["孫", "まご・ソン", "子孫", "孫娘", "孫息子", "祖孫", "孫兄弟"],
    ];

    let currentIndex = 0;

    // 漢字を更新する関数
    function updateWordLabel() {
        const wordLabel = document.getElementById("word-label");
        if (currentIndex >= 0 && currentIndex < wordList.length) {
            wordLabel.textContent = wordList[currentIndex][0];
        } else {
            wordLabel.textContent = "No more words";
        }
    }

    // キーボード操作を処理する関数
    function handleKeyPress(event) {
        const keyCode = event.keyCode;
        switch (keyCode) {
            case 39: // 右矢印キー
                currentIndex = Math.min(currentIndex + 1, wordList.length - 1);
                updateWordLabel();
                break;
            case 37: // 左矢印キー
                currentIndex = Math.max(currentIndex - 1, 0);
                updateWordLabel();
                break;
            case 32: // スペースキー
                if (currentIndex >= 0 && currentIndex < wordList.length) {
                    const wordLabel = document.getElementById("word-label");
                    wordLabel.textContent = wordList[currentIndex][1];
                }
                break;
        }
    }

    function handleKeyRelease(event) {
        const keyCode = event.keyCode;
        if (keyCode === 32) { // スペースキー
            updateWordLabel();
        }
    }

    // 漢字表示画面のHTMLを設定
    document.getElementById("content").innerHTML = `
        <h1>Word Viewer</h1>
        <div id="word-label" class="word-label"></div>
        <button onclick="showChoiceScreen()">Start Over</button>
    `;

    // 初期化
    updateWordLabel();
    window.addEventListener("keydown", handleKeyPress);
    window.addEventListener("keyup", handleKeyRelease);
}

// 初期画面を表示
showStartScreen();

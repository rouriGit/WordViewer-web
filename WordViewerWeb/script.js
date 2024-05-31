// 最初の画面（WordViewerStart）を表示する関数
function showStartScreen() {
    document.getElementById("content").innerHTML = `
        <h1>Welcome to WordViewer</h1>
        <button onclick="showChoiceScreen()">Start</button>
    `;
}

// 選択オプションを格納する変数
let choice = "";

// オプション選択画面を表示する関数
function showChoiceScreen() {
    document.getElementById("content").innerHTML = `
        <h1>Choose an Option</h1>
        <button onclick="chooseOption('reading')">読み</button>
        <button onclick="chooseOption('compound')">熟語</button>
    `;
}

// オプション選択後に学年選択画面を表示する関数
function chooseOption(selectedChoice) {
    choice = selectedChoice;
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
    const wordList1 = [
        ["日", "ひ・ニチ", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日"],
        ["一", "いち・イチ", "一つ", "2日", "3人", "4部", "5方"],
        ["円", "えん・エン", "1円", "2円", "3円", "4円", "5円"]
    ];
    const wordList2 = [
        ["一", "いち・イチ", "一つ", "一日", "一人", "一部", "一方"]
    ];
    const wordList3 = [
        ["円", "えん・エン", "円", "百円", "千円", "円高", "円安"]
    ];
    const wordList4 = [
        ["火", "ひ・カ", "火曜日", "火山", "火災", "火事", "火力"]
    ];
    const wordList5 = [
        ["圧", "おさ(える)・アツ", "圧力", "圧倒", "圧迫", "気圧", "血圧"],
        ["移", "うつ(る)・イ", "移動", "移民", "移行", "移植", "移転"],
        ["因", "よ(る)・イン", "原因", "要因", "因果", "因習", "因縁"],
        ["永", "なが(い)・エイ", "永久", "永遠", "永住", "永眠", "永続"],
        ["営", "いとな(む)・エイ", "営業", "経営", "営利", "営む", "営々"],
        ["衛", "えい", "衛生", "防衛", "衛星", "守衛", "衛兵"],
        ["易", "やさ(しい)・エキ/イ", "容易", "易者", "貿易", "易経", "難易"],
        ["益", "ま(す)・エキ", "利益", "有益", "益々", "公益", "増益"],
        ["液", "えき", "液体", "血液", "液晶", "消毒液", "液状"],
        ["演", "えん", "演劇", "演奏", "演出", "演技", "演説"],
        ["応", "こた(える)・オウ", "応答", "対応", "応援", "応用", "応急"],
        ["往", "い(く)・オウ", "往復", "往診", "往来", "往々", "往時"],
        ["桜", "さくら・オウ", "桜花", "桜前線", "桜並木", "桜祭り", "桜色"],
        ["恩", "おん", "恩人", "恩返し", "恩恵", "恩義", "恩師"],
        ["可", "か", "可能", "許可", "不可", "可決", "可愛い"],
        ["仮", "かり・カ", "仮定", "仮説", "仮面", "仮名", "仮装"],
        ["価", "あたい・カ", "価格", "価値", "高価", "定価", "物価"],
        ["河", "かわ・カ", "河川", "銀河", "河口", "大河", "河岸"],
        ["過", "す(ぎる)・カ", "過去", "過程", "過失", "通過", "過半数"],
        ["賀", "が", "祝賀", "年賀", "賀正", "祝賀会", "賀状"],
        ["快", "こころよ(い)・カイ", "快適", "快調", "愉快", "快感", "快諾"],
        ["解", "と(く)・カイ", "解決", "理解", "解答", "解放", "解散"],
        ["格", "かく", "価格", "格好", "合格", "格別", "資格"],
        ["確", "たし(か)・カク", "確実", "確認", "確信", "確立", "確保"],
        ["額", "ひたい・ガク", "額縁", "金額", "全額", "額面", "差額"],
        ["刊", "かん", "出版", "刊行", "発刊", "週刊", "創刊"],
        ["幹", "みき・カン", "幹部", "幹線", "幹事", "幹細胞", "新幹線"],
        ["慣", "な(れる)・カン", "習慣", "慣例", "慣行", "慣用", "慣習"],
        ["眼", "まなこ・ガン", "眼科", "眼鏡", "眼力", "近眼", "眼光"],
        ["基", "もと・キ", "基本", "基準", "基地", "基礎", "基盤"],
        ["寄", "よ(る)・キ", "寄付", "寄宿", "寄生", "寄港", "寄稿"],
        ["規", "き", "規則", "規制", "規模", "定規", "規律"],
        ["技", "わざ・ギ", "技術", "技師", "特技", "技量", "演技"],
        ["義", "ぎ", "正義", "義務", "義理", "主義", "義父"],
        ["逆", "さか・ギャク", "逆転", "逆行", "逆効果", "逆説", "逆風"],
        ["久", "ひさ(しい)・キュウ", "久しぶり", "久遠", "永久", "久々", "久住"],
        ["旧", "きゅう", "旧友", "旧暦", "旧姓", "旧跡", "旧知"],
        ["居", "い(る)・キョ", "居間", "居住", "居留", "居心地", "住居"],
        ["許", "ゆる(す)・キョ", "許可", "許容", "許諾", "許婚", "免許"],
        ["境", "さかい・キョウ", "境界", "国境", "環境", "境内", "境遇"],
        ["均", "きん", "平均", "均一", "均整", "均衡", "均等"],
        ["禁", "きん", "禁止", "禁煙", "禁忌", "禁酒", "禁制"],
        ["句", "く", "句読点", "俳句", "熟語", "名句", "警句"],
        ["群", "む(れ)・グン", "群集", "群島", "群衆", "群馬県", "群体"],
        ["経", "へ(る)・ケイ", "経済", "経営", "経度", "経典", "経過"],
        ["潔", "いさぎよ(い)・ケツ", "潔白", "潔癖", "清潔", "潔い", "潔廉"],
        ["件", "けん", "事件", "条件", "件名", "案件", "要件"],
        ["券", "けん", "切符", "商品券", "入場券", "定期券", "特別券"],
        ["険", "けわ(しい)・ケン", "危険", "険悪", "冒険", "険しい", "険阻"],
        ["検", "けん", "検査", "検討", "検証", "検疫", "試験"],
        ["限", "かぎ(る)・ゲン", "制限", "限界", "期限", "限定", "無限"],
        ["現", "あらわ(れる)・ゲン", "現在", "現実", "現金", "現代", "現場"],
        ["減", "へ(る)・ゲン", "減少", "減税", "減量", "減退", "減収"],
        ["故", "ゆえ・コ", "故障", "事故", "故郷", "故人", "故意"],
        ["個", "こ", "個人", "個性", "個別", "個数", "個室"],
        ["護", "ご", "保護", "看護", "愛護", "護衛", "護送"],
        ["効", "き(く)・コウ", "効果", "効力", "有効", "効能", "効率"],
        ["厚", "あつ(い)・コウ", "厚生", "厚意", "厚手", "厚顔", "厚着"],
        ["耕", "たがや(す)・コウ", "耕作", "農耕", "耕地", "耕す", "耕し"],
        ["鉱", "こう", "鉱山", "鉱石", "採鉱", "鉱物", "鉱脈"],
        ["構", "かま(う)・コウ", "構造", "機構", "構想", "結構", "構える"],
        ["興", "おこ(る)・コウ", "興味", "興奮", "復興", "興行", "振興"],
        ["講", "こう", "講義", "講演", "講座", "講習", "講師"],
        ["混", "ま(じる)・コン", "混乱", "混雑", "混合", "混ぜる", "混同"],
        ["査", "さ", "検査", "査定", "調査", "審査", "査問"],
        ["再", "さい/さ", "再生", "再会", "再開", "再び", "再度"],
        ["災", "わざわ(い)・サイ", "災害", "火災", "震災", "災難", "人災"],
        ["妻", "つま・サイ", "妻子", "妻帯", "良妻", "妻室", "先妻"],
        ["採", "と(る)・サイ", "採用", "採取", "採集", "採決", "採点"],
        ["際", "きわ・サイ", "国際", "交際", "実際", "際立つ", "際限"],
        ["在", "あ(る)・ザイ", "存在", "在宅", "現在", "在庫", "在籍"],
        ["財", "ざい", "財産", "財政", "財務", "財閥", "財界"],
        ["罪", "つみ・ザイ", "犯罪", "罪悪", "無罪", "罪人", "罪状"],
        ["雑", "ざつ", "雑誌", "複雑", "雑音", "雑草", "雑談"],
        ["酸", "す(い)・サン", "酸性", "酸化", "酸素", "酸味", "酸っぱさ"],
        ["賛", "さん", "賛成", "賛同", "賞賛", "賛歌", "賛美"],
        ["支", "ささ(える)・シ", "支援", "支持", "支配", "支店", "支払い"],
        ["志", "こころざ(す)・シ", "志望", "志願", "有志", "意志", "志し"],
        ["枝", "えだ・シ", "枝葉", "枝分かれ", "枝豆", "枝先", "小枝"],
        ["師", "し", "教師", "師範", "医師", "師匠", "恩師"],
        ["資", "し", "資源", "資金", "資料", "資産", "資本"],
        ["飼", "か(う)・シ", "飼育", "飼料", "飼い主", "飼う", "養飼"],
        ["示", "しめ(す)・ジ", "指示", "展示", "示唆", "暗示", "表示"],
        ["似", "に(る)・ジ", "似顔絵", "類似", "似合う", "近似", "真似"],
        ["識", "しき", "知識", "識別", "常識", "認識", "意識"],
        ["質", "しつ", "品質", "性質", "質疑", "物質", "質量"],
        ["舎", "しゃ", "校舎", "宿舎", "農舎", "寄宿舎", "公舎"],
        ["謝", "あやま(る)・シャ", "謝罪", "感謝", "謝礼", "謝意", "謝る"],
        ["授", "さず(ける)・ジュ", "授業", "教授", "授与", "授かる", "授ける"],
        ["修", "おさ(める)・シュウ", "修理", "修正", "修行", "修士", "修める"],
        ["述", "の(べる)・ジュツ", "記述", "述べる", "述語", "陳述", "論述"],
        ["術", "じゅつ", "技術", "芸術", "手術", "戦術", "美術"],
        ["準", "じゅん", "準備", "準決勝", "基準", "準拠", "標準"],
        ["序", "じょ", "順序", "序文", "序曲", "秩序", "序章"],
        ["招", "まね(く)・ショウ", "招待", "招集", "招待状", "招き猫", "招く"],
        ["承", "うけたまわ(る)・ショウ", "承認", "承諾", "継承", "了承", "承知"],
        ["証", "あかし・ショウ", "証拠", "証言", "証明", "証書", "免許証"],
        ["条", "じょう", "条件", "条約", "条文", "条項", "規条"],
        ["状", "じょう", "状況", "状態", "病状", "状況", "症状"],
        ["常", "つね・ジョウ", "通常", "正常", "常識", "常連", "非常"],
        ["情", "なさ(け)・ジョウ", "感情", "情熱", "情け", "情報", "友情"],
        ["織", "お(る)・ショク", "組織", "織物", "織機", "織る", "手織り"],
        ["職", "しょく", "職業", "職場", "職務", "職員", "就職"],
        ["制", "せい", "制度", "規制", "強制", "製作", "制作"],
        ["性", "せい", "性別", "性格", "性質", "同性", "本性"],
        ["政", "まつりごと・セイ", "政府", "政策", "政治", "行政", "政党"],
        ["勢", "いきお(い)・セイ", "勢力", "勢い", "勢態", "勢地", "勢いよく"],
        ["精", "せい", "精密", "精神", "精力", "精液", "精鋭"],
        ["製", "せい", "製品", "製造", "製薬", "製本", "自家製"],
        ["税", "ぜい", "税金", "税務", "免税", "課税", "消費税"],
        ["責", "せ(める)・セキ", "責任", "責務", "責める", "責任者", "責任感"],
        ["績", "せき", "成績", "業績", "実績", "成果", "成績表"],
        ["接", "せっ(する)・セツ", "接触", "接待", "接続", "接近", "接する"],
        ["設", "もう(ける)・セツ", "設定", "設計", "設立", "設置", "施設"],
        ["舌", "した・ゼツ", "舌触り", "舌打ち", "舌戦", "舌先", "毒舌"],
        ["絶", "た(える)・ゼツ", "絶対", "絶望", "絶滅", "絶句", "絶交"],
        ["銭", "ぜに・セン", "小銭", "銭湯", "銭形", "金銭", "銭袋"],
        ["祖", "そ", "祖先", "祖父母", "祖国", "開祖", "先祖"],
        ["素", "す", "元素", "素材", "素顔", "素敵", "素質"],
        ["総", "そう", "総合", "総理", "総数", "総計", "総括"],
        ["造", "つく(る)・ゾウ", "製造", "構造", "造船", "造花", "造形"],
        ["像", "ぞう", "想像", "画像", "銅像", "形像", "実像"],
        ["増", "ま(す)・ゾウ", "増加", "増量", "増税", "増進", "増水"],
        ["則", "のっと(る)・ソク", "規則", "法則", "原則", "則る", "則定"],
        ["測", "はか(る)・ソク", "測定", "予測", "計測", "測量", "測る"],
        ["属", "ぞく", "所属", "家族", "附属", "従属", "属国"],
        ["率", "ひき(いる)・リツ/ソツ", "率直", "率いる", "引率", "率先", "割合"],
        ["損", "そこ(なう)・ソン", "損害", "損失", "破損", "損なう", "欠損"],
        ["退", "しりぞ(く)・タイ", "退職", "退学", "退院", "退却", "退治"],
        ["貸", "か(す)・タイ", "貸出", "貸家", "賃貸", "貸金", "貸す"],
        ["態", "たい", "態度", "事態", "形態", "状態", "実態"],
        ["団", "だん", "団体", "団地", "団員", "団結", "応援団"],
        ["断", "ことわ(る)・ダン", "判断", "断念", "断絶", "決断", "断る"],
        ["築", "きず(く)・チク", "建築", "築地", "構築", "改築", "築く"],
        ["張", "は(る)・チョウ", "主張", "拡張", "緊張", "張る", "張力"],
        ["提", "さ(げる)・テイ", "提案", "提供", "提出", "提携", "提げる"],
        ["程", "ほど・テイ", "程度", "日程", "過程", "課程", "程々"],
        ["適", "かな(う)・テキ", "適応", "適切", "適合", "適用", "適時"],
        ["敵", "てき", "敵対", "敵地", "敵意", "敵討ち", "強敵"],
        ["統", "す(べる)・トウ", "統一", "統治", "統計", "大統領", "統括"],
        ["銅", "どう", "銅像", "銅器", "青銅", "銅メダル", "銅線"],
        ["導", "みちび(く)・ドウ", "指導", "導入", "誘導", "導き", "導電"],
        ["徳", "とく", "道徳", "徳性", "徳行", "徳望", "幸福の徳"],
        ["独", "ひと(り)・ドク", "独立", "独自", "独占", "独身", "独奏"],
        ["任", "まか(せる)・ニン", "任務", "責任", "任期", "任意", "任命"],
        ["燃", "も(える)・ネン", "燃料", "燃焼", "燃える", "燃やす", "燃え尽き"],
        ["能", "のう", "能力", "能率", "才能", "可能", "能動"],
        ["破", "やぶ(る)・ハ", "破壊", "破産", "破れる", "破棄", "突破"],
        ["犯", "おか(す)・ハン", "犯罪", "犯人", "犯行", "犯す", "罪犯"],
        ["判", "わ(かる)・ハン", "判断", "判定", "評判", "判明", "判子"],
        ["版", "はん", "出版", "版画", "活版", "初版", "新版"],
        ["比", "くら(べる)・ヒ", "比較", "比例", "比重", "対比", "比べる"],
        ["肥", "こえ・ヒ", "肥料", "肥満", "肥沃", "肥大", "肥やす"],
        ["非", "あら(ず)・ヒ", "非常", "非難", "非行", "非礼", "非科学"],
        ["備", "そな(える)・ビ", "準備", "設備", "予備", "備える", "備品"],
        ["俵", "たわら・ヒョウ", "米俵", "俵数", "俵詰め", "俵物", "米の俵"],
        ["評", "ひょう", "評価", "評論", "評判", "批評", "評決"],
        ["貧", "まず(しい)・ヒン", "貧乏", "貧困", "貧血", "貧しい", "貧弱"],
        ["布", "ぬの・フ", "布地", "毛布", "布教", "布告", "分布"],
        ["婦", "ふ", "婦人", "主婦", "看護婦", "婦警", "婦長"],
        ["富", "とみ・フ", "富豪", "富裕", "富国", "富貴", "富山"],
        ["武", "ぶ", "武器", "武士", "武道", "武力", "武者"],
        ["復", "ふく", "復活", "復習", "回復", "報復", "復興"],
        ["複", "ふく", "複雑", "複数", "複製", "複写", "重複"],
        ["仏", "ほとけ・ブツ", "仏教", "仏像", "仏心", "仏壇", "仏事"],
        ["編", "あ(む)・ヘン", "編集", "編成", "編物", "編曲", "編む"],
        ["弁", "べん", "弁当", "弁護士", "弁明", "弁解", "弁論"],
        ["保", "たも(つ)・ホ", "保護", "保険", "保存", "保つ", "保守"],
        ["墓", "はか・ボ", "墓地", "墓参り", "墓石", "墓穴", "古墓"],
        ["報", "むく(いる)・ホウ", "報告", "情報", "報道", "報酬", "報復"],
        ["豊", "ゆた(か)・ホウ", "豊富", "豊作", "豊か", "豊満", "豊漁"],
        ["防", "ふせ(ぐ)・ボウ", "防止", "予防", "防衛", "防犯", "防ぐ"],
        ["貿", "ぼう", "貿易", "貿易商", "貿易風", "通商貿易", "貿易協会"],
        ["暴", "あば(れる)・ボウ", "暴力", "暴走", "暴動", "暴君", "暴風"],
        ["務", "つと(める)・ム", "勤務", "義務", "事務", "業務", "任務"],
        ["夢", "ゆめ・ム", "夢想", "夢中", "夢物語", "悪夢", "夢見る"],
        ["迷", "まよ(う)・メイ", "迷路", "迷子", "迷惑", "迷信", "迷い"],
        ["綿", "わた・メン", "木綿", "綿布", "綿密", "綿花", "綿棒"],
        ["輸", "ゆ", "輸出", "輸入", "輸送", "輸血", "輸出入"],
        ["余", "あま(る)・ヨ", "余裕", "余分", "余計", "余興", "余り"],
        ["預", "あず(ける)・ヨ", "預金", "預かる", "預言", "預託", "預金通帳"],
        ["容", "い(れる)・ヨウ", "内容", "容器", "容姿", "容認", "容疑者"],
        ["略", "りゃく", "略図", "省略", "略奪", "略語", "戦略"],
        ["留", "と(める)・リュウ", "留学", "留守", "留意", "留める", "保留"],
        ["領", "りょう", "領土", "領収書", "領事", "大統領", "本領"],
    ];
    const wordList6 = [
        ["金", "かね・キン", "金曜日", "金庫", "金属", "金色", "金額"]
    ];

    let wordList = [];
    switch (grade) {
        case 1:
            wordList = wordList1;
            break;
        case 2:
            wordList = wordList2;
            break;
        case 3:
            wordList = wordList3;
            break;
        case 4:
            wordList = wordList4;
            break;
        case 5:
            wordList = wordList5;
            break;
        case 6:
            wordList = wordList6;
            break;
        default:
            wordList = [];
    }

    let currentIndex = 0;
    let isSpacePressed = false;
    let isRightLeftPressed = false;
    let randomIndex = Math.floor(Math.random() * 5) + 2; // 初期値を設定

    // 漢字を更新する関数
    function updateWordLabel() {
        const wordLabel = document.getElementById("word-label");
        if (currentIndex >= 0 && currentIndex < wordList.length) {
            if (choice === 'reading') {
                wordLabel.textContent = wordList[currentIndex][0];
                if (isSpacePressed) {
                    wordLabel.textContent = wordList[currentIndex][1];
                }
            } else if (choice === 'compound') {
                if (isSpacePressed) {
                    wordLabel.textContent = wordList[currentIndex][randomIndex];
                } else if (isRightLeftPressed) {
                    wordLabel.textContent = wordList[currentIndex][0];
                } else {
                    wordLabel.textContent = wordList[currentIndex][0];
                }
            }
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
                randomIndex = Math.floor(Math.random() * 5) + 2; // 2から6のランダムな整数
                isSpacePressed = false;
                updateWordLabel();
                break;
            case 37: // 左矢印キー
                currentIndex = Math.max(currentIndex - 1, 0);
                randomIndex = Math.floor(Math.random() * 5) + 2; // 2から6のランダムな整数
                isSpacePressed = false;
                updateWordLabel();
                break;
            case 32: // スペースキー
                isSpacePressed = true;
                updateWordLabel();
                break;
        }
    }

    function handleKeyRelease(event) {
        const keyCode = event.keyCode;
        if (keyCode === 32) { // スペースキー
            isSpacePressed = false;
            updateWordLabel();
        }
    }

    // ボタン操作を処理する関数
    function handleButtonPress(direction) {
        if (direction === 'right') {
            currentIndex = Math.min(currentIndex + 1, wordList.length - 1);
            randomIndex = Math.floor(Math.random() * 5) + 2; // 2から6のランダムな整数
            isSpacePressed = false;
            updateWordLabel();
        } else if (direction === 'left') {
            currentIndex = Math.max(currentIndex - 1, 0);
            randomIndex = Math.floor(Math.random() * 5) + 2; // 2から6のランダムな整数
            isSpacePressed = false;
            updateWordLabel();
        } else if (direction === 'space') {
            isSpacePressed = !isSpacePressed;
            updateWordLabel();
        }
    }

    // 漢字表示画面のHTMLを設定
    document.getElementById("content").innerHTML = `
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <div id="word-label" class="word-label"></div>
        <button id="left-button">←</button>
        <button id="space-button">答え</button>
        <button id="right-button">→</button>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <button onclick="showChoiceScreen()">学年を変える</button>
    `;

    // ボタンにイベントリスナーを追加
    document.getElementById('left-button').addEventListener('click', () => handleButtonPress('left'));
    document.getElementById('space-button').addEventListener('click', () => handleButtonPress('space'));
    document.getElementById('right-button').addEventListener('click', () => handleButtonPress('right'));

    // 初期化
    updateWordLabel();
    window.addEventListener("keydown", handleKeyPress);
    window.addEventListener("keyup", handleKeyRelease);
}

// 初期画面を表示
showStartScreen();

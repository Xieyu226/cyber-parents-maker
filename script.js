// 赛博父母生成器数据
const parentData = {
    // 父亲名字
    fatherNames: [
        "张伟", "李刚", "王强", "刘建国", "陈勇", "赵军", "孙明", "周健", "吴忠", "郑华",
        "杨磊", "黄辉", "马骏", "朱峰", "胡伟", "林达", "何东", "高翔", "罗阳", "梁峰",
        "陈明", "黄伟", "赵刚", "孙强", "周明", "吴刚", "郑军", "杨明", "黄军", "马明",
        "朱强", "胡刚", "林强", "何明", "高伟", "罗明", "梁伟", "陈军", "黄刚", "希特勒",
        "艾山·买买提", "扎西多吉", "朴正焕", "金成勋", "阿里木江", "努尔兰",
        "司马云", "欧阳锋", "上官睿", "诸葛青", "慕容雪", "皇甫卓",
        "李白雪", "杜小甫", "苏轼之", "蒋介石", "辛弃疾", "李清照",
        "乔治·高", "安德烈·周", "米哈伊尔·李", "大卫·陈", "费德里科·王", "卢卡·张",
        "阿米尔·刘", "拉胡尔·孙", "维杰·杨", "阿俊·黄", "萨米尔·吴", "拉维·郑",
        "山田太郎", "佐藤健", "铃木一郎", "高桥凉", "渡边彻", "伊藤润",
        "阮文明", "黎氏雄", "范文同", "武元甲", "黄忠义", "潘清",
        "阿努拉·马利克", "伊斯坎德尔·哈桑", "拉赫马特·维贾亚", "达玛·苏里亚", "阿贡·普拉塔玛", "巴渝·塞蒂亚万"
    ],
    // 母亲名字
    motherNames: [
        "王芳", "李娜", "张艳", "刘敏", "陈丽", "赵静", "孙美", "周琴", "吴梅", "郑华",
        "杨雪", "黄燕", "马丽", "朱婷", "胡蓉", "林秀", "何英", "高佳", "罗莉", "梁艳",
        "王梅", "李丽", "张琴", "刘芳", "陈静", "赵艳", "孙婷", "周丽", "吴芳", "郑梅",
        "杨芳", "黄丽", "马燕", "朱静", "胡丽", "林芳", "何丽", "高艳", "罗芳", "梁芳",
        "艾莎·买买提", "卓玛拉姆", "娜仁花", "古丽仙", "阿依努尔", "迪丽娜尔",
        "司马兰", "欧阳倩", "上官雅", "诸葛瑾", "慕容雪", "皇甫珊",
        "李清照", "卓文君", "蔡文姬", "班昭", "谢道韫", "鱼玄机",
        "玛丽·高", "索菲亚·周", "伊丽莎白·李", "艾玛·陈", "奥利维亚·王", "夏洛特·张",
        "艾莎·刘", "普里扬卡·孙", "希娜·杨", "安佳丽·黄", "迪皮卡·吴", "卡特里娜·郑",
        "佐藤美穗", "铃木爱子", "高桥由美子", "渡边美优纪", "伊藤梨花", "山本彩",
        "阮氏秋水", "黎氏清香", "范氏金枝", "武氏琼英", "黄氏明玉", "潘氏秋香",
        "阿努拉·卡琳娜", "伊斯坎德尔·娜迪亚", "拉赫马特·斯里", "达玛·德维", "阿贡·普特里", "巴渝·塞蒂亚尼"
    ],
    // 父亲职业
    fatherJobs: [
        "程序员", "工程师", "教师", "医生", "设计师", "创业者", "科学家", "艺术家", "摄影师", "厨师",
        "音乐家", "作家", "运动员", "企业家", "建筑师", "律师", "飞行员", "消防员", "警察", "军人",
        "农民", "工人", "司机", "快递员", "外卖员", "售货员", "理发师", "厨师", "服务员", "保安",
        "护士", "药剂师", "牙医", "兽医", "教师", "教授", "研究员", "技术员", "工程师", "建筑师",
        "设计师", "程序员", "软件工程师", "数据分析师", "网络工程师", "系统工程师", "硬件工程师", "电气工程师", "机械工程师", "土木工程师",
        "律师", "法官", "检察官", "警察", "消防员", "军人", "飞行员", "空姐", "乘务员", "船长",
        "企业家", "商人", "销售经理", "市场经理", "人力资源经理", "财务经理", "项目经理", "产品经理", "运营经理", "行政经理",
        "作家", "记者", "编辑", "摄影师", "摄像师", "导演", "演员", "歌手", "音乐家", "舞蹈家"
    ],
    // 母亲职业
    motherJobs: [
        "教师", "医生", "护士", "设计师", "程序员", "艺术家", "作家", "营养师", "心理咨询师", "烘焙师",
        "音乐家", "舞蹈家", "摄影师", "企业家", "建筑师", "律师", "飞行员", "消防员", "警察", "军人",
        "农民", "工人", "司机", "快递员", "外卖员", "售货员", "理发师", "厨师", "服务员", "保安",
        "护士", "药剂师", "牙医", "兽医", "教师", "教授", "研究员", "技术员", "工程师", "建筑师",
        "设计师", "程序员", "软件工程师", "数据分析师", "网络工程师", "系统工程师", "硬件工程师", "电气工程师", "机械工程师", "土木工程师",
        "律师", "法官", "检察官", "警察", "消防员", "军人", "飞行员", "空姐", "乘务员", "船长",
        "企业家", "商人", "销售经理", "市场经理", "人力资源经理", "财务经理", "项目经理", "产品经理", "运营经理", "行政经理",
        "作家", "记者", "编辑", "摄影师", "摄像师", "导演", "演员", "歌手", "音乐家", "舞蹈家"
    ],
    // 父亲特质
    fatherTraits: [
        "幽默风趣", "成熟稳重", "知识渊博", "温柔体贴", "勇敢坚强", "乐观开朗", "细心周到", "责任心强", "宽容大度", "积极向上",
        "善解人意", "诚实守信", "热情好客", "乐于助人", "正直善良", "勤俭节约", "创意无限", "冷静理智", "充满活力", "深谋远虑"
    ],
    // 母亲特质
    motherTraits: [
        "温柔贤惠", "善解人意", "聪明伶俐", "耐心细致", "乐观开朗", "勤劳善良", "宽容大度", "责任心强", "热情好客", "乐于助人",
        "诚实守信", "勤俭节约", "创意无限", "冷静理智", "充满活力", "深谋远虑", "幽默风趣", "成熟稳重", "知识渊博", "勇敢坚强"
    ],
    // 父亲寄语
    fatherMessages: [
        "孩子，不管别人说什么，你永远是爸爸的骄傲。",
        "在爸爸心里，你是最棒的，不要在意别人的闲言碎语。",
        "无论遇到什么困难，爸爸永远站在你这边。",
        "你的快乐就是爸爸最大的幸福，不要为了别人的话而烦恼。",
        "爸爸相信你，你是一个坚强勇敢的孩子。",
        "别人的恶意只是他们的问题，不是你的错。",
        "爸爸永远爱你，支持你，保护你。",
        "你值得被爱，值得被尊重，不要被别人的语言伤害。",
        "爸爸以你为荣，不管你做什么，爸爸都支持你。",
        "记住，你是独一无二的，别人的评价不能定义你。",
        "爸爸知道你受委屈了，没关系，一切都会过去的。",
        "你已经做得很好了，爸爸为你感到自豪。",
        "不管别人怎么说，在爸爸眼里你永远是最好的。",
        "爸爸会一直陪伴在你身边，和你一起面对一切。",
        "你的善良和努力，爸爸都看在眼里，记在心里。",
        "不要因为别人的错误而惩罚自己，你值得所有的美好。",
        "爸爸相信你的能力，你一定能够克服困难。",
        "无论发生什么，爸爸永远是你最坚强的后盾。",
        "你是爸爸生命中最珍贵的礼物，爸爸永远爱你。",
        "记住，爸爸永远在你身后，为你加油打气。",
        "孩子，爸爸知道网络上有些人心肠不好，但那不是你的问题。",
        "不要让别人的恶意影响你的心情，你是一个优秀的孩子。",
        "爸爸小时候也遇到过类似的事情，相信爸爸，一切都会好起来的。",
        "你的价值不是由别人的评价决定的，而是由你自己的努力和善良决定的。",
        "爸爸会一直保护你，不让你受到伤害。",
        "不管发生什么，爸爸都会在你身边，给你力量。",
        "你是一个有爱心、有责任感的孩子，爸爸为你感到骄傲。",
        "不要因为别人的无知而生气，他们只是不了解你。",
        "爸爸相信你有能力应对一切困难，你是最棒的。",
        "你的笑容是爸爸最想看到的，不要让别人夺走它。",
        "孩子，爸爸知道你受了委屈，来爸爸怀里哭一会吧，哭完我们一起面对。",
        "你已经很努力了，爸爸看到了你的成长和进步。",
        "不管别人怎么说，爸爸永远相信你，支持你。",
        "爸爸会一直陪伴你，直到你走出这段困难的时期。",
        "你的善良和真诚是最宝贵的品质，不要因为别人而改变。",
        "爸爸知道你很坚强，你一定能够度过这个难关。",
        "不管发生什么，爸爸永远是你最信任的人。",
        "你是爸爸的希望，爸爸会一直为你加油。",
        "不要在意别人的闲言碎语，做好自己就好。",
        "爸爸相信你有能力解决任何问题，你是最棒的。",
        "你的快乐就是爸爸的快乐，你的痛苦就是爸爸的痛苦。",
        "爸爸会一直保护你，不让你受到任何伤害。",
        "不管别人怎么说，在爸爸心里你永远是最优秀的。",
        "爸爸知道你受了委屈，但是不要害怕，爸爸会一直在你身边。",
        "你是一个有担当、有责任心的孩子，爸爸为你感到自豪。",
        "不要因为别人的错误而惩罚自己，你值得所有的美好。",
        "爸爸相信你的未来会很美好，你是一个有潜力的孩子。",
        "不管发生什么，爸爸永远爱你，支持你。",
        "孩子，记住，爸爸永远是你最坚强的后盾。"
    ],
    // 母亲寄语
    motherMessages: [
        "宝贝，妈妈永远爱你，不管别人说什么。",
        "在妈妈心里，你是最珍贵的，不要在意别人的恶意。",
        "妈妈会一直陪在你身边，保护你，支持你。",
        "你的笑容是妈妈最想看到的，不要为了别人而难过。",
        "妈妈相信你，你是一个善良优秀的孩子。",
        "别人的话只是他们的情绪，不是事实。",
        "妈妈永远在你身后，做你最坚强的后盾。",
        "你值得所有的美好，不要让别人的语言影响你。",
        "妈妈以你为傲，你是妈妈最爱的宝贝。",
        "记住，你是妈妈的心头肉，别人的评价不重要。",
        "宝贝，妈妈知道你受委屈了，来妈妈怀里哭一会吧。",
        "你已经做得很好了，妈妈为你感到骄傲。",
        "不管别人怎么说，在妈妈眼里你永远是最棒的。",
        "妈妈会一直守护着你，不让你受一点伤害。",
        "你的善良和努力，妈妈都看在眼里，记在心里。",
        "不要因为别人的错误而伤心，你值得所有的幸福。",
        "妈妈相信你的能力，你一定能够度过难关。",
        "无论发生什么，妈妈永远是你最温暖的港湾。",
        "你是妈妈生命中最美好的存在，妈妈永远爱你。",
        "记住，妈妈永远在你身边，为你加油鼓气。",
        "宝贝，妈妈知道网络上有些坏人，但那不是你的错。",
        "不要让别人的恶意影响你的心情，你是一个可爱的孩子。",
        "妈妈小时候也遇到过类似的事情，相信妈妈，一切都会好起来的。",
        "你的价值不是由别人的评价决定的，而是由你自己的善良和努力决定的。",
        "妈妈会一直保护你，不让你受到伤害。",
        "不管发生什么，妈妈都会在你身边，给你温暖。",
        "你是一个有爱心、有责任感的孩子，妈妈为你感到骄傲。",
        "不要因为别人的无知而生气，他们只是不了解你。",
        "妈妈相信你有能力应对一切困难，你是最棒的。",
        "你的笑容是妈妈最想看到的，不要让别人夺走它。",
        "宝贝，妈妈知道你受了委屈，来妈妈怀里哭一会吧，哭完我们一起面对。",
        "你已经很努力了，妈妈看到了你的成长和进步。",
        "不管别人怎么说，妈妈永远相信你，支持你。",
        "妈妈会一直陪伴你，直到你走出这段困难的时期。",
        "你的善良和真诚是最宝贵的品质，不要因为别人而改变。",
        "妈妈知道你很坚强，你一定能够度过这个难关。",
        "不管发生什么，妈妈永远是你最信任的人。",
        "你是妈妈的希望，妈妈会一直为你加油。",
        "不要在意别人的闲言碎语，做好自己就好。",
        "妈妈相信你有能力解决任何问题，你是最棒的。",
        "你的快乐就是妈妈的快乐，你的痛苦就是妈妈的痛苦。",
        "妈妈会一直保护你，不让你受到任何伤害。",
        "不管别人怎么说，在妈妈心里你永远是最优秀的。",
        "妈妈知道你受了委屈，但是不要害怕，妈妈会一直在你身边。",
        "你是一个有担当、有责任心的孩子，妈妈为你感到自豪。",
        "不要因为别人的错误而惩罚自己，你值得所有的美好。",
        "妈妈相信你的未来会很美好，你是一个有潜力的孩子。",
        "不管发生什么，妈妈永远爱你，支持你。",
        "宝贝，记住，妈妈永远是你最温暖的港湾。"
    ]
};

// 存储生成的父母历史
let parentHistory = JSON.parse(localStorage.getItem('parentHistory')) || [];
// 存储生成计数
let generateCount = parseInt(localStorage.getItem('generateCount')) || 0;



// 随机选择函数
function getRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// 生成赛博父母
function generateParents() {
    // 生成父亲数据
    const father = {
        name: getRandomItem(parentData.fatherNames),
        job: getRandomItem(parentData.fatherJobs),
        trait: getRandomItem(parentData.fatherTraits),
        message: getRandomItem(parentData.fatherMessages)
    };
    
    // 生成母亲数据
    const mother = {
        name: getRandomItem(parentData.motherNames),
        job: getRandomItem(parentData.motherJobs),
        trait: getRandomItem(parentData.motherTraits),
        message: getRandomItem(parentData.motherMessages)
    };
    
    // 增加计数
    generateCount++;
    // 保存计数到本地存储
    localStorage.setItem('generateCount', generateCount.toString());
    
    // 保存到历史记录
    const parentPair = {
        id: Date.now(),
        timestamp: new Date().toISOString(),
        father: father,
        mother: mother
    };
    parentHistory.push(parentPair);
    // 限制历史记录数量为100条
    if (parentHistory.length > 100) {
        parentHistory = parentHistory.slice(-100);
    }
    // 保存历史记录到本地存储
    localStorage.setItem('parentHistory', JSON.stringify(parentHistory));
    
    return { father, mother };
}

// 删除当前父母，回退到上一个
function deleteParent() {
    if (parentHistory.length === 0) {
        document.getElementById('message').textContent = "已经没有更多赛博父母可以删除了";
        return;
    }
    
    // 移除最后一个记录
    parentHistory.pop();
    // 减少计数
    generateCount = Math.max(0, generateCount - 1);
    
    // 保存到本地存储
    localStorage.setItem('generateCount', generateCount.toString());
    localStorage.setItem('parentHistory', JSON.stringify(parentHistory));
    
    // 如果还有历史记录，显示上一个父母信息
    if (parentHistory.length > 0) {
        const lastParent = parentHistory[parentHistory.length - 1];
        updateDisplay({ father: lastParent.father, mother: lastParent.mother });
    } else {
        // 如果没有历史记录，生成新的父母
        const parents = generateParents();
        updateDisplay(parents);
    }
    
    // 更新消息
    document.getElementById('message').textContent = "抱抱，又一对赛博父母离你而去了~~~";
}

// 更新页面显示
function updateDisplay(parents) {
    // 更新父亲信息
    document.getElementById('father-name').textContent = parents.father.name;
    document.getElementById('father-job').textContent = parents.father.job;
    document.getElementById('father-trait').textContent = parents.father.trait;
    document.getElementById('father-message').textContent = parents.father.message;
    
    // 更新母亲信息
    document.getElementById('mother-name').textContent = parents.mother.name;
    document.getElementById('mother-job').textContent = parents.mother.job;
    document.getElementById('mother-trait').textContent = parents.mother.trait;
    document.getElementById('mother-message').textContent = parents.mother.message;
    
    // 更新计数显示
    document.getElementById('generate-count').textContent = generateCount;
    
    // 更新消息
    document.getElementById('message').textContent = "赛博父母已生成，愿他们的爱保护你免受网络恶意";
    
    // 添加动画效果
    const cards = document.querySelectorAll('.parent-card');
    cards.forEach(card => {
        card.style.animation = 'none';
        setTimeout(() => {
            card.style.animation = 'fadeIn 0.5s ease-out';
        }, 10);
    });
    
    const messageBox = document.getElementById('message-box');
    messageBox.style.animation = 'none';
    setTimeout(() => {
        messageBox.style.animation = 'fadeIn 0.5s ease-out 0.2s both';
    }, 10);
}

// 导出数据
function exportData() {
    // 限制导出的历史记录数量为15条
    const limitedHistory = parentHistory.slice(-15);
    
    const exportData = {
        generateCount: generateCount,
        parentHistory: limitedHistory,
        exportDate: new Date().toISOString()
    };
    const dataStr = JSON.stringify(exportData, null, 2);
    document.getElementById('export-data').value = dataStr;
    document.getElementById('message').textContent = "数据导出成功，已限制为最近15条记录";
}

// 导入数据
function importData() {
    const importStr = document.getElementById('import-data').value;
    if (!importStr) {
        document.getElementById('message').textContent = "请输入要导入的数据";
        return;
    }
    
    try {
        const importData = JSON.parse(importStr);
        if (importData.generateCount && importData.parentHistory) {
            // 更新数据
            generateCount = importData.generateCount;
            parentHistory = importData.parentHistory;
            
            // 保存到本地存储
            localStorage.setItem('generateCount', generateCount.toString());
            localStorage.setItem('parentHistory', JSON.stringify(parentHistory));
            
            // 更新显示
            document.getElementById('generate-count').textContent = generateCount;
            document.getElementById('message').textContent = "数据导入成功，已同步所有赛博父母信息";
        } else {
            document.getElementById('message').textContent = "导入数据格式不正确";
        }
    } catch (error) {
        document.getElementById('message').textContent = "导入数据格式错误";
    }
}

// 主题切换功能
function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark');
    
    // 保存主题偏好到本地存储
    const isDark = body.classList.contains('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    
    // 更新按钮文本
    const themeBtn = document.getElementById('theme-btn');
    themeBtn.textContent = isDark ? '切换到亮色' : '切换到暗色';
    
    // 更新消息
    document.getElementById('message').textContent = isDark ? "已切换到黑夜模式" : "已切换到亮色模式";
}

// 按钮点击事件
document.getElementById('generate-btn').addEventListener('click', function() {
    const parents = generateParents();
    updateDisplay(parents);
});

// 导出按钮点击事件
document.getElementById('export-btn').addEventListener('click', exportData);

// 导入按钮点击事件
document.getElementById('import-btn').addEventListener('click', importData);

// 删除按钮点击事件
document.getElementById('delete-btn').addEventListener('click', deleteParent);

// 主题切换按钮点击事件
document.getElementById('theme-btn').addEventListener('click', toggleTheme);

// 页面加载时初始化
window.addEventListener('load', function() {
    // 加载主题偏好
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark');
        document.getElementById('theme-btn').textContent = '切换到亮色';
    } else {
        document.getElementById('theme-btn').textContent = '切换到暗色';
    }
    
    // 更新计数显示
    document.getElementById('generate-count').textContent = generateCount;
    
    // 如果没有历史记录，生成初始父母
    if (parentHistory.length === 0) {
        const parents = generateParents();
        updateDisplay(parents);
    } else {
        // 显示最后一个父母信息
        const lastParent = parentHistory[parentHistory.length - 1];
        updateDisplay({ father: lastParent.father, mother: lastParent.mother });
    }
});
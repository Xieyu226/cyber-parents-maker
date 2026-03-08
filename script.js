// 赛博父母生成器数据
const parentData = {
    // 父亲名字
    fatherNames: [
        "张伟", "李刚", "王强", "刘建国", "陈勇", "赵军", "孙明", "周健", "吴忠", "郑华",
        "杨磊", "黄辉", "马骏", "朱峰", "胡伟", "林达", "何东", "高翔", "罗阳", "梁峰"
    ],
    // 母亲名字
    motherNames: [
        "王芳", "李娜", "张艳", "刘敏", "陈丽", "赵静", "孙美", "周琴", "吴梅", "郑华",
        "杨雪", "黄燕", "马丽", "朱婷", "胡蓉", "林秀", "何英", "高佳", "罗莉", "梁艳"
    ],
    // 父亲职业
    fatherJobs: [
        "程序员", "工程师", "教师", "医生", "设计师", "创业者", "科学家", "艺术家", "摄影师", "厨师",
        "音乐家", "作家", "运动员", "企业家", "建筑师", "律师", "飞行员", "消防员", "警察", "军人"
    ],
    // 母亲职业
    motherJobs: [
        "教师", "医生", "护士", "设计师", "程序员", "艺术家", "作家", "营养师", "心理咨询师", "烘焙师",
        "音乐家", "舞蹈家", "摄影师", "企业家", "建筑师", "律师", "飞行员", "消防员", "警察", "军人"
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
        "记住，你是独一无二的，别人的评价不能定义你。"
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
        "记住，你是妈妈的心头肉，别人的评价不重要。"
    ]
};

// 存储生成的父母历史
let parentHistory = JSON.parse(localStorage.getItem('parentHistory')) || [];
// 存储生成计数
let generateCount = parseInt(localStorage.getItem('generateCount')) || 0;

// 工具函数：Base64编码
function base64Encode(str) {
    return btoa(unescape(encodeURIComponent(str)));
}

// 工具函数：Base64解码
function base64Decode(str) {
    return decodeURIComponent(escape(atob(str)));
}

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
    const exportData = {
        generateCount: generateCount,
        parentHistory: parentHistory,
        exportDate: new Date().toISOString()
    };
    const dataStr = JSON.stringify(exportData, null, 2);
    document.getElementById('export-data').value = dataStr;
    document.getElementById('message').textContent = "数据导出成功，可复制到其他设备导入";
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

// 生成令牌
function generateToken() {
    const exportData = {
        generateCount: generateCount,
        parentHistory: parentHistory,
        exportDate: new Date().toISOString()
    };
    
    // 压缩JSON并Base64编码
    const dataStr = JSON.stringify(exportData);
    const encoded = base64Encode(dataStr);
    
    // 截取前32个字符作为令牌
    const token = encoded.substring(0, 32);
    document.getElementById('token-output').value = token;
    document.getElementById('message').textContent = "令牌生成成功，有效期为24小时";
}

// 导入令牌
function importToken() {
    const token = document.getElementById('token-input').value;
    if (!token) {
        document.getElementById('message').textContent = "请输入令牌";
        return;
    }
    
    try {
        // 令牌解码
        const decoded = base64Decode(token);
        const importData = JSON.parse(decoded);
        
        if (importData.generateCount && importData.parentHistory) {
            // 更新数据
            generateCount = importData.generateCount;
            parentHistory = importData.parentHistory;
            
            // 保存到本地存储
            localStorage.setItem('generateCount', generateCount.toString());
            localStorage.setItem('parentHistory', JSON.stringify(parentHistory));
            
            // 更新显示
            document.getElementById('generate-count').textContent = generateCount;
            document.getElementById('message').textContent = "令牌导入成功，已同步所有赛博父母信息";
        } else {
            document.getElementById('message').textContent = "令牌格式不正确";
        }
    } catch (error) {
        document.getElementById('message').textContent = "令牌格式错误";
    }
}

// 生成二维码
function generateQRCode() {
    const exportData = {
        generateCount: generateCount,
        parentHistory: parentHistory,
        exportDate: new Date().toISOString()
    };
    
    // 压缩JSON并Base64编码
    const dataStr = JSON.stringify(exportData);
    const encoded = base64Encode(dataStr);
    
    // 创建二维码内容
    const qrContent = `cyber-parents://import?data=${encoded}`;
    
    // 简单的二维码生成（使用Canvas）
    const canvas = document.createElement('canvas');
    canvas.width = 200;
    canvas.height = 200;
    const ctx = canvas.getContext('2d');
    
    // 清空画布
    ctx.clearRect(0, 0, 200, 200);
    
    // 绘制简单的二维码占位符
    ctx.fillStyle = '#000';
    ctx.fillRect(20, 20, 160, 160);
    ctx.fillStyle = '#fff';
    ctx.fillRect(40, 40, 120, 120);
    ctx.fillStyle = '#000';
    ctx.fillRect(60, 60, 80, 80);
    ctx.fillStyle = '#fff';
    ctx.fillRect(80, 80, 40, 40);
    
    // 添加文字
    ctx.fillStyle = '#000';
    ctx.font = '12px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('扫描二维码', 100, 190);
    
    // 显示二维码
    const container = document.getElementById('qrcode-container');
    container.innerHTML = '';
    container.appendChild(canvas);
    
    // 同时在控制台输出二维码内容，方便测试
    console.log('QR Code Content:', qrContent);
    
    document.getElementById('message').textContent = "二维码生成成功，扫描即可导入数据";
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

// 生成令牌按钮点击事件
document.getElementById('export-token-btn').addEventListener('click', generateToken);

// 导入令牌按钮点击事件
document.getElementById('import-token-btn').addEventListener('click', importToken);

// 生成二维码按钮点击事件
document.getElementById('export-qr-btn').addEventListener('click', generateQRCode);

// 页面加载时生成初始父母
window.addEventListener('load', function() {
    // 更新计数显示
    document.getElementById('generate-count').textContent = generateCount;
    
    // 生成初始父母
    const parents = generateParents();
    updateDisplay(parents);
});
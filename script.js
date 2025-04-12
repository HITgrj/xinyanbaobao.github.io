// 流星雨生成（移动端优化）
window.addEventListener('load', () => {
    const starsContainer = document.querySelector('.stars-container');

    // 每1秒生成一颗流星
    setInterval(() => {
        const meteor = document.createElement('div');
        meteor.className = 'star';
        meteor.style.left = Math.random() * 100 + 'vw';
        meteor.style.top = Math.random() * -50 + 'vh';
        starsContainer.appendChild(meteor);

        setTimeout(() => {
            meteor.remove();
        }, 2500);
    }, 1000); // 1秒生成一次流星
});

// 气泡特效
setInterval(() => {
    const bubblesContainer = document.querySelector('.bubbles-container');
    const bubble = document.createElement('div');
    bubble.className = 'bubble';
    bubble.style.left = Math.random() * 100 + '%';
    bubblesContainer.appendChild(bubble);
    setTimeout(() => bubble.remove(), 2000);
}, 500);

// 新增「同意」处理函数
function handleAgree() {
    const question = document.querySelector('.question-text');
    const buttons = document.querySelector('.button-container');
    const roseContainer = document.querySelector('.rose-container');

    question.style.display = 'none';
    buttons.style.display = 'none';
    roseContainer.style.display = 'flex';

    // 生成纯CSS花雨
    const flowerRain = document.querySelector('.flower-rain');
    flowerRain.style.display = 'block';
}

// 新增「不同意」处理函数
function handleDisagree() {
    const disagreeContainer = document.querySelector('.disagree-container');
    const question = document.querySelector('.question-text');
    const buttons = document.querySelector('.button-container');

    question.style.display = 'none';
    buttons.style.display = 'none';
    disagreeContainer.style.display = 'flex';
}

// 音乐自动播放处理
const audio = document.getElementById('romance-music');
let isPlaying = false;

// 尝试自动播放（需用户交互）
document.addEventListener('click', () => {
    if (!isPlaying) {
        audio.play().then(() => {
            isPlaying = true;
        }).catch(() => {
            // 如果自动播放被阻止，显示播放按钮
            document.querySelector('.play-btn').style.display = 'block';
        });
    }
});

// 播放/暂停按钮
document.querySelector('.play-btn').addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        document.querySelector('.play-btn').innerHTML = '&#10074;&#10074;';
    } else {
        audio.pause();
        document.querySelector('.play-btn').innerHTML = '&#9658;';
    }
});

// 音量控制
document.querySelector('.volume-slider').addEventListener('input', (e) => {
    audio.volume = e.target.value;
});

// 初始化音量滑块
document.querySelector('.volume-slider').value = audio.volume;

// 绑定按钮事件（兼容移动端）
document.addEventListener('DOMContentLoaded', () => {
    const agreeBtn = document.querySelector('.agree-btn');
    const disagreeBtn = document.querySelector('.disagree-btn');

    agreeBtn.addEventListener('click', handleAgree);
    agreeBtn.addEventListener('touchend', handleAgree);

    disagreeBtn.addEventListener('click', handleDisagree);
    disagreeBtn.addEventListener('touchend', handleDisagree);
});
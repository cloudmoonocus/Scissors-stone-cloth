var img = document.querySelectorAll('img');
var btn = document.querySelectorAll('button');
var time = document.querySelector('#time');
var select = document.querySelector('#select');
var score_you = document.querySelector('#score-you');
var score_left = document.querySelector('#score-l');
var score_right = document.querySelector('#score-r');
var masterf = document.querySelector('#masterf');
var same = document.querySelector('#same');
var computer = document.querySelector('#computer');
var btnr = document.querySelectorAll('.btnr');
// ==========================================================
// 猜拳的两个图片切换
var imgarr = ['./images/石头.jpg', './images/剪刀.jpg', './images/布.jpg'];
var j = 0;
var k = 0;
var select_done = 0;
setInterval(() => {
    if (!select_done) {
        switch (j) {
            case 0:
                img[0].src = imgarr[1];
                break;
            case 1:
                img[0].src = imgarr[2];
                break;
            case 2:
                img[0].src = imgarr[0];
                break;
            default:
                break;
        }
        j++;
        if (j > 2) j = 0;
    }
}, 1000);
// ==========================================================
// 随机出拳函数
function RandomNumBoth(minNum, maxNum) {
    switch (arguments.length) {
        case 1:
            return parseInt(Math.random() * minNum + 1, 10);
            break;
        case 2:
            return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
            break;
        default:
            return 0;
            break;
    }
}
// ==========================================================
// 点击摁钮进项选项
var select_you = 0;
var select_comp = null;
// 石头
btn[0].addEventListener('click', () => {
    select.innerHTML = btn[0].innerHTML;
    select_you = 1;
    select_comp = RandomNumBoth(1, 3);
    select_done = 1;
    img[0].src = imgarr[0];
});
// 剪刀
btn[1].addEventListener('click', () => {
    select.innerHTML = btn[1].innerHTML;
    select_you = 2;
    select_comp = RandomNumBoth(1, 3);
    select_done = 1;
    img[0].src = imgarr[1];
});
// 布
btn[2].addEventListener('click', () => {
    select.innerHTML = btn[2].innerHTML;
    select_you = 3;
    select_comp = RandomNumBoth(1, 3);
    select_done = 1;
    img[0].src = imgarr[2];
});
// ==========================================================
// 倒计时
var time_sheng = 4;
setInterval(() => {
    if (time_sheng >= 0) {
        time.innerHTML = time_sheng + '&nbsp秒';
        time_sheng--;
    }
}, 1000);
setTimeout(() => {
    console.log('单局结束');
    console.log(select_comp);
    if (select_you == 1) {
        // 平局
        if (select_comp == 1) {
            same.style.display = 'block';
            btnr[0].innerHTML = '石头⭕';
        }
        // master胜利
        if (select_comp == 2) {
            masterf.style.display = 'block';
            btnr[1].innerHTML = '剪刀⭕';
        }
        // computer胜利
        if (select_comp == 3) {
            computer.style.display = 'block';
            btnr[2].innerHTML = '布⭕';
        }
    }
    if (select_you == 2) {
        // 平局
        if (select_comp == 2) {
            same.style.display = 'block';
            btnr[1].innerHTML = '剪刀⭕';
        }
        // master胜利
        if (select_comp == 3) {
            masterf.style.display = 'block';
            btnr[2].innerHTML = '布⭕';
        }
        // computer胜利
        if (select_comp == 1) {
            computer.style.display = 'block';
            btnr[0].innerHTML = '石头⭕';
        }
    }
    if (select_you == 3) {
        // 平局
        if (select_comp == 3) {
            same.style.display = 'block';
            btnr[2].innerHTML = '布⭕';
        }
        // master胜利
        if (select_comp == 1) {
            masterf.style.display = 'block';
            btnr[0].innerHTML = '石头⭕';
        }
        // computer胜利
        if (select_comp == 2) {
            computer.style.display = 'block';
            btnr[1].innerHTML = '剪刀⭕';
        }
    }
    console.log(master.style.display);
    console.log(computer.style.display);
    console.log(same.style.display);
}, 5000);

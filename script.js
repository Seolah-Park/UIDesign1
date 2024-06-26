document.getElementById('dark-mode-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});

function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // 0 should be 12
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    var strTime = hours + ':' + minutes + ':' + seconds + ' ' + ampm;
    document.getElementById('clock').textContent = strTime;
}

// 시계 업데이트를 1초마다 실행
setInterval(updateClock, 1000);

// 페이지가 로드될 때 시계를 초기화
updateClock();

let emojiTimer;
let secondTimer;

document.getElementById('emoji-container').addEventListener('mouseover', function() {
    emojiTimer = setTimeout(() => {
        document.getElementById('emoji-container').innerHTML = '🐶<div class="small-font">I need somebody to love..</div>';
        secondTimer = setTimeout(() => {
            document.getElementById('emoji-container').innerHTML = '🐶 ❤️ 🐶';
        }, 1500);
    }, 1500);
});

document.getElementById('emoji-container').addEventListener('mouseout', function() {
    clearTimeout(emojiTimer);
    clearTimeout(secondTimer);
    document.getElementById('emoji-container').innerHTML = '🐶';
});

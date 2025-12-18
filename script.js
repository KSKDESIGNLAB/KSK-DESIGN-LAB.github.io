document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('lang-toggle');
    const body = document.body;

    // 前回の言語設定を記憶していたら復元
    if (localStorage.getItem('language') === 'en') {
        body.classList.add('english-mode');
        if(toggleBtn) toggleBtn.innerText = 'JP';
    } else {
        if(toggleBtn) toggleBtn.innerText = 'EN';
    }

    // ボタンが押された時の動作
    if(toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            body.classList.toggle('english-mode');
            
            if (body.classList.contains('english-mode')) {
                localStorage.setItem('language', 'en');
                toggleBtn.innerText = 'JP';
            } else {
                localStorage.setItem('language', 'ja');
                toggleBtn.innerText = 'EN';
            }
        });
    }
});

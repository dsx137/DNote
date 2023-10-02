function setFavicon() {
    const faviconLink = document.querySelector('link[rel="icon"]');
    if (faviconLink) {
        const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        faviconLink.href = isDarkMode ? '/DNote/img/favicon-dark.svg' : '/DNote/img/favicon-light.svg';
    }
}

// 如果你希望在颜色模式更改时更新 favicon，你可以添加以下代码
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', setFavicon);

window.addEventListener('load', event => {
    setFavicon();
    new MutationObserver(function (mutations) {
        setFavicon();
    }).observe(document.head, { childList: true });
});

//即时更新（残疾
setInterval(setFavicon, 100);

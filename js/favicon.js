function setFavicon() {
    const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const faviconLink = document.querySelector('link[rel="icon"]');
    if (faviconLink) {
        faviconLink.href = isDarkMode ? '/DNote/img/favicon-dark.svg' : '/DNote/img/favicon-light.svg';
    }
}

window.onload = setFavicon;

// 如果你希望在颜色模式更改时更新 favicon，你可以添加以下代码
window.matchMedia('(prefers-color-scheme: dark)').onchange = setFavicon;

setInterval(setFavicon, 100);

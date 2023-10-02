const favicon_dark = '/DNote/img/favicon-dark.svg';
const favicon_light = '/DNote/img/favicon-light.svg';

function setFavicon() {
    const faviconLink = document.querySelector('link[rel="icon"]');
    if (faviconLink) {
        const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        faviconLink.href = isDarkMode ? favicon_dark : favicon_light;
    }
}

function setLogo() {
    const logos = document.querySelectorAll('.navbar__logo img');
    const html = document.querySelector('html');
    if (logos.length != 0 && html) {
        logos.forEach(logo => {
            if (html.dataset.theme === 'dark') {
                logo.src = favicon_dark;
            } else {
                logo.src = favicon_light;
            }
        });
    }
}

// 如果你希望在颜色模式更改时更新 favicon，你可以添加以下代码
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', setFavicon);

window.addEventListener('load', event => {
    setFavicon();
    new MutationObserver(setFavicon).observe(document.head, { childList: true });

    // setLogo();
    // new MutationObserver(setLogo).observe(document.querySelector('html'), { attributes: true });
});

//即时更新（残疾
setInterval(setFavicon, 100);

const favicon_dark = '/DNote/img/favicon-dark.svg';
const favicon_light = '/DNote/img/favicon-light.svg';

function getTheme() { 
    const html = document.querySelector('html');
    if (html) return html.dataset.theme;
    else return 'dark';
}

function setFavicon() {
    const faviconLink = document.querySelector('link[rel="icon"]');
    if (faviconLink) {
        const isBrowserDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        faviconLink.href = isBrowserDarkMode ? favicon_dark : favicon_light;
    }
}

function setLogo() {
    const logos = document.querySelectorAll('.navbar__logo img');
    if (logos.length != 0 && html) {
        logos.forEach(logo => {
            if (getTheme() === 'dark') {
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
    setInterval(setFavicon, 100);

    // setLogo();
    // new MutationObserver(setLogo).observe(document.querySelector('html'), { attributes: true });
});



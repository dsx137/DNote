function handleIframe() {
    const iframes = document.querySelectorAll('iframe.videoIframe');

    function resizeIframe(iframe) {
        const width = iframe.offsetWidth;
        if (width != 0) {
            iframe.style.height = (width * 9 / 16) + 'px';
        }
    }

    iframes.forEach(resizeIframe);
};

let lastPathname = window.location.pathname;

// 检查 URL 是否发生变化
function checkForURLChange() {
    if (window.location.pathname !== lastPathname) {
        lastPathname = window.location.pathname;
        handleIframe();
    }
}

window.onload = handleIframe;
window.onresize = handleIframe;

setInterval(handleIframe, 100);
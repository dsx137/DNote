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

window.addEventListener('resize', handleIframe);
window.addEventListener('load', event => {
    handleIframe();
    new MutationObserver(function (mutations) {
        handleIframe();
    }).observe(document.body, {attributes:true, childList: true, subtree: true });
});

window.onload = function () {
    const iframes = document.querySelectorAll('iframe.videoIframe');

    iframes.forEach((iframe) => {
        const width = iframe.offsetWidth;
        iframe.style.height = (width * 9 / 16) + 'px';
    });

    window.onresize = function () {
        iframes.forEach((iframe) => {
            const width = iframe.offsetWidth;
            iframe.style.height = (width * 9 / 16) + 'px';
        });
    };
};
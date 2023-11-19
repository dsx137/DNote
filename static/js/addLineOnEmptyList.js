function handleEmptyList() {
    let lis = document.querySelectorAll('.markdown ul li, .markdown ol li');
    lis.forEach(li => {
        let ul = li.querySelector('ul');
        if (ul != null && li.innerHTML.replace(ul.outerHTML, '') == '') {
            li.innerHTML = '&nbsp' + li.innerHTML;
        }
    });
}

window.addEventListener('load', event => {
    handleEmptyList();
    new MutationObserver(handleEmptyList).observe(document.body, { childList: true, subtree: true });
});
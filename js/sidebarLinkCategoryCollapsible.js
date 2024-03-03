// 向拥有页面的侧边栏目录项添加点击事件，使其可以展开/收起子目录+

function handleClickEvent(element, event) {
    if (element.getAttribute('href').includes(decodeURIComponent(window.location.pathname.split('/').slice(1).join('/').split('?')[0]))) {
        event.stopPropagation();
        event.preventDefault();
        let div = element.parentElement;
        if (div != null) {
            let btn = div.querySelector('button');
            if (btn != null) {
                btn.click();
            }
        }
    }
}

const attachedHandlers = new Set();

function handleSidebar(element) {
    element.querySelectorAll('a.menu__link--sublist:not(.menu__link--sublist-caret)').forEach(
        function (child) {
            if (!attachedHandlers.has(child)) {
                const handler = event => handleClickEvent(child, event);
                child.addEventListener('click', handler);
                attachedHandlers.add(child);
            }
        }
    );
};

window.addEventListener('load', (event) => {
    const targetNode = document.body;

    handleSidebar(targetNode);

    // 创建一个观察者实例
    const observer = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
            handleSidebar(mutation.target);
        });
    });

    // 配置观察选项:
    const config = {
        attributes: false, // 观察属性变化
        childList: true, // 观察子节点的变动
        subtree: true    // 观察所有后代节点的变动
    };


    // 开始观察指定的 DOM 元素
    if (targetNode) {
        observer.observe(targetNode, config);
    } else {
        console.error('Element not found!');
    }

    // 之后，您可以停止观察
    // observer.disconnect();
    // }
});
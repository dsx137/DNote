// 页面主题策略，用于根据页面主题切换元素样式

class ThemeStrategy {
    static strategies = []

    static getTheme() {
        const html = document.querySelector('html');
        if (html) return html.dataset.theme;
        else return 'dark';
    }

    static init() {
        window.addEventListener('load', event => {
            for (let strategy of ThemeStrategy.strategies) {
                strategy();
                new MutationObserver(strategy).observe(document.querySelector('html'), { attributes: true });
            }
        });
    }

    constructor(selector, darkStrategy, lightStrategy) {
        let strategy = function (depth = 0) {
            if (depth > 10) return;

            const elements = document.querySelectorAll(selector);
            while (elements.length === 0) {
                setTimeout(() => {
                    strategy(depth + 1);
                }, 500);
                return;
            }

            elements.forEach(element => {
                if (ThemeStrategy.getTheme() === 'dark') {
                    darkStrategy(element);
                } else {
                    lightStrategy(element);
                }
            });
        }

        ThemeStrategy.strategies.push(strategy);
    }
}

ThemeStrategy.init();

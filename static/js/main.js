const favicon_dark = '/DNote/img/favicon-dark.svg';
const favicon_light = '/DNote/img/favicon-light.svg';

// favicon 策略
new ThemeStrategy('link[rel="icon"]',
    element => element.href = favicon_dark,
    element => element.href = favicon_light
);

// logo 策略
new ThemeStrategy('.navbar__logo img',
    element => element.src = favicon_dark,
    element => element.src = favicon_light
);
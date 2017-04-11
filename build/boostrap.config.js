module.exports = {

    // Default for the style loading
    styleLoader: require('extract-text-webpack-plugin').extract('style-loader', 'css-loader!postcss-loader!less-loader'),

    scripts: {
        'transition': true,
        'alert': true,
        'button': true,
        'carousel': true,
        'collapse': true,
        'dropdown': true,
        'modal': true,
        'tooltip': true,
        'popover': true,
        'scrollspy': true,
        'tab': true,
        'affix': true
    },
    styles: {
        "mixins": true,

        "normalize": true,
        "print": true,

        "scaffolding": true,
        "type": true,
        "code": true,
        "grid": true,
        "tables": true,
        "forms": true,
        "buttons": true,

        "component-animations": true,
        "glyphicons": true,
        "dropdowns": true,
        "button-groups": true,
        "input-groups": true,
        "navs": true,
        "navbar": true,
        "breadcrumbs": true,
        "pagination": true,
        "pager": true,
        "labels": true,
        "badges": true,
        "jumbotron": true,
        "thumbnails": true,
        "alerts": true,
        "progress-bars": true,
        "media": true,
        "list-group": true,
        "panels": true,
        "wells": true,
        "close": true,

        "modals": true,
        "tooltip": true,
        "popovers": true,
        "carousel": true,

        "utilities": true,
        "responsive-utilities": true
    }
};
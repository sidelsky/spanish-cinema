// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());



(function($){

    var patterns = {
        text: /^['"]?(.+?)["']?$/,
        url: /^url\(["']?(.+?)['"]?\)$/
    };

    function clean(content) {
        if(content && content.length) {
            var text = content.match(patterns.text)[1],
                url = text.match(patterns.url);
            return url ? '<img src="' + url[1] + '" />': text;
        }
    }

    function inject(prop, elem, content) {
        if(prop != 'after') prop = 'before';
        if(content = clean(elem.currentStyle[prop])) {
            $(elem)[prop == 'before' ? 'prepend' : 'append'](
                $(document.createElement('span')).addClass(prop).html(content)
            );
        }
    }

    $.pseudo = function(elem) {
        inject('before', elem);
        inject('after', elem);
        elem.runtimeStyle.behavior = null;
    };
    
    if(document.createStyleSheet) {
        var o = document.createStyleSheet(null, 0);
        o.addRule('.dummy','display: static;');
        o.cssText = 'html, head, head *, body, *.before, *.after, *.before *, *.after * { behavior: none; } * { behavior: expression($.pseudo(this)); }';
    }

})(jQuery);

// Place any jQuery/helper plugins in here.

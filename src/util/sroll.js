// 滚动条在Y轴上的滚动距离
function getScrollTop() {
    var scrollTop = 0,
        bodyScrollTop = 0,
        documentScrollTop = 0;
    if (document.body) {
        bodyScrollTop = document.body.scrollTop;
    }
    if (document.documentElement) {
        documentScrollTop = document.documentElement.scrollTop;
    }
    scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop;
    return scrollTop;
}

// 文档的总高度
function getScrollHeight() {
    var scrollHeight = 0,
        bodyScrollHeight = 0,
        documentScrollHeight = 0;
    if (document.body) {
        bSH = document.body.scrollHeight;
    }
    if (document.documentElement) {
        dSH = document.documentElement.scrollHeight;
    }
    scrollHeight = (bSH - dSH > 0) ? bSH : dSH;
    return scrollHeight;
}

// 浏览器视口的高度
function getWindowHeight() {
    var windowHeight = 0;
    if (document.compatMode == "CSS1Compat") {
        windowHeight = document.documentElement.clientHeight;
    } else {
        windowHeight = document.body.clientHeight;
    }
    return windowHeight;
}
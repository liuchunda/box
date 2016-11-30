
function ajax(options) {
    //1)参数初始化:用传递进来的值替换默认的值
    var _default = {
        url: null,
        type: 'GET',//->GET/POST
        dataType: 'JSON',//->TXT/XML/JSON
        async: true,
        data: null,//->GET请求DATA不传值,POST请求DATA在传值,传递的值是JSON字符串
        success: null,
        error: null
    };
    for (var key in options) {
        if (options.hasOwnProperty(key)) {
            _default[key] = options[key];
        }
    }

    //2)处理AJAX请求操作
    var xhr = new XMLHttpRequest;
    //->如果是GET请求,我们强制清除缓存
    if (_default.type.toUpperCase() === 'GET') {
        _default.url += _default.url.indexOf('?') === -1 ? '?' : '&';
        _default.url += '_=' + Math.random();
    }
    xhr.open(_default.type, _default.url, _default.async);
    xhr.onreadystatechange = function () {
        if (/^(2|3)\d{2}$/.test(xhr.status)) {
            if (xhr.readyState === 4) {
                //->返回内容类型的处理
                var text = xhr.responseText;
                _default.dataType = _default.dataType.toUpperCase();
                switch (_default.dataType) {
                    case 'XML':
                        text = xhr.responseXML;
                        break;
                    case 'JSON':
                        text = 'JSON' in window ? JSON.parse(text) : eval('(' + text + ')');
                        break;
                }
                //->执行SUCCESS
                _default.success && _default.success.call(xhr, text);
            }
        }
        if (/^(4|5)\d{2}$/.test(xhr.status)) {
            _default.error && _default.error.call(xhr, xhr.responseText);
        }
    };
    xhr.send(_default.data);
}
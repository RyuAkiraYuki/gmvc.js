GenericMVCJS.Model = (function ($) {
    function Model() {

    };

    Model.prototype.Fetch = function (uri, callback) {
        $.get(uri).then(callback, function (result) {
            console.error(result);
        })
    };

    Model.prototype.Submit = function (uri, data, callback) {
        $.post(uri).then(callback);
    };
    return Model;
})(jQuery);
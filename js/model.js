GenericMVCJS.Model = (function ($) {
    var callbackMissingMsg = 'There is no callback for you data update cenario. Don\'t forget to init it with SetUpdateCallbackMethod()';

    function Model(updatecallback) {
        this.Data = null;
        this.UpdateCallback = updatecallback === undefined ? console.log(callbackMissingMsg): updatecallback;

        $(this).on('updated', function (event) {
            this.UpdateCallback();
        })

    };

    Model.prototype.SetUpdateCallbackMethod = function (callback) {
        this.UpdateCallback = callback;
    }

    Model.prototype.SetData = function (data) {
        this.Data = data;
        $(this).trigger('updated');
    }

    Model.prototype.GetData = function () {
        return this.Data;
    }

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
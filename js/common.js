define(function(require) {
    var Tip = {};

    Tip.alert = alert.bind(window);

    return {
        Tip: Tip
    };

});
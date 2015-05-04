'use strict';

(function() {
    app.data.northwind = new Everlive({
        offlineStorage: true,
        apiKey: 'xBMElD0OcHLNYIFl',
        url: '//platform.telerik.com/bs-api/v1/',
        scheme: 'https'
    });

    document.addEventListener("online", function() {
        app.data.northwind.offline(false);
        app.data.northwind.sync();
    });

    document.addEventListener("offline", function() {
        app.data.northwind.offline(true);
    });

}());
'use strict';

app.dataListView = kendo.observable({
    onShow: function() {}
});
(function(parent) {
    var dataProvider = app.data.northwind;
    var dataSource = new kendo.data.DataSource({
        type: 'everlive',
        transport: {
            typeName: 'dbo_Customers',
            dataProvider: dataProvider
        },
        schema: {
            model: {
                fields: {
                    ContactName: {
                        field: 'ContactName',
                        defaultValue: ''
                    },
                    CompanyName: {
                        field: 'CompanyName',
                        defaultValue: ''
                    },
                }
            }
        },
        serverSorting: true,
        serverPaging: true,
        pageSize: 50
    });

    var dataListViewModel = kendo.observable({
        dataSource: dataSource
    });

    parent.set('dataListViewModel', dataListViewModel);
})(app.dataListView);
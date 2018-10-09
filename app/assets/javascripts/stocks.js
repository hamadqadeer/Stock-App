
var init_stock_lookup = function(){

    $('#stock-lookup-form').on('ajax:success',function (event,data,status) {
       // var detail = event.detail;
       // var data = detail[0], status = detail[1], xhr = detail[2];

        $('#stock-lookup').replaceWith(data);
        init_stock_lookup();

    });

    $('#stock-lookup-form').on('ajax:error',function (event,xhr,status,data) {


        $('#stock-lookup-results').replaceWith(' ');
        $('#stock-lookup-errors').replaceWith('Not found');
        init_stock_lookup();

    });



};





$(document).ready(function () {

    init_stock_lookup();

});

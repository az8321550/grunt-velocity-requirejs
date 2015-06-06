require(['common/lib'], function() {
  	require(['pages/demo/index','jquery'],function(){
        var getData=function(){
            $.get('/api/demo', function(data) {
                $('.asyc-data').html(JSON.stringify(data));
            });
        }
        window.getData=getData;
    });
});
require.config({
	paths:{
		'jquery':'../module/jq/jquery',
		'bootstrap':'../module/bootstrap/js/bootstrap',
        'fullpage':'http://cdn.bootcss.com/fullPage.js/2.7.8/jquery.fullPage',
        'fullpagecss':'http://cdn.bootcss.com/fullPage.js/2.7.8/jquery.fullPage',
        'stylecss':'../css/style'
	},
	map: {
        '*': {
            'cssjs': '../module/requirejs/css',
        }
    },    
    shim:{
        //调用bootstrap.js之前，必须先加载jquery.js。bootstrap插件需要在jq的环境下才能运行。
        "bootstrap":{
            deps:['jquery'],
            exports:"bootstrap"
        },
        "fullpage":{
            deps:['jquery'],
            exports:"fullpage"
        }
    }
});
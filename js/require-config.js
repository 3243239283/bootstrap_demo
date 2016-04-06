require.config({
	paths:{
		'jquery':'../module/jq/jquery',
		'bootstrap':'../module/bootstrap/js/bootstrap'
		//css文件的定义方法
        /*"layercss": "../moudle/layer/skin/layer"*/				//异步请求layer插件需要的layer.css文件
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
        }
    }
});
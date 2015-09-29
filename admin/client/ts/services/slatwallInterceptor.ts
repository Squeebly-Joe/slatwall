/// <reference path='../../../../client/typings/slatwallTypescript.d.ts' />
/// <reference path='../../../../client/typings/tsd.d.ts' />
module slatwalladmin{
	export interface IInterceptor {
        request: Function;
        requestError: Function;
        response: Function;
        responseError: Function;
    }
	
	export class SlatwallInterceptor implements slatwalladmin.IInterceptor{
		public static $inject = ['$location','$window','$q','$log','$injector','alertService','baseURL','dialogService','eTagService'];
		
		public static Factory(
            $location:ng.ILocationService,
			$window:ng.IWindowService ,
			$q:ng.IQService,
			$log:ng.ILogService,
			$injector:ng.auto.IInjectorService,
			alertService:slatwalladmin.IAlertService,
			baseURL,
			dialogService:slatwalladmin.IDialogService,
            eTagService
		) {
            return new SlatwallInterceptor($location,$window, $q, $log, $injector, alertService,baseURL,dialogService,eTagService);
        }
        
        public urlParam = null;
        public authHeader = 'Authorization';
        public authPrefix = 'Bearer ';

        constructor(
            public $location:ng.ILocationService,
			public $window:ng.IWindowService, 
			public $q:ng.IQService, 
			public $log:ng.ILogService,
			public $injector:ng.auto.IInjectorService, 
			public alertService:slatwalladmin.IAlertService,
			public baseURL,
			public dialogService:slatwalladmin.IDialogService,
            public eTagService
		) {
            this.$location = $location;
        	this.$window = $window;
			this.$q = $q;
			this.$log = $log;
			this.$injector = $injector;
			this.alertService = alertService;
			this.baseURL = baseURL;
			this.dialogService = dialogService;
            this.eTagService = eTagService;
        }
        
		public request = (config): ng.IPromise<any> => {
            this.$log.debug('request');
            config.headers = config.headers || {};
            if (this.$window.localStorage.getItem('token') && this.$window.localStorage.getItem('token') !== "undefined") {
                
                config.headers.Authorization = 'Bearer ' + this.$window.localStorage.getItem('token');
            }
            if(this.eTagService.getETag(config.url)){
                config.headers['If-None-Match'] = this.eTagService.getETag(config.url);    
            }
			if(config.method == 'GET' && (this.$location.search().slatAction && this.$location.search().slatAction === 'api:main.get')){
				config.method = 'POST';
				config.data = {};
				var data = {};
				if(angular.isDefined(config.params)){
					data = config.params;
				}
				var params = {};
				params.serializedJsonData = angular.toJson(data);
				params.context="GET";
				config.data = $.param(params);
				delete config.params;
				config.headers['Content-Type']= 'application/x-www-form-urlencoded';
			}else if(config.method == 'GET' && config.url.indexOf('.html') > 0 && config.url.indexOf('admin/client/partials') > 0) {
				//all partials are bound to instantiation key
				config.url = config.url + '?instantiationKey='+$.slatwall.getConfig().instantiationKey;
			}
			
			return config;
        }
        public requestError = (rejection): ng.IPromise<any> => {
             this.$log.debug('requestError');
			return this.$q.reject(rejection);
        }
        public response = (response): ng.IPromise<any> => {
            this.$log.debug('response');
            if(response.headers().etag){
                this.eTagService.setETag(response.config.url,response.headers().etag);
            }
			if(response.data.messages){
                var alerts = this.alertService.formatMessagesToAlerts(response.data.messages);
                this.alertService.addAlerts(alerts);
            }
			return response;
        }
        public responseError = (rejection): ng.IPromise<any> => {
           
			this.$log.debug('responseReject');
			if(angular.isDefined(rejection.status) && rejection.status !== 404 && rejection.status !== 403 && rejection.status !== 401){
				if(rejection.data && rejection.data.messages){
					var alerts = this.alertService.formatMessagesToAlerts(rejection.data.messages);
					this.alertService.addAlerts(alerts);
				}else{
					var message = {
						msg:'there was error retrieving data',
						type:'error'
					};
					this.alertService.addAlert(message);
				}
			}
			if (rejection.status === 401) {
				// handle the case where the user is not authenticated
				if(rejection.data && rejection.data.messages){
					//var deferred = $q.defer(); 
					var $http = this.$injector.get('$http');
					if(rejection.data.messages[0].message === 'timeout'){
						//open dialog
						this.dialogService.addPageDialog('preprocesslogin',{} );
					}else if(rejection.data.messages[0].message === 'invalid_token'){
                        return $http.get(baseURL+'/index.cfm/api/auth/login').then((loginResponse)=>{
                            this.$window.localStorage.setItem('token',loginResponse.data.token);
                            rejection.config.headers = rejection.config.headers || {};
                            rejection.config.headers.Authorization = 'Bearer ' + this.$window.localStorage.getItem('token');
                            return $http(rejection.config).then(function(response) {
                               return response;
                            });
						},function(rejection){
                            return rejection;
                        });
					}
				}
            }
			return rejection;
        }
		
	}
	angular.module('slatwalladmin').service('slatwallInterceptor', SlatwallInterceptor);
}

/// <reference path='../../typings/slatwallTypescript.d.ts' />
/// <reference path='../../typings/tsd.d.ts' />
//services
// import {AccountService} from "./services/accountservice";
// import {CartService} from "./services/cartservice";
// import {UtilityService} from "./services/utilityservice";
// import {SelectionService} from "./services/selectionservice";
// import {ObserverService} from "./services/observerservice";
// import {FormService} from "./services/formservice";
// import {MetaDataService} from "./services/metadataservice";
//controllers
import {OtherWiseController} from "./controllers/otherwisecontroller";
import {RouterController} from "./controllers/routercontroller";
//directives
import {SWDetailTabs} from "./components/swdetailtabs";
import {SWDetail} from "./components/swdetail";
import {SWList} from "./components/swlist";
import {SlatwallJQueryStatic} from "../slatwall/services/slatwallinterceptor";

declare var $:SlatwallJQueryStatic;

var entitymodule = angular.module('hibachi.entity',['ngRoute'])
.config(['$routeProvider','$injector',
($routeProvider,$injector)=>{
    $routeProvider.when('/entity/:entityName/', {
         template: function(params){
             var entityDirectiveExists = $injector.has('sw'+params.entityName+'ListDirective');
             if(entityDirectiveExists){
                 return '<sw-'+params.entityName.toLowerCase()+'-list>';
             }else{
                 return '<sw-list></sw-list>';
             }
         },
         controller: 'routerController'
     }).when('/entity/:entityName/:entityID', {
         template: function(params){
             var entityDirectiveExists = $injector.has('sw'+params.entityName+'DetailDirective');
             if(entityDirectiveExists){
                 return '<sw-'+params.entityName.toLowerCase()+'-detail>';
             }else{
                 return '<sw-detail></sw-detail>';
             }
         },
         controller: 'routerController',
     }).otherwise({
         //controller:'otherwiseController'
         templateUrl: $.slatwall.getConfig().baseURL + '/admin/client/js/partials/otherwise.html',
     });
}])
.constant('coreEntityPartialsPath','entity/components/')
//services

//controllers
.controller('otherwiseController',OtherWiseController)
.controller('routerController',RouterController)
//filters

//directives
.directive('swDetail',SWDetail.Factory())
.directive('swDetailTabs',SWDetailTabs.Factory())
.directive('swList',SWList.Factory())
//components

;
export{
	entitymodule
}
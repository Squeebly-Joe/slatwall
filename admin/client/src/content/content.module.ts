/// <reference path='../../typings/slatwallTypescript.d.ts' />
/// <reference path='../../typings/tsd.d.ts' />
//services

//filters

//directives
import {SWContentBasic} from "./components/swcontentbasic";
import {SWContentEditor} from "./components/swcontenteditor";
import {SWContentList} from "./components/swcontentlist";
import {SWContentNode} from "./components/swcontentnode";

var contentmodule = angular.module('hibachi.content',[]).config(()=>{

})
.constant('contentPartialsPath','content/components/')
//services

//filters

//directives
.directive('swContentBasic',SWContentBasic.Factory())
.directive('swContentEditor',SWContentEditor.Factory())
.directive('swContentList',SWContentList.Factory())
.directive('swContentNode',SWContentNode.Factory())
;
export{
	contentmodule
}
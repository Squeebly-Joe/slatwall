/// <reference path='../../../typings/slatwallTypescript.d.ts' />
/// <reference path='../../../typings/slatwallTypescript.d.ts' />
class PageDialogController{
	//@ngInject
	constructor(
		$scope,
		$location,
		$log,
		$anchorScroll,
		$slatwall,
		dialogService
	){
		$scope.$id = 'pageDialogController';

		//get url param to retrieve collection listing
		$scope.pageDialogs = dialogService.getPageDialogs();
		$scope.scrollToTopOfDialog = function(){
			$location.hash('/#topOfPageDialog');
			$anchorScroll();
		};
		$scope.pageDialogStyle = {"z-index":3000};
	}
}
export{
	PageDialogController
}
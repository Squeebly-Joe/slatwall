/// <reference path='../../../typings/slatwallTypescript.d.ts' />
/// <reference path='../../../typings/tsd.d.ts' />

class FrontendController{
        
        constructor(
                private $scope,
                private $element, private $log:ng.ILogService,
                private $slatwall,
                private collectionConfigService,
                private selectionService){
                
        }

}
export{FrontendController}
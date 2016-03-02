/// <reference path='../../../typings/hibachiTypescript.d.ts' />
/// <reference path='../../../typings/tsd.d.ts' />
class SWClickOutside{
    restrict = 'A';
    scope = {
        swClickOutside: '&'
    };
    
    public static Factory(){
        var directive = (
            $document,$timeout,utilityService
        )=>new SWClickOutside(
            $document,$timeout,utilityService
        );
        directive.$inject = [
            '$document', '$timeout', 'utilityService'
        ];
        return directive;
    }
    //@ngInject
    constructor(
        public $document, 
        public $timeout, 
        public utilityService
    ){}
    
    public link:ng.IDirectiveLinkFn = (scope:any, elem:any, attr:any) => {     
<<<<<<< HEAD
        this.$document.on('click', (e)=> {
=======
        this.$document.on('click', function (e) {
>>>>>>> ten24/master
            if (!e || !e.target) return;
            
            //check if our element already hidden
            if(angular.element(elem).hasClass("ng-hide")){
                return;
            }
            if(e.target !== elem && ! this.utilityService.isDescendantElement(elem,e.target)){
                this.$timeout(()=>{
                    scope.swClickOutside();
                });
            }
        });
    }
    
    
}
    
export{
    SWClickOutside
}

/// <reference path='../../../typings/slatwallTypescript.d.ts' />
/// <reference path='../../../typings/tsd.d.ts' />

class SWFLoginController{
    public pObject:string;
    // @ngInject
    constructor(private $route,private $log:ng.ILogService, private $window:ng.IWindowService, private $slatwall:any, private dialogService:any){
        this.$slatwall = $slatwall; 
        this.pObject   = "Account_Login";
    }
}

class SWFLogin implements ng.IDirective{
    
    public restrict:string = 'E';
    public scope = {};
    public bindToController={};
    public controller=SWFLoginController
    public controllerAs="SwfLogin";
    public templateUrl;
    
    // @ngInject
    constructor(private pathBuilderConfig, private frontendPartialsPath ){
        this.templateUrl = pathBuilderConfig.buildPartialsPath(frontendPartialsPath)+'logindirectivepartial.html';
    }
    
    public link:ng.IDirectiveLinkFn = (scope: ng.IScope, element: ng.IAugmentedJQuery, attrs:ng.IAttributes) =>{}
    
    public static Factory():ng.IDirectiveFactory{
        var directive:ng.IDirectiveFactory = (
			pathBuilderConfig,
            frontendPartialsPath
        ) => new SWFLogin(
			pathBuilderConfig,
            frontendPartialsPath
        );
        directive.$inject = [
			'pathBuilderConfig',
            'frontendPartialsPath'
        ];
        return directive;
    }
    
}
export {
   SWFLoginController, SWFLogin 
};


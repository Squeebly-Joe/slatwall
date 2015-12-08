/// <reference path='../../../../../../client/typings/slatwallTypescript.d.ts' />
/// <reference path='../../../../../../client/typings/tsd.d.ts' />
class SWFDirectiveController{
    private hibachiScope;
    //@ngInject
    constructor(private $route,private $log, private frontendPartialsPath, public $rootScope){
        this.$rootScope         = $rootScope;
        this.hibachiScope       = this.$rootScope.hibachiScope;
    } 
}

class SWFDirective implements ng.IDirective{
    
    public restrict:string = 'E';
    public scope = {};
    public bindToController={
		variables:"=",
		directive:"="
    };
    public controller=SWFDirectiveController
    public controllerAs="SWFDirective";
    public templateUrl;
    public $compile;
	
	// @ngInject
    constructor(private frontendPartialsPath:any, pathBuilderConfig, $compile){
        this.templateUrl = pathBuilderConfig.buildPartialsPath(frontendPartialsPath)+'swfcartpartial.html';
		this.$compile = $compile;
    }
    /** allows you to build a directive without using another controller and directive config. */
    // @ngInject
	public link:ng.IDirectiveLinkFn = (scope:ng.IScope, element: ng.IAugmentedJQuery, attrs:ng.IAttributes) =>{
		var template = '<span ' + scope.directive + ' ';
		if(angular.isDefined(scope.variables)){
			angular.forEach(scope.variables, function(value,key){
				template += ' ' + key + '=' + value + ' ';
			});
		}
		template += + '>';
		template += '</span>';
	
		// Render the template.
		element.html('').append(this.$compile(template)(scope));
	}
    
    public static Factory():ng.IDirectiveFactory{
        var directive:ng.IDirectiveFactory = (
		    frontendPartialsPath,
			pathBuilderConfig,
			$compile
        ) => new SWFDirective(
			frontendPartialsPath,
			pathBuilderConfig,
			$compile
        );
        directive.$inject = [
            'frontendPartialsPath',
			'pathBuilderConfig'
        ];
        return directive;
    }
}
export {SWFDirectiveController, SWFDirective};
	
	
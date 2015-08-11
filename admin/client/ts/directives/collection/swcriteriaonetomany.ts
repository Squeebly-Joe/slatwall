'use strict';
angular.module('slatwalladmin')
.directive('swCriteriaOneToMany', [
	'$log',
	'$slatwall',
	'$filter',
	'collectionPartialsPath',
	'collectionService',
	'metadataService',
	'dialogService',
	function(
		$log,
		$slatwall,
		$filter,
		collectionPartialsPath,
		collectionService,
		metadataService,
		dialogService
	){
	    
		return {
			restrict: 'E',
			templateUrl:collectionPartialsPath+'criteriaonetomany.html',
			link: function(scope, element, attrs){
				var getOneToManyOptions = function(type){
					if(angular.isUndefined(type)){
				 		type = 'filter'
				 	}
				 	var oneToManyOptions = [];
				 	if(type === 'filter'){
				 		oneToManyOptions = [
				        	{
				        		display:"All Exist In Collection",
				        		comparisonOperator:"All"
				        	},
				        	{
				        		display:"None Exist In Collection",
				        		comparisonOperator:"None"
				        	},
				        	{
				        		display:"Some Exist In Collection",
				        		comparisonOperator:"One"
				        	}
				        	/*,
				        	{
				        		display:"Empty",
				        		comparisonOperator:"is",
				        		value:"null"
				        	},
				        	{
				        		display:"Not Empty",
				        		comparisonOperator:"is not",
				        		value:"null"
				        	}*/
				        ];
				 	}else if(type === 'condition'){
				 		oneToManyOptions = [
				 		
				 		];
				 	}
				 	
			    	
			    	return oneToManyOptions;
			    };
			    
			    $log.debug('onetomany');
			    $log.debug(scope.selectedFilterProperty);
				
				scope.oneToManyOptions = getOneToManyOptions(scope.comparisonType);
				var existingCollectionsPromise = $slatwall.getExistingCollectionsByBaseEntity(scope.selectedFilterProperty.cfc);
				existingCollectionsPromise.then(function(value){
					scope.collectionOptions = value.data;
					if(angular.isDefined(scope.filterItem.collectionID)){
						for(var i in scope.collectionOptions){
							if(scope.collectionOptions[i].collectionID === scope.filterItem.collectionID){
								scope.selectedFilterProperty.selectedCollection = scope.collectionOptions[i];
							}
						}
						for(var i in scope.oneToManyOptions){
							if(scope.oneToManyOptions[i].comparisonOperator === scope.filterItem.criteria){
								scope.selectedFilterProperty.selectedCriteriaType = scope.oneToManyOptions[i];
							}
						}
					}

				});
				
				scope.selectedCriteriaChanged = function(selectedCriteria){
					$log.debug(selectedCriteria);
					//update breadcrumbs as array of filterpropertylist keys
					$log.debug(scope.selectedFilterProperty);
					
					var breadCrumb = {
							entityAlias:scope.selectedFilterProperty.name,
							cfc:scope.selectedFilterProperty.cfc,
							propertyIdentifier:scope.selectedFilterProperty.propertyIdentifier,
							rbKey:$slatwall.getRBKey('entity.'+scope.selectedFilterProperty.cfc.replace('_','')),
							filterProperty:scope.selectedFilterProperty
					};
					scope.filterItem.breadCrumbs.push(breadCrumb);
					$log.debug('criteriaChanged');
					//$log.debug(selectedFilterPropertyChanged);
					$log.debug(scope.selectedFilterProperty);
					//populate editfilterinfo with the current level of the filter property we are inspecting by pointing to the new scope key
					scope.selectedFilterPropertyChanged({selectedFilterProperty:scope.selectedFilterProperty.selectedCriteriaType});
					//update criteria to display the condition of the new critera we have selected
					
				};

				scope.addNewCollection = function(){
					console.log('Add new collection click');
					dialogService.addPageDialog('collection/criteriacreatecollection', {
						entityName: scope.selectedFilterProperty.cfc
					});
				};

				scope.viewSelectedCollection = function(){
					dialogService.addPageDialog('collection/criteriacreatecollection', {
						entityName: 'collection',
						entityId: scope.selectedFilterProperty.selectedCollection.collectionID
					});
				};
			}
		};
	}
]);
	

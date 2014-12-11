'use strict';
angular.module('slatwalladmin')
.factory('productBundleService',
[
	'$log',
	'$slatwall',
	function(
		$log,
		$slatwall
	){
		
		var productBundleService = {
			decorateProductBundleGroup:function(productBundleGroup){
				productBundleGroup.data.$$editing = true;
				var prototype = {
					$$setMinimumQuantity:function(quantity) {
						if(quantity < 0 || quantity === null ){
							this.minimumQuantity = 0;
						}
						
						if(quantity > this.maximumQuantity){
							this.maximumQuantity = quantity;
						} 
						
					},
					$$setMaximumQuantity:function(quantity){
						if(quantity < 1 || quantity === null ){
							this.maximumQuantity = 1;
						}
						if(this.maximumQuantity < this.minimumQuantity){
							this.minimumQuantity = this.maximumQuantity;
							 
						}
					},
					$$setActive:function(value){
						this.active=value;
					},
					$$toggleEdit:function(){
						if(angular.isUndefined(this.$$editing) || this.$$editing === false){
							this.$$editing = true;
						}else{
							this.$$editing = false;
						}
					}
				}
				angular.extend(productBundleGroup.data,prototype);
			},
			formatProductBundleGroupFilters:function(productBundelGroupFilters,filterTerm){
				$log.debug('formatProductBundleGroupFilters');
				$log.debug(filterTerm);
				if(filterTerm.value === 'sku'){
					for(var i in productBundelGroupFilters){
						productBundelGroupFilters[i].name = productBundelGroupFilters[i][filterTerm.value+'Code'];
						productBundelGroupFilters[i].type = filterTerm.name;
					}
				} else {
					for(var i in productBundelGroupFilters){
						productBundelGroupFilters[i].name = productBundelGroupFilters[i][filterTerm.value+'Name'];
						productBundelGroupFilters[i].type = filterTerm.name;
					}
				}
				
				$log.debug(productBundelGroupFilters);
				return productBundelGroupFilters;
			}
		
		};
		
		return productBundleService;
	}
]);
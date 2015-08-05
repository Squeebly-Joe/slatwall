
			angular.module('ngSlatwallModel',['ngSlatwall']).config(['$provide',function ($provide
			 ) {
	    	
	    	$provide.decorator( '$slatwall', [ 
		    	"$delegate", 
		    	'$http',
	            '$timeout',
	            '$log',
	            '$rootScope',
	            '$location',
	            '$anchorScroll',
	            '$q',
	            'utilityService', 
	            'formService', 
	            function( $delegate,
		            $http,
		            $timeout,
		            $log,
		            $rootScope,
		            $location,
		            $anchorScroll,
		            $q,
		            utilityService, 
		            formService 
		        )
	            {
	            
	            var _deferred = {};
			    var _config = {
			        dateFormat : 'MM/DD/YYYY',
			        timeFormat : 'HH:MM',
			        rbLocale : '',
			        baseURL : '/',
			        applicationKey : 'Slatwall',
			        debugFlag : true,
			        instantiationKey : '84552B2D-A049-4460-55F23F30FE7B26AD'
			    };
			    
			    if(slatwallAngular.slatwallConfig){
			        angular.extend(_config, slatwallAngular.slatwallConfig);
			    }	
	            	
                var _jsEntities = {};
                var entities = {};
                var validations = {};
                var defaultValues = {};
                
                	entities['OrderDelivery'] = {"orderDeliveryID":{"generator":"uuid","name":"orderDeliveryID","fieldtype":"id","ormtype":"string","unsavedvalue":"","length":32,"default":""},"emailTemplates":{"name":"emailTemplates","persistent":false,"type":"struct"},"createdDateTime":{"name":"createdDateTime","ormtype":"timestamp","hb_populateenabled":false},"printTemplates":{"name":"printTemplates","persistent":false,"type":"struct"},"processObjects":{"name":"processObjects","persistent":false,"type":"struct"},"settingValueFormatted":{"name":"settingValueFormatted","persistent":false,"type":"any"},"auditSmartList":{"name":"auditSmartList","persistent":false,"type":"any"},"order":{"name":"order","fieldtype":"many-to-one","cfc":"Order","fkcolumn":"orderID"},"modifiedDateTime":{"name":"modifiedDateTime","ormtype":"timestamp","hb_populateenabled":false},"newFlag":{"name":"newFlag","persistent":false,"type":"boolean"},"validations":{"name":"validations","persistent":false,"type":"struct"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"},"paymentTransaction":{"name":"paymentTransaction","fieldtype":"many-to-one","cfc":"PaymentTransaction","fkcolumn":"paymentTransactionID"},"createdByAccountID":{"name":"createdByAccountID","ormtype":"string","hb_populateenabled":false},"fulfillmentMethod":{"name":"fulfillmentMethod","fieldtype":"many-to-one","cfc":"FulfillmentMethod","fkcolumn":"fulfillmentMethodID"},"remoteID":{"name":"remoteID","ormtype":"string"},"modifiedByAccountID":{"name":"modifiedByAccountID","ormtype":"string","hb_populateenabled":false},"attributeValuesByAttributeIDStruct":{"name":"attributeValuesByAttributeIDStruct","persistent":false,"type":"struct"},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"trackingNumber":{"name":"trackingNumber","ormtype":"string"},"assignedAttributeSetSmartList":{"name":"assignedAttributeSetSmartList","persistent":false,"type":"any"},"orderDeliveryItems":{"inverse":true,"name":"orderDeliveryItems","fieldtype":"one-to-many","singularname":"orderDeliveryItem","cascade":"all-delete-orphan","cfc":"OrderDeliveryItem","fkcolumn":"orderDeliveryID"},"totalQuantityDelivered":{"name":"totalQuantityDelivered","hb_formattype":"numeric","persistent":false,"type":"numeric"},"modifiedByAccount":{"name":"modifiedByAccount","persistent":false},"attributeValues":{"inverse":true,"name":"attributeValues","fieldtype":"one-to-many","singularname":"attributeValue","cascade":"all-delete-orphan","cfc":"AttributeValue","fkcolumn":"orderDeliveryID","type":"array"},"shippingAddress":{"name":"shippingAddress","fieldtype":"many-to-one","cfc":"Address","fkcolumn":"shippingAddressID"},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"createdByAccount":{"name":"createdByAccount","persistent":false},"simpleRepresentation":{"name":"simpleRepresentation","persistent":false,"type":"string"},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"persistableErrors":{"name":"persistableErrors","persistent":false,"type":"array"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"encryptedPropertiesExistFlag":{"name":"encryptedPropertiesExistFlag","persistent":false,"type":"boolean"},"shippingMethod":{"name":"shippingMethod","fieldtype":"many-to-one","cfc":"ShippingMethod","fkcolumn":"shippingMethodID"},"rollbackProcessedFlag":{"name":"rollbackProcessedFlag","persistent":false,"type":"boolean"},"location":{"name":"location","fieldtype":"many-to-one","cfc":"Location","fkcolumn":"locationID"},"attributeValuesByAttributeCodeStruct":{"name":"attributeValuesByAttributeCodeStruct","persistent":false,"type":"struct"}};
                	entities['OrderDelivery'].className = 'OrderDelivery';
                	validations['OrderDelivery'] = {"properties":{"orderDeliveryID":[{"maxLength":0,"contexts":"delete"}],"location":[{"required":true,"contexts":"save"}],"order":[{"required":true,"contexts":"save"}],"orderDeliveryItems":[{"minCollection":1,"required":true,"contexts":"save"}]}};
                	defaultValues['OrderDelivery'] = {
                	orderDeliveryID:'',
										trackingNumber:null,
									remoteID:null,
									createdDateTime:'',
										createdByAccountID:null,
									modifiedDateTime:'',
										modifiedByAccountID:null,
									
						z:''
	                };
                
                	entities['OrderDelivery_Create'] = {"captureAuthorizedPaymentsFlag":{"name":"captureAuthorizedPaymentsFlag","hb_formfieldtype":"yesno"},"shippingAddress":{"name":"shippingAddress","fieldtype":"many-to-one","cfc":"Address","fkcolumn":"shippingAddressID"},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"orderDelivery":{"name":"orderDelivery"},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"preProcessDisplayedFlag":{"name":"preProcessDisplayedFlag"},"order":{"name":"order","fieldtype":"many-to-one","cfc":"Order","fkcolumn":"orderID"},"orderFulfillment":{"name":"orderFulfillment","fieldtype":"many-to-one","cfc":"OrderFulfillment","fkcolumn":"orderFulfillmentID"},"validations":{"name":"validations","persistent":false,"type":"struct"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"},"shippingMethod":{"name":"shippingMethod","fieldtype":"many-to-one","cfc":"ShippingMethod","fkcolumn":"shippingMethodID"},"location":{"name":"location","fieldtype":"many-to-one","cfc":"Location","fkcolumn":"locationID"},"populatedFlag":{"name":"populatedFlag"},"capturableAmount":{"name":"capturableAmount","hb_formattype":"currency"},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"trackingNumber":{"name":"trackingNumber"},"orderDeliveryItems":{"name":"orderDeliveryItems","hb_populatearray":true,"type":"array"}};
                	entities['OrderDelivery_Create'].className = 'OrderDelivery_Create';
                	validations['OrderDelivery_Create'] = {"properties":{"orderDeliveryItems":[{"method":"hasQuantityOnOneOrderDeliveryItem"}]},"conditions":{},"populatedPropertyValidation":{}};
                	defaultValues['OrderDelivery_Create'] = {
                	orderDelivery:'',
										orderDeliveryItems:[],
										trackingNumber:'',
									capturableAmount:0,
										preProcessDisplayedFlag:0,
										populatedFlag:0,
										
						z:''
	                };
                
                	entities['UpdateScript'] = {"lastExecutedDateTime":{"name":"lastExecutedDateTime","ormtype":"timestamp"},"emailTemplates":{"name":"emailTemplates","persistent":false,"type":"struct"},"printTemplates":{"name":"printTemplates","persistent":false,"type":"struct"},"processObjects":{"name":"processObjects","persistent":false,"type":"struct"},"settingValueFormatted":{"name":"settingValueFormatted","persistent":false,"type":"any"},"scriptPath":{"name":"scriptPath","ormtype":"string"},"auditSmartList":{"name":"auditSmartList","persistent":false,"type":"any"},"newFlag":{"name":"newFlag","persistent":false,"type":"boolean"},"validations":{"name":"validations","persistent":false,"type":"struct"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"},"attributeValuesByAttributeIDStruct":{"name":"attributeValuesByAttributeIDStruct","persistent":false,"type":"struct"},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"assignedAttributeSetSmartList":{"name":"assignedAttributeSetSmartList","persistent":false,"type":"any"},"modifiedByAccount":{"name":"modifiedByAccount","persistent":false},"executionCount":{"name":"executionCount","ormtype":"integer","default":0},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"simpleRepresentation":{"name":"simpleRepresentation","persistent":false,"type":"string"},"createdByAccount":{"name":"createdByAccount","persistent":false},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"persistableErrors":{"name":"persistableErrors","persistent":false,"type":"array"},"successfulExecutionCount":{"name":"successfulExecutionCount","ormtype":"integer","default":0},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"encryptedPropertiesExistFlag":{"name":"encryptedPropertiesExistFlag","persistent":false,"type":"boolean"},"rollbackProcessedFlag":{"name":"rollbackProcessedFlag","persistent":false,"type":"boolean"},"attributeValuesByAttributeCodeStruct":{"name":"attributeValuesByAttributeCodeStruct","persistent":false,"type":"struct"},"updateScriptID":{"generator":"uuid","name":"updateScriptID","fieldtype":"id","ormtype":"string","unsavedvalue":"","length":32,"default":""},"maxExecutionCount":{"name":"maxExecutionCount","ormtype":"integer"},"loadOrder":{"name":"loadOrder","ormtype":"integer"}};
                	entities['UpdateScript'].className = 'UpdateScript';
                	validations['UpdateScript'] = {"properties":{}};
                	defaultValues['UpdateScript'] = {
                	updateScriptID:'',
										scriptPath:null,
									loadOrder:null,
									maxExecutionCount:null,
									successfulExecutionCount:0,
									executionCount:0,
									lastExecutedDateTime:null,
									
						z:''
	                };
                
                	entities['OrderPayment'] = {"referencedOrderPayment":{"name":"referencedOrderPayment","fieldtype":"many-to-one","cfc":"OrderPayment","fkcolumn":"referencedOrderPaymentID"},"emailTemplates":{"name":"emailTemplates","persistent":false,"type":"struct"},"createdDateTime":{"name":"createdDateTime","ormtype":"timestamp","hb_populateenabled":false},"amountUnauthorized":{"name":"amountUnauthorized","hb_formattype":"currency","persistent":false},"expirationMonth":{"name":"expirationMonth","ormtype":"string","hb_populateenabled":"public","hb_formfieldtype":"select"},"creditCardNumberEncryptedDateTime":{"name":"creditCardNumberEncryptedDateTime","ormtype":"timestamp","hb_auditable":false,"column":"creditCardNumberEncryptDT"},"settingValueFormatted":{"name":"settingValueFormatted","persistent":false,"type":"any"},"auditSmartList":{"name":"auditSmartList","persistent":false,"type":"any"},"dynamicAmountFlag":{"name":"dynamicAmountFlag","hb_formattype":"yesno","persistent":false},"order":{"name":"order","fieldtype":"many-to-one","cfc":"Order","fkcolumn":"orderID"},"modifiedDateTime":{"name":"modifiedDateTime","ormtype":"timestamp","hb_populateenabled":false},"termPaymentAccount":{"name":"termPaymentAccount","fieldtype":"many-to-one","cfc":"Account","fkcolumn":"termPaymentAccountID"},"nameOnCreditCard":{"name":"nameOnCreditCard","ormtype":"string","hb_populateenabled":"public"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"},"creditCardNumberEncrypted":{"name":"creditCardNumberEncrypted","ormtype":"string","hb_auditable":false},"bankRoutingNumber":{"name":"bankRoutingNumber","hb_populateenabled":"public","persistent":false},"sucessfulPaymentTransactionExistsFlag":{"name":"sucessfulPaymentTransactionExistsFlag","persistent":false},"securityCode":{"name":"securityCode","hb_populateenabled":"public","persistent":false},"orderAmountNeeded":{"name":"orderAmountNeeded","persistent":false},"remoteID":{"name":"remoteID","ormtype":"string"},"creditCardNumber":{"name":"creditCardNumber","hb_populateenabled":"public","persistent":false},"paymentDueDate":{"name":"paymentDueDate","ormtype":"timestamp","hb_populateenabled":"public"},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"maximumPaymentMethodPaymentAmount":{"name":"maximumPaymentMethodPaymentAmount","persistent":false},"orderPaymentType":{"name":"orderPaymentType","fieldtype":"many-to-one","fetch":"join","hb_optionssmartlistdata":"f:parentType.systemCode=orderPaymentType","cfc":"Type","fkcolumn":"orderPaymentTypeID"},"amountUncaptured":{"name":"amountUncaptured","hb_formattype":"currency","persistent":false},"modifiedByAccount":{"name":"modifiedByAccount","persistent":false},"createdByAccount":{"name":"createdByAccount","persistent":false},"simpleRepresentation":{"name":"simpleRepresentation","persistent":false,"type":"string"},"companyPaymentMethodFlag":{"name":"companyPaymentMethodFlag","ormtype":"boolean","hb_populateenabled":"public"},"paymentTransactions":{"inverse":true,"name":"paymentTransactions","fieldtype":"one-to-many","orderby":"createdDateTime DESC","singularname":"paymentTransaction","cascade":"all","cfc":"PaymentTransaction","fkcolumn":"orderPaymentID","type":"array"},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"giftCardNumberEncrypted":{"name":"giftCardNumberEncrypted","ormtype":"string"},"amount":{"name":"amount","ormtype":"big_decimal","hb_populateenabled":"public"},"orderPaymentStatusType":{"name":"orderPaymentStatusType","fieldtype":"many-to-one","fetch":"join","hb_populateenabled":false,"hb_optionssmartlistdata":"f:parentType.systemCode=orderPaymentStatusType","cfc":"Type","fkcolumn":"orderPaymentStatusTypeID"},"amountUnreceived":{"name":"amountUnreceived","hb_formattype":"currency","persistent":false},"expirationYear":{"name":"expirationYear","ormtype":"string","hb_populateenabled":"public","hb_formfieldtype":"select"},"rollbackProcessedFlag":{"name":"rollbackProcessedFlag","persistent":false,"type":"boolean"},"attributeValuesByAttributeCodeStruct":{"name":"attributeValuesByAttributeCodeStruct","persistent":false,"type":"struct"},"orderPaymentID":{"generator":"uuid","name":"orderPaymentID","fieldtype":"id","ormtype":"string","unsavedvalue":"","length":32,"default":""},"originalChargeProviderTransactionID":{"name":"originalChargeProviderTransactionID","persistent":false},"creditCardLastFour":{"name":"creditCardLastFour","ormtype":"string"},"creditCardType":{"name":"creditCardType","ormtype":"string"},"purchaseOrderNumber":{"name":"purchaseOrderNumber","ormtype":"string","hb_populateenabled":"public"},"amountCredited":{"name":"amountCredited","hb_formattype":"currency","persistent":false,"type":"numeric"},"checkNumberEncrypted":{"name":"checkNumberEncrypted","ormtype":"string"},"expirationDate":{"name":"expirationDate","persistent":false},"originalAuthorizationProviderTransactionID":{"name":"originalAuthorizationProviderTransactionID","persistent":false},"amountAuthorized":{"name":"amountAuthorized","hb_formattype":"currency","persistent":false,"type":"numeric"},"amountReceived":{"name":"amountReceived","hb_formattype":"currency","persistent":false,"type":"numeric"},"peerOrderPaymentNullAmountExistsFlag":{"name":"peerOrderPaymentNullAmountExistsFlag","persistent":false},"printTemplates":{"name":"printTemplates","persistent":false,"type":"struct"},"paymentMethodOptions":{"name":"paymentMethodOptions","persistent":false},"appliedAccountPayments":{"inverse":true,"name":"appliedAccountPayments","fieldtype":"one-to-many","singularname":"appliedAccountPayment","cascade":"all","cfc":"AccountPaymentApplied","fkcolumn":"orderPaymentID","type":"array"},"processObjects":{"name":"processObjects","persistent":false,"type":"struct"},"saveBillingAccountAddressFlag":{"name":"saveBillingAccountAddressFlag","persistent":false},"creditCardOrProviderTokenExistsFlag":{"name":"creditCardOrProviderTokenExistsFlag","persistent":false},"bankAccountNumberEncrypted":{"name":"bankAccountNumberEncrypted","ormtype":"string"},"newFlag":{"name":"newFlag","persistent":false,"type":"boolean"},"orderStatusCode":{"name":"orderStatusCode","persistent":false},"validations":{"name":"validations","persistent":false,"type":"struct"},"billingAddress":{"name":"billingAddress","fieldtype":"many-to-one","hb_populateenabled":"public","cascade":"all","cfc":"Address","fkcolumn":"billingAddressID"},"billingAccountAddress":{"name":"billingAccountAddress","fieldtype":"many-to-one","hb_populateenabled":"public","cfc":"AccountAddress","fkcolumn":"billingAccountAddressID"},"createdByAccountID":{"name":"createdByAccountID","ormtype":"string","hb_populateenabled":false},"accountPaymentMethod":{"name":"accountPaymentMethod","fieldtype":"many-to-one","hb_populateenabled":"public","cfc":"AccountPaymentMethod","fkcolumn":"accountPaymentMethodID"},"originalProviderTransactionID":{"name":"originalProviderTransactionID","persistent":false},"experationMonthOptions":{"name":"experationMonthOptions","persistent":false},"creditCardNumberEncryptedGenerator":{"name":"creditCardNumberEncryptedGenerator","ormtype":"string","hb_auditable":false,"column":"creditCardNumberEncryptGen"},"attributeValuesByAttributeIDStruct":{"name":"attributeValuesByAttributeIDStruct","persistent":false,"type":"struct"},"providerToken":{"name":"providerToken","ormtype":"string"},"modifiedByAccountID":{"name":"modifiedByAccountID","ormtype":"string","hb_populateenabled":false},"expirationYearOptions":{"name":"expirationYearOptions","persistent":false},"statusCode":{"name":"statusCode","persistent":false},"assignedAttributeSetSmartList":{"name":"assignedAttributeSetSmartList","persistent":false,"type":"any"},"referencingOrderPayments":{"inverse":true,"name":"referencingOrderPayments","fieldtype":"one-to-many","singularname":"referencingOrderPayment","cascade":"all","cfc":"OrderPayment","fkcolumn":"referencedOrderPaymentID"},"giftCardTransactions":{"inverse":true,"name":"giftCardTransactions","fieldtype":"one-to-many","singularname":"giftCardTransaction","cascade":"all-delete-orphan","cfc":"GiftCardTransaction","fkcolumn":"orderPaymentID","type":"array"},"paymentMethodType":{"name":"paymentMethodType","persistent":false},"checkNumber":{"name":"checkNumber","hb_populateenabled":"public","persistent":false},"attributeValues":{"inverse":true,"name":"attributeValues","fieldtype":"one-to-many","singularname":"attributeValue","cascade":"all-delete-orphan","cfc":"AttributeValue","fkcolumn":"orderPaymentID","type":"array"},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"persistableErrors":{"name":"persistableErrors","persistent":false,"type":"array"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"encryptedPropertiesExistFlag":{"name":"encryptedPropertiesExistFlag","persistent":false,"type":"boolean"},"bankRoutingNumberEncrypted":{"name":"bankRoutingNumberEncrypted","ormtype":"string"},"paymentMethod":{"name":"paymentMethod","fieldtype":"many-to-one","fetch":"join","hb_populateenabled":"public","cfc":"PaymentMethod","fkcolumn":"paymentMethodID"},"amountUncredited":{"name":"amountUncredited","hb_formattype":"currency","persistent":false},"giftCardNumber":{"name":"giftCardNumber","hb_populateenabled":"public","persistent":false},"paymentTerm":{"name":"paymentTerm","fieldtype":"many-to-one","fetch":"join","cfc":"PaymentTerm","fkcolumn":"paymentTermID"},"bankAccountNumber":{"name":"bankAccountNumber","hb_populateenabled":"public","persistent":false},"currencyCode":{"name":"currencyCode","ormtype":"string","length":3},"saveBillingAccountAddressName":{"name":"saveBillingAccountAddressName","persistent":false},"originalAuthorizationCode":{"name":"originalAuthorizationCode","persistent":false}};
                	entities['OrderPayment'].className = 'OrderPayment';
                	validations['OrderPayment'] = {"properties":{"paymentMethod":[{"required":true,"contexts":"save"}],"securityCode":[{"required":true,"contexts":"save","conditions":"paymentTypeCreditCardNoTokenAndNewAndNotCopied"}],"creditCardNumber":[{"dataType":"creditCard","required":true,"contexts":"save","conditions":"creditCardWithoutToken"}],"expirationMonth":[{"required":true,"contexts":"save","conditions":"paymentTypeCreditCard"}],"paymentTransactions":[{"maxCollection":0,"contexts":"delete"}],"termPaymentAccount":[{"required":true,"contexts":"save","conditions":"paymentTypeTermPayment"}],"orderStatusCode":[{"inList":"ostNotPlaced,ostNew,ostProcessing,ostOnHold","contexts":"createTransaction"},{"inList":"ostNotPlaced,ostNew,ostProcessing,ostOnHold","contexts":"edit"}],"nameOnCreditCard":[{"required":true,"contexts":"save","conditions":"paymentTypeCreditCard"}],"amount":[{"dataType":"numeric","minValue":0,"contexts":"save"},{"required":true,"contexts":"save","conditions":"peerNullValueAlreadyExists"},{"contexts":"save","lteProperty":"termPaymentAccount.termAccountAvailableCredit","conditions":"paymentTypeTermPayment"},{"contexts":"save","lteProperty":"maximumPaymentMethodPaymentAmount"}],"expirationYear":[{"required":true,"contexts":"save","conditions":"paymentTypeCreditCard"}]},"conditions":{"creditCardWithoutToken":{"paymentMethodType":{"eq":"creditCard"},"providerToken":{"null":true}},"peerNullValueAlreadyExists":{"peerOrderPaymentNullAmountExistsFlag":{"eq":true}},"paymentTypeTermPayment":{"paymentMethodType":{"eq":"termPayment"}},"paymentTypeCreditCard":{"paymentMethodType":{"eq":"creditCard"}},"paymentTypeCreditCardNoTokenAndNewAndNotCopied":{"referencedOrderPayment":{"null":true},"paymentMethodType":{"eq":"creditCard"},"accountPaymentMethod":{"null":true},"providerToken":{"null":true},"newFlag":{"eq":true}}},"populatedPropertyValidation":{"billingAddress":[{"conditions":"paymentTypeCreditCard,paymentTypeTermPayment","validate":"full"}]}};
                	defaultValues['OrderPayment'] = {
                	orderPaymentID:'',
										amount:null,
									currencyCode:'USD',
										bankRoutingNumberEncrypted:null,
									bankAccountNumberEncrypted:null,
									checkNumberEncrypted:null,
									companyPaymentMethodFlag:null,
									creditCardNumberEncrypted:null,
									creditCardNumberEncryptedDateTime:null,
									creditCardNumberEncryptedGenerator:null,
									creditCardLastFour:null,
									creditCardType:null,
									expirationMonth:null,
									expirationYear:null,
									giftCardNumberEncrypted:null,
									nameOnCreditCard:null,
									paymentDueDate:null,
									providerToken:null,
									purchaseOrderNumber:null,
									remoteID:null,
									createdDateTime:'',
										createdByAccountID:null,
									modifiedDateTime:'',
										modifiedByAccountID:null,
									
						z:''
	                };
                
                	entities['OrderPayment_CreateTransaction'] = {"transactionTypeOptions":{"name":"transactionTypeOptions"},"populatedFlag":{"name":"populatedFlag"},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"preProcessDisplayedFlag":{"name":"preProcessDisplayedFlag"},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"orderPayment":{"name":"orderPayment"},"amount":{"name":"amount"},"validations":{"name":"validations","persistent":false,"type":"struct"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"},"transactionType":{"name":"transactionType","hb_formfieldtype":"select"}};
                	entities['OrderPayment_CreateTransaction'].className = 'OrderPayment_CreateTransaction';
                	validations['OrderPayment_CreateTransaction'] = {"properties":{"amount":[{"dataType":"numeric","minValue":0,"required":true},{"lteProperty":"orderPayment.amountUnAuthorized","conditions":"transactionTypeAuthorize"},{"lteProperty":"orderPayment.amountUnreceived","conditions":"transactionTypeAuthorizeAndCharge"},{"lteProperty":"orderPayment.amountUncredited","conditions":"transactionTypeCredit"},{"lteProperty":"orderPayment.amountUncaptured","conditions":"transactionTypeChargePreAuthorization"}],"transactionType":[{"required":true}]},"conditions":{"transactionTypeCredit":{"transactionType":{"eq":"credit"}},"transactionTypeAuthorize":{"transactionType":{"eq":"authorize"}},"transactionTypeChargePreAuthorization":{"transactionType":{"eq":"chargePreAuthorization"}},"transactionTypeAuthorizeAndCharge":{"transactionType":{"eq":"authorizeAndCharge"}}}};
                	defaultValues['OrderPayment_CreateTransaction'] = {
                	orderPayment:'',
										transactionType:"receive",
										preProcessDisplayedFlag:0,
										populatedFlag:0,
										
						z:''
	                };
                
                	entities['PriceGroupRateCurrency'] = {"createdDateTime":{"name":"createdDateTime","ormtype":"timestamp","hb_populateenabled":false},"emailTemplates":{"name":"emailTemplates","persistent":false,"type":"struct"},"printTemplates":{"name":"printTemplates","persistent":false,"type":"struct"},"processObjects":{"name":"processObjects","persistent":false,"type":"struct"},"settingValueFormatted":{"name":"settingValueFormatted","persistent":false,"type":"any"},"auditSmartList":{"name":"auditSmartList","persistent":false,"type":"any"},"modifiedDateTime":{"name":"modifiedDateTime","ormtype":"timestamp","hb_populateenabled":false},"newFlag":{"name":"newFlag","persistent":false,"type":"boolean"},"validations":{"name":"validations","persistent":false,"type":"struct"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"},"priceGroupRateCurrencyID":{"generator":"uuid","name":"priceGroupRateCurrencyID","fieldtype":"id","ormtype":"string","unsavedvalue":"","length":32,"default":""},"createdByAccountID":{"name":"createdByAccountID","ormtype":"string","hb_populateenabled":false},"remoteID":{"name":"remoteID","ormtype":"string"},"attributeValuesByAttributeIDStruct":{"name":"attributeValuesByAttributeIDStruct","persistent":false,"type":"struct"},"modifiedByAccountID":{"name":"modifiedByAccountID","ormtype":"string","hb_populateenabled":false},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"assignedAttributeSetSmartList":{"name":"assignedAttributeSetSmartList","persistent":false,"type":"any"},"modifiedByAccount":{"name":"modifiedByAccount","persistent":false},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"simpleRepresentation":{"name":"simpleRepresentation","persistent":false,"type":"string"},"createdByAccount":{"name":"createdByAccount","persistent":false},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"persistableErrors":{"name":"persistableErrors","persistent":false,"type":"array"},"amount":{"name":"amount","ormtype":"big_decimal","hb_formattype":"currency","hb_rbkey":"entity.priceGroupRate.amount"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"encryptedPropertiesExistFlag":{"name":"encryptedPropertiesExistFlag","persistent":false,"type":"boolean"},"priceGroupRate":{"name":"priceGroupRate","fieldtype":"many-to-one","cfc":"PriceGroupRate","fkcolumn":"priceGroupRateID"},"rollbackProcessedFlag":{"name":"rollbackProcessedFlag","persistent":false,"type":"boolean"},"attributeValuesByAttributeCodeStruct":{"name":"attributeValuesByAttributeCodeStruct","persistent":false,"type":"struct"},"currency":{"name":"currency","fieldtype":"many-to-one","cfc":"Currency","fkcolumn":"currencyCode"},"currencyCode":{"update":false,"name":"currencyCode","insert":false}};
                	entities['PriceGroupRateCurrency'].className = 'PriceGroupRateCurrency';
                	validations['PriceGroupRateCurrency'] = {"properties":{}};
                	defaultValues['PriceGroupRateCurrency'] = {
                	priceGroupRateCurrencyID:'',
										amount:null,
									currencyCode:'USD',
									remoteID:null,
									createdDateTime:'',
										createdByAccountID:null,
									modifiedDateTime:'',
										modifiedByAccountID:null,
									
						z:''
	                };
                
                	entities['Stock'] = {"calculatedQOH":{"name":"calculatedQOH","ormtype":"integer"},"createdDateTime":{"name":"createdDateTime","ormtype":"timestamp","hb_populateenabled":false},"emailTemplates":{"name":"emailTemplates","persistent":false,"type":"struct"},"printTemplates":{"name":"printTemplates","persistent":false,"type":"struct"},"processObjects":{"name":"processObjects","persistent":false,"type":"struct"},"settingValueFormatted":{"name":"settingValueFormatted","persistent":false,"type":"any"},"auditSmartList":{"name":"auditSmartList","persistent":false,"type":"any"},"modifiedDateTime":{"name":"modifiedDateTime","ormtype":"timestamp","hb_populateenabled":false},"newFlag":{"name":"newFlag","persistent":false,"type":"boolean"},"validations":{"name":"validations","persistent":false,"type":"struct"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"},"createdByAccountID":{"name":"createdByAccountID","ormtype":"string","hb_populateenabled":false},"inventory":{"inverse":true,"name":"inventory","fieldtype":"one-to-many","singularname":"inventory","lazy":"extra","cfc":"Inventory","fkcolumn":"stockID"},"remoteID":{"name":"remoteID","ormtype":"string"},"vendorOrderItems":{"inverse":true,"name":"vendorOrderItems","fieldtype":"one-to-many","singularname":"vendorOrderItem","cfc":"VendorOrderItem","fkcolumn":"stockID"},"modifiedByAccountID":{"name":"modifiedByAccountID","ormtype":"string","hb_populateenabled":false},"attributeValuesByAttributeIDStruct":{"name":"attributeValuesByAttributeIDStruct","persistent":false,"type":"struct"},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"assignedAttributeSetSmartList":{"name":"assignedAttributeSetSmartList","persistent":false,"type":"any"},"stockID":{"generator":"uuid","name":"stockID","fieldtype":"id","ormtype":"string","unsavedvalue":"","length":32,"default":""},"modifiedByAccount":{"name":"modifiedByAccount","persistent":false},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"createdByAccount":{"name":"createdByAccount","persistent":false},"simpleRepresentation":{"name":"simpleRepresentation","persistent":false,"type":"string"},"sku":{"name":"sku","fieldtype":"many-to-one","hb_cascadecalculate":true,"cfc":"Sku","fkcolumn":"skuID"},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"calculatedQNC":{"name":"calculatedQNC","ormtype":"integer"},"persistableErrors":{"name":"persistableErrors","persistent":false,"type":"array"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"encryptedPropertiesExistFlag":{"name":"encryptedPropertiesExistFlag","persistent":false,"type":"boolean"},"rollbackProcessedFlag":{"name":"rollbackProcessedFlag","persistent":false,"type":"boolean"},"location":{"name":"location","fieldtype":"many-to-one","cfc":"Location","fkcolumn":"locationID"},"attributeValuesByAttributeCodeStruct":{"name":"attributeValuesByAttributeCodeStruct","persistent":false,"type":"struct"},"calculatedQATS":{"name":"calculatedQATS","ormtype":"integer"}};
                	entities['Stock'].className = 'Stock';
                	validations['Stock'] = {"properties":{}};
                	defaultValues['Stock'] = {
                	stockID:'',
										remoteID:null,
									createdDateTime:'',
										createdByAccountID:null,
									modifiedDateTime:'',
										modifiedByAccountID:null,
									calculatedQATS:null,
									calculatedQOH:null,
									calculatedQNC:null,
									
						z:''
	                };
                
                	entities['PromotionReward'] = {"createdDateTime":{"name":"createdDateTime","ormtype":"timestamp","hb_populateenabled":false},"emailTemplates":{"name":"emailTemplates","persistent":false,"type":"struct"},"brands":{"name":"brands","fieldtype":"many-to-many","singularname":"brand","inversejoincolumn":"brandID","cfc":"Brand","fkcolumn":"promotionRewardID","linktable":"SwPromoRewardBrand"},"settingValueFormatted":{"name":"settingValueFormatted","persistent":false,"type":"any"},"auditSmartList":{"name":"auditSmartList","persistent":false,"type":"any"},"modifiedDateTime":{"name":"modifiedDateTime","ormtype":"timestamp","hb_populateenabled":false},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"},"eligiblePriceGroups":{"name":"eligiblePriceGroups","fieldtype":"many-to-many","singularname":"eligiblePriceGroup","inversejoincolumn":"priceGroupID","cfc":"PriceGroup","fkcolumn":"promotionRewardID","linktable":"SwPromoRewardEligiblePriceGrp","type":"array"},"excludedProductTypes":{"name":"excludedProductTypes","fieldtype":"many-to-many","singularname":"excludedProductType","inversejoincolumn":"productTypeID","cfc":"ProductType","fkcolumn":"promotionRewardID","linktable":"SwPromoRewardExclProductType"},"remoteID":{"name":"remoteID","ormtype":"string"},"excludedBrands":{"name":"excludedBrands","fieldtype":"many-to-many","singularname":"excludedBrand","inversejoincolumn":"brandID","cfc":"Brand","fkcolumn":"promotionRewardID","linktable":"SwPromoRewardExclBrand","type":"array"},"promotionRewardCurrencies":{"inverse":true,"name":"promotionRewardCurrencies","fieldtype":"one-to-many","singularname":"promotionRewardCurrency","cascade":"all-delete-orphan","cfc":"PromotionRewardCurrency","fkcolumn":"promotionRewardID","type":"array"},"amountTypeOptions":{"name":"amountTypeOptions","persistent":false},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"modifiedByAccount":{"name":"modifiedByAccount","persistent":false},"maximumUsePerQualification":{"hb_nullrbkey":"define.unlimited","name":"maximumUsePerQualification","ormtype":"integer"},"amountType":{"name":"amountType","ormtype":"string","hb_formattype":"rbKey"},"createdByAccount":{"name":"createdByAccount","persistent":false},"simpleRepresentation":{"name":"simpleRepresentation","persistent":false,"type":"string"},"products":{"name":"products","fieldtype":"many-to-many","singularname":"product","inversejoincolumn":"productID","cfc":"Product","fkcolumn":"promotionRewardID","linktable":"SwPromoRewardProduct"},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"excludedSkus":{"name":"excludedSkus","fieldtype":"many-to-many","singularname":"excludedSku","inversejoincolumn":"skuID","cfc":"Sku","fkcolumn":"promotionRewardID","linktable":"SwPromoRewardExclSku"},"amount":{"name":"amount","ormtype":"big_decimal","hb_formattype":"custom"},"maximumUsePerItem":{"hb_nullrbkey":"define.unlimited","name":"maximumUsePerItem","ormtype":"integer"},"fulfillmentMethods":{"name":"fulfillmentMethods","fieldtype":"many-to-many","singularname":"fulfillmentMethod","inversejoincolumn":"fulfillmentMethodID","cfc":"FulfillmentMethod","fkcolumn":"promotionRewardID","linktable":"SwPromoRewardFulfillmentMethod"},"rollbackProcessedFlag":{"name":"rollbackProcessedFlag","persistent":false,"type":"boolean"},"shippingAddressZones":{"name":"shippingAddressZones","fieldtype":"many-to-many","singularname":"shippingAddressZone","inversejoincolumn":"addressZoneID","cfc":"AddressZone","fkcolumn":"promotionRewardID","linktable":"SwPromoRewardShipAddressZone"},"attributeValuesByAttributeCodeStruct":{"name":"attributeValuesByAttributeCodeStruct","persistent":false,"type":"struct"},"roundingRule":{"name":"roundingRule","fieldtype":"many-to-one","cfc":"RoundingRule","hb_optionsnullrbkey":"define.none","fkcolumn":"roundingRuleID"},"excludedOptions":{"name":"excludedOptions","fieldtype":"many-to-many","singularname":"excludedOption","inversejoincolumn":"optionID","cfc":"Option","fkcolumn":"promotionRewardID","linktable":"SwPromoRewardExclOption","type":"array"},"productTypes":{"name":"productTypes","fieldtype":"many-to-many","singularname":"productType","inversejoincolumn":"productTypeID","cfc":"ProductType","fkcolumn":"promotionRewardID","linktable":"SwPromoRewardProductType"},"maximumUsePerOrder":{"hb_nullrbkey":"define.unlimited","name":"maximumUsePerOrder","ormtype":"integer"},"promotionPeriod":{"name":"promotionPeriod","fieldtype":"many-to-one","cfc":"PromotionPeriod","fkcolumn":"promotionPeriodID"},"printTemplates":{"name":"printTemplates","persistent":false,"type":"struct"},"processObjects":{"name":"processObjects","persistent":false,"type":"struct"},"promotionRewardID":{"generator":"uuid","name":"promotionRewardID","fieldtype":"id","ormtype":"string","unsavedvalue":"","length":32,"default":""},"applicableTerm":{"name":"applicableTerm","ormtype":"string","hb_formattype":"rbKey","hb_formfieldtype":"select"},"currencyCodeOptions":{"name":"currencyCodeOptions","persistent":false},"newFlag":{"name":"newFlag","persistent":false,"type":"boolean"},"validations":{"name":"validations","persistent":false,"type":"struct"},"createdByAccountID":{"name":"createdByAccountID","ormtype":"string","hb_populateenabled":false},"shippingMethods":{"name":"shippingMethods","fieldtype":"many-to-many","singularname":"shippingMethod","inversejoincolumn":"shippingMethodID","cfc":"ShippingMethod","fkcolumn":"promotionRewardID","linktable":"SwPromoRewardShippingMethod"},"modifiedByAccountID":{"name":"modifiedByAccountID","ormtype":"string","hb_populateenabled":false},"attributeValuesByAttributeIDStruct":{"name":"attributeValuesByAttributeIDStruct","persistent":false,"type":"struct"},"assignedAttributeSetSmartList":{"name":"assignedAttributeSetSmartList","persistent":false,"type":"any"},"rewards":{"name":"rewards","persistent":false,"type":"string"},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"rewardType":{"name":"rewardType","ormtype":"string","hb_formattype":"rbKey"},"persistableErrors":{"name":"persistableErrors","persistent":false,"type":"array"},"skus":{"name":"skus","fieldtype":"many-to-many","singularname":"sku","inversejoincolumn":"skuID","cfc":"Sku","fkcolumn":"promotionRewardID","linktable":"SwPromoRewardSku"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"encryptedPropertiesExistFlag":{"name":"encryptedPropertiesExistFlag","persistent":false,"type":"boolean"},"applicableTermOptions":{"name":"applicableTermOptions","persistent":false},"excludedProducts":{"name":"excludedProducts","fieldtype":"many-to-many","singularname":"excludedProduct","inversejoincolumn":"productID","cfc":"Product","fkcolumn":"promotionRewardID","linktable":"SwPromoRewardExclProduct"},"options":{"name":"options","fieldtype":"many-to-many","singularname":"option","inversejoincolumn":"optionID","cfc":"Option","fkcolumn":"promotionRewardID","linktable":"SwPromoRewardOption"},"currencyCode":{"name":"currencyCode","ormtype":"string","length":3}};
                	entities['PromotionReward'].className = 'PromotionReward';
                	validations['PromotionReward'] = {"properties":{"maximumUsePerQualification":[{"dataType":"numeric","contexts":"save"}],"maximumUsePerOrder":[{"dataType":"numeric","contexts":"save"}],"amountType":[{"required":true,"contexts":"save"}],"amount":[{"dataType":"numeric","required":true,"contexts":"save"}],"maximumUsePerItem":[{"dataType":"numeric","contexts":"save"}]}};
                	defaultValues['PromotionReward'] = {
                	promotionRewardID:'',
										amount:null,
									currencyCode:'USD',
										amountType:null,
									rewardType:null,
									applicableTerm:null,
									maximumUsePerOrder:null,
									maximumUsePerItem:null,
									maximumUsePerQualification:null,
									remoteID:null,
									createdDateTime:'',
										createdByAccountID:null,
									modifiedDateTime:'',
										modifiedByAccountID:null,
									
						z:''
	                };
                
                	entities['Account'] = {"priceGroups":{"name":"priceGroups","fieldtype":"many-to-many","singularname":"priceGroup","inversejoincolumn":"priceGroupID","cfc":"PriceGroup","fkcolumn":"accountID","linktable":"SwAccountPriceGroup"},"emailTemplates":{"name":"emailTemplates","persistent":false,"type":"struct"},"createdDateTime":{"name":"createdDateTime","ormtype":"timestamp","hb_populateenabled":false},"eligibleAccountPaymentMethodsSmartList":{"name":"eligibleAccountPaymentMethodsSmartList","persistent":false},"remoteEmployeeID":{"name":"remoteEmployeeID","ormtype":"string","hb_populateenabled":false,"hint":"Only used when integrated with a remote system"},"settingValueFormatted":{"name":"settingValueFormatted","persistent":false,"type":"any"},"auditSmartList":{"name":"auditSmartList","persistent":false,"type":"any"},"unenrolledAccountLoyaltyOptions":{"name":"unenrolledAccountLoyaltyOptions","persistent":false},"modifiedDateTime":{"name":"modifiedDateTime","ormtype":"timestamp","hb_populateenabled":false},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"},"termAccountAvailableCredit":{"name":"termAccountAvailableCredit","hb_formattype":"currency","persistent":false},"cmsAccountID":{"index":"RI_CMSACCOUNTID","name":"cmsAccountID","ormtype":"string","hb_populateenabled":false},"passwordResetID":{"name":"passwordResetID","persistent":false},"primaryShippingAddress":{"name":"primaryShippingAddress","fieldtype":"many-to-one","hb_populateenabled":"public","cfc":"AccountAddress","fkcolumn":"primaryShippingAddressID"},"remoteID":{"name":"remoteID","ormtype":"string","hb_populateenabled":false,"hint":"Only used when integrated with a remote system"},"saveablePaymentMethodsSmartList":{"name":"saveablePaymentMethodsSmartList","persistent":false},"accountLoyalties":{"inverse":true,"name":"accountLoyalties","fieldtype":"one-to-many","singularname":"accountLoyalty","cascade":"all-delete-orphan","cfc":"AccountLoyalty","fkcolumn":"accountID","type":"array"},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"guestAccountFlag":{"name":"guestAccountFlag","hb_formattype":"yesno","persistent":false},"primaryAddress":{"name":"primaryAddress","fieldtype":"many-to-one","hb_populateenabled":"public","cfc":"AccountAddress","fkcolumn":"primaryAddressID"},"primaryPaymentMethod":{"name":"primaryPaymentMethod","fieldtype":"many-to-one","hb_populateenabled":"public","cfc":"AccountPaymentMethod","fkcolumn":"primaryPaymentMethodID"},"slatwallAuthenticationExistsFlag":{"name":"slatwallAuthenticationExistsFlag","persistent":false},"company":{"name":"company","ormtype":"string","hb_populateenabled":"public"},"primaryEmailAddressNotInUseFlag":{"name":"primaryEmailAddressNotInUseFlag","persistent":false},"modifiedByAccount":{"name":"modifiedByAccount","persistent":false},"ordersPlacedSmartList":{"name":"ordersPlacedSmartList","persistent":false},"createdByAccount":{"name":"createdByAccount","persistent":false},"simpleRepresentation":{"name":"simpleRepresentation","persistent":false,"type":"string"},"failedLoginAttemptCount":{"name":"failedLoginAttemptCount","ormtype":"integer","hb_populateenabled":false,"hb_auditable":false},"remoteContactID":{"name":"remoteContactID","ormtype":"string","hb_populateenabled":false,"hint":"Only used when integrated with a remote system"},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"remoteCustomerID":{"name":"remoteCustomerID","ormtype":"string","hb_populateenabled":false,"hint":"Only used when integrated with a remote system"},"permissionGroups":{"name":"permissionGroups","fieldtype":"many-to-many","singularname":"permissionGroup","inversejoincolumn":"permissionGroupID","cfc":"PermissionGroup","fkcolumn":"accountID","linktable":"SwAccountPermissionGroup"},"accountEmailAddresses":{"inverse":true,"name":"accountEmailAddresses","fieldtype":"one-to-many","singularname":"accountEmailAddress","hb_populateenabled":"public","cascade":"all-delete-orphan","cfc":"AccountEmailAddress","fkcolumn":"accountID","type":"array"},"accountID":{"generator":"uuid","name":"accountID","fieldtype":"id","ormtype":"string","unsavedvalue":"","length":32,"default":""},"rollbackProcessedFlag":{"name":"rollbackProcessedFlag","persistent":false,"type":"boolean"},"attributeValuesByAttributeCodeStruct":{"name":"attributeValuesByAttributeCodeStruct","persistent":false,"type":"struct"},"orders":{"inverse":true,"name":"orders","fieldtype":"one-to-many","orderby":"orderOpenDateTime desc","singularname":"order","hb_populateenabled":false,"cfc":"Order","fkcolumn":"accountID","type":"array"},"fullName":{"name":"fullName","persistent":false},"eventRegistrations":{"inverse":true,"name":"eventRegistrations","fieldtype":"one-to-many","singularname":"eventRegistration","cascade":"all-delete-orphan","cfc":"EventRegistration","fkcolumn":"accountID"},"adminIcon":{"name":"adminIcon","persistent":false},"accountAuthentications":{"inverse":true,"name":"accountAuthentications","fieldtype":"one-to-many","singularname":"accountAuthentication","cascade":"all-delete-orphan","cfc":"AccountAuthentication","fkcolumn":"accountID","type":"array"},"gravatarURL":{"name":"gravatarURL","persistent":false},"lastName":{"name":"lastName","ormtype":"string","hb_populateenabled":"public"},"primaryPhoneNumber":{"name":"primaryPhoneNumber","fieldtype":"many-to-one","hb_populateenabled":"public","cfc":"AccountPhoneNumber","fkcolumn":"primaryPhoneNumberID"},"accountPhoneNumbers":{"inverse":true,"name":"accountPhoneNumbers","fieldtype":"one-to-many","singularname":"accountPhoneNumber","hb_populateenabled":"public","cascade":"all-delete-orphan","cfc":"AccountPhoneNumber","fkcolumn":"accountID","type":"array"},"printTemplates":{"name":"printTemplates","persistent":false,"type":"struct"},"processObjects":{"name":"processObjects","persistent":false,"type":"struct"},"newFlag":{"name":"newFlag","persistent":false,"type":"boolean"},"accountCreatedSite":{"name":"accountCreatedSite","fieldtype":"many-to-one","hb_populateenabled":"public","cfc":"Site","fkcolumn":"accountCreatedSiteID"},"validations":{"name":"validations","persistent":false,"type":"struct"},"loginLockExpiresDateTime":{"name":"loginLockExpiresDateTime","ormtype":"timestamp","hb_populateenabled":false},"termAccountOrderPayments":{"inverse":true,"name":"termAccountOrderPayments","fieldtype":"one-to-many","singularname":"termAccountOrderPayment","cascade":"all","cfc":"OrderPayment","fkcolumn":"termPaymentAccountID","type":"array"},"createdByAccountID":{"name":"createdByAccountID","ormtype":"string","hb_populateenabled":false},"firstName":{"name":"firstName","ormtype":"string","hb_populateenabled":"public"},"promotionCodes":{"inverse":true,"name":"promotionCodes","fieldtype":"many-to-many","singularname":"promotionCode","hb_populateenabled":false,"inversejoincolumn":"promotionCodeID","cfc":"PromotionCode","fkcolumn":"accountID","type":"array","linktable":"SwPromotionCodeAccount"},"attributeValuesByAttributeIDStruct":{"name":"attributeValuesByAttributeIDStruct","persistent":false,"type":"struct"},"modifiedByAccountID":{"name":"modifiedByAccountID","ormtype":"string","hb_populateenabled":false},"primaryEmailAddress":{"name":"primaryEmailAddress","fieldtype":"many-to-one","hb_populateenabled":"public","cfc":"AccountEmailAddress","fkcolumn":"primaryEmailAddressID"},"assignedAttributeSetSmartList":{"name":"assignedAttributeSetSmartList","persistent":false,"type":"any"},"accountPaymentMethods":{"inverse":true,"name":"accountPaymentMethods","fieldtype":"one-to-many","singularname":"accountPaymentMethod","hb_populateenabled":"public","cascade":"all-delete-orphan","cfc":"AccountPaymentMethod","fkcolumn":"accountID","type":"array"},"emailAddress":{"name":"emailAddress","hb_formattype":"email","persistent":false},"subscriptionUsages":{"inverse":true,"name":"subscriptionUsages","fieldtype":"one-to-many","singularname":"subscriptionUsage","cascade":"all-delete-orphan","cfc":"SubscriptionUsage","fkcolumn":"accountID","type":"array"},"subscriptionUsageBenefitAccounts":{"inverse":true,"name":"subscriptionUsageBenefitAccounts","fieldtype":"one-to-many","singularname":"subscriptionUsageBenefitAccount","cascade":"all-delete-orphan","cfc":"SubscriptionUsageBenefitAccount","fkcolumn":"accountID","type":"array"},"attributeValues":{"inverse":true,"name":"attributeValues","fieldtype":"one-to-many","singularname":"attributeValue","cascade":"all-delete-orphan","cfc":"AttributeValue","fkcolumn":"accountID","type":"array"},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"superUserFlag":{"name":"superUserFlag","ormtype":"boolean"},"primaryBillingAddress":{"name":"primaryBillingAddress","fieldtype":"many-to-one","hb_populateenabled":"public","cfc":"AccountAddress","fkcolumn":"primaryBillingAddressID"},"address":{"name":"address","persistent":false},"persistableErrors":{"name":"persistableErrors","persistent":false,"type":"array"},"adminAccountFlag":{"name":"adminAccountFlag","hb_formattype":"yesno","persistent":false},"accountContentAccesses":{"inverse":true,"name":"accountContentAccesses","fieldtype":"one-to-many","singularname":"accountContentAccess","hb_populateenabled":false,"cascade":"all-delete-orphan","cfc":"AccountContentAccess","fkcolumn":"accountID","type":"array"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"encryptedPropertiesExistFlag":{"name":"encryptedPropertiesExistFlag","persistent":false,"type":"boolean"},"giftCards":{"inverse":true,"name":"giftCards","fieldtype":"one-to-many","singularname":"giftCard","cascade":"all","cfc":"GiftCard","fkcolumn":"ownerAccountID","type":"array"},"phoneNumber":{"name":"phoneNumber","persistent":false},"accountPayments":{"inverse":true,"name":"accountPayments","fieldtype":"one-to-many","singularname":"accountPayment","cascade":"all","cfc":"AccountPayment","fkcolumn":"accountID","type":"array"},"activeSubscriptionUsageBenefitsSmartList":{"name":"activeSubscriptionUsageBenefitsSmartList","persistent":false},"productReviews":{"inverse":true,"name":"productReviews","fieldtype":"one-to-many","singularname":"productReview","hb_populateenabled":false,"cfc":"ProductReview","fkcolumn":"accountID","type":"array"},"termOrderPaymentsByDueDateSmartList":{"name":"termOrderPaymentsByDueDateSmartList","persistent":false},"ordersNotPlacedSmartList":{"name":"ordersNotPlacedSmartList","persistent":false},"accountAddresses":{"inverse":true,"name":"accountAddresses","fieldtype":"one-to-many","singularname":"accountAddress","hb_populateenabled":"public","cascade":"all-delete-orphan","cfc":"AccountAddress","fkcolumn":"accountID","type":"array"},"termAccountBalance":{"name":"termAccountBalance","hb_formattype":"currency","persistent":false}};
                	entities['Account'].className = 'Account';
                	validations['Account'] = {"properties":{"cmsAccountID":[{"uniqueOrNull":true,"contexts":"save"}],"firstName":[{"required":true,"contexts":"save"}],"orders":[{"maxCollection":0,"contexts":"delete"}],"accountEmailAddressesNotInUseFlag":[{"eq":true,"contexts":"createPassword"}],"unenrolledAccountLoyaltyOptions":[{"minCollection":1,"contexts":"addAccountLoyalty"}],"productReviews":[{"maxCollection":0,"contexts":"delete"}],"primaryEmailAddress":[{"contexts":"save","conditions":"slatwallAuthenticatedAccount","method":"getPrimaryEmailAddressesNotInUseFlag"}],"emailAddress":[{"required":true,"contexts":"createPassword"}],"slatwallAuthenticationExistsFlag":[{"eq":false,"contexts":"createPassword"},{"eq":true,"contexts":"changePassword"}],"lastName":[{"required":true,"contexts":"save"}]},"conditions":{"slatwallAuthenticatedAccount":{"slatwallAuthenticationExistsFlag":{"eq":true}}}};
                	defaultValues['Account'] = {
                	accountID:'',
										superUserFlag:false,
									firstName:null,
									lastName:null,
									company:null,
									loginLockExpiresDateTime:null,
									failedLoginAttemptCount:null,
									cmsAccountID:null,
									remoteID:null,
									remoteEmployeeID:null,
									remoteCustomerID:null,
									remoteContactID:null,
									createdDateTime:'',
										createdByAccountID:null,
									modifiedDateTime:'',
										modifiedByAccountID:null,
									
						z:''
	                };
                
                	entities['Account_AddAccountLoyalty'] = {"loyaltyID":{"name":"loyaltyID","hb_rbkey":"entity.loyalty","hb_formfieldtype":"select"},"populatedFlag":{"name":"populatedFlag"},"loyalty":{"name":"loyalty"},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"accountLoyaltyNumber":{"name":"accountLoyaltyNumber"},"loyaltyIDOptions":{"name":"loyaltyIDOptions"},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"preProcessDisplayedFlag":{"name":"preProcessDisplayedFlag"},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"validations":{"name":"validations","persistent":false,"type":"struct"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"},"account":{"name":"account"}};
                	entities['Account_AddAccountLoyalty'].className = 'Account_AddAccountLoyalty';
                	validations['Account_AddAccountLoyalty'] = {"properties":{}};
                	defaultValues['Account_AddAccountLoyalty'] = {
                	account:'',
										loyaltyID:'',
									accountLoyaltyNumber:'',
									loyaltyIDOptions:[],
										preProcessDisplayedFlag:0,
										populatedFlag:0,
										
						z:''
	                };
                
                	entities['Account_AddAccountPayment'] = {"accountPaymentMethodIDOptions":{"name":"accountPaymentMethodIDOptions"},"accountAddressID":{"name":"accountAddressID","hb_rbkey":"entity.accountAddress","hb_formfieldtype":"select"},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"appliedOrderPayments":{"name":"appliedOrderPayments","hb_populatearray":true,"type":"array"},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"preProcessDisplayedFlag":{"name":"preProcessDisplayedFlag"},"saveAccountPaymentMethodFlag":{"name":"saveAccountPaymentMethodFlag","hb_formfieldtype":"yesno"},"saveAccountPaymentMethodName":{"name":"saveAccountPaymentMethodName","hb_rbkey":"entity.accountPaymentMethod.accountPaymentMethodName"},"validations":{"name":"validations","persistent":false,"type":"struct"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"},"account":{"name":"account"},"populatedFlag":{"name":"populatedFlag"},"accountPaymentMethodID":{"name":"accountPaymentMethodID","hb_rbkey":"entity.accountPaymentMethod","hb_formfieldtype":"select"},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"newAccountPayment":{"name":"newAccountPayment","fieldtype":"many-to-one","persistent":false,"cfc":"AccountPayment","fkcolumn":"accountPaymentID"},"paymentMethodIDOptions":{"name":"paymentMethodIDOptions"},"accountAddressIDOptions":{"name":"accountAddressIDOptions"},"currencyCode":{"name":"currencyCode","hb_rbkey":"entity.currency","hb_formfieldtype":"select"}};
                	entities['Account_AddAccountPayment'].className = 'Account_AddAccountPayment';
                	validations['Account_AddAccountPayment'] = {"properties":{}};
                	defaultValues['Account_AddAccountPayment'] = {
                	account:'',
										accountPaymentMethodID:"",
										accountAddressID:"",
										saveAccountPaymentMethodFlag:0,
										saveAccountPaymentMethodName:'',
									currencyCode:'',
									appliedOrderPayments:'',
									accountPaymentMethodIDOptions:[{"name":"New","value":""}],
										paymentMethodIDOptions:[{"value":"444df303dedc6dab69dd7ebcc9b8036a","allowsave":true,"paymentmethodtype":"creditCard","name":"Credit Card"},{"value":"50d8cd61009931554764385482347f3a","allowsave":false,"paymentmethodtype":"giftCard","name":"Gift Card"}],
										accountAddressIDOptions:[{"name":"New","value":""}],
										preProcessDisplayedFlag:0,
										populatedFlag:0,
										
						z:''
	                };
                
                	entities['Account_CreatePassword'] = {"populatedFlag":{"name":"populatedFlag"},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"passwordConfirm":{"name":"passwordConfirm"},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"preProcessDisplayedFlag":{"name":"preProcessDisplayedFlag"},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"password":{"name":"password"},"validations":{"name":"validations","persistent":false,"type":"struct"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"},"account":{"name":"account"}};
                	entities['Account_CreatePassword'].className = 'Account_CreatePassword';
                	validations['Account_CreatePassword'] = {"properties":{"passwordConfirm":[{"required":true,"eqProperty":"password"}],"password":[{"required":true},{"conditions":"isPublicAccount","minLength":6},{"regex":"^.*(?=.{7,})(?=.*[0-9])(?=.*[a-zA-Z]).*$","conditions":"isAdminAccount"}]},"conditions":{"isPublicAccount":{"account.AdminAccountFlag":{"eq":false}},"isAdminAccount":{"account.AdminAccountFlag":{"eq":true}}}};
                	defaultValues['Account_CreatePassword'] = {
                	account:'',
										password:'',
									passwordConfirm:'',
									preProcessDisplayedFlag:0,
										populatedFlag:0,
										
						z:''
	                };
                
                	entities['Account_ChangePassword'] = {"populatedFlag":{"name":"populatedFlag"},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"passwordConfirm":{"name":"passwordConfirm"},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"preProcessDisplayedFlag":{"name":"preProcessDisplayedFlag"},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"password":{"name":"password"},"validations":{"name":"validations","persistent":false,"type":"struct"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"},"account":{"name":"account"}};
                	entities['Account_ChangePassword'].className = 'Account_ChangePassword';
                	validations['Account_ChangePassword'] = {"properties":{"passwordConfirm":[{"required":true,"eqProperty":"password"}],"password":[{"required":true},{"conditions":"isPublicAccount","minLength":6},{"regex":"^.*(?=.{7,})(?=.*[0-9])(?=.*[a-zA-Z]).*$","conditions":"isAdminAccount"}]},"conditions":{"isPublicAccount":{"account.AdminAccountFlag":{"eq":false}},"isAdminAccount":{"account.AdminAccountFlag":{"eq":true}}}};
                	defaultValues['Account_ChangePassword'] = {
                	account:'',
										password:'',
									passwordConfirm:'',
									preProcessDisplayedFlag:0,
										populatedFlag:0,
										
						z:''
	                };
                
                	entities['Account_Create'] = {"company":{"name":"company","hb_rbkey":"entity.account.company"},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"preProcessDisplayedFlag":{"name":"preProcessDisplayedFlag"},"validations":{"name":"validations","persistent":false,"type":"struct"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"},"account":{"name":"account"},"emailAddressConfirm":{"name":"emailAddressConfirm"},"firstName":{"name":"firstName","hb_rbkey":"entity.account.firstName"},"phoneNumber":{"name":"phoneNumber"},"createAuthenticationFlag":{"name":"createAuthenticationFlag","hb_sessiondefault":1},"populatedFlag":{"name":"populatedFlag"},"passwordConfirm":{"name":"passwordConfirm"},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"password":{"name":"password"},"emailAddress":{"name":"emailAddress"},"lastName":{"name":"lastName","hb_rbkey":"entity.account.lastName"}};
                	entities['Account_Create'].className = 'Account_Create';
                	validations['Account_Create'] = {"properties":{"firstName":[{"required":true}],"passwordConfirm":[{"required":true,"conditions":"savePasswordSelected"}],"password":[{"required":true,"conditions":"savePasswordSelected","minLength":6,"eqProperty":"passwordConfirm"}],"emailAddressConfirm":[{"required":true,"conditions":"savePasswordSelected"}],"emailAddress":[{"required":true,"conditions":"savePasswordSelected","method":"getPrimaryEmailAddressNotInUseFlag"},{"dataType":"email","eqProperty":"emailAddressConfirm"}],"lastName":[{"required":true}]},"conditions":{"savePasswordSelected":{"createAuthenticationFlag":{"eq":1}}}};
                	defaultValues['Account_Create'] = {
                	account:'',
										firstName:'',
									lastName:'',
									company:'',
									phoneNumber:'',
									emailAddress:'',
									emailAddressConfirm:'',
									createAuthenticationFlag:1,
										password:'',
									passwordConfirm:'',
									preProcessDisplayedFlag:0,
										populatedFlag:0,
										
						z:''
	                };
                
                	entities['Account_ForgotPassword'] = {"populatedFlag":{"name":"populatedFlag"},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"preProcessDisplayedFlag":{"name":"preProcessDisplayedFlag"},"siteID":{"name":"siteID"},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"validations":{"name":"validations","persistent":false,"type":"struct"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"},"account":{"name":"account"},"emailAddress":{"name":"emailAddress"}};
                	entities['Account_ForgotPassword'].className = 'Account_ForgotPassword';
                	validations['Account_ForgotPassword'] = {"properties":{"emailAddress":[{"dataType":"email","required":true}]}};
                	defaultValues['Account_ForgotPassword'] = {
                	account:'',
										emailAddress:'',
									siteID:"",
										preProcessDisplayedFlag:0,
										populatedFlag:0,
										
						z:''
	                };
                
                	entities['Account_Login'] = {"populatedFlag":{"name":"populatedFlag"},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"preProcessDisplayedFlag":{"name":"preProcessDisplayedFlag"},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"password":{"name":"password"},"validations":{"name":"validations","persistent":false,"type":"struct"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"},"account":{"name":"account"},"emailAddress":{"name":"emailAddress"}};
                	entities['Account_Login'].className = 'Account_Login';
                	validations['Account_Login'] = {"properties":{"password":[{"required":true}],"emailAddress":[{"dataType":"email","required":true}]}};
                	defaultValues['Account_Login'] = {
                	account:'',
										emailAddress:'',
									password:'',
									preProcessDisplayedFlag:0,
										populatedFlag:0,
										
						z:''
	                };
                
                	entities['Account_ResetPassword'] = {"swprid":{"name":"swprid"},"populatedFlag":{"name":"populatedFlag"},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"passwordConfirm":{"name":"passwordConfirm"},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"preProcessDisplayedFlag":{"name":"preProcessDisplayedFlag"},"accountPasswordResetID":{"name":"accountPasswordResetID"},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"password":{"name":"password"},"validations":{"name":"validations","persistent":false,"type":"struct"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"},"account":{"name":"account"}};
                	entities['Account_ResetPassword'].className = 'Account_ResetPassword';
                	validations['Account_ResetPassword'] = {"properties":{"swprid":[{"required":true,"eqProperty":"accountPasswordResetID"}],"passwordConfirm":[{"required":true,"eqProperty":"password"}],"password":[{"required":true},{"conditions":"isPublicAccount","minLength":6},{"regex":"^.*(?=.{7,})(?=.*[0-9])(?=.*[a-zA-Z]).*$","conditions":"isAdminAccount"}]},"conditions":{"isPublicAccount":{"account.AdminAccountFlag":{"eq":false}},"isAdminAccount":{"account.AdminAccountFlag":{"eq":true}}}};
                	defaultValues['Account_ResetPassword'] = {
                	account:'',
										swprid:'',
									password:'',
									passwordConfirm:'',
									accountPasswordResetID:"7e5ac0a48d3181325f47c3e80d6b0655",
										preProcessDisplayedFlag:0,
										populatedFlag:0,
										
						z:''
	                };
                
                	entities['Account_SetupInitialAdmin'] = {"company":{"name":"company","hb_rbkey":"entity.account.company"},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"preProcessDisplayedFlag":{"name":"preProcessDisplayedFlag"},"siteTitle":{"name":"siteTitle"},"adminAccessFlag":{"name":"adminAccessFlag","default":0,"hb_formfieldtype":"yesno"},"validations":{"name":"validations","persistent":false,"type":"struct"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"},"account":{"name":"account"},"emailAddressConfirm":{"name":"emailAddressConfirm"},"siteDomains":{"name":"siteDomains"},"site":{"name":"site"},"firstName":{"name":"firstName","hb_rbkey":"entity.account.firstName"},"populatedFlag":{"name":"populatedFlag"},"passwordConfirm":{"name":"passwordConfirm"},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"password":{"name":"password"},"emailAddress":{"name":"emailAddress"},"lastName":{"name":"lastName","hb_rbkey":"entity.account.lastName"},"slatwallAsCMSFlag":{"name":"slatwallAsCMSFlag","default":0,"hb_formfieldtype":"yesno"}};
                	entities['Account_SetupInitialAdmin'].className = 'Account_SetupInitialAdmin';
                	validations['Account_SetupInitialAdmin'] = {"properties":{"firstName":[{"required":true}],"passwordConfirm":[{"required":true}],"password":[{"regex":"^.*(?=.{7,})(?=.*[0-9])(?=.*[a-zA-Z]).*$","required":true,"eqProperty":"passwordConfirm"}],"emailAddressConfirm":[{"dataType":"email","required":true}],"emailAddress":[{"dataType":"email","required":true,"eqProperty":"emailAddressConfirm"}],"lastName":[{"required":true}]}};
                	defaultValues['Account_SetupInitialAdmin'] = {
                	account:'',
										site:'',
									firstName:'',
									lastName:'',
									company:'',
									emailAddress:'',
									emailAddressConfirm:'',
									password:'',
									passwordConfirm:'',
									slatwallAsCMSFlag:0,
										siteTitle:'',
									siteDomains:'',
									adminAccessFlag:0,
										preProcessDisplayedFlag:0,
										populatedFlag:0,
										
						z:''
	                };
                
                	entities['Account_UpdatePassword'] = {"populatedFlag":{"name":"populatedFlag"},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"passwordConfirm":{"name":"passwordConfirm"},"existingPassword":{"name":"existingPassword"},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"preProcessDisplayedFlag":{"name":"preProcessDisplayedFlag"},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"password":{"name":"password"},"validations":{"name":"validations","persistent":false,"type":"struct"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"},"account":{"name":"account"},"emailAddress":{"name":"emailAddress"}};
                	entities['Account_UpdatePassword'].className = 'Account_UpdatePassword';
                	validations['Account_UpdatePassword'] = {"properties":{"passwordConfirm":[{"required":true,"eqProperty":"password"}],"existingPassword":[{"required":true}],"password":[{"regex":"^.*(?=.{7,})(?=.*[0-9])(?=.*[a-zA-Z]).*$","required":true}],"emailAddress":[{"dataType":"email","required":true}]}};
                	defaultValues['Account_UpdatePassword'] = {
                	account:'',
										emailAddress:'',
									existingPassword:'',
									password:'',
									passwordConfirm:'',
									preProcessDisplayedFlag:0,
										populatedFlag:0,
										
						z:''
	                };
                
                	entities['Account_GenerateAuthToken'] = {"populatedFlag":{"name":"populatedFlag"},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"authenticationDescription":{"name":"authenticationDescription"},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"preProcessDisplayedFlag":{"name":"preProcessDisplayedFlag"},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"validations":{"name":"validations","persistent":false,"type":"struct"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"},"account":{"name":"account"}};
                	entities['Account_GenerateAuthToken'].className = 'Account_GenerateAuthToken';
                	validations['Account_GenerateAuthToken'] = {"properties":{"authenticationDescription":[{"required":true}]}};
                	defaultValues['Account_GenerateAuthToken'] = {
                	account:'',
										authenticationDescription:'',
									preProcessDisplayedFlag:0,
										populatedFlag:0,
										
						z:''
	                };
                
                	entities['AttributeOption'] = {"createdDateTime":{"name":"createdDateTime","ormtype":"timestamp","hb_populateenabled":false},"emailTemplates":{"name":"emailTemplates","persistent":false,"type":"struct"},"printTemplates":{"name":"printTemplates","persistent":false,"type":"struct"},"sortOrder":{"sortcontext":"attribute","name":"sortOrder","ormtype":"integer"},"processObjects":{"name":"processObjects","persistent":false,"type":"struct"},"settingValueFormatted":{"name":"settingValueFormatted","persistent":false,"type":"any"},"auditSmartList":{"name":"auditSmartList","persistent":false,"type":"any"},"modifiedDateTime":{"name":"modifiedDateTime","ormtype":"timestamp","hb_populateenabled":false},"newFlag":{"name":"newFlag","persistent":false,"type":"boolean"},"validations":{"name":"validations","persistent":false,"type":"struct"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"},"attribute":{"name":"attribute","fieldtype":"many-to-one","cfc":"Attribute","fkcolumn":"attributeID"},"createdByAccountID":{"name":"createdByAccountID","ormtype":"string","hb_populateenabled":false},"remoteID":{"name":"remoteID","ormtype":"string","hb_populateenabled":false},"modifiedByAccountID":{"name":"modifiedByAccountID","ormtype":"string","hb_populateenabled":false},"attributeValuesByAttributeIDStruct":{"name":"attributeValuesByAttributeIDStruct","persistent":false,"type":"struct"},"attributeOptionValue":{"name":"attributeOptionValue","ormtype":"string"},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"assignedAttributeSetSmartList":{"name":"assignedAttributeSetSmartList","persistent":false,"type":"any"},"modifiedByAccount":{"name":"modifiedByAccount","persistent":false},"attributeValues":{"inverse":true,"name":"attributeValues","fieldtype":"one-to-many","singularname":"attributeValue","cascade":"all-delete-orphan","cfc":"AttributeValue","fkcolumn":"attributeOptionID"},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"createdByAccount":{"name":"createdByAccount","persistent":false},"simpleRepresentation":{"name":"simpleRepresentation","persistent":false,"type":"string"},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"persistableErrors":{"name":"persistableErrors","persistent":false,"type":"array"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"encryptedPropertiesExistFlag":{"name":"encryptedPropertiesExistFlag","persistent":false,"type":"boolean"},"attributeOptionLabel":{"name":"attributeOptionLabel","ormtype":"string"},"rollbackProcessedFlag":{"name":"rollbackProcessedFlag","persistent":false,"type":"boolean"},"attributeValuesByAttributeCodeStruct":{"name":"attributeValuesByAttributeCodeStruct","persistent":false,"type":"struct"},"attributeOptionID":{"generator":"uuid","name":"attributeOptionID","fieldtype":"id","ormtype":"string","unsavedvalue":"","length":32,"default":""}};
                	entities['AttributeOption'].className = 'AttributeOption';
                	validations['AttributeOption'] = {"properties":{"attributeOptionLabel":[{"required":true,"contexts":"save"}],"attributeOptionValue":[{"required":true,"contexts":"save"}]}};
                	defaultValues['AttributeOption'] = {
                	attributeOptionID:'',
										attributeOptionValue:null,
									attributeOptionLabel:'',
										sortOrder:null,
									remoteID:null,
									createdDateTime:'',
										createdByAccountID:null,
									modifiedDateTime:'',
										modifiedByAccountID:null,
									
						z:''
	                };
                
                	entities['PaymentTransaction'] = {"createdDateTime":{"name":"createdDateTime","ormtype":"timestamp","hb_populateenabled":false},"emailTemplates":{"name":"emailTemplates","persistent":false,"type":"struct"},"settingValueFormatted":{"name":"settingValueFormatted","persistent":false,"type":"any"},"auditSmartList":{"name":"auditSmartList","persistent":false,"type":"any"},"orderPayment":{"name":"orderPayment","fieldtype":"many-to-one","cfc":"OrderPayment","fkcolumn":"orderPaymentID"},"transactionSuccessFlag":{"name":"transactionSuccessFlag","ormtype":"boolean"},"modifiedDateTime":{"name":"modifiedDateTime","ormtype":"timestamp","hb_populateenabled":false},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"},"remoteID":{"name":"remoteID","ormtype":"string"},"authorizationCodeUsed":{"name":"authorizationCodeUsed","ormtype":"string"},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"authorizationCode":{"name":"authorizationCode","ormtype":"string"},"authorizationCodeInvalidFlag":{"name":"authorizationCodeInvalidFlag","ormtype":"boolean"},"modifiedByAccount":{"name":"modifiedByAccount","persistent":false},"simpleRepresentation":{"name":"simpleRepresentation","persistent":false,"type":"string"},"createdByAccount":{"name":"createdByAccount","persistent":false},"amountCharged":{"name":"amountCharged","ormtype":"big_decimal","notnull":true,"dbdefault":0},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"avsDescription":{"name":"avsDescription","persistent":false},"avsCode":{"name":"avsCode","ormtype":"string"},"transactionEndTickCount":{"name":"transactionEndTickCount","ormtype":"string"},"rollbackProcessedFlag":{"name":"rollbackProcessedFlag","persistent":false,"type":"boolean"},"attributeValuesByAttributeCodeStruct":{"name":"attributeValuesByAttributeCodeStruct","persistent":false,"type":"struct"},"message":{"name":"message","ormtype":"string","length":4000},"providerTransactionID":{"name":"providerTransactionID","ormtype":"string"},"amountCredited":{"name":"amountCredited","ormtype":"big_decimal","notnull":true,"dbdefault":0},"accountPayment":{"name":"accountPayment","fieldtype":"many-to-one","cfc":"AccountPayment","fkcolumn":"accountPaymentID"},"amountAuthorized":{"name":"amountAuthorized","ormtype":"big_decimal","notnull":true,"dbdefault":0},"amountReceived":{"name":"amountReceived","ormtype":"big_decimal","notnull":true,"dbdefault":0},"printTemplates":{"name":"printTemplates","persistent":false,"type":"struct"},"processObjects":{"name":"processObjects","persistent":false,"type":"struct"},"newFlag":{"name":"newFlag","persistent":false,"type":"boolean"},"validations":{"name":"validations","persistent":false,"type":"struct"},"createdByAccountID":{"name":"createdByAccountID","ormtype":"string","hb_populateenabled":false},"accountPaymentMethod":{"name":"accountPaymentMethod","fieldtype":"many-to-one","cfc":"AccountPaymentMethod","fkcolumn":"accountPaymentMethodID"},"modifiedByAccountID":{"name":"modifiedByAccountID","ormtype":"string","hb_populateenabled":false},"attributeValuesByAttributeIDStruct":{"name":"attributeValuesByAttributeIDStruct","persistent":false,"type":"struct"},"securityCodeMatchFlag":{"name":"securityCodeMatchFlag","ormtype":"boolean"},"statusCode":{"name":"statusCode","ormtype":"string"},"assignedAttributeSetSmartList":{"name":"assignedAttributeSetSmartList","persistent":false,"type":"any"},"transactionType":{"name":"transactionType","ormtype":"string"},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"transactionDateTime":{"name":"transactionDateTime","ormtype":"timestamp"},"persistableErrors":{"name":"persistableErrors","persistent":false,"type":"array"},"encryptedPropertiesExistFlag":{"name":"encryptedPropertiesExistFlag","persistent":false,"type":"boolean"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"paymentTransactionID":{"generator":"uuid","name":"paymentTransactionID","fieldtype":"id","ormtype":"string","unsavedvalue":"","length":32,"default":""},"transactionStartTickCount":{"name":"transactionStartTickCount","ormtype":"string"},"currencyCode":{"name":"currencyCode","ormtype":"string","length":3}};
                	entities['PaymentTransaction'].className = 'PaymentTransaction';
                	validations['PaymentTransaction'] = {"properties":{"paymentTransactionID":[{"maxLength":0,"contexts":"delete,edit"}],"orderPayment":[{"contexts":"save","method":"hasOrderPaymentOrAccountPayment"}],"accountPayment":[{"contexts":"save","method":"hasOrderPaymentOrAccountPayment"}]}};
                	defaultValues['PaymentTransaction'] = {
                	paymentTransactionID:'',
										transactionType:null,
									transactionStartTickCount:null,
									transactionEndTickCount:null,
									transactionSuccessFlag:null,
									providerTransactionID:null,
									transactionDateTime:null,
									authorizationCode:null,
									authorizationCodeUsed:null,
									authorizationCodeInvalidFlag:null,
									amountAuthorized:0,
									amountReceived:0,
									amountCredited:0,
									currencyCode:null,
									securityCodeMatchFlag:null,
									avsCode:null,
									statusCode:null,
									message:null,
									remoteID:null,
									createdDateTime:'',
										createdByAccountID:null,
									modifiedDateTime:'',
										modifiedByAccountID:null,
									amountCharged:0,
									
						z:''
	                };
                
                	entities['AccountAuthentication'] = {"accountAuthenticationID":{"generator":"uuid","name":"accountAuthenticationID","fieldtype":"id","ormtype":"string","unsavedvalue":"","length":32,"default":""},"emailTemplates":{"name":"emailTemplates","persistent":false,"type":"struct"},"createdDateTime":{"name":"createdDateTime","ormtype":"timestamp","hb_populateenabled":false},"printTemplates":{"name":"printTemplates","persistent":false,"type":"struct"},"authToken":{"name":"authToken","ormtype":"string"},"processObjects":{"name":"processObjects","persistent":false,"type":"struct"},"settingValueFormatted":{"name":"settingValueFormatted","persistent":false,"type":"any"},"auditSmartList":{"name":"auditSmartList","persistent":false,"type":"any"},"modifiedDateTime":{"name":"modifiedDateTime","ormtype":"timestamp","hb_populateenabled":false},"newFlag":{"name":"newFlag","persistent":false,"type":"boolean"},"validations":{"name":"validations","persistent":false,"type":"struct"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"},"account":{"name":"account","fieldtype":"many-to-one","cfc":"Account","hb_optionsnullrbkey":"define.select","fkcolumn":"accountID"},"createdByAccountID":{"name":"createdByAccountID","ormtype":"string","hb_populateenabled":false},"expirationDateTime":{"name":"expirationDateTime","ormtype":"timestamp"},"integrationRefreshToken":{"name":"integrationRefreshToken","ormtype":"string"},"forceLogoutFlag":{"name":"forceLogoutFlag","persistent":false},"remoteID":{"name":"remoteID","ormtype":"string"},"modifiedByAccountID":{"name":"modifiedByAccountID","ormtype":"string","hb_populateenabled":false},"attributeValuesByAttributeIDStruct":{"name":"attributeValuesByAttributeIDStruct","persistent":false,"type":"struct"},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"assignedAttributeSetSmartList":{"name":"assignedAttributeSetSmartList","persistent":false,"type":"any"},"password":{"name":"password","ormtype":"string"},"integrationAccountID":{"name":"integrationAccountID","ormtype":"string"},"integration":{"name":"integration","fieldtype":"many-to-one","cfc":"Integration","hb_optionsnullrbkey":"define.select","fkcolumn":"integrationID"},"modifiedByAccount":{"name":"modifiedByAccount","persistent":false},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"createdByAccount":{"name":"createdByAccount","persistent":false},"simpleRepresentation":{"name":"simpleRepresentation","persistent":false,"type":"string"},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"persistableErrors":{"name":"persistableErrors","persistent":false,"type":"array"},"updatePasswordOnNextLoginFlag":{"name":"updatePasswordOnNextLoginFlag","ormtype":"boolean"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"encryptedPropertiesExistFlag":{"name":"encryptedPropertiesExistFlag","persistent":false,"type":"boolean"},"rollbackProcessedFlag":{"name":"rollbackProcessedFlag","persistent":false,"type":"boolean"},"attributeValuesByAttributeCodeStruct":{"name":"attributeValuesByAttributeCodeStruct","persistent":false,"type":"struct"},"integrationAccessTokenExpiration":{"name":"integrationAccessTokenExpiration","ormtype":"string","column":"integrationAccessTokenExp"},"authenticationDescription":{"name":"authenticationDescription","ormtype":"string"},"activeFlag":{"name":"activeFlag","ormtype":"boolean"},"integrationAccessToken":{"name":"integrationAccessToken","ormtype":"string"}};
                	entities['AccountAuthentication'].className = 'AccountAuthentication';
                	validations['AccountAuthentication'] = {"properties":{}};
                	defaultValues['AccountAuthentication'] = {
                	accountAuthenticationID:'',
										password:null,
									authToken:null,
									expirationDateTime:null,
									integrationAccountID:null,
									integrationAccessToken:null,
									integrationAccessTokenExpiration:null,
									integrationRefreshToken:null,
									activeFlag:1,
									updatePasswordOnNextLoginFlag:null,
									authenticationDescription:null,
									remoteID:null,
									createdDateTime:'',
										createdByAccountID:null,
									modifiedDateTime:'',
										modifiedByAccountID:null,
									
						z:''
	                };
                
                	entities['EmailVerification'] = {"createdDateTime":{"name":"createdDateTime","ormtype":"timestamp","hb_populateenabled":false},"emailTemplates":{"name":"emailTemplates","persistent":false,"type":"struct"},"printTemplates":{"name":"printTemplates","persistent":false,"type":"struct"},"processObjects":{"name":"processObjects","persistent":false,"type":"struct"},"settingValueFormatted":{"name":"settingValueFormatted","persistent":false,"type":"any"},"auditSmartList":{"name":"auditSmartList","persistent":false,"type":"any"},"modifiedDateTime":{"name":"modifiedDateTime","ormtype":"timestamp","hb_populateenabled":false},"newFlag":{"name":"newFlag","persistent":false,"type":"boolean"},"validations":{"name":"validations","persistent":false,"type":"struct"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"},"createdByAccountID":{"name":"createdByAccountID","ormtype":"string","hb_populateenabled":false},"accountEmailAddress":{"name":"accountEmailAddress","fieldtype":"many-to-one","cfc":"AccountEmailAddress","fkcolumn":"accountEmailAddressID"},"remoteID":{"name":"remoteID","ormtype":"string"},"attributeValuesByAttributeIDStruct":{"name":"attributeValuesByAttributeIDStruct","persistent":false,"type":"struct"},"modifiedByAccountID":{"name":"modifiedByAccountID","ormtype":"string","hb_populateenabled":false},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"assignedAttributeSetSmartList":{"name":"assignedAttributeSetSmartList","persistent":false,"type":"any"},"modifiedByAccount":{"name":"modifiedByAccount","persistent":false},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"simpleRepresentation":{"name":"simpleRepresentation","persistent":false,"type":"string"},"createdByAccount":{"name":"createdByAccount","persistent":false},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"persistableErrors":{"name":"persistableErrors","persistent":false,"type":"array"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"encryptedPropertiesExistFlag":{"name":"encryptedPropertiesExistFlag","persistent":false,"type":"boolean"},"emailVerificationID":{"generator":"uuid","name":"emailVerificationID","fieldtype":"id","ormtype":"string","unsavedvalue":"","length":32,"default":""},"rollbackProcessedFlag":{"name":"rollbackProcessedFlag","persistent":false,"type":"boolean"},"attributeValuesByAttributeCodeStruct":{"name":"attributeValuesByAttributeCodeStruct","persistent":false,"type":"struct"}};
                	entities['EmailVerification'].className = 'EmailVerification';
                	validations['EmailVerification'] = {"properties":{}};
                	defaultValues['EmailVerification'] = {
                	emailVerificationID:'',
										remoteID:null,
									createdDateTime:'',
										createdByAccountID:null,
									modifiedDateTime:'',
										modifiedByAccountID:null,
									
						z:''
	                };
                
                	entities['App'] = {"createdDateTime":{"name":"createdDateTime","ormtype":"timestamp","hb_populateenabled":false},"emailTemplates":{"name":"emailTemplates","persistent":false,"type":"struct"},"printTemplates":{"name":"printTemplates","persistent":false,"type":"struct"},"processObjects":{"name":"processObjects","persistent":false,"type":"struct"},"settingValueFormatted":{"name":"settingValueFormatted","persistent":false,"type":"any"},"auditSmartList":{"name":"auditSmartList","persistent":false,"type":"any"},"modifiedDateTime":{"name":"modifiedDateTime","ormtype":"timestamp","hb_populateenabled":false},"appID":{"generator":"uuid","name":"appID","fieldtype":"id","ormtype":"string","unsavedvalue":"","length":32,"default":""},"newFlag":{"name":"newFlag","persistent":false,"type":"boolean"},"validations":{"name":"validations","persistent":false,"type":"struct"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"},"createdByAccountID":{"name":"createdByAccountID","ormtype":"string","hb_populateenabled":false},"remoteID":{"name":"remoteID","ormtype":"string","hb_populateenabled":false,"hint":"Only used when integrated with a remote system"},"appCode":{"index":"PI_APPCODE","unique":true,"name":"appCode","ormtype":"string"},"modifiedByAccountID":{"name":"modifiedByAccountID","ormtype":"string","hb_populateenabled":false},"attributeValuesByAttributeIDStruct":{"name":"attributeValuesByAttributeIDStruct","persistent":false,"type":"struct"},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"assignedAttributeSetSmartList":{"name":"assignedAttributeSetSmartList","persistent":false,"type":"any"},"integration":{"name":"integration","fieldtype":"many-to-one","hb_populateenabled":"public","cfc":"Integration","fkcolumn":"integrationID"},"appPath":{"name":"appPath","persistent":false},"modifiedByAccount":{"name":"modifiedByAccount","persistent":false},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"createdByAccount":{"name":"createdByAccount","persistent":false},"simpleRepresentation":{"name":"simpleRepresentation","persistent":false,"type":"string"},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"persistableErrors":{"name":"persistableErrors","persistent":false,"type":"array"},"appRootPath":{"name":"appRootPath","ormtype":"string"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"encryptedPropertiesExistFlag":{"name":"encryptedPropertiesExistFlag","persistent":false,"type":"boolean"},"rollbackProcessedFlag":{"name":"rollbackProcessedFlag","persistent":false,"type":"boolean"},"attributeValuesByAttributeCodeStruct":{"name":"attributeValuesByAttributeCodeStruct","persistent":false,"type":"struct"},"appName":{"name":"appName","ormtype":"string"},"sites":{"inverse":true,"name":"sites","fieldtype":"one-to-many","singularname":"site","cascade":"all-delete-orphan","cfc":"Site","fkcolumn":"appID","type":"array"}};
                	entities['App'].className = 'App';
                	validations['App'] = {"properties":{"appCode":[{"required":true,"contexts":"save"}],"appName":[{"required":true,"contexts":"save"}],"integration":[{"required":true,"contexts":"save"}]}};
                	defaultValues['App'] = {
                	appID:'',
										appName:null,
									appCode:null,
									remoteID:null,
									createdDateTime:'',
										createdByAccountID:null,
									modifiedDateTime:'',
										modifiedByAccountID:null,
									
						z:''
	                };
                
                	entities['AccountEmailAddress'] = {"verifiedFlag":{"name":"verifiedFlag","ormtype":"boolean","hb_populateenabled":false},"createdDateTime":{"name":"createdDateTime","ormtype":"timestamp","hb_populateenabled":false},"accountEmailType":{"name":"accountEmailType","fieldtype":"many-to-one","hb_populateenabled":"public","hb_optionssmartlistdata":"f:parentType.systemCode=accountEmailType","cfc":"Type","hb_optionsnullrbkey":"define.select","fkcolumn":"accountEmailTypeID"},"emailTemplates":{"name":"emailTemplates","persistent":false,"type":"struct"},"printTemplates":{"name":"printTemplates","persistent":false,"type":"struct"},"processObjects":{"name":"processObjects","persistent":false,"type":"struct"},"settingValueFormatted":{"name":"settingValueFormatted","persistent":false,"type":"any"},"auditSmartList":{"name":"auditSmartList","persistent":false,"type":"any"},"modifiedDateTime":{"name":"modifiedDateTime","ormtype":"timestamp","hb_populateenabled":false},"primaryFlag":{"name":"primaryFlag","persistent":false},"newFlag":{"name":"newFlag","persistent":false,"type":"boolean"},"validations":{"name":"validations","persistent":false,"type":"struct"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"},"account":{"name":"account","fieldtype":"many-to-one","cfc":"Account","fkcolumn":"accountID"},"createdByAccountID":{"name":"createdByAccountID","ormtype":"string","hb_populateenabled":false},"remoteID":{"name":"remoteID","ormtype":"string","hb_populateenabled":false},"modifiedByAccountID":{"name":"modifiedByAccountID","ormtype":"string","hb_populateenabled":false},"attributeValuesByAttributeIDStruct":{"name":"attributeValuesByAttributeIDStruct","persistent":false,"type":"struct"},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"assignedAttributeSetSmartList":{"name":"assignedAttributeSetSmartList","persistent":false,"type":"any"},"emailAddress":{"name":"emailAddress","ormtype":"string","hb_populateenabled":"public","hb_formattype":"email"},"primaryEmailAddressNotInUseFlag":{"name":"primaryEmailAddressNotInUseFlag","persistent":false},"modifiedByAccount":{"name":"modifiedByAccount","persistent":false},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"createdByAccount":{"name":"createdByAccount","persistent":false},"simpleRepresentation":{"name":"simpleRepresentation","persistent":false,"type":"string"},"accountEmailAddressID":{"generator":"uuid","name":"accountEmailAddressID","fieldtype":"id","ormtype":"string","unsavedvalue":"","length":32,"default":""},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"persistableErrors":{"name":"persistableErrors","persistent":false,"type":"array"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"encryptedPropertiesExistFlag":{"name":"encryptedPropertiesExistFlag","persistent":false,"type":"boolean"},"rollbackProcessedFlag":{"name":"rollbackProcessedFlag","persistent":false,"type":"boolean"},"attributeValuesByAttributeCodeStruct":{"name":"attributeValuesByAttributeCodeStruct","persistent":false,"type":"struct"},"verificationCode":{"name":"verificationCode","ormtype":"string","hb_populateenabled":false}};
                	entities['AccountEmailAddress'].className = 'AccountEmailAddress';
                	validations['AccountEmailAddress'] = {"properties":{"primaryFlag":[{"eq":false,"contexts":"delete"}],"emailAddress":[{"dataType":"email","required":true,"contexts":"save"},{"contexts":"save","conditions":"requiresNotInUse","method":"getPrimaryEmailAddressNotInUseFlag"}]},"conditions":{"requiresNotInUse":{"primaryFlag":{"eq":true},"account.slatwallAuthenticationExistsFlag":{"eq":true}}}};
                	defaultValues['AccountEmailAddress'] = {
                	accountEmailAddressID:'',
										emailAddress:null,
									verifiedFlag:0,
									verificationCode:'918da067b117d4639b8fcce740f3e8c5',
										remoteID:null,
									createdDateTime:'',
										createdByAccountID:null,
									modifiedDateTime:'',
										modifiedByAccountID:null,
									
						z:''
	                };
                
                	entities['LoyaltyTerm'] = {"term":{"name":"term","fieldtype":"many-to-one","cfc":"Term","fkcolumn":"termID"},"createdDateTime":{"name":"createdDateTime","ormtype":"timestamp","hb_populateenabled":false},"emailTemplates":{"name":"emailTemplates","persistent":false,"type":"struct"},"printTemplates":{"name":"printTemplates","persistent":false,"type":"struct"},"processObjects":{"name":"processObjects","persistent":false,"type":"struct"},"settingValueFormatted":{"name":"settingValueFormatted","persistent":false,"type":"any"},"auditSmartList":{"name":"auditSmartList","persistent":false,"type":"any"},"modifiedDateTime":{"name":"modifiedDateTime","ormtype":"timestamp","hb_populateenabled":false},"newFlag":{"name":"newFlag","persistent":false,"type":"boolean"},"validations":{"name":"validations","persistent":false,"type":"struct"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"},"createdByAccountID":{"name":"createdByAccountID","ormtype":"string","hb_populateenabled":false},"remoteID":{"name":"remoteID","ormtype":"string"},"modifiedByAccountID":{"name":"modifiedByAccountID","ormtype":"string","hb_populateenabled":false},"attributeValuesByAttributeIDStruct":{"name":"attributeValuesByAttributeIDStruct","persistent":false,"type":"struct"},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"loyaltyTermID":{"generator":"uuid","name":"loyaltyTermID","fieldtype":"id","ormtype":"string","unsavedvalue":"","length":32,"default":""},"assignedAttributeSetSmartList":{"name":"assignedAttributeSetSmartList","persistent":false,"type":"any"},"nextLoyaltyTermEndDateTime":{"name":"nextLoyaltyTermEndDateTime","persistent":false},"modifiedByAccount":{"name":"modifiedByAccount","persistent":false},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"createdByAccount":{"name":"createdByAccount","persistent":false},"simpleRepresentation":{"name":"simpleRepresentation","persistent":false,"type":"string"},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"loyaltyTermName":{"name":"loyaltyTermName","ormtype":"string"},"persistableErrors":{"name":"persistableErrors","persistent":false,"type":"array"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"encryptedPropertiesExistFlag":{"name":"encryptedPropertiesExistFlag","persistent":false,"type":"boolean"},"rollbackProcessedFlag":{"name":"rollbackProcessedFlag","persistent":false,"type":"boolean"},"attributeValuesByAttributeCodeStruct":{"name":"attributeValuesByAttributeCodeStruct","persistent":false,"type":"struct"},"loyalty":{"name":"loyalty","fieldtype":"many-to-one","cfc":"Loyalty","fkcolumn":"loyaltyID"},"loyaltyTermStartDateTime":{"hb_nullrbkey":"define.forever","name":"loyaltyTermStartDateTime","ormtype":"timestamp"}};
                	entities['LoyaltyTerm'].className = 'LoyaltyTerm';
                	validations['LoyaltyTerm'] = {"properties":{}};
                	defaultValues['LoyaltyTerm'] = {
                	loyaltyTermID:'',
										loyaltyTermName:null,
									loyaltyTermStartDateTime:null,
									remoteID:null,
									createdDateTime:'',
										createdByAccountID:null,
									modifiedDateTime:'',
										modifiedByAccountID:null,
									
						z:''
	                };
                
                	entities['PromotionCode'] = {"createdDateTime":{"name":"createdDateTime","ormtype":"timestamp","hb_populateenabled":false},"emailTemplates":{"name":"emailTemplates","persistent":false,"type":"struct"},"currentFlag":{"name":"currentFlag","persistent":false,"type":"boolean"},"printTemplates":{"name":"printTemplates","persistent":false,"type":"struct"},"processObjects":{"name":"processObjects","persistent":false,"type":"struct"},"settingValueFormatted":{"name":"settingValueFormatted","persistent":false,"type":"any"},"auditSmartList":{"name":"auditSmartList","persistent":false,"type":"any"},"modifiedDateTime":{"name":"modifiedDateTime","ormtype":"timestamp","hb_populateenabled":false},"newFlag":{"name":"newFlag","persistent":false,"type":"boolean"},"validations":{"name":"validations","persistent":false,"type":"struct"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"},"createdByAccountID":{"name":"createdByAccountID","ormtype":"string","hb_populateenabled":false},"accounts":{"name":"accounts","fieldtype":"many-to-many","singularname":"account","inversejoincolumn":"accountID","cfc":"Account","fkcolumn":"promotionCodeID","linktable":"SwPromotionCodeAccount","type":"array"},"promotionCode":{"index":"PI_PROMOTIONCODE","name":"promotionCode","ormtype":"string"},"remoteID":{"name":"remoteID","ormtype":"string"},"modifiedByAccountID":{"name":"modifiedByAccountID","ormtype":"string","hb_populateenabled":false},"attributeValuesByAttributeIDStruct":{"name":"attributeValuesByAttributeIDStruct","persistent":false,"type":"struct"},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"startDateTime":{"hb_nullrbkey":"define.forever","name":"startDateTime","ormtype":"timestamp","hb_formattype":"dateTime"},"assignedAttributeSetSmartList":{"name":"assignedAttributeSetSmartList","persistent":false,"type":"any"},"maximumUseCount":{"hb_nullrbkey":"define.unlimited","name":"maximumUseCount","ormtype":"integer","notnull":false},"modifiedByAccount":{"name":"modifiedByAccount","persistent":false},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"createdByAccount":{"name":"createdByAccount","persistent":false},"simpleRepresentation":{"name":"simpleRepresentation","persistent":false,"type":"string"},"maximumAccountUseCount":{"hb_nullrbkey":"define.unlimited","name":"maximumAccountUseCount","ormtype":"integer","notnull":false},"promotion":{"name":"promotion","fieldtype":"many-to-one","cfc":"Promotion","fkcolumn":"promotionID"},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"persistableErrors":{"name":"persistableErrors","persistent":false,"type":"array"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"encryptedPropertiesExistFlag":{"name":"encryptedPropertiesExistFlag","persistent":false,"type":"boolean"},"promotionCodeID":{"generator":"uuid","name":"promotionCodeID","fieldtype":"id","ormtype":"string","unsavedvalue":"","length":32,"default":""},"rollbackProcessedFlag":{"name":"rollbackProcessedFlag","persistent":false,"type":"boolean"},"attributeValuesByAttributeCodeStruct":{"name":"attributeValuesByAttributeCodeStruct","persistent":false,"type":"struct"},"orders":{"inverse":true,"name":"orders","fieldtype":"many-to-many","singularname":"order","inversejoincolumn":"orderID","lazy":"extra","cfc":"Order","fkcolumn":"promotionCodeID","type":"array","linktable":"SwOrderPromotionCode"},"endDateTime":{"hb_nullrbkey":"define.forever","name":"endDateTime","ormtype":"timestamp","hb_formattype":"dateTime"}};
                	entities['PromotionCode'].className = 'PromotionCode';
                	validations['PromotionCode'] = {"properties":{"orders":[{"maxCollection":0,"contexts":"delete"}],"promotionCode":[{"unique":true,"required":true,"contexts":"save"}],"startDateTime":[{"dataType":"date","contexts":"save"}],"endDateTime":[{"dataType":"date","contexts":"save"},{"contexts":"save","conditions":"needsEndAfterStart","gtDateTimeProperty":"startDateTime"}]},"conditions":{"needsEndAfterStart":{"startDateTime":{"required":true},"endDateTime":{"required":true}}}};
                	defaultValues['PromotionCode'] = {
                	promotionCodeID:'',
										promotionCode:null,
									startDateTime:null,
									endDateTime:null,
									maximumUseCount:null,
									maximumAccountUseCount:null,
									remoteID:null,
									createdDateTime:'',
										createdByAccountID:null,
									modifiedDateTime:'',
										modifiedByAccountID:null,
									
						z:''
	                };
                
                	entities['VendorAccount'] = {"createdDateTime":{"name":"createdDateTime","ormtype":"timestamp","hb_populateenabled":false},"emailTemplates":{"name":"emailTemplates","persistent":false,"type":"struct"},"printTemplates":{"name":"printTemplates","persistent":false,"type":"struct"},"processObjects":{"name":"processObjects","persistent":false,"type":"struct"},"settingValueFormatted":{"name":"settingValueFormatted","persistent":false,"type":"any"},"auditSmartList":{"name":"auditSmartList","persistent":false,"type":"any"},"modifiedDateTime":{"name":"modifiedDateTime","ormtype":"timestamp","hb_populateenabled":false},"newFlag":{"name":"newFlag","persistent":false,"type":"boolean"},"validations":{"name":"validations","persistent":false,"type":"struct"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"},"account":{"name":"account","fieldtype":"many-to-one","cfc":"Account","fkcolumn":"accountID"},"createdByAccountID":{"name":"createdByAccountID","ormtype":"string","hb_populateenabled":false},"attributeValuesByAttributeIDStruct":{"name":"attributeValuesByAttributeIDStruct","persistent":false,"type":"struct"},"modifiedByAccountID":{"name":"modifiedByAccountID","ormtype":"string","hb_populateenabled":false},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"assignedAttributeSetSmartList":{"name":"assignedAttributeSetSmartList","persistent":false,"type":"any"},"modifiedByAccount":{"name":"modifiedByAccount","persistent":false},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"simpleRepresentation":{"name":"simpleRepresentation","persistent":false,"type":"string"},"createdByAccount":{"name":"createdByAccount","persistent":false},"roleType":{"name":"roleType","fieldtype":"many-to-one","hb_optionssmartlistdata":"f:parentType.systemCode=roleType","cfc":"Type","fkcolumn":"roleTypeID"},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"persistableErrors":{"name":"persistableErrors","persistent":false,"type":"array"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"encryptedPropertiesExistFlag":{"name":"encryptedPropertiesExistFlag","persistent":false,"type":"boolean"},"rollbackProcessedFlag":{"name":"rollbackProcessedFlag","persistent":false,"type":"boolean"},"attributeValuesByAttributeCodeStruct":{"name":"attributeValuesByAttributeCodeStruct","persistent":false,"type":"struct"},"vendorAccountID":{"generator":"uuid","name":"vendorAccountID","fieldtype":"id","ormtype":"string","unsavedvalue":"","length":32,"default":""},"vendor":{"name":"vendor","fieldtype":"many-to-one","cfc":"Vendor","fkcolumn":"vendorID"}};
                	entities['VendorAccount'].className = 'VendorAccount';
                	validations['VendorAccount'] = {"properties":{}};
                	defaultValues['VendorAccount'] = {
                	vendorAccountID:'',
										createdDateTime:'',
										createdByAccountID:null,
									modifiedDateTime:'',
										modifiedByAccountID:null,
									
						z:''
	                };
                
                	entities['OrderDeliveryItem'] = {"createdDateTime":{"name":"createdDateTime","ormtype":"timestamp","hb_populateenabled":false},"emailTemplates":{"name":"emailTemplates","persistent":false,"type":"struct"},"printTemplates":{"name":"printTemplates","persistent":false,"type":"struct"},"orderDelivery":{"name":"orderDelivery","fieldtype":"many-to-one","cfc":"OrderDelivery","fkcolumn":"orderDeliveryID"},"processObjects":{"name":"processObjects","persistent":false,"type":"struct"},"settingValueFormatted":{"name":"settingValueFormatted","persistent":false,"type":"any"},"auditSmartList":{"name":"auditSmartList","persistent":false,"type":"any"},"orderItem":{"name":"orderItem","fieldtype":"many-to-one","hb_cascadecalculate":true,"cfc":"OrderItem","fkcolumn":"orderItemID"},"modifiedDateTime":{"name":"modifiedDateTime","ormtype":"timestamp","hb_populateenabled":false},"stock":{"name":"stock","fieldtype":"many-to-one","hb_cascadecalculate":true,"cfc":"Stock","fkcolumn":"stockID"},"newFlag":{"name":"newFlag","persistent":false,"type":"boolean"},"validations":{"name":"validations","persistent":false,"type":"struct"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"},"createdByAccountID":{"name":"createdByAccountID","ormtype":"string","hb_populateenabled":false},"remoteID":{"name":"remoteID","ormtype":"string"},"modifiedByAccountID":{"name":"modifiedByAccountID","ormtype":"string","hb_populateenabled":false},"attributeValuesByAttributeIDStruct":{"name":"attributeValuesByAttributeIDStruct","persistent":false,"type":"struct"},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"assignedAttributeSetSmartList":{"name":"assignedAttributeSetSmartList","persistent":false,"type":"any"},"quantity":{"name":"quantity","ormtype":"integer"},"modifiedByAccount":{"name":"modifiedByAccount","persistent":false},"orderDeliveryItemID":{"generator":"uuid","name":"orderDeliveryItemID","fieldtype":"id","ormtype":"string","unsavedvalue":"","length":32,"default":""},"referencingOrderItems":{"inverse":true,"name":"referencingOrderItems","fieldtype":"one-to-many","singularname":"referencingOrderItem","cascade":"all","cfc":"OrderItem","fkcolumn":"referencedOrderDeliveryItemID"},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"createdByAccount":{"name":"createdByAccount","persistent":false},"simpleRepresentation":{"name":"simpleRepresentation","persistent":false,"type":"string"},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"persistableErrors":{"name":"persistableErrors","persistent":false,"type":"array"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"encryptedPropertiesExistFlag":{"name":"encryptedPropertiesExistFlag","persistent":false,"type":"boolean"},"rollbackProcessedFlag":{"name":"rollbackProcessedFlag","persistent":false,"type":"boolean"},"attributeValuesByAttributeCodeStruct":{"name":"attributeValuesByAttributeCodeStruct","persistent":false,"type":"struct"},"quantityReturned":{"name":"quantityReturned","persistent":false}};
                	entities['OrderDeliveryItem'].className = 'OrderDeliveryItem';
                	validations['OrderDeliveryItem'] = {"properties":{"orderDelivery":[{"required":true,"contexts":"save"}],"orderItem":[{"required":true,"contexts":"save"}],"stock":[{"required":true,"contexts":"save"}],"quantity":[{"dataType":"numeric","required":true,"contexts":"save"}]}};
                	defaultValues['OrderDeliveryItem'] = {
                	orderDeliveryItemID:'',
										quantity:null,
									remoteID:null,
									createdDateTime:'',
										createdByAccountID:null,
									modifiedDateTime:'',
										modifiedByAccountID:null,
									
						z:''
	                };
                
                	entities['ProductType'] = {"loyaltyAccruementExclusions":{"inverse":true,"name":"loyaltyAccruementExclusions","fieldtype":"many-to-many","singularname":"loyaltyAccruementExclusion","inversejoincolumn":"loyaltyAccruementID","cfc":"LoyaltyAccruement","fkcolumn":"productTypeID","type":"array","linktable":"SwLoyaltyAccruExclProductType"},"promotionQualifiers":{"inverse":true,"name":"promotionQualifiers","fieldtype":"many-to-many","singularname":"promotionQualifier","inversejoincolumn":"promotionQualifierID","cfc":"PromotionQualifier","fkcolumn":"productTypeID","linktable":"SwPromoQualProductType"},"createdDateTime":{"name":"createdDateTime","ormtype":"timestamp","hb_populateenabled":false},"emailTemplates":{"name":"emailTemplates","persistent":false,"type":"struct"},"parentProductType":{"name":"parentProductType","fieldtype":"many-to-one","cfc":"ProductType","fkcolumn":"parentProductTypeID"},"settingValueFormatted":{"name":"settingValueFormatted","persistent":false,"type":"any"},"auditSmartList":{"name":"auditSmartList","persistent":false,"type":"any"},"modifiedDateTime":{"name":"modifiedDateTime","ormtype":"timestamp","hb_populateenabled":false},"physicals":{"inverse":true,"name":"physicals","fieldtype":"many-to-many","singularname":"physical","inversejoincolumn":"physicalID","cfc":"Physical","fkcolumn":"productTypeID","type":"array","linktable":"SwPhysicalProductType"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"},"productTypeName":{"name":"productTypeName","ormtype":"string"},"remoteID":{"name":"remoteID","ormtype":"string"},"productTypeID":{"generator":"uuid","name":"productTypeID","fieldtype":"id","ormtype":"string","unsavedvalue":"","length":32,"default":""},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"systemCode":{"name":"systemCode","ormtype":"string"},"modifiedByAccount":{"name":"modifiedByAccount","persistent":false},"productTypeIDPath":{"name":"productTypeIDPath","ormtype":"string","length":4000},"simpleRepresentation":{"name":"simpleRepresentation","persistent":false,"type":"string"},"createdByAccount":{"name":"createdByAccount","persistent":false},"products":{"inverse":true,"name":"products","fieldtype":"one-to-many","singularname":"product","cascade":"all","lazy":"extra","cfc":"Product","fkcolumn":"productTypeID"},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"rollbackProcessedFlag":{"name":"rollbackProcessedFlag","persistent":false,"type":"boolean"},"attributeValuesByAttributeCodeStruct":{"name":"attributeValuesByAttributeCodeStruct","persistent":false,"type":"struct"},"promotionRewardExclusions":{"inverse":true,"name":"promotionRewardExclusions","fieldtype":"many-to-many","singularname":"promotionRewardExclusion","inversejoincolumn":"promotionRewardID","cfc":"PromotionReward","fkcolumn":"productTypeID","type":"array","linktable":"SwPromoRewardExclProductType"},"publishedFlag":{"name":"publishedFlag","ormtype":"boolean"},"printTemplates":{"name":"printTemplates","persistent":false,"type":"struct"},"processObjects":{"name":"processObjects","persistent":false,"type":"struct"},"promotionRewards":{"inverse":true,"name":"promotionRewards","fieldtype":"many-to-many","singularname":"promotionReward","inversejoincolumn":"promotionRewardID","cfc":"PromotionReward","fkcolumn":"productTypeID","linktable":"SwPromoRewardProductType"},"loyaltyRedemptionExclusions":{"inverse":true,"name":"loyaltyRedemptionExclusions","fieldtype":"many-to-many","singularname":"loyaltyRedemptionExclusion","inversejoincolumn":"loyaltyRedemptionID","cfc":"LoyaltyRedemption","fkcolumn":"productTypeID","type":"array","linktable":"SwLoyaltyRedempExclProductType"},"newFlag":{"name":"newFlag","persistent":false,"type":"boolean"},"validations":{"name":"validations","persistent":false,"type":"struct"},"productTypeDescription":{"name":"productTypeDescription","ormtype":"string","length":4000},"createdByAccountID":{"name":"createdByAccountID","ormtype":"string","hb_populateenabled":false},"modifiedByAccountID":{"name":"modifiedByAccountID","ormtype":"string","hb_populateenabled":false},"attributeValuesByAttributeIDStruct":{"name":"attributeValuesByAttributeIDStruct","persistent":false,"type":"struct"},"assignedAttributeSetSmartList":{"name":"assignedAttributeSetSmartList","persistent":false,"type":"any"},"attributeSets":{"inverse":true,"name":"attributeSets","fieldtype":"many-to-many","singularname":"attributeSet","inversejoincolumn":"attributeSetID","cfc":"AttributeSet","fkcolumn":"productTypeID","type":"array","linktable":"SwAttributeSetProductType"},"loyaltyAccruements":{"inverse":true,"name":"loyaltyAccruements","fieldtype":"many-to-many","singularname":"loyaltyAccruement","inversejoincolumn":"loyaltyAccruementID","cfc":"LoyaltyAccruement","fkcolumn":"productTypeID","linktable":"SwLoyaltyAccruProductType"},"attributeValues":{"inverse":true,"name":"attributeValues","fieldtype":"one-to-many","singularname":"attributeValue","cascade":"all-delete-orphan","cfc":"AttributeValue","fkcolumn":"productTypeID"},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"loyaltyRedemptions":{"inverse":true,"name":"loyaltyRedemptions","fieldtype":"many-to-many","singularname":"loyaltyRedemption","inversejoincolumn":"loyaltyRedemptionID","cfc":"LoyaltyRedemption","fkcolumn":"productTypeID","type":"array","linktable":"SwLoyaltyRedemptionProductType"},"persistableErrors":{"name":"persistableErrors","persistent":false,"type":"array"},"childProductTypes":{"inverse":true,"name":"childProductTypes","fieldtype":"one-to-many","singularname":"childProductType","cascade":"all","cfc":"ProductType","fkcolumn":"parentProductTypeID"},"encryptedPropertiesExistFlag":{"name":"encryptedPropertiesExistFlag","persistent":false,"type":"boolean"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"parentProductTypeOptions":{"name":"parentProductTypeOptions","persistent":false,"type":"array"},"priceGroupRateExclusions":{"inverse":true,"name":"priceGroupRateExclusions","fieldtype":"many-to-many","singularname":"priceGroupRateExclusion","inversejoincolumn":"priceGroupRateID","cfc":"PriceGroupRate","fkcolumn":"productTypeID","linktable":"SwPriceGrpRateExclProductType"},"urlTitle":{"unique":true,"name":"urlTitle","ormtype":"string","hint":"This is the name that is used in the URL string"},"promotionQualifierExclusions":{"inverse":true,"name":"promotionQualifierExclusions","fieldtype":"many-to-many","singularname":"promotionQualifierExclusion","inversejoincolumn":"promotionQualifierID","cfc":"PromotionQualifier","fkcolumn":"productTypeID","type":"array","linktable":"SwPromoQualExclProductType"},"activeFlag":{"name":"activeFlag","ormtype":"boolean","hint":"As A ProductType Get Old, They would be marked as Not Active"},"priceGroupRates":{"inverse":true,"name":"priceGroupRates","fieldtype":"many-to-many","singularname":"priceGroupRate","inversejoincolumn":"priceGroupRateID","cfc":"PriceGroupRate","fkcolumn":"productTypeID","linktable":"SwPriceGroupRateProductType"}};
                	entities['ProductType'].className = 'ProductType';
                	validations['ProductType'] = {"properties":{"urlTitle":[{"unique":true,"required":true,"contexts":"save"}],"physicalCounts":[{"maxCollection":0,"contexts":"delete"}],"products":[{"maxCollection":0,"contexts":"delete"}],"systemCode":[{"maxLength":0,"contexts":"delete"}],"childProductTypes":[{"maxCollection":0,"contexts":"delete"}],"productTypeName":[{"required":true,"contexts":"save"}]}};
                	defaultValues['ProductType'] = {
                	productTypeID:'',
										productTypeIDPath:'',
										activeFlag:1,
									publishedFlag:null,
									urlTitle:null,
									productTypeName:null,
									productTypeDescription:null,
									systemCode:null,
									remoteID:null,
									createdDateTime:'',
										createdByAccountID:null,
									modifiedDateTime:'',
										modifiedByAccountID:null,
									
						z:''
	                };
                
                	entities['Type'] = {"parentType":{"name":"parentType","fieldtype":"many-to-one","cfc":"Type","fkcolumn":"parentTypeID"},"typeCode":{"name":"typeCode","ormtype":"string"},"typeName":{"name":"typeName","ormtype":"string"},"emailTemplates":{"name":"emailTemplates","persistent":false,"type":"struct"},"createdDateTime":{"name":"createdDateTime","ormtype":"timestamp","hb_populateenabled":false},"printTemplates":{"name":"printTemplates","persistent":false,"type":"struct"},"processObjects":{"name":"processObjects","persistent":false,"type":"struct"},"sortOrder":{"sortcontext":"parentType","name":"sortOrder","ormtype":"integer"},"settingValueFormatted":{"name":"settingValueFormatted","persistent":false,"type":"any"},"auditSmartList":{"name":"auditSmartList","persistent":false,"type":"any"},"modifiedDateTime":{"name":"modifiedDateTime","ormtype":"timestamp","hb_populateenabled":false},"newFlag":{"name":"newFlag","persistent":false,"type":"boolean"},"validations":{"name":"validations","persistent":false,"type":"struct"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"},"childRequiresSystemCodeFlag":{"name":"childRequiresSystemCodeFlag","ormtype":"boolean"},"typeDescription":{"name":"typeDescription","ormtype":"string","length":4000},"createdByAccountID":{"name":"createdByAccountID","ormtype":"string","hb_populateenabled":false},"remoteID":{"name":"remoteID","ormtype":"string","hb_populateenabled":false},"modifiedByAccountID":{"name":"modifiedByAccountID","ormtype":"string","hb_populateenabled":false},"attributeValuesByAttributeIDStruct":{"name":"attributeValuesByAttributeIDStruct","persistent":false,"type":"struct"},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"typeIDPath":{"name":"typeIDPath","ormtype":"string","length":4000},"assignedAttributeSetSmartList":{"name":"assignedAttributeSetSmartList","persistent":false,"type":"any"},"systemCode":{"index":"PI_SYSTEMCODE","name":"systemCode","ormtype":"string"},"type":{"name":"type","persistent":false,"type":"string"},"typeID":{"generator":"uuid","name":"typeID","fieldtype":"id","ormtype":"string","unsavedvalue":"","length":32,"default":""},"modifiedByAccount":{"name":"modifiedByAccount","persistent":false},"attributeValues":{"inverse":true,"name":"attributeValues","fieldtype":"one-to-many","singularname":"attributeValue","cascade":"all-delete-orphan","cfc":"AttributeValue","fkcolumn":"typeID"},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"createdByAccount":{"name":"createdByAccount","persistent":false},"simpleRepresentation":{"name":"simpleRepresentation","persistent":false,"type":"string"},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"persistableErrors":{"name":"persistableErrors","persistent":false,"type":"array"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"encryptedPropertiesExistFlag":{"name":"encryptedPropertiesExistFlag","persistent":false,"type":"boolean"},"rollbackProcessedFlag":{"name":"rollbackProcessedFlag","persistent":false,"type":"boolean"},"attributeValuesByAttributeCodeStruct":{"name":"attributeValuesByAttributeCodeStruct","persistent":false,"type":"struct"},"childTypes":{"inverse":true,"name":"childTypes","fieldtype":"one-to-many","singularname":"childType","cascade":"all","cfc":"Type","fkcolumn":"parentTypeID","type":"array"}};
                	entities['Type'].className = 'Type';
                	validations['Type'] = {"properties":{"typeCode":[{"uniqueOrNull":true,"contexts":"save"}],"typeName":[{"required":true,"contexts":"save"}],"childTypes":[{"maxCollection":0,"contexts":"delete"}],"systemCode":[{"required":true,"contexts":"save","conditions":"requiresSystemCode"},{"contexts":"delete","method":"hasPeerTypeWithMatchingSystemCode"}],"typeID":[{"contexts":"delete","conditions":"topLevelSystemType","null":true}]},"conditions":{"requiresSystemCode":{"parentType":{"required":true},"parentType.childRequiresSystemCodeFlag":{"eq":true}},"topLevelSystemType":{"parentType":{"null":true},"systemCode":{"required":true}}}};
                	defaultValues['Type'] = {
                	typeID:'',
										typeIDPath:'',
										typeName:null,
									typeCode:null,
									typeDescription:null,
									sortOrder:null,
									systemCode:null,
									childRequiresSystemCodeFlag:null,
									remoteID:null,
									createdDateTime:'',
										createdByAccountID:null,
									modifiedDateTime:'',
										modifiedByAccountID:null,
									
						z:''
	                };
                
                	entities['PromotionApplied'] = {"createdDateTime":{"name":"createdDateTime","ormtype":"timestamp","hb_populateenabled":false},"emailTemplates":{"name":"emailTemplates","persistent":false,"type":"struct"},"printTemplates":{"name":"printTemplates","persistent":false,"type":"struct"},"processObjects":{"name":"processObjects","persistent":false,"type":"struct"},"settingValueFormatted":{"name":"settingValueFormatted","persistent":false,"type":"any"},"auditSmartList":{"name":"auditSmartList","persistent":false,"type":"any"},"orderItem":{"name":"orderItem","fieldtype":"many-to-one","hb_cascadecalculate":true,"cfc":"OrderItem","fkcolumn":"orderItemID"},"modifiedDateTime":{"name":"modifiedDateTime","ormtype":"timestamp","hb_populateenabled":false},"order":{"name":"order","fieldtype":"many-to-one","cfc":"Order","fkcolumn":"orderID"},"newFlag":{"name":"newFlag","persistent":false,"type":"boolean"},"validations":{"name":"validations","persistent":false,"type":"struct"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"},"appliedType":{"name":"appliedType","ormtype":"string"},"createdByAccountID":{"name":"createdByAccountID","ormtype":"string","hb_populateenabled":false},"remoteID":{"name":"remoteID","ormtype":"string"},"modifiedByAccountID":{"name":"modifiedByAccountID","ormtype":"string","hb_populateenabled":false},"attributeValuesByAttributeIDStruct":{"name":"attributeValuesByAttributeIDStruct","persistent":false,"type":"struct"},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"assignedAttributeSetSmartList":{"name":"assignedAttributeSetSmartList","persistent":false,"type":"any"},"modifiedByAccount":{"name":"modifiedByAccount","persistent":false},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"createdByAccount":{"name":"createdByAccount","persistent":false},"simpleRepresentation":{"name":"simpleRepresentation","persistent":false,"type":"string"},"promotion":{"name":"promotion","fieldtype":"many-to-one","cfc":"Promotion","fkcolumn":"promotionID"},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"persistableErrors":{"name":"persistableErrors","persistent":false,"type":"array"},"orderFulfillment":{"name":"orderFulfillment","fieldtype":"many-to-one","cfc":"OrderFulfillment","fkcolumn":"orderfulfillmentID"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"encryptedPropertiesExistFlag":{"name":"encryptedPropertiesExistFlag","persistent":false,"type":"boolean"},"rollbackProcessedFlag":{"name":"rollbackProcessedFlag","persistent":false,"type":"boolean"},"attributeValuesByAttributeCodeStruct":{"name":"attributeValuesByAttributeCodeStruct","persistent":false,"type":"struct"},"discountAmount":{"name":"discountAmount","ormtype":"big_decimal"},"promotionAppliedID":{"generator":"uuid","name":"promotionAppliedID","fieldtype":"id","ormtype":"string","unsavedvalue":"","length":32,"default":""},"currencyCode":{"name":"currencyCode","ormtype":"string","length":3}};
                	entities['PromotionApplied'].className = 'PromotionApplied';
                	validations['PromotionApplied'] = {"properties":{}};
                	defaultValues['PromotionApplied'] = {
                	promotionAppliedID:'',
										discountAmount:null,
									appliedType:null,
									currencyCode:null,
									remoteID:null,
									createdDateTime:'',
										createdByAccountID:null,
									modifiedDateTime:'',
										modifiedByAccountID:null,
									
						z:''
	                };
                
                	entities['ProductReview'] = {"emailTemplates":{"name":"emailTemplates","persistent":false,"type":"struct"},"createdDateTime":{"name":"createdDateTime","ormtype":"timestamp","hb_populateenabled":false},"printTemplates":{"name":"printTemplates","persistent":false,"type":"struct"},"processObjects":{"name":"processObjects","persistent":false,"type":"struct"},"settingValueFormatted":{"name":"settingValueFormatted","persistent":false,"type":"any"},"auditSmartList":{"name":"auditSmartList","persistent":false,"type":"any"},"modifiedDateTime":{"name":"modifiedDateTime","ormtype":"timestamp","hb_populateenabled":false},"newFlag":{"name":"newFlag","persistent":false,"type":"boolean"},"validations":{"name":"validations","persistent":false,"type":"struct"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"},"account":{"name":"account","fieldtype":"many-to-one","cfc":"Account","fkcolumn":"accountID"},"createdByAccountID":{"name":"createdByAccountID","ormtype":"string","hb_populateenabled":false},"remoteID":{"name":"remoteID","ormtype":"string"},"productReviewID":{"generator":"uuid","name":"productReviewID","fieldtype":"id","ormtype":"string","unsavedvalue":"","length":32,"default":""},"modifiedByAccountID":{"name":"modifiedByAccountID","ormtype":"string","hb_populateenabled":false},"attributeValuesByAttributeIDStruct":{"name":"attributeValuesByAttributeIDStruct","persistent":false,"type":"struct"},"review":{"name":"review","ormtype":"string","hb_populateenabled":"public","hint":"HTML Formated review of the Product","length":4000},"ratingOptions":{"name":"ratingOptions","persistent":false,"type":"array"},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"assignedAttributeSetSmartList":{"name":"assignedAttributeSetSmartList","persistent":false,"type":"any"},"modifiedByAccount":{"name":"modifiedByAccount","persistent":false},"attributeValues":{"inverse":true,"name":"attributeValues","fieldtype":"one-to-many","singularname":"attributeValue","cascade":"all-delete-orphan","cfc":"AttributeValue","fkcolumn":"productReviewID"},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"createdByAccount":{"name":"createdByAccount","persistent":false},"simpleRepresentation":{"name":"simpleRepresentation","persistent":false,"type":"string"},"sku":{"name":"sku","fieldtype":"many-to-one","hb_populateenabled":"public","cfc":"Sku","fkcolumn":"skuID"},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"persistableErrors":{"name":"persistableErrors","persistent":false,"type":"array"},"product":{"name":"product","fieldtype":"many-to-one","hb_populateenabled":"public","cfc":"Product","fkcolumn":"productID"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"encryptedPropertiesExistFlag":{"name":"encryptedPropertiesExistFlag","persistent":false,"type":"boolean"},"rollbackProcessedFlag":{"name":"rollbackProcessedFlag","persistent":false,"type":"boolean"},"reviewerName":{"name":"reviewerName","ormtype":"string","hb_populateenabled":"public"},"attributeValuesByAttributeCodeStruct":{"name":"attributeValuesByAttributeCodeStruct","persistent":false,"type":"struct"},"reviewTitle":{"name":"reviewTitle","ormtype":"string","hb_populateenabled":"public"},"activeFlag":{"name":"activeFlag","ormtype":"boolean"},"rating":{"name":"rating","ormtype":"int","hb_populateenabled":"public"}};
                	entities['ProductReview'].className = 'ProductReview';
                	validations['ProductReview'] = {"properties":{"reviewerName":[{"required":true,"contexts":"save"}],"review":[{"required":true,"contexts":"save"}],"product":[{"required":true,"contexts":"save"}]}};
                	defaultValues['ProductReview'] = {
                	productReviewID:'',
										activeFlag:0,
									reviewerName:null,
									review:null,
									reviewTitle:'',
										rating:0,
									remoteID:null,
									createdDateTime:'',
										createdByAccountID:null,
									modifiedDateTime:'',
										modifiedByAccountID:null,
									
						z:''
	                };
                
                	entities['StockAdjustment'] = {"emailTemplates":{"name":"emailTemplates","persistent":false,"type":"struct"},"createdDateTime":{"name":"createdDateTime","ormtype":"timestamp","hb_populateenabled":false},"printTemplates":{"name":"printTemplates","persistent":false,"type":"struct"},"processObjects":{"name":"processObjects","persistent":false,"type":"struct"},"fromLocation":{"name":"fromLocation","fieldtype":"many-to-one","cfc":"Location","fkcolumn":"fromLocationID"},"settingValueFormatted":{"name":"settingValueFormatted","persistent":false,"type":"any"},"auditSmartList":{"name":"auditSmartList","persistent":false,"type":"any"},"modifiedDateTime":{"name":"modifiedDateTime","ormtype":"timestamp","hb_populateenabled":false},"stockAdjustmentID":{"generator":"uuid","name":"stockAdjustmentID","fieldtype":"id","ormtype":"string","unsavedvalue":"","length":32,"default":""},"newFlag":{"name":"newFlag","persistent":false,"type":"boolean"},"validations":{"name":"validations","persistent":false,"type":"struct"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"},"adjustmentSkuOptions":{"name":"adjustmentSkuOptions","persistent":false},"createdByAccountID":{"name":"createdByAccountID","ormtype":"string","hb_populateenabled":false},"toLocation":{"name":"toLocation","fieldtype":"many-to-one","cfc":"Location","fkcolumn":"toLocationID"},"modifiedByAccountID":{"name":"modifiedByAccountID","ormtype":"string","hb_populateenabled":false},"attributeValuesByAttributeIDStruct":{"name":"attributeValuesByAttributeIDStruct","persistent":false,"type":"struct"},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"stockAdjustmentStatusTypeSystemCode":{"name":"stockAdjustmentStatusTypeSystemCode","persistent":false},"statusCode":{"name":"statusCode","persistent":false},"assignedAttributeSetSmartList":{"name":"assignedAttributeSetSmartList","persistent":false,"type":"any"},"stockAdjustmentStatusType":{"name":"stockAdjustmentStatusType","fieldtype":"many-to-one","hb_optionssmartlistdata":"f:parentType.systemCode=stockAdjustmentStatusType","cfc":"Type","fkcolumn":"stockAdjustmentStatusTypeID"},"stockAdjustmentType":{"name":"stockAdjustmentType","fieldtype":"many-to-one","hb_optionssmartlistdata":"f:parentType.systemCode=stockAdjustmentType","cfc":"Type","fkcolumn":"stockAdjustmentTypeID"},"modifiedByAccount":{"name":"modifiedByAccount","persistent":false},"addStockAdjustmentItemSkuOptionsSmartList":{"name":"addStockAdjustmentItemSkuOptionsSmartList","persistent":false},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"createdByAccount":{"name":"createdByAccount","persistent":false},"simpleRepresentation":{"name":"simpleRepresentation","persistent":false,"type":"string"},"stockAdjustmentTypeSystemCode":{"name":"stockAdjustmentTypeSystemCode","persistent":false},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"persistableErrors":{"name":"persistableErrors","persistent":false,"type":"array"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"encryptedPropertiesExistFlag":{"name":"encryptedPropertiesExistFlag","persistent":false,"type":"boolean"},"rollbackProcessedFlag":{"name":"rollbackProcessedFlag","persistent":false,"type":"boolean"},"attributeValuesByAttributeCodeStruct":{"name":"attributeValuesByAttributeCodeStruct","persistent":false,"type":"struct"},"displayName":{"name":"displayName","persistent":false},"stockReceivers":{"inverse":true,"name":"stockReceivers","fieldtype":"one-to-many","singularname":"stockReceiver","cascade":"all","cfc":"StockReceiver","fkcolumn":"stockAdjustmentID","type":"array"},"physical":{"name":"physical","fieldtype":"many-to-one","cfc":"Physical","fkcolumn":"physicalID"},"stockAdjustmentItems":{"inverse":true,"name":"stockAdjustmentItems","fieldtype":"one-to-many","singularname":"stockAdjustmentItem","cascade":"all-delete-orphan","cfc":"StockAdjustmentItem","fkcolumn":"stockAdjustmentID"},"addStockAdjustmentItemStockOptionsSmartList":{"name":"addStockAdjustmentItemStockOptionsSmartList","persistent":false}};
                	entities['StockAdjustment'].className = 'StockAdjustment';
                	validations['StockAdjustment'] = {"properties":{"toLocation":[{"required":true,"contexts":"save","conditions":"shouldHaveToLocation"}],"stockReceivers":[{"maxCollection":0,"contexts":"delete"}],"fromLocation":[{"required":true,"contexts":"save","conditions":"shouldHaveFromLocation"}],"statusCode":[{"inList":"sastNew","contexts":"addItems,processAdjustment,delete"}],"stockAdjustmentStatusType":[{"required":true,"contexts":"save"}],"stockAdjustmentType":[{"required":true,"contexts":"save"}]},"conditions":{"shouldHaveFromLocation":{"stockAdjustmentTypeSystemCode":{"inList":"satLocationTransfer,satManualOut"}},"shouldHaveToLocation":{"stockAdjustmentTypeSystemCode":{"inList":"satLocationTransfer,satManualIn"}}}};
                	defaultValues['StockAdjustment'] = {
                	stockAdjustmentID:'',
										createdDateTime:'',
										createdByAccountID:null,
									modifiedDateTime:'',
										modifiedByAccountID:null,
									
						z:''
	                };
                
                	entities['StockAdjustment_AddStockAdjustmentItem'] = {"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"sku":{"name":"sku"},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"preProcessDisplayedFlag":{"name":"preProcessDisplayedFlag"},"stockAdjustment":{"name":"stockAdjustment"},"skuID":{"name":"skuID"},"stock":{"name":"stock"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"validations":{"name":"validations","persistent":false,"type":"struct"},"populatedFlag":{"name":"populatedFlag"},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"stockID":{"name":"stockID"},"quantity":{"name":"quantity"}};
                	entities['StockAdjustment_AddStockAdjustmentItem'].className = 'StockAdjustment_AddStockAdjustmentItem';
                	validations['StockAdjustment_AddStockAdjustmentItem'] = {"properties":{"quantity":[{"dataType":"numeric","minValue":0,"required":true,"contexts":"save"}]}};
                	defaultValues['StockAdjustment_AddStockAdjustmentItem'] = {
                	stockAdjustment:'',
										sku:'',
									stock:'',
									skuID:'',
									stockID:'',
									quantity:1,
										preProcessDisplayedFlag:0,
										populatedFlag:0,
										
						z:''
	                };
                
                	entities['LoyaltyAccruement'] = {"emailTemplates":{"name":"emailTemplates","persistent":false,"type":"struct"},"createdDateTime":{"name":"createdDateTime","ormtype":"timestamp","hb_populateenabled":false},"printTemplates":{"name":"printTemplates","persistent":false,"type":"struct"},"processObjects":{"name":"processObjects","persistent":false,"type":"struct"},"settingValueFormatted":{"name":"settingValueFormatted","persistent":false,"type":"any"},"brands":{"name":"brands","fieldtype":"many-to-many","singularname":"brand","inversejoincolumn":"brandID","cfc":"Brand","fkcolumn":"loyaltyAccruementID","linktable":"SwLoyaltyAccruBrand"},"auditSmartList":{"name":"auditSmartList","persistent":false,"type":"any"},"modifiedDateTime":{"name":"modifiedDateTime","ormtype":"timestamp","hb_populateenabled":false},"newFlag":{"name":"newFlag","persistent":false,"type":"boolean"},"validations":{"name":"validations","persistent":false,"type":"struct"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"},"excludedProductTypes":{"name":"excludedProductTypes","fieldtype":"many-to-many","singularname":"excludedProductType","inversejoincolumn":"productTypeID","cfc":"ProductType","fkcolumn":"loyaltyAccruementID","linktable":"SwLoyaltyAccruExclProductType"},"createdByAccountID":{"name":"createdByAccountID","ormtype":"string","hb_populateenabled":false},"pointQuantity":{"name":"pointQuantity","ormtype":"integer"},"remoteID":{"name":"remoteID","ormtype":"string"},"attributeValuesByAttributeIDStruct":{"name":"attributeValuesByAttributeIDStruct","persistent":false,"type":"struct"},"excludedBrands":{"name":"excludedBrands","fieldtype":"many-to-many","singularname":"excludedBrand","inversejoincolumn":"brandID","cfc":"Brand","fkcolumn":"loyaltyAccruementID","linktable":"SwLoyaltyAccruExclBrand","type":"array"},"modifiedByAccountID":{"name":"modifiedByAccountID","ormtype":"string","hb_populateenabled":false},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"startDateTime":{"hb_nullrbkey":"define.forever","name":"startDateTime","ormtype":"timestamp"},"assignedAttributeSetSmartList":{"name":"assignedAttributeSetSmartList","persistent":false,"type":"any"},"loyaltyAccruementID":{"generator":"uuid","name":"loyaltyAccruementID","fieldtype":"id","ormtype":"string","unsavedvalue":"","length":32,"default":""},"modifiedByAccount":{"name":"modifiedByAccount","persistent":false},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"createdByAccount":{"name":"createdByAccount","persistent":false},"simpleRepresentation":{"name":"simpleRepresentation","persistent":false,"type":"string"},"products":{"name":"products","fieldtype":"many-to-many","singularname":"product","inversejoincolumn":"productID","cfc":"Product","fkcolumn":"loyaltyAccruementID","linktable":"SwLoyaltyAccruProduct"},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"persistableErrors":{"name":"persistableErrors","persistent":false,"type":"array"},"skus":{"name":"skus","fieldtype":"many-to-many","singularname":"sku","inversejoincolumn":"skuID","cfc":"Sku","fkcolumn":"loyaltyAccruementID","linktable":"SwLoyaltyAccruSku"},"excludedSkus":{"name":"excludedSkus","fieldtype":"many-to-many","singularname":"excludedSku","inversejoincolumn":"skuID","cfc":"Sku","fkcolumn":"loyaltyAccruementID","linktable":"SwLoyaltyAccruExclSku"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"encryptedPropertiesExistFlag":{"name":"encryptedPropertiesExistFlag","persistent":false,"type":"boolean"},"rollbackProcessedFlag":{"name":"rollbackProcessedFlag","persistent":false,"type":"boolean"},"attributeValuesByAttributeCodeStruct":{"name":"attributeValuesByAttributeCodeStruct","persistent":false,"type":"struct"},"loyalty":{"name":"loyalty","fieldtype":"many-to-one","cfc":"Loyalty","fkcolumn":"loyaltyID"},"expirationTerm":{"name":"expirationTerm","fieldtype":"many-to-one","cfc":"Term","hb_optionsnullrbkey":"define.never","fkcolumn":"expirationTermID"},"accruementType":{"name":"accruementType","ormtype":"string","hb_formattype":"rbKey","hb_formfieldtype":"select"},"activeFlag":{"name":"activeFlag","ormtype":"boolean","default":1},"excludedProducts":{"name":"excludedProducts","fieldtype":"many-to-many","singularname":"excludedProduct","inversejoincolumn":"productID","cfc":"Product","fkcolumn":"loyaltyAccruementID","linktable":"SwLoyaltyAccruExclProduct"},"endDateTime":{"hb_nullrbkey":"define.forever","name":"endDateTime","ormtype":"timestamp"},"pointType":{"name":"pointType","ormtype":"string","hb_formattype":"rbKey","hb_formfieldtype":"select"},"currencyCode":{"name":"currencyCode","ormtype":"string","length":3},"accountLoyaltyTransactions":{"inverse":true,"name":"accountLoyaltyTransactions","fieldtype":"one-to-many","singularname":"accountLoyaltyTransaction","cascade":"all-delete-orphan","cfc":"AccountLoyaltyTransaction","fkcolumn":"loyaltyAccruementID","type":"array"},"productTypes":{"name":"productTypes","fieldtype":"many-to-many","singularname":"productType","inversejoincolumn":"productTypeID","cfc":"ProductType","fkcolumn":"loyaltyAccruementID","linktable":"SwLoyaltyAccruProductType"}};
                	entities['LoyaltyAccruement'].className = 'LoyaltyAccruement';
                	validations['LoyaltyAccruement'] = {"properties":{"pointQuantity":[{"dataType":"numeric","required":true,"contexts":"save"}],"startDateTime":[{"dataType":"date","contexts":"save"}],"endDateTime":[{"dataType":"date","contexts":"save"},{"contexts":"save","conditions":"needsEndAfterStart","gtDateTimeProperty":"startDateTime"}],"pointType":[{"inList":"fixed","contexts":"save","conditions":"accruementTypeEnroll"}]},"conditions":{"accruementTypeEnroll":{"accruementType":{"eq":"enrollment"}},"needsEndAfterStart":{"startDateTime":{"required":true},"endDateTime":{"required":true}}}};
                	defaultValues['LoyaltyAccruement'] = {
                	loyaltyAccruementID:'',
										startDateTime:null,
									endDateTime:null,
									accruementType:null,
									pointType:null,
									pointQuantity:null,
									activeFlag:1,
									currencyCode:null,
									remoteID:null,
									createdDateTime:'',
										createdByAccountID:null,
									modifiedDateTime:'',
										modifiedByAccountID:null,
									
						z:''
	                };
                
                	entities['Image'] = {"emailTemplates":{"name":"emailTemplates","persistent":false,"type":"struct"},"createdDateTime":{"name":"createdDateTime","ormtype":"timestamp","hb_populateenabled":false},"printTemplates":{"name":"printTemplates","persistent":false,"type":"struct"},"option":{"name":"option","fieldtype":"many-to-one","cfc":"Option","fkcolumn":"optionID"},"processObjects":{"name":"processObjects","persistent":false,"type":"struct"},"settingValueFormatted":{"name":"settingValueFormatted","persistent":false,"type":"any"},"auditSmartList":{"name":"auditSmartList","persistent":false,"type":"any"},"modifiedDateTime":{"name":"modifiedDateTime","ormtype":"timestamp","hb_populateenabled":false},"newFlag":{"name":"newFlag","persistent":false,"type":"boolean"},"validations":{"name":"validations","persistent":false,"type":"struct"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"},"imageID":{"generator":"uuid","name":"imageID","fieldtype":"id","ormtype":"string","unsavedvalue":"","length":32,"default":""},"createdByAccountID":{"name":"createdByAccountID","ormtype":"string","hb_populateenabled":false},"remoteID":{"name":"remoteID","ormtype":"string"},"modifiedByAccountID":{"name":"modifiedByAccountID","ormtype":"string","hb_populateenabled":false},"attributeValuesByAttributeIDStruct":{"name":"attributeValuesByAttributeIDStruct","persistent":false,"type":"struct"},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"assignedAttributeSetSmartList":{"name":"assignedAttributeSetSmartList","persistent":false,"type":"any"},"modifiedByAccount":{"name":"modifiedByAccount","persistent":false},"attributeValues":{"inverse":true,"name":"attributeValues","fieldtype":"one-to-many","singularname":"attributeValue","cascade":"all-delete-orphan","cfc":"AttributeValue","fkcolumn":"imageID"},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"createdByAccount":{"name":"createdByAccount","persistent":false},"simpleRepresentation":{"name":"simpleRepresentation","persistent":false,"type":"string"},"promotion":{"name":"promotion","fieldtype":"many-to-one","cfc":"Promotion","fkcolumn":"promotionID"},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"persistableErrors":{"name":"persistableErrors","persistent":false,"type":"array"},"imageName":{"name":"imageName","ormtype":"string"},"product":{"name":"product","fieldtype":"many-to-one","cfc":"Product","fkcolumn":"productID"},"imageFile":{"name":"imageFile","hb_fileacceptmimetype":"image/gif,image/jpeg,image/pjpeg,image/png,image/x-png","hb_fileacceptextension":".jpeg,.jpg,.png,.gif","ormtype":"string","hb_fileupload":true,"hb_formfieldtype":"file"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"encryptedPropertiesExistFlag":{"name":"encryptedPropertiesExistFlag","persistent":false,"type":"boolean"},"rollbackProcessedFlag":{"name":"rollbackProcessedFlag","persistent":false,"type":"boolean"},"attributeValuesByAttributeCodeStruct":{"name":"attributeValuesByAttributeCodeStruct","persistent":false,"type":"struct"},"directory":{"name":"directory","ormtype":"string"},"imageDescription":{"name":"imageDescription","ormtype":"string","length":4000,"hb_formfieldtype":"wysiwyg"},"imageType":{"name":"imageType","fieldtype":"many-to-one","hb_optionssmartlistdata":"f:parentType.systemCode=imageType","cfc":"Type","fkcolumn":"imageTypeID"},"options":{"name":"options","fieldtype":"many-to-many","singularname":"option","inversejoincolumn":"optionID","cfc":"Option","fkcolumn":"imageID","linktable":"SwImageOption"}};
                	entities['Image'].className = 'Image';
                	validations['Image'] = {"properties":{"imageFile":[{"required":true,"contexts":"save"}]}};
                	defaultValues['Image'] = {
                	imageID:'',
										imageName:null,
									imageDescription:null,
									imageFile:null,
									directory:null,
									remoteID:null,
									createdDateTime:'',
										createdByAccountID:null,
									modifiedDateTime:'',
										modifiedByAccountID:null,
									
						z:''
	                };
                
                	entities['GiftCard'] = {"expirationDate":{"name":"expirationDate","ormtype":"timestamp"},"giftCardCode":{"name":"giftCardCode","ormtype":"string"},"emailTemplates":{"name":"emailTemplates","persistent":false,"type":"struct"},"createdDateTime":{"name":"createdDateTime","ormtype":"timestamp","hb_populateenabled":false},"printTemplates":{"name":"printTemplates","persistent":false,"type":"struct"},"processObjects":{"name":"processObjects","persistent":false,"type":"struct"},"settingValueFormatted":{"name":"settingValueFormatted","persistent":false,"type":"any"},"auditSmartList":{"name":"auditSmartList","persistent":false,"type":"any"},"modifiedDateTime":{"name":"modifiedDateTime","ormtype":"timestamp","hb_populateenabled":false},"newFlag":{"name":"newFlag","persistent":false,"type":"boolean"},"validations":{"name":"validations","persistent":false,"type":"struct"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"},"createdByAccountID":{"name":"createdByAccountID","ormtype":"string","hb_populateenabled":false},"remoteID":{"name":"remoteID","ormtype":"string"},"modifiedByAccountID":{"name":"modifiedByAccountID","ormtype":"string","hb_populateenabled":false},"attributeValuesByAttributeIDStruct":{"name":"attributeValuesByAttributeIDStruct","persistent":false,"type":"struct"},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"ownerLastName":{"name":"ownerLastName","ormtype":"string"},"assignedAttributeSetSmartList":{"name":"assignedAttributeSetSmartList","persistent":false,"type":"any"},"giftCardTransactions":{"inverse":true,"name":"giftCardTransactions","fieldtype":"one-to-many","singularname":"giftCardTransaction","cascade":"all-delete-orphan","cfc":"GiftCardTransaction","fkcolumn":"giftCardID"},"modifiedByAccount":{"name":"modifiedByAccount","persistent":false},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"createdByAccount":{"name":"createdByAccount","persistent":false},"simpleRepresentation":{"name":"simpleRepresentation","persistent":false,"type":"string"},"giftCardPin":{"name":"giftCardPin","ormtype":"string"},"ownerFirstName":{"name":"ownerFirstName","ormtype":"string"},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"ownerAccount":{"name":"ownerAccount","fieldtype":"many-to-one","cfc":"Account","fkcolumn":"ownerAccountID"},"persistableErrors":{"name":"persistableErrors","persistent":false,"type":"array"},"originalOrderItem":{"name":"originalOrderItem","fieldtype":"many-to-one","cfc":"OrderItem","fkcolumn":"originalOrderItemID"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"giftCardExpirationTerm":{"name":"giftCardExpirationTerm","fieldtype":"many-to-one","cfc":"Term","fkcolumn":"giftCardExpirationTermID"},"encryptedPropertiesExistFlag":{"name":"encryptedPropertiesExistFlag","persistent":false,"type":"boolean"},"rollbackProcessedFlag":{"name":"rollbackProcessedFlag","persistent":false,"type":"boolean"},"attributeValuesByAttributeCodeStruct":{"name":"attributeValuesByAttributeCodeStruct","persistent":false,"type":"struct"},"ownerEmailAddress":{"name":"ownerEmailAddress","ormtype":"string"},"giftCardID":{"generator":"uuid","name":"giftCardID","fieldtype":"id","ormtype":"string","unsavedvalue":"","length":32,"default":""}};
                	entities['GiftCard'].className = 'GiftCard';
                	validations['GiftCard'] = {"properties":{}};
                	defaultValues['GiftCard'] = {
                	giftCardID:'',
										giftCardCode:null,
									giftCardPin:null,
									expirationDate:null,
									ownerFirstName:null,
									ownerLastName:null,
									ownerEmailAddress:null,
									remoteID:null,
									createdDateTime:'',
										createdByAccountID:null,
									modifiedDateTime:'',
										modifiedByAccountID:null,
									
						z:''
	                };
                
                	entities['PriceGroupRate'] = {"emailTemplates":{"name":"emailTemplates","persistent":false,"type":"struct"},"createdDateTime":{"name":"createdDateTime","ormtype":"timestamp","hb_populateenabled":false},"printTemplates":{"name":"printTemplates","persistent":false,"type":"struct"},"processObjects":{"name":"processObjects","persistent":false,"type":"struct"},"settingValueFormatted":{"name":"settingValueFormatted","persistent":false,"type":"any"},"auditSmartList":{"name":"auditSmartList","persistent":false,"type":"any"},"modifiedDateTime":{"name":"modifiedDateTime","ormtype":"timestamp","hb_populateenabled":false},"appliesTo":{"name":"appliesTo","persistent":false,"type":"string"},"currencyCodeOptions":{"name":"currencyCodeOptions","persistent":false},"newFlag":{"name":"newFlag","persistent":false,"type":"boolean"},"validations":{"name":"validations","persistent":false,"type":"struct"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"},"priceGroupRateCurrencies":{"inverse":true,"name":"priceGroupRateCurrencies","fieldtype":"one-to-many","singularname":"priceGroupRateCurrency","cascade":"all-delete-orphan","cfc":"PriceGroupRateCurrency","fkcolumn":"priceGroupRateID","type":"array"},"createdByAccountID":{"name":"createdByAccountID","ormtype":"string","hb_populateenabled":false},"excludedProductTypes":{"name":"excludedProductTypes","fieldtype":"many-to-many","singularname":"excludedProductType","inversejoincolumn":"productTypeID","cfc":"ProductType","fkcolumn":"priceGroupRateID","linktable":"SwPriceGrpRateExclProductType"},"remoteID":{"name":"remoteID","ormtype":"string"},"attributeValuesByAttributeIDStruct":{"name":"attributeValuesByAttributeIDStruct","persistent":false,"type":"struct"},"modifiedByAccountID":{"name":"modifiedByAccountID","ormtype":"string","hb_populateenabled":false},"amountTypeOptions":{"name":"amountTypeOptions","persistent":false},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"assignedAttributeSetSmartList":{"name":"assignedAttributeSetSmartList","persistent":false,"type":"any"},"modifiedByAccount":{"name":"modifiedByAccount","persistent":false},"amountType":{"name":"amountType","ormtype":"string","hb_formfieldtype":"select"},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"createdByAccount":{"name":"createdByAccount","persistent":false},"simpleRepresentation":{"name":"simpleRepresentation","persistent":false,"type":"string"},"priceGroupRateID":{"generator":"uuid","name":"priceGroupRateID","fieldtype":"id","ormtype":"string","unsavedvalue":"","length":32,"default":""},"products":{"name":"products","fieldtype":"many-to-many","singularname":"product","inversejoincolumn":"productID","cfc":"Product","fkcolumn":"priceGroupRateID","linktable":"SwPriceGroupRateProduct"},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"persistableErrors":{"name":"persistableErrors","persistent":false,"type":"array"},"globalFlag":{"name":"globalFlag","ormtype":"boolean","default":false},"skus":{"name":"skus","fieldtype":"many-to-many","singularname":"sku","inversejoincolumn":"skuID","cfc":"Sku","fkcolumn":"priceGroupRateID","linktable":"SwPriceGroupRateSku"},"excludedSkus":{"name":"excludedSkus","fieldtype":"many-to-many","singularname":"excludedSku","inversejoincolumn":"skuID","cfc":"Sku","fkcolumn":"priceGroupRateID","linktable":"SwPriceGroupRateExclSku"},"amount":{"name":"amount","ormtype":"big_decimal","hb_formattype":"custom"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"encryptedPropertiesExistFlag":{"name":"encryptedPropertiesExistFlag","persistent":false,"type":"boolean"},"rollbackProcessedFlag":{"name":"rollbackProcessedFlag","persistent":false,"type":"boolean"},"attributeValuesByAttributeCodeStruct":{"name":"attributeValuesByAttributeCodeStruct","persistent":false,"type":"struct"},"displayName":{"name":"displayName","persistent":false,"type":"string"},"roundingRule":{"name":"roundingRule","fieldtype":"many-to-one","cfc":"RoundingRule","hb_optionsnullrbkey":"define.none","fkcolumn":"roundingRuleID"},"priceGroup":{"name":"priceGroup","fieldtype":"many-to-one","cfc":"PriceGroup","fkcolumn":"priceGroupID"},"excludedProducts":{"name":"excludedProducts","fieldtype":"many-to-many","singularname":"excludedProduct","inversejoincolumn":"productID","cfc":"Product","fkcolumn":"priceGroupRateID","linktable":"SwPriceGroupRateExclProduct"},"currencyCode":{"name":"currencyCode","ormtype":"string","length":3},"productTypes":{"name":"productTypes","fieldtype":"many-to-many","singularname":"productType","inversejoincolumn":"productTypeID","cfc":"ProductType","fkcolumn":"priceGroupRateID","linktable":"SwPriceGroupRateProductType"}};
                	entities['PriceGroupRate'].className = 'PriceGroupRate';
                	validations['PriceGroupRate'] = {"properties":{"amountType":[{"required":true,"contexts":"save"}],"priceGroup":[{"required":true,"contexts":"save"}],"amount":[{"dataType":"numeric","required":true,"contexts":"save"}]},"conditions":{"isNotGlobal":{"getGlobalFlag":{"eq":0}}}};
                	defaultValues['PriceGroupRate'] = {
                	priceGroupRateID:'',
										globalFlag:false,
									amount:null,
									amountType:null,
									currencyCode:'USD',
										remoteID:null,
									createdDateTime:'',
										createdByAccountID:null,
									modifiedDateTime:'',
										modifiedByAccountID:null,
									
						z:''
	                };
                
                	entities['OrderReturn'] = {"orderReturnID":{"generator":"uuid","name":"orderReturnID","fieldtype":"id","ormtype":"string","unsavedvalue":"","length":32,"default":""},"createdDateTime":{"name":"createdDateTime","ormtype":"timestamp","hb_populateenabled":false},"emailTemplates":{"name":"emailTemplates","persistent":false,"type":"struct"},"printTemplates":{"name":"printTemplates","persistent":false,"type":"struct"},"processObjects":{"name":"processObjects","persistent":false,"type":"struct"},"settingValueFormatted":{"name":"settingValueFormatted","persistent":false,"type":"any"},"auditSmartList":{"name":"auditSmartList","persistent":false,"type":"any"},"modifiedDateTime":{"name":"modifiedDateTime","ormtype":"timestamp","hb_populateenabled":false},"order":{"name":"order","fieldtype":"many-to-one","cfc":"Order","fkcolumn":"orderID"},"newFlag":{"name":"newFlag","persistent":false,"type":"boolean"},"validations":{"name":"validations","persistent":false,"type":"struct"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"},"createdByAccountID":{"name":"createdByAccountID","ormtype":"string","hb_populateenabled":false},"remoteID":{"name":"remoteID","ormtype":"string"},"orderReturnItems":{"inverse":true,"name":"orderReturnItems","fieldtype":"one-to-many","singularname":"orderReturnItem","hb_populateenabled":"public","cascade":"all","cfc":"OrderItem","fkcolumn":"orderReturnID"},"modifiedByAccountID":{"name":"modifiedByAccountID","ormtype":"string","hb_populateenabled":false},"attributeValuesByAttributeIDStruct":{"name":"attributeValuesByAttributeIDStruct","persistent":false,"type":"struct"},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"assignedAttributeSetSmartList":{"name":"assignedAttributeSetSmartList","persistent":false,"type":"any"},"modifiedByAccount":{"name":"modifiedByAccount","persistent":false},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"createdByAccount":{"name":"createdByAccount","persistent":false},"simpleRepresentation":{"name":"simpleRepresentation","persistent":false,"type":"string"},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"persistableErrors":{"name":"persistableErrors","persistent":false,"type":"array"},"returnLocation":{"name":"returnLocation","fieldtype":"many-to-one","hb_populateenabled":"public","cfc":"Location","fkcolumn":"returnLocationID"},"fulfillmentRefundAmount":{"name":"fulfillmentRefundAmount","ormtype":"big_decimal"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"encryptedPropertiesExistFlag":{"name":"encryptedPropertiesExistFlag","persistent":false,"type":"boolean"},"rollbackProcessedFlag":{"name":"rollbackProcessedFlag","persistent":false,"type":"boolean"},"attributeValuesByAttributeCodeStruct":{"name":"attributeValuesByAttributeCodeStruct","persistent":false,"type":"struct"},"currencyCode":{"name":"currencyCode","ormtype":"string","length":3}};
                	entities['OrderReturn'].className = 'OrderReturn';
                	validations['OrderReturn'] = {"properties":{"orderStatusCode":[{"inList":"ostNotPlaced,ostNew,ostProcessing,ostOnHold","contexts":"edit,delete"}]}};
                	defaultValues['OrderReturn'] = {
                	orderReturnID:'',
										fulfillmentRefundAmount:0,
									currencyCode:null,
									remoteID:null,
									createdDateTime:'',
										createdByAccountID:null,
									modifiedDateTime:'',
										modifiedByAccountID:null,
									
						z:''
	                };
                
                	entities['OrderReturn_Receive'] = {"boxCount":{"name":"boxCount","hb_rbkey":"entity.stockReceiver.boxCount"},"locationID":{"name":"locationID","hb_rbkey":"entity.location","hb_formfieldtype":"select"},"packingSlipNumber":{"name":"packingSlipNumber","hb_rbkey":"entity.stockReceiver.packingSlipNumber"},"populatedFlag":{"name":"populatedFlag"},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"orderReturnItems":{"name":"orderReturnItems","hb_populatearray":true,"type":"array"},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"preProcessDisplayedFlag":{"name":"preProcessDisplayedFlag"},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"validations":{"name":"validations","persistent":false,"type":"struct"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"},"orderReturn":{"name":"orderReturn"}};
                	entities['OrderReturn_Receive'].className = 'OrderReturn_Receive';
                	validations['OrderReturn_Receive'] = {"properties":{}};
                	defaultValues['OrderReturn_Receive'] = {
                	orderReturn:'',
										locationID:'',
									packingSlipNumber:'',
									boxCount:'',
									orderReturnItems:'',
									preProcessDisplayedFlag:0,
										populatedFlag:0,
										
						z:''
	                };
                
                	entities['OrderOrigin'] = {"createdDateTime":{"name":"createdDateTime","ormtype":"timestamp","hb_populateenabled":false},"emailTemplates":{"name":"emailTemplates","persistent":false,"type":"struct"},"printTemplates":{"name":"printTemplates","persistent":false,"type":"struct"},"orderOriginType":{"name":"orderOriginType","ormtype":"string","hb_formfieldtype":"select"},"processObjects":{"name":"processObjects","persistent":false,"type":"struct"},"settingValueFormatted":{"name":"settingValueFormatted","persistent":false,"type":"any"},"auditSmartList":{"name":"auditSmartList","persistent":false,"type":"any"},"modifiedDateTime":{"name":"modifiedDateTime","ormtype":"timestamp","hb_populateenabled":false},"newFlag":{"name":"newFlag","persistent":false,"type":"boolean"},"validations":{"name":"validations","persistent":false,"type":"struct"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"},"createdByAccountID":{"name":"createdByAccountID","ormtype":"string","hb_populateenabled":false},"remoteID":{"name":"remoteID","ormtype":"string"},"attributeValuesByAttributeIDStruct":{"name":"attributeValuesByAttributeIDStruct","persistent":false,"type":"struct"},"modifiedByAccountID":{"name":"modifiedByAccountID","ormtype":"string","hb_populateenabled":false},"orderOriginName":{"name":"orderOriginName","ormtype":"string"},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"assignedAttributeSetSmartList":{"name":"assignedAttributeSetSmartList","persistent":false,"type":"any"},"modifiedByAccount":{"name":"modifiedByAccount","persistent":false},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"simpleRepresentation":{"name":"simpleRepresentation","persistent":false,"type":"string"},"createdByAccount":{"name":"createdByAccount","persistent":false},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"persistableErrors":{"name":"persistableErrors","persistent":false,"type":"array"},"orderOriginID":{"generator":"uuid","name":"orderOriginID","fieldtype":"id","ormtype":"string","unsavedvalue":"","length":32,"default":""},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"encryptedPropertiesExistFlag":{"name":"encryptedPropertiesExistFlag","persistent":false,"type":"boolean"},"rollbackProcessedFlag":{"name":"rollbackProcessedFlag","persistent":false,"type":"boolean"},"attributeValuesByAttributeCodeStruct":{"name":"attributeValuesByAttributeCodeStruct","persistent":false,"type":"struct"},"orders":{"inverse":true,"name":"orders","fieldtype":"one-to-many","singularname":"order","lazy":"extra","cfc":"Order","fkcolumn":"orderOriginID"},"activeFlag":{"name":"activeFlag","ormtype":"boolean","hb_formattype":"yesno"}};
                	entities['OrderOrigin'].className = 'OrderOrigin';
                	validations['OrderOrigin'] = {"properties":{"orders":[{"maxCollection":0,"contexts":"delete"}],"orderOriginName":[{"required":true,"contexts":"save"}]}};
                	defaultValues['OrderOrigin'] = {
                	orderOriginID:'',
										activeFlag:1,
									orderOriginName:null,
									orderOriginType:null,
									remoteID:null,
									createdDateTime:'',
										createdByAccountID:null,
									modifiedDateTime:'',
										modifiedByAccountID:null,
									
						z:''
	                };
                
                	entities['Loyalty'] = {"createdDateTime":{"name":"createdDateTime","ormtype":"timestamp","hb_populateenabled":false},"emailTemplates":{"name":"emailTemplates","persistent":false,"type":"struct"},"printTemplates":{"name":"printTemplates","persistent":false,"type":"struct"},"processObjects":{"name":"processObjects","persistent":false,"type":"struct"},"settingValueFormatted":{"name":"settingValueFormatted","persistent":false,"type":"any"},"auditSmartList":{"name":"auditSmartList","persistent":false,"type":"any"},"modifiedDateTime":{"name":"modifiedDateTime","ormtype":"timestamp","hb_populateenabled":false},"newFlag":{"name":"newFlag","persistent":false,"type":"boolean"},"validations":{"name":"validations","persistent":false,"type":"struct"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"},"createdByAccountID":{"name":"createdByAccountID","ormtype":"string","hb_populateenabled":false},"remoteID":{"name":"remoteID","ormtype":"string"},"loyaltyTerms":{"inverse":true,"name":"loyaltyTerms","fieldtype":"one-to-many","singularname":"loyaltyTerm","cascade":"all-delete-orphan","cfc":"LoyaltyTerm","fkcolumn":"loyaltyID","type":"array"},"modifiedByAccountID":{"name":"modifiedByAccountID","ormtype":"string","hb_populateenabled":false},"accountLoyalties":{"inverse":true,"name":"accountLoyalties","fieldtype":"one-to-many","singularname":"accountLoyalty","cascade":"all-delete-orphan","cfc":"AccountLoyalty","fkcolumn":"loyaltyID","type":"array"},"attributeValuesByAttributeIDStruct":{"name":"attributeValuesByAttributeIDStruct","persistent":false,"type":"struct"},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"assignedAttributeSetSmartList":{"name":"assignedAttributeSetSmartList","persistent":false,"type":"any"},"loyaltyAccruements":{"inverse":true,"name":"loyaltyAccruements","fieldtype":"one-to-many","singularname":"loyaltyAccruement","cascade":"all-delete-orphan","cfc":"LoyaltyAccruement","fkcolumn":"loyaltyID","type":"array"},"loyaltyID":{"generator":"uuid","name":"loyaltyID","fieldtype":"id","ormtype":"string","unsavedvalue":"","length":32,"default":""},"modifiedByAccount":{"name":"modifiedByAccount","persistent":false},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"createdByAccount":{"name":"createdByAccount","persistent":false},"simpleRepresentation":{"name":"simpleRepresentation","persistent":false,"type":"string"},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"loyaltyRedemptions":{"inverse":true,"name":"loyaltyRedemptions","fieldtype":"one-to-many","singularname":"loyaltyRedemption","cascade":"all-delete-orphan","cfc":"LoyaltyRedemption","fkcolumn":"loyaltyID","type":"array"},"persistableErrors":{"name":"persistableErrors","persistent":false,"type":"array"},"loyaltyName":{"name":"loyaltyName","ormtype":"string"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"encryptedPropertiesExistFlag":{"name":"encryptedPropertiesExistFlag","persistent":false,"type":"boolean"},"rollbackProcessedFlag":{"name":"rollbackProcessedFlag","persistent":false,"type":"boolean"},"attributeValuesByAttributeCodeStruct":{"name":"attributeValuesByAttributeCodeStruct","persistent":false,"type":"struct"},"activeFlag":{"name":"activeFlag","ormtype":"boolean","default":1}};
                	entities['Loyalty'].className = 'Loyalty';
                	validations['Loyalty'] = {"properties":{"loyaltyName":[{"required":true,"contexts":"save"}]}};
                	defaultValues['Loyalty'] = {
                	loyaltyID:'',
										loyaltyName:null,
									activeFlag:1,
									remoteID:null,
									createdDateTime:'',
										createdByAccountID:null,
									modifiedDateTime:'',
										modifiedByAccountID:null,
									
						z:''
	                };
                
                	entities['VendorAddress'] = {"createdDateTime":{"name":"createdDateTime","ormtype":"timestamp","hb_populateenabled":false},"emailTemplates":{"name":"emailTemplates","persistent":false,"type":"struct"},"printTemplates":{"name":"printTemplates","persistent":false,"type":"struct"},"processObjects":{"name":"processObjects","persistent":false,"type":"struct"},"settingValueFormatted":{"name":"settingValueFormatted","persistent":false,"type":"any"},"auditSmartList":{"name":"auditSmartList","persistent":false,"type":"any"},"modifiedDateTime":{"name":"modifiedDateTime","ormtype":"timestamp","hb_populateenabled":false},"newFlag":{"name":"newFlag","persistent":false,"type":"boolean"},"validations":{"name":"validations","persistent":false,"type":"struct"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"},"createdByAccountID":{"name":"createdByAccountID","ormtype":"string","hb_populateenabled":false},"vendorAddressID":{"generator":"uuid","name":"vendorAddressID","fieldtype":"id","ormtype":"string","unsavedvalue":"","length":32,"default":""},"attributeValuesByAttributeIDStruct":{"name":"attributeValuesByAttributeIDStruct","persistent":false,"type":"struct"},"modifiedByAccountID":{"name":"modifiedByAccountID","ormtype":"string","hb_populateenabled":false},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"assignedAttributeSetSmartList":{"name":"assignedAttributeSetSmartList","persistent":false,"type":"any"},"modifiedByAccount":{"name":"modifiedByAccount","persistent":false},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"simpleRepresentation":{"name":"simpleRepresentation","persistent":false,"type":"string"},"createdByAccount":{"name":"createdByAccount","persistent":false},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"address":{"name":"address","fieldtype":"many-to-one","cascade":"all","cfc":"Address","fkcolumn":"addressID"},"persistableErrors":{"name":"persistableErrors","persistent":false,"type":"array"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"encryptedPropertiesExistFlag":{"name":"encryptedPropertiesExistFlag","persistent":false,"type":"boolean"},"rollbackProcessedFlag":{"name":"rollbackProcessedFlag","persistent":false,"type":"boolean"},"attributeValuesByAttributeCodeStruct":{"name":"attributeValuesByAttributeCodeStruct","persistent":false,"type":"struct"},"vendor":{"name":"vendor","fieldtype":"many-to-one","cfc":"Vendor","fkcolumn":"vendorID"}};
                	entities['VendorAddress'].className = 'VendorAddress';
                	validations['VendorAddress'] = {"properties":{"vendor":[{"required":true,"contexts":"save"}]},"populatedPropertyValidation":{"address":[{"validate":"full"}]}};
                	defaultValues['VendorAddress'] = {
                	vendorAddressID:'',
										createdDateTime:'',
										createdByAccountID:null,
									modifiedDateTime:'',
										modifiedByAccountID:null,
									
						z:''
	                };
                
                	entities['Comment'] = {"createdDateTime":{"name":"createdDateTime","ormtype":"timestamp","hb_populateenabled":false},"emailTemplates":{"name":"emailTemplates","persistent":false,"type":"struct"},"commentWithLinks":{"name":"commentWithLinks","persistent":false},"printTemplates":{"name":"printTemplates","persistent":false,"type":"struct"},"commentRelationships":{"inverse":true,"name":"commentRelationships","fieldtype":"one-to-many","singularname":"commentRelationship","cascade":"all-delete-orphan","cfc":"CommentRelationship","fkcolumn":"commentID","type":"array"},"processObjects":{"name":"processObjects","persistent":false,"type":"struct"},"settingValueFormatted":{"name":"settingValueFormatted","persistent":false,"type":"any"},"auditSmartList":{"name":"auditSmartList","persistent":false,"type":"any"},"newFlag":{"name":"newFlag","persistent":false,"type":"boolean"},"validations":{"name":"validations","persistent":false,"type":"struct"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"},"createdByAccountID":{"name":"createdByAccountID","ormtype":"string","hb_populateenabled":false},"remoteID":{"name":"remoteID","ormtype":"string"},"attributeValuesByAttributeIDStruct":{"name":"attributeValuesByAttributeIDStruct","persistent":false,"type":"struct"},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"assignedAttributeSetSmartList":{"name":"assignedAttributeSetSmartList","persistent":false,"type":"any"},"primaryRelationship":{"name":"primaryRelationship","persistent":false},"modifiedByAccount":{"name":"modifiedByAccount","persistent":false},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"simpleRepresentation":{"name":"simpleRepresentation","persistent":false,"type":"string"},"createdByAccount":{"name":"createdByAccount","persistent":false},"publicFlag":{"name":"publicFlag","ormtype":"boolean"},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"persistableErrors":{"name":"persistableErrors","persistent":false,"type":"array"},"commentID":{"generator":"uuid","name":"commentID","fieldtype":"id","ormtype":"string","unsavedvalue":"","length":32,"default":""},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"encryptedPropertiesExistFlag":{"name":"encryptedPropertiesExistFlag","persistent":false,"type":"boolean"},"rollbackProcessedFlag":{"name":"rollbackProcessedFlag","persistent":false,"type":"boolean"},"attributeValuesByAttributeCodeStruct":{"name":"attributeValuesByAttributeCodeStruct","persistent":false,"type":"struct"},"comment":{"name":"comment","ormtype":"string","length":4000,"hb_formfieldtype":"textarea"}};
                	entities['Comment'].className = 'Comment';
                	validations['Comment'] = {"properties":{}};
                	defaultValues['Comment'] = {
                	commentID:'',
										comment:null,
									publicFlag:null,
									remoteID:null,
									createdDateTime:'',
										createdByAccountID:null,
									
						z:''
	                };
                
                	entities['AccountLoyalty'] = {"createdDateTime":{"name":"createdDateTime","ormtype":"timestamp","hb_populateenabled":false},"emailTemplates":{"name":"emailTemplates","persistent":false,"type":"struct"},"printTemplates":{"name":"printTemplates","persistent":false,"type":"struct"},"accountLoyaltyNumber":{"name":"accountLoyaltyNumber","ormtype":"string"},"processObjects":{"name":"processObjects","persistent":false,"type":"struct"},"settingValueFormatted":{"name":"settingValueFormatted","persistent":false,"type":"any"},"auditSmartList":{"name":"auditSmartList","persistent":false,"type":"any"},"modifiedDateTime":{"name":"modifiedDateTime","ormtype":"timestamp","hb_populateenabled":false},"newFlag":{"name":"newFlag","persistent":false,"type":"boolean"},"validations":{"name":"validations","persistent":false,"type":"struct"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"},"account":{"name":"account","fieldtype":"many-to-one","cfc":"Account","fkcolumn":"accountID"},"createdByAccountID":{"name":"createdByAccountID","ormtype":"string","hb_populateenabled":false},"remoteID":{"name":"remoteID","ormtype":"string"},"modifiedByAccountID":{"name":"modifiedByAccountID","ormtype":"string","hb_populateenabled":false},"attributeValuesByAttributeIDStruct":{"name":"attributeValuesByAttributeIDStruct","persistent":false,"type":"struct"},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"assignedAttributeSetSmartList":{"name":"assignedAttributeSetSmartList","persistent":false,"type":"any"},"modifiedByAccount":{"name":"modifiedByAccount","persistent":false},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"createdByAccount":{"name":"createdByAccount","persistent":false},"simpleRepresentation":{"name":"simpleRepresentation","persistent":false,"type":"string"},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"persistableErrors":{"name":"persistableErrors","persistent":false,"type":"array"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"encryptedPropertiesExistFlag":{"name":"encryptedPropertiesExistFlag","persistent":false,"type":"boolean"},"accountLoyaltyID":{"generator":"uuid","name":"accountLoyaltyID","fieldtype":"id","ormtype":"string","unsavedvalue":"","length":32,"default":""},"rollbackProcessedFlag":{"name":"rollbackProcessedFlag","persistent":false,"type":"boolean"},"attributeValuesByAttributeCodeStruct":{"name":"attributeValuesByAttributeCodeStruct","persistent":false,"type":"struct"},"loyalty":{"name":"loyalty","fieldtype":"many-to-one","cfc":"Loyalty","fkcolumn":"loyaltyID"},"lifetimeBalance":{"name":"lifetimeBalance","persistent":false},"accountLoyaltyTransactions":{"inverse":true,"name":"accountLoyaltyTransactions","fieldtype":"one-to-many","singularname":"accountLoyaltyTransaction","cascade":"all-delete-orphan","cfc":"AccountLoyaltyTransaction","fkcolumn":"accountLoyaltyID","type":"array"}};
                	entities['AccountLoyalty'].className = 'AccountLoyalty';
                	validations['AccountLoyalty'] = {"properties":{"loyalty":[{"required":true,"contexts":"save"}],"accountLoyaltyID":[{"maxLength":0,"contexts":"delete"}]}};
                	defaultValues['AccountLoyalty'] = {
                	accountLoyaltyID:'',
										accountLoyaltyNumber:null,
									remoteID:null,
									createdDateTime:'',
										createdByAccountID:null,
									modifiedDateTime:'',
										modifiedByAccountID:null,
									
						z:''
	                };
                
                	entities['VendorSkuStock'] = {"createdDateTime":{"name":"createdDateTime","ormtype":"timestamp","hb_populateenabled":false},"emailTemplates":{"name":"emailTemplates","persistent":false,"type":"struct"},"printTemplates":{"name":"printTemplates","persistent":false,"type":"struct"},"processObjects":{"name":"processObjects","persistent":false,"type":"struct"},"settingValueFormatted":{"name":"settingValueFormatted","persistent":false,"type":"any"},"auditSmartList":{"name":"auditSmartList","persistent":false,"type":"any"},"modifiedDateTime":{"name":"modifiedDateTime","ormtype":"timestamp","hb_populateenabled":false},"newFlag":{"name":"newFlag","persistent":false,"type":"boolean"},"validations":{"name":"validations","persistent":false,"type":"struct"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"},"createdByAccountID":{"name":"createdByAccountID","ormtype":"string","hb_populateenabled":false},"modifiedByAccountID":{"name":"modifiedByAccountID","ormtype":"string","hb_populateenabled":false},"attributeValuesByAttributeIDStruct":{"name":"attributeValuesByAttributeIDStruct","persistent":false,"type":"struct"},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"cost":{"name":"cost","ormtype":"big_decimal"},"assignedAttributeSetSmartList":{"name":"assignedAttributeSetSmartList","persistent":false,"type":"any"},"quantity":{"name":"quantity","ormtype":"integer"},"vendorSkuStockID":{"generator":"uuid","name":"vendorSkuStockID","fieldtype":"id","ormtype":"string","unsavedvalue":"","length":32,"default":""},"modifiedByAccount":{"name":"modifiedByAccount","persistent":false},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"createdByAccount":{"name":"createdByAccount","persistent":false},"simpleRepresentation":{"name":"simpleRepresentation","persistent":false,"type":"string"},"sku":{"name":"sku","fieldtype":"many-to-one","cfc":"Sku","fkcolumn":"skuID"},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"persistableErrors":{"name":"persistableErrors","persistent":false,"type":"array"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"encryptedPropertiesExistFlag":{"name":"encryptedPropertiesExistFlag","persistent":false,"type":"boolean"},"availableDateTime":{"name":"availableDateTime","ormtype":"timestamp"},"rollbackProcessedFlag":{"name":"rollbackProcessedFlag","persistent":false,"type":"boolean"},"attributeValuesByAttributeCodeStruct":{"name":"attributeValuesByAttributeCodeStruct","persistent":false,"type":"struct"},"currencyCode":{"name":"currencyCode","ormtype":"string","length":3},"vendor":{"name":"vendor","fieldtype":"many-to-one","cfc":"Vendor","fkcolumn":"vendorID"}};
                	entities['VendorSkuStock'].className = 'VendorSkuStock';
                	validations['VendorSkuStock'] = {"properties":{}};
                	defaultValues['VendorSkuStock'] = {
                	vendorSkuStockID:'',
										cost:null,
									currencyCode:null,
									quantity:null,
									availableDateTime:null,
									createdDateTime:'',
										createdByAccountID:null,
									modifiedDateTime:'',
										modifiedByAccountID:null,
									
						z:''
	                };
                
                	entities['EventTrigger'] = {"createdDateTime":{"name":"createdDateTime","ormtype":"timestamp","hb_populateenabled":false},"emailTemplates":{"name":"emailTemplates","persistent":false,"type":"struct"},"printTemplates":{"name":"printTemplates","persistent":false,"type":"struct"},"processObjects":{"name":"processObjects","persistent":false,"type":"struct"},"settingValueFormatted":{"name":"settingValueFormatted","persistent":false,"type":"any"},"auditSmartList":{"name":"auditSmartList","persistent":false,"type":"any"},"modifiedDateTime":{"name":"modifiedDateTime","ormtype":"timestamp","hb_populateenabled":false},"eventName":{"name":"eventName","ormtype":"string","hb_formfieldtype":"select"},"newFlag":{"name":"newFlag","persistent":false,"type":"boolean"},"validations":{"name":"validations","persistent":false,"type":"struct"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"},"printTemplate":{"name":"printTemplate","fieldtype":"many-to-one","cfc":"PrintTemplate","hb_optionsnullrbkey":"define.select","fkcolumn":"printTemplateID"},"createdByAccountID":{"name":"createdByAccountID","ormtype":"string","hb_populateenabled":false},"eventTriggerObject":{"name":"eventTriggerObject","ormtype":"string","hb_formfieldtype":"select"},"remoteID":{"name":"remoteID","ormtype":"string"},"modifiedByAccountID":{"name":"modifiedByAccountID","ormtype":"string","hb_populateenabled":false},"attributeValuesByAttributeIDStruct":{"name":"attributeValuesByAttributeIDStruct","persistent":false,"type":"struct"},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"eventTriggerID":{"generator":"uuid","name":"eventTriggerID","fieldtype":"id","ormtype":"string","unsavedvalue":"","length":32,"default":""},"eventTriggerTypeOptions":{"name":"eventTriggerTypeOptions","persistent":false},"eventTriggerObjectOptions":{"name":"eventTriggerObjectOptions","persistent":false},"emailTemplate":{"name":"emailTemplate","fieldtype":"many-to-one","cfc":"EmailTemplate","hb_optionsnullrbkey":"define.select","fkcolumn":"emailTemplateID"},"eventTriggerName":{"name":"eventTriggerName","ormtype":"string"},"eventNameOptions":{"name":"eventNameOptions","persistent":false},"assignedAttributeSetSmartList":{"name":"assignedAttributeSetSmartList","persistent":false,"type":"any"},"modifiedByAccount":{"name":"modifiedByAccount","persistent":false},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"createdByAccount":{"name":"createdByAccount","persistent":false},"simpleRepresentation":{"name":"simpleRepresentation","persistent":false,"type":"string"},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"persistableErrors":{"name":"persistableErrors","persistent":false,"type":"array"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"encryptedPropertiesExistFlag":{"name":"encryptedPropertiesExistFlag","persistent":false,"type":"boolean"},"rollbackProcessedFlag":{"name":"rollbackProcessedFlag","persistent":false,"type":"boolean"},"attributeValuesByAttributeCodeStruct":{"name":"attributeValuesByAttributeCodeStruct","persistent":false,"type":"struct"},"eventTriggerType":{"name":"eventTriggerType","ormtype":"string","hb_formfieldtype":"select"}};
                	entities['EventTrigger'].className = 'EventTrigger';
                	validations['EventTrigger'] = {"properties":{"eventTriggerObjectType":[{"required":true,"contexts":"save"}],"eventTriggerType":[{"required":true,"contexts":"save"}],"eventName":[{"required":true,"contexts":"save","conditions":"notNew"}],"eventTriggerName":[{"required":true,"contexts":"save"}]},"conditions":{"notNew":{"newFlag":{"eq":false}}}};
                	defaultValues['EventTrigger'] = {
                	eventTriggerID:'',
										eventTriggerName:null,
									eventTriggerType:null,
									eventTriggerObject:null,
									eventName:null,
									remoteID:null,
									createdDateTime:'',
										createdByAccountID:null,
									modifiedDateTime:'',
										modifiedByAccountID:null,
									
						z:''
	                };
                
                	entities['ProductSchedule'] = {"weeklyRepeatDays":{"name":"weeklyRepeatDays","ormtype":"string","hint":"List containing days of the week on which the schedule occurs."},"createdDateTime":{"name":"createdDateTime","ormtype":"timestamp"},"emailTemplates":{"name":"emailTemplates","persistent":false,"type":"struct"},"printTemplates":{"name":"printTemplates","persistent":false,"type":"struct"},"processObjects":{"name":"processObjects","persistent":false,"type":"struct"},"settingValueFormatted":{"name":"settingValueFormatted","persistent":false,"type":"any"},"auditSmartList":{"name":"auditSmartList","persistent":false,"type":"any"},"modifiedDateTime":{"name":"modifiedDateTime","ormtype":"timestamp"},"newFlag":{"name":"newFlag","persistent":false,"type":"boolean"},"validations":{"name":"validations","persistent":false,"type":"struct"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"},"scheduleEndDate":{"name":"scheduleEndDate","ormtype":"timestamp","hint":"If endsOn=date this will be the date the schedule ends","hb_formfieldtype":"date"},"remoteID":{"name":"remoteID","ormtype":"string"},"recurringTimeUnit":{"name":"recurringTimeUnit","ormtype":"string","hint":"Daily, Weekly, Monthly, Yearly"},"attributeValuesByAttributeIDStruct":{"name":"attributeValuesByAttributeIDStruct","persistent":false,"type":"struct"},"monthlyRepeatByType":{"name":"monthlyRepeatByType","ormtype":"string","hint":"Whether recurrence is repeated based on day of month or day of week."},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"assignedAttributeSetSmartList":{"name":"assignedAttributeSetSmartList","persistent":false,"type":"any"},"modifiedByAccount":{"name":"modifiedByAccount","persistent":false},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"createdByAccount":{"name":"createdByAccount","persistent":false},"simpleRepresentation":{"name":"simpleRepresentation","persistent":false,"type":"string"},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"persistableErrors":{"name":"persistableErrors","persistent":false,"type":"array"},"skus":{"inverse":true,"name":"skus","fieldtype":"one-to-many","singularname":"sku","cascade":"all","cfc":"Sku","fkcolumn":"productScheduleID","type":"array"},"product":{"name":"product","fieldtype":"many-to-one","hb_populateenabled":"public","cfc":"Product","fkcolumn":"productID"},"productScheduleID":{"generator":"uuid","name":"productScheduleID","fieldtype":"id","ormtype":"string","unsavedvalue":"","length":32,"default":""},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"encryptedPropertiesExistFlag":{"name":"encryptedPropertiesExistFlag","persistent":false,"type":"boolean"},"scheduleSummary":{"name":"scheduleSummary","persistent":false},"rollbackProcessedFlag":{"name":"rollbackProcessedFlag","persistent":false,"type":"boolean"},"attributeValuesByAttributeCodeStruct":{"name":"attributeValuesByAttributeCodeStruct","persistent":false,"type":"struct"},"firstScheduledSku":{"name":"firstScheduledSku","persistent":false}};
                	entities['ProductSchedule'].className = 'ProductSchedule';
                	validations['ProductSchedule'] = {"properties":{}};
                	defaultValues['ProductSchedule'] = {
                	productScheduleID:'',
										recurringTimeUnit:null,
									weeklyRepeatDays:null,
									monthlyRepeatByType:null,
									scheduleEndDate:null,
									remoteID:null,
									createdDateTime:'',
										modifiedDateTime:'',
										
						z:''
	                };
                
                	entities['MeasurementUnit'] = {"unitName":{"name":"unitName","ormtype":"string"},"createdDateTime":{"name":"createdDateTime","ormtype":"timestamp","hb_populateenabled":false},"emailTemplates":{"name":"emailTemplates","persistent":false,"type":"struct"},"printTemplates":{"name":"printTemplates","persistent":false,"type":"struct"},"processObjects":{"name":"processObjects","persistent":false,"type":"struct"},"settingValueFormatted":{"name":"settingValueFormatted","persistent":false,"type":"any"},"auditSmartList":{"name":"auditSmartList","persistent":false,"type":"any"},"modifiedDateTime":{"name":"modifiedDateTime","ormtype":"timestamp","hb_populateenabled":false},"newFlag":{"name":"newFlag","persistent":false,"type":"boolean"},"validations":{"name":"validations","persistent":false,"type":"struct"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"},"createdByAccountID":{"name":"createdByAccountID","ormtype":"string","hb_populateenabled":false},"attributeValuesByAttributeIDStruct":{"name":"attributeValuesByAttributeIDStruct","persistent":false,"type":"struct"},"modifiedByAccountID":{"name":"modifiedByAccountID","ormtype":"string","hb_populateenabled":false},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"assignedAttributeSetSmartList":{"name":"assignedAttributeSetSmartList","persistent":false,"type":"any"},"modifiedByAccount":{"name":"modifiedByAccount","persistent":false},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"simpleRepresentation":{"name":"simpleRepresentation","persistent":false,"type":"string"},"createdByAccount":{"name":"createdByAccount","persistent":false},"measurementType":{"name":"measurementType","ormtype":"string","hb_formfieldtype":"select"},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"persistableErrors":{"name":"persistableErrors","persistent":false,"type":"array"},"unitCode":{"unique":true,"name":"unitCode","fieldtype":"id","ormtype":"string","generated":"never"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"encryptedPropertiesExistFlag":{"name":"encryptedPropertiesExistFlag","persistent":false,"type":"boolean"},"rollbackProcessedFlag":{"name":"rollbackProcessedFlag","persistent":false,"type":"boolean"},"attributeValuesByAttributeCodeStruct":{"name":"attributeValuesByAttributeCodeStruct","persistent":false,"type":"struct"},"conversionRatio":{"name":"conversionRatio","ormtype":"float"}};
                	entities['MeasurementUnit'].className = 'MeasurementUnit';
                	validations['MeasurementUnit'] = {"properties":{}};
                	defaultValues['MeasurementUnit'] = {
                	unitCode:null,
									measurementType:null,
									unitName:null,
									conversionRatio:null,
									createdDateTime:'',
										createdByAccountID:null,
									modifiedDateTime:'',
										modifiedByAccountID:null,
									
						z:''
	                };
                
                	entities['OrderItem'] = {"emailTemplates":{"name":"emailTemplates","persistent":false,"type":"struct"},"createdDateTime":{"name":"createdDateTime","ormtype":"timestamp","hb_populateenabled":false},"settingValueFormatted":{"name":"settingValueFormatted","persistent":false,"type":"any"},"auditSmartList":{"name":"auditSmartList","persistent":false,"type":"any"},"order":{"name":"order","fieldtype":"many-to-one","fetch":"join","hb_populateenabled":false,"hb_cascadecalculate":true,"cfc":"Order","fkcolumn":"orderID"},"modifiedDateTime":{"name":"modifiedDateTime","ormtype":"timestamp","hb_populateenabled":false},"stock":{"name":"stock","fieldtype":"many-to-one","hb_populateenabled":"public","cfc":"Stock","fkcolumn":"stockID"},"orderItemGiftRecipients":{"inverse":true,"name":"orderItemGiftRecipients","fieldtype":"one-to-many","singularname":"orderItemGiftRecipient","cascade":"all","cfc":"orderItemGiftRecipient","fkcolumn":"orderItemID","type":"array"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"},"quantityUnreceived":{"name":"quantityUnreceived","persistent":false},"parentOrderItem":{"name":"parentOrderItem","fieldtype":"many-to-one","cfc":"OrderItem","fkcolumn":"parentOrderItemID"},"remoteID":{"name":"remoteID","ormtype":"string"},"registrants":{"name":"registrants","persistent":false},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"quantityReceived":{"name":"quantityReceived","persistent":false},"salePrice":{"name":"salePrice","persistent":false,"type":"struct"},"quantityDelivered":{"name":"quantityDelivered","persistent":false},"quantity":{"name":"quantity","ormtype":"integer","hb_populateenabled":"public"},"modifiedByAccount":{"name":"modifiedByAccount","persistent":false},"productBundlePrice":{"name":"productBundlePrice","hb_formattype":"currency","persistent":false},"createdByAccount":{"name":"createdByAccount","persistent":false},"simpleRepresentation":{"name":"simpleRepresentation","persistent":false,"type":"string"},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"orderReturn":{"name":"orderReturn","fieldtype":"many-to-one","cfc":"OrderReturn","fkcolumn":"orderReturnID"},"rollbackProcessedFlag":{"name":"rollbackProcessedFlag","persistent":false,"type":"boolean"},"attributeValuesByAttributeCodeStruct":{"name":"attributeValuesByAttributeCodeStruct","persistent":false,"type":"struct"},"discountAmount":{"name":"discountAmount","hb_formattype":"currency","hint":"This is the discount amount after quantity (talk to Greg if you don't understand)","persistent":false},"stockReceiverItems":{"inverse":true,"name":"stockReceiverItems","fieldtype":"one-to-many","singularname":"stockReceiverItem","cfc":"StockReceiverItem","fkcolumn":"orderItemID","type":"array"},"eventRegistrations":{"inverse":true,"name":"eventRegistrations","fieldtype":"one-to-many","singularname":"eventRegistration","hb_populateenabled":"public","cascade":"all-delete-orphan","lazy":"extra","cfc":"EventRegistration","fkcolumn":"orderItemID"},"accountLoyaltyTransactions":{"inverse":true,"name":"accountLoyaltyTransactions","fieldtype":"one-to-many","singularname":"accountLoyaltyTransaction","cascade":"all","cfc":"AccountLoyaltyTransaction","fkcolumn":"orderItemID","type":"array"},"price":{"name":"price","ormtype":"big_decimal"},"printTemplates":{"name":"printTemplates","persistent":false,"type":"struct"},"estimatedFulfillmentDateTime":{"name":"estimatedFulfillmentDateTime","ormtype":"timestamp"},"taxAmount":{"name":"taxAmount","hb_formattype":"currency","persistent":false},"processObjects":{"name":"processObjects","persistent":false,"type":"struct"},"productBundleGroupPrice":{"name":"productBundleGroupPrice","hb_formattype":"currency","persistent":false},"productBundleGroup":{"name":"productBundleGroup","fieldtype":"many-to-one","hb_populateenabled":"public","cfc":"ProductBundleGroup","fkcolumn":"productBundleGroupID"},"newFlag":{"name":"newFlag","persistent":false,"type":"boolean"},"orderStatusCode":{"name":"orderStatusCode","persistent":false},"validations":{"name":"validations","persistent":false,"type":"struct"},"createdByAccountID":{"name":"createdByAccountID","ormtype":"string","hb_populateenabled":false},"appliedPriceGroup":{"name":"appliedPriceGroup","fieldtype":"many-to-one","cfc":"PriceGroup","fkcolumn":"appliedPriceGroupID"},"orderItemType":{"name":"orderItemType","fieldtype":"many-to-one","fetch":"join","hb_optionssmartlistdata":"f:parentType.systemCode=orderItemType","cfc":"Type","fkcolumn":"orderItemTypeID"},"attributeValuesByAttributeIDStruct":{"name":"attributeValuesByAttributeIDStruct","persistent":false,"type":"struct"},"estimatedDeliveryDateTime":{"name":"estimatedDeliveryDateTime","ormtype":"timestamp"},"modifiedByAccountID":{"name":"modifiedByAccountID","ormtype":"string","hb_populateenabled":false},"extendedPrice":{"name":"extendedPrice","hb_formattype":"currency","persistent":false},"skuPrice":{"name":"skuPrice","ormtype":"big_decimal"},"activeEventRegistrations":{"name":"activeEventRegistrations","persistent":false},"itemTotal":{"name":"itemTotal","hb_formattype":"currency","persistent":false},"assignedAttributeSetSmartList":{"name":"assignedAttributeSetSmartList","persistent":false,"type":"any"},"referencedOrderItem":{"name":"referencedOrderItem","fieldtype":"many-to-one","cfc":"OrderItem","fkcolumn":"referencedOrderItemID"},"taxLiabilityAmount":{"name":"taxLiabilityAmount","hb_formattype":"currency","persistent":false},"orderDeliveryItems":{"inverse":true,"name":"orderDeliveryItems","fieldtype":"one-to-many","singularname":"orderDeliveryItem","cascade":"delete-orphan","cfc":"OrderDeliveryItem","fkcolumn":"orderItemID"},"attributeValues":{"inverse":true,"name":"attributeValues","fieldtype":"one-to-many","singularname":"attributeValue","cascade":"all-delete-orphan","cfc":"AttributeValue","fkcolumn":"orderItemID"},"referencingOrderItems":{"inverse":true,"name":"referencingOrderItems","fieldtype":"one-to-many","singularname":"referencingOrderItem","cascade":"all","cfc":"OrderItem","fkcolumn":"referencedOrderItemID"},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"quantityUndelivered":{"name":"quantityUndelivered","persistent":false},"childOrderItems":{"inverse":true,"name":"childOrderItems","fieldtype":"one-to-many","singularname":"childOrderItem","hb_populateenabled":"public","cascade":"all-delete-orphan","cfc":"OrderItem","fkcolumn":"parentOrderItemID"},"sku":{"name":"sku","fieldtype":"many-to-one","fetch":"join","hb_populateenabled":"public","hb_cascadecalculate":true,"cfc":"Sku","fkcolumn":"skuID"},"persistableErrors":{"name":"persistableErrors","persistent":false,"type":"array"},"orderFulfillment":{"name":"orderFulfillment","fieldtype":"many-to-one","cfc":"OrderFulfillment","fkcolumn":"orderFulfillmentID"},"extendedPriceAfterDiscount":{"name":"extendedPriceAfterDiscount","hb_formattype":"currency","persistent":false},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"encryptedPropertiesExistFlag":{"name":"encryptedPropertiesExistFlag","persistent":false,"type":"boolean"},"appliedTaxes":{"inverse":true,"name":"appliedTaxes","fieldtype":"one-to-many","singularname":"appliedTax","cascade":"all-delete-orphan","cfc":"TaxApplied","fkcolumn":"orderItemID"},"orderItemStatusType":{"name":"orderItemStatusType","fieldtype":"many-to-one","fetch":"join","hb_optionssmartlistdata":"f:parentType.systemCode=orderItemStatusType","cfc":"Type","fkcolumn":"orderItemStatusTypeID"},"giftCards":{"inverse":true,"name":"giftCards","fieldtype":"one-to-many","singularname":"giftCard","cascade":"all","cfc":"GiftCard","fkcolumn":"originalOrderItemID","type":"array"},"publicRemoteID":{"name":"publicRemoteID","ormtype":"string","hb_populateenabled":"public"},"appliedPromotions":{"inverse":true,"name":"appliedPromotions","fieldtype":"one-to-many","singularname":"appliedPromotion","cascade":"all-delete-orphan","cfc":"PromotionApplied","fkcolumn":"orderItemID"},"orderItemID":{"generator":"uuid","name":"orderItemID","fieldtype":"id","ormtype":"string","unsavedvalue":"","length":32,"default":""},"currencyCode":{"name":"currencyCode","ormtype":"string","length":3}};
                	entities['OrderItem'].className = 'OrderItem';
                	validations['OrderItem'] = {"properties":{"orderItemType":[{"required":true,"contexts":"save"}],"sku":[{"required":true,"contexts":"save"}],"orderStatusCode":[{"inList":"ostNotPlaced,ostNew,ostProcessing,ostOnHold","contexts":"edit,delete"}],"quantity":[{"dataType":"numeric","contexts":"save","method":"hasQuantityWithinMaxOrderQuantity"},{"contexts":"save","method":"hasQuantityWithinMinOrderQuantity"}],"orderItemStatusType":[{"required":true,"contexts":"save"}]}};
                	defaultValues['OrderItem'] = {
                	orderItemID:'',
										price:null,
									skuPrice:null,
									currencyCode:null,
									quantity:null,
									estimatedDeliveryDateTime:null,
									estimatedFulfillmentDateTime:null,
									publicRemoteID:null,
									remoteID:null,
									createdDateTime:'',
										createdByAccountID:null,
									modifiedDateTime:'',
										modifiedByAccountID:null,
									
						z:''
	                };
                
                	entities['ProductBundleGroup'] = {"emailTemplates":{"name":"emailTemplates","persistent":false,"type":"struct"},"createdDateTime":{"name":"createdDateTime","ormtype":"timestamp","hb_populateenabled":false},"maximumQuantity":{"name":"maximumQuantity","ormtype":"integer","default":1,"hb_formfieldtype":"number"},"printTemplates":{"name":"printTemplates","persistent":false,"type":"struct"},"processObjects":{"name":"processObjects","persistent":false,"type":"struct"},"minimumQuantity":{"name":"minimumQuantity","ormtype":"integer","default":1,"hb_formfieldtype":"number"},"settingValueFormatted":{"name":"settingValueFormatted","persistent":false,"type":"any"},"auditSmartList":{"name":"auditSmartList","persistent":false,"type":"any"},"modifiedDateTime":{"name":"modifiedDateTime","ormtype":"timestamp","hb_populateenabled":false},"newFlag":{"name":"newFlag","persistent":false,"type":"boolean"},"validations":{"name":"validations","persistent":false,"type":"struct"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"},"createdByAccountID":{"name":"createdByAccountID","ormtype":"string","hb_populateenabled":false},"productBundleGroupID":{"generator":"uuid","name":"productBundleGroupID","fieldtype":"id","ormtype":"string","unsavedvalue":"","length":32,"default":""},"remoteID":{"name":"remoteID","ormtype":"string","hb_populateenabled":false},"modifiedByAccountID":{"name":"modifiedByAccountID","ormtype":"string","hb_populateenabled":false},"amountTypeOptions":{"name":"amountTypeOptions","persistent":false},"attributeValuesByAttributeIDStruct":{"name":"attributeValuesByAttributeIDStruct","persistent":false,"type":"struct"},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"assignedAttributeSetSmartList":{"name":"assignedAttributeSetSmartList","persistent":false,"type":"any"},"modifiedByAccount":{"name":"modifiedByAccount","persistent":false},"attributeValues":{"inverse":true,"name":"attributeValues","fieldtype":"one-to-many","singularname":"attributeValue","cascade":"all-delete-orphan","cfc":"AttributeValue","fkcolumn":"productBundleGroupID"},"amountType":{"name":"amountType","ormtype":"string","hb_formattype":"rbKey","hb_formfieldtype":"select"},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"createdByAccount":{"name":"createdByAccount","persistent":false},"simpleRepresentation":{"name":"simpleRepresentation","persistent":false,"type":"string"},"skuCollectionConfig":{"name":"skuCollectionConfig","ormtype":"string","hb_auditable":false,"length":8000,"hb_formfieldtype":"json"},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"persistableErrors":{"name":"persistableErrors","persistent":false,"type":"array"},"amount":{"name":"amount","ormtype":"big_decimal","default":0,"hb_formfieldtype":"number"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"encryptedPropertiesExistFlag":{"name":"encryptedPropertiesExistFlag","persistent":false,"type":"boolean"},"rollbackProcessedFlag":{"name":"rollbackProcessedFlag","persistent":false,"type":"boolean"},"attributeValuesByAttributeCodeStruct":{"name":"attributeValuesByAttributeCodeStruct","persistent":false,"type":"struct"},"productBundleGroupType":{"name":"productBundleGroupType","fieldtype":"many-to-one","hb_optionssmartlistdata":"f:parentType.systemCode=productBundleGroupType","cfc":"Type","fkcolumn":"productBundleGroupTypeID"},"activeFlag":{"name":"activeFlag","ormtype":"boolean","hb_formattype":"yesno"},"productBundleSku":{"name":"productBundleSku","fieldtype":"many-to-one","cfc":"Sku","fkcolumn":"productBundleSkuID"}};
                	entities['ProductBundleGroup'].className = 'ProductBundleGroup';
                	validations['ProductBundleGroup'] = {"properties":{}};
                	defaultValues['ProductBundleGroup'] = {
                	productBundleGroupID:'',
										activeFlag:1,
									minimumQuantity:1,
									maximumQuantity:1,
									amountType:null,
									amount:0,
									skuCollectionConfig:angular.fromJson('{"columns":[{"propertyIdentifier":"_sku.skuID","isVisible":true,"title":"skuID"},{"propertyIdentifier":"_sku.activeFlag","isVisible":true,"title":"Active"},{"propertyIdentifier":"_sku.publishedFlag","isVisible":true,"title":"Published"},{"propertyIdentifier":"_sku.skuName","isVisible":true,"title":"Sku Name"},{"propertyIdentifier":"_sku.skuDescription","isVisible":true,"title":"Sku Description"},{"propertyIdentifier":"_sku.skuCode","isVisible":true,"title":"SKU Code"},{"propertyIdentifier":"_sku.listPrice","isVisible":true,"title":"MSRP (List Price)"},{"propertyIdentifier":"_sku.price","isVisible":true,"title":"Price"},{"propertyIdentifier":"_sku.renewalPrice","isVisible":true,"title":"Renewal Price"}],"filterGroups":[{"filterGroup":[]}],"baseEntityName":"Sku","baseEntityAlias":"_sku"}'),
										remoteID:null,
									createdDateTime:'',
										createdByAccountID:null,
									modifiedDateTime:'',
										modifiedByAccountID:null,
									
						z:''
	                };
                
                	entities['LocationAddress'] = {"createdDateTime":{"name":"createdDateTime","ormtype":"timestamp","hb_populateenabled":false},"emailTemplates":{"name":"emailTemplates","persistent":false,"type":"struct"},"printTemplates":{"name":"printTemplates","persistent":false,"type":"struct"},"processObjects":{"name":"processObjects","persistent":false,"type":"struct"},"settingValueFormatted":{"name":"settingValueFormatted","persistent":false,"type":"any"},"auditSmartList":{"name":"auditSmartList","persistent":false,"type":"any"},"modifiedDateTime":{"name":"modifiedDateTime","ormtype":"timestamp","hb_populateenabled":false},"newFlag":{"name":"newFlag","persistent":false,"type":"boolean"},"validations":{"name":"validations","persistent":false,"type":"struct"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"},"createdByAccountID":{"name":"createdByAccountID","ormtype":"string","hb_populateenabled":false},"remoteID":{"name":"remoteID","ormtype":"string"},"attributeValuesByAttributeIDStruct":{"name":"attributeValuesByAttributeIDStruct","persistent":false,"type":"struct"},"modifiedByAccountID":{"name":"modifiedByAccountID","ormtype":"string","hb_populateenabled":false},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"locationAddressID":{"generator":"uuid","name":"locationAddressID","fieldtype":"id","ormtype":"string","unsavedvalue":"","length":32,"default":""},"assignedAttributeSetSmartList":{"name":"assignedAttributeSetSmartList","persistent":false,"type":"any"},"modifiedByAccount":{"name":"modifiedByAccount","persistent":false},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"simpleRepresentation":{"name":"simpleRepresentation","persistent":false,"type":"string"},"createdByAccount":{"name":"createdByAccount","persistent":false},"locationAddressName":{"name":"locationAddressName","ormtype":"string"},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"address":{"name":"address","fieldtype":"many-to-one","cfc":"Address","fkcolumn":"addressID","hb_populatevalidationcontext":"location"},"persistableErrors":{"name":"persistableErrors","persistent":false,"type":"array"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"encryptedPropertiesExistFlag":{"name":"encryptedPropertiesExistFlag","persistent":false,"type":"boolean"},"rollbackProcessedFlag":{"name":"rollbackProcessedFlag","persistent":false,"type":"boolean"},"attributeValuesByAttributeCodeStruct":{"name":"attributeValuesByAttributeCodeStruct","persistent":false,"type":"struct"},"location":{"name":"location","fieldtype":"many-to-one","cfc":"Location","fkcolumn":"locationID"}};
                	entities['LocationAddress'].className = 'LocationAddress';
                	validations['LocationAddress'] = {"properties":{"location":[{"required":true,"contexts":"save"}]},"populatedPropertyValidation":{"address":[{"validate":"location"}]}};
                	defaultValues['LocationAddress'] = {
                	locationAddressID:'',
										locationAddressName:null,
									remoteID:null,
									createdDateTime:'',
										createdByAccountID:null,
									modifiedDateTime:'',
										modifiedByAccountID:null,
									
						z:''
	                };
                
                	entities['VendorOrderItem'] = {"emailTemplates":{"name":"emailTemplates","persistent":false,"type":"struct"},"createdDateTime":{"name":"createdDateTime","ormtype":"timestamp","hb_populateenabled":false},"printTemplates":{"name":"printTemplates","persistent":false,"type":"struct"},"processObjects":{"name":"processObjects","persistent":false,"type":"struct"},"settingValueFormatted":{"name":"settingValueFormatted","persistent":false,"type":"any"},"auditSmartList":{"name":"auditSmartList","persistent":false,"type":"any"},"modifiedDateTime":{"name":"modifiedDateTime","ormtype":"timestamp","hb_populateenabled":false},"stock":{"name":"stock","fieldtype":"many-to-one","cfc":"Stock","fkcolumn":"stockID"},"newFlag":{"name":"newFlag","persistent":false,"type":"boolean"},"validations":{"name":"validations","persistent":false,"type":"struct"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"},"quantityUnreceived":{"name":"quantityUnreceived","persistent":false},"createdByAccountID":{"name":"createdByAccountID","ormtype":"string","hb_populateenabled":false},"remoteID":{"name":"remoteID","ormtype":"string"},"modifiedByAccountID":{"name":"modifiedByAccountID","ormtype":"string","hb_populateenabled":false},"attributeValuesByAttributeIDStruct":{"name":"attributeValuesByAttributeIDStruct","persistent":false,"type":"struct"},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"cost":{"name":"cost","ormtype":"big_decimal","hb_formattype":"currency"},"quantityReceived":{"name":"quantityReceived","persistent":false},"assignedAttributeSetSmartList":{"name":"assignedAttributeSetSmartList","persistent":false,"type":"any"},"extendedCost":{"name":"extendedCost","hb_formattype":"currency","persistent":false},"quantity":{"name":"quantity","ormtype":"integer","default":0},"vendorOrderItemType":{"name":"vendorOrderItemType","fieldtype":"many-to-one","hb_optionssmartlistdata":"f:parentType.systemCode=vendorOrderItemType","cfc":"Type","fkcolumn":"vendorOrderItemTypeID"},"modifiedByAccount":{"name":"modifiedByAccount","persistent":false},"estimatedReceivalDateTime":{"name":"estimatedReceivalDateTime","ormtype":"timestamp"},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"createdByAccount":{"name":"createdByAccount","persistent":false},"simpleRepresentation":{"name":"simpleRepresentation","persistent":false,"type":"string"},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"vendorOrder":{"name":"vendorOrder","fieldtype":"many-to-one","cfc":"VendorOrder","fkcolumn":"vendorOrderID"},"persistableErrors":{"name":"persistableErrors","persistent":false,"type":"array"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"encryptedPropertiesExistFlag":{"name":"encryptedPropertiesExistFlag","persistent":false,"type":"boolean"},"rollbackProcessedFlag":{"name":"rollbackProcessedFlag","persistent":false,"type":"boolean"},"attributeValuesByAttributeCodeStruct":{"name":"attributeValuesByAttributeCodeStruct","persistent":false,"type":"struct"},"vendorOrderItemID":{"generator":"uuid","name":"vendorOrderItemID","fieldtype":"id","ormtype":"string","unsavedvalue":"","length":32,"default":""},"stockReceiverItems":{"inverse":true,"name":"stockReceiverItems","fieldtype":"one-to-many","singularname":"stockReceiverItem","cascade":"all-delete-orphan","cfc":"StockReceiverItem","fkcolumn":"vendorOrderItemID","type":"array"},"currencyCode":{"name":"currencyCode","ormtype":"string","length":3}};
                	entities['VendorOrderItem'].className = 'VendorOrderItem';
                	validations['VendorOrderItem'] = {"properties":{"stockReceiverItems":[{"maxCollection":0,"contexts":"delete"}]}};
                	defaultValues['VendorOrderItem'] = {
                	vendorOrderItemID:'',
										quantity:0,
									cost:null,
									currencyCode:null,
									estimatedReceivalDateTime:null,
									remoteID:null,
									createdDateTime:'',
										createdByAccountID:null,
									modifiedDateTime:'',
										modifiedByAccountID:null,
									
						z:''
	                };
                
                	entities['TaskHistory'] = {"createdDateTime":{"name":"createdDateTime","ormtype":"timestamp","hb_populateenabled":false},"emailTemplates":{"name":"emailTemplates","persistent":false,"type":"struct"},"printTemplates":{"name":"printTemplates","persistent":false,"type":"struct"},"taskSchedule":{"name":"taskSchedule","fieldtype":"many-to-one","cfc":"TaskSchedule","fkcolumn":"taskScheduleID"},"processObjects":{"name":"processObjects","persistent":false,"type":"struct"},"settingValueFormatted":{"name":"settingValueFormatted","persistent":false,"type":"any"},"auditSmartList":{"name":"auditSmartList","persistent":false,"type":"any"},"modifiedDateTime":{"name":"modifiedDateTime","ormtype":"timestamp","hb_populateenabled":false},"newFlag":{"name":"newFlag","persistent":false,"type":"boolean"},"validations":{"name":"validations","persistent":false,"type":"struct"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"},"taskHistoryID":{"generator":"uuid","name":"taskHistoryID","fieldtype":"id","ormtype":"string","unsavedvalue":"","length":32,"default":""},"createdByAccountID":{"name":"createdByAccountID","ormtype":"string","hb_populateenabled":false},"remoteID":{"name":"remoteID","ormtype":"string"},"task":{"name":"task","fieldtype":"many-to-one","cfc":"Task","fkcolumn":"taskID"},"modifiedByAccountID":{"name":"modifiedByAccountID","ormtype":"string","hb_populateenabled":false},"attributeValuesByAttributeIDStruct":{"name":"attributeValuesByAttributeIDStruct","persistent":false,"type":"struct"},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"assignedAttributeSetSmartList":{"name":"assignedAttributeSetSmartList","persistent":false,"type":"any"},"duration":{"name":"duration","hb_formattype":"second","persistent":false},"modifiedByAccount":{"name":"modifiedByAccount","persistent":false},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"createdByAccount":{"name":"createdByAccount","persistent":false},"simpleRepresentation":{"name":"simpleRepresentation","persistent":false,"type":"string"},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"persistableErrors":{"name":"persistableErrors","persistent":false,"type":"array"},"startTime":{"name":"startTime","ormtype":"timestamp"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"encryptedPropertiesExistFlag":{"name":"encryptedPropertiesExistFlag","persistent":false,"type":"boolean"},"rollbackProcessedFlag":{"name":"rollbackProcessedFlag","persistent":false,"type":"boolean"},"attributeValuesByAttributeCodeStruct":{"name":"attributeValuesByAttributeCodeStruct","persistent":false,"type":"struct"},"successFlag":{"name":"successFlag","ormtype":"boolean"},"response":{"name":"response","ormtype":"string"},"endTime":{"name":"endTime","ormtype":"timestamp"}};
                	entities['TaskHistory'].className = 'TaskHistory';
                	validations['TaskHistory'] = {"properties":{}};
                	defaultValues['TaskHistory'] = {
                	taskHistoryID:'',
										successFlag:null,
									response:null,
									startTime:null,
									endTime:null,
									remoteID:null,
									createdDateTime:'',
										createdByAccountID:null,
									modifiedDateTime:'',
										modifiedByAccountID:null,
									
						z:''
	                };
                
                	entities['ProductBundleBuildItem'] = {"createdDateTime":{"name":"createdDateTime","ormtype":"timestamp","hb_populateenabled":false},"emailTemplates":{"name":"emailTemplates","persistent":false,"type":"struct"},"printTemplates":{"name":"printTemplates","persistent":false,"type":"struct"},"processObjects":{"name":"processObjects","persistent":false,"type":"struct"},"settingValueFormatted":{"name":"settingValueFormatted","persistent":false,"type":"any"},"auditSmartList":{"name":"auditSmartList","persistent":false,"type":"any"},"modifiedDateTime":{"name":"modifiedDateTime","ormtype":"timestamp","hb_populateenabled":false},"productBundleGroup":{"name":"productBundleGroup","fieldtype":"many-to-one","cfc":"ProductBundleGroup","fkcolumn":"productBundleGroupID"},"newFlag":{"name":"newFlag","persistent":false,"type":"boolean"},"validations":{"name":"validations","persistent":false,"type":"struct"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"},"createdByAccountID":{"name":"createdByAccountID","ormtype":"string","hb_populateenabled":false},"remoteID":{"name":"remoteID","ormtype":"string","hb_populateenabled":false},"attributeValuesByAttributeIDStruct":{"name":"attributeValuesByAttributeIDStruct","persistent":false,"type":"struct"},"modifiedByAccountID":{"name":"modifiedByAccountID","ormtype":"string","hb_populateenabled":false},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"assignedAttributeSetSmartList":{"name":"assignedAttributeSetSmartList","persistent":false,"type":"any"},"productBundleBuild":{"name":"productBundleBuild","fieldtype":"many-to-one","cfc":"ProductBundleBuild","fkcolumn":"productBundleBuildID"},"quantity":{"name":"quantity","ormtype":"integer"},"modifiedByAccount":{"name":"modifiedByAccount","persistent":false},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"simpleRepresentation":{"name":"simpleRepresentation","persistent":false,"type":"string"},"createdByAccount":{"name":"createdByAccount","persistent":false},"sku":{"name":"sku","fieldtype":"many-to-one","cfc":"Sku","fkcolumn":"skuID"},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"persistableErrors":{"name":"persistableErrors","persistent":false,"type":"array"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"encryptedPropertiesExistFlag":{"name":"encryptedPropertiesExistFlag","persistent":false,"type":"boolean"},"rollbackProcessedFlag":{"name":"rollbackProcessedFlag","persistent":false,"type":"boolean"},"attributeValuesByAttributeCodeStruct":{"name":"attributeValuesByAttributeCodeStruct","persistent":false,"type":"struct"},"productBundleBuildItemID":{"generator":"uuid","name":"productBundleBuildItemID","fieldtype":"id","ormtype":"string","unsavedvalue":"","length":32,"default":""}};
                	entities['ProductBundleBuildItem'].className = 'ProductBundleBuildItem';
                	validations['ProductBundleBuildItem'] = {"properties":{}};
                	defaultValues['ProductBundleBuildItem'] = {
                	productBundleBuildItemID:'',
										quantity:null,
									remoteID:null,
									createdDateTime:'',
										createdByAccountID:null,
									modifiedDateTime:'',
										modifiedByAccountID:null,
									
						z:''
	                };
                
                	entities['CurrencyRate'] = {"createdDateTime":{"name":"createdDateTime","ormtype":"timestamp","hb_populateenabled":false},"emailTemplates":{"name":"emailTemplates","persistent":false,"type":"struct"},"printTemplates":{"name":"printTemplates","persistent":false,"type":"struct"},"conversionCurrencyCode":{"update":false,"name":"conversionCurrencyCode","insert":false,"length":255},"processObjects":{"name":"processObjects","persistent":false,"type":"struct"},"settingValueFormatted":{"name":"settingValueFormatted","persistent":false,"type":"any"},"auditSmartList":{"name":"auditSmartList","persistent":false,"type":"any"},"effectiveStartDateTime":{"hb_nullrbkey":"define.now","name":"effectiveStartDateTime","ormtype":"timestamp"},"modifiedDateTime":{"name":"modifiedDateTime","ormtype":"timestamp","hb_populateenabled":false},"newFlag":{"name":"newFlag","persistent":false,"type":"boolean"},"validations":{"name":"validations","persistent":false,"type":"struct"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"},"createdByAccountID":{"name":"createdByAccountID","ormtype":"string","hb_populateenabled":false},"conversionRate":{"name":"conversionRate","ormtype":"float"},"remoteID":{"name":"remoteID","ormtype":"string","hb_populateenabled":false},"currencyRateID":{"generator":"uuid","name":"currencyRateID","fieldtype":"id","ormtype":"string","unsavedvalue":"","length":32,"default":""},"modifiedByAccountID":{"name":"modifiedByAccountID","ormtype":"string","hb_populateenabled":false},"attributeValuesByAttributeIDStruct":{"name":"attributeValuesByAttributeIDStruct","persistent":false,"type":"struct"},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"assignedAttributeSetSmartList":{"name":"assignedAttributeSetSmartList","persistent":false,"type":"any"},"modifiedByAccount":{"name":"modifiedByAccount","persistent":false},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"createdByAccount":{"name":"createdByAccount","persistent":false},"simpleRepresentation":{"name":"simpleRepresentation","persistent":false,"type":"string"},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"persistableErrors":{"name":"persistableErrors","persistent":false,"type":"array"},"conversionCurrency":{"name":"conversionCurrency","fieldtype":"many-to-one","length":255,"cfc":"Currency","fkcolumn":"conversionCurrencyCode"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"encryptedPropertiesExistFlag":{"name":"encryptedPropertiesExistFlag","persistent":false,"type":"boolean"},"rollbackProcessedFlag":{"name":"rollbackProcessedFlag","persistent":false,"type":"boolean"},"attributeValuesByAttributeCodeStruct":{"name":"attributeValuesByAttributeCodeStruct","persistent":false,"type":"struct"},"currency":{"name":"currency","fieldtype":"many-to-one","length":255,"cfc":"Currency","fkcolumn":"currencyCode"},"currencyCode":{"update":false,"name":"currencyCode","insert":false,"length":255}};
                	entities['CurrencyRate'].className = 'CurrencyRate';
                	validations['CurrencyRate'] = {"properties":{"conversionRate":[{"dataType":"numeric","required":true,"contexts":"save"}],"currency":[{"required":true,"contexts":"save"}],"effectiveStartDateTime":[{"gtNow":true,"contexts":"save"}],"conversionCurrency":[{"required":true,"contexts":"save"}]}};
                	defaultValues['CurrencyRate'] = {
                	currencyRateID:'',
										conversionRate:null,
									effectiveStartDateTime:null,
									currencyCode:null,
									conversionCurrencyCode:null,
									remoteID:null,
									createdDateTime:'',
										createdByAccountID:null,
									modifiedDateTime:'',
										modifiedByAccountID:null,
									
						z:''
	                };
                
                	entities['CommentRelationship'] = {"referencedExpressionProperty":{"name":"referencedExpressionProperty","ormtype":"string","hb_populateenabled":false},"referencedRelationshipFlag":{"name":"referencedRelationshipFlag","ormtype":"boolean","hb_populateenabled":false,"default":false},"emailTemplates":{"name":"emailTemplates","persistent":false,"type":"struct"},"printTemplates":{"name":"printTemplates","persistent":false,"type":"struct"},"processObjects":{"name":"processObjects","persistent":false,"type":"struct"},"settingValueFormatted":{"name":"settingValueFormatted","persistent":false,"type":"any"},"auditSmartList":{"name":"auditSmartList","persistent":false,"type":"any"},"orderItem":{"name":"orderItem","fieldtype":"many-to-one","cfc":"OrderItem","fkcolumn":"orderItemID"},"order":{"name":"order","fieldtype":"many-to-one","cfc":"Order","fkcolumn":"orderID"},"newFlag":{"name":"newFlag","persistent":false,"type":"boolean"},"validations":{"name":"validations","persistent":false,"type":"struct"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"},"account":{"name":"account","fieldtype":"many-to-one","cfc":"Account","fkcolumn":"accountID"},"referencedExpressionValue":{"name":"referencedExpressionValue","ormtype":"string","hb_populateenabled":false},"attributeValuesByAttributeIDStruct":{"name":"attributeValuesByAttributeIDStruct","persistent":false,"type":"struct"},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"commentRelationshipID":{"generator":"uuid","name":"commentRelationshipID","fieldtype":"id","ormtype":"string","unsavedvalue":"","length":32,"default":""},"assignedAttributeSetSmartList":{"name":"assignedAttributeSetSmartList","persistent":false,"type":"any"},"modifiedByAccount":{"name":"modifiedByAccount","persistent":false},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"createdByAccount":{"name":"createdByAccount","persistent":false},"simpleRepresentation":{"name":"simpleRepresentation","persistent":false,"type":"string"},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"vendorOrder":{"name":"vendorOrder","fieldtype":"many-to-one","cfc":"VendorOrder","fkcolumn":"vendorOrderID"},"persistableErrors":{"name":"persistableErrors","persistent":false,"type":"array"},"stockAdjustment":{"name":"stockAdjustment","fieldtype":"many-to-one","cfc":"StockAdjustment","fkcolumn":"stockAdjustmentID"},"product":{"name":"product","fieldtype":"many-to-one","cfc":"Product","fkcolumn":"productID"},"referencedExpressionStart":{"name":"referencedExpressionStart","ormtype":"integer","hb_populateenabled":false},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"encryptedPropertiesExistFlag":{"name":"encryptedPropertiesExistFlag","persistent":false,"type":"boolean"},"rollbackProcessedFlag":{"name":"rollbackProcessedFlag","persistent":false,"type":"boolean"},"attributeValuesByAttributeCodeStruct":{"name":"attributeValuesByAttributeCodeStruct","persistent":false,"type":"struct"},"referencedExpressionEntity":{"name":"referencedExpressionEntity","ormtype":"string","hb_populateenabled":false},"physical":{"name":"physical","fieldtype":"many-to-one","cfc":"Physical","fkcolumn":"physicalID"},"comment":{"name":"comment","fieldtype":"many-to-one","cfc":"Comment","fkcolumn":"commentID"},"referencedExpressionEnd":{"name":"referencedExpressionEnd","ormtype":"integer","hb_populateenabled":false}};
                	entities['CommentRelationship'].className = 'CommentRelationship';
                	validations['CommentRelationship'] = {"properties":{}};
                	defaultValues['CommentRelationship'] = {
                	commentRelationshipID:'',
										referencedRelationshipFlag:false,
									referencedExpressionStart:null,
									referencedExpressionEnd:null,
									referencedExpressionEntity:null,
									referencedExpressionProperty:null,
									referencedExpressionValue:null,
									
						z:''
	                };
                
                	entities['Category'] = {"emailTemplates":{"name":"emailTemplates","persistent":false,"type":"struct"},"createdDateTime":{"name":"createdDateTime","ormtype":"timestamp","hb_populateenabled":false},"printTemplates":{"name":"printTemplates","persistent":false,"type":"struct"},"processObjects":{"name":"processObjects","persistent":false,"type":"struct"},"settingValueFormatted":{"name":"settingValueFormatted","persistent":false,"type":"any"},"auditSmartList":{"name":"auditSmartList","persistent":false,"type":"any"},"categoryID":{"generator":"uuid","name":"categoryID","fieldtype":"id","ormtype":"string","unsavedvalue":"","length":32,"default":""},"modifiedDateTime":{"name":"modifiedDateTime","ormtype":"timestamp","hb_populateenabled":false},"newFlag":{"name":"newFlag","persistent":false,"type":"boolean"},"validations":{"name":"validations","persistent":false,"type":"struct"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"},"restrictAccessFlag":{"name":"restrictAccessFlag","ormtype":"boolean"},"site":{"name":"site","fieldtype":"many-to-one","cfc":"Site","fkcolumn":"siteID"},"createdByAccountID":{"name":"createdByAccountID","ormtype":"string","hb_populateenabled":false},"remoteID":{"name":"remoteID","ormtype":"string","hint":"Only used when integrated with a remote system"},"modifiedByAccountID":{"name":"modifiedByAccountID","ormtype":"string","hb_populateenabled":false},"attributeValuesByAttributeIDStruct":{"name":"attributeValuesByAttributeIDStruct","persistent":false,"type":"struct"},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"categoryIDPath":{"name":"categoryIDPath","ormtype":"string","length":4000},"assignedAttributeSetSmartList":{"name":"assignedAttributeSetSmartList","persistent":false,"type":"any"},"modifiedByAccount":{"name":"modifiedByAccount","persistent":false},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"createdByAccount":{"name":"createdByAccount","persistent":false},"simpleRepresentation":{"name":"simpleRepresentation","persistent":false,"type":"string"},"contents":{"inverse":true,"name":"contents","fieldtype":"many-to-many","singularname":"content","inversejoincolumn":"contentID","cfc":"Content","fkcolumn":"categoryID","type":"array","linktable":"SwContentCategory"},"products":{"inverse":true,"name":"products","fieldtype":"many-to-many","singularname":"product","inversejoincolumn":"productID","cfc":"Product","fkcolumn":"categoryID","linktable":"SwProductCategory"},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"persistableErrors":{"name":"persistableErrors","persistent":false,"type":"array"},"childCategories":{"inverse":true,"name":"childCategories","fieldtype":"one-to-many","singularname":"childCategory","cascade":"all-delete-orphan","cfc":"Category","fkcolumn":"parentCategoryID","type":"array"},"categoryName":{"name":"categoryName","ormtype":"string"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"cmsCategoryID":{"index":"RI_CMSCATEGORYID","name":"cmsCategoryID","ormtype":"string"},"encryptedPropertiesExistFlag":{"name":"encryptedPropertiesExistFlag","persistent":false,"type":"boolean"},"rollbackProcessedFlag":{"name":"rollbackProcessedFlag","persistent":false,"type":"boolean"},"allowProductAssignmentFlag":{"name":"allowProductAssignmentFlag","ormtype":"boolean"},"attributeValuesByAttributeCodeStruct":{"name":"attributeValuesByAttributeCodeStruct","persistent":false,"type":"struct"},"parentCategory":{"name":"parentCategory","fieldtype":"many-to-one","cfc":"Category","fkcolumn":"parentCategoryID"}};
                	entities['Category'].className = 'Category';
                	validations['Category'] = {"properties":{}};
                	defaultValues['Category'] = {
                	categoryID:'',
										categoryIDPath:null,
									categoryName:null,
									restrictAccessFlag:null,
									allowProductAssignmentFlag:null,
									cmsCategoryID:null,
									remoteID:null,
									createdDateTime:'',
										createdByAccountID:null,
									modifiedDateTime:'',
										modifiedByAccountID:null,
									
						z:''
	                };
                
                	entities['PromotionAccount'] = {"createdDateTime":{"name":"createdDateTime","ormtype":"timestamp","hb_populateenabled":false},"emailTemplates":{"name":"emailTemplates","persistent":false,"type":"struct"},"printTemplates":{"name":"printTemplates","persistent":false,"type":"struct"},"processObjects":{"name":"processObjects","persistent":false,"type":"struct"},"settingValueFormatted":{"name":"settingValueFormatted","persistent":false,"type":"any"},"auditSmartList":{"name":"auditSmartList","persistent":false,"type":"any"},"modifiedDateTime":{"name":"modifiedDateTime","ormtype":"timestamp","hb_populateenabled":false},"newFlag":{"name":"newFlag","persistent":false,"type":"boolean"},"validations":{"name":"validations","persistent":false,"type":"struct"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"},"account":{"name":"account","fieldtype":"many-to-one","cfc":"Account","fkcolumn":"accountID"},"createdByAccountID":{"name":"createdByAccountID","ormtype":"string","hb_populateenabled":false},"attributeValuesByAttributeIDStruct":{"name":"attributeValuesByAttributeIDStruct","persistent":false,"type":"struct"},"modifiedByAccountID":{"name":"modifiedByAccountID","ormtype":"string","hb_populateenabled":false},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"startDateTime":{"name":"startDateTime","ormtype":"timestamp"},"assignedAttributeSetSmartList":{"name":"assignedAttributeSetSmartList","persistent":false,"type":"any"},"promotionAccountID":{"generator":"uuid","name":"promotionAccountID","fieldtype":"id","ormtype":"string","unsavedvalue":"","length":32,"default":""},"modifiedByAccount":{"name":"modifiedByAccount","persistent":false},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"simpleRepresentation":{"name":"simpleRepresentation","persistent":false,"type":"string"},"createdByAccount":{"name":"createdByAccount","persistent":false},"promotion":{"name":"promotion","fieldtype":"many-to-one","cfc":"Promotion","fkcolumn":"promotionID"},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"persistableErrors":{"name":"persistableErrors","persistent":false,"type":"array"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"encryptedPropertiesExistFlag":{"name":"encryptedPropertiesExistFlag","persistent":false,"type":"boolean"},"rollbackProcessedFlag":{"name":"rollbackProcessedFlag","persistent":false,"type":"boolean"},"attributeValuesByAttributeCodeStruct":{"name":"attributeValuesByAttributeCodeStruct","persistent":false,"type":"struct"},"endDateTime":{"name":"endDateTime","ormtype":"timestamp"}};
                	entities['PromotionAccount'].className = 'PromotionAccount';
                	validations['PromotionAccount'] = {"properties":{}};
                	defaultValues['PromotionAccount'] = {
                	promotionAccountID:'',
										startDateTime:null,
									endDateTime:null,
									createdDateTime:'',
										createdByAccountID:null,
									modifiedDateTime:'',
										modifiedByAccountID:null,
									
						z:''
	                };
                
                	entities['EventRegistration'] = {"registrantAttendanceCode":{"unique":true,"name":"registrantAttendanceCode","ormtype":"string","hint":"Unique code to track registrant attendance","length":8},"attendedFlag":{"name":"attendedFlag","persistent":false},"emailTemplates":{"name":"emailTemplates","persistent":false,"type":"struct"},"createdDateTime":{"name":"createdDateTime","ormtype":"timestamp","hb_populateenabled":false},"printTemplates":{"name":"printTemplates","persistent":false,"type":"struct"},"processObjects":{"name":"processObjects","persistent":false,"type":"struct"},"settingValueFormatted":{"name":"settingValueFormatted","persistent":false,"type":"any"},"eventRegistrationStatusType":{"name":"eventRegistrationStatusType","fieldtype":"many-to-one","hb_optionssmartlistdata":"f:parentType.systemCode=eventRegistrationStatusType","cfc":"Type","fkcolumn":"eventRegistrationStatusTypeID"},"auditSmartList":{"name":"auditSmartList","persistent":false,"type":"any"},"orderItem":{"name":"orderItem","fieldtype":"many-to-one","cfc":"OrderItem","fkcolumn":"orderItemID"},"modifiedDateTime":{"name":"modifiedDateTime","ormtype":"timestamp","hb_populateenabled":false},"eventRegistrationID":{"generator":"uuid","name":"eventRegistrationID","fieldtype":"id","ormtype":"string","unsavedvalue":"","length":32,"default":""},"newFlag":{"name":"newFlag","persistent":false,"type":"boolean"},"validations":{"name":"validations","persistent":false,"type":"struct"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"},"account":{"name":"account","fieldtype":"many-to-one","cfc":"Account","fkcolumn":"accountID"},"productName":{"name":"productName","persistent":false},"firstName":{"name":"firstName","ormtype":"string","hb_populateenabled":"public"},"remoteID":{"name":"remoteID","ormtype":"string"},"attributeValuesByAttributeIDStruct":{"name":"attributeValuesByAttributeIDStruct","persistent":false,"type":"struct"},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"pendingClaimDateTime":{"name":"pendingClaimDateTime","ormtype":"timestamp","hb_formattype":"dateTime","hint":"Datetime registrant was changed to pending claim."},"assignedAttributeSetSmartList":{"name":"assignedAttributeSetSmartList","persistent":false,"type":"any"},"registrationStatusTitle":{"name":"registrationStatusTitle","persistent":false},"emailAddress":{"name":"emailAddress","ormtype":"string","hb_populateenabled":"public"},"modifiedByAccount":{"name":"modifiedByAccount","persistent":false},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"simpleRepresentation":{"name":"simpleRepresentation","persistent":false,"type":"string"},"createdByAccount":{"name":"createdByAccount","persistent":false},"sku":{"name":"sku","fieldtype":"many-to-one","cfc":"Sku","fkcolumn":"skuID"},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"persistableErrors":{"name":"persistableErrors","persistent":false,"type":"array"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"encryptedPropertiesExistFlag":{"name":"encryptedPropertiesExistFlag","persistent":false,"type":"boolean"},"rollbackProcessedFlag":{"name":"rollbackProcessedFlag","persistent":false,"type":"boolean"},"waitlistQueueDateTime":{"name":"waitlistQueueDateTime","ormtype":"timestamp","hb_formattype":"dateTime","hint":"Datetime registrant was added to waitlist."},"attributeValuesByAttributeCodeStruct":{"name":"attributeValuesByAttributeCodeStruct","persistent":false,"type":"struct"},"phoneNumber":{"name":"phoneNumber","ormtype":"string"},"waitlistQueuePositionStruct":{"name":"waitlistQueuePositionStruct","persistent":false},"lastName":{"name":"lastName","ormtype":"string","hb_populateenabled":"public"}};
                	entities['EventRegistration'].className = 'EventRegistration';
                	validations['EventRegistration'] = {"properties":{}};
                	defaultValues['EventRegistration'] = {
                	eventRegistrationID:'',
										firstName:null,
									lastName:null,
									emailAddress:null,
									phoneNumber:null,
									waitlistQueueDateTime:null,
									pendingClaimDateTime:null,
									registrantAttendanceCode:null,
									remoteID:null,
									createdDateTime:'',
										modifiedDateTime:'',
										
						z:''
	                };
                
                	entities['EventRegistration_Approve'] = {"populatedFlag":{"name":"populatedFlag"},"eventRegistration":{"name":"eventRegistration"},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"preProcessDisplayedFlag":{"name":"preProcessDisplayedFlag"},"comment":{"name":"comment"},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"validations":{"name":"validations","persistent":false,"type":"struct"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"}};
                	entities['EventRegistration_Approve'].className = 'EventRegistration_Approve';
                	validations['EventRegistration_Approve'] = {"properties":{}};
                	defaultValues['EventRegistration_Approve'] = {
                	eventRegistration:'',
										comment:'',
									preProcessDisplayedFlag:0,
										populatedFlag:0,
										
						z:''
	                };
                
                	entities['EventRegistration_Attend'] = {"populatedFlag":{"name":"populatedFlag"},"eventRegistration":{"name":"eventRegistration"},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"preProcessDisplayedFlag":{"name":"preProcessDisplayedFlag"},"comment":{"name":"comment"},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"validations":{"name":"validations","persistent":false,"type":"struct"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"}};
                	entities['EventRegistration_Attend'].className = 'EventRegistration_Attend';
                	validations['EventRegistration_Attend'] = {"properties":{}};
                	defaultValues['EventRegistration_Attend'] = {
                	eventRegistration:'',
										comment:'',
									preProcessDisplayedFlag:0,
										populatedFlag:0,
										
						z:''
	                };
                
                	entities['EventRegistration_Cancel'] = {"populatedFlag":{"name":"populatedFlag"},"eventRegistration":{"name":"eventRegistration"},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"createReturnOrderFlag":{"name":"createReturnOrderFlag","hint":"Instructs order return process whether it should perform return.","type":"boolean"},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"preProcessDisplayedFlag":{"name":"preProcessDisplayedFlag"},"comment":{"name":"comment"},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"validations":{"name":"validations","persistent":false,"type":"struct"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"}};
                	entities['EventRegistration_Cancel'].className = 'EventRegistration_Cancel';
                	validations['EventRegistration_Cancel'] = {"properties":{}};
                	defaultValues['EventRegistration_Cancel'] = {
                	eventRegistration:'',
										createReturnOrderFlag:false,
										comment:'',
									preProcessDisplayedFlag:0,
										populatedFlag:0,
										
						z:''
	                };
                
                	entities['EventRegistration_Pending'] = {"populatedFlag":{"name":"populatedFlag"},"eventRegistration":{"name":"eventRegistration"},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"preProcessDisplayedFlag":{"name":"preProcessDisplayedFlag"},"comment":{"name":"comment"},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"validations":{"name":"validations","persistent":false,"type":"struct"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"}};
                	entities['EventRegistration_Pending'].className = 'EventRegistration_Pending';
                	validations['EventRegistration_Pending'] = {"properties":{}};
                	defaultValues['EventRegistration_Pending'] = {
                	eventRegistration:'',
										comment:'',
									preProcessDisplayedFlag:0,
										populatedFlag:0,
										
						z:''
	                };
                
                	entities['EventRegistration_Register'] = {"populatedFlag":{"name":"populatedFlag"},"eventRegistration":{"name":"eventRegistration"},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"preProcessDisplayedFlag":{"name":"preProcessDisplayedFlag"},"comment":{"name":"comment"},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"validations":{"name":"validations","persistent":false,"type":"struct"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"}};
                	entities['EventRegistration_Register'].className = 'EventRegistration_Register';
                	validations['EventRegistration_Register'] = {"properties":{}};
                	defaultValues['EventRegistration_Register'] = {
                	eventRegistration:'',
										comment:'',
									preProcessDisplayedFlag:0,
										populatedFlag:0,
										
						z:''
	                };
                
                	entities['EventRegistration_Waitlist'] = {"populatedFlag":{"name":"populatedFlag"},"eventRegistration":{"name":"eventRegistration"},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"preProcessDisplayedFlag":{"name":"preProcessDisplayedFlag"},"comment":{"name":"comment"},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"validations":{"name":"validations","persistent":false,"type":"struct"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"}};
                	entities['EventRegistration_Waitlist'].className = 'EventRegistration_Waitlist';
                	validations['EventRegistration_Waitlist'] = {"properties":{}};
                	defaultValues['EventRegistration_Waitlist'] = {
                	eventRegistration:'',
										comment:'',
									preProcessDisplayedFlag:0,
										populatedFlag:0,
										
						z:''
	                };
                
                	entities['Content'] = {"childContents":{"inverse":true,"name":"childContents","fieldtype":"one-to-many","singularname":"childContent","cascade":"all-delete-orphan","cfc":"Content","fkcolumn":"parentContentID","type":"array"},"createdDateTime":{"name":"createdDateTime","ormtype":"timestamp","hb_populateenabled":false},"emailTemplates":{"name":"emailTemplates","persistent":false,"type":"struct"},"sortOrder":{"name":"sortOrder","ormtype":"integer"},"contentID":{"generator":"uuid","name":"contentID","fieldtype":"id","ormtype":"string","unsavedvalue":"","length":32,"default":""},"assetsPath":{"name":"assetsPath","persistent":false},"settingValueFormatted":{"name":"settingValueFormatted","persistent":false,"type":"any"},"auditSmartList":{"name":"auditSmartList","persistent":false,"type":"any"},"modifiedDateTime":{"name":"modifiedDateTime","ormtype":"timestamp","hb_populateenabled":false},"sharedAssetsPath":{"name":"sharedAssetsPath","persistent":false},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"},"titlePath":{"name":"titlePath","ormtype":"string","length":4000},"remoteID":{"name":"remoteID","ormtype":"string","hint":"Only used when integrated with a remote system"},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"listingProducts":{"inverse":true,"name":"listingProducts","fieldtype":"many-to-many","singularname":"listingProduct","inversejoincolumn":"productID","cfc":"Product","fkcolumn":"contentID","type":"array","linktable":"SwProductListingPage"},"cmsContentID":{"index":"RI_CMSCONTENTID","name":"cmsContentID","ormtype":"string"},"modifiedByAccount":{"name":"modifiedByAccount","persistent":false},"createdByAccount":{"name":"createdByAccount","persistent":false},"simpleRepresentation":{"name":"simpleRepresentation","persistent":false,"type":"string"},"productListingPageFlag":{"name":"productListingPageFlag","ormtype":"boolean"},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"excludeFromSearch":{"name":"excludeFromSearch","ormtype":"boolean"},"categoryIDList":{"name":"categoryIDList","persistent":false},"rollbackProcessedFlag":{"name":"rollbackProcessedFlag","persistent":false,"type":"boolean"},"attributeValuesByAttributeCodeStruct":{"name":"attributeValuesByAttributeCodeStruct","persistent":false,"type":"struct"},"contentTemplateType":{"name":"contentTemplateType","fieldtype":"many-to-one","fetch":"join","hb_optionssmartlistdata":"f:parentType.systemCode=contentTemplateType","cfc":"Type","hb_optionsnullrbkey":"define.none","fkcolumn":"contentTemplateTypeID"},"allDescendants":{"name":"allDescendants","persistent":false},"disableProductAssignmentFlag":{"name":"disableProductAssignmentFlag","ormtype":"boolean"},"cmsContentIDPath":{"name":"cmsContentIDPath","ormtype":"string","length":500},"printTemplates":{"name":"printTemplates","persistent":false,"type":"struct"},"contentIDPath":{"name":"contentIDPath","ormtype":"string","length":4000},"processObjects":{"name":"processObjects","persistent":false,"type":"struct"},"newFlag":{"name":"newFlag","persistent":false,"type":"boolean"},"validations":{"name":"validations","persistent":false,"type":"struct"},"site":{"name":"site","fieldtype":"many-to-one","hb_cascadecalculate":true,"cfc":"Site","hb_formfieldtype":"select","fkcolumn":"siteID"},"createdByAccountID":{"name":"createdByAccountID","ormtype":"string","hb_populateenabled":false},"urlTitlePath":{"name":"urlTitlePath","ormtype":"string","length":8000},"allowPurchaseFlag":{"name":"allowPurchaseFlag","ormtype":"boolean"},"modifiedByAccountID":{"name":"modifiedByAccountID","ormtype":"string","hb_populateenabled":false},"templateFlag":{"name":"templateFlag","ormtype":"boolean"},"cmsSiteID":{"name":"cmsSiteID","ormtype":"string"},"attributeValuesByAttributeIDStruct":{"name":"attributeValuesByAttributeIDStruct","persistent":false,"type":"struct"},"displayInNavigation":{"name":"displayInNavigation","ormtype":"boolean"},"assignedAttributeSetSmartList":{"name":"assignedAttributeSetSmartList","persistent":false,"type":"any"},"attributeSets":{"inverse":true,"name":"attributeSets","fieldtype":"many-to-many","singularname":"attributeSet","inversejoincolumn":"attributeSetID","cfc":"AttributeSet","fkcolumn":"contentID","type":"array","linktable":"SwAttributeSetContent"},"attributeValues":{"inverse":true,"name":"attributeValues","fieldtype":"one-to-many","singularname":"attributeValue","cascade":"all-delete-orphan","cfc":"AttributeValue","fkcolumn":"contentID"},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"siteOptions":{"name":"siteOptions","persistent":false},"persistableErrors":{"name":"persistableErrors","persistent":false,"type":"array"},"skus":{"inverse":true,"name":"skus","fieldtype":"many-to-many","singularname":"sku","inversejoincolumn":"skuID","cfc":"Sku","fkcolumn":"contentID","type":"array","linktable":"SwSkuAccessContent"},"contentBody":{"name":"contentBody","ormtype":"string","length":8000},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"encryptedPropertiesExistFlag":{"name":"encryptedPropertiesExistFlag","persistent":false,"type":"boolean"},"urlTitle":{"name":"urlTitle","ormtype":"string","length":4000},"parentContent":{"name":"parentContent","fieldtype":"many-to-one","cfc":"Content","fkcolumn":"parentContentID"},"categories":{"name":"categories","fieldtype":"many-to-many","singularname":"category","inversejoincolumn":"categoryID","cfc":"Category","fkcolumn":"contentID","linktable":"SwContentCategory","type":"array"},"activeFlag":{"name":"activeFlag","ormtype":"boolean"},"title":{"name":"title","ormtype":"string"}};
                	entities['Content'].className = 'Content';
                	validations['Content'] = {"properties":{"site":[{"required":true,"contexts":"save"}],"urlTitlePath":[{"contexts":"save","conditions":"isSlatwallCMS","method":"isUniqueUrlTitlePathBySite"}],"urlTitle":[{"required":true,"contexts":"save,create","conditions":"requireUrlTitle"},{"regex":"^[A-Za-z0-9-]+$","contexts":"save","conditions":"notNewContent"}],"contentID":[{"required":true,"contexts":"save","conditions":"notSlatwallCMS"}],"contentTemplateFile":[{"required":true,"contexts":"save","conditions":"isSlatwallCMS"}]},"conditions":{"notNewContent":{"site.app.integration.integrationPackage":{"eq":"slatwallcms"},"parentContent":{"null":false},"newFlag":{"eq":false}},"requireUrlTitle":{"site.app.integration.integrationPackage":{"eq":"slatwallcms"},"parentContent":{"required":true}},"topLevelContent":{"parentContent":{"null":true}},"isSlatwallCMS":{"site.app.integration.integrationPackage":{"eq":"slatwallcms"}},"notSlatwallCMS":{"site.app":{"null":true}}}};
                	defaultValues['Content'] = {
                	contentID:'',
										contentIDPath:'',
										activeFlag:1,
									title:null,
									titlePath:'',
										allowPurchaseFlag:0,
									productListingPageFlag:0,
									urlTitle:null,
									urlTitlePath:null,
									contentBody:null,
									displayInNavigation:1,
									excludeFromSearch:0,
									sortOrder:0,
									cmsContentID:null,
									remoteID:null,
									createdDateTime:'',
										createdByAccountID:null,
									modifiedDateTime:'',
										modifiedByAccountID:null,
									disableProductAssignmentFlag:null,
									templateFlag:null,
									cmsSiteID:null,
									cmsContentIDPath:null,
									
						z:''
	                };
                
                	entities['Content_CreateSku'] = {"price":{"name":"price"},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"productCode":{"name":"productCode"},"skuCode":{"name":"skuCode"},"sku":{"name":"sku"},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"preProcessDisplayedFlag":{"name":"preProcessDisplayedFlag"},"skuID":{"name":"skuID"},"product":{"name":"product"},"validations":{"name":"validations","persistent":false,"type":"struct"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"},"productID":{"name":"productID"},"populatedFlag":{"name":"populatedFlag"},"content":{"name":"content"},"productTypeID":{"name":"productTypeID"},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"skuName":{"name":"skuName"}};
                	entities['Content_CreateSku'].className = 'Content_CreateSku';
                	validations['Content_CreateSku'] = {"properties":{"price":[{"dataType":"numeric","minValue":0,"required":true,"conditions":"skuIsNewFlag"}],"productCode":[{"required":true}],"productTypeID":[{"required":true}]},"conditions":{"skuIsNewFlag":{"sku.newFlag":{"eq":true}}}};
                	defaultValues['Content_CreateSku'] = {
                	content:'',
										product:'',
										sku:'',
										productID:"",
										productTypeID:'',
									skuID:"",
										price:'',
									productCode:'',
									skuCode:-1,
										skuName:'',
									preProcessDisplayedFlag:0,
										populatedFlag:0,
										
						z:''
	                };
                
                	entities['Task'] = {"emailTemplates":{"name":"emailTemplates","persistent":false,"type":"struct"},"createdDateTime":{"name":"createdDateTime","ormtype":"timestamp","hb_populateenabled":false},"taskMethodOptions":{"name":"taskMethodOptions","persistent":false},"printTemplates":{"name":"printTemplates","persistent":false,"type":"struct"},"processObjects":{"name":"processObjects","persistent":false,"type":"struct"},"settingValueFormatted":{"name":"settingValueFormatted","persistent":false,"type":"any"},"auditSmartList":{"name":"auditSmartList","persistent":false,"type":"any"},"modifiedDateTime":{"name":"modifiedDateTime","ormtype":"timestamp","hb_populateenabled":false},"newFlag":{"name":"newFlag","persistent":false,"type":"boolean"},"validations":{"name":"validations","persistent":false,"type":"struct"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"},"taskUrl":{"name":"taskUrl","ormtype":"string"},"createdByAccountID":{"name":"createdByAccountID","ormtype":"string","hb_populateenabled":false},"runningFlag":{"name":"runningFlag","ormtype":"boolean","hb_formattype":"yesno"},"remoteID":{"name":"remoteID","ormtype":"string"},"modifiedByAccountID":{"name":"modifiedByAccountID","ormtype":"string","hb_populateenabled":false},"attributeValuesByAttributeIDStruct":{"name":"attributeValuesByAttributeIDStruct","persistent":false,"type":"struct"},"taskName":{"name":"taskName","ormtype":"string"},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"assignedAttributeSetSmartList":{"name":"assignedAttributeSetSmartList","persistent":false,"type":"any"},"taskHistories":{"inverse":true,"name":"taskHistories","fieldtype":"one-to-many","singularname":"taskHistory","cascade":"all-delete-orphan","cfc":"TaskHistory","fkcolumn":"taskID","type":"array"},"taskConfig":{"name":"taskConfig","ormtype":"string","length":4000},"modifiedByAccount":{"name":"modifiedByAccount","persistent":false},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"createdByAccount":{"name":"createdByAccount","persistent":false},"simpleRepresentation":{"name":"simpleRepresentation","persistent":false,"type":"string"},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"persistableErrors":{"name":"persistableErrors","persistent":false,"type":"array"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"encryptedPropertiesExistFlag":{"name":"encryptedPropertiesExistFlag","persistent":false,"type":"boolean"},"taskMethod":{"name":"taskMethod","ormtype":"string","hb_formattype":"rbKey","hb_formfieldtype":"select"},"rollbackProcessedFlag":{"name":"rollbackProcessedFlag","persistent":false,"type":"boolean"},"attributeValuesByAttributeCodeStruct":{"name":"attributeValuesByAttributeCodeStruct","persistent":false,"type":"struct"},"taskSchedules":{"inverse":true,"name":"taskSchedules","fieldtype":"one-to-many","singularname":"taskSchedule","cascade":"all-delete-orphan","cfc":"TaskSchedule","fkcolumn":"taskID","type":"array"},"taskID":{"generator":"uuid","name":"taskID","fieldtype":"id","ormtype":"string","unsavedvalue":"","length":32,"default":""},"activeFlag":{"name":"activeFlag","ormtype":"boolean","hb_formattype":"yesno"},"timeout":{"name":"timeout","ormtype":"integer"}};
                	entities['Task'].className = 'Task';
                	validations['Task'] = {"properties":{"taskName":[{"required":true,"contexts":"save"}],"taskMethod":[{"required":true,"contexts":"save"}]}};
                	defaultValues['Task'] = {
                	taskID:'',
										activeFlag:1,
									taskName:null,
									taskMethod:null,
									taskUrl:null,
									taskConfig:null,
									runningFlag:null,
									timeout:null,
									remoteID:null,
									createdDateTime:'',
										createdByAccountID:null,
									modifiedDateTime:'',
										modifiedByAccountID:null,
									
						z:''
	                };
                
                	entities['WorkflowTrigger'] = {"createdDateTime":{"name":"createdDateTime","ormtype":"timestamp","hb_populateenabled":false},"emailTemplates":{"name":"emailTemplates","persistent":false,"type":"struct"},"printTemplates":{"name":"printTemplates","persistent":false,"type":"struct"},"processObjects":{"name":"processObjects","persistent":false,"type":"struct"},"settingValueFormatted":{"name":"settingValueFormatted","persistent":false,"type":"any"},"auditSmartList":{"name":"auditSmartList","persistent":false,"type":"any"},"triggerType":{"name":"triggerType","ormtype":"string"},"modifiedDateTime":{"name":"modifiedDateTime","ormtype":"timestamp","hb_populateenabled":false},"workflowTriggerID":{"generator":"uuid","name":"workflowTriggerID","fieldtype":"id","ormtype":"string","unsavedvalue":"","length":32,"default":""},"schedule":{"name":"schedule","fieldtype":"many-to-one","cfc":"Schedule","fkcolumn":"scheduleID"},"newFlag":{"name":"newFlag","persistent":false,"type":"boolean"},"validations":{"name":"validations","persistent":false,"type":"struct"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"},"createdByAccountID":{"name":"createdByAccountID","ormtype":"string","hb_populateenabled":false},"scheduleCollection":{"name":"scheduleCollection","fieldtype":"many-to-one","cfc":"Collection","fkcolumn":"scheduleCollectionID"},"remoteID":{"name":"remoteID","ormtype":"string","hb_populateenabled":false},"modifiedByAccountID":{"name":"modifiedByAccountID","ormtype":"string","hb_populateenabled":false},"attributeValuesByAttributeIDStruct":{"name":"attributeValuesByAttributeIDStruct","persistent":false,"type":"struct"},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"assignedAttributeSetSmartList":{"name":"assignedAttributeSetSmartList","persistent":false,"type":"any"},"modifiedByAccount":{"name":"modifiedByAccount","persistent":false},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"createdByAccount":{"name":"createdByAccount","persistent":false},"simpleRepresentation":{"name":"simpleRepresentation","persistent":false,"type":"string"},"objectPropertyIdentifier":{"name":"objectPropertyIdentifier","ormtype":"string"},"triggerEvent":{"name":"triggerEvent","ormtype":"string"},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"persistableErrors":{"name":"persistableErrors","persistent":false,"type":"array"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"encryptedPropertiesExistFlag":{"name":"encryptedPropertiesExistFlag","persistent":false,"type":"boolean"},"rollbackProcessedFlag":{"name":"rollbackProcessedFlag","persistent":false,"type":"boolean"},"attributeValuesByAttributeCodeStruct":{"name":"attributeValuesByAttributeCodeStruct","persistent":false,"type":"struct"},"workflow":{"name":"workflow","fieldtype":"many-to-one","cfc":"Workflow","fkcolumn":"workflowID"}};
                	entities['WorkflowTrigger'].className = 'WorkflowTrigger';
                	validations['WorkflowTrigger'] = {"properties":{}};
                	defaultValues['WorkflowTrigger'] = {
                	workflowTriggerID:'',
										triggerType:null,
									objectPropertyIdentifier:null,
									triggerEvent:null,
									remoteID:null,
									createdDateTime:'',
										createdByAccountID:null,
									modifiedDateTime:'',
										modifiedByAccountID:null,
									
						z:''
	                };
                
                	entities['File'] = {"emailTemplates":{"name":"emailTemplates","persistent":false,"type":"struct"},"createdDateTime":{"name":"createdDateTime","ormtype":"timestamp","hb_populateenabled":false},"printTemplates":{"name":"printTemplates","persistent":false,"type":"struct"},"processObjects":{"name":"processObjects","persistent":false,"type":"struct"},"settingValueFormatted":{"name":"settingValueFormatted","persistent":false,"type":"any"},"auditSmartList":{"name":"auditSmartList","persistent":false,"type":"any"},"fileDescription":{"name":"fileDescription","ormtype":"string","length":4000,"hb_formfieldtype":"wysiwyg"},"modifiedDateTime":{"name":"modifiedDateTime","ormtype":"timestamp","hb_populateenabled":false},"fileType":{"name":"fileType","ormtype":"string"},"newFlag":{"name":"newFlag","persistent":false,"type":"boolean"},"validations":{"name":"validations","persistent":false,"type":"struct"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"},"createdByAccountID":{"name":"createdByAccountID","ormtype":"string","hb_populateenabled":false},"filePath":{"name":"filePath","persistent":false,"setter":false,"type":"string"},"remoteID":{"name":"remoteID","ormtype":"string"},"modifiedByAccountID":{"name":"modifiedByAccountID","ormtype":"string","hb_populateenabled":false},"attributeValuesByAttributeIDStruct":{"name":"attributeValuesByAttributeIDStruct","persistent":false,"type":"struct"},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"assignedAttributeSetSmartList":{"name":"assignedAttributeSetSmartList","persistent":false,"type":"any"},"fileUpload":{"name":"fileUpload","persistent":false,"hb_formfieldtype":"file","type":"string"},"modifiedByAccount":{"name":"modifiedByAccount","persistent":false},"attributeValues":{"inverse":true,"name":"attributeValues","fieldtype":"one-to-many","singularname":"attributeValue","cascade":"all-delete-orphan","cfc":"AttributeValue","fkcolumn":"fileID"},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"createdByAccount":{"name":"createdByAccount","persistent":false},"simpleRepresentation":{"name":"simpleRepresentation","persistent":false,"type":"string"},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"persistableErrors":{"name":"persistableErrors","persistent":false,"type":"array"},"fileName":{"name":"fileName","ormtype":"string"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"encryptedPropertiesExistFlag":{"name":"encryptedPropertiesExistFlag","persistent":false,"type":"boolean"},"rollbackProcessedFlag":{"name":"rollbackProcessedFlag","persistent":false,"type":"boolean"},"attributeValuesByAttributeCodeStruct":{"name":"attributeValuesByAttributeCodeStruct","persistent":false,"type":"struct"},"urlTitle":{"name":"urlTitle","ormtype":"string"},"fileRelationships":{"inverse":true,"name":"fileRelationships","fieldtype":"one-to-many","singularname":"FileRelationship","fetch":"join","cascade":"all-delete-orphan","cfc":"FileRelationship","fkcolumn":"fileID","type":"array"},"mimeType":{"name":"mimeType","ormtype":"string"},"activeFlag":{"name":"activeFlag","ormtype":"boolean"},"fileID":{"generator":"uuid","name":"fileID","fieldtype":"id","ormtype":"string","unsavedvalue":"","length":32,"default":""}};
                	entities['File'].className = 'File';
                	validations['File'] = {"properties":{"urlTitle":[{"required":true,"contexts":"save"}],"fileRelationships":[{"maxCollection":0,"contexts":"delete"}],"fileName":[{"required":true,"contexts":"save"}],"fileUpload":[{"required":true,"contexts":"save","conditions":"isNewFile"}]},"conditions":{"isNewFile":{"newFlag":{"eq":true}}}};
                	defaultValues['File'] = {
                	fileID:'',
										activeFlag:1,
									fileType:null,
									mimeType:null,
									fileName:null,
									fileDescription:null,
									urlTitle:null,
									remoteID:null,
									createdDateTime:'',
										createdByAccountID:null,
									modifiedDateTime:'',
										modifiedByAccountID:null,
									
						z:''
	                };
                
                	entities['ShippingMethodOption'] = {"totalShippingWeight":{"name":"totalShippingWeight","ormtype":"string"},"createdDateTime":{"name":"createdDateTime","ormtype":"timestamp","hb_populateenabled":false},"shippingMethodRate":{"name":"shippingMethodRate","fieldtype":"many-to-one","cfc":"ShippingMethodRate","fkcolumn":"shippingMethodRateID"},"emailTemplates":{"name":"emailTemplates","persistent":false,"type":"struct"},"printTemplates":{"name":"printTemplates","persistent":false,"type":"struct"},"processObjects":{"name":"processObjects","persistent":false,"type":"struct"},"settingValueFormatted":{"name":"settingValueFormatted","persistent":false,"type":"any"},"auditSmartList":{"name":"auditSmartList","persistent":false,"type":"any"},"newFlag":{"name":"newFlag","persistent":false,"type":"boolean"},"validations":{"name":"validations","persistent":false,"type":"struct"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"},"shipToCity":{"name":"shipToCity","ormtype":"string"},"shipToCountryCode":{"name":"shipToCountryCode","ormtype":"string"},"createdByAccountID":{"name":"createdByAccountID","ormtype":"string","hb_populateenabled":false},"totalCharge":{"name":"totalCharge","ormtype":"big_decimal","hb_formattype":"currency"},"attributeValuesByAttributeIDStruct":{"name":"attributeValuesByAttributeIDStruct","persistent":false,"type":"struct"},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"assignedAttributeSetSmartList":{"name":"assignedAttributeSetSmartList","persistent":false,"type":"any"},"shipToPostalCode":{"name":"shipToPostalCode","ormtype":"string"},"shipToStateCode":{"name":"shipToStateCode","ormtype":"string"},"modifiedByAccount":{"name":"modifiedByAccount","persistent":false},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"createdByAccount":{"name":"createdByAccount","persistent":false},"simpleRepresentation":{"name":"simpleRepresentation","persistent":false,"type":"string"},"totalChargeAfterDiscount":{"name":"totalChargeAfterDiscount","hb_formattype":"currency","persistent":false},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"persistableErrors":{"name":"persistableErrors","persistent":false,"type":"array"},"orderFulfillment":{"name":"orderFulfillment","fieldtype":"many-to-one","cfc":"OrderFulfillment","fkcolumn":"orderFulfillmentID"},"totalShippingItemPrice":{"name":"totalShippingItemPrice","ormtype":"string"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"encryptedPropertiesExistFlag":{"name":"encryptedPropertiesExistFlag","persistent":false,"type":"boolean"},"discountAmountDetails":{"name":"discountAmountDetails","persistent":false},"rollbackProcessedFlag":{"name":"rollbackProcessedFlag","persistent":false,"type":"boolean"},"attributeValuesByAttributeCodeStruct":{"name":"attributeValuesByAttributeCodeStruct","persistent":false,"type":"struct"},"shippingMethodOptionID":{"generator":"uuid","name":"shippingMethodOptionID","fieldtype":"id","ormtype":"string","unsavedvalue":"","length":32,"default":""},"currencyCode":{"name":"currencyCode","ormtype":"string","length":3}};
                	entities['ShippingMethodOption'].className = 'ShippingMethodOption';
                	validations['ShippingMethodOption'] = {"properties":{}};
                	defaultValues['ShippingMethodOption'] = {
                	shippingMethodOptionID:'',
										totalCharge:null,
									currencyCode:null,
									totalShippingWeight:null,
									totalShippingItemPrice:null,
									shipToPostalCode:null,
									shipToStateCode:null,
									shipToCountryCode:null,
									shipToCity:null,
									createdDateTime:'',
										createdByAccountID:null,
									
						z:''
	                };
                
                	entities['Email'] = {"createdDateTime":{"name":"createdDateTime","ormtype":"timestamp","hb_populateenabled":false},"emailTemplates":{"name":"emailTemplates","persistent":false,"type":"struct"},"printTemplates":{"name":"printTemplates","persistent":false,"type":"struct"},"processObjects":{"name":"processObjects","persistent":false,"type":"struct"},"settingValueFormatted":{"name":"settingValueFormatted","persistent":false,"type":"any"},"auditSmartList":{"name":"auditSmartList","persistent":false,"type":"any"},"voidSendFlag":{"name":"voidSendFlag","persistent":false},"newFlag":{"name":"newFlag","persistent":false,"type":"boolean"},"validations":{"name":"validations","persistent":false,"type":"struct"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"},"emailID":{"generator":"uuid","name":"emailID","fieldtype":"id","ormtype":"string","unsavedvalue":"","length":32,"default":""},"createdByAccountID":{"name":"createdByAccountID","ormtype":"string","hb_populateenabled":false},"emailCC":{"name":"emailCC","ormtype":"string","hb_populateenabled":"public"},"emailBCC":{"name":"emailBCC","ormtype":"string","hb_populateenabled":"public"},"remoteID":{"name":"remoteID","ormtype":"string"},"emailSubject":{"name":"emailSubject","ormtype":"string","hb_populateenabled":"public"},"attributeValuesByAttributeIDStruct":{"name":"attributeValuesByAttributeIDStruct","persistent":false,"type":"struct"},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"assignedAttributeSetSmartList":{"name":"assignedAttributeSetSmartList","persistent":false,"type":"any"},"emailTo":{"name":"emailTo","ormtype":"string","hb_populateenabled":"public"},"modifiedByAccount":{"name":"modifiedByAccount","persistent":false},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"createdByAccount":{"name":"createdByAccount","persistent":false},"simpleRepresentation":{"name":"simpleRepresentation","persistent":false,"type":"string"},"emailBodyHTML":{"name":"emailBodyHTML","ormtype":"string","hb_populateenabled":"public","length":4000},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"emailBodyText":{"name":"emailBodyText","ormtype":"string","hb_populateenabled":"public","length":4000},"persistableErrors":{"name":"persistableErrors","persistent":false,"type":"array"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"encryptedPropertiesExistFlag":{"name":"encryptedPropertiesExistFlag","persistent":false,"type":"boolean"},"logEmailFlag":{"name":"logEmailFlag","persistent":false},"rollbackProcessedFlag":{"name":"rollbackProcessedFlag","persistent":false,"type":"boolean"},"emailFrom":{"name":"emailFrom","ormtype":"string","hb_populateenabled":"public"},"attributeValuesByAttributeCodeStruct":{"name":"attributeValuesByAttributeCodeStruct","persistent":false,"type":"struct"}};
                	entities['Email'].className = 'Email';
                	validations['Email'] = {"properties":{"emailName":[{"required":true,"contexts":"save"}]}};
                	defaultValues['Email'] = {
                	emailID:'',
										emailTo:null,
									emailFrom:null,
									emailCC:null,
									emailBCC:null,
									emailSubject:null,
									emailBodyHTML:null,
									emailBodyText:null,
									remoteID:null,
									createdDateTime:'',
										createdByAccountID:null,
									
						z:''
	                };
                
                	entities['Integration'] = {"createdDateTime":{"name":"createdDateTime","ormtype":"timestamp","hb_populateenabled":false},"emailTemplates":{"name":"emailTemplates","persistent":false,"type":"struct"},"printTemplates":{"name":"printTemplates","persistent":false,"type":"struct"},"enabledFlag":{"name":"enabledFlag","persistent":false,"type":"boolean"},"processObjects":{"name":"processObjects","persistent":false,"type":"struct"},"settingValueFormatted":{"name":"settingValueFormatted","persistent":false,"type":"any"},"auditSmartList":{"name":"auditSmartList","persistent":false,"type":"any"},"modifiedDateTime":{"name":"modifiedDateTime","ormtype":"timestamp","hb_populateenabled":false},"integrationTypeList":{"name":"integrationTypeList","ormtype":"string"},"newFlag":{"name":"newFlag","persistent":false,"type":"boolean"},"validations":{"name":"validations","persistent":false,"type":"struct"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"},"createdByAccountID":{"name":"createdByAccountID","ormtype":"string","hb_populateenabled":false},"modifiedByAccountID":{"name":"modifiedByAccountID","ormtype":"string","hb_populateenabled":false},"attributeValuesByAttributeIDStruct":{"name":"attributeValuesByAttributeIDStruct","persistent":false,"type":"struct"},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"installedFlag":{"name":"installedFlag","ormtype":"boolean"},"integrationID":{"generator":"uuid","name":"integrationID","fieldtype":"id","ormtype":"string","unsavedvalue":"","length":32,"default":""},"assignedAttributeSetSmartList":{"name":"assignedAttributeSetSmartList","persistent":false,"type":"any"},"apps":{"inverse":true,"name":"apps","fieldtype":"one-to-many","singularname":"app","cfc":"App","fkcolumn":"integrationID","type":"array"},"modifiedByAccount":{"name":"modifiedByAccount","persistent":false},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"createdByAccount":{"name":"createdByAccount","persistent":false},"integrationPackage":{"unique":true,"name":"integrationPackage","ormtype":"string"},"simpleRepresentation":{"name":"simpleRepresentation","persistent":false,"type":"string"},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"persistableErrors":{"name":"persistableErrors","persistent":false,"type":"array"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"integrationName":{"name":"integrationName","ormtype":"string"},"encryptedPropertiesExistFlag":{"name":"encryptedPropertiesExistFlag","persistent":false,"type":"boolean"},"rollbackProcessedFlag":{"name":"rollbackProcessedFlag","persistent":false,"type":"boolean"},"attributeValuesByAttributeCodeStruct":{"name":"attributeValuesByAttributeCodeStruct","persistent":false,"type":"struct"},"activeFlag":{"name":"activeFlag","ormtype":"boolean"}};
                	entities['Integration'].className = 'Integration';
                	validations['Integration'] = {"properties":{"integrationPackage":[{"required":true,"contexts":"save"}]}};
                	defaultValues['Integration'] = {
                	integrationID:'',
										activeFlag:0,
									installedFlag:null,
									integrationPackage:null,
									integrationName:null,
									integrationTypeList:null,
									createdDateTime:'',
										createdByAccountID:null,
									modifiedDateTime:'',
										modifiedByAccountID:null,
									
						z:''
	                };
                
                	entities['PromotionQualifier'] = {"createdDateTime":{"name":"createdDateTime","ormtype":"timestamp","hb_populateenabled":false},"emailTemplates":{"name":"emailTemplates","persistent":false,"type":"struct"},"brands":{"name":"brands","fieldtype":"many-to-many","singularname":"brand","inversejoincolumn":"brandID","cfc":"Brand","fkcolumn":"promotionQualifierID","linktable":"SwPromoQualBrand"},"settingValueFormatted":{"name":"settingValueFormatted","persistent":false,"type":"any"},"auditSmartList":{"name":"auditSmartList","persistent":false,"type":"any"},"modifiedDateTime":{"name":"modifiedDateTime","ormtype":"timestamp","hb_populateenabled":false},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"},"minimumItemQuantity":{"hb_nullrbkey":"define.0","name":"minimumItemQuantity","ormtype":"integer"},"excludedProductTypes":{"name":"excludedProductTypes","fieldtype":"many-to-many","singularname":"excludedProductType","inversejoincolumn":"productTypeID","cfc":"ProductType","fkcolumn":"promotionQualifierID","linktable":"SwPromoQualExclProductType"},"remoteID":{"name":"remoteID","ormtype":"string"},"excludedBrands":{"name":"excludedBrands","fieldtype":"many-to-many","singularname":"excludedBrand","inversejoincolumn":"brandID","cfc":"Brand","fkcolumn":"promotionQualifierID","linktable":"SwPromoQualExclBrand","type":"array"},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"qualifierType":{"name":"qualifierType","ormtype":"string","hb_formattype":"rbKey"},"modifiedByAccount":{"name":"modifiedByAccount","persistent":false},"simpleRepresentation":{"name":"simpleRepresentation","persistent":false,"type":"string"},"createdByAccount":{"name":"createdByAccount","persistent":false},"products":{"name":"products","fieldtype":"many-to-many","singularname":"product","inversejoincolumn":"productID","cfc":"Product","fkcolumn":"promotionQualifierID","linktable":"SwPromoQualProduct"},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"minimumOrderSubtotal":{"hb_nullrbkey":"define.0","name":"minimumOrderSubtotal","ormtype":"big_decimal","hb_formattype":"currency"},"promotionQualifierID":{"generator":"uuid","name":"promotionQualifierID","fieldtype":"id","ormtype":"string","unsavedvalue":"","length":32,"default":""},"excludedSkus":{"name":"excludedSkus","fieldtype":"many-to-many","singularname":"excludedSku","inversejoincolumn":"skuID","cfc":"Sku","fkcolumn":"promotionQualifierID","linktable":"SwPromoQualExclSku"},"fulfillmentMethods":{"name":"fulfillmentMethods","fieldtype":"many-to-many","singularname":"fulfillmentMethod","inversejoincolumn":"fulfillmentMethodID","cfc":"FulfillmentMethod","fkcolumn":"promotionQualifierID","linktable":"SwPromoQualFulfillmentMethod"},"rollbackProcessedFlag":{"name":"rollbackProcessedFlag","persistent":false,"type":"boolean"},"shippingAddressZones":{"name":"shippingAddressZones","fieldtype":"many-to-many","singularname":"shippingAddressZone","inversejoincolumn":"addressZoneID","cfc":"AddressZone","fkcolumn":"promotionQualifierID","linktable":"SwPromoQualShipAddressZone"},"attributeValuesByAttributeCodeStruct":{"name":"attributeValuesByAttributeCodeStruct","persistent":false,"type":"struct"},"qualifierApplicationTypeOptions":{"name":"qualifierApplicationTypeOptions","persistent":false,"type":"array"},"excludedOptions":{"name":"excludedOptions","fieldtype":"many-to-many","singularname":"excludedOption","inversejoincolumn":"optionID","cfc":"Option","fkcolumn":"promotionQualifierID","linktable":"SwPromoQualExclOption","type":"array"},"rewardMatchingType":{"name":"rewardMatchingType","ormtype":"string","hb_formattype":"rbKey","hb_formfieldtype":"select"},"productTypes":{"name":"productTypes","fieldtype":"many-to-many","singularname":"productType","inversejoincolumn":"productTypeID","cfc":"ProductType","fkcolumn":"promotionQualifierID","linktable":"SwPromoQualProductType"},"maximumFulfillmentWeight":{"hb_nullrbkey":"define.unlimited","name":"maximumFulfillmentWeight","ormtype":"big_decimal","hb_formattype":"weight"},"promotionPeriod":{"name":"promotionPeriod","fieldtype":"many-to-one","cfc":"PromotionPeriod","fkcolumn":"promotionPeriodID"},"printTemplates":{"name":"printTemplates","persistent":false,"type":"struct"},"processObjects":{"name":"processObjects","persistent":false,"type":"struct"},"newFlag":{"name":"newFlag","persistent":false,"type":"boolean"},"validations":{"name":"validations","persistent":false,"type":"struct"},"minimumItemPrice":{"hb_nullrbkey":"define.0","name":"minimumItemPrice","ormtype":"big_decimal","hb_formattype":"currency"},"createdByAccountID":{"name":"createdByAccountID","ormtype":"string","hb_populateenabled":false},"maximumOrderSubtotal":{"hb_nullrbkey":"define.unlimited","name":"maximumOrderSubtotal","ormtype":"big_decimal","hb_formattype":"currency"},"shippingMethods":{"name":"shippingMethods","fieldtype":"many-to-many","singularname":"shippingMethod","inversejoincolumn":"shippingMethodID","cfc":"ShippingMethod","fkcolumn":"promotionQualifierID","linktable":"SwPromoQualShippingMethod"},"modifiedByAccountID":{"name":"modifiedByAccountID","ormtype":"string","hb_populateenabled":false},"attributeValuesByAttributeIDStruct":{"name":"attributeValuesByAttributeIDStruct","persistent":false,"type":"struct"},"assignedAttributeSetSmartList":{"name":"assignedAttributeSetSmartList","persistent":false,"type":"any"},"maximumItemPrice":{"hb_nullrbkey":"define.unlimited","name":"maximumItemPrice","ormtype":"big_decimal","hb_formattype":"currency"},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"persistableErrors":{"name":"persistableErrors","persistent":false,"type":"array"},"skus":{"name":"skus","fieldtype":"many-to-many","singularname":"sku","inversejoincolumn":"skuID","cfc":"Sku","fkcolumn":"promotionQualifierID","linktable":"SwPromoQualSku"},"maximumItemQuantity":{"hb_nullrbkey":"define.unlimited","name":"maximumItemQuantity","ormtype":"integer"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"minimumOrderQuantity":{"hb_nullrbkey":"define.0","name":"minimumOrderQuantity","ormtype":"integer"},"encryptedPropertiesExistFlag":{"name":"encryptedPropertiesExistFlag","persistent":false,"type":"boolean"},"minimumFulfillmentWeight":{"hb_nullrbkey":"define.0","name":"minimumFulfillmentWeight","ormtype":"big_decimal","hb_formattype":"weight"},"maximumOrderQuantity":{"hb_nullrbkey":"define.unlimited","name":"maximumOrderQuantity","ormtype":"integer"},"excludedProducts":{"name":"excludedProducts","fieldtype":"many-to-many","singularname":"excludedProduct","inversejoincolumn":"productID","cfc":"Product","fkcolumn":"promotionQualifierID","linktable":"SwPromoQualExclProduct"},"options":{"name":"options","fieldtype":"many-to-many","singularname":"option","inversejoincolumn":"optionID","cfc":"Option","fkcolumn":"promotionQualifierID","linktable":"SwPromoQualOption"}};
                	entities['PromotionQualifier'].className = 'PromotionQualifier';
                	validations['PromotionQualifier'] = {"properties":{}};
                	defaultValues['PromotionQualifier'] = {
                	promotionQualifierID:'',
										qualifierType:null,
									minimumOrderQuantity:null,
									maximumOrderQuantity:null,
									minimumOrderSubtotal:null,
									maximumOrderSubtotal:null,
									minimumItemQuantity:null,
									maximumItemQuantity:null,
									minimumItemPrice:null,
									maximumItemPrice:null,
									minimumFulfillmentWeight:null,
									maximumFulfillmentWeight:null,
									rewardMatchingType:null,
									remoteID:null,
									createdDateTime:'',
										createdByAccountID:null,
									modifiedDateTime:'',
										modifiedByAccountID:null,
									
						z:''
	                };
                
                	entities['PermissionGroup'] = {"createdDateTime":{"name":"createdDateTime","ormtype":"timestamp","hb_populateenabled":false},"emailTemplates":{"name":"emailTemplates","persistent":false,"type":"struct"},"printTemplates":{"name":"printTemplates","persistent":false,"type":"struct"},"permissionGroupID":{"generator":"uuid","name":"permissionGroupID","fieldtype":"id","ormtype":"string","unsavedvalue":"","length":32,"default":""},"processObjects":{"name":"processObjects","persistent":false,"type":"struct"},"settingValueFormatted":{"name":"settingValueFormatted","persistent":false,"type":"any"},"auditSmartList":{"name":"auditSmartList","persistent":false,"type":"any"},"modifiedDateTime":{"name":"modifiedDateTime","ormtype":"timestamp","hb_populateenabled":false},"newFlag":{"name":"newFlag","persistent":false,"type":"boolean"},"validations":{"name":"validations","persistent":false,"type":"struct"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"},"permissionsByDetails":{"name":"permissionsByDetails","persistent":false},"createdByAccountID":{"name":"createdByAccountID","ormtype":"string","hb_populateenabled":false},"accounts":{"inverse":true,"name":"accounts","fieldtype":"many-to-many","singularname":"account","inversejoincolumn":"accountID","cfc":"Account","fkcolumn":"permissionGroupID","linktable":"SwAccountPermissionGroup"},"permissionGroupName":{"name":"permissionGroupName","ormtype":"string"},"attributeValuesByAttributeIDStruct":{"name":"attributeValuesByAttributeIDStruct","persistent":false,"type":"struct"},"modifiedByAccountID":{"name":"modifiedByAccountID","ormtype":"string","hb_populateenabled":false},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"assignedAttributeSetSmartList":{"name":"assignedAttributeSetSmartList","persistent":false,"type":"any"},"modifiedByAccount":{"name":"modifiedByAccount","persistent":false},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"simpleRepresentation":{"name":"simpleRepresentation","persistent":false,"type":"string"},"createdByAccount":{"name":"createdByAccount","persistent":false},"permissions":{"inverse":true,"name":"permissions","fieldtype":"one-to-many","singularname":"permission","cascade":"all-delete-orphan","cfc":"Permission","fkcolumn":"permissionGroupID","type":"array"},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"persistableErrors":{"name":"persistableErrors","persistent":false,"type":"array"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"encryptedPropertiesExistFlag":{"name":"encryptedPropertiesExistFlag","persistent":false,"type":"boolean"},"rollbackProcessedFlag":{"name":"rollbackProcessedFlag","persistent":false,"type":"boolean"},"attributeValuesByAttributeCodeStruct":{"name":"attributeValuesByAttributeCodeStruct","persistent":false,"type":"struct"}};
                	entities['PermissionGroup'].className = 'PermissionGroup';
                	validations['PermissionGroup'] = {"properties":{}};
                	defaultValues['PermissionGroup'] = {
                	permissionGroupID:'',
										permissionGroupName:null,
									createdDateTime:'',
										createdByAccountID:null,
									modifiedDateTime:'',
										modifiedByAccountID:null,
									
						z:''
	                };
                
                	entities['AccountPhoneNumber'] = {"createdDateTime":{"name":"createdDateTime","ormtype":"timestamp","hb_populateenabled":false},"emailTemplates":{"name":"emailTemplates","persistent":false,"type":"struct"},"printTemplates":{"name":"printTemplates","persistent":false,"type":"struct"},"processObjects":{"name":"processObjects","persistent":false,"type":"struct"},"settingValueFormatted":{"name":"settingValueFormatted","persistent":false,"type":"any"},"accountPhoneType":{"name":"accountPhoneType","fieldtype":"many-to-one","hb_populateenabled":"public","hb_optionssmartlistdata":"f:parentType.systemCode=accountPhoneType","cfc":"Type","hb_optionsnullrbkey":"define.select","fkcolumn":"accountPhoneTypeID"},"auditSmartList":{"name":"auditSmartList","persistent":false,"type":"any"},"modifiedDateTime":{"name":"modifiedDateTime","ormtype":"timestamp","hb_populateenabled":false},"newFlag":{"name":"newFlag","persistent":false,"type":"boolean"},"validations":{"name":"validations","persistent":false,"type":"struct"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"},"account":{"name":"account","fieldtype":"many-to-one","cfc":"Account","fkcolumn":"accountID"},"createdByAccountID":{"name":"createdByAccountID","ormtype":"string","hb_populateenabled":false},"attributeValuesByAttributeIDStruct":{"name":"attributeValuesByAttributeIDStruct","persistent":false,"type":"struct"},"modifiedByAccountID":{"name":"modifiedByAccountID","ormtype":"string","hb_populateenabled":false},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"assignedAttributeSetSmartList":{"name":"assignedAttributeSetSmartList","persistent":false,"type":"any"},"modifiedByAccount":{"name":"modifiedByAccount","persistent":false},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"simpleRepresentation":{"name":"simpleRepresentation","persistent":false,"type":"string"},"createdByAccount":{"name":"createdByAccount","persistent":false},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"persistableErrors":{"name":"persistableErrors","persistent":false,"type":"array"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"encryptedPropertiesExistFlag":{"name":"encryptedPropertiesExistFlag","persistent":false,"type":"boolean"},"rollbackProcessedFlag":{"name":"rollbackProcessedFlag","persistent":false,"type":"boolean"},"attributeValuesByAttributeCodeStruct":{"name":"attributeValuesByAttributeCodeStruct","persistent":false,"type":"struct"},"phoneNumber":{"name":"phoneNumber","hb_populateenabled":"public","type":"string"},"accountPhoneNumberID":{"generator":"uuid","name":"accountPhoneNumberID","fieldtype":"id","ormtype":"string","unsavedvalue":"","length":32,"default":""}};
                	entities['AccountPhoneNumber'].className = 'AccountPhoneNumber';
                	validations['AccountPhoneNumber'] = {"properties":{"phoneNumber":[{"required":true,"contexts":"save"}]}};
                	defaultValues['AccountPhoneNumber'] = {
                	accountPhoneNumberID:'',
										phoneNumber:null,
									createdDateTime:'',
										createdByAccountID:null,
									modifiedDateTime:'',
										modifiedByAccountID:null,
									
						z:''
	                };
                
                	entities['OrderItemGiftRecipient'] = {"createdDateTime":{"name":"createdDateTime","ormtype":"timestamp","hb_populateenabled":false},"emailTemplates":{"name":"emailTemplates","persistent":false,"type":"struct"},"printTemplates":{"name":"printTemplates","persistent":false,"type":"struct"},"processObjects":{"name":"processObjects","persistent":false,"type":"struct"},"settingValueFormatted":{"name":"settingValueFormatted","persistent":false,"type":"any"},"auditSmartList":{"name":"auditSmartList","persistent":false,"type":"any"},"orderItem":{"name":"orderItem","fieldtype":"many-to-one","cfc":"OrderItem","fkcolumn":"orderItemID"},"modifiedDateTime":{"name":"modifiedDateTime","ormtype":"timestamp","hb_populateenabled":false},"newFlag":{"name":"newFlag","persistent":false,"type":"boolean"},"validations":{"name":"validations","persistent":false,"type":"struct"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"},"account":{"name":"account","fieldtype":"many-to-one","cfc":"Account","fkcolumn":"accountID"},"createdByAccountID":{"name":"createdByAccountID","ormtype":"string","hb_populateenabled":false},"firstName":{"name":"firstName","ormtype":"string"},"orderItemGiftRecipientID":{"generator":"uuid","name":"orderItemGiftRecipientID","fieldtype":"id","ormtype":"string","unsavedvalue":"","length":32,"default":""},"remoteID":{"name":"remoteID","ormtype":"string"},"modifiedByAccountID":{"name":"modifiedByAccountID","ormtype":"string","hb_populateenabled":false},"attributeValuesByAttributeIDStruct":{"name":"attributeValuesByAttributeIDStruct","persistent":false,"type":"struct"},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"assignedAttributeSetSmartList":{"name":"assignedAttributeSetSmartList","persistent":false,"type":"any"},"quantity":{"name":"quantity","ormtype":"integer"},"emailAddress":{"name":"emailAddress","ormtype":"string"},"modifiedByAccount":{"name":"modifiedByAccount","persistent":false},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"createdByAccount":{"name":"createdByAccount","persistent":false},"giftMessage":{"name":"giftMessage","ormtype":"string"},"simpleRepresentation":{"name":"simpleRepresentation","persistent":false,"type":"string"},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"persistableErrors":{"name":"persistableErrors","persistent":false,"type":"array"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"encryptedPropertiesExistFlag":{"name":"encryptedPropertiesExistFlag","persistent":false,"type":"boolean"},"rollbackProcessedFlag":{"name":"rollbackProcessedFlag","persistent":false,"type":"boolean"},"attributeValuesByAttributeCodeStruct":{"name":"attributeValuesByAttributeCodeStruct","persistent":false,"type":"struct"},"lastName":{"name":"lastName","ormtype":"string"}};
                	entities['OrderItemGiftRecipient'].className = 'OrderItemGiftRecipient';
                	validations['OrderItemGiftRecipient'] = {"properties":{}};
                	defaultValues['OrderItemGiftRecipient'] = {
                	orderItemGiftRecipientID:'',
										firstName:null,
									lastName:null,
									emailAddress:null,
									quantity:null,
									giftMessage:null,
									remoteID:null,
									createdDateTime:'',
										createdByAccountID:null,
									modifiedDateTime:'',
										modifiedByAccountID:null,
									
						z:''
	                };
                
                	entities['Country'] = {"cityShowFlag":{"name":"cityShowFlag","ormtype":"boolean"},"localityLabel":{"name":"localityLabel","ormtype":"string"},"createdDateTime":{"name":"createdDateTime","ormtype":"timestamp","hb_populateenabled":false},"emailTemplates":{"name":"emailTemplates","persistent":false,"type":"struct"},"settingValueFormatted":{"name":"settingValueFormatted","persistent":false,"type":"any"},"auditSmartList":{"name":"auditSmartList","persistent":false,"type":"any"},"modifiedDateTime":{"name":"modifiedDateTime","ormtype":"timestamp","hb_populateenabled":false},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"},"postalCodeShowFlag":{"name":"postalCodeShowFlag","ormtype":"boolean"},"stateCodeOptions":{"name":"stateCodeOptions","persistent":false,"type":"array"},"cityRequiredFlag":{"name":"cityRequiredFlag","ormtype":"boolean"},"cityLabel":{"name":"cityLabel","ormtype":"string"},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"street2AddressLabel":{"name":"street2AddressLabel","ormtype":"string"},"states":{"name":"states","hb_rbkey":"entity.state_plural","persistent":false,"type":"array"},"modifiedByAccount":{"name":"modifiedByAccount","persistent":false},"simpleRepresentation":{"name":"simpleRepresentation","persistent":false,"type":"string"},"createdByAccount":{"name":"createdByAccount","persistent":false},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"streetAddressShowFlag":{"name":"streetAddressShowFlag","ormtype":"boolean"},"localityRequiredFlag":{"name":"localityRequiredFlag","ormtype":"boolean"},"street2AddressShowFlag":{"name":"street2AddressShowFlag","ormtype":"boolean"},"rollbackProcessedFlag":{"name":"rollbackProcessedFlag","persistent":false,"type":"boolean"},"countryCode":{"name":"countryCode","fieldtype":"id","ormtype":"string","length":2},"attributeValuesByAttributeCodeStruct":{"name":"attributeValuesByAttributeCodeStruct","persistent":false,"type":"struct"},"street2AddressRequiredFlag":{"name":"street2AddressRequiredFlag","ormtype":"boolean"},"printTemplates":{"name":"printTemplates","persistent":false,"type":"struct"},"countryISONumber":{"name":"countryISONumber","ormtype":"integer"},"processObjects":{"name":"processObjects","persistent":false,"type":"struct"},"localityShowFlag":{"name":"localityShowFlag","ormtype":"boolean"},"stateCodeShowFlag":{"name":"stateCodeShowFlag","ormtype":"boolean"},"defaultCurrencyOptions":{"name":"defaultCurrencyOptions","persistent":false,"type":"array"},"postalCodeLabel":{"name":"postalCodeLabel","ormtype":"string"},"newFlag":{"name":"newFlag","persistent":false,"type":"boolean"},"validations":{"name":"validations","persistent":false,"type":"struct"},"postalCodeRequiredFlag":{"name":"postalCodeRequiredFlag","ormtype":"boolean"},"createdByAccountID":{"name":"createdByAccountID","ormtype":"string","hb_populateenabled":false},"countryName":{"name":"countryName","ormtype":"string"},"modifiedByAccountID":{"name":"modifiedByAccountID","ormtype":"string","hb_populateenabled":false},"attributeValuesByAttributeIDStruct":{"name":"attributeValuesByAttributeIDStruct","persistent":false,"type":"struct"},"assignedAttributeSetSmartList":{"name":"assignedAttributeSetSmartList","persistent":false,"type":"any"},"stateCodeRequiredFlag":{"name":"stateCodeRequiredFlag","ormtype":"boolean"},"stateCodeLabel":{"name":"stateCodeLabel","ormtype":"string"},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"streetAddressLabel":{"name":"streetAddressLabel","ormtype":"string"},"streetAddressRequiredFlag":{"name":"streetAddressRequiredFlag","ormtype":"boolean"},"persistableErrors":{"name":"persistableErrors","persistent":false,"type":"array"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"encryptedPropertiesExistFlag":{"name":"encryptedPropertiesExistFlag","persistent":false,"type":"boolean"},"countryCode3Digit":{"name":"countryCode3Digit","ormtype":"string","length":3},"activeFlag":{"name":"activeFlag","ormtype":"boolean"},"defaultCurrency":{"name":"defaultCurrency","fieldtype":"many-to-one","cfc":"Currency","fkcolumn":"defaultCurrencyCode"}};
                	entities['Country'].className = 'Country';
                	validations['Country'] = {"properties":{"countryCode":[{"maxLength":3,"required":true,"contexts":"save","minLength":2}],"countryName":[{"required":true,"contexts":"save"}],"countryISONumber":[{"dataType":"numeric","contexts":"save"}],"countryCode3Digit":[{"maxLength":3,"contexts":"save","minLength":3}]}};
                	defaultValues['Country'] = {
                	countryCode:null,
									countryCode3Digit:null,
									countryISONumber:null,
									countryName:null,
									activeFlag:1,
									streetAddressLabel:null,
									streetAddressShowFlag:null,
									streetAddressRequiredFlag:null,
									street2AddressLabel:null,
									street2AddressShowFlag:null,
									street2AddressRequiredFlag:null,
									localityLabel:null,
									localityShowFlag:null,
									localityRequiredFlag:null,
									cityLabel:null,
									cityShowFlag:null,
									cityRequiredFlag:null,
									stateCodeLabel:null,
									stateCodeShowFlag:null,
									stateCodeRequiredFlag:null,
									postalCodeLabel:null,
									postalCodeShowFlag:null,
									postalCodeRequiredFlag:null,
									createdDateTime:'',
										createdByAccountID:null,
									modifiedDateTime:'',
										modifiedByAccountID:null,
									
						z:''
	                };
                
                	entities['Sku'] = {"loyaltyAccruementExclusions":{"inverse":true,"name":"loyaltyAccruementExclusions","fieldtype":"many-to-many","singularname":"loyaltyAccruementExclusion","inversejoincolumn":"loyaltyAccruementID","cfc":"LoyaltyAccruement","fkcolumn":"skuID","type":"array","linktable":"SwLoyaltyAccruExclSku"},"emailTemplates":{"name":"emailTemplates","persistent":false,"type":"struct"},"startReservationDateTime":{"name":"startReservationDateTime","ormtype":"timestamp","hb_formattype":"dateTime"},"createdDateTime":{"name":"createdDateTime","ormtype":"timestamp","hb_populateenabled":false},"settingValueFormatted":{"name":"settingValueFormatted","persistent":false,"type":"any"},"userDefinedPriceFlag":{"name":"userDefinedPriceFlag","ormtype":"boolean","default":0},"auditSmartList":{"name":"auditSmartList","persistent":false,"type":"any"},"modifiedDateTime":{"name":"modifiedDateTime","ormtype":"timestamp","hb_populateenabled":false},"alternateSkuCodes":{"inverse":true,"name":"alternateSkuCodes","fieldtype":"one-to-many","singularname":"alternateSkuCode","cascade":"all-delete-orphan","cfc":"AlternateSkuCode","fkcolumn":"skuID"},"eventOverbookedFlag":{"name":"eventOverbookedFlag","persistent":false,"type":"boolean"},"productBundleGroups":{"inverse":true,"name":"productBundleGroups","fieldtype":"one-to-many","singularname":"productBundleGroup","cascade":"all-delete-orphan","cfc":"ProductBundleGroup","fkcolumn":"productBundleSkuID","type":"array"},"redemptionAmountTypeOptions":{"name":"redemptionAmountTypeOptions","persistent":false},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"salePriceDetails":{"name":"salePriceDetails","persistent":false,"type":"struct"},"availableSeatCount":{"name":"availableSeatCount","persistent":false},"skuDescription":{"name":"skuDescription","ormtype":"string","length":4000,"hb_formfieldtype":"wysiwyg"},"modifiedByAccount":{"name":"modifiedByAccount","persistent":false},"simpleRepresentation":{"name":"simpleRepresentation","persistent":false,"type":"string"},"livePrice":{"name":"livePrice","hb_formattype":"currency","persistent":false,"type":"numeric"},"eventConflictsSmartList":{"name":"eventConflictsSmartList","persistent":false},"purchaseEndDateTime":{"name":"purchaseEndDateTime","ormtype":"timestamp","hb_formattype":"dateTime"},"promotionRewardExclusions":{"inverse":true,"name":"promotionRewardExclusions","fieldtype":"many-to-many","singularname":"promotionRewardExclusion","inversejoincolumn":"promotionRewardID","cfc":"PromotionReward","fkcolumn":"skuID","type":"array","linktable":"SwPromoRewardExclSku"},"currencyDetails":{"name":"currencyDetails","persistent":false,"type":"struct"},"skuName":{"name":"skuName","ormtype":"string"},"availableForPurchaseFlag":{"name":"availableForPurchaseFlag","persistent":false},"eventConflictExistsFlag":{"name":"eventConflictExistsFlag","persistent":false,"type":"boolean"},"stocks":{"inverse":true,"name":"stocks","fieldtype":"one-to-many","singularname":"stock","cascade":"all-delete-orphan","hb_cascadecalculate":true,"cfc":"Stock","fkcolumn":"skuID"},"productSchedule":{"name":"productSchedule","fieldtype":"many-to-one","cfc":"ProductSchedule","fkcolumn":"productScheduleID"},"accessContents":{"name":"accessContents","fieldtype":"many-to-many","singularname":"accessContent","inversejoincolumn":"contentID","cfc":"Content","fkcolumn":"skuID","linktable":"SwSkuAccessContent","type":"array"},"renewalSubscriptionBenefits":{"name":"renewalSubscriptionBenefits","fieldtype":"many-to-many","singularname":"renewalSubscriptionBenefit","inversejoincolumn":"subscriptionBenefitID","cfc":"SubscriptionBenefit","fkcolumn":"skuID","linktable":"SwSkuRenewalSubsBenefit","type":"array"},"price":{"name":"price","ormtype":"big_decimal","hb_formattype":"currency","default":0},"processObjects":{"name":"processObjects","persistent":false,"type":"struct"},"orderItems":{"inverse":true,"name":"orderItems","fieldtype":"one-to-many","singularname":"orderItem","lazy":"extra","cfc":"OrderItem","fkcolumn":"skuID"},"promotionRewards":{"inverse":true,"name":"promotionRewards","fieldtype":"many-to-many","singularname":"promotionReward","inversejoincolumn":"promotionRewardID","cfc":"PromotionReward","fkcolumn":"skuID","linktable":"SwPromoRewardSku"},"redemptionAmountType":{"name":"redemptionAmountType","ormtype":"string","hb_formattype":"rbKey","hint":"used for gift card credit calculation. Values sameAsPrice, fixedAmount, Percentage","hb_formfieldtype":"select"},"newFlag":{"name":"newFlag","persistent":false,"type":"boolean"},"defaultFlag":{"name":"defaultFlag","persistent":false,"type":"boolean"},"validations":{"name":"validations","persistent":false,"type":"struct"},"baseProductType":{"name":"baseProductType","persistent":false},"productScheduleSmartList":{"name":"productScheduleSmartList","persistent":false,"type":"any"},"optionsByOptionGroupCodeStruct":{"name":"optionsByOptionGroupCodeStruct","persistent":false},"attributeValuesByAttributeIDStruct":{"name":"attributeValuesByAttributeIDStruct","persistent":false,"type":"struct"},"qats":{"name":"qats","persistent":false,"type":"numeric"},"giftCardExpirationTermOptions":{"name":"giftCardExpirationTermOptions","persistent":false},"eligibleFulfillmentMethods":{"name":"eligibleFulfillmentMethods","persistent":false,"type":"array"},"optionsByOptionGroupIDStruct":{"name":"optionsByOptionGroupIDStruct","persistent":false},"registrantEmailList":{"name":"registrantEmailList","persistent":false,"type":"array"},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"loyaltyRedemptions":{"inverse":true,"name":"loyaltyRedemptions","fieldtype":"many-to-many","singularname":"loyaltyRedemption","inversejoincolumn":"loyaltyRedemptionID","cfc":"LoyaltyRedemption","fkcolumn":"skuID","type":"array","linktable":"SwLoyaltyRedemptionSku"},"renewalPrice":{"name":"renewalPrice","ormtype":"big_decimal","hb_formattype":"currency","default":0},"allowEventWaitlistingFlag":{"name":"allowEventWaitlistingFlag","ormtype":"boolean","default":0},"salePriceDiscountAmount":{"name":"salePriceDiscountAmount","persistent":false,"type":"string"},"promotionQualifierExclusions":{"inverse":true,"name":"promotionQualifierExclusions","fieldtype":"many-to-many","singularname":"promotionQualifierExclusion","inversejoincolumn":"promotionQualifierID","cfc":"PromotionQualifier","fkcolumn":"skuID","type":"array","linktable":"SwPromoQualExclSku"},"productReviews":{"inverse":true,"name":"productReviews","fieldtype":"one-to-many","singularname":"productReview","cascade":"all-delete-orphan","cfc":"ProductReview","fkcolumn":"skuID"},"eventEndDateTime":{"name":"eventEndDateTime","ormtype":"timestamp","hb_formattype":"dateTime"},"activeFlag":{"name":"activeFlag","ormtype":"boolean","default":1},"salePriceExpirationDateTime":{"name":"salePriceExpirationDateTime","hb_formattype":"datetime","persistent":false,"type":"date"},"currencyCode":{"name":"currencyCode","ormtype":"string","length":3},"skuCurrencies":{"inverse":true,"name":"skuCurrencies","fieldtype":"one-to-many","singularname":"skuCurrency","cascade":"all-delete-orphan","cfc":"SkuCurrency","fkcolumn":"skuID","type":"array"},"promotionQualifiers":{"inverse":true,"name":"promotionQualifiers","fieldtype":"many-to-many","singularname":"promotionQualifier","inversejoincolumn":"promotionQualifierID","cfc":"PromotionQualifier","fkcolumn":"skuID","linktable":"SwPromoQualSku"},"placedOrderItemsSmartList":{"name":"placedOrderItemsSmartList","persistent":false,"type":"any"},"endReservationDateTime":{"name":"endReservationDateTime","ormtype":"timestamp","hb_formattype":"dateTime"},"physicals":{"inverse":true,"name":"physicals","fieldtype":"many-to-many","singularname":"physical","inversejoincolumn":"physicalID","cfc":"Physical","fkcolumn":"skuID","type":"array","linktable":"SwPhysicalSku"},"waitlistQueueTerm":{"name":"waitlistQueueTerm","fieldtype":"many-to-one","hint":"Term that a waitlisted registrant has to claim offer.","cfc":"Term","fkcolumn":"termID"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"},"locations":{"name":"locations","persistent":false,"type":"array"},"subscriptionTerm":{"name":"subscriptionTerm","fieldtype":"many-to-one","cfc":"SubscriptionTerm","fkcolumn":"subscriptionTermID"},"listPrice":{"name":"listPrice","ormtype":"big_decimal","hb_formattype":"currency","default":0},"assignedSkuBundles":{"inverse":true,"name":"assignedSkuBundles","fieldtype":"one-to-many","singularname":"assignedSkuBundle","lazy":"extra","cascade":"all-delete-orphan","cfc":"SkuBundle","fkcolumn":"bundledSkuID"},"remoteID":{"name":"remoteID","ormtype":"string"},"salePrice":{"name":"salePrice","hb_formattype":"currency","persistent":false,"type":"numeric"},"nextEstimatedAvailableDate":{"name":"nextEstimatedAvailableDate","persistent":false,"type":"string"},"assignedOrderItemAttributeSetSmartList":{"name":"assignedOrderItemAttributeSetSmartList","persistent":false},"createdByAccount":{"name":"createdByAccount","persistent":false},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"eventStartDateTime":{"name":"eventStartDateTime","ormtype":"timestamp","hb_formattype":"dateTime"},"currentAccountPrice":{"name":"currentAccountPrice","hb_formattype":"currency","persistent":false,"type":"numeric"},"product":{"name":"product","fieldtype":"many-to-one","hb_cascadecalculate":true,"cfc":"Product","fkcolumn":"productID"},"imageFile":{"name":"imageFile","ormtype":"string","length":50},"giftCardExpirationTerm":{"name":"giftCardExpirationTerm","fieldtype":"many-to-one","hint":"Term that is used to set the Expiration Date of the ordered gift card.","cfc":"Term","fkcolumn":"giftCardExpirationTermID"},"imageExistsFlag":{"name":"imageExistsFlag","persistent":false,"type":"boolean"},"eventAttendanceCode":{"name":"eventAttendanceCode","ormtype":"string","hint":"Unique code to track event attendance","length":8},"attendedQuantity":{"name":"attendedQuantity","ormtype":"integer","hint":"Optional field for manually entered event attendance."},"rollbackProcessedFlag":{"name":"rollbackProcessedFlag","persistent":false,"type":"boolean"},"attributeValuesByAttributeCodeStruct":{"name":"attributeValuesByAttributeCodeStruct","persistent":false,"type":"struct"},"publishedFlag":{"name":"publishedFlag","ormtype":"boolean","default":0},"eventStatus":{"name":"eventStatus","persistent":false,"type":"any"},"eventRegistrations":{"inverse":true,"name":"eventRegistrations","fieldtype":"one-to-many","singularname":"eventRegistration","lazy":"extra","cascade":"all-delete-orphan","cfc":"EventRegistration","fkcolumn":"skuID"},"calculatedQATS":{"name":"calculatedQATS","ormtype":"integer"},"adminIcon":{"name":"adminIcon","persistent":false},"redemptionAmount":{"name":"redemptionAmount","ormtype":"big_decimal","hint":"value to be used in calculation conjunction with redeptionAmountType"},"bundleFlag":{"name":"bundleFlag","ormtype":"boolean","default":0},"printTemplates":{"name":"printTemplates","persistent":false,"type":"struct"},"bundledSkus":{"inverse":true,"name":"bundledSkus","fieldtype":"one-to-many","singularname":"bundledSku","cascade":"all-delete-orphan","cfc":"SkuBundle","fkcolumn":"skuID"},"redemptionAmountPercentage":{"name":"redemptionAmountPercentage","ormtype":"float","hint":"the percentage to use if type is set to percentage"},"skuCode":{"index":"PI_SKUCODE","unique":true,"name":"skuCode","ormtype":"string","length":50},"skuDefinition":{"name":"skuDefinition","persistent":false},"transactionExistsFlag":{"name":"transactionExistsFlag","persistent":false,"type":"boolean"},"loyaltyRedemptionExclusions":{"inverse":true,"name":"loyaltyRedemptionExclusions","fieldtype":"many-to-many","singularname":"loyaltyRedemptionExclusion","inversejoincolumn":"loyaltyRedemptionID","cfc":"LoyaltyRedemption","fkcolumn":"skuID","type":"array","linktable":"SwLoyaltyRedemptionExclSku"},"subscriptionBenefits":{"name":"subscriptionBenefits","fieldtype":"many-to-many","singularname":"subscriptionBenefit","inversejoincolumn":"subscriptionBenefitID","cfc":"SubscriptionBenefit","fkcolumn":"skuID","linktable":"SwSkuSubsBenefit","type":"array"},"createdByAccountID":{"name":"createdByAccountID","ormtype":"string","hb_populateenabled":false},"eventCapacity":{"name":"eventCapacity","ormtype":"integer"},"modifiedByAccountID":{"name":"modifiedByAccountID","ormtype":"string","hb_populateenabled":false},"registeredUserCount":{"name":"registeredUserCount","persistent":false,"type":"integer"},"assignedAttributeSetSmartList":{"name":"assignedAttributeSetSmartList","persistent":false,"type":"any"},"stocksDeletableFlag":{"name":"stocksDeletableFlag","persistent":false,"type":"boolean"},"loyaltyAccruements":{"inverse":true,"name":"loyaltyAccruements","fieldtype":"many-to-many","singularname":"loyaltyAccruement","inversejoincolumn":"loyaltyAccruementID","cfc":"LoyaltyAccruement","fkcolumn":"skuID","linktable":"SwLoyaltyAccruSku"},"optionsIDList":{"name":"optionsIDList","persistent":false},"attributeValues":{"inverse":true,"name":"attributeValues","fieldtype":"one-to-many","singularname":"attributeValue","cascade":"all-delete-orphan","cfc":"AttributeValue","fkcolumn":"skuID","type":"array"},"purchaseStartDateTime":{"name":"purchaseStartDateTime","ormtype":"timestamp","hb_formattype":"dateTime"},"locationConfigurations":{"name":"locationConfigurations","fieldtype":"many-to-many","singularname":"locationConfiguration","inversejoincolumn":"locationConfigurationID","cfc":"LocationConfiguration","fkcolumn":"skuID","linktable":"SwSkuLocationConfiguration","type":"array"},"persistableErrors":{"name":"persistableErrors","persistent":false,"type":"array"},"skuID":{"generator":"uuid","name":"skuID","fieldtype":"id","ormtype":"string","unsavedvalue":"","length":32,"default":""},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"encryptedPropertiesExistFlag":{"name":"encryptedPropertiesExistFlag","persistent":false,"type":"boolean"},"registrantCount":{"name":"registrantCount","persistent":false,"type":"integer"},"salePriceDiscountType":{"name":"salePriceDiscountType","persistent":false,"type":"string"},"priceGroupRates":{"inverse":true,"name":"priceGroupRates","fieldtype":"many-to-many","singularname":"priceGroupRate","inversejoincolumn":"priceGroupRateID","cfc":"PriceGroupRate","fkcolumn":"skuID","linktable":"SwPriceGroupRateSku"},"options":{"name":"options","fieldtype":"many-to-many","singularname":"option","inversejoincolumn":"optionID","cfc":"Option","fkcolumn":"skuID","linktable":"SwSkuOption"}};
                	entities['Sku'].className = 'Sku';
                	validations['Sku'] = {"properties":{"price":[{"dataType":"numeric","minValue":0,"required":true,"contexts":"save"}],"listPrice":[{"dataType":"numeric","minValue":0,"contexts":"save"}],"physicalCounts":[{"maxCollection":0,"contexts":"delete"}],"skuCode":[{"unique":true,"regex":"^[a-zA-Z0-9-_.|:~^]+$","required":true,"contexts":"save"}],"transactionExistsFlag":[{"eq":false,"contexts":"delete"}],"product":[{"required":true,"contexts":"save"}],"defaultFlag":[{"eq":false,"contexts":"delete"}],"renewalPrice":[{"dataType":"numeric","minValue":0,"contexts":"save"}],"options":[{"contexts":"save","conditions":"notSkuBundle","method":"hasUniqueOptions"},{"contexts":"save","method":"hasOneOptionPerOptionGroup"}]},"conditions":{"notSkuBundle":{"bundleFlag":{"eq":0}}}};
                	defaultValues['Sku'] = {
                	skuID:'',
										activeFlag:1,
									publishedFlag:0,
									skuName:null,
									skuDescription:null,
									skuCode:null,
									eventAttendanceCode:null,
									listPrice:0,
									price:0,
									renewalPrice:0,
									currencyCode:'USD',
										imageFile:null,
									userDefinedPriceFlag:0,
									eventStartDateTime:null,
									eventEndDateTime:null,
									startReservationDateTime:null,
									endReservationDateTime:null,
									purchaseStartDateTime:null,
									purchaseEndDateTime:null,
									bundleFlag:0,
									eventCapacity:null,
									attendedQuantity:null,
									allowEventWaitlistingFlag:0,
									redemptionAmountType:null,
									redemptionAmountPercentage:null,
									redemptionAmount:null,
									calculatedQATS:null,
									remoteID:null,
									createdDateTime:'',
										createdByAccountID:null,
									modifiedDateTime:'',
										modifiedByAccountID:null,
									
						z:''
	                };
                
                	entities['Sku_ChangeEventDates'] = {"startReservationDateTime":{"name":"startReservationDateTime","hb_formfieldtype":"datetime"},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"sku":{"name":"sku"},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"endReservationDateTime":{"name":"endReservationDateTime","hb_formfieldtype":"datetime"},"locationConfigurations":{"name":"locationConfigurations"},"preProcessDisplayedFlag":{"name":"preProcessDisplayedFlag"},"eventStartDateTime":{"name":"eventStartDateTime","hb_formfieldtype":"datetime"},"validations":{"name":"validations","persistent":false,"type":"struct"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"editScope":{"name":"editScope","hint":"Edit this sku schedule or all?","hb_formfieldtype":"select"},"populatedFlag":{"name":"populatedFlag"},"eventEndDateTime":{"name":"eventEndDateTime","hb_formfieldtype":"datetime"},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"}};
                	entities['Sku_ChangeEventDates'].className = 'Sku_ChangeEventDates';
                	validations['Sku_ChangeEventDates'] = {"properties":{"startReservationDateTime":[{"gtNow":true,"dataType":"date","required":true,"ltDateTimeProperty":"endReservationDateTime"}],"endReservationDateTime":[{"gtNow":true,"dataType":"date","required":true}],"eventStartDateTime":[{"gtNow":true,"dataType":"date","required":true,"ltDateTimeProperty":"eventEndDateTime"}],"eventEndDateTime":[{"gtNow":true,"dataType":"date","required":true}]}};
                	defaultValues['Sku_ChangeEventDates'] = {
                	sku:'',
										eventStartDateTime:'',
									eventEndDateTime:'',
									startReservationDateTime:'',
									endReservationDateTime:'',
									locationConfigurations:'',
									editScope:'',
									preProcessDisplayedFlag:0,
										populatedFlag:0,
										
						z:''
	                };
                
                	entities['Sku_AddLocation'] = {"editScope":{"name":"editScope","hint":"Edit this sku schedule or all?","hb_formfieldtype":"select"},"populatedFlag":{"name":"populatedFlag"},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"sku":{"name":"sku"},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"preProcessDisplayedFlag":{"name":"preProcessDisplayedFlag"},"locationConfigurations":{"name":"locationConfigurations"},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"validations":{"name":"validations","persistent":false,"type":"struct"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"}};
                	entities['Sku_AddLocation'].className = 'Sku_AddLocation';
                	validations['Sku_AddLocation'] = {"properties":{}};
                	defaultValues['Sku_AddLocation'] = {
                	sku:'',
										locationConfigurations:'',
									editScope:'',
									preProcessDisplayedFlag:0,
										populatedFlag:0,
										
						z:''
	                };
                
                	entities['Sku_RemoveLocation'] = {"editScope":{"name":"editScope","hint":"Edit this sku schedule or all?","hb_formfieldtype":"select"},"populatedFlag":{"name":"populatedFlag"},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"sku":{"name":"sku"},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"preProcessDisplayedFlag":{"name":"preProcessDisplayedFlag"},"locationConfigurations":{"name":"locationConfigurations"},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"validations":{"name":"validations","persistent":false,"type":"struct"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"}};
                	entities['Sku_RemoveLocation'].className = 'Sku_RemoveLocation';
                	validations['Sku_RemoveLocation'] = {"properties":{}};
                	defaultValues['Sku_RemoveLocation'] = {
                	sku:'',
										locationConfigurations:'',
									editScope:'',
									preProcessDisplayedFlag:0,
										populatedFlag:0,
										
						z:''
	                };
                
                	entities['VendorOrder'] = {"emailTemplates":{"name":"emailTemplates","persistent":false,"type":"struct"},"createdDateTime":{"name":"createdDateTime","ormtype":"timestamp","hb_populateenabled":false},"printTemplates":{"name":"printTemplates","persistent":false,"type":"struct"},"processObjects":{"name":"processObjects","persistent":false,"type":"struct"},"settingValueFormatted":{"name":"settingValueFormatted","persistent":false,"type":"any"},"auditSmartList":{"name":"auditSmartList","persistent":false,"type":"any"},"billToLocation":{"name":"billToLocation","fieldtype":"many-to-one","cfc":"Location","fkcolumn":"locationID"},"modifiedDateTime":{"name":"modifiedDateTime","ormtype":"timestamp","hb_populateenabled":false},"total":{"name":"total","hb_formattype":"currency","persistent":false},"vendorOrderStatusType":{"name":"vendorOrderStatusType","fieldtype":"many-to-one","hb_optionssmartlistdata":"f:parentType.systemCode=vendorOrderStatusType","cfc":"Type","fkcolumn":"vendorOrderStatusTypeID"},"currencyCodeOptions":{"name":"currencyCodeOptions","persistent":false},"newFlag":{"name":"newFlag","persistent":false,"type":"boolean"},"validations":{"name":"validations","persistent":false,"type":"struct"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"},"createdByAccountID":{"name":"createdByAccountID","ormtype":"string","hb_populateenabled":false},"remoteID":{"name":"remoteID","ormtype":"string"},"vendorOrderItems":{"inverse":true,"name":"vendorOrderItems","fieldtype":"one-to-many","singularname":"vendorOrderItem","cascade":"all","cfc":"VendorOrderItem","fkcolumn":"vendorOrderID"},"modifiedByAccountID":{"name":"modifiedByAccountID","ormtype":"string","hb_populateenabled":false},"attributeValuesByAttributeIDStruct":{"name":"attributeValuesByAttributeIDStruct","persistent":false,"type":"struct"},"vendorOrderNumber":{"name":"vendorOrderNumber","ormtype":"string"},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"assignedAttributeSetSmartList":{"name":"assignedAttributeSetSmartList","persistent":false,"type":"any"},"modifiedByAccount":{"name":"modifiedByAccount","persistent":false},"estimatedReceivalDateTime":{"name":"estimatedReceivalDateTime","ormtype":"timestamp"},"attributeValues":{"inverse":true,"name":"attributeValues","fieldtype":"one-to-many","singularname":"attributeValue","cascade":"all-delete-orphan","cfc":"AttributeValue","fkcolumn":"vendorOrderID","type":"array"},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"createdByAccount":{"name":"createdByAccount","persistent":false},"simpleRepresentation":{"name":"simpleRepresentation","persistent":false,"type":"string"},"addVendorOrderItemSkuOptionsSmartList":{"name":"addVendorOrderItemSkuOptionsSmartList","persistent":false},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"persistableErrors":{"name":"persistableErrors","persistent":false,"type":"array"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"encryptedPropertiesExistFlag":{"name":"encryptedPropertiesExistFlag","persistent":false,"type":"boolean"},"rollbackProcessedFlag":{"name":"rollbackProcessedFlag","persistent":false,"type":"boolean"},"attributeValuesByAttributeCodeStruct":{"name":"attributeValuesByAttributeCodeStruct","persistent":false,"type":"struct"},"subTotal":{"name":"subTotal","hb_formattype":"currency","persistent":false},"stockReceivers":{"inverse":true,"name":"stockReceivers","fieldtype":"one-to-many","singularname":"stockReceiver","cascade":"all-delete-orphan","cfc":"StockReceiver","fkcolumn":"vendorOrderID","type":"array"},"vendorOrderID":{"generator":"uuid","name":"vendorOrderID","fieldtype":"id","ormtype":"string","unsavedvalue":"","length":32,"default":""},"vendorOrderType":{"name":"vendorOrderType","fieldtype":"many-to-one","hb_optionssmartlistdata":"f:parentType.systemCode=vendorOrderType","cfc":"Type","fkcolumn":"vendorOrderTypeID"},"currencyCode":{"name":"currencyCode","ormtype":"string","length":3,"hb_formfieldtype":"select"},"vendor":{"name":"vendor","fieldtype":"many-to-one","cfc":"Vendor","fkcolumn":"vendorID"}};
                	entities['VendorOrder'].className = 'VendorOrder';
                	validations['VendorOrder'] = {"properties":{"vendorOrderItems":[{"minCollection":1,"contexts":"receiveStock"}],"stockReceivers":[{"maxCollection":0,"contexts":"delete"}],"vendorOrderStatusType":[{"required":true,"contexts":"save"}],"vendorOrderType":[{"required":true,"contexts":"save"}],"vendor":[{"required":true,"contexts":"save"}]}};
                	defaultValues['VendorOrder'] = {
                	vendorOrderID:'',
										vendorOrderNumber:null,
									estimatedReceivalDateTime:null,
									currencyCode:'USD',
										remoteID:null,
									createdDateTime:'',
										createdByAccountID:null,
									modifiedDateTime:'',
										modifiedByAccountID:null,
									
						z:''
	                };
                
                	entities['VendorOrder_AddVendorOrderItem'] = {"vendorOrderItemTypeSystemCode":{"name":"vendorOrderItemTypeSystemCode"},"price":{"name":"price"},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"sku":{"name":"sku"},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"vendorOrder":{"name":"vendorOrder"},"preProcessDisplayedFlag":{"name":"preProcessDisplayedFlag"},"skuID":{"name":"skuID"},"validations":{"name":"validations","persistent":false,"type":"struct"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"deliverToLocationID":{"name":"deliverToLocationID","hb_formfieldtype":"select"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"},"populatedFlag":{"name":"populatedFlag"},"cost":{"name":"cost"},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"quantity":{"name":"quantity"}};
                	entities['VendorOrder_AddVendorOrderItem'].className = 'VendorOrder_AddVendorOrderItem';
                	validations['VendorOrder_AddVendorOrderItem'] = {"properties":{}};
                	defaultValues['VendorOrder_AddVendorOrderItem'] = {
                	vendorOrder:'',
										skuID:'',
									cost:0,
										quantity:1,
										vendorOrderItemTypeSystemCode:"voitPurchase",
										deliverToLocationID:'',
									preProcessDisplayedFlag:0,
										populatedFlag:0,
										
						z:''
	                };
                
                	entities['VendorOrder_Receive'] = {"boxCount":{"name":"boxCount","hb_rbkey":"entity.stockReceiver.boxCount"},"locationID":{"name":"locationID","hb_rbkey":"entity.location","hb_formfieldtype":"select"},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"vendorOrder":{"name":"vendorOrder"},"preProcessDisplayedFlag":{"name":"preProcessDisplayedFlag"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"validations":{"name":"validations","persistent":false,"type":"struct"},"packingSlipNumber":{"name":"packingSlipNumber","hb_rbkey":"entity.stockReceiver.packingSlipNumber"},"populatedFlag":{"name":"populatedFlag"},"vendorOrderID":{"name":"vendorOrderID"},"vendorOrderItems":{"name":"vendorOrderItems","hb_populatearray":true,"type":"array"},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"}};
                	entities['VendorOrder_Receive'].className = 'VendorOrder_Receive';
                	validations['VendorOrder_Receive'] = {"properties":{}};
                	defaultValues['VendorOrder_Receive'] = {
                	vendorOrder:'',
										locationID:'',
									vendorOrderID:'',
									packingSlipNumber:'',
									boxCount:'',
									vendorOrderItems:'',
									preProcessDisplayedFlag:0,
										populatedFlag:0,
										
						z:''
	                };
                
                	entities['OrderFulfillment'] = {"emailTemplates":{"name":"emailTemplates","persistent":false,"type":"struct"},"createdDateTime":{"name":"createdDateTime","ormtype":"timestamp","hb_populateenabled":false},"nextEstimatedFulfillmentDateTime":{"name":"nextEstimatedFulfillmentDateTime","persistent":false,"type":"timestamp"},"settingValueFormatted":{"name":"settingValueFormatted","persistent":false,"type":"any"},"auditSmartList":{"name":"auditSmartList","persistent":false,"type":"any"},"modifiedDateTime":{"name":"modifiedDateTime","ormtype":"timestamp","hb_populateenabled":false},"order":{"name":"order","fieldtype":"many-to-one","cfc":"Order","fkcolumn":"orderID"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"},"pickupLocation":{"name":"pickupLocation","fieldtype":"many-to-one","hb_populateenabled":"public","cfc":"Location","fkcolumn":"locationID"},"accountEmailAddress":{"name":"accountEmailAddress","fieldtype":"many-to-one","hb_populateenabled":"public","cfc":"AccountEmailAddress","fkcolumn":"accountEmailAddressID"},"fulfillmentMethod":{"name":"fulfillmentMethod","fieldtype":"many-to-one","hb_populateenabled":"public","cfc":"FulfillmentMethod","fkcolumn":"fulfillmentMethodID"},"remoteID":{"name":"remoteID","ormtype":"string"},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"orderFulfillmentItems":{"inverse":true,"name":"orderFulfillmentItems","fieldtype":"one-to-many","singularname":"orderFulfillmentItem","hb_populateenabled":"public","cascade":"all","cfc":"OrderItem","fkcolumn":"orderFulfillmentID"},"quantityDelivered":{"name":"quantityDelivered","persistent":false,"type":"numeric"},"modifiedByAccount":{"name":"modifiedByAccount","persistent":false},"shippingAddress":{"name":"shippingAddress","fieldtype":"many-to-one","hb_populateenabled":"public","cfc":"Address","fkcolumn":"shippingAddressID"},"createdByAccount":{"name":"createdByAccount","persistent":false},"simpleRepresentation":{"name":"simpleRepresentation","persistent":false,"type":"string"},"orderFulfillmentID":{"generator":"uuid","name":"orderFulfillmentID","fieldtype":"id","ormtype":"string","unsavedvalue":"","length":32,"default":""},"manualFulfillmentChargeFlag":{"name":"manualFulfillmentChargeFlag","ormtype":"boolean","hb_populateenabled":false},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"nextEstimatedDeliveryDateTime":{"name":"nextEstimatedDeliveryDateTime","persistent":false,"type":"timestamp"},"rollbackProcessedFlag":{"name":"rollbackProcessedFlag","persistent":false,"type":"boolean"},"shippingMethod":{"name":"shippingMethod","fieldtype":"many-to-one","hb_populateenabled":"public","cfc":"ShippingMethod","fkcolumn":"shippingMethodID"},"attributeValuesByAttributeCodeStruct":{"name":"attributeValuesByAttributeCodeStruct","persistent":false,"type":"struct"},"discountAmount":{"name":"discountAmount","hb_formattype":"currency","persistent":false,"type":"numeric"},"fulfillmentMethodType":{"name":"fulfillmentMethodType","persistent":false,"type":"numeric"},"fulfillmentCharge":{"name":"fulfillmentCharge","ormtype":"big_decimal"},"shippingMethodOptions":{"name":"shippingMethodOptions","persistent":false,"type":"array"},"saveAccountAddressName":{"name":"saveAccountAddressName","hb_populateenabled":"public","persistent":false},"accountLoyaltyTransactions":{"inverse":true,"name":"accountLoyaltyTransactions","fieldtype":"one-to-many","singularname":"accountLoyaltyTransaction","cascade":"all","cfc":"AccountLoyaltyTransaction","fkcolumn":"orderFulfillmentID","type":"array"},"totalShippingWeight":{"name":"totalShippingWeight","hb_formattype":"weight","persistent":false,"type":"numeric"},"requiredShippingInfoExistsFlag":{"name":"requiredShippingInfoExistsFlag","persistent":false},"shippingMethodRate":{"name":"shippingMethodRate","persistent":false,"type":"array"},"printTemplates":{"name":"printTemplates","persistent":false,"type":"struct"},"estimatedFulfillmentDateTime":{"name":"estimatedFulfillmentDateTime","ormtype":"timestamp"},"taxAmount":{"name":"taxAmount","hb_formattype":"currency","persistent":false,"type":"numeric"},"processObjects":{"name":"processObjects","persistent":false,"type":"struct"},"newFlag":{"name":"newFlag","persistent":false,"type":"boolean"},"orderStatusCode":{"name":"orderStatusCode","persistent":false,"type":"numeric"},"validations":{"name":"validations","persistent":false,"type":"struct"},"chargeAfterDiscount":{"name":"chargeAfterDiscount","hb_formattype":"currency","persistent":false,"type":"numeric"},"createdByAccountID":{"name":"createdByAccountID","ormtype":"string","hb_populateenabled":false},"orderFulfillmentStatusType":{"name":"orderFulfillmentStatusType","fieldtype":"many-to-one","hb_optionssmartlistdata":"f:parentType.systemCode=orderFulfillmentStatusType","cfc":"Type","fkcolumn":"orderFulfillmentStatusTypeID"},"attributeValuesByAttributeIDStruct":{"name":"attributeValuesByAttributeIDStruct","persistent":false,"type":"struct"},"estimatedDeliveryDateTime":{"name":"estimatedDeliveryDateTime","ormtype":"timestamp"},"modifiedByAccountID":{"name":"modifiedByAccountID","ormtype":"string","hb_populateenabled":false},"assignedAttributeSetSmartList":{"name":"assignedAttributeSetSmartList","persistent":false,"type":"any"},"emailAddress":{"name":"emailAddress","ormtype":"string","hb_populateenabled":"public"},"attributeValues":{"inverse":true,"name":"attributeValues","fieldtype":"one-to-many","singularname":"attributeValue","cascade":"all-delete-orphan","cfc":"AttributeValue","fkcolumn":"orderFulfillmentID","type":"array"},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"quantityUndelivered":{"name":"quantityUndelivered","persistent":false,"type":"numeric"},"accountAddressOptions":{"name":"accountAddressOptions","persistent":false,"type":"array"},"persistableErrors":{"name":"persistableErrors","persistent":false,"type":"array"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"encryptedPropertiesExistFlag":{"name":"encryptedPropertiesExistFlag","persistent":false,"type":"boolean"},"fulfillmentShippingMethodOptions":{"inverse":true,"name":"fulfillmentShippingMethodOptions","fieldtype":"one-to-many","singularname":"fulfillmentShippingMethodOption","cascade":"all-delete-orphan","cfc":"ShippingMethodOption","fkcolumn":"orderFulfillmentID"},"subtotalAfterDiscountsWithTax":{"name":"subtotalAfterDiscountsWithTax","hb_formattype":"currency","persistent":false,"type":"array"},"discountTotal":{"name":"discountTotal","persistent":false},"subtotal":{"name":"subtotal","hb_formattype":"currency","persistent":false,"type":"numeric"},"accountAddress":{"name":"accountAddress","fieldtype":"many-to-one","hb_populateenabled":"public","cfc":"AccountAddress","fkcolumn":"accountAddressID"},"subtotalAfterDiscounts":{"name":"subtotalAfterDiscounts","hb_formattype":"currency","persistent":false,"type":"array"},"saveAccountAddressFlag":{"name":"saveAccountAddressFlag","hb_populateenabled":"public","persistent":false},"appliedPromotions":{"inverse":true,"name":"appliedPromotions","fieldtype":"one-to-many","singularname":"appliedPromotion","cascade":"all-delete-orphan","cfc":"PromotionApplied","fkcolumn":"orderFulfillmentID"},"shippingCharge":{"name":"shippingCharge","persistent":false},"currencyCode":{"name":"currencyCode","ormtype":"string","length":3},"saveAccountAddress":{"name":"saveAccountAddress","persistent":false}};
                	entities['OrderFulfillment'].className = 'OrderFulfillment';
                	validations['OrderFulfillment'] = {"properties":{"shippingMethod":[{"required":true,"contexts":"placeOrder","conditions":"fulfillmentTypeShipping"},{"contexts":"placeOrder","conditions":"fulfillmentTypeShippingWithoutRateOverride","method":"hasValidShippingMethodRate"}],"pickupLocation":[{"required":true,"contexts":"placeOrder","conditions":"fulfillmentTypePickup"}],"requiredShippingInfoExistsFlag":[{"eq":true,"contexts":"placeOrder","conditions":"fulfillmentTypeShipping"}],"fulfillmentMethod":[{"required":true,"contexts":"save","method":"allOrderFulfillmentItemsAreEligibleForFulfillmentMethod"}],"quantityUndelivered":[{"minValue":0,"contexts":"fulfillItems"}],"orderFulfillmentID":[{"contexts":"delete","maxValue":0}],"fulfillmentCharge":[{"dataType":"numeric","minValue":0,"contexts":"save"}],"order":[{"required":true,"contexts":"save"}],"orderStatusCode":[{"inList":"ostNotPlaced,ostNew,ostProcessing,ostOnHold","contexts":"edit,manualFulfillmentCharge"},{"inList":"ostNew,ostProcessing","contexts":"fulfillItems"}],"orderFulfillmentItems":[{"minCollection":1,"contexts":"placeOrder,fulfillItems"}],"emailAddress":[{"required":true,"contexts":"placeOrder","conditions":"fulfillmentTypeEmail"}]},"conditions":{"fulfillmentTypePickup":{"fulfillmentMethodType":{"eq":"pickup"}},"fulfillmentTypeEmail":{"fulfillmentMethodType":{"eq":"email"}},"fulfillmentTypeShippingWithoutRateOverride":{"fulfillmentMethodType":{"eq":"shipping"},"accountAddress":{"null":true}},"fulfillmentTypeShippingNoAccountAddress":{"fulfillmentMethodType":{"eq":"shipping"},"accountAddress":{"null":true}},"fulfillmentTypeShipping":{"fulfillmentMethodType":{"eq":"shipping"}}},"populatedPropertyValidation":{"shippingAddress":[{"conditions":"fulfillmentTypeShippingNoAccountAddress","validate":"full"}]}};
                	defaultValues['OrderFulfillment'] = {
                	orderFulfillmentID:'',
										fulfillmentCharge:0,
									currencyCode:null,
									emailAddress:null,
									manualFulfillmentChargeFlag:0,
									estimatedDeliveryDateTime:null,
									estimatedFulfillmentDateTime:null,
									remoteID:null,
									createdDateTime:'',
										createdByAccountID:null,
									modifiedDateTime:'',
										modifiedByAccountID:null,
									
						z:''
	                };
                
                	entities['TaxCategory'] = {"createdDateTime":{"name":"createdDateTime","ormtype":"timestamp","hb_populateenabled":false},"emailTemplates":{"name":"emailTemplates","persistent":false,"type":"struct"},"printTemplates":{"name":"printTemplates","persistent":false,"type":"struct"},"processObjects":{"name":"processObjects","persistent":false,"type":"struct"},"settingValueFormatted":{"name":"settingValueFormatted","persistent":false,"type":"any"},"auditSmartList":{"name":"auditSmartList","persistent":false,"type":"any"},"modifiedDateTime":{"name":"modifiedDateTime","ormtype":"timestamp","hb_populateenabled":false},"taxCategoryRatesDeletableFlag":{"name":"taxCategoryRatesDeletableFlag","persistent":false,"type":"boolean"},"newFlag":{"name":"newFlag","persistent":false,"type":"boolean"},"validations":{"name":"validations","persistent":false,"type":"struct"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"},"createdByAccountID":{"name":"createdByAccountID","ormtype":"string","hb_populateenabled":false},"taxCategoryName":{"name":"taxCategoryName","ormtype":"string"},"remoteID":{"name":"remoteID","ormtype":"string"},"taxCategoryCode":{"index":"PI_TAXCATEGORYCODE","name":"taxCategoryCode","ormtype":"string"},"modifiedByAccountID":{"name":"modifiedByAccountID","ormtype":"string","hb_populateenabled":false},"attributeValuesByAttributeIDStruct":{"name":"attributeValuesByAttributeIDStruct","persistent":false,"type":"struct"},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"assignedAttributeSetSmartList":{"name":"assignedAttributeSetSmartList","persistent":false,"type":"any"},"taxCategoryID":{"generator":"uuid","name":"taxCategoryID","fieldtype":"id","ormtype":"string","unsavedvalue":"","length":32,"default":""},"taxCategoryRates":{"inverse":true,"name":"taxCategoryRates","fieldtype":"one-to-many","singularname":"taxCategoryRate","cascade":"all-delete-orphan","cfc":"TaxCategoryRate","fkcolumn":"taxCategoryID","type":"array"},"modifiedByAccount":{"name":"modifiedByAccount","persistent":false},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"createdByAccount":{"name":"createdByAccount","persistent":false},"simpleRepresentation":{"name":"simpleRepresentation","persistent":false,"type":"string"},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"persistableErrors":{"name":"persistableErrors","persistent":false,"type":"array"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"encryptedPropertiesExistFlag":{"name":"encryptedPropertiesExistFlag","persistent":false,"type":"boolean"},"rollbackProcessedFlag":{"name":"rollbackProcessedFlag","persistent":false,"type":"boolean"},"attributeValuesByAttributeCodeStruct":{"name":"attributeValuesByAttributeCodeStruct","persistent":false,"type":"struct"},"activeFlag":{"name":"activeFlag","ormtype":"boolean"}};
                	entities['TaxCategory'].className = 'TaxCategory';
                	validations['TaxCategory'] = {"properties":{"taxCategoryName":[{"required":true,"contexts":"save"}],"taxCategoryCode":[{"regex":"^[a-zA-Z0-9-_.|:~^]+$","required":true,"contexts":"save"}]}};
                	defaultValues['TaxCategory'] = {
                	taxCategoryID:'',
										activeFlag:1,
									taxCategoryName:null,
									taxCategoryCode:null,
									remoteID:null,
									createdDateTime:'',
										createdByAccountID:null,
									modifiedDateTime:'',
										modifiedByAccountID:null,
									
						z:''
	                };
                
                	entities['PaymentMethod'] = {"emailTemplates":{"name":"emailTemplates","persistent":false,"type":"struct"},"createdDateTime":{"name":"createdDateTime","ormtype":"timestamp","hb_populateenabled":false},"printTemplates":{"name":"printTemplates","persistent":false,"type":"struct"},"processObjects":{"name":"processObjects","persistent":false,"type":"struct"},"sortOrder":{"name":"sortOrder","ormtype":"integer"},"settingValueFormatted":{"name":"settingValueFormatted","persistent":false,"type":"any"},"auditSmartList":{"name":"auditSmartList","persistent":false,"type":"any"},"modifiedDateTime":{"name":"modifiedDateTime","ormtype":"timestamp","hb_populateenabled":false},"newFlag":{"name":"newFlag","persistent":false,"type":"boolean"},"validations":{"name":"validations","persistent":false,"type":"struct"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"},"placeOrderCreditTransactionType":{"name":"placeOrderCreditTransactionType","ormtype":"string","hb_formattype":"rbKey","hb_formfieldtype":"select","column":"placeOrderCreditTxType"},"createdByAccountID":{"name":"createdByAccountID","ormtype":"string","hb_populateenabled":false},"saveAccountPaymentMethodTransactionTypeOptions":{"name":"saveAccountPaymentMethodTransactionTypeOptions","persistent":false},"remoteID":{"name":"remoteID","ormtype":"string"},"attributeValuesByAttributeIDStruct":{"name":"attributeValuesByAttributeIDStruct","persistent":false,"type":"struct"},"modifiedByAccountID":{"name":"modifiedByAccountID","ormtype":"string","hb_populateenabled":false},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"assignedAttributeSetSmartList":{"name":"assignedAttributeSetSmartList","persistent":false,"type":"any"},"accountPaymentMethods":{"inverse":true,"name":"accountPaymentMethods","fieldtype":"one-to-many","singularname":"accountPaymentMethod","cascade":"all","lazy":"extra","cfc":"AccountPaymentMethod","fkcolumn":"paymentMethodID","type":"array"},"saveAccountPaymentMethodEncryptFlag":{"name":"saveAccountPaymentMethodEncryptFlag","ormtype":"boolean","column":"saveAccPaymentMethodEncFlag"},"paymentMethodType":{"name":"paymentMethodType","ormtype":"string","hb_formattype":"rbKey"},"allowSaveFlag":{"name":"allowSaveFlag","ormtype":"boolean","default":false},"modifiedByAccount":{"name":"modifiedByAccount","persistent":false},"placeOrderChargeTransactionType":{"name":"placeOrderChargeTransactionType","ormtype":"string","hb_formattype":"rbKey","hb_formfieldtype":"select","column":"placeOrderChargeTxType"},"paymentMethodID":{"generator":"uuid","name":"paymentMethodID","fieldtype":"id","ormtype":"string","unsavedvalue":"","length":32,"default":""},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"createdByAccount":{"name":"createdByAccount","persistent":false},"simpleRepresentation":{"name":"simpleRepresentation","persistent":false,"type":"string"},"orderPayments":{"inverse":true,"name":"orderPayments","fieldtype":"one-to-many","singularname":"orderPayment","cascade":"all-delete-orphan","lazy":"extra","cfc":"OrderPayment","fkcolumn":"paymentMethodID","type":"array"},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"persistableErrors":{"name":"persistableErrors","persistent":false,"type":"array"},"subscriptionRenewalTransactionType":{"name":"subscriptionRenewalTransactionType","ormtype":"string","hb_formattype":"rbKey","hb_formfieldtype":"select","column":"subscriptionRenewalTxType"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"encryptedPropertiesExistFlag":{"name":"encryptedPropertiesExistFlag","persistent":false,"type":"boolean"},"rollbackProcessedFlag":{"name":"rollbackProcessedFlag","persistent":false,"type":"boolean"},"attributeValuesByAttributeCodeStruct":{"name":"attributeValuesByAttributeCodeStruct","persistent":false,"type":"struct"},"paymentIntegration":{"name":"paymentIntegration","fieldtype":"many-to-one","cfc":"Integration","fkcolumn":"paymentIntegrationID"},"saveAccountPaymentMethodTransactionType":{"name":"saveAccountPaymentMethodTransactionType","ormtype":"string","hb_formattype":"rbKey","hb_formfieldtype":"select","column":"saveAccountPaymentMethodTxType"},"placeOrderCreditTransactionTypeOptions":{"name":"placeOrderCreditTransactionTypeOptions","persistent":false},"paymentIntegrationOptions":{"name":"paymentIntegrationOptions","persistent":false},"saveOrderPaymentTransactionType":{"name":"saveOrderPaymentTransactionType","ormtype":"string","hb_formattype":"rbKey","hb_formfieldtype":"select","column":"saveOrderPaymentTxType"},"saveOrderPaymentTransactionTypeOptions":{"name":"saveOrderPaymentTransactionTypeOptions","persistent":false},"placeOrderChargeTransactionTypeOptions":{"name":"placeOrderChargeTransactionTypeOptions","persistent":false},"activeFlag":{"name":"activeFlag","ormtype":"boolean","default":false},"paymentMethodName":{"name":"paymentMethodName","ormtype":"string"},"saveOrderPaymentEncryptFlag":{"name":"saveOrderPaymentEncryptFlag","ormtype":"boolean"}};
                	entities['PaymentMethod'].className = 'PaymentMethod';
                	validations['PaymentMethod'] = {"properties":{"paymentMethodType":[{"inList":"cash,check,creditCard,external,giftCard,termPayment","required":true,"contexts":"save"}],"saveAccountPaymentMethodTransactionType":[{"required":true,"contexts":"save","conditions":"allowSaveFlagTrueSaveDataFalse"}],"orderPayments":[{"maxCollection":0,"contexts":"delete"}],"paymentMethodName":[{"required":true,"contexts":"save"}],"accountPaymentMethods":[{"maxCollection":0,"contexts":"delete"}]},"conditions":{"allowSaveFlagTrueSaveDataFalse":{"allowSaveFlag":{"eq":true},"saveAccountPaymentMethodEncryptFlag":{"eq":false}}}};
                	defaultValues['PaymentMethod'] = {
                	paymentMethodID:'',
										paymentMethodName:null,
									paymentMethodType:null,
									allowSaveFlag:false,
									activeFlag:false,
									sortOrder:null,
									saveAccountPaymentMethodTransactionType:null,
									saveAccountPaymentMethodEncryptFlag:null,
									saveOrderPaymentTransactionType:null,
									saveOrderPaymentEncryptFlag:null,
									placeOrderChargeTransactionType:null,
									placeOrderCreditTransactionType:null,
									subscriptionRenewalTransactionType:null,
									remoteID:null,
									createdDateTime:'',
										createdByAccountID:null,
									modifiedDateTime:'',
										modifiedByAccountID:null,
									
						z:''
	                };
                
                	entities['Location'] = {"emailTemplates":{"name":"emailTemplates","persistent":false,"type":"struct"},"createdDateTime":{"name":"createdDateTime","ormtype":"timestamp","hb_populateenabled":false},"printTemplates":{"name":"printTemplates","persistent":false,"type":"struct"},"processObjects":{"name":"processObjects","persistent":false,"type":"struct"},"baseLocation":{"name":"baseLocation","persistent":false,"type":"string"},"settingValueFormatted":{"name":"settingValueFormatted","persistent":false,"type":"any"},"auditSmartList":{"name":"auditSmartList","persistent":false,"type":"any"},"locationName":{"name":"locationName","ormtype":"string"},"modifiedDateTime":{"name":"modifiedDateTime","ormtype":"timestamp","hb_populateenabled":false},"physicals":{"inverse":true,"name":"physicals","fieldtype":"many-to-many","singularname":"physical","inversejoincolumn":"physicalID","cfc":"Physical","fkcolumn":"locationID","type":"array","linktable":"SwPhysicalLocation"},"locationPathName":{"name":"locationPathName","persistent":false},"newFlag":{"name":"newFlag","persistent":false,"type":"boolean"},"validations":{"name":"validations","persistent":false,"type":"struct"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"},"createdByAccountID":{"name":"createdByAccountID","ormtype":"string","hb_populateenabled":false},"remoteID":{"name":"remoteID","ormtype":"string"},"modifiedByAccountID":{"name":"modifiedByAccountID","ormtype":"string","hb_populateenabled":false},"attributeValuesByAttributeIDStruct":{"name":"attributeValuesByAttributeIDStruct","persistent":false,"type":"struct"},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"primaryAddress":{"name":"primaryAddress","fieldtype":"many-to-one","cfc":"LocationAddress","fkcolumn":"locationAddressID"},"assignedAttributeSetSmartList":{"name":"assignedAttributeSetSmartList","persistent":false,"type":"any"},"childLocations":{"inverse":true,"name":"childLocations","fieldtype":"one-to-many","singularname":"childLocation","cascade":"all","cfc":"Location","type":"array","fkcolumn":"parentLocationID"},"parentLocation":{"name":"parentLocation","fieldtype":"many-to-one","cfc":"Location","fkcolumn":"parentLocationID"},"locationID":{"generator":"uuid","name":"locationID","fieldtype":"id","ormtype":"string","unsavedvalue":"","length":32,"default":""},"modifiedByAccount":{"name":"modifiedByAccount","persistent":false},"attributeValues":{"inverse":true,"name":"attributeValues","fieldtype":"one-to-many","singularname":"attributeValue","cascade":"all-delete-orphan","cfc":"AttributeValue","fkcolumn":"locationID","type":"array"},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"createdByAccount":{"name":"createdByAccount","persistent":false},"simpleRepresentation":{"name":"simpleRepresentation","persistent":false,"type":"string"},"locationIDPath":{"name":"locationIDPath","ormtype":"string"},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"locationConfigurations":{"inverse":true,"name":"locationConfigurations","fieldtype":"one-to-many","singularname":"locationConfiguration","cascade":"all-delete-orphan","cfc":"LocationConfiguration","fkcolumn":"locationID","type":"array"},"locationAddresses":{"inverse":true,"name":"locationAddresses","fieldtype":"one-to-many","singularname":"locationAddress","cascade":"all-delete-orphan","cfc":"LocationAddress","fkcolumn":"locationID","type":"array"},"persistableErrors":{"name":"persistableErrors","persistent":false,"type":"array"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"encryptedPropertiesExistFlag":{"name":"encryptedPropertiesExistFlag","persistent":false,"type":"boolean"},"rollbackProcessedFlag":{"name":"rollbackProcessedFlag","persistent":false,"type":"boolean"},"attributeValuesByAttributeCodeStruct":{"name":"attributeValuesByAttributeCodeStruct","persistent":false,"type":"struct"},"activeFlag":{"name":"activeFlag","ormtype":"boolean"},"stocks":{"inverse":true,"name":"stocks","fieldtype":"one-to-many","singularname":"stock","cascade":"all-delete-orphan","lazy":"extra","cfc":"Stock","fkcolumn":"locationID","type":"array"}};
                	entities['Location'].className = 'Location';
                	validations['Location'] = {"properties":{"physicalCounts":[{"maxCollection":0,"contexts":"delete"}],"locationName":[{"required":true,"contexts":"save"}],"physicals":[{"maxCollection":0,"contexts":"delete"}],"primaryAddress":[{"required":true,"contexts":"save"}],"stocks":[{"maxCollection":0,"contexts":"delete"}]}};
                	defaultValues['Location'] = {
                	locationID:'',
										locationIDPath:'',
										locationName:null,
									activeFlag:1,
									remoteID:null,
									createdDateTime:'',
										createdByAccountID:null,
									modifiedDateTime:'',
										modifiedByAccountID:null,
									
						z:''
	                };
                
                	entities['StockAdjustmentDeliveryItem'] = {"createdDateTime":{"name":"createdDateTime","ormtype":"timestamp","hb_populateenabled":false},"emailTemplates":{"name":"emailTemplates","persistent":false,"type":"struct"},"printTemplates":{"name":"printTemplates","persistent":false,"type":"struct"},"processObjects":{"name":"processObjects","persistent":false,"type":"struct"},"settingValueFormatted":{"name":"settingValueFormatted","persistent":false,"type":"any"},"auditSmartList":{"name":"auditSmartList","persistent":false,"type":"any"},"modifiedDateTime":{"name":"modifiedDateTime","ormtype":"timestamp","hb_populateenabled":false},"stock":{"name":"stock","fieldtype":"many-to-one","cfc":"Stock","fkcolumn":"stockID"},"newFlag":{"name":"newFlag","persistent":false,"type":"boolean"},"validations":{"name":"validations","persistent":false,"type":"struct"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"},"stockAdjustmentItem":{"name":"stockAdjustmentItem","fieldtype":"many-to-one","cfc":"StockAdjustmentItem","fkcolumn":"stockAdjustmentItemID"},"createdByAccountID":{"name":"createdByAccountID","ormtype":"string","hb_populateenabled":false},"attributeValuesByAttributeIDStruct":{"name":"attributeValuesByAttributeIDStruct","persistent":false,"type":"struct"},"modifiedByAccountID":{"name":"modifiedByAccountID","ormtype":"string","hb_populateenabled":false},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"stockAdjustmentDeliveryItemID":{"generator":"uuid","name":"stockAdjustmentDeliveryItemID","fieldtype":"id","ormtype":"string","unsavedvalue":"","length":32,"default":""},"assignedAttributeSetSmartList":{"name":"assignedAttributeSetSmartList","persistent":false,"type":"any"},"quantity":{"name":"quantity","ormtype":"integer"},"modifiedByAccount":{"name":"modifiedByAccount","persistent":false},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"simpleRepresentation":{"name":"simpleRepresentation","persistent":false,"type":"string"},"createdByAccount":{"name":"createdByAccount","persistent":false},"stockAdjustmentDelivery":{"name":"stockAdjustmentDelivery","fieldtype":"many-to-one","cfc":"StockAdjustmentDelivery","fkcolumn":"stockAdjustmentDeliveryID"},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"persistableErrors":{"name":"persistableErrors","persistent":false,"type":"array"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"encryptedPropertiesExistFlag":{"name":"encryptedPropertiesExistFlag","persistent":false,"type":"boolean"},"rollbackProcessedFlag":{"name":"rollbackProcessedFlag","persistent":false,"type":"boolean"},"attributeValuesByAttributeCodeStruct":{"name":"attributeValuesByAttributeCodeStruct","persistent":false,"type":"struct"}};
                	entities['StockAdjustmentDeliveryItem'].className = 'StockAdjustmentDeliveryItem';
                	validations['StockAdjustmentDeliveryItem'] = {"properties":{"stockAdjustmentDelivery":[{"required":true,"contexts":"save"}],"stock":[{"required":true,"contexts":"save"}],"stockAdjustmentItem":[{"required":true,"contexts":"save"}]}};
                	defaultValues['StockAdjustmentDeliveryItem'] = {
                	stockAdjustmentDeliveryItemID:'',
										quantity:null,
									createdDateTime:'',
										createdByAccountID:null,
									modifiedDateTime:'',
										modifiedByAccountID:null,
									
						z:''
	                };
                
                	entities['AccountLoyaltyTransaction'] = {"emailTemplates":{"name":"emailTemplates","persistent":false,"type":"struct"},"createdDateTime":{"name":"createdDateTime","ormtype":"timestamp","hb_populateenabled":false},"printTemplates":{"name":"printTemplates","persistent":false,"type":"struct"},"processObjects":{"name":"processObjects","persistent":false,"type":"struct"},"settingValueFormatted":{"name":"settingValueFormatted","persistent":false,"type":"any"},"auditSmartList":{"name":"auditSmartList","persistent":false,"type":"any"},"orderItem":{"name":"orderItem","fieldtype":"many-to-one","cfc":"OrderItem","fkcolumn":"orderItemID"},"order":{"name":"order","fieldtype":"many-to-one","cfc":"Order","fkcolumn":"orderID"},"modifiedDateTime":{"name":"modifiedDateTime","ormtype":"timestamp","hb_populateenabled":false},"newFlag":{"name":"newFlag","persistent":false,"type":"boolean"},"validations":{"name":"validations","persistent":false,"type":"struct"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"},"createdByAccountID":{"name":"createdByAccountID","ormtype":"string","hb_populateenabled":false},"expirationDateTime":{"name":"expirationDateTime","ormtype":"timestamp"},"redemptionType":{"name":"redemptionType","ormtype":"string"},"remoteID":{"name":"remoteID","ormtype":"string"},"modifiedByAccountID":{"name":"modifiedByAccountID","ormtype":"string","hb_populateenabled":false},"attributeValuesByAttributeIDStruct":{"name":"attributeValuesByAttributeIDStruct","persistent":false,"type":"struct"},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"loyaltyRedemption":{"name":"loyaltyRedemption","fieldtype":"many-to-one","cfc":"LoyaltyRedemption","fkcolumn":"loyaltyRedemptionID"},"assignedAttributeSetSmartList":{"name":"assignedAttributeSetSmartList","persistent":false,"type":"any"},"accountLoyaltyTransactionID":{"generator":"uuid","name":"accountLoyaltyTransactionID","fieldtype":"id","ormtype":"string","unsavedvalue":"","length":32,"default":""},"modifiedByAccount":{"name":"modifiedByAccount","persistent":false},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"createdByAccount":{"name":"createdByAccount","persistent":false},"simpleRepresentation":{"name":"simpleRepresentation","persistent":false,"type":"string"},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"persistableErrors":{"name":"persistableErrors","persistent":false,"type":"array"},"orderFulfillment":{"name":"orderFulfillment","fieldtype":"many-to-one","cfc":"OrderFulfillment","fkcolumn":"orderFulfillmentID"},"loyaltyAccruement":{"name":"loyaltyAccruement","fieldtype":"many-to-one","cfc":"LoyaltyAccruement","fkcolumn":"loyaltyAccruementID"},"pointsIn":{"name":"pointsIn","ormtype":"integer"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"encryptedPropertiesExistFlag":{"name":"encryptedPropertiesExistFlag","persistent":false,"type":"boolean"},"rollbackProcessedFlag":{"name":"rollbackProcessedFlag","persistent":false,"type":"boolean"},"attributeValuesByAttributeCodeStruct":{"name":"attributeValuesByAttributeCodeStruct","persistent":false,"type":"struct"},"pointsOut":{"name":"pointsOut","ormtype":"integer"},"accountLoyalty":{"name":"accountLoyalty","fieldtype":"many-to-one","cfc":"AccountLoyalty","fkcolumn":"accountLoyaltyID"},"accruementType":{"name":"accruementType","ormtype":"string"}};
                	entities['AccountLoyaltyTransaction'].className = 'AccountLoyaltyTransaction';
                	validations['AccountLoyaltyTransaction'] = {"properties":{}};
                	defaultValues['AccountLoyaltyTransaction'] = {
                	accountLoyaltyTransactionID:'',
										accruementType:null,
									redemptionType:null,
									pointsIn:null,
									pointsOut:null,
									expirationDateTime:null,
									remoteID:null,
									createdDateTime:'',
										createdByAccountID:null,
									modifiedDateTime:'',
										modifiedByAccountID:null,
									
						z:''
	                };
                
                	entities['Currency'] = {"createdDateTime":{"name":"createdDateTime","ormtype":"timestamp","hb_populateenabled":false},"emailTemplates":{"name":"emailTemplates","persistent":false,"type":"struct"},"currencySymbol":{"name":"currencySymbol","ormtype":"string"},"printTemplates":{"name":"printTemplates","persistent":false,"type":"struct"},"processObjects":{"name":"processObjects","persistent":false,"type":"struct"},"settingValueFormatted":{"name":"settingValueFormatted","persistent":false,"type":"any"},"auditSmartList":{"name":"auditSmartList","persistent":false,"type":"any"},"modifiedDateTime":{"name":"modifiedDateTime","ormtype":"timestamp","hb_populateenabled":false},"formattedExample":{"name":"formattedExample","hb_formattype":"currency","persistent":false},"newFlag":{"name":"newFlag","persistent":false,"type":"boolean"},"validations":{"name":"validations","persistent":false,"type":"struct"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"},"currencyName":{"name":"currencyName","ormtype":"string"},"createdByAccountID":{"name":"createdByAccountID","ormtype":"string","hb_populateenabled":false},"currencyRates":{"inverse":true,"name":"currencyRates","fieldtype":"one-to-many","singularname":"currencyRate","cascade":"all-delete-orphan","cfc":"CurrencyRate","fkcolumn":"currencyCode","type":"array"},"currencyLocalOptions":{"name":"currencyLocalOptions","persistent":false},"remoteID":{"name":"remoteID","ormtype":"string"},"modifiedByAccountID":{"name":"modifiedByAccountID","ormtype":"string","hb_populateenabled":false},"attributeValuesByAttributeIDStruct":{"name":"attributeValuesByAttributeIDStruct","persistent":false,"type":"struct"},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"assignedAttributeSetSmartList":{"name":"assignedAttributeSetSmartList","persistent":false,"type":"any"},"currencyISONumber":{"name":"currencyISONumber","ormtype":"integer"},"modifiedByAccount":{"name":"modifiedByAccount","persistent":false},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"createdByAccount":{"name":"createdByAccount","persistent":false},"simpleRepresentation":{"name":"simpleRepresentation","persistent":false,"type":"string"},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"persistableErrors":{"name":"persistableErrors","persistent":false,"type":"array"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"encryptedPropertiesExistFlag":{"name":"encryptedPropertiesExistFlag","persistent":false,"type":"boolean"},"rollbackProcessedFlag":{"name":"rollbackProcessedFlag","persistent":false,"type":"boolean"},"attributeValuesByAttributeCodeStruct":{"name":"attributeValuesByAttributeCodeStruct","persistent":false,"type":"struct"},"activeFlag":{"name":"activeFlag","ormtype":"boolean"},"currencyCode":{"unique":true,"name":"currencyCode","fieldtype":"id","ormtype":"string","generated":"never"}};
                	entities['Currency'].className = 'Currency';
                	validations['Currency'] = {"properties":{}};
                	defaultValues['Currency'] = {
                	currencyCode:null,
									currencyISONumber:null,
									activeFlag:1,
									currencyName:null,
									currencySymbol:null,
									remoteID:null,
									createdDateTime:'',
										createdByAccountID:null,
									modifiedDateTime:'',
										modifiedByAccountID:null,
									
						z:''
	                };
                
                	entities['AccountAddress'] = {"createdDateTime":{"name":"createdDateTime","ormtype":"timestamp","hb_populateenabled":false},"accountAddressName":{"name":"accountAddressName","ormtype":"string","hb_populateenabled":"public","hint":"Nickname for this account Address"},"emailTemplates":{"name":"emailTemplates","persistent":false,"type":"struct"},"printTemplates":{"name":"printTemplates","persistent":false,"type":"struct"},"processObjects":{"name":"processObjects","persistent":false,"type":"struct"},"settingValueFormatted":{"name":"settingValueFormatted","persistent":false,"type":"any"},"auditSmartList":{"name":"auditSmartList","persistent":false,"type":"any"},"modifiedDateTime":{"name":"modifiedDateTime","ormtype":"timestamp","hb_populateenabled":false},"newFlag":{"name":"newFlag","persistent":false,"type":"boolean"},"validations":{"name":"validations","persistent":false,"type":"struct"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"},"account":{"name":"account","fieldtype":"many-to-one","cfc":"Account","fkcolumn":"accountID"},"createdByAccountID":{"name":"createdByAccountID","ormtype":"string","hb_populateenabled":false},"remoteID":{"name":"remoteID","ormtype":"string"},"attributeValuesByAttributeIDStruct":{"name":"attributeValuesByAttributeIDStruct","persistent":false,"type":"struct"},"modifiedByAccountID":{"name":"modifiedByAccountID","ormtype":"string","hb_populateenabled":false},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"assignedAttributeSetSmartList":{"name":"assignedAttributeSetSmartList","persistent":false,"type":"any"},"accountAddressID":{"generator":"uuid","name":"accountAddressID","fieldtype":"id","ormtype":"string","unsavedvalue":"","length":32,"default":""},"modifiedByAccount":{"name":"modifiedByAccount","persistent":false},"attributeValues":{"inverse":true,"name":"attributeValues","fieldtype":"one-to-many","singularname":"attributeValue","cascade":"all-delete-orphan","cfc":"AttributeValue","fkcolumn":"accountAddressID","type":"array"},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"simpleRepresentation":{"name":"simpleRepresentation","persistent":false,"type":"string"},"createdByAccount":{"name":"createdByAccount","persistent":false},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"address":{"name":"address","fieldtype":"many-to-one","hb_populateenabled":"public","cascade":"all","cfc":"Address","fkcolumn":"addressID","hb_populatevalidationcontext":"full"},"persistableErrors":{"name":"persistableErrors","persistent":false,"type":"array"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"encryptedPropertiesExistFlag":{"name":"encryptedPropertiesExistFlag","persistent":false,"type":"boolean"},"rollbackProcessedFlag":{"name":"rollbackProcessedFlag","persistent":false,"type":"boolean"},"attributeValuesByAttributeCodeStruct":{"name":"attributeValuesByAttributeCodeStruct","persistent":false,"type":"struct"}};
                	entities['AccountAddress'].className = 'AccountAddress';
                	validations['AccountAddress'] = {"properties":{"account":[{"required":true,"contexts":"save"}]},"populatedPropertyValidation":{"address":[{"validate":"full"}]}};
                	defaultValues['AccountAddress'] = {
                	accountAddressID:'',
										accountAddressName:null,
									remoteID:null,
									createdDateTime:'',
										createdByAccountID:null,
									modifiedDateTime:'',
										modifiedByAccountID:null,
									
						z:''
	                };
                
                	entities['Physical'] = {"emailTemplates":{"name":"emailTemplates","persistent":false,"type":"struct"},"createdDateTime":{"name":"createdDateTime","ormtype":"timestamp","hb_populateenabled":false},"printTemplates":{"name":"printTemplates","persistent":false,"type":"struct"},"physicalCounts":{"inverse":true,"name":"physicalCounts","fieldtype":"one-to-many","singularname":"physicalCount","cascade":"all-delete-orphan","cfc":"PhysicalCount","fkcolumn":"physicalID","type":"array"},"processObjects":{"name":"processObjects","persistent":false,"type":"struct"},"brands":{"name":"brands","fieldtype":"many-to-many","singularname":"brand","inversejoincolumn":"BrandID","cfc":"Brand","fkcolumn":"physicalID","linktable":"SwPhysicalBrand","type":"array"},"physicalName":{"name":"physicalName","ormtype":"string"},"settingValueFormatted":{"name":"settingValueFormatted","persistent":false,"type":"any"},"auditSmartList":{"name":"auditSmartList","persistent":false,"type":"any"},"modifiedDateTime":{"name":"modifiedDateTime","ormtype":"timestamp","hb_populateenabled":false},"newFlag":{"name":"newFlag","persistent":false,"type":"boolean"},"validations":{"name":"validations","persistent":false,"type":"struct"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"},"physicalStatusType":{"name":"physicalStatusType","fieldtype":"many-to-one","hb_optionssmartlistdata":"f:parentType.systemCode=physicalStatusType","cfc":"Type","fkcolumn":"physicalStatusTypeID"},"discrepancyQuery":{"name":"discrepancyQuery","persistent":false},"physicalID":{"generator":"uuid","name":"physicalID","fieldtype":"id","ormtype":"string","unsavedvalue":"","length":32,"default":""},"locations":{"name":"locations","fieldtype":"many-to-many","singularname":"location","inversejoincolumn":"locationID","cfc":"Location","fkcolumn":"physicalID","linktable":"SwPhysicalLocation","type":"array"},"createdByAccountID":{"name":"createdByAccountID","ormtype":"string","hb_populateenabled":false},"remoteID":{"name":"remoteID","ormtype":"string"},"modifiedByAccountID":{"name":"modifiedByAccountID","ormtype":"string","hb_populateenabled":false},"attributeValuesByAttributeIDStruct":{"name":"attributeValuesByAttributeIDStruct","persistent":false,"type":"struct"},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"assignedAttributeSetSmartList":{"name":"assignedAttributeSetSmartList","persistent":false,"type":"any"},"physicalStatusTypeSystemCode":{"name":"physicalStatusTypeSystemCode","persistent":false},"modifiedByAccount":{"name":"modifiedByAccount","persistent":false},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"createdByAccount":{"name":"createdByAccount","persistent":false},"simpleRepresentation":{"name":"simpleRepresentation","persistent":false,"type":"string"},"products":{"name":"products","fieldtype":"many-to-many","singularname":"product","inversejoincolumn":"productID","cfc":"Product","fkcolumn":"physicalID","linktable":"SwPhysicalProduct","type":"array"},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"persistableErrors":{"name":"persistableErrors","persistent":false,"type":"array"},"skus":{"name":"skus","fieldtype":"many-to-many","singularname":"sku","inversejoincolumn":"skuID","cfc":"Sku","fkcolumn":"physicalID","linktable":"SwPhysicalSku","type":"array"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"encryptedPropertiesExistFlag":{"name":"encryptedPropertiesExistFlag","persistent":false,"type":"boolean"},"rollbackProcessedFlag":{"name":"rollbackProcessedFlag","persistent":false,"type":"boolean"},"attributeValuesByAttributeCodeStruct":{"name":"attributeValuesByAttributeCodeStruct","persistent":false,"type":"struct"},"stockAdjustments":{"inverse":true,"name":"stockAdjustments","fieldtype":"one-to-many","singularname":"stockAdjustment","cascade":"all-delete-orphan","cfc":"StockAdjustment","fkcolumn":"physicalID","type":"array"},"productTypes":{"name":"productTypes","fieldtype":"many-to-many","singularname":"productType","inversejoincolumn":"productTypeID","cfc":"ProductType","fkcolumn":"physicalID","linktable":"SwPhysicalProductType","type":"array"}};
                	entities['Physical'].className = 'Physical';
                	validations['Physical'] = {"properties":{"locations":[{"minCollection":1,"contexts":"save"}],"physicalStatusTypeSystemCode":[{"inList":"pstOpen","contexts":"delete,addPhysicalCount,commit,edit"}],"physicalName":[{"required":true,"contexts":"save"}]}};
                	defaultValues['Physical'] = {
                	physicalID:'',
										physicalName:null,
									remoteID:null,
									createdDateTime:'',
										createdByAccountID:null,
									modifiedDateTime:'',
										modifiedByAccountID:null,
									
						z:''
	                };
                
                	entities['Physical_AddPhysicalCount'] = {"locationID":{"name":"locationID","hb_formfieldtype":"select"},"populatedFlag":{"name":"populatedFlag"},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"preProcessDisplayedFlag":{"name":"preProcessDisplayedFlag"},"physical":{"name":"physical"},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"locationIDOptions":{"name":"locationIDOptions"},"countPostDateTime":{"name":"countPostDateTime","hb_rbkey":"entity.define.countPostDateTime","hb_formfieldtype":"datetime"},"countFile":{"name":"countFile","hb_formfieldtype":"file"},"validations":{"name":"validations","persistent":false,"type":"struct"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"}};
                	entities['Physical_AddPhysicalCount'].className = 'Physical_AddPhysicalCount';
                	validations['Physical_AddPhysicalCount'] = {"properties":{"location":[{"required":true}],"countPostDateTime":[{"dataType":"date","required":true}]}};
                	defaultValues['Physical_AddPhysicalCount'] = {
                	physical:'',
										locationID:'',
									countPostDateTime:'',
									countFile:'',
									locationIDOptions:[],
										preProcessDisplayedFlag:0,
										populatedFlag:0,
										
						z:''
	                };
                
                	entities['PaymentTerm'] = {"term":{"name":"term","fieldtype":"many-to-one","cfc":"Term","fkcolumn":"termID"},"createdDateTime":{"name":"createdDateTime","ormtype":"timestamp","hb_populateenabled":false},"emailTemplates":{"name":"emailTemplates","persistent":false,"type":"struct"},"printTemplates":{"name":"printTemplates","persistent":false,"type":"struct"},"sortOrder":{"name":"sortOrder","ormtype":"integer"},"processObjects":{"name":"processObjects","persistent":false,"type":"struct"},"settingValueFormatted":{"name":"settingValueFormatted","persistent":false,"type":"any"},"auditSmartList":{"name":"auditSmartList","persistent":false,"type":"any"},"modifiedDateTime":{"name":"modifiedDateTime","ormtype":"timestamp","hb_populateenabled":false},"paymentTermName":{"name":"paymentTermName","ormtype":"string"},"newFlag":{"name":"newFlag","persistent":false,"type":"boolean"},"validations":{"name":"validations","persistent":false,"type":"struct"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"},"createdByAccountID":{"name":"createdByAccountID","ormtype":"string","hb_populateenabled":false},"remoteID":{"name":"remoteID","ormtype":"string"},"modifiedByAccountID":{"name":"modifiedByAccountID","ormtype":"string","hb_populateenabled":false},"attributeValuesByAttributeIDStruct":{"name":"attributeValuesByAttributeIDStruct","persistent":false,"type":"struct"},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"paymentTermID":{"generator":"uuid","name":"paymentTermID","fieldtype":"id","ormtype":"string","unsavedvalue":"","length":32,"default":""},"assignedAttributeSetSmartList":{"name":"assignedAttributeSetSmartList","persistent":false,"type":"any"},"accountPaymentMethods":{"inverse":true,"name":"accountPaymentMethods","fieldtype":"one-to-many","orderby":"createdDateTime desc","singularname":"accountPaymentMethod","hb_populateenabled":false,"cfc":"AccountPaymentMethod","fkcolumn":"paymentTermID","type":"array"},"modifiedByAccount":{"name":"modifiedByAccount","persistent":false},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"createdByAccount":{"name":"createdByAccount","persistent":false},"simpleRepresentation":{"name":"simpleRepresentation","persistent":false,"type":"string"},"orderPayments":{"inverse":true,"name":"orderPayments","fieldtype":"one-to-many","orderby":"createdDateTime desc","singularname":"orderPayment","hb_populateenabled":false,"cfc":"OrderPayment","fkcolumn":"paymentTermID","type":"array"},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"persistableErrors":{"name":"persistableErrors","persistent":false,"type":"array"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"encryptedPropertiesExistFlag":{"name":"encryptedPropertiesExistFlag","persistent":false,"type":"boolean"},"rollbackProcessedFlag":{"name":"rollbackProcessedFlag","persistent":false,"type":"boolean"},"attributeValuesByAttributeCodeStruct":{"name":"attributeValuesByAttributeCodeStruct","persistent":false,"type":"struct"},"activeFlag":{"name":"activeFlag","ormtype":"boolean"}};
                	entities['PaymentTerm'].className = 'PaymentTerm';
                	validations['PaymentTerm'] = {"properties":{"orderPayments":[{"maxCollection":0,"contexts":"delete"}],"accountPaymentMethods":[{"maxCollection":0,"contexts":"delete"}]}};
                	defaultValues['PaymentTerm'] = {
                	paymentTermID:'',
										activeFlag:1,
									paymentTermName:null,
									sortOrder:null,
									remoteID:null,
									createdDateTime:'',
										createdByAccountID:null,
									modifiedDateTime:'',
										modifiedByAccountID:null,
									
						z:''
	                };
                
                	entities['SubscriptionBenefit'] = {"priceGroups":{"name":"priceGroups","fieldtype":"many-to-many","singularname":"priceGroup","inversejoincolumn":"priceGroupID","cascade":"all","cfc":"PriceGroup","fkcolumn":"subscriptionBenefitID","type":"array","linktable":"SwSubsBenefitPriceGroup"},"emailTemplates":{"name":"emailTemplates","persistent":false,"type":"struct"},"createdDateTime":{"name":"createdDateTime","ormtype":"timestamp","hb_populateenabled":false},"printTemplates":{"name":"printTemplates","persistent":false,"type":"struct"},"subscriptionBenefitID":{"generator":"uuid","name":"subscriptionBenefitID","fieldtype":"id","ormtype":"string","unsavedvalue":"","length":32,"default":""},"processObjects":{"name":"processObjects","persistent":false,"type":"struct"},"settingValueFormatted":{"name":"settingValueFormatted","persistent":false,"type":"any"},"auditSmartList":{"name":"auditSmartList","persistent":false,"type":"any"},"modifiedDateTime":{"name":"modifiedDateTime","ormtype":"timestamp","hb_populateenabled":false},"promotions":{"name":"promotions","fieldtype":"many-to-many","singularname":"promotion","inversejoincolumn":"promotionID","cascade":"all","cfc":"Promotion","fkcolumn":"subscriptionBenefitID","type":"array","linktable":"SwSubsBenefitPromotion"},"newFlag":{"name":"newFlag","persistent":false,"type":"boolean"},"validations":{"name":"validations","persistent":false,"type":"struct"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"},"accessType":{"name":"accessType","fieldtype":"many-to-one","hb_optionssmartlistdata":"f:parentType.systemCode=accessType","cfc":"Type","fkcolumn":"accessTypeID"},"createdByAccountID":{"name":"createdByAccountID","ormtype":"string","hb_populateenabled":false},"remoteID":{"name":"remoteID","ormtype":"string"},"modifiedByAccountID":{"name":"modifiedByAccountID","ormtype":"string","hb_populateenabled":false},"attributeValuesByAttributeIDStruct":{"name":"attributeValuesByAttributeIDStruct","persistent":false,"type":"struct"},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"assignedAttributeSetSmartList":{"name":"assignedAttributeSetSmartList","persistent":false,"type":"any"},"modifiedByAccount":{"name":"modifiedByAccount","persistent":false},"attributeValues":{"inverse":true,"name":"attributeValues","fieldtype":"one-to-many","singularname":"attributeValue","cascade":"all-delete-orphan","cfc":"AttributeValue","fkcolumn":"subscriptionBenefitID"},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"createdByAccount":{"name":"createdByAccount","persistent":false},"simpleRepresentation":{"name":"simpleRepresentation","persistent":false,"type":"string"},"contents":{"name":"contents","fieldtype":"many-to-many","singularname":"content","inversejoincolumn":"contentID","cascade":"all","cfc":"Content","fkcolumn":"subscriptionBenefitID","type":"array","linktable":"SwSubsBenefitContent"},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"persistableErrors":{"name":"persistableErrors","persistent":false,"type":"array"},"skus":{"inverse":true,"name":"skus","fieldtype":"many-to-many","singularname":"sku","inversejoincolumn":"skuID","cfc":"Sku","fkcolumn":"subscriptionBenefitID","type":"array","linktable":"SwSkuSubsBenefit"},"excludedCategories":{"name":"excludedCategories","fieldtype":"many-to-many","singularname":"excludedCategory","inversejoincolumn":"categoryID","cascade":"all","cfc":"Category","fkcolumn":"subscriptionBenefitID","type":"array","linktable":"SwSubsBenefitExclCategory"},"subscriptionBenefitName":{"name":"subscriptionBenefitName","ormtype":"string"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"encryptedPropertiesExistFlag":{"name":"encryptedPropertiesExistFlag","persistent":false,"type":"boolean"},"rollbackProcessedFlag":{"name":"rollbackProcessedFlag","persistent":false,"type":"boolean"},"attributeValuesByAttributeCodeStruct":{"name":"attributeValuesByAttributeCodeStruct","persistent":false,"type":"struct"},"excludedContents":{"name":"excludedContents","fieldtype":"many-to-many","singularname":"excludedContent","inversejoincolumn":"contentID","cascade":"all","cfc":"Content","fkcolumn":"subscriptionBenefitID","type":"array","linktable":"SwSubsBenefitExclContent"},"maxUseCount":{"name":"maxUseCount","ormtype":"integer"},"categories":{"name":"categories","fieldtype":"many-to-many","singularname":"category","inversejoincolumn":"categoryID","cascade":"all","cfc":"Category","fkcolumn":"subscriptionBenefitID","type":"array","linktable":"SwSubsBenefitCategory"}};
                	entities['SubscriptionBenefit'].className = 'SubscriptionBenefit';
                	validations['SubscriptionBenefit'] = {"properties":{"accessType":[{"required":true,"contexts":"save"}],"maxUseCount":[{"dataType":"numeric","required":true,"contexts":"save"}],"skus":[{"maxCollection":0,"contexts":"delete"}],"subscriptionBenefitName":[{"required":true,"contexts":"save"}]}};
                	defaultValues['SubscriptionBenefit'] = {
                	subscriptionBenefitID:'',
										subscriptionBenefitName:null,
									maxUseCount:null,
									remoteID:null,
									createdDateTime:'',
										createdByAccountID:null,
									modifiedDateTime:'',
										modifiedByAccountID:null,
									
						z:''
	                };
                
                	entities['PromotionRewardCurrency'] = {"createdDateTime":{"name":"createdDateTime","ormtype":"timestamp","hb_populateenabled":false},"emailTemplates":{"name":"emailTemplates","persistent":false,"type":"struct"},"printTemplates":{"name":"printTemplates","persistent":false,"type":"struct"},"processObjects":{"name":"processObjects","persistent":false,"type":"struct"},"settingValueFormatted":{"name":"settingValueFormatted","persistent":false,"type":"any"},"auditSmartList":{"name":"auditSmartList","persistent":false,"type":"any"},"modifiedDateTime":{"name":"modifiedDateTime","ormtype":"timestamp","hb_populateenabled":false},"newFlag":{"name":"newFlag","persistent":false,"type":"boolean"},"validations":{"name":"validations","persistent":false,"type":"struct"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"},"promotionReward":{"name":"promotionReward","fieldtype":"many-to-one","cfc":"PromotionReward","fkcolumn":"promotionRewardID"},"createdByAccountID":{"name":"createdByAccountID","ormtype":"string","hb_populateenabled":false},"remoteID":{"name":"remoteID","ormtype":"string"},"attributeValuesByAttributeIDStruct":{"name":"attributeValuesByAttributeIDStruct","persistent":false,"type":"struct"},"modifiedByAccountID":{"name":"modifiedByAccountID","ormtype":"string","hb_populateenabled":false},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"assignedAttributeSetSmartList":{"name":"assignedAttributeSetSmartList","persistent":false,"type":"any"},"modifiedByAccount":{"name":"modifiedByAccount","persistent":false},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"simpleRepresentation":{"name":"simpleRepresentation","persistent":false,"type":"string"},"createdByAccount":{"name":"createdByAccount","persistent":false},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"persistableErrors":{"name":"persistableErrors","persistent":false,"type":"array"},"amount":{"name":"amount","ormtype":"big_decimal","hb_formattype":"currency","hb_rbkey":"entity.promotionReward.amount"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"encryptedPropertiesExistFlag":{"name":"encryptedPropertiesExistFlag","persistent":false,"type":"boolean"},"rollbackProcessedFlag":{"name":"rollbackProcessedFlag","persistent":false,"type":"boolean"},"attributeValuesByAttributeCodeStruct":{"name":"attributeValuesByAttributeCodeStruct","persistent":false,"type":"struct"},"currency":{"name":"currency","fieldtype":"many-to-one","cfc":"Currency","fkcolumn":"currencyCode"},"promotionRewardCurrencyID":{"generator":"uuid","name":"promotionRewardCurrencyID","fieldtype":"id","ormtype":"string","unsavedvalue":"","length":32,"default":""},"currencyCode":{"update":false,"name":"currencyCode","insert":false}};
                	entities['PromotionRewardCurrency'].className = 'PromotionRewardCurrency';
                	validations['PromotionRewardCurrency'] = {"properties":{"amount":[{"dataType":"numeric","required":false,"contexts":"save"}],"currencyCode":[{"contexts":"save","neqProperty":"promotionReward.currencyCode"}]}};
                	defaultValues['PromotionRewardCurrency'] = {
                	promotionRewardCurrencyID:'',
										amount:null,
									currencyCode:'USD',
									remoteID:null,
									createdDateTime:'',
										createdByAccountID:null,
									modifiedDateTime:'',
										modifiedByAccountID:null,
									
						z:''
	                };
                
                	entities['Vendor'] = {"vendorAddresses":{"inverse":true,"name":"vendorAddresses","fieldtype":"one-to-many","singularname":"vendorAddress","cascade":"all-delete-orphan","cfc":"VendorAddress","fkcolumn":"vendorID","type":"array"},"emailTemplates":{"name":"emailTemplates","persistent":false,"type":"struct"},"createdDateTime":{"name":"createdDateTime","ormtype":"timestamp","hb_populateenabled":false},"printTemplates":{"name":"printTemplates","persistent":false,"type":"struct"},"processObjects":{"name":"processObjects","persistent":false,"type":"struct"},"brands":{"name":"brands","fieldtype":"many-to-many","singularname":"brand","inversejoincolumn":"brandID","cfc":"Brand","fkcolumn":"vendorID","linktable":"SwVendorBrand"},"settingValueFormatted":{"name":"settingValueFormatted","persistent":false,"type":"any"},"auditSmartList":{"name":"auditSmartList","persistent":false,"type":"any"},"vendorID":{"generator":"uuid","name":"vendorID","fieldtype":"id","ormtype":"string","unsavedvalue":"","length":32,"default":""},"modifiedDateTime":{"name":"modifiedDateTime","ormtype":"timestamp","hb_populateenabled":false},"newFlag":{"name":"newFlag","persistent":false,"type":"boolean"},"validations":{"name":"validations","persistent":false,"type":"struct"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"},"createdByAccountID":{"name":"createdByAccountID","ormtype":"string","hb_populateenabled":false},"remoteID":{"name":"remoteID","ormtype":"string"},"modifiedByAccountID":{"name":"modifiedByAccountID","ormtype":"string","hb_populateenabled":false},"attributeValuesByAttributeIDStruct":{"name":"attributeValuesByAttributeIDStruct","persistent":false,"type":"struct"},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"primaryEmailAddress":{"name":"primaryEmailAddress","fieldtype":"many-to-one","cfc":"VendorEmailAddress","fkcolumn":"primaryEmailAddressID"},"primaryAddress":{"name":"primaryAddress","fieldtype":"many-to-one","cfc":"VendorAddress","fkcolumn":"primaryAddressID"},"vendorName":{"name":"vendorName","ormtype":"string"},"assignedAttributeSetSmartList":{"name":"assignedAttributeSetSmartList","persistent":false,"type":"any"},"modifiedByAccount":{"name":"modifiedByAccount","persistent":false},"attributeValues":{"inverse":true,"name":"attributeValues","fieldtype":"one-to-many","singularname":"attributeValue","cascade":"all-delete-orphan","cfc":"AttributeValue","fkcolumn":"vendorID","type":"array"},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"createdByAccount":{"name":"createdByAccount","persistent":false},"simpleRepresentation":{"name":"simpleRepresentation","persistent":false,"type":"string"},"vendorEmailAddresses":{"inverse":true,"name":"vendorEmailAddresses","fieldtype":"one-to-many","singularname":"vendorEmailAddress","cascade":"all-delete-orphan","cfc":"VendorEmailAddress","fkcolumn":"vendorID","type":"array"},"accountNumber":{"name":"accountNumber","ormtype":"string"},"products":{"name":"products","fieldtype":"many-to-many","singularname":"product","inversejoincolumn":"productID","cfc":"Product","fkcolumn":"vendorID","linktable":"SwVendorProduct"},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"persistableErrors":{"name":"persistableErrors","persistent":false,"type":"array"},"vendorWebsite":{"name":"vendorWebsite","ormtype":"string"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"encryptedPropertiesExistFlag":{"name":"encryptedPropertiesExistFlag","persistent":false,"type":"boolean"},"rollbackProcessedFlag":{"name":"rollbackProcessedFlag","persistent":false,"type":"boolean"},"attributeValuesByAttributeCodeStruct":{"name":"attributeValuesByAttributeCodeStruct","persistent":false,"type":"struct"},"vendorOrders":{"inverse":true,"name":"vendorOrders","fieldtype":"one-to-many","singularname":"vendorOrder","cascade":"save-update","cfc":"VendorOrder","fkcolumn":"vendorID","type":"array"},"vendorSkusSmartList":{"name":"vendorSkusSmartList","persistent":false},"vendorPhoneNumbers":{"inverse":true,"name":"vendorPhoneNumbers","fieldtype":"one-to-many","singularname":"vendorPhoneNumber","cascade":"all-delete-orphan","cfc":"VendorPhoneNumber","fkcolumn":"vendorID","type":"array"},"primaryPhoneNumber":{"name":"primaryPhoneNumber","fieldtype":"many-to-one","cfc":"VendorPhoneNumber","fkcolumn":"primaryPhoneNumberID"}};
                	entities['Vendor'].className = 'Vendor';
                	validations['Vendor'] = {"properties":{"vendororders":[{"maxCollection":0,"contexts":"delete"}],"vendorWebsite":[{"dataType":"url","contexts":"save"}],"vendorName":[{"required":true,"contexts":"save"}]}};
                	defaultValues['Vendor'] = {
                	vendorID:'',
										vendorName:null,
									vendorWebsite:null,
									accountNumber:null,
									remoteID:null,
									createdDateTime:'',
										createdByAccountID:null,
									modifiedDateTime:'',
										modifiedByAccountID:null,
									
						z:''
	                };
                
                	entities['Term'] = {"emailTemplates":{"name":"emailTemplates","persistent":false,"type":"struct"},"termYears":{"name":"termYears","ormtype":"integer"},"createdDateTime":{"name":"createdDateTime","ormtype":"timestamp","hb_populateenabled":false},"printTemplates":{"name":"printTemplates","persistent":false,"type":"struct"},"processObjects":{"name":"processObjects","persistent":false,"type":"struct"},"sortOrder":{"name":"sortOrder","ormtype":"integer"},"settingValueFormatted":{"name":"settingValueFormatted","persistent":false,"type":"any"},"auditSmartList":{"name":"auditSmartList","persistent":false,"type":"any"},"termDays":{"name":"termDays","ormtype":"integer"},"modifiedDateTime":{"name":"modifiedDateTime","ormtype":"timestamp","hb_populateenabled":false},"newFlag":{"name":"newFlag","persistent":false,"type":"boolean"},"validations":{"name":"validations","persistent":false,"type":"struct"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"},"gracePeriodSubscriptionTerms":{"inverse":true,"name":"gracePeriodSubscriptionTerms","fieldtype":"one-to-many","singularname":"gracePeriodSubscriptionTerm","hb_populateenabled":false,"cascade":"all","lazy":"extra","cfc":"SubscriptionTerm","fkcolumn":"gracePeriodTermID","type":"array"},"createdByAccountID":{"name":"createdByAccountID","ormtype":"string","hb_populateenabled":false},"termID":{"generator":"uuid","name":"termID","fieldtype":"id","ormtype":"string","unsavedvalue":"","length":32,"default":""},"remoteID":{"name":"remoteID","ormtype":"string"},"loyaltyTerms":{"inverse":true,"name":"loyaltyTerms","fieldtype":"one-to-many","singularname":"loyaltyTerm","cascade":"all-delete-orphan","lazy":"extra","cfc":"LoyaltyTerm","fkcolumn":"termID","type":"array"},"attributeValuesByAttributeIDStruct":{"name":"attributeValuesByAttributeIDStruct","persistent":false,"type":"struct"},"modifiedByAccountID":{"name":"modifiedByAccountID","ormtype":"string","hb_populateenabled":false},"initialSubscriptionUsageTerms":{"inverse":true,"name":"initialSubscriptionUsageTerms","fieldtype":"one-to-many","singularname":"initialSubscriptionUsageTerm","hb_populateenabled":false,"cascade":"all","lazy":"extra","cfc":"SubscriptionUsage","fkcolumn":"initialTermID","type":"array"},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"assignedAttributeSetSmartList":{"name":"assignedAttributeSetSmartList","persistent":false,"type":"any"},"initialSubscriptionTerms":{"inverse":true,"name":"initialSubscriptionTerms","fieldtype":"one-to-many","singularname":"initialSubscriptionTerm","hb_populateenabled":false,"cascade":"all","lazy":"extra","cfc":"SubscriptionTerm","fkcolumn":"initialTermID","type":"array"},"gracePeriodSubscriptionUsageTerms":{"inverse":true,"name":"gracePeriodSubscriptionUsageTerms","fieldtype":"one-to-many","singularname":"gracePeriodSubscriptionUsageTerm","hb_populateenabled":false,"cascade":"all","lazy":"extra","cfc":"SubscriptionUsage","fkcolumn":"gracePeriodTermID","type":"array"},"modifiedByAccount":{"name":"modifiedByAccount","persistent":false},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"createdByAccount":{"name":"createdByAccount","persistent":false},"simpleRepresentation":{"name":"simpleRepresentation","persistent":false,"type":"string"},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"giftCardExpirationTerms":{"inverse":true,"name":"giftCardExpirationTerms","fieldtype":"one-to-many","singularname":"giftCardExpirationTerm","cascade":"all","lazy":"extra","cfc":"Sku","fkcolumn":"giftCardExpirationTermID","type":"array"},"persistableErrors":{"name":"persistableErrors","persistent":false,"type":"array"},"paymentTerms":{"inverse":true,"name":"paymentTerms","fieldtype":"one-to-many","singularname":"paymentTerm","hb_populateenabled":false,"cascade":"all","lazy":"extra","cfc":"PaymentTerm","fkcolumn":"termID","type":"array"},"renewalSubscriptionUsageTerms":{"inverse":true,"name":"renewalSubscriptionUsageTerms","fieldtype":"one-to-many","singularname":"renewalSubscriptionUsageTerm","hb_populateenabled":false,"cascade":"all","lazy":"extra","cfc":"SubscriptionUsage","fkcolumn":"renewalTermID","type":"array"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"encryptedPropertiesExistFlag":{"name":"encryptedPropertiesExistFlag","persistent":false,"type":"boolean"},"rollbackProcessedFlag":{"name":"rollbackProcessedFlag","persistent":false,"type":"boolean"},"giftCards":{"inverse":true,"name":"giftCards","fieldtype":"one-to-many","singularname":"giftCard","cascade":"all","lazy":"extra","cfc":"GiftCard","fkcolumn":"giftCardExpirationTermID","type":"array"},"attributeValuesByAttributeCodeStruct":{"name":"attributeValuesByAttributeCodeStruct","persistent":false,"type":"struct"},"termMonths":{"name":"termMonths","ormtype":"integer"},"renewalSubscriptionTerms":{"inverse":true,"name":"renewalSubscriptionTerms","fieldtype":"one-to-many","singularname":"renewalSubscriptionTerm","hb_populateenabled":false,"cascade":"all","lazy":"extra","cfc":"SubscriptionTerm","fkcolumn":"renewalTermID","type":"array"},"loyaltyAccruementExpirationTerms":{"inverse":true,"name":"loyaltyAccruementExpirationTerms","fieldtype":"one-to-many","singularname":"loyaltyAccruementExpirationTerm","cascade":"all","lazy":"extra","cfc":"LoyaltyAccruement","fkcolumn":"expirationTermID","type":"array"},"termHours":{"name":"termHours","ormtype":"integer"},"termName":{"name":"termName","ormtype":"string"}};
                	entities['Term'].className = 'Term';
                	validations['Term'] = {"properties":{"termMonths":[{"dataType":"numeric","contexts":"save"}],"termYears":[{"dataType":"numeric","contexts":"save"}],"renewalSubscriptionTerms":[{"maxCollection":0,"contexts":"delete"}],"initialSubscriptionUsageTerms":[{"maxCollection":0,"contexts":"delete"}],"termDays":[{"dataType":"numeric","contexts":"save"}],"renewalSubscriptionUsageTerms":[{"maxCollection":0,"contexts":"delete"}],"paymentTerms":[{"maxCollection":0,"contexts":"delete"}],"termHours":[{"dataType":"numeric","contexts":"save"}],"gracePeriodSubscriptionTerms":[{"maxCollection":0,"contexts":"delete"}],"initialSubscriptionTerms":[{"maxCollection":0,"contexts":"delete"}],"gracePeriodSubscriptionUsageTerms":[{"maxCollection":0,"contexts":"delete"}],"termName":[{"required":true,"contexts":"save"}]}};
                	defaultValues['Term'] = {
                	termID:'',
										termName:null,
									termHours:null,
									termDays:null,
									termMonths:null,
									termYears:null,
									sortOrder:null,
									remoteID:null,
									createdDateTime:'',
										createdByAccountID:null,
									modifiedDateTime:'',
										modifiedByAccountID:null,
									
						z:''
	                };
                
                	entities['SubscriptionUsage'] = {"createdDateTime":{"name":"createdDateTime","ormtype":"timestamp","hb_populateenabled":false},"emailTemplates":{"name":"emailTemplates","persistent":false,"type":"struct"},"subscriptionUsageID":{"generator":"uuid","name":"subscriptionUsageID","fieldtype":"id","ormtype":"string","unsavedvalue":"","length":32,"default":""},"settingValueFormatted":{"name":"settingValueFormatted","persistent":false,"type":"any"},"auditSmartList":{"name":"auditSmartList","persistent":false,"type":"any"},"modifiedDateTime":{"name":"modifiedDateTime","ormtype":"timestamp","hb_populateenabled":false},"allowProrateFlag":{"name":"allowProrateFlag","ormtype":"boolean","hb_formattype":"yesno"},"account":{"name":"account","fieldtype":"many-to-one","cfc":"Account","fkcolumn":"accountID"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"},"currentStatus":{"name":"currentStatus","persistent":false},"subscriptionTerm":{"name":"subscriptionTerm","fieldtype":"many-to-one","cfc":"SubscriptionTerm","fkcolumn":"subscriptionTermID"},"remoteID":{"name":"remoteID","ormtype":"string"},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"subscriptionOrderItems":{"inverse":true,"name":"subscriptionOrderItems","fieldtype":"one-to-many","singularname":"subscriptionOrderItem","cascade":"all-delete-orphan","cfc":"SubscriptionOrderItem","fkcolumn":"subscriptionUsageID","type":"array"},"gracePeriodTerm":{"name":"gracePeriodTerm","fieldtype":"many-to-one","cfc":"Term","fkcolumn":"gracePeriodTermID"},"modifiedByAccount":{"name":"modifiedByAccount","persistent":false},"simpleRepresentation":{"name":"simpleRepresentation","persistent":false,"type":"string"},"createdByAccount":{"name":"createdByAccount","persistent":false},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"autoPayFlag":{"name":"autoPayFlag","ormtype":"boolean","hb_formattype":"yesno"},"nextBillDate":{"name":"nextBillDate","ormtype":"timestamp","hb_formattype":"date","hb_formfieldtype":"date"},"rollbackProcessedFlag":{"name":"rollbackProcessedFlag","persistent":false,"type":"boolean"},"attributeValuesByAttributeCodeStruct":{"name":"attributeValuesByAttributeCodeStruct","persistent":false,"type":"struct"},"expirationDate":{"name":"expirationDate","ormtype":"timestamp","hb_formattype":"date","hb_formfieldtype":"date"},"autoRenewFlag":{"name":"autoRenewFlag","ormtype":"boolean","hb_formattype":"yesno"},"subscriptionOrderItemName":{"name":"subscriptionOrderItemName","persistent":false},"printTemplates":{"name":"printTemplates","persistent":false,"type":"struct"},"processObjects":{"name":"processObjects","persistent":false,"type":"struct"},"newFlag":{"name":"newFlag","persistent":false,"type":"boolean"},"validations":{"name":"validations","persistent":false,"type":"struct"},"createdByAccountID":{"name":"createdByAccountID","ormtype":"string","hb_populateenabled":false},"subscriptionUsageBenefits":{"name":"subscriptionUsageBenefits","fieldtype":"one-to-many","singularname":"subscriptionUsageBenefit","cascade":"all-delete-orphan","cfc":"SubscriptionUsageBenefit","fkcolumn":"subscriptionUsageID","type":"array"},"nextReminderEmailDate":{"name":"nextReminderEmailDate","ormtype":"timestamp","hb_formattype":"date","hb_formfieldtype":"date"},"accountPaymentMethod":{"name":"accountPaymentMethod","fieldtype":"many-to-one","cfc":"AccountPaymentMethod","fkcolumn":"accountPaymentMethodID"},"modifiedByAccountID":{"name":"modifiedByAccountID","ormtype":"string","hb_populateenabled":false},"attributeValuesByAttributeIDStruct":{"name":"attributeValuesByAttributeIDStruct","persistent":false,"type":"struct"},"renewalSubscriptionUsageBenefits":{"name":"renewalSubscriptionUsageBenefits","fieldtype":"one-to-many","singularname":"renewalSubscriptionUsageBenefit","cascade":"all-delete-orphan","cfc":"SubscriptionUsageBenefit","fkcolumn":"renewalSubscriptionUsageID","type":"array"},"initialTerm":{"name":"initialTerm","fieldtype":"many-to-one","cfc":"Term","fkcolumn":"initialTermID"},"assignedAttributeSetSmartList":{"name":"assignedAttributeSetSmartList","persistent":false,"type":"any"},"currentStatusCode":{"name":"currentStatusCode","persistent":false},"subscriptionStatus":{"inverse":true,"name":"subscriptionStatus","fieldtype":"one-to-many","singularname":"subscriptionStatus","cascade":"all-delete-orphan","cfc":"SubscriptionStatus","fkcolumn":"subscriptionUsageID","type":"array"},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"persistableErrors":{"name":"persistableErrors","persistent":false,"type":"array"},"currentStatusType":{"name":"currentStatusType","persistent":false},"renewalTerm":{"name":"renewalTerm","fieldtype":"many-to-one","cfc":"Term","fkcolumn":"renewalTermID"},"renewalPrice":{"name":"renewalPrice","ormtype":"big_decimal","hb_formattype":"currency"},"encryptedPropertiesExistFlag":{"name":"encryptedPropertiesExistFlag","persistent":false,"type":"boolean"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"currencyCode":{"name":"currencyCode","ormtype":"string","length":3}};
                	entities['SubscriptionUsage'].className = 'SubscriptionUsage';
                	validations['SubscriptionUsage'] = {"properties":{"subscriptionUsageID":[{"maxLength":0,"contexts":"delete"}],"currentStatusCode":[{"inList":"sstActive,sstSuspended","contexts":"cancel"}]}};
                	defaultValues['SubscriptionUsage'] = {
                	subscriptionUsageID:'',
										allowProrateFlag:null,
									renewalPrice:null,
									currencyCode:null,
									autoRenewFlag:null,
									autoPayFlag:null,
									nextBillDate:null,
									nextReminderEmailDate:null,
									expirationDate:null,
									remoteID:null,
									createdDateTime:'',
										createdByAccountID:null,
									modifiedDateTime:'',
										modifiedByAccountID:null,
									
						z:''
	                };
                
                	entities['SubscriptionUsage_AddUsageBenefit'] = {"subscriptionUsage":{"name":"subscriptionUsage"},"populatedFlag":{"name":"populatedFlag"},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"subscriptionBenefitID":{"name":"subscriptionBenefitID","hb_rbkey":"entity.subscriptionBenefit","hb_formfieldtype":"select"},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"preProcessDisplayedFlag":{"name":"preProcessDisplayedFlag"},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"validations":{"name":"validations","persistent":false,"type":"struct"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"},"benefitTermType":{"name":"benefitTermType","hb_formfieldtype":"select"}};
                	entities['SubscriptionUsage_AddUsageBenefit'].className = 'SubscriptionUsage_AddUsageBenefit';
                	validations['SubscriptionUsage_AddUsageBenefit'] = {"properties":{"subscriptionBenefitID":[{"required":true,"contexts":"save"}]}};
                	defaultValues['SubscriptionUsage_AddUsageBenefit'] = {
                	subscriptionUsage:'',
										benefitTermType:'',
									subscriptionBenefitID:'',
									preProcessDisplayedFlag:0,
										populatedFlag:0,
										
						z:''
	                };
                
                	entities['SubscriptionUsage_Cancel'] = {"subscriptionUsage":{"name":"subscriptionUsage"},"populatedFlag":{"name":"populatedFlag"},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"preProcessDisplayedFlag":{"name":"preProcessDisplayedFlag"},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"effectiveDateTime":{"hb_nullrbkey":"define.now","name":"effectiveDateTime","hb_formfieldtype":"datetime"},"validations":{"name":"validations","persistent":false,"type":"struct"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"}};
                	entities['SubscriptionUsage_Cancel'].className = 'SubscriptionUsage_Cancel';
                	validations['SubscriptionUsage_Cancel'] = {"properties":{}};
                	defaultValues['SubscriptionUsage_Cancel'] = {
                	subscriptionUsage:'',
										effectiveDateTime:'',
									preProcessDisplayedFlag:0,
										populatedFlag:0,
										
						z:''
	                };
                
                	entities['SubscriptionUsage_Renew'] = {"subscriptionUsage":{"name":"subscriptionUsage"},"renewalPaymentType":{"name":"renewalPaymentType","hb_formfieldtype":"select"},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"autoUpdateFlag":{"name":"autoUpdateFlag","default":0},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"preProcessDisplayedFlag":{"name":"preProcessDisplayedFlag"},"order":{"name":"order"},"proratedPrice":{"name":"proratedPrice","hb_formattype":"currency","hb_rbkey":"entity.sku.renewalPrice"},"orderPayment":{"name":"orderPayment","fieldtype":"many-to-one","hb_rbkey":"entity.orderPayment","persistent":false,"cfc":"OrderPayment","fkcolumn":"orderPaymentID"},"saveAccountPaymentMethodFlag":{"name":"saveAccountPaymentMethodFlag","hb_formfieldtype":"yesno"},"saveAccountPaymentMethodName":{"name":"saveAccountPaymentMethodName","hb_formfieldtype":"yesno"},"validations":{"name":"validations","persistent":false,"type":"struct"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"},"prorateExpirationDate":{"name":"prorateExpirationDate","hb_formattype":"date"},"accountPaymentMethod":{"name":"accountPaymentMethod","fieldtype":"many-to-one","hb_rbkey":"entity.accountPaymentMethod","persistent":false,"cfc":"AccountPaymentMethod","fkcolumn":"accountPaymentMethodID"},"populatedFlag":{"name":"populatedFlag"},"renewalStartType":{"name":"renewalStartType","hb_formfieldtype":"select"},"updateSubscriptionUsageAccountPaymentMethodFlag":{"name":"updateSubscriptionUsageAccountPaymentMethodFlag","hb_formfieldtype":"yesno"},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"extendExpirationDate":{"name":"extendExpirationDate","hb_formattype":"date"},"newOrderPayment":{"name":"newOrderPayment","fieldtype":"many-to-one","persistent":false,"cfc":"OrderPayment","fkcolumn":"orderPaymentID"}};
                	entities['SubscriptionUsage_Renew'].className = 'SubscriptionUsage_Renew';
                	validations['SubscriptionUsage_Renew'] = {"properties":{}};
                	defaultValues['SubscriptionUsage_Renew'] = {
                	subscriptionUsage:'',
										order:'',
										renewalStartType:"extend",
										saveAccountPaymentMethodFlag:0,
										saveAccountPaymentMethodName:'',
									updateSubscriptionUsageAccountPaymentMethodFlag:0,
										autoUpdateFlag:0,
										preProcessDisplayedFlag:0,
										populatedFlag:0,
										
						z:''
	                };
                
                	entities['TaxCategoryRate'] = {"taxLiabilityAppliedToItemFlag":{"name":"taxLiabilityAppliedToItemFlag","ormtype":"boolean","default":true},"createdDateTime":{"name":"createdDateTime","ormtype":"timestamp","hb_populateenabled":false},"emailTemplates":{"name":"emailTemplates","persistent":false,"type":"struct"},"printTemplates":{"name":"printTemplates","persistent":false,"type":"struct"},"processObjects":{"name":"processObjects","persistent":false,"type":"struct"},"settingValueFormatted":{"name":"settingValueFormatted","persistent":false,"type":"any"},"auditSmartList":{"name":"auditSmartList","persistent":false,"type":"any"},"modifiedDateTime":{"name":"modifiedDateTime","ormtype":"timestamp","hb_populateenabled":false},"newFlag":{"name":"newFlag","persistent":false,"type":"boolean"},"validations":{"name":"validations","persistent":false,"type":"struct"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"},"createdByAccountID":{"name":"createdByAccountID","ormtype":"string","hb_populateenabled":false},"remoteID":{"name":"remoteID","ormtype":"string"},"modifiedByAccountID":{"name":"modifiedByAccountID","ormtype":"string","hb_populateenabled":false},"attributeValuesByAttributeIDStruct":{"name":"attributeValuesByAttributeIDStruct","persistent":false,"type":"struct"},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"taxAddressLookup":{"name":"taxAddressLookup","ormtype":"string","hb_formattype":"rbKey","hb_formfieldtype":"select"},"assignedAttributeSetSmartList":{"name":"assignedAttributeSetSmartList","persistent":false,"type":"any"},"modifiedByAccount":{"name":"modifiedByAccount","persistent":false},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"createdByAccount":{"name":"createdByAccount","persistent":false},"simpleRepresentation":{"name":"simpleRepresentation","persistent":false,"type":"string"},"taxIntegration":{"name":"taxIntegration","fieldtype":"many-to-one","cfc":"Integration","fkcolumn":"taxIntegrationID"},"taxCategoryRateID":{"generator":"uuid","name":"taxCategoryRateID","fieldtype":"id","ormtype":"string","unsavedvalue":"","length":32,"default":""},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"taxRate":{"name":"taxRate","ormtype":"float","hb_formattype":"percentage"},"persistableErrors":{"name":"persistableErrors","persistent":false,"type":"array"},"taxCategory":{"name":"taxCategory","fieldtype":"many-to-one","cfc":"TaxCategory","fkcolumn":"taxCategoryID"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"encryptedPropertiesExistFlag":{"name":"encryptedPropertiesExistFlag","persistent":false,"type":"boolean"},"appliedTaxes":{"inverse":true,"name":"appliedTaxes","fieldtype":"one-to-many","singularname":"appliedTax","lazy":"extra","cascade":"all","cfc":"TaxApplied","fkcolumn":"taxCategoryRateID"},"rollbackProcessedFlag":{"name":"rollbackProcessedFlag","persistent":false,"type":"boolean"},"attributeValuesByAttributeCodeStruct":{"name":"attributeValuesByAttributeCodeStruct","persistent":false,"type":"struct"},"addressZone":{"hb_nullrbkey":"define.all","name":"addressZone","fieldtype":"many-to-one","cfc":"AddressZone","hb_optionsnullrbkey":"define.all","fkcolumn":"addressZoneID"},"taxCategoryRateCode":{"index":"PI_TAXCATEGORYRATECODE","name":"taxCategoryRateCode","ormtype":"string"}};
                	entities['TaxCategoryRate'].className = 'TaxCategoryRate';
                	validations['TaxCategoryRate'] = {"properties":{"taxCategoryRateCode":[{"regex":"^[a-zA-Z0-9-_.|:~^]+$","required":true,"contexts":"save"}],"taxRate":[{"dataType":"numeric","contexts":"save"},{"required":true,"contexts":"save","conditions":"noIntegration"}],"appliedTaxes":[{"maxCollection":0,"contexts":"delete"}]},"conditions":{"noIntegration":{"taxIntegration":{"null":true}}}};
                	defaultValues['TaxCategoryRate'] = {
                	taxCategoryRateID:'',
										taxRate:null,
									taxAddressLookup:'shipping_billing',
										taxCategoryRateCode:null,
									taxLiabilityAppliedToItemFlag:true,
									remoteID:null,
									createdDateTime:'',
										createdByAccountID:null,
									modifiedDateTime:'',
										modifiedByAccountID:null,
									
						z:''
	                };
                
                	entities['TaxApplied'] = {"taxCategoryRate":{"name":"taxCategoryRate","fieldtype":"many-to-one","cfc":"TaxCategoryRate","fkcolumn":"taxCategoryRateID"},"emailTemplates":{"name":"emailTemplates","persistent":false,"type":"struct"},"createdDateTime":{"name":"createdDateTime","ormtype":"timestamp","hb_populateenabled":false},"printTemplates":{"name":"printTemplates","persistent":false,"type":"struct"},"taxAmount":{"name":"taxAmount","ormtype":"big_decimal"},"processObjects":{"name":"processObjects","persistent":false,"type":"struct"},"taxImpositionName":{"name":"taxImpositionName","ormtype":"string"},"settingValueFormatted":{"name":"settingValueFormatted","persistent":false,"type":"any"},"auditSmartList":{"name":"auditSmartList","persistent":false,"type":"any"},"orderItem":{"name":"orderItem","fieldtype":"many-to-one","hb_cascadecalculate":true,"cfc":"OrderItem","fkcolumn":"orderItemID"},"modifiedDateTime":{"name":"modifiedDateTime","ormtype":"timestamp","hb_populateenabled":false},"taxJurisdictionType":{"name":"taxJurisdictionType","ormtype":"string"},"newFlag":{"name":"newFlag","persistent":false,"type":"boolean"},"validations":{"name":"validations","persistent":false,"type":"struct"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"},"appliedType":{"name":"appliedType","ormtype":"string"},"createdByAccountID":{"name":"createdByAccountID","ormtype":"string","hb_populateenabled":false},"remoteID":{"name":"remoteID","ormtype":"string"},"attributeValuesByAttributeIDStruct":{"name":"attributeValuesByAttributeIDStruct","persistent":false,"type":"struct"},"modifiedByAccountID":{"name":"modifiedByAccountID","ormtype":"string","hb_populateenabled":false},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"taxImpositionID":{"name":"taxImpositionID","ormtype":"string"},"taxJurisdictionName":{"name":"taxJurisdictionName","ormtype":"string"},"assignedAttributeSetSmartList":{"name":"assignedAttributeSetSmartList","persistent":false,"type":"any"},"taxPostalCode":{"name":"taxPostalCode","ormtype":"string","hb_populateenabled":"public"},"taxLiabilityAmount":{"name":"taxLiabilityAmount","ormtype":"big_decimal"},"taxImpositionType":{"name":"taxImpositionType","ormtype":"string"},"modifiedByAccount":{"name":"modifiedByAccount","persistent":false},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"createdByAccount":{"name":"createdByAccount","persistent":false},"simpleRepresentation":{"name":"simpleRepresentation","persistent":false,"type":"string"},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"taxRate":{"name":"taxRate","ormtype":"big_decimal","hb_formattype":"percentage"},"persistableErrors":{"name":"persistableErrors","persistent":false,"type":"array"},"taxCountryCode":{"name":"taxCountryCode","ormtype":"string","hb_populateenabled":"public"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"encryptedPropertiesExistFlag":{"name":"encryptedPropertiesExistFlag","persistent":false,"type":"boolean"},"taxCity":{"name":"taxCity","ormtype":"string","hb_populateenabled":"public"},"taxAppliedID":{"generator":"uuid","name":"taxAppliedID","fieldtype":"id","ormtype":"string","unsavedvalue":"","length":32,"default":""},"rollbackProcessedFlag":{"name":"rollbackProcessedFlag","persistent":false,"type":"boolean"},"attributeValuesByAttributeCodeStruct":{"name":"attributeValuesByAttributeCodeStruct","persistent":false,"type":"struct"},"taxLocality":{"name":"taxLocality","ormtype":"string","hb_populateenabled":"public"},"taxStreetAddress":{"name":"taxStreetAddress","ormtype":"string","hb_populateenabled":"public"},"taxStreet2Address":{"name":"taxStreet2Address","ormtype":"string","hb_populateenabled":"public"},"taxStateCode":{"name":"taxStateCode","ormtype":"string","hb_populateenabled":"public"},"currencyCode":{"name":"currencyCode","ormtype":"string","length":3},"taxJurisdictionID":{"name":"taxJurisdictionID","ormtype":"string"}};
                	entities['TaxApplied'].className = 'TaxApplied';
                	validations['TaxApplied'] = {"properties":{}};
                	defaultValues['TaxApplied'] = {
                	taxAppliedID:'',
										taxAmount:null,
									taxLiabilityAmount:null,
									taxRate:null,
									appliedType:null,
									currencyCode:null,
									taxStreetAddress:null,
									taxStreet2Address:null,
									taxLocality:null,
									taxCity:null,
									taxStateCode:null,
									taxPostalCode:null,
									taxCountryCode:null,
									taxImpositionID:null,
									taxImpositionName:null,
									taxImpositionType:null,
									taxJurisdictionID:null,
									taxJurisdictionName:null,
									taxJurisdictionType:null,
									remoteID:null,
									createdDateTime:'',
										createdByAccountID:null,
									modifiedDateTime:'',
										modifiedByAccountID:null,
									
						z:''
	                };
                
                	entities['TaskSchedule'] = {"failureEmailList":{"name":"failureEmailList","ormtype":"string"},"createdDateTime":{"name":"createdDateTime","ormtype":"timestamp","hb_populateenabled":false},"emailTemplates":{"name":"emailTemplates","persistent":false,"type":"struct"},"printTemplates":{"name":"printTemplates","persistent":false,"type":"struct"},"taskScheduleID":{"generator":"uuid","name":"taskScheduleID","fieldtype":"id","ormtype":"string","unsavedvalue":"","length":32,"default":""},"processObjects":{"name":"processObjects","persistent":false,"type":"struct"},"settingValueFormatted":{"name":"settingValueFormatted","persistent":false,"type":"any"},"auditSmartList":{"name":"auditSmartList","persistent":false,"type":"any"},"modifiedDateTime":{"name":"modifiedDateTime","ormtype":"timestamp","hb_populateenabled":false},"schedule":{"name":"schedule","fieldtype":"many-to-one","cfc":"Schedule","fkcolumn":"scheduleID"},"newFlag":{"name":"newFlag","persistent":false,"type":"boolean"},"validations":{"name":"validations","persistent":false,"type":"struct"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"},"createdByAccountID":{"name":"createdByAccountID","ormtype":"string","hb_populateenabled":false},"remoteID":{"name":"remoteID","ormtype":"string"},"task":{"name":"task","fieldtype":"many-to-one","cfc":"Task","fkcolumn":"taskID"},"modifiedByAccountID":{"name":"modifiedByAccountID","ormtype":"string","hb_populateenabled":false},"attributeValuesByAttributeIDStruct":{"name":"attributeValuesByAttributeIDStruct","persistent":false,"type":"struct"},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"startDateTime":{"name":"startDateTime","ormtype":"timestamp"},"successEmailList":{"name":"successEmailList","ormtype":"string"},"assignedAttributeSetSmartList":{"name":"assignedAttributeSetSmartList","persistent":false,"type":"any"},"modifiedByAccount":{"name":"modifiedByAccount","persistent":false},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"createdByAccount":{"name":"createdByAccount","persistent":false},"simpleRepresentation":{"name":"simpleRepresentation","persistent":false,"type":"string"},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"nextRunDateTime":{"name":"nextRunDateTime","ormtype":"timestamp"},"persistableErrors":{"name":"persistableErrors","persistent":false,"type":"array"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"encryptedPropertiesExistFlag":{"name":"encryptedPropertiesExistFlag","persistent":false,"type":"boolean"},"rollbackProcessedFlag":{"name":"rollbackProcessedFlag","persistent":false,"type":"boolean"},"attributeValuesByAttributeCodeStruct":{"name":"attributeValuesByAttributeCodeStruct","persistent":false,"type":"struct"},"endDateTime":{"hb_nullrbkey":"define.forever","name":"endDateTime","ormtype":"timestamp"}};
                	entities['TaskSchedule'].className = 'TaskSchedule';
                	validations['TaskSchedule'] = {"properties":{"task":[{"required":true,"contexts":"save"}],"startDateTime":[{"required":true,"contexts":"save"}],"schedule":[{"required":true,"contexts":"save"}]}};
                	defaultValues['TaskSchedule'] = {
                	taskScheduleID:'',
										startDateTime:null,
									endDateTime:null,
									nextRunDateTime:null,
									failureEmailList:null,
									successEmailList:null,
									remoteID:null,
									createdDateTime:'',
										createdByAccountID:null,
									modifiedDateTime:'',
										modifiedByAccountID:null,
									
						z:''
	                };
                
                	entities['Permission'] = {"allowDeleteFlag":{"name":"allowDeleteFlag","ormtype":"boolean"},"subsystem":{"name":"subsystem","ormtype":"string"},"emailTemplates":{"name":"emailTemplates","persistent":false,"type":"struct"},"createdDateTime":{"name":"createdDateTime","ormtype":"timestamp","hb_populateenabled":false},"printTemplates":{"name":"printTemplates","persistent":false,"type":"struct"},"processObjects":{"name":"processObjects","persistent":false,"type":"struct"},"item":{"name":"item","ormtype":"string"},"section":{"name":"section","ormtype":"string"},"settingValueFormatted":{"name":"settingValueFormatted","persistent":false,"type":"any"},"auditSmartList":{"name":"auditSmartList","persistent":false,"type":"any"},"modifiedDateTime":{"name":"modifiedDateTime","ormtype":"timestamp","hb_populateenabled":false},"newFlag":{"name":"newFlag","persistent":false,"type":"boolean"},"validations":{"name":"validations","persistent":false,"type":"struct"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"},"allowProcessFlag":{"name":"allowProcessFlag","ormtype":"boolean"},"accessType":{"name":"accessType","ormtype":"string"},"propertyName":{"name":"propertyName","ormtype":"string"},"createdByAccountID":{"name":"createdByAccountID","ormtype":"string","hb_populateenabled":false},"allowReadFlag":{"name":"allowReadFlag","ormtype":"boolean"},"remoteID":{"name":"remoteID","ormtype":"string"},"modifiedByAccountID":{"name":"modifiedByAccountID","ormtype":"string","hb_populateenabled":false},"attributeValuesByAttributeIDStruct":{"name":"attributeValuesByAttributeIDStruct","persistent":false,"type":"struct"},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"assignedAttributeSetSmartList":{"name":"assignedAttributeSetSmartList","persistent":false,"type":"any"},"allowCreateFlag":{"name":"allowCreateFlag","ormtype":"boolean"},"permissionID":{"generator":"uuid","name":"permissionID","fieldtype":"id","ormtype":"string","unsavedvalue":"","length":32,"default":""},"processContext":{"name":"processContext","ormtype":"string"},"permissionGroup":{"name":"permissionGroup","fieldtype":"many-to-one","cfc":"PermissionGroup","fkcolumn":"permissionGroupID"},"entityClassName":{"name":"entityClassName","ormtype":"string"},"modifiedByAccount":{"name":"modifiedByAccount","persistent":false},"allowActionFlag":{"name":"allowActionFlag","ormtype":"boolean"},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"createdByAccount":{"name":"createdByAccount","persistent":false},"simpleRepresentation":{"name":"simpleRepresentation","persistent":false,"type":"string"},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"persistableErrors":{"name":"persistableErrors","persistent":false,"type":"array"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"encryptedPropertiesExistFlag":{"name":"encryptedPropertiesExistFlag","persistent":false,"type":"boolean"},"rollbackProcessedFlag":{"name":"rollbackProcessedFlag","persistent":false,"type":"boolean"},"attributeValuesByAttributeCodeStruct":{"name":"attributeValuesByAttributeCodeStruct","persistent":false,"type":"struct"},"allowUpdateFlag":{"name":"allowUpdateFlag","ormtype":"boolean"}};
                	entities['Permission'].className = 'Permission';
                	validations['Permission'] = {"properties":{}};
                	defaultValues['Permission'] = {
                	permissionID:'',
										accessType:null,
									subsystem:null,
									section:null,
									item:null,
									allowActionFlag:null,
									allowCreateFlag:null,
									allowReadFlag:null,
									allowUpdateFlag:null,
									allowDeleteFlag:null,
									allowProcessFlag:null,
									entityClassName:null,
									propertyName:null,
									processContext:null,
									remoteID:null,
									createdDateTime:'',
										createdByAccountID:null,
									modifiedDateTime:'',
										modifiedByAccountID:null,
									
						z:''
	                };
                
                	entities['Option'] = {"emailTemplates":{"name":"emailTemplates","persistent":false,"type":"struct"},"promotionQualifiers":{"inverse":true,"name":"promotionQualifiers","fieldtype":"many-to-many","singularname":"promotionQualifier","inversejoincolumn":"promotionQualifierID","cfc":"PromotionQualifier","fkcolumn":"optionID","linktable":"SwPromoQualOption"},"createdDateTime":{"name":"createdDateTime","ormtype":"timestamp","hb_populateenabled":false},"printTemplates":{"name":"printTemplates","persistent":false,"type":"struct"},"processObjects":{"name":"processObjects","persistent":false,"type":"struct"},"optionGroup":{"name":"optionGroup","fieldtype":"many-to-one","cfc":"OptionGroup","fkcolumn":"optionGroupID"},"sortOrder":{"sortcontext":"optionGroup","name":"sortOrder","ormtype":"integer"},"optionCode":{"index":"PI_OPTIONCODE","name":"optionCode","ormtype":"string"},"settingValueFormatted":{"name":"settingValueFormatted","persistent":false,"type":"any"},"auditSmartList":{"name":"auditSmartList","persistent":false,"type":"any"},"promotionRewards":{"inverse":true,"name":"promotionRewards","fieldtype":"many-to-many","singularname":"promotionReward","inversejoincolumn":"promotionRewardID","cfc":"PromotionReward","fkcolumn":"optionID","linktable":"SwPromoRewardOption"},"modifiedDateTime":{"name":"modifiedDateTime","ormtype":"timestamp","hb_populateenabled":false},"images":{"inverse":true,"name":"images","fieldtype":"one-to-many","singularname":"image","cascade":"all-delete-orphan","cfc":"Image","fkcolumn":"optionID","type":"array"},"newFlag":{"name":"newFlag","persistent":false,"type":"boolean"},"validations":{"name":"validations","persistent":false,"type":"struct"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"},"createdByAccountID":{"name":"createdByAccountID","ormtype":"string","hb_populateenabled":false},"optionID":{"generator":"uuid","name":"optionID","fieldtype":"id","ormtype":"string","unsavedvalue":"","length":32,"default":""},"remoteID":{"name":"remoteID","ormtype":"string"},"modifiedByAccountID":{"name":"modifiedByAccountID","ormtype":"string","hb_populateenabled":false},"attributeValuesByAttributeIDStruct":{"name":"attributeValuesByAttributeIDStruct","persistent":false,"type":"struct"},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"defaultImage":{"name":"defaultImage","fieldtype":"many-to-one","cfc":"Image","fkcolumn":"defaultImageID"},"optionName":{"name":"optionName","ormtype":"string"},"assignedAttributeSetSmartList":{"name":"assignedAttributeSetSmartList","persistent":false,"type":"any"},"modifiedByAccount":{"name":"modifiedByAccount","persistent":false},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"createdByAccount":{"name":"createdByAccount","persistent":false},"simpleRepresentation":{"name":"simpleRepresentation","persistent":false,"type":"string"},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"persistableErrors":{"name":"persistableErrors","persistent":false,"type":"array"},"skus":{"inverse":true,"name":"skus","fieldtype":"many-to-many","singularname":"sku","inversejoincolumn":"skuID","cfc":"Sku","fkcolumn":"optionID","linktable":"SwSkuOption"},"optionDescription":{"name":"optionDescription","ormtype":"string","length":4000,"hb_formfieldtype":"wysiwyg"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"encryptedPropertiesExistFlag":{"name":"encryptedPropertiesExistFlag","persistent":false,"type":"boolean"},"rollbackProcessedFlag":{"name":"rollbackProcessedFlag","persistent":false,"type":"boolean"},"attributeValuesByAttributeCodeStruct":{"name":"attributeValuesByAttributeCodeStruct","persistent":false,"type":"struct"},"promotionRewardExclusions":{"inverse":true,"name":"promotionRewardExclusions","fieldtype":"many-to-many","singularname":"promotionRewardExclusion","inversejoincolumn":"promotionRewardID","cfc":"PromotionReward","fkcolumn":"optionID","type":"array","linktable":"SwPromoRewardExclOption"},"promotionQualifierExclusions":{"inverse":true,"name":"promotionQualifierExclusions","fieldtype":"many-to-many","singularname":"promotionQualifierExclusion","inversejoincolumn":"promotionQualifierID","cfc":"PromotionQualifier","fkcolumn":"optionID","type":"array","linktable":"SwPromoQualExclOption"},"productImages":{"inverse":true,"name":"productImages","fieldtype":"many-to-many","singularname":"productImage","inversejoincolumn":"imageID","lazy":"extra","cfc":"Image","fkcolumn":"optionID","linktable":"SwImageOption"}};
                	entities['Option'].className = 'Option';
                	validations['Option'] = {"properties":{"optionGroup":[{"required":true,"contexts":"save"}],"optionCode":[{"regex":"^[a-zA-Z0-9-_.|:~^]+$","uniqueOrNull":true,"contexts":"save"}],"skus":[{"maxCollection":0,"contexts":"delete"}],"optionName":[{"required":true,"contexts":"save"}]}};
                	defaultValues['Option'] = {
                	optionID:'',
										optionCode:null,
									optionName:null,
									optionDescription:null,
									sortOrder:null,
									remoteID:null,
									createdDateTime:'',
										createdByAccountID:null,
									modifiedDateTime:'',
										modifiedByAccountID:null,
									
						z:''
	                };
                
                	entities['OptionGroup'] = {"createdDateTime":{"name":"createdDateTime","ormtype":"timestamp","hb_populateenabled":false},"emailTemplates":{"name":"emailTemplates","persistent":false,"type":"struct"},"printTemplates":{"name":"printTemplates","persistent":false,"type":"struct"},"optionGroupCode":{"index":"PI_OPTIONGROUPCODE","name":"optionGroupCode","ormtype":"string"},"processObjects":{"name":"processObjects","persistent":false,"type":"struct"},"sortOrder":{"name":"sortOrder","ormtype":"integer","required":true},"settingValueFormatted":{"name":"settingValueFormatted","persistent":false,"type":"any"},"auditSmartList":{"name":"auditSmartList","persistent":false,"type":"any"},"modifiedDateTime":{"name":"modifiedDateTime","ormtype":"timestamp","hb_populateenabled":false},"newFlag":{"name":"newFlag","persistent":false,"type":"boolean"},"validations":{"name":"validations","persistent":false,"type":"struct"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"},"optionGroupDescription":{"name":"optionGroupDescription","ormtype":"string","length":4000},"createdByAccountID":{"name":"createdByAccountID","ormtype":"string","hb_populateenabled":false},"remoteID":{"name":"remoteID","ormtype":"string"},"optionGroupImage":{"name":"optionGroupImage","ormtype":"string"},"modifiedByAccountID":{"name":"modifiedByAccountID","ormtype":"string","hb_populateenabled":false},"attributeValuesByAttributeIDStruct":{"name":"attributeValuesByAttributeIDStruct","persistent":false,"type":"struct"},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"assignedAttributeSetSmartList":{"name":"assignedAttributeSetSmartList","persistent":false,"type":"any"},"modifiedByAccount":{"name":"modifiedByAccount","persistent":false},"attributeValues":{"inverse":true,"name":"attributeValues","fieldtype":"one-to-many","singularname":"attributeValue","cascade":"all-delete-orphan","cfc":"AttributeValue","fkcolumn":"optionGroupID"},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"createdByAccount":{"name":"createdByAccount","persistent":false},"simpleRepresentation":{"name":"simpleRepresentation","persistent":false,"type":"string"},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"persistableErrors":{"name":"persistableErrors","persistent":false,"type":"array"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"encryptedPropertiesExistFlag":{"name":"encryptedPropertiesExistFlag","persistent":false,"type":"boolean"},"rollbackProcessedFlag":{"name":"rollbackProcessedFlag","persistent":false,"type":"boolean"},"attributeValuesByAttributeCodeStruct":{"name":"attributeValuesByAttributeCodeStruct","persistent":false,"type":"struct"},"optionGroupID":{"generator":"uuid","name":"optionGroupID","fieldtype":"id","ormtype":"string","unsavedvalue":"","length":32,"default":""},"imageGroupFlag":{"name":"imageGroupFlag","ormtype":"boolean","default":0},"optionGroupName":{"name":"optionGroupName","ormtype":"string"},"options":{"inverse":true,"name":"options","fieldtype":"one-to-many","orderby":"sortOrder","singularname":"option","cascade":"all-delete-orphan","cfc":"Option","fkcolumn":"optionGroupID"}};
                	entities['OptionGroup'].className = 'OptionGroup';
                	validations['OptionGroup'] = {"properties":{"optionGroupCode":[{"regex":"^[a-zA-Z0-9-_.|:~^]+$","uniqueOrNull":true,"contexts":"save"}],"options":[{"maxCollection":0,"contexts":"delete"}],"optionGroupName":[{"required":true,"contexts":"save"}]}};
                	defaultValues['OptionGroup'] = {
                	optionGroupID:'',
										optionGroupName:null,
									optionGroupCode:null,
									optionGroupImage:null,
									optionGroupDescription:null,
									imageGroupFlag:0,
									sortOrder:null,
									remoteID:null,
									createdDateTime:'',
										createdByAccountID:null,
									modifiedDateTime:'',
										modifiedByAccountID:null,
									
						z:''
	                };
                
                	entities['Report'] = {"reportEndDateTime":{"name":"reportEndDateTime","persistent":false},"emailTemplates":{"name":"emailTemplates","persistent":false,"type":"struct"},"createdDateTime":{"name":"createdDateTime","ormtype":"timestamp","hb_populateenabled":false},"printTemplates":{"name":"printTemplates","persistent":false,"type":"struct"},"processObjects":{"name":"processObjects","persistent":false,"type":"struct"},"dynamicDateRangeEndType":{"name":"dynamicDateRangeEndType","ormtype":"string","hb_formattype":"rbKey","hb_formfieldtype":"select"},"settingValueFormatted":{"name":"settingValueFormatted","persistent":false,"type":"any"},"auditSmartList":{"name":"auditSmartList","persistent":false,"type":"any"},"modifiedDateTime":{"name":"modifiedDateTime","ormtype":"timestamp","hb_populateenabled":false},"newFlag":{"name":"newFlag","persistent":false,"type":"boolean"},"validations":{"name":"validations","persistent":false,"type":"struct"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"},"createdByAccountID":{"name":"createdByAccountID","ormtype":"string","hb_populateenabled":false},"remoteID":{"name":"remoteID","ormtype":"string"},"attributeValuesByAttributeIDStruct":{"name":"attributeValuesByAttributeIDStruct","persistent":false,"type":"struct"},"modifiedByAccountID":{"name":"modifiedByAccountID","ormtype":"string","hb_populateenabled":false},"reportCompareEndDateTime":{"name":"reportCompareEndDateTime","persistent":false},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"dynamicDateRangeFlag":{"name":"dynamicDateRangeFlag","ormtype":"boolean"},"assignedAttributeSetSmartList":{"name":"assignedAttributeSetSmartList","persistent":false,"type":"any"},"metrics":{"name":"metrics","ormtype":"string","length":4000},"reportTitle":{"name":"reportTitle","ormtype":"string"},"dynamicDateRangeType":{"name":"dynamicDateRangeType","ormtype":"string","hb_formattype":"rbKey","hb_formfieldtype":"select"},"dimensions":{"name":"dimensions","ormtype":"string","length":4000},"modifiedByAccount":{"name":"modifiedByAccount","persistent":false},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"createdByAccount":{"name":"createdByAccount","persistent":false},"simpleRepresentation":{"name":"simpleRepresentation","persistent":false,"type":"string"},"reportDateTime":{"name":"reportDateTime","ormtype":"string"},"reportStartDateTime":{"name":"reportStartDateTime","persistent":false},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"orderByType":{"name":"orderByType","persistent":false},"persistableErrors":{"name":"persistableErrors","persistent":false,"type":"array"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"encryptedPropertiesExistFlag":{"name":"encryptedPropertiesExistFlag","persistent":false,"type":"boolean"},"dynamicDateRangeEndTypeOptions":{"name":"dynamicDateRangeEndTypeOptions","persistent":false},"rollbackProcessedFlag":{"name":"rollbackProcessedFlag","persistent":false,"type":"boolean"},"attributeValuesByAttributeCodeStruct":{"name":"attributeValuesByAttributeCodeStruct","persistent":false,"type":"struct"},"reportDateTimeGroupBy":{"name":"reportDateTimeGroupBy","ormtype":"string"},"reportName":{"name":"reportName","ormtype":"string"},"reportCompareFlag":{"name":"reportCompareFlag","ormtype":"boolean"},"reportCompareStartDateTime":{"name":"reportCompareStartDateTime","persistent":false},"dynamicDateRangeInterval":{"name":"dynamicDateRangeInterval","ormtype":"integer"},"reportID":{"generator":"uuid","name":"reportID","fieldtype":"id","ormtype":"string","unsavedvalue":"","length":32,"default":""},"dynamicDateRangeTypeOptions":{"name":"dynamicDateRangeTypeOptions","persistent":false}};
                	entities['Report'].className = 'Report';
                	validations['Report'] = {"properties":{}};
                	defaultValues['Report'] = {
                	reportID:'',
										reportName:null,
									reportTitle:null,
									reportDateTime:null,
									reportDateTimeGroupBy:null,
									reportCompareFlag:null,
									metrics:null,
									dimensions:null,
									dynamicDateRangeFlag:1,
									dynamicDateRangeType:'months',
										dynamicDateRangeEndType:'now',
										dynamicDateRangeInterval:1,
									remoteID:null,
									createdDateTime:'',
										createdByAccountID:null,
									modifiedDateTime:'',
										modifiedByAccountID:null,
									
						z:''
	                };
                
                	entities['Audit'] = {"auditID":{"generator":"uuid","name":"auditID","fieldtype":"id","ormtype":"string","unsavedvalue":"","length":32,"default":""},"emailTemplates":{"name":"emailTemplates","persistent":false,"type":"struct"},"printTemplates":{"name":"printTemplates","persistent":false,"type":"struct"},"processObjects":{"name":"processObjects","persistent":false,"type":"struct"},"auditArchiveCreatedDateTime":{"name":"auditArchiveCreatedDateTime","ormtype":"timestamp"},"settingValueFormatted":{"name":"settingValueFormatted","persistent":false,"type":"any"},"auditSmartList":{"name":"auditSmartList","persistent":false,"type":"any"},"newFlag":{"name":"newFlag","persistent":false,"type":"boolean"},"validations":{"name":"validations","persistent":false,"type":"struct"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"},"auditArchiveEndDateTime":{"name":"auditArchiveEndDateTime","ormtype":"timestamp"},"sessionIPAddress":{"name":"sessionIPAddress","ormtype":"string"},"baseObject":{"name":"baseObject","ormtype":"string"},"sessionAccountFullName":{"name":"sessionAccountFullName","ormtype":"string"},"sessionAccountEmailAddress":{"name":"sessionAccountEmailAddress","ormtype":"string"},"archiveProcessedFlag":{"name":"archiveProcessedFlag","persistent":false,"type":"boolean"},"attributeValuesByAttributeIDStruct":{"name":"attributeValuesByAttributeIDStruct","persistent":false,"type":"struct"},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"auditArchiveStartDateTime":{"name":"auditArchiveStartDateTime","ormtype":"timestamp"},"assignedAttributeSetSmartList":{"name":"assignedAttributeSetSmartList","persistent":false,"type":"any"},"modifiedByAccount":{"name":"modifiedByAccount","persistent":false},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"createdByAccount":{"name":"createdByAccount","persistent":false},"simpleRepresentation":{"name":"simpleRepresentation","persistent":false,"type":"string"},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"changeDetails":{"name":"changeDetails","persistent":false,"type":"any"},"relatedEntity":{"name":"relatedEntity","persistent":false,"type":"any"},"persistableErrors":{"name":"persistableErrors","persistent":false,"type":"array"},"auditType":{"name":"auditType","ormtype":"string","hb_formattype":"rbKey"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"encryptedPropertiesExistFlag":{"name":"encryptedPropertiesExistFlag","persistent":false,"type":"boolean"},"auditDateTime":{"name":"auditDateTime","ormtype":"timestamp"},"rollbackProcessedFlag":{"name":"rollbackProcessedFlag","persistent":false,"type":"boolean"},"sessionAccountID":{"name":"sessionAccountID","ormtype":"string","length":32},"attributeValuesByAttributeCodeStruct":{"name":"attributeValuesByAttributeCodeStruct","persistent":false,"type":"struct"},"data":{"name":"data","ormtype":"string","length":8000},"baseID":{"name":"baseID","ormtype":"string"},"title":{"name":"title","ormtype":"string","length":1000}};
                	entities['Audit'].className = 'Audit';
                	validations['Audit'] = {"properties":{"archiveProcessedFlag":[{"eq":true,"contexts":"delete"}],"auditType":[{"inList":"create,update,delete,rollback,archive,login,loginInvalid,logout","contexts":"save"},{"inList":"update,rollback,archive","contexts":"rollback"}]}};
                	defaultValues['Audit'] = {
                	auditID:'',
										auditType:null,
									auditDateTime:'1438199247202',
										auditArchiveStartDateTime:null,
									auditArchiveEndDateTime:null,
									auditArchiveCreatedDateTime:null,
									baseObject:null,
									baseID:null,
									data:null,
									title:null,
									sessionIPAddress:'127.0.0.1',
										sessionAccountID:null,
									sessionAccountEmailAddress:null,
									sessionAccountFullName:null,
									
						z:''
	                };
                
                	entities['Order'] = {"emailTemplates":{"name":"emailTemplates","persistent":false,"type":"struct"},"createdDateTime":{"name":"createdDateTime","ormtype":"timestamp","hb_populateenabled":false},"nextEstimatedFulfillmentDateTime":{"name":"nextEstimatedFulfillmentDateTime","persistent":false,"type":"timestamp"},"settingValueFormatted":{"name":"settingValueFormatted","persistent":false,"type":"any"},"auditSmartList":{"name":"auditSmartList","persistent":false,"type":"any"},"modifiedDateTime":{"name":"modifiedDateTime","ormtype":"timestamp","hb_populateenabled":false},"referencingOrders":{"inverse":true,"name":"referencingOrders","fieldtype":"one-to-many","singularname":"referencingOrder","cascade":"all-delete-orphan","cfc":"Order","fkcolumn":"referencedOrderID"},"orderPlacedSite":{"name":"orderPlacedSite","fieldtype":"many-to-one","hb_populateenabled":"public","cfc":"Site","fkcolumn":"orderPlcaedSiteID"},"account":{"name":"account","fieldtype":"many-to-one","cfc":"Account","fkcolumn":"accountID"},"fulfillmentRefundTotal":{"name":"fulfillmentRefundTotal","hb_formattype":"currency","persistent":false},"depositItemSmartList":{"name":"depositItemSmartList","persistent":false},"promotionCodeList":{"name":"promotionCodeList","persistent":false},"totalReturnQuantity":{"name":"totalReturnQuantity","persistent":false},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"fulfillmentChargeTotal":{"name":"fulfillmentChargeTotal","hb_formattype":"currency","persistent":false},"orderFulfillments":{"inverse":true,"name":"orderFulfillments","fieldtype":"one-to-many","singularname":"orderFulfillment","hb_populateenabled":"public","cascade":"all-delete-orphan","cfc":"OrderFulfillment","fkcolumn":"orderID"},"quantityDelivered":{"name":"quantityDelivered","persistent":false},"dynamicChargeOrderPaymentAmount":{"name":"dynamicChargeOrderPaymentAmount","hb_formattype":"currency","persistent":false},"modifiedByAccount":{"name":"modifiedByAccount","persistent":false},"simpleRepresentation":{"name":"simpleRepresentation","persistent":false,"type":"string"},"dynamicCreditOrderPayment":{"name":"dynamicCreditOrderPayment","persistent":false},"nextEstimatedDeliveryDateTime":{"name":"nextEstimatedDeliveryDateTime","persistent":false,"type":"timestamp"},"orderReturns":{"inverse":true,"name":"orderReturns","fieldtype":"one-to-many","singularname":"orderReturn","hb_populateenabled":"public","cascade":"all-delete-orphan","cfc":"OrderReturn","fkcolumn":"orderID","type":"array"},"orderDeliveries":{"inverse":true,"name":"orderDeliveries","fieldtype":"one-to-many","singularname":"orderDelivery","cascade":"delete-orphan","cfc":"OrderDelivery","fkcolumn":"orderID"},"orderOrigin":{"name":"orderOrigin","fieldtype":"many-to-one","cfc":"OrderOrigin","hb_optionsnullrbkey":"define.none","fkcolumn":"orderOriginID"},"accountLoyaltyTransactions":{"inverse":true,"name":"accountLoyaltyTransactions","fieldtype":"one-to-many","singularname":"accountLoyaltyTransaction","cascade":"all","cfc":"AccountLoyaltyTransaction","fkcolumn":"orderID","type":"array"},"itemDiscountAmountTotal":{"name":"itemDiscountAmountTotal","hb_formattype":"currency","persistent":false},"saveShippingAccountAddressName":{"name":"saveShippingAccountAddressName","hb_populateenabled":"public","persistent":false},"processObjects":{"name":"processObjects","persistent":false,"type":"struct"},"orderItems":{"inverse":true,"name":"orderItems","fieldtype":"one-to-many","singularname":"orderItem","hb_populateenabled":"public","cascade":"all-delete-orphan","cfc":"OrderItem","fkcolumn":"orderID"},"orderCreatedSite":{"name":"orderCreatedSite","fieldtype":"many-to-one","hb_populateenabled":"public","cfc":"Site","fkcolumn":"orderCreatedSiteID"},"newFlag":{"name":"newFlag","persistent":false,"type":"boolean"},"validations":{"name":"validations","persistent":false,"type":"struct"},"billingAddress":{"name":"billingAddress","fieldtype":"many-to-one","hb_populateenabled":"public","cfc":"Address","fkcolumn":"billingAddressID"},"orderCloseDateTime":{"name":"orderCloseDateTime","ormtype":"timestamp"},"orderID":{"generator":"uuid","name":"orderID","fieldtype":"id","ormtype":"string","unsavedvalue":"","length":32,"default":""},"orderDiscountAmountTotal":{"name":"orderDiscountAmountTotal","hb_formattype":"currency","persistent":false},"attributeValuesByAttributeIDStruct":{"name":"attributeValuesByAttributeIDStruct","persistent":false,"type":"struct"},"statusCode":{"name":"statusCode","persistent":false},"paymentAmountCreditedTotal":{"name":"paymentAmountCreditedTotal","hb_formattype":"currency","persistent":false},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"subTotalAfterItemDiscounts":{"name":"subTotalAfterItemDiscounts","hb_formattype":"currency","persistent":false},"deliveredItemsAmountTotal":{"name":"deliveredItemsAmountTotal","persistent":false},"referencingPaymentAmountCreditedTotal":{"name":"referencingPaymentAmountCreditedTotal","hb_formattype":"currency","persistent":false},"stockReceivers":{"inverse":true,"name":"stockReceivers","fieldtype":"one-to-many","singularname":"stockReceiver","cascade":"all-delete-orphan","cfc":"StockReceiver","fkcolumn":"orderID","type":"array"},"appliedPromotions":{"inverse":true,"name":"appliedPromotions","fieldtype":"one-to-many","singularname":"appliedPromotion","cascade":"all-delete-orphan","cfc":"PromotionApplied","fkcolumn":"orderID"},"totalItems":{"name":"totalItems","persistent":false},"calculatedTotal":{"name":"calculatedTotal","ormtype":"big_decimal"},"currencyCode":{"name":"currencyCode","ormtype":"string","length":3},"saveShippingAccountAddressFlag":{"name":"saveShippingAccountAddressFlag","hb_populateenabled":"public","persistent":false},"paymentAmountTotal":{"name":"paymentAmountTotal","hb_formattype":"currency","persistent":false},"totalQuantity":{"name":"totalQuantity","persistent":false},"referencedOrderType":{"name":"referencedOrderType","ormtype":"string","hb_formattype":"rbKey"},"total":{"name":"total","hb_formattype":"currency","persistent":false},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"},"quantityUnreceived":{"name":"quantityUnreceived","persistent":false},"orderOpenIPAddress":{"name":"orderOpenIPAddress","ormtype":"string"},"fulfillmentDiscountAmountTotal":{"name":"fulfillmentDiscountAmountTotal","hb_formattype":"currency","persistent":false},"taxTotal":{"name":"taxTotal","hb_formattype":"currency","persistent":false},"remoteID":{"name":"remoteID","ormtype":"string"},"orderType":{"name":"orderType","fieldtype":"many-to-one","hb_optionssmartlistdata":"f:parentType.systemCode=orderType","cfc":"Type","fkcolumn":"orderTypeID"},"dynamicCreditOrderPaymentAmount":{"name":"dynamicCreditOrderPaymentAmount","hb_formattype":"currency","persistent":false},"quantityReceived":{"name":"quantityReceived","persistent":false},"orderOpenDateTime":{"name":"orderOpenDateTime","ormtype":"timestamp"},"shippingAddress":{"name":"shippingAddress","fieldtype":"many-to-one","hb_populateenabled":"public","cfc":"Address","fkcolumn":"shippingAddressID"},"createdByAccount":{"name":"createdByAccount","persistent":false},"fulfillmentTotal":{"name":"fulfillmentTotal","hb_formattype":"currency","persistent":false},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"returnItemSmartList":{"name":"returnItemSmartList","persistent":false},"shippingAccountAddress":{"name":"shippingAccountAddress","fieldtype":"many-to-one","hb_populateenabled":"public","cfc":"AccountAddress","fkcolumn":"shippingAccountAddressID"},"eligiblePaymentMethodDetails":{"name":"eligiblePaymentMethodDetails","persistent":false},"rollbackProcessedFlag":{"name":"rollbackProcessedFlag","persistent":false,"type":"boolean"},"addOrderItemStockOptionsSmartList":{"name":"addOrderItemStockOptionsSmartList","persistent":false},"attributeValuesByAttributeCodeStruct":{"name":"attributeValuesByAttributeCodeStruct","persistent":false,"type":"struct"},"orderPaymentAmountNeeded":{"name":"orderPaymentAmountNeeded","hb_formattype":"currency","persistent":false},"orderPaymentCreditAmountNeeded":{"name":"orderPaymentCreditAmountNeeded","hb_formattype":"currency","persistent":false},"totalSaleQuantity":{"name":"totalSaleQuantity","persistent":false},"orderNumber":{"name":"orderNumber","ormtype":"string"},"addOrderItemSkuOptionsSmartList":{"name":"addOrderItemSkuOptionsSmartList","persistent":false},"printTemplates":{"name":"printTemplates","persistent":false,"type":"struct"},"estimatedFulfillmentDateTime":{"name":"estimatedFulfillmentDateTime","ormtype":"timestamp"},"orderPaymentRefundOptions":{"name":"orderPaymentRefundOptions","persistent":false},"saveBillingAccountAddressFlag":{"name":"saveBillingAccountAddressFlag","hb_populateenabled":"public","persistent":false},"referencedOrder":{"name":"referencedOrder","fieldtype":"many-to-one","cfc":"Order","fkcolumn":"referencedOrderID"},"billingAccountAddress":{"name":"billingAccountAddress","fieldtype":"many-to-one","hb_populateenabled":"public","cfc":"AccountAddress","fkcolumn":"billingAccountAddressID"},"orderRequirementsList":{"name":"orderRequirementsList","persistent":false},"paymentAmountDue":{"name":"paymentAmountDue","hb_formattype":"currency","persistent":false},"createdByAccountID":{"name":"createdByAccountID","ormtype":"string","hb_populateenabled":false},"saleItemSmartList":{"name":"saleItemSmartList","persistent":false},"promotionCodes":{"name":"promotionCodes","fieldtype":"many-to-many","singularname":"promotionCode","inversejoincolumn":"promotionCodeID","cfc":"PromotionCode","fkcolumn":"orderID","linktable":"SwOrderPromotionCode"},"defaultStockLocation":{"name":"defaultStockLocation","fieldtype":"many-to-one","cfc":"Location","fkcolumn":"locationID"},"defaultStockLocationOptions":{"name":"defaultStockLocationOptions","persistent":false},"modifiedByAccountID":{"name":"modifiedByAccountID","ormtype":"string","hb_populateenabled":false},"estimatedDeliveryDateTime":{"name":"estimatedDeliveryDateTime","ormtype":"timestamp"},"paymentMethodOptionsSmartList":{"name":"paymentMethodOptionsSmartList","persistent":false},"orderPaymentChargeAmountNeeded":{"name":"orderPaymentChargeAmountNeeded","hb_formattype":"currency","persistent":false},"assignedAttributeSetSmartList":{"name":"assignedAttributeSetSmartList","persistent":false,"type":"any"},"paymentAmountReceivedTotal":{"name":"paymentAmountReceivedTotal","hb_formattype":"currency","persistent":false},"attributeValues":{"inverse":true,"name":"attributeValues","fieldtype":"one-to-many","singularname":"attributeValue","cascade":"all-delete-orphan","cfc":"AttributeValue","fkcolumn":"orderID","type":"array"},"quantityUndelivered":{"name":"quantityUndelivered","persistent":false},"orderPayments":{"inverse":true,"name":"orderPayments","fieldtype":"one-to-many","singularname":"orderPayment","hb_populateenabled":"public","cascade":"all-delete-orphan","cfc":"OrderPayment","fkcolumn":"orderID"},"persistableErrors":{"name":"persistableErrors","persistent":false,"type":"array"},"orderTypeOptions":{"name":"orderTypeOptions","persistent":false},"assignedAccount":{"name":"assignedAccount","fieldtype":"many-to-one","cfc":"Account","fkcolumn":"assignedAccountID"},"orderStatusType":{"name":"orderStatusType","fieldtype":"many-to-one","hb_optionssmartlistdata":"f:parentType.systemCode=orderStatusType","cfc":"Type","fkcolumn":"orderStatusTypeID"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"encryptedPropertiesExistFlag":{"name":"encryptedPropertiesExistFlag","persistent":false,"type":"boolean"},"discountTotal":{"name":"discountTotal","hb_formattype":"currency","persistent":false},"subTotal":{"name":"subTotal","hb_formattype":"currency","persistent":false},"dynamicChargeOrderPayment":{"name":"dynamicChargeOrderPayment","persistent":false},"addPaymentRequirementDetails":{"name":"addPaymentRequirementDetails","persistent":false},"fulfillmentChargeAfterDiscountTotal":{"name":"fulfillmentChargeAfterDiscountTotal","hb_formattype":"currency","persistent":false},"saveBillingAccountAddressName":{"name":"saveBillingAccountAddressName","hb_populateenabled":"public","persistent":false}};
                	entities['Order'].className = 'Order';
                	validations['Order'] = {"properties":{"orderItems":[{"minCollection":1,"contexts":"placeOrder,addOrderPayment"}],"quantityReceived":[{"contexts":"cancelOrder","maxValue":0}],"orderType":[{"required":true,"contexts":"save"}],"statusCode":[{"inList":"ostNotPlaced","contexts":"placeOrder,delete"},{"inList":"ostNotPlaced,ostNew,ostProcessing,ostOnHold","contexts":"addSaleOrderItem,addOrderPayment,addPromotionCode,updateStatus"},{"inList":"ostNew,ostProcessing,ostOnHold","contexts":"cancelOrder,closeOrder"},{"inList":"ostNew,ostProcessing,ostOnHold,ostClosed","contexts":"createReturn"},{"inList":"ostOnHold","contexts":"takeOffHold"},{"inList":"ostNew,ostProcessing","contexts":"placeOnHold"},{"inList":"ostNotPlaced","contexts":"auditRollback"}],"orderStatusType":[{"required":true,"contexts":"save"}],"quantityDelivered":[{"contexts":"cancelOrder","maxValue":0},{"minValue":1,"contexts":"createReturn"}]},"populatedPropertyValidation":{"shippingAddress":[{"validate":"full"}],"billingAddress":[{"validate":"full"}]}};
                	defaultValues['Order'] = {
                	orderID:'',
										orderNumber:'',
										currencyCode:null,
									orderOpenDateTime:null,
									orderOpenIPAddress:null,
									orderCloseDateTime:null,
									referencedOrderType:null,
									estimatedDeliveryDateTime:null,
									estimatedFulfillmentDateTime:null,
									calculatedTotal:null,
									remoteID:null,
									createdDateTime:'',
										createdByAccountID:null,
									modifiedDateTime:'',
										modifiedByAccountID:null,
									
						z:''
	                };
                
                	entities['Order_AddOrderItem'] = {"orderReturnID":{"name":"orderReturnID","hb_rbkey":"entity.orderReturn","hb_formfieldtype":"select"},"saveShippingAccountAddressFlag":{"name":"saveShippingAccountAddressFlag","hb_formfieldtype":"yesno"},"returnLocationIDOptions":{"name":"returnLocationIDOptions"},"assignedOrderItemAttributeSets":{"name":"assignedOrderItemAttributeSets"},"order":{"name":"order"},"locationIDOptions":{"name":"locationIDOptions"},"stock":{"name":"stock","hb_rbkey":"entity.stock"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"},"fulfillmentMethod":{"name":"fulfillmentMethod","hb_rbkey":"entity.fulfillmentMethod"},"registrants":{"name":"registrants","hb_populatearray":true,"type":"array"},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"orderFulfillmentIDOptions":{"name":"orderFulfillmentIDOptions"},"quantity":{"name":"quantity"},"stockID":{"name":"stockID"},"locationID":{"name":"locationID","hb_rbkey":"entity.location","hb_formfieldtype":"select"},"shippingAccountAddressIDOptions":{"name":"shippingAccountAddressIDOptions"},"selectedOptionIDList":{"name":"selectedOptionIDList"},"shippingAddress":{"name":"shippingAddress","fieldtype":"many-to-one","persistent":false,"cfc":"Address","fkcolumn":"addressID"},"orderFulfillmentID":{"name":"orderFulfillmentID","hb_formfieldtype":"select"},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"preProcessDisplayedFlag":{"name":"preProcessDisplayedFlag"},"product":{"name":"product","hb_rbkey":"entity.product"},"productID":{"name":"productID"},"orderReturn":{"name":"orderReturn","hb_rbkey":"entity.orderReturn"},"populatedFlag":{"name":"populatedFlag"},"fulfillmentMethodIDOptions":{"name":"fulfillmentMethodIDOptions"},"fulfillmentMethodType":{"name":"fulfillmentMethodType"},"pickupLocationIDOptions":{"name":"pickupLocationIDOptions"},"returnLocationID":{"name":"returnLocationID","hb_rbkey":"entity.orderReturn.returnLocation","hb_formfieldtype":"select"},"price":{"name":"price"},"saveShippingAccountAddressName":{"name":"saveShippingAccountAddressName"},"validations":{"name":"validations","persistent":false,"type":"struct"},"attributeValuesByCodeStruct":{"name":"attributeValuesByCodeStruct"},"fulfillmentMethodID":{"name":"fulfillmentMethodID","hb_formfieldtype":"select"},"emailAddress":{"name":"emailAddress","hb_rbkey":"entity.orderFulfillment.emailAddress"},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"sku":{"name":"sku","hb_rbkey":"entity.sku"},"childOrderItems":{"name":"childOrderItems","hb_populatearray":true,"type":"array"},"orderFulfillment":{"name":"orderFulfillment","hb_rbkey":"entity.orderFulfillment"},"returnLocation":{"name":"returnLocation","hb_rbkey":"entity.location"},"skuID":{"name":"skuID"},"orderReturnIDOptions":{"name":"orderReturnIDOptions"},"fulfillmentRefundAmount":{"name":"fulfillmentRefundAmount","hb_rbkey":"entity.orderReturn.fulfillmentRefundAmount"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"pickupLocationID":{"name":"pickupLocationID","hb_rbkey":"entity.orderFulfillment.pickupLocation","hb_formfieldtype":"select"},"location":{"name":"location","hb_rbkey":"entity.location"},"orderItemTypeSystemCode":{"name":"orderItemTypeSystemCode"},"shippingAccountAddressID":{"name":"shippingAccountAddressID","hb_formfieldtype":"select"},"publicRemoteID":{"name":"publicRemoteID"},"currencyCode":{"name":"currencyCode"}};
                	entities['Order_AddOrderItem'].className = 'Order_AddOrderItem';
                	validations['Order_AddOrderItem'] = {"properties":{"orderReturnID":[],"price":[{"dataType":"numeric","minValue":0,"required":true}],"orderFulfillmentID":[],"sku":[{"required":true}],"preProcessDisplayedFlag":[{"eq":1,"conditions":"newOrderFulfillment,newOrderReturn,customizationsExist"}],"emailAddress":[{"dataType":"email"}],"quantity":[{"dataType":"numeric","minValue":1,"required":true,"lteProperty":"sku.qats"}]},"conditions":{"orderItemTypeSale":{"orderItemTypeSystemCode":{"eq":"oitSale"}},"newShippingOrderFulfillmentWithNewAddress":{"orderFulfillmentID":{"eq":""},"shippingAccountAddressID":{"eq":"new"},"fulfillmentMethodType":{"eq":"shipping"}},"orderItemTypeReturn":{"orderItemTypeSystemCode":{"eq":"oitReturn"}},"existingOrderFulfillment":{"orderFulfillment":{"null":false}},"existingOrderReturn":{"orderReturn":{"null":false}},"newOrderReturn":{"orderItemTypeSystemCode":{"eq":"oitReturn"},"orderReturn":{"null":true}},"newOrderFulfillment":{"orderItemTypeSystemCode":{"eq":"oitSale"},"orderFulfillment":{"null":true}},"customizationsExist":{"assignedOrderItemAttributeSets":{"minCollection":1}}},"populatedPropertyValidation":{"shippingAddress":[{"conditions":"existingOrderFulfillment","validate":false},{"conditions":"newShippingOrderFulfillmentWithNewAddress","validate":"full"}]}};
                	defaultValues['Order_AddOrderItem'] = {
                	order:'',
										stock:'',
									sku:'',
									product:'',
									location:'',
									orderFulfillment:'',
									orderReturn:'',
									returnLocation:'',
									fulfillmentMethod:'',
									stockID:'',
									skuID:'',
									productID:'',
									locationID:'',
									returnLocationID:'',
									selectedOptionIDList:'',
									orderFulfillmentID:"new",
										orderReturnID:"new",
										fulfillmentMethodID:'',
									shippingAccountAddressID:'',
									pickupLocationID:'',
									price:0,
										currencyCode:"USD",
										quantity:1,
										orderItemTypeSystemCode:"oitSale",
										saveShippingAccountAddressFlag:1,
										saveShippingAccountAddressName:'',
									fulfillmentRefundAmount:0,
										emailAddress:'',
									registrants:'',
									childOrderItems:[],
										publicRemoteID:'',
									attributeValuesByCodeStruct:'',
									fulfillmentMethodIDOptions:[{"value":"4028288d4ae4d10e014aea8bdabc016e","fulfillmentMethodType":"shipping","name":"test shipping method"},{"value":"444df2fb93d5fa960ba2966ba2017953","fulfillmentMethodType":"shipping","name":"Shipping"},{"value":"444df2ffeca081dc22f69c807d2bd8fe","fulfillmentMethodType":"auto","name":"Auto"},{"value":"444df300bf377327cd0e44f4b16be38e","fulfillmentMethodType":"attend","name":"Attend Event"},{"value":"db6b606861a744629ea3a6808a39a161","fulfillmentMethodType":"shipping","name":"TestRunner"}],
										locationIDOptions:[{"name":"testlocation","value":"4028288d4b3b616c014b50dff9fa00f6"},{"name":"San Diego Retail Store","value":"402881834b9511fb014bbce4e713066b"},{"name":"Default","value":"88e6d435d3ac2e5947c81ab3da60eba2"}],
										orderFulfillmentIDOptions:[{"name":"New","value":"new"}],
										orderReturnIDOptions:[{"name":"New","value":"new"}],
										pickupLocationIDOptions:[{"name":"testlocation","value":"4028288d4b3b616c014b50dff9fa00f6"},{"name":"San Diego Retail Store","value":"402881834b9511fb014bbce4e713066b"},{"name":"Default","value":"88e6d435d3ac2e5947c81ab3da60eba2"}],
										returnLocationIDOptions:[{"name":"testlocation","value":"4028288d4b3b616c014b50dff9fa00f6"},{"name":"San Diego Retail Store","value":"402881834b9511fb014bbce4e713066b"},{"name":"Default","value":"88e6d435d3ac2e5947c81ab3da60eba2"}],
										assignedOrderItemAttributeSets:[],
										fulfillmentMethodType:"",
										preProcessDisplayedFlag:0,
										populatedFlag:0,
										
						z:''
	                };
                
                	entities['Order_AddOrderPayment'] = {"accountPaymentMethodIDOptions":{"name":"accountPaymentMethodIDOptions"},"accountAddressID":{"name":"accountAddressID","hb_rbkey":"entity.accountAddress","hb_formfieldtype":"select"},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"preProcessDisplayedFlag":{"name":"preProcessDisplayedFlag"},"order":{"name":"order"},"saveAccountPaymentMethodFlag":{"name":"saveAccountPaymentMethodFlag","hb_formfieldtype":"yesno"},"saveAccountPaymentMethodName":{"name":"saveAccountPaymentMethodName","hb_rbkey":"entity.accountPaymentMethod.accountPaymentMethodName"},"previousOrderPaymentIDOptions":{"name":"previousOrderPaymentIDOptions"},"validations":{"name":"validations","persistent":false,"type":"struct"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"},"copyFromTypeOptions":{"name":"copyFromTypeOptions"},"populatedFlag":{"name":"populatedFlag"},"copyFromType":{"name":"copyFromType","ormtype":"string","hb_rbkey":"entity.copyFromType","hb_formfieldtype":"select"},"attributeValuesByCodeStruct":{"name":"attributeValuesByCodeStruct"},"previousOrderPaymentID":{"name":"previousOrderPaymentID","hb_rbkey":"entity.previousOrderPayment","hb_formfieldtype":"select"},"accountPaymentMethodID":{"name":"accountPaymentMethodID","hb_rbkey":"entity.accountPaymentMethod","hb_formfieldtype":"select"},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"paymentTermIDOptions":{"name":"paymentTermIDOptions"},"accountAddressIDOptions":{"name":"accountAddressIDOptions"},"paymentMethodIDOptions":{"name":"paymentMethodIDOptions"},"newOrderPayment":{"name":"newOrderPayment","fieldtype":"many-to-one","persistent":false,"cfc":"OrderPayment","fkcolumn":"orderPaymentID"}};
                	entities['Order_AddOrderPayment'].className = 'Order_AddOrderPayment';
                	validations['Order_AddOrderPayment'] = {"properties":{"newOrderPayment.dynamicAmountFlag":[{"eq":false,"conditions":"noPaymentAmountNeeded"}]},"conditions":{"noPaymentAmountNeeded":{"order.orderPaymentAmountNeeded":{"eq":0}}},"populatedPropertyValidation":{"newOrderPayment":[{"validate":false}]}};
                	defaultValues['Order_AddOrderPayment'] = {
                	order:'',
										copyFromType:"",
										accountPaymentMethodID:"",
										accountAddressID:"",
										previousOrderPaymentID:"",
										saveAccountPaymentMethodFlag:0,
										saveAccountPaymentMethodName:'',
									attributeValuesByCodeStruct:'',
									accountPaymentMethodIDOptions:[],
										previousOrderPaymentIDOptions:[],
										paymentMethodIDOptions:[],
										accountAddressIDOptions:[{"name":"New","value":""}],
										paymentTermIDOptions:[{"name":"Select","value":""},{"name":"Net 30","value":"27f223d1a5b7cba92e783c926e29efc6"},{"name":"Net 60","value":"27f223d2f018f5737a2b82838c4027e9"},{"name":"Net 90","value":"27f223d3b4b878a2771226a03417a764"}],
										copyFromTypeOptions:[{"name":"New","value":""}],
										preProcessDisplayedFlag:0,
										populatedFlag:0,
										
						z:''
	                };
                
                	entities['Order_AddPromotionCode'] = {"populatedFlag":{"name":"populatedFlag"},"promotionCode":{"name":"promotionCode","hb_rbkey":"entity.promotionCode.promotionCode"},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"preProcessDisplayedFlag":{"name":"preProcessDisplayedFlag"},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"order":{"name":"order"},"validations":{"name":"validations","persistent":false,"type":"struct"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"}};
                	entities['Order_AddPromotionCode'].className = 'Order_AddPromotionCode';
                	validations['Order_AddPromotionCode'] = {"properties":{"promotionCode":[{"required":true,"method":"promotionCodeNotAlreadyApplied"}]}};
                	defaultValues['Order_AddPromotionCode'] = {
                	order:'',
										promotionCode:'',
									preProcessDisplayedFlag:0,
										populatedFlag:0,
										
						z:''
	                };
                
                	entities['Order_ChangeCurrencyCode'] = {"populatedFlag":{"name":"populatedFlag"},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"preProcessDisplayedFlag":{"name":"preProcessDisplayedFlag"},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"order":{"name":"order"},"validations":{"name":"validations","persistent":false,"type":"struct"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"},"currencyCode":{"name":"currencyCode"}};
                	entities['Order_ChangeCurrencyCode'].className = 'Order_ChangeCurrencyCode';
                	validations['Order_ChangeCurrencyCode'] = {"properties":{}};
                	defaultValues['Order_ChangeCurrencyCode'] = {
                	order:'',
										currencyCode:'',
									preProcessDisplayedFlag:0,
										populatedFlag:0,
										
						z:''
	                };
                
                	entities['Order_Create'] = {"company":{"name":"company","hb_rbkey":"entity.account.company"},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"preProcessDisplayedFlag":{"name":"preProcessDisplayedFlag"},"orderOriginID":{"name":"orderOriginID","hb_rbkey":"entity.orderOrigin","hb_formfieldtype":"select"},"order":{"name":"order"},"newAccountFlag":{"name":"newAccountFlag"},"validations":{"name":"validations","persistent":false,"type":"struct"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"},"orderTypeID":{"name":"orderTypeID","hb_rbkey":"entity.order.orderType","hb_formfieldtype":"select"},"emailAddressConfirm":{"name":"emailAddressConfirm"},"accountID":{"name":"accountID","hb_rbkey":"entity.account","cfc":"Account","hb_formfieldtype":"textautocomplete"},"firstName":{"name":"firstName","hb_rbkey":"entity.account.firstName"},"phoneNumber":{"name":"phoneNumber"},"populatedFlag":{"name":"populatedFlag"},"createAuthenticationFlag":{"name":"createAuthenticationFlag","hb_rbkey":"processObject.account_create.createAuthenticationFlag"},"fulfillmentMethodIDOptions":{"name":"fulfillmentMethodIDOptions"},"passwordConfirm":{"name":"passwordConfirm"},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"defaultStockLocationID":{"name":"defaultStockLocationID","hb_rbkey":"entity.order.defaultStockLocation","hb_formfieldtype":"select"},"password":{"name":"password"},"currencyCode":{"name":"currencyCode","hb_rbkey":"entity.currency","hb_formfieldtype":"select"},"emailAddress":{"name":"emailAddress"},"lastName":{"name":"lastName","hb_rbkey":"entity.account.lastName"}};
                	entities['Order_Create'].className = 'Order_Create';
                	validations['Order_Create'] = {"properties":{"firstName":[{"required":true,"conditions":"newAccountSelected"}],"passwordConfirm":[{"required":true,"conditions":"savePasswordSelected"}],"password":[{"required":true,"conditions":"savePasswordSelected","minLength":6,"eqProperty":"passwordConfirm"}],"emailAddressConfirm":[{"required":true,"conditions":"savePasswordSelected"}],"emailAddress":[{"required":true,"conditions":"savePasswordSelected"},{"dataType":"email"},{"conditions":"newAccountSelected","eqProperty":"emailAddressConfirm"}],"accountID":[{"required":true,"conditions":"existingAccountSelected"}],"lastName":[{"required":true,"conditions":"newAccountSelected"}]},"conditions":{"existingAccountSelected":{"newAccountFlag":{"eq":0}},"newAccountSelected":{"newAccountFlag":{"eq":1}},"savePasswordSelected":{"createAuthenticationFlag":{"eq":1},"newAccountFlag":{"eq":1}}}};
                	defaultValues['Order_Create'] = {
                	order:'',
										orderTypeID:"444df2df9f923d6c6fd0942a466e84cc",
										currencyCode:'',
									newAccountFlag:1,
										accountID:'',
									firstName:'',
									lastName:'',
									company:'',
									phoneNumber:'',
									emailAddress:'',
									emailAddressConfirm:'',
									createAuthenticationFlag:0,
										password:'',
									passwordConfirm:'',
									orderOriginID:'',
									defaultStockLocationID:'',
									fulfillmentMethodIDOptions:[{"value":"4028288d4ae4d10e014aea8bdabc016e","name":"test shipping method"},{"value":"444df2fb93d5fa960ba2966ba2017953","name":"Shipping"},{"value":"444df2ffeca081dc22f69c807d2bd8fe","name":"Auto"},{"value":"444df300bf377327cd0e44f4b16be38e","name":"Attend Event"},{"value":"db6b606861a744629ea3a6808a39a161","name":"TestRunner"}],
										preProcessDisplayedFlag:0,
										populatedFlag:0,
										
						z:''
	                };
                
                	entities['Order_CreateReturn'] = {"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"orderItems":{"name":"orderItems","hb_populatearray":true,"type":"array"},"preProcessDisplayedFlag":{"name":"preProcessDisplayedFlag"},"order":{"name":"order"},"fulfillmentRefundAmount":{"name":"fulfillmentRefundAmount"},"validations":{"name":"validations","persistent":false,"type":"struct"},"refundOrderPaymentID":{"name":"refundOrderPaymentID","hb_formfieldtype":"select"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"receiveItemsFlag":{"name":"receiveItemsFlag","hb_sessiondefault":0,"hb_formfieldtype":"yesno"},"location":{"name":"location","fieldtype":"many-to-one","cfc":"Location","fkcolumn":"locationID"},"orderTypeCode":{"name":"orderTypeCode","hb_rbkey":"entity.order.orderType","hb_formfieldtype":"select"},"populatedFlag":{"name":"populatedFlag"},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"}};
                	entities['Order_CreateReturn'].className = 'Order_CreateReturn';
                	validations['Order_CreateReturn'] = {"properties":{"fulfillmentRefundAmount":[{"dataType":"numeric","minValue":0}]}};
                	defaultValues['Order_CreateReturn'] = {
                	order:'',
										orderItems:[],
										fulfillmentRefundAmount:0,
										refundOrderPaymentID:"",
										receiveItemsFlag:0,
										orderTypeCode:"otReturnOrder",
										preProcessDisplayedFlag:0,
										populatedFlag:0,
										
						z:''
	                };
                
                	entities['Order_UpdateOrderFulfillment'] = {"orderItemIDList":{"name":"orderItemIDList"},"populatedFlag":{"name":"populatedFlag"},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"preProcessDisplayedFlag":{"name":"preProcessDisplayedFlag"},"orderItems":{"name":"orderItems","hb_populateenabled":false},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"orderFulfillment":{"name":"orderFulfillment","fieldtype":"many-to-one","cfc":"OrderFulfillment","fkcolumn":"orderFulfillmentID"},"order":{"name":"order"},"validations":{"name":"validations","persistent":false,"type":"struct"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"}};
                	entities['Order_UpdateOrderFulfillment'].className = 'Order_UpdateOrderFulfillment';
                	validations['Order_UpdateOrderFulfillment'] = {"properties":{"orderItemIDList":[{"required":true}],"orderFulfillment":[{"required":true,"method":"getOrderFulfillmentMatchesOrderFlag"}]},"conditions":{"existingAccountSelected":{"newAccountFlag":{"eq":0}},"newAccountSelected":{"newAccountFlag":{"eq":1}},"savePasswordSelected":{"createAuthenticationFlag":{"eq":1},"newAccountFlag":{"eq":1}}}};
                	defaultValues['Order_UpdateOrderFulfillment'] = {
                	order:'',
										orderItemIDList:'',
									orderItems:[],
										preProcessDisplayedFlag:0,
										populatedFlag:0,
										
						z:''
	                };
                
                	entities['Schedule'] = {"createdDateTime":{"name":"createdDateTime","ormtype":"timestamp","hb_populateenabled":false},"emailTemplates":{"name":"emailTemplates","persistent":false,"type":"struct"},"printTemplates":{"name":"printTemplates","persistent":false,"type":"struct"},"scheduleName":{"name":"scheduleName","ormtype":"string"},"processObjects":{"name":"processObjects","persistent":false,"type":"struct"},"settingValueFormatted":{"name":"settingValueFormatted","persistent":false,"type":"any"},"auditSmartList":{"name":"auditSmartList","persistent":false,"type":"any"},"modifiedDateTime":{"name":"modifiedDateTime","ormtype":"timestamp","hb_populateenabled":false},"frequencyInterval":{"name":"frequencyInterval","ormtype":"integer"},"newFlag":{"name":"newFlag","persistent":false,"type":"boolean"},"validations":{"name":"validations","persistent":false,"type":"struct"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"},"createdByAccountID":{"name":"createdByAccountID","ormtype":"string","hb_populateenabled":false},"scheduleID":{"generator":"uuid","name":"scheduleID","fieldtype":"id","ormtype":"string","unsavedvalue":"","length":32,"default":""},"daysOfWeekToRun":{"name":"daysOfWeekToRun","ormtype":"string","hb_formfieldtype":"checkboxgroup"},"remoteID":{"name":"remoteID","ormtype":"string"},"modifiedByAccountID":{"name":"modifiedByAccountID","ormtype":"string","hb_populateenabled":false},"attributeValuesByAttributeIDStruct":{"name":"attributeValuesByAttributeIDStruct","persistent":false,"type":"struct"},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"assignedAttributeSetSmartList":{"name":"assignedAttributeSetSmartList","persistent":false,"type":"any"},"modifiedByAccount":{"name":"modifiedByAccount","persistent":false},"daysOfMonthToRun":{"name":"daysOfMonthToRun","ormtype":"string","hb_formfieldtype":"checkboxgroup"},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"createdByAccount":{"name":"createdByAccount","persistent":false},"simpleRepresentation":{"name":"simpleRepresentation","persistent":false,"type":"string"},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"persistableErrors":{"name":"persistableErrors","persistent":false,"type":"array"},"recuringType":{"name":"recuringType","ormtype":"string","hb_formattype":"rbKey","hb_formfieldtype":"select"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"encryptedPropertiesExistFlag":{"name":"encryptedPropertiesExistFlag","persistent":false,"type":"boolean"},"rollbackProcessedFlag":{"name":"rollbackProcessedFlag","persistent":false,"type":"boolean"},"attributeValuesByAttributeCodeStruct":{"name":"attributeValuesByAttributeCodeStruct","persistent":false,"type":"struct"},"frequencyStartTime":{"name":"frequencyStartTime","ormtype":"timestamp","hb_formattype":"time","hb_formfieldtype":"time"},"frequencyEndTime":{"hb_nullrbkey":"entity.schedule.frequencyEndTime.runOnce","name":"frequencyEndTime","ormtype":"timestamp","hb_formattype":"time","hb_formfieldtype":"time"}};
                	entities['Schedule'].className = 'Schedule';
                	validations['Schedule'] = {"properties":{"scheduleName":[{"required":true,"contexts":"save"}],"frequencyStartTime":[{"required":true,"contexts":"save"}],"frequencyEndTime":[{"contexts":"save","conditions":"frequencyEndTimeExists","gtDateTimeProperty":"frequencyStartTime"}],"frequencyInterval":[{"required":true,"contexts":"save","conditions":"frequencyEndTimeExists"}],"recuringType":[{"required":true,"contexts":"save"}]},"conditions":{"frequencyEndTimeExists":{"frequencyEndTime":{"required":true}}}};
                	defaultValues['Schedule'] = {
                	scheduleID:'',
										scheduleName:null,
									recuringType:null,
									daysOfWeekToRun:null,
									daysOfMonthToRun:null,
									frequencyInterval:null,
									frequencyStartTime:null,
									frequencyEndTime:null,
									remoteID:null,
									createdDateTime:'',
										createdByAccountID:null,
									modifiedDateTime:'',
										modifiedByAccountID:null,
									
						z:''
	                };
                
                	entities['Attribute'] = {"validationTypeOptions":{"name":"validationTypeOptions","persistent":false},"createdDateTime":{"name":"createdDateTime","ormtype":"timestamp","hb_populateenabled":false},"emailTemplates":{"name":"emailTemplates","persistent":false,"type":"struct"},"attributeInputType":{"name":"attributeInputType","ormtype":"string","hb_formattype":"rbKey","hb_formfieldtype":"select"},"defaultValue":{"name":"defaultValue","ormtype":"string"},"sortOrder":{"sortcontext":"attributeSet","name":"sortOrder","ormtype":"integer"},"relatedObjectOptions":{"name":"relatedObjectOptions","persistent":false},"attributeOptions":{"inverse":true,"name":"attributeOptions","fieldtype":"one-to-many","orderby":"sortOrder","singularname":"attributeOption","cascade":"all-delete-orphan","cfc":"AttributeOption","fkcolumn":"attributeID"},"settingValueFormatted":{"name":"settingValueFormatted","persistent":false,"type":"any"},"auditSmartList":{"name":"auditSmartList","persistent":false,"type":"any"},"modifiedDateTime":{"name":"modifiedDateTime","ormtype":"timestamp","hb_populateenabled":false},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"},"decryptValueInAdminFlag":{"name":"decryptValueInAdminFlag","ormtype":"boolean"},"remoteID":{"name":"remoteID","ormtype":"string","hb_populateenabled":false},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"attributeSet":{"name":"attributeSet","fieldtype":"many-to-one","cfc":"AttributeSet","hb_optionsnullrbkey":"define.select","fkcolumn":"attributeSetID"},"attributeID":{"generator":"uuid","name":"attributeID","fieldtype":"id","ormtype":"string","unsavedvalue":"","length":32,"default":""},"attributeName":{"name":"attributeName","ormtype":"string"},"attributeValueUploadDirectory":{"name":"attributeValueUploadDirectory","persistent":false},"modifiedByAccount":{"name":"modifiedByAccount","persistent":false},"simpleRepresentation":{"name":"simpleRepresentation","persistent":false,"type":"string"},"createdByAccount":{"name":"createdByAccount","persistent":false},"typeSetOptions":{"name":"typeSetOptions","persistent":false},"validationMessage":{"name":"validationMessage","ormtype":"string"},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"rollbackProcessedFlag":{"name":"rollbackProcessedFlag","persistent":false,"type":"boolean"},"attributeValuesByAttributeCodeStruct":{"name":"attributeValuesByAttributeCodeStruct","persistent":false,"type":"struct"},"attributeDescription":{"name":"attributeDescription","ormtype":"string","length":4000},"printTemplates":{"name":"printTemplates","persistent":false,"type":"struct"},"attributeInputTypeOptions":{"name":"attributeInputTypeOptions","persistent":false},"processObjects":{"name":"processObjects","persistent":false,"type":"struct"},"attributeCode":{"index":"PI_ATTRIBUTECODE","name":"attributeCode","ormtype":"string"},"attributeType":{"name":"attributeType","persistent":false},"newFlag":{"name":"newFlag","persistent":false,"type":"boolean"},"validations":{"name":"validations","persistent":false,"type":"struct"},"createdByAccountID":{"name":"createdByAccountID","ormtype":"string","hb_populateenabled":false},"modifiedByAccountID":{"name":"modifiedByAccountID","ormtype":"string","hb_populateenabled":false},"attributeValuesByAttributeIDStruct":{"name":"attributeValuesByAttributeIDStruct","persistent":false,"type":"struct"},"requiredFlag":{"name":"requiredFlag","ormtype":"boolean","default":false},"assignedAttributeSetSmartList":{"name":"assignedAttributeSetSmartList","persistent":false,"type":"any"},"displayOnOrderDetailFlag":{"name":"displayOnOrderDetailFlag","ormtype":"boolean","default":0},"validationRegex":{"name":"validationRegex","ormtype":"string"},"attributeValues":{"inverse":true,"name":"attributeValues","fieldtype":"one-to-many","singularname":"attributeValue","cascade":"delete-orphan","cfc":"AttributeValue","fkcolumn":"attributeID"},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"persistableErrors":{"name":"persistableErrors","persistent":false,"type":"array"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"encryptedPropertiesExistFlag":{"name":"encryptedPropertiesExistFlag","persistent":false,"type":"boolean"},"validationType":{"name":"validationType","fieldtype":"many-to-one","hb_optionssmartlistdata":"f:parentType.systemCode=validationType","cfc":"Type","hb_optionsnullrbkey":"define.select","fkcolumn":"validationTypeID"},"relatedObject":{"name":"relatedObject","ormtype":"string","hb_formfieldtype":"select"},"typeSet":{"name":"typeSet","fieldtype":"many-to-one","cfc":"Type","fkcolumn":"typeSetID"},"attributeHint":{"name":"attributeHint","ormtype":"string"},"formFieldType":{"name":"formFieldType","persistent":false},"activeFlag":{"name":"activeFlag","ormtype":"boolean","default":1}};
                	entities['Attribute'].className = 'Attribute';
                	validations['Attribute'] = {"properties":{"attributeCode":[{"unique":true,"regex":"^[a-zA-Z][a-zA-Z0-9_]*$","required":true,"contexts":"save"}],"typeSet":[{"required":true,"contexts":"save","conditions":"attributeInputTypeRequiresTypeSet"}],"attributeType":[{"required":true,"contexts":"save"}],"relatedObject":[{"required":true,"contexts":"save","conditions":"attributeInputTypeRequiresObject"}],"attributeName":[{"required":true,"contexts":"save"}]},"conditions":{"attributeInputTypeRequiresTypeSet":{"attributeInputType":{"inList":"typeSelect"}},"attributeInputTypeRequiresObject":{"attributeInputType":{"inList":"relatedObjectSelect,relatedObjectMultiselect"}}}};
                	defaultValues['Attribute'] = {
                	attributeID:'',
										activeFlag:1,
									displayOnOrderDetailFlag:0,
									attributeName:null,
									attributeCode:null,
									attributeDescription:null,
									attributeHint:null,
									attributeInputType:null,
									defaultValue:null,
									requiredFlag:false,
									sortOrder:null,
									validationMessage:null,
									validationRegex:null,
									decryptValueInAdminFlag:null,
									relatedObject:null,
									remoteID:null,
									createdDateTime:'',
										createdByAccountID:null,
									modifiedDateTime:'',
										modifiedByAccountID:null,
									
						z:''
	                };
                
                	entities['Inventory'] = {"createdDateTime":{"name":"createdDateTime","ormtype":"timestamp","hb_populateenabled":false},"emailTemplates":{"name":"emailTemplates","persistent":false,"type":"struct"},"printTemplates":{"name":"printTemplates","persistent":false,"type":"struct"},"processObjects":{"name":"processObjects","persistent":false,"type":"struct"},"settingValueFormatted":{"name":"settingValueFormatted","persistent":false,"type":"any"},"quantityOut":{"name":"quantityOut","ormtype":"integer"},"auditSmartList":{"name":"auditSmartList","persistent":false,"type":"any"},"stock":{"name":"stock","fieldtype":"many-to-one","cfc":"Stock","fkcolumn":"stockID"},"newFlag":{"name":"newFlag","persistent":false,"type":"boolean"},"validations":{"name":"validations","persistent":false,"type":"struct"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"},"inventoryID":{"generator":"uuid","name":"inventoryID","fieldtype":"id","ormtype":"string","unsavedvalue":"","length":32,"default":""},"createdByAccountID":{"name":"createdByAccountID","ormtype":"string","hb_populateenabled":false},"attributeValuesByAttributeIDStruct":{"name":"attributeValuesByAttributeIDStruct","persistent":false,"type":"struct"},"orderDeliveryItem":{"name":"orderDeliveryItem","fieldtype":"many-to-one","cfc":"OrderDeliveryItem","fkcolumn":"orderDeliveryItemID"},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"assignedAttributeSetSmartList":{"name":"assignedAttributeSetSmartList","persistent":false,"type":"any"},"modifiedByAccount":{"name":"modifiedByAccount","persistent":false},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"simpleRepresentation":{"name":"simpleRepresentation","persistent":false,"type":"string"},"createdByAccount":{"name":"createdByAccount","persistent":false},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"persistableErrors":{"name":"persistableErrors","persistent":false,"type":"array"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"encryptedPropertiesExistFlag":{"name":"encryptedPropertiesExistFlag","persistent":false,"type":"boolean"},"quantityIn":{"name":"quantityIn","ormtype":"integer"},"rollbackProcessedFlag":{"name":"rollbackProcessedFlag","persistent":false,"type":"boolean"},"attributeValuesByAttributeCodeStruct":{"name":"attributeValuesByAttributeCodeStruct","persistent":false,"type":"struct"},"stockReceiverItem":{"name":"stockReceiverItem","fieldtype":"many-to-one","cfc":"StockReceiverItem","fkcolumn":"stockReceiverItemID"},"stockAdjustmentDeliveryItem":{"name":"stockAdjustmentDeliveryItem","fieldtype":"many-to-one","cfc":"StockAdjustmentDeliveryItem","fkcolumn":"stockAdjustmentDeliveryItemID"}};
                	entities['Inventory'].className = 'Inventory';
                	validations['Inventory'] = {"properties":{}};
                	defaultValues['Inventory'] = {
                	inventoryID:'',
										quantityIn:null,
									quantityOut:null,
									createdDateTime:'',
										createdByAccountID:null,
									
						z:''
	                };
                
                	entities['SubscriptionTerm'] = {"autoRenewFlag":{"name":"autoRenewFlag","ormtype":"boolean","hb_formattype":"yesno"},"createdDateTime":{"name":"createdDateTime","ormtype":"timestamp","hb_populateenabled":false},"emailTemplates":{"name":"emailTemplates","persistent":false,"type":"struct"},"printTemplates":{"name":"printTemplates","persistent":false,"type":"struct"},"processObjects":{"name":"processObjects","persistent":false,"type":"struct"},"settingValueFormatted":{"name":"settingValueFormatted","persistent":false,"type":"any"},"auditSmartList":{"name":"auditSmartList","persistent":false,"type":"any"},"modifiedDateTime":{"name":"modifiedDateTime","ormtype":"timestamp","hb_populateenabled":false},"allowProrateFlag":{"name":"allowProrateFlag","ormtype":"boolean","hb_formattype":"yesno"},"newFlag":{"name":"newFlag","persistent":false,"type":"boolean"},"validations":{"name":"validations","persistent":false,"type":"struct"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"},"createdByAccountID":{"name":"createdByAccountID","ormtype":"string","hb_populateenabled":false},"remoteID":{"name":"remoteID","ormtype":"string"},"modifiedByAccountID":{"name":"modifiedByAccountID","ormtype":"string","hb_populateenabled":false},"attributeValuesByAttributeIDStruct":{"name":"attributeValuesByAttributeIDStruct","persistent":false,"type":"struct"},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"initialTerm":{"name":"initialTerm","fieldtype":"many-to-one","cfc":"Term","fkcolumn":"initialTermID"},"assignedAttributeSetSmartList":{"name":"assignedAttributeSetSmartList","persistent":false,"type":"any"},"gracePeriodTerm":{"name":"gracePeriodTerm","fieldtype":"many-to-one","cfc":"Term","fkcolumn":"gracePeriodTermID"},"modifiedByAccount":{"name":"modifiedByAccount","persistent":false},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"createdByAccount":{"name":"createdByAccount","persistent":false},"simpleRepresentation":{"name":"simpleRepresentation","persistent":false,"type":"string"},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"persistableErrors":{"name":"persistableErrors","persistent":false,"type":"array"},"skus":{"inverse":true,"name":"skus","fieldtype":"one-to-many","singularname":"sku","cascade":"all","cfc":"Sku","fkcolumn":"subscriptionTermID","type":"array"},"renewalTerm":{"name":"renewalTerm","fieldtype":"many-to-one","cfc":"Term","fkcolumn":"renewalTermID"},"autoPayFlag":{"name":"autoPayFlag","ormtype":"boolean","hb_formattype":"yesno"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"encryptedPropertiesExistFlag":{"name":"encryptedPropertiesExistFlag","persistent":false,"type":"boolean"},"rollbackProcessedFlag":{"name":"rollbackProcessedFlag","persistent":false,"type":"boolean"},"attributeValuesByAttributeCodeStruct":{"name":"attributeValuesByAttributeCodeStruct","persistent":false,"type":"struct"},"subscriptionTermName":{"name":"subscriptionTermName","ormtype":"string"},"subscriptionTermID":{"generator":"uuid","name":"subscriptionTermID","fieldtype":"id","ormtype":"string","unsavedvalue":"","length":32,"default":""}};
                	entities['SubscriptionTerm'].className = 'SubscriptionTerm';
                	validations['SubscriptionTerm'] = {"properties":{"renewalReminderDays":[{"regex":"^([0-9]+,?)+$","contexts":"save"}],"subscriptionTermName":[{"required":true,"contexts":"save"}],"skus":[{"maxCollection":0,"contexts":"delete"}],"initialTerm":[{"required":true,"contexts":"save"}],"renewalTerm":[{"required":true,"contexts":"save"}],"autoRetryPaymentDays":[{"regex":"^([0-9]+,?)+$","contexts":"save"}]}};
                	defaultValues['SubscriptionTerm'] = {
                	subscriptionTermID:'',
										subscriptionTermName:null,
									allowProrateFlag:null,
									autoRenewFlag:null,
									autoPayFlag:null,
									remoteID:null,
									createdDateTime:'',
										createdByAccountID:null,
									modifiedDateTime:'',
										modifiedByAccountID:null,
									
						z:''
	                };
                
                	entities['FulfillmentMethod'] = {"createdDateTime":{"name":"createdDateTime","ormtype":"timestamp","hb_populateenabled":false},"promotionQualifiers":{"inverse":true,"name":"promotionQualifiers","fieldtype":"many-to-many","singularname":"promotionQualifier","inversejoincolumn":"promotionQualifierID","cfc":"PromotionQualifier","fkcolumn":"fulfillmentMethodID","type":"array","linktable":"SwPromoQualFulfillmentMethod"},"emailTemplates":{"name":"emailTemplates","persistent":false,"type":"struct"},"fulfillmentMethodName":{"name":"fulfillmentMethodName","ormtype":"string"},"printTemplates":{"name":"printTemplates","persistent":false,"type":"struct"},"processObjects":{"name":"processObjects","persistent":false,"type":"struct"},"sortOrder":{"name":"sortOrder","ormtype":"integer"},"settingValueFormatted":{"name":"settingValueFormatted","persistent":false,"type":"any"},"auditSmartList":{"name":"auditSmartList","persistent":false,"type":"any"},"modifiedDateTime":{"name":"modifiedDateTime","ormtype":"timestamp","hb_populateenabled":false},"newFlag":{"name":"newFlag","persistent":false,"type":"boolean"},"validations":{"name":"validations","persistent":false,"type":"struct"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"},"createdByAccountID":{"name":"createdByAccountID","ormtype":"string","hb_populateenabled":false},"remoteID":{"name":"remoteID","ormtype":"string"},"shippingMethods":{"inverse":true,"name":"shippingMethods","fieldtype":"one-to-many","singularname":"shippingMethod","cascade":"all-delete-orphan","cfc":"ShippingMethod","fkcolumn":"fulfillmentMethodID","type":"array"},"modifiedByAccountID":{"name":"modifiedByAccountID","ormtype":"string","hb_populateenabled":false},"attributeValuesByAttributeIDStruct":{"name":"attributeValuesByAttributeIDStruct","persistent":false,"type":"struct"},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"fulfillmentMethodID":{"generator":"uuid","name":"fulfillmentMethodID","fieldtype":"id","ormtype":"string","unsavedvalue":"","length":32,"default":""},"assignedAttributeSetSmartList":{"name":"assignedAttributeSetSmartList","persistent":false,"type":"any"},"orderFulfillments":{"inverse":true,"name":"orderFulfillments","fieldtype":"one-to-many","singularname":"orderFulfillment","lazy":"extra","cfc":"OrderFulfillment","fkcolumn":"fulfillmentMethodID"},"modifiedByAccount":{"name":"modifiedByAccount","persistent":false},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"createdByAccount":{"name":"createdByAccount","persistent":false},"simpleRepresentation":{"name":"simpleRepresentation","persistent":false,"type":"string"},"autoFulfillFlag":{"name":"autoFulfillFlag","ormtype":"boolean","default":false},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"persistableErrors":{"name":"persistableErrors","persistent":false,"type":"array"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"encryptedPropertiesExistFlag":{"name":"encryptedPropertiesExistFlag","persistent":false,"type":"boolean"},"rollbackProcessedFlag":{"name":"rollbackProcessedFlag","persistent":false,"type":"boolean"},"attributeValuesByAttributeCodeStruct":{"name":"attributeValuesByAttributeCodeStruct","persistent":false,"type":"struct"},"fulfillmentMethodType":{"name":"fulfillmentMethodType","ormtype":"string","hb_formfieldtype":"select"},"activeFlag":{"name":"activeFlag","ormtype":"boolean","default":false}};
                	entities['FulfillmentMethod'].className = 'FulfillmentMethod';
                	validations['FulfillmentMethod'] = {"properties":{"fulfillmentMethodName":[{"required":true,"contexts":"save"}],"orderFulfillments":[{"maxCollection":0,"contexts":"delete"}]}};
                	defaultValues['FulfillmentMethod'] = {
                	fulfillmentMethodID:'',
										fulfillmentMethodName:null,
									fulfillmentMethodType:null,
									activeFlag:false,
									sortOrder:null,
									autoFulfillFlag:false,
									remoteID:null,
									createdDateTime:'',
										createdByAccountID:null,
									modifiedDateTime:'',
										modifiedByAccountID:null,
									
						z:''
	                };
                
                	entities['SubscriptionUsageBenefitAccount'] = {"createdDateTime":{"name":"createdDateTime","ormtype":"timestamp","hb_populateenabled":false},"emailTemplates":{"name":"emailTemplates","persistent":false,"type":"struct"},"printTemplates":{"name":"printTemplates","persistent":false,"type":"struct"},"processObjects":{"name":"processObjects","persistent":false,"type":"struct"},"settingValueFormatted":{"name":"settingValueFormatted","persistent":false,"type":"any"},"auditSmartList":{"name":"auditSmartList","persistent":false,"type":"any"},"modifiedDateTime":{"name":"modifiedDateTime","ormtype":"timestamp","hb_populateenabled":false},"newFlag":{"name":"newFlag","persistent":false,"type":"boolean"},"validations":{"name":"validations","persistent":false,"type":"struct"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"},"account":{"name":"account","fieldtype":"many-to-one","cfc":"Account","fkcolumn":"accountID"},"createdByAccountID":{"name":"createdByAccountID","ormtype":"string","hb_populateenabled":false},"subscriptionUsageBenefit":{"name":"subscriptionUsageBenefit","fieldtype":"many-to-one","cfc":"SubscriptionUsageBenefit","fkcolumn":"subscriptionUsageBenefitID"},"remoteID":{"name":"remoteID","ormtype":"string"},"attributeValuesByAttributeIDStruct":{"name":"attributeValuesByAttributeIDStruct","persistent":false,"type":"struct"},"modifiedByAccountID":{"name":"modifiedByAccountID","ormtype":"string","hb_populateenabled":false},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"assignedAttributeSetSmartList":{"name":"assignedAttributeSetSmartList","persistent":false,"type":"any"},"modifiedByAccount":{"name":"modifiedByAccount","persistent":false},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"simpleRepresentation":{"name":"simpleRepresentation","persistent":false,"type":"string"},"createdByAccount":{"name":"createdByAccount","persistent":false},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"persistableErrors":{"name":"persistableErrors","persistent":false,"type":"array"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"subsUsageBenefitAccountID":{"generator":"uuid","name":"subsUsageBenefitAccountID","fieldtype":"id","ormtype":"string","unsavedvalue":"","length":32,"default":""},"encryptedPropertiesExistFlag":{"name":"encryptedPropertiesExistFlag","persistent":false,"type":"boolean"},"rollbackProcessedFlag":{"name":"rollbackProcessedFlag","persistent":false,"type":"boolean"},"attributeValuesByAttributeCodeStruct":{"name":"attributeValuesByAttributeCodeStruct","persistent":false,"type":"struct"},"endDateTime":{"name":"endDateTime","ormtype":"timestamp"}};
                	entities['SubscriptionUsageBenefitAccount'].className = 'SubscriptionUsageBenefitAccount';
                	validations['SubscriptionUsageBenefitAccount'] = {"properties":{}};
                	defaultValues['SubscriptionUsageBenefitAccount'] = {
                	subsUsageBenefitAccountID:'',
										endDateTime:null,
									remoteID:null,
									createdDateTime:'',
										createdByAccountID:null,
									modifiedDateTime:'',
										modifiedByAccountID:null,
									
						z:''
	                };
                
                	entities['SubscriptionUsageBenefit'] = {"subscriptionUsage":{"inverse":true,"name":"subscriptionUsage","fieldtype":"many-to-one","cfc":"SubscriptionUsage","fkcolumn":"subscriptionUsageID"},"priceGroups":{"name":"priceGroups","fieldtype":"many-to-many","singularname":"priceGroup","inversejoincolumn":"priceGroupID","cfc":"PriceGroup","fkcolumn":"subscriptionUsageBenefitID","linktable":"SwSubsUsageBenefitPriceGroup","type":"array"},"emailTemplates":{"name":"emailTemplates","persistent":false,"type":"struct"},"createdDateTime":{"name":"createdDateTime","ormtype":"timestamp","hb_populateenabled":false},"printTemplates":{"name":"printTemplates","persistent":false,"type":"struct"},"processObjects":{"name":"processObjects","persistent":false,"type":"struct"},"settingValueFormatted":{"name":"settingValueFormatted","persistent":false,"type":"any"},"auditSmartList":{"name":"auditSmartList","persistent":false,"type":"any"},"modifiedDateTime":{"name":"modifiedDateTime","ormtype":"timestamp","hb_populateenabled":false},"promotions":{"name":"promotions","fieldtype":"many-to-many","singularname":"promotion","inversejoincolumn":"promotionID","cfc":"Promotion","fkcolumn":"subscriptionUsageBenefitID","linktable":"SwSubsUsageBenefitPromotion","type":"array"},"newFlag":{"name":"newFlag","persistent":false,"type":"boolean"},"validations":{"name":"validations","persistent":false,"type":"struct"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"},"accessType":{"name":"accessType","fieldtype":"many-to-one","hb_optionssmartlistdata":"f:parentType.systemCode=accessType","cfc":"Type","fkcolumn":"accessTypeID"},"createdByAccountID":{"name":"createdByAccountID","ormtype":"string","hb_populateenabled":false},"renewalSubscriptionUsage":{"inverse":true,"name":"renewalSubscriptionUsage","fieldtype":"many-to-one","cfc":"SubscriptionUsage","fkcolumn":"renewalSubscriptionUsageID"},"remoteID":{"name":"remoteID","ormtype":"string"},"subscriptionUsageBenefitID":{"generator":"uuid","name":"subscriptionUsageBenefitID","fieldtype":"id","ormtype":"string","unsavedvalue":"","length":32,"default":""},"modifiedByAccountID":{"name":"modifiedByAccountID","ormtype":"string","hb_populateenabled":false},"attributeValuesByAttributeIDStruct":{"name":"attributeValuesByAttributeIDStruct","persistent":false,"type":"struct"},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"assignedAttributeSetSmartList":{"name":"assignedAttributeSetSmartList","persistent":false,"type":"any"},"subscriptionUsageBenefitAccounts":{"inverse":true,"name":"subscriptionUsageBenefitAccounts","fieldtype":"one-to-many","singularname":"subscriptionUsageBenefitAccount","cascade":"all-delete-orphan","cfc":"SubscriptionUsageBenefitAccount","fkcolumn":"subscriptionUsageBenefitID","type":"array"},"modifiedByAccount":{"name":"modifiedByAccount","persistent":false},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"createdByAccount":{"name":"createdByAccount","persistent":false},"simpleRepresentation":{"name":"simpleRepresentation","persistent":false,"type":"string"},"contents":{"name":"contents","fieldtype":"many-to-many","singularname":"content","inversejoincolumn":"contentID","cfc":"Content","fkcolumn":"subscriptionUsageBenefitID","linktable":"SwSubsUsageBenefitContent","type":"array"},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"persistableErrors":{"name":"persistableErrors","persistent":false,"type":"array"},"excludedCategories":{"name":"excludedCategories","fieldtype":"many-to-many","singularname":"excludedCategory","inversejoincolumn":"categoryID","cfc":"Category","fkcolumn":"subscriptionUsageBenefitID","linktable":"SwSubsUsageBenefitExclCategory","type":"array"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"encryptedPropertiesExistFlag":{"name":"encryptedPropertiesExistFlag","persistent":false,"type":"boolean"},"rollbackProcessedFlag":{"name":"rollbackProcessedFlag","persistent":false,"type":"boolean"},"attributeValuesByAttributeCodeStruct":{"name":"attributeValuesByAttributeCodeStruct","persistent":false,"type":"struct"},"excludedContents":{"name":"excludedContents","fieldtype":"many-to-many","singularname":"excludedContent","inversejoincolumn":"contentID","cfc":"Content","fkcolumn":"subscriptionUsageBenefitID","linktable":"SwSubsUsageBenefitExclContent","type":"array"},"maxUseCount":{"name":"maxUseCount","ormtype":"integer"},"categories":{"name":"categories","fieldtype":"many-to-many","singularname":"category","inversejoincolumn":"categoryID","cfc":"Category","fkcolumn":"subscriptionUsageBenefitID","linktable":"SwSubsUsageBenefitCategory","type":"array"},"subscriptionBenefit":{"name":"subscriptionBenefit","fieldtype":"many-to-one","cfc":"SubscriptionBenefit","fkcolumn":"subscriptionBenefitID"}};
                	entities['SubscriptionUsageBenefit'].className = 'SubscriptionUsageBenefit';
                	validations['SubscriptionUsageBenefit'] = {"properties":{}};
                	defaultValues['SubscriptionUsageBenefit'] = {
                	subscriptionUsageBenefitID:'',
										maxUseCount:null,
									remoteID:null,
									createdDateTime:'',
										createdByAccountID:null,
									modifiedDateTime:'',
										modifiedByAccountID:null,
									
						z:''
	                };
                
                	entities['WorkflowTaskAction'] = {"updateData":{"name":"updateData","ormtype":"string","hb_auditable":false,"length":8000,"hb_formfieldtype":"json"},"createdDateTime":{"name":"createdDateTime","ormtype":"timestamp","hb_populateenabled":false},"emailTemplates":{"name":"emailTemplates","persistent":false,"type":"struct"},"printTemplates":{"name":"printTemplates","persistent":false,"type":"struct"},"processObjects":{"name":"processObjects","persistent":false,"type":"struct"},"settingValueFormatted":{"name":"settingValueFormatted","persistent":false,"type":"any"},"auditSmartList":{"name":"auditSmartList","persistent":false,"type":"any"},"actionType":{"name":"actionType","ormtype":"string","hb_formattype":"rbKey","hb_formfieldtype":"select"},"modifiedDateTime":{"name":"modifiedDateTime","ormtype":"timestamp","hb_populateenabled":false},"newFlag":{"name":"newFlag","persistent":false,"type":"boolean"},"validations":{"name":"validations","persistent":false,"type":"struct"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"},"updateDataStruct":{"name":"updateDataStruct","persistent":false,"type":"struct"},"printTemplate":{"name":"printTemplate","fieldtype":"many-to-one","cfc":"PrintTemplate","fkcolumn":"printTemplateID"},"createdByAccountID":{"name":"createdByAccountID","ormtype":"string","hb_populateenabled":false},"remoteID":{"name":"remoteID","ormtype":"string","hb_populateenabled":false},"workflowTaskActionID":{"generator":"uuid","name":"workflowTaskActionID","fieldtype":"id","ormtype":"string","unsavedvalue":"","length":32,"default":""},"actionTypeOptions":{"name":"actionTypeOptions","persistent":false},"modifiedByAccountID":{"name":"modifiedByAccountID","ormtype":"string","hb_populateenabled":false},"attributeValuesByAttributeIDStruct":{"name":"attributeValuesByAttributeIDStruct","persistent":false,"type":"struct"},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"emailTemplate":{"name":"emailTemplate","fieldtype":"many-to-one","cfc":"EmailTemplate","fkcolumn":"emailTemplateID"},"assignedAttributeSetSmartList":{"name":"assignedAttributeSetSmartList","persistent":false,"type":"any"},"modifiedByAccount":{"name":"modifiedByAccount","persistent":false},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"createdByAccount":{"name":"createdByAccount","persistent":false},"simpleRepresentation":{"name":"simpleRepresentation","persistent":false,"type":"string"},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"persistableErrors":{"name":"persistableErrors","persistent":false,"type":"array"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"encryptedPropertiesExistFlag":{"name":"encryptedPropertiesExistFlag","persistent":false,"type":"boolean"},"rollbackProcessedFlag":{"name":"rollbackProcessedFlag","persistent":false,"type":"boolean"},"attributeValuesByAttributeCodeStruct":{"name":"attributeValuesByAttributeCodeStruct","persistent":false,"type":"struct"},"workflowTask":{"name":"workflowTask","fieldtype":"many-to-one","cfc":"WorkflowTask","fkcolumn":"workflowTaskID"}};
                	entities['WorkflowTaskAction'].className = 'WorkflowTaskAction';
                	validations['WorkflowTaskAction'] = {"properties":{}};
                	defaultValues['WorkflowTaskAction'] = {
                	workflowTaskActionID:'',
										actionType:null,
									updateData:angular.fromJson('{"staticData":{},"dynamicData":{}}'),
										remoteID:null,
									createdDateTime:'',
										createdByAccountID:null,
									modifiedDateTime:'',
										modifiedByAccountID:null,
									
						z:''
	                };
                
                	entities['LoyaltyRedemption'] = {"emailTemplates":{"name":"emailTemplates","persistent":false,"type":"struct"},"createdDateTime":{"name":"createdDateTime","ormtype":"timestamp","hb_populateenabled":false},"printTemplates":{"name":"printTemplates","persistent":false,"type":"struct"},"processObjects":{"name":"processObjects","persistent":false,"type":"struct"},"settingValueFormatted":{"name":"settingValueFormatted","persistent":false,"type":"any"},"brands":{"name":"brands","fieldtype":"many-to-many","singularname":"brand","inversejoincolumn":"brandID","cfc":"Brand","fkcolumn":"loyaltyRedemptionID","linktable":"SwLoyaltyRedemptionBrand"},"auditSmartList":{"name":"auditSmartList","persistent":false,"type":"any"},"modifiedDateTime":{"name":"modifiedDateTime","ormtype":"timestamp","hb_populateenabled":false},"newFlag":{"name":"newFlag","persistent":false,"type":"boolean"},"validations":{"name":"validations","persistent":false,"type":"struct"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"},"createdByAccountID":{"name":"createdByAccountID","ormtype":"string","hb_populateenabled":false},"excludedProductTypes":{"name":"excludedProductTypes","fieldtype":"many-to-many","singularname":"excludedProductType","inversejoincolumn":"productTypeID","cfc":"ProductType","fkcolumn":"loyaltyRedemptionID","linktable":"SwLoyaltyRedempExclProductType"},"loyaltyTerm":{"name":"loyaltyTerm","fieldtype":"many-to-one","cfc":"LoyaltyTerm","fkcolumn":"loyaltyTermID"},"redemptionType":{"name":"redemptionType","ormtype":"string","hb_formattype":"rbKey","hb_formfieldtype":"select"},"remoteID":{"name":"remoteID","ormtype":"string"},"minimumPointQuantity":{"name":"minimumPointQuantity","ormtype":"integer"},"attributeValuesByAttributeIDStruct":{"name":"attributeValuesByAttributeIDStruct","persistent":false,"type":"struct"},"modifiedByAccountID":{"name":"modifiedByAccountID","ormtype":"string","hb_populateenabled":false},"redemptionPointType":{"name":"redemptionPointType","ormtype":"string","hb_formfieldtype":"select"},"excludedBrands":{"name":"excludedBrands","fieldtype":"many-to-many","singularname":"excludedBrand","inversejoincolumn":"brandID","cfc":"Brand","fkcolumn":"loyaltyRedemptionID","linktable":"SwLoyaltyRedemptionExclBrand","type":"array"},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"assignedAttributeSetSmartList":{"name":"assignedAttributeSetSmartList","persistent":false,"type":"any"},"modifiedByAccount":{"name":"modifiedByAccount","persistent":false},"amountType":{"name":"amountType","ormtype":"string","hb_formattype":"rbKey","hb_formfieldtype":"select"},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"createdByAccount":{"name":"createdByAccount","persistent":false},"simpleRepresentation":{"name":"simpleRepresentation","persistent":false,"type":"string"},"products":{"name":"products","fieldtype":"many-to-many","singularname":"product","inversejoincolumn":"productID","cfc":"Product","fkcolumn":"loyaltyRedemptionID","linktable":"SwLoyaltyRedemptionProduct"},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"persistableErrors":{"name":"persistableErrors","persistent":false,"type":"array"},"skus":{"name":"skus","fieldtype":"many-to-many","singularname":"sku","inversejoincolumn":"skuID","cfc":"Sku","fkcolumn":"loyaltyRedemptionID","linktable":"SwLoyaltyRedemptionSku"},"excludedSkus":{"name":"excludedSkus","fieldtype":"many-to-many","singularname":"excludedSku","inversejoincolumn":"skuID","cfc":"Sku","fkcolumn":"loyaltyRedemptionID","linktable":"SwLoyaltyRedemptionExclSku"},"amount":{"name":"amount","ormtype":"big_decimal"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"encryptedPropertiesExistFlag":{"name":"encryptedPropertiesExistFlag","persistent":false,"type":"boolean"},"rollbackProcessedFlag":{"name":"rollbackProcessedFlag","persistent":false,"type":"boolean"},"nextRedemptionDateTime":{"hb_nullrbkey":"define.forever","name":"nextRedemptionDateTime","ormtype":"timestamp"},"attributeValuesByAttributeCodeStruct":{"name":"attributeValuesByAttributeCodeStruct","persistent":false,"type":"struct"},"autoRedemptionType":{"name":"autoRedemptionType","ormtype":"string","hb_formattype":"rbKey","hb_formfieldtype":"select"},"loyalty":{"name":"loyalty","fieldtype":"many-to-one","cfc":"Loyalty","fkcolumn":"loyaltyID"},"loyaltyRedemptionID":{"generator":"uuid","name":"loyaltyRedemptionID","fieldtype":"id","ormtype":"string","unsavedvalue":"","length":32,"default":""},"priceGroup":{"name":"priceGroup","fieldtype":"many-to-one","cfc":"PriceGroup","fkcolumn":"priceGroupID"},"activeFlag":{"name":"activeFlag","ormtype":"boolean","default":1},"excludedProducts":{"name":"excludedProducts","fieldtype":"many-to-many","singularname":"excludedProduct","inversejoincolumn":"productID","cfc":"Product","fkcolumn":"loyaltyRedemptionID","linktable":"SwLoyaltyRedemptionExclProduct"},"currencyCode":{"name":"currencyCode","ormtype":"string","length":3},"accountLoyaltyTransactions":{"inverse":true,"name":"accountLoyaltyTransactions","fieldtype":"one-to-many","singularname":"accountLoyaltyTransaction","cascade":"all-delete-orphan","cfc":"AccountLoyaltyTransaction","fkcolumn":"loyaltyRedemptionID","type":"array"},"productTypes":{"name":"productTypes","fieldtype":"many-to-many","singularname":"productType","inversejoincolumn":"productTypeID","cfc":"ProductType","fkcolumn":"loyaltyRedemptionID","linktable":"SwLoyaltyRedemptionProductType"}};
                	entities['LoyaltyRedemption'].className = 'LoyaltyRedemption';
                	validations['LoyaltyRedemption'] = {"properties":{"priceGroup":[{"required":true,"contexts":"save","conditions":"redemptionTypePriceGroupAssignment"}],"minimumPointQuantity":[{"dataType":"numeric","contexts":"save"}],"amount":[{"dataType":"numeric","contexts":"save"}]},"conditions":{"redemptionTypePriceGroupAssignment":{"redemptionType":{"eq":"priceGroupAssignment"}}}};
                	defaultValues['LoyaltyRedemption'] = {
                	loyaltyRedemptionID:'',
										redemptionPointType:null,
									redemptionType:null,
									autoRedemptionType:null,
									amountType:null,
									amount:null,
									activeFlag:1,
									nextRedemptionDateTime:null,
									currencyCode:null,
									minimumPointQuantity:null,
									remoteID:null,
									createdDateTime:'',
										createdByAccountID:null,
									modifiedDateTime:'',
										modifiedByAccountID:null,
									
						z:''
	                };
                
                	entities['AttributeSet'] = {"attributeSetID":{"generator":"uuid","name":"attributeSetID","fieldtype":"id","ormtype":"string","unsavedvalue":"","length":32,"default":""},"emailTemplates":{"name":"emailTemplates","persistent":false,"type":"struct"},"createdDateTime":{"name":"createdDateTime","ormtype":"timestamp","hb_populateenabled":false},"printTemplates":{"name":"printTemplates","persistent":false,"type":"struct"},"processObjects":{"name":"processObjects","persistent":false,"type":"struct"},"attributes":{"inverse":true,"name":"attributes","fieldtype":"one-to-many","orderby":"sortOrder","singularname":"attribute","cascade":"all-delete-orphan","cfc":"Attribute","fkcolumn":"attributeSetID"},"sortOrder":{"name":"sortOrder","ormtype":"integer"},"brands":{"name":"brands","fieldtype":"many-to-many","singularname":"brand","inversejoincolumn":"brandID","cfc":"Brand","fkcolumn":"attributeSetID","linktable":"SwAttributeSetBrand","type":"array"},"settingValueFormatted":{"name":"settingValueFormatted","persistent":false,"type":"any"},"auditSmartList":{"name":"auditSmartList","persistent":false,"type":"any"},"modifiedDateTime":{"name":"modifiedDateTime","ormtype":"timestamp","hb_populateenabled":false},"newFlag":{"name":"newFlag","persistent":false,"type":"boolean"},"validations":{"name":"validations","persistent":false,"type":"struct"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"},"attributeSetDescription":{"name":"attributeSetDescription","ormtype":"string","length":2000},"createdByAccountID":{"name":"createdByAccountID","ormtype":"string","hb_populateenabled":false},"attributeSetCode":{"index":"PI_ATTRIBUTESETCODE","name":"attributeSetCode","ormtype":"string"},"types":{"name":"types","fieldtype":"many-to-many","singularname":"type","inversejoincolumn":"typeID","cfc":"Type","fkcolumn":"attributeSetID","linktable":"SwAttributeSetType","type":"array"},"modifiedByAccountID":{"name":"modifiedByAccountID","ormtype":"string","hb_populateenabled":false},"attributeValuesByAttributeIDStruct":{"name":"attributeValuesByAttributeIDStruct","persistent":false,"type":"struct"},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"assignedAttributeSetSmartList":{"name":"assignedAttributeSetSmartList","persistent":false,"type":"any"},"modifiedByAccount":{"name":"modifiedByAccount","persistent":false},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"createdByAccount":{"name":"createdByAccount","persistent":false},"simpleRepresentation":{"name":"simpleRepresentation","persistent":false,"type":"string"},"contents":{"name":"contents","fieldtype":"many-to-many","singularname":"content","inversejoincolumn":"contentID","cfc":"Content","fkcolumn":"attributeSetID","linktable":"SwAttributeSetContent","type":"array"},"products":{"name":"products","fieldtype":"many-to-many","singularname":"product","inversejoincolumn":"productID","cfc":"Product","fkcolumn":"attributeSetID","linktable":"SwAttributeSetProduct","type":"array"},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"persistableErrors":{"name":"persistableErrors","persistent":false,"type":"array"},"globalFlag":{"name":"globalFlag","ormtype":"boolean","default":1},"skus":{"name":"skus","fieldtype":"many-to-many","singularname":"sku","inversejoincolumn":"skuID","cfc":"Sku","fkcolumn":"attributeSetID","linktable":"SwAttributeSetSku","type":"array"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"encryptedPropertiesExistFlag":{"name":"encryptedPropertiesExistFlag","persistent":false,"type":"boolean"},"attributeSetObject":{"name":"attributeSetObject","ormtype":"string","hb_formfieldtype":"select"},"rollbackProcessedFlag":{"name":"rollbackProcessedFlag","persistent":false,"type":"boolean"},"attributeValuesByAttributeCodeStruct":{"name":"attributeValuesByAttributeCodeStruct","persistent":false,"type":"struct"},"activeFlag":{"name":"activeFlag","ormtype":"boolean"},"accountSaveFlag":{"name":"accountSaveFlag","ormtype":"boolean"},"attributeSetName":{"name":"attributeSetName","ormtype":"string"},"productTypes":{"name":"productTypes","fieldtype":"many-to-many","singularname":"productType","inversejoincolumn":"productTypeID","cfc":"ProductType","fkcolumn":"attributeSetID","linktable":"SwAttributeSetProductType","type":"array"}};
                	entities['AttributeSet'].className = 'AttributeSet';
                	validations['AttributeSet'] = {"properties":{"attributeSetCode":[{"regex":"^[a-zA-Z0-9-_.|:~^]+$","uniqueOrNull":true,"contexts":"save"}],"attributeSetName":[{"required":true,"contexts":"save"}],"attributeSetObject":[{"required":true,"contexts":"save"}]}};
                	defaultValues['AttributeSet'] = {
                	attributeSetID:'',
										activeFlag:1,
									attributeSetName:null,
									attributeSetCode:null,
									attributeSetDescription:null,
									attributeSetObject:null,
									globalFlag:1,
									accountSaveFlag:null,
									sortOrder:null,
									createdDateTime:'',
										createdByAccountID:null,
									modifiedDateTime:'',
										modifiedByAccountID:null,
									
						z:''
	                };
                
                	entities['ProductBundleBuild'] = {"createdDateTime":{"name":"createdDateTime","ormtype":"timestamp","hb_populateenabled":false},"emailTemplates":{"name":"emailTemplates","persistent":false,"type":"struct"},"printTemplates":{"name":"printTemplates","persistent":false,"type":"struct"},"processObjects":{"name":"processObjects","persistent":false,"type":"struct"},"settingValueFormatted":{"name":"settingValueFormatted","persistent":false,"type":"any"},"auditSmartList":{"name":"auditSmartList","persistent":false,"type":"any"},"modifiedDateTime":{"name":"modifiedDateTime","ormtype":"timestamp","hb_populateenabled":false},"newFlag":{"name":"newFlag","persistent":false,"type":"boolean"},"validations":{"name":"validations","persistent":false,"type":"struct"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"},"account":{"name":"account","fieldtype":"many-to-one","cfc":"Account","fkcolumn":"accountID"},"createdByAccountID":{"name":"createdByAccountID","ormtype":"string","hb_populateenabled":false},"remoteID":{"name":"remoteID","ormtype":"string","hb_populateenabled":false},"session":{"name":"session","fieldtype":"many-to-one","cfc":"Session","fkcolumn":"sessionID"},"attributeValuesByAttributeIDStruct":{"name":"attributeValuesByAttributeIDStruct","persistent":false,"type":"struct"},"modifiedByAccountID":{"name":"modifiedByAccountID","ormtype":"string","hb_populateenabled":false},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"assignedAttributeSetSmartList":{"name":"assignedAttributeSetSmartList","persistent":false,"type":"any"},"modifiedByAccount":{"name":"modifiedByAccount","persistent":false},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"simpleRepresentation":{"name":"simpleRepresentation","persistent":false,"type":"string"},"createdByAccount":{"name":"createdByAccount","persistent":false},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"persistableErrors":{"name":"persistableErrors","persistent":false,"type":"array"},"productBundleBuildID":{"generator":"uuid","name":"productBundleBuildID","fieldtype":"id","ormtype":"string","unsavedvalue":"","length":32,"default":""},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"encryptedPropertiesExistFlag":{"name":"encryptedPropertiesExistFlag","persistent":false,"type":"boolean"},"rollbackProcessedFlag":{"name":"rollbackProcessedFlag","persistent":false,"type":"boolean"},"attributeValuesByAttributeCodeStruct":{"name":"attributeValuesByAttributeCodeStruct","persistent":false,"type":"struct"},"productBundleSku":{"name":"productBundleSku","fieldtype":"many-to-one","cfc":"Sku","fkcolumn":"productBundleSkuID"}};
                	entities['ProductBundleBuild'].className = 'ProductBundleBuild';
                	validations['ProductBundleBuild'] = {"properties":{}};
                	defaultValues['ProductBundleBuild'] = {
                	productBundleBuildID:'',
										remoteID:null,
									createdDateTime:'',
										createdByAccountID:null,
									modifiedDateTime:'',
										modifiedByAccountID:null,
									
						z:''
	                };
                
                	entities['EmailTemplate'] = {"createdDateTime":{"name":"createdDateTime","ormtype":"timestamp","hb_populateenabled":false},"emailTemplateFile":{"name":"emailTemplateFile","ormtype":"string","hb_formfieldtype":"select"},"emailTemplates":{"name":"emailTemplates","persistent":false,"type":"struct"},"printTemplates":{"name":"printTemplates","persistent":false,"type":"struct"},"processObjects":{"name":"processObjects","persistent":false,"type":"struct"},"settingValueFormatted":{"name":"settingValueFormatted","persistent":false,"type":"any"},"auditSmartList":{"name":"auditSmartList","persistent":false,"type":"any"},"modifiedDateTime":{"name":"modifiedDateTime","ormtype":"timestamp","hb_populateenabled":false},"emailTemplateObjectOptions":{"name":"emailTemplateObjectOptions","persistent":false},"newFlag":{"name":"newFlag","persistent":false,"type":"boolean"},"validations":{"name":"validations","persistent":false,"type":"struct"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"},"createdByAccountID":{"name":"createdByAccountID","ormtype":"string","hb_populateenabled":false},"emailTemplateName":{"name":"emailTemplateName","ormtype":"string"},"remoteID":{"name":"remoteID","ormtype":"string"},"modifiedByAccountID":{"name":"modifiedByAccountID","ormtype":"string","hb_populateenabled":false},"attributeValuesByAttributeIDStruct":{"name":"attributeValuesByAttributeIDStruct","persistent":false,"type":"struct"},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"assignedAttributeSetSmartList":{"name":"assignedAttributeSetSmartList","persistent":false,"type":"any"},"modifiedByAccount":{"name":"modifiedByAccount","persistent":false},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"createdByAccount":{"name":"createdByAccount","persistent":false},"simpleRepresentation":{"name":"simpleRepresentation","persistent":false,"type":"string"},"emailBodyHTML":{"name":"emailBodyHTML","ormtype":"string","length":4000},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"persistableErrors":{"name":"persistableErrors","persistent":false,"type":"array"},"emailBodyText":{"name":"emailBodyText","ormtype":"string","length":4000},"emailTemplateID":{"generator":"uuid","name":"emailTemplateID","fieldtype":"id","ormtype":"string","unsavedvalue":"","length":32,"default":""},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"encryptedPropertiesExistFlag":{"name":"encryptedPropertiesExistFlag","persistent":false,"type":"boolean"},"eventTriggers":{"inverse":true,"name":"eventTriggers","fieldtype":"one-to-many","singularname":"eventTrigger","lazy":"extra","cascade":"all","cfc":"EventTrigger","fkcolumn":"emailTemplateID"},"emailTemplateFileOptions":{"name":"emailTemplateFileOptions","persistent":false},"logEmailFlag":{"name":"logEmailFlag","ormtype":"boolean","default":false},"rollbackProcessedFlag":{"name":"rollbackProcessedFlag","persistent":false,"type":"boolean"},"emailTemplateObject":{"name":"emailTemplateObject","ormtype":"string","hb_formfieldtype":"select"},"attributeValuesByAttributeCodeStruct":{"name":"attributeValuesByAttributeCodeStruct","persistent":false,"type":"struct"}};
                	entities['EmailTemplate'].className = 'EmailTemplate';
                	validations['EmailTemplate'] = {"properties":{"emailTemplateName":[{"required":true,"contexts":"save"}],"emails":[{"maxCollection":0,"contexts":"delete"}],"eventTriggers":[{"maxCollection":0,"contexts":"delete"}]}};
                	defaultValues['EmailTemplate'] = {
                	emailTemplateID:'',
										emailTemplateName:null,
									emailTemplateObject:null,
									emailTemplateFile:null,
									emailBodyHTML:'',
										emailBodyText:'',
										logEmailFlag:false,
									remoteID:null,
									createdDateTime:'',
										createdByAccountID:null,
									modifiedDateTime:'',
										modifiedByAccountID:null,
									
						z:''
	                };
                
                	entities['AlternateSkuCode'] = {"createdDateTime":{"name":"createdDateTime","ormtype":"timestamp","hb_populateenabled":false},"emailTemplates":{"name":"emailTemplates","persistent":false,"type":"struct"},"printTemplates":{"name":"printTemplates","persistent":false,"type":"struct"},"processObjects":{"name":"processObjects","persistent":false,"type":"struct"},"settingValueFormatted":{"name":"settingValueFormatted","persistent":false,"type":"any"},"auditSmartList":{"name":"auditSmartList","persistent":false,"type":"any"},"modifiedDateTime":{"name":"modifiedDateTime","ormtype":"timestamp","hb_populateenabled":false},"alternateSkuCodeType":{"name":"alternateSkuCodeType","fieldtype":"many-to-one","hb_optionssmartlistdata":"f:parentType.systemCode=alternateSkuCodeType","cfc":"Type","fkcolumn":"skuTypeID"},"newFlag":{"name":"newFlag","persistent":false,"type":"boolean"},"validations":{"name":"validations","persistent":false,"type":"struct"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"},"alternateSkuCodeID":{"generator":"uuid","name":"alternateSkuCodeID","fieldtype":"id","ormtype":"string","unsavedvalue":"","length":32,"default":""},"createdByAccountID":{"name":"createdByAccountID","ormtype":"string","hb_populateenabled":false},"attributeValuesByAttributeIDStruct":{"name":"attributeValuesByAttributeIDStruct","persistent":false,"type":"struct"},"modifiedByAccountID":{"name":"modifiedByAccountID","ormtype":"string","hb_populateenabled":false},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"assignedAttributeSetSmartList":{"name":"assignedAttributeSetSmartList","persistent":false,"type":"any"},"alternateSkuCode":{"index":"PI_ALTERNATESKUCODE","name":"alternateSkuCode","ormtype":"string"},"modifiedByAccount":{"name":"modifiedByAccount","persistent":false},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"simpleRepresentation":{"name":"simpleRepresentation","persistent":false,"type":"string"},"createdByAccount":{"name":"createdByAccount","persistent":false},"sku":{"name":"sku","fieldtype":"many-to-one","cfc":"Sku","fkcolumn":"skuID"},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"persistableErrors":{"name":"persistableErrors","persistent":false,"type":"array"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"encryptedPropertiesExistFlag":{"name":"encryptedPropertiesExistFlag","persistent":false,"type":"boolean"},"rollbackProcessedFlag":{"name":"rollbackProcessedFlag","persistent":false,"type":"boolean"},"attributeValuesByAttributeCodeStruct":{"name":"attributeValuesByAttributeCodeStruct","persistent":false,"type":"struct"}};
                	entities['AlternateSkuCode'].className = 'AlternateSkuCode';
                	validations['AlternateSkuCode'] = {"properties":{"alternateSkuCode":[{"unique":true,"required":true,"contexts":"save"}]}};
                	defaultValues['AlternateSkuCode'] = {
                	alternateSkuCodeID:'',
										alternateSkuCode:null,
									createdDateTime:'',
										createdByAccountID:null,
									modifiedDateTime:'',
										modifiedByAccountID:null,
									
						z:''
	                };
                
                	entities['GiftCardTransaction'] = {"debitAmount":{"name":"debitAmount","ormtype":"big_decimal"},"createdDateTime":{"name":"createdDateTime","ormtype":"timestamp","hb_populateenabled":false},"emailTemplates":{"name":"emailTemplates","persistent":false,"type":"struct"},"printTemplates":{"name":"printTemplates","persistent":false,"type":"struct"},"processObjects":{"name":"processObjects","persistent":false,"type":"struct"},"orderItems":{"inverse":true,"name":"orderItems","fieldtype":"one-to-many","singularname":"orderItem","cascade":"all-delete-orphan","cfc":"OrderItem","fkcolumn":"giftCardTransactionID"},"settingValueFormatted":{"name":"settingValueFormatted","persistent":false,"type":"any"},"auditSmartList":{"name":"auditSmartList","persistent":false,"type":"any"},"modifiedDateTime":{"name":"modifiedDateTime","ormtype":"timestamp","hb_populateenabled":false},"orderPayment":{"name":"orderPayment","fieldtype":"many-to-one","cfc":"OrderPayment","fkcolumn":"orderPaymentID"},"newFlag":{"name":"newFlag","persistent":false,"type":"boolean"},"validations":{"name":"validations","persistent":false,"type":"struct"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"},"createdByAccountID":{"name":"createdByAccountID","ormtype":"string","hb_populateenabled":false},"remoteID":{"name":"remoteID","ormtype":"string"},"modifiedByAccountID":{"name":"modifiedByAccountID","ormtype":"string","hb_populateenabled":false},"attributeValuesByAttributeIDStruct":{"name":"attributeValuesByAttributeIDStruct","persistent":false,"type":"struct"},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"assignedAttributeSetSmartList":{"name":"assignedAttributeSetSmartList","persistent":false,"type":"any"},"giftCardTransactionID":{"generator":"uuid","name":"giftCardTransactionID","fieldtype":"id","ormtype":"string","unsavedvalue":"","length":32,"default":""},"modifiedByAccount":{"name":"modifiedByAccount","persistent":false},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"createdByAccount":{"name":"createdByAccount","persistent":false},"simpleRepresentation":{"name":"simpleRepresentation","persistent":false,"type":"string"},"creditAmount":{"name":"creditAmount","ormtype":"big_decimal"},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"persistableErrors":{"name":"persistableErrors","persistent":false,"type":"array"},"giftCard":{"name":"giftCard","fieldtype":"many-to-one","cfc":"GiftCard","fkcolumn":"giftCardID"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"encryptedPropertiesExistFlag":{"name":"encryptedPropertiesExistFlag","persistent":false,"type":"boolean"},"rollbackProcessedFlag":{"name":"rollbackProcessedFlag","persistent":false,"type":"boolean"},"attributeValuesByAttributeCodeStruct":{"name":"attributeValuesByAttributeCodeStruct","persistent":false,"type":"struct"}};
                	entities['GiftCardTransaction'].className = 'GiftCardTransaction';
                	validations['GiftCardTransaction'] = {"properties":{}};
                	defaultValues['GiftCardTransaction'] = {
                	giftCardTransactionID:'',
										creditAmount:null,
									debitAmount:null,
									remoteID:null,
									createdDateTime:'',
										createdByAccountID:null,
									modifiedDateTime:'',
										modifiedByAccountID:null,
									
						z:''
	                };
                
                	entities['FileRelationship'] = {"createdDateTime":{"name":"createdDateTime","ormtype":"timestamp","hb_populateenabled":false},"emailTemplates":{"name":"emailTemplates","persistent":false,"type":"struct"},"printTemplates":{"name":"printTemplates","persistent":false,"type":"struct"},"processObjects":{"name":"processObjects","persistent":false,"type":"struct"},"settingValueFormatted":{"name":"settingValueFormatted","persistent":false,"type":"any"},"auditSmartList":{"name":"auditSmartList","persistent":false,"type":"any"},"modifiedDateTime":{"name":"modifiedDateTime","ormtype":"timestamp","hb_populateenabled":false},"newFlag":{"name":"newFlag","persistent":false,"type":"boolean"},"validations":{"name":"validations","persistent":false,"type":"struct"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"},"createdByAccountID":{"name":"createdByAccountID","ormtype":"string","hb_populateenabled":false},"baseObject":{"name":"baseObject","ormtype":"string"},"remoteID":{"name":"remoteID","ormtype":"string"},"attributeValuesByAttributeIDStruct":{"name":"attributeValuesByAttributeIDStruct","persistent":false,"type":"struct"},"modifiedByAccountID":{"name":"modifiedByAccountID","ormtype":"string","hb_populateenabled":false},"fileRelationshipID":{"generator":"uuid","name":"fileRelationshipID","fieldtype":"id","ormtype":"string","unsavedvalue":"","length":32,"default":""},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"file":{"name":"file","fieldtype":"many-to-one","cfc":"File","fkcolumn":"fileID"},"assignedAttributeSetSmartList":{"name":"assignedAttributeSetSmartList","persistent":false,"type":"any"},"modifiedByAccount":{"name":"modifiedByAccount","persistent":false},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"simpleRepresentation":{"name":"simpleRepresentation","persistent":false,"type":"string"},"createdByAccount":{"name":"createdByAccount","persistent":false},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"persistableErrors":{"name":"persistableErrors","persistent":false,"type":"array"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"encryptedPropertiesExistFlag":{"name":"encryptedPropertiesExistFlag","persistent":false,"type":"boolean"},"rollbackProcessedFlag":{"name":"rollbackProcessedFlag","persistent":false,"type":"boolean"},"attributeValuesByAttributeCodeStruct":{"name":"attributeValuesByAttributeCodeStruct","persistent":false,"type":"struct"},"baseID":{"name":"baseID","ormtype":"string"}};
                	entities['FileRelationship'].className = 'FileRelationship';
                	validations['FileRelationship'] = {"properties":{}};
                	defaultValues['FileRelationship'] = {
                	fileRelationshipID:'',
										baseObject:null,
									baseID:null,
									remoteID:null,
									createdDateTime:'',
										createdByAccountID:null,
									modifiedDateTime:'',
										modifiedByAccountID:null,
									
						z:''
	                };
                
                	entities['StockHold'] = {"createdDateTime":{"name":"createdDateTime","ormtype":"timestamp","hb_populateenabled":false},"emailTemplates":{"name":"emailTemplates","persistent":false,"type":"struct"},"printTemplates":{"name":"printTemplates","persistent":false,"type":"struct"},"stockHoldID":{"generator":"uuid","name":"stockHoldID","fieldtype":"id","ormtype":"string","unsavedvalue":"","length":32,"default":""},"processObjects":{"name":"processObjects","persistent":false,"type":"struct"},"settingValueFormatted":{"name":"settingValueFormatted","persistent":false,"type":"any"},"orderItem":{"name":"orderItem","fieldtype":"many-to-one","cfc":"OrderItem","fkcolumn":"orderItemID"},"auditSmartList":{"name":"auditSmartList","persistent":false,"type":"any"},"modifiedDateTime":{"name":"modifiedDateTime","ormtype":"timestamp","hb_populateenabled":false},"stock":{"name":"stock","fieldtype":"many-to-one","cfc":"Stock","fkcolumn":"stockID"},"newFlag":{"name":"newFlag","persistent":false,"type":"boolean"},"validations":{"name":"validations","persistent":false,"type":"struct"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"},"createdByAccountID":{"name":"createdByAccountID","ormtype":"string","hb_populateenabled":false},"attributeValuesByAttributeIDStruct":{"name":"attributeValuesByAttributeIDStruct","persistent":false,"type":"struct"},"modifiedByAccountID":{"name":"modifiedByAccountID","ormtype":"string","hb_populateenabled":false},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"assignedAttributeSetSmartList":{"name":"assignedAttributeSetSmartList","persistent":false,"type":"any"},"modifiedByAccount":{"name":"modifiedByAccount","persistent":false},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"simpleRepresentation":{"name":"simpleRepresentation","persistent":false,"type":"string"},"createdByAccount":{"name":"createdByAccount","persistent":false},"sku":{"name":"sku","fieldtype":"many-to-one","cfc":"Sku","fkcolumn":"skuID"},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"persistableErrors":{"name":"persistableErrors","persistent":false,"type":"array"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"stockHoldExpirationDateTime":{"name":"stockHoldExpirationDateTime","ormtype":"timestamp"},"encryptedPropertiesExistFlag":{"name":"encryptedPropertiesExistFlag","persistent":false,"type":"boolean"},"rollbackProcessedFlag":{"name":"rollbackProcessedFlag","persistent":false,"type":"boolean"},"attributeValuesByAttributeCodeStruct":{"name":"attributeValuesByAttributeCodeStruct","persistent":false,"type":"struct"}};
                	entities['StockHold'].className = 'StockHold';
                	validations['StockHold'] = {"properties":{}};
                	defaultValues['StockHold'] = {
                	stockHoldID:'',
										stockHoldExpirationDateTime:null,
									createdDateTime:'',
										createdByAccountID:null,
									modifiedDateTime:'',
										modifiedByAccountID:null,
									
						z:''
	                };
                
                	entities['VendorEmailAddress'] = {"createdDateTime":{"name":"createdDateTime","ormtype":"timestamp","hb_populateenabled":false},"emailTemplates":{"name":"emailTemplates","persistent":false,"type":"struct"},"printTemplates":{"name":"printTemplates","persistent":false,"type":"struct"},"processObjects":{"name":"processObjects","persistent":false,"type":"struct"},"settingValueFormatted":{"name":"settingValueFormatted","persistent":false,"type":"any"},"auditSmartList":{"name":"auditSmartList","persistent":false,"type":"any"},"modifiedDateTime":{"name":"modifiedDateTime","ormtype":"timestamp","hb_populateenabled":false},"newFlag":{"name":"newFlag","persistent":false,"type":"boolean"},"validations":{"name":"validations","persistent":false,"type":"struct"},"vendorEmailAddressID":{"generator":"uuid","name":"vendorEmailAddressID","fieldtype":"id","ormtype":"string","unsavedvalue":"","length":32,"default":""},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"},"createdByAccountID":{"name":"createdByAccountID","ormtype":"string","hb_populateenabled":false},"attributeValuesByAttributeIDStruct":{"name":"attributeValuesByAttributeIDStruct","persistent":false,"type":"struct"},"modifiedByAccountID":{"name":"modifiedByAccountID","ormtype":"string","hb_populateenabled":false},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"assignedAttributeSetSmartList":{"name":"assignedAttributeSetSmartList","persistent":false,"type":"any"},"emailAddress":{"name":"emailAddress","ormtype":"string","hb_formattype":"email"},"modifiedByAccount":{"name":"modifiedByAccount","persistent":false},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"simpleRepresentation":{"name":"simpleRepresentation","persistent":false,"type":"string"},"createdByAccount":{"name":"createdByAccount","persistent":false},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"persistableErrors":{"name":"persistableErrors","persistent":false,"type":"array"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"encryptedPropertiesExistFlag":{"name":"encryptedPropertiesExistFlag","persistent":false,"type":"boolean"},"rollbackProcessedFlag":{"name":"rollbackProcessedFlag","persistent":false,"type":"boolean"},"attributeValuesByAttributeCodeStruct":{"name":"attributeValuesByAttributeCodeStruct","persistent":false,"type":"struct"},"vendor":{"name":"vendor","fieldtype":"many-to-one","cfc":"Vendor","fkcolumn":"vendorID"}};
                	entities['VendorEmailAddress'].className = 'VendorEmailAddress';
                	validations['VendorEmailAddress'] = {"properties":{"emailAddress":[{"dataType":"email","required":true,"contexts":"save"}]}};
                	defaultValues['VendorEmailAddress'] = {
                	vendorEmailAddressID:'',
										emailAddress:null,
									createdDateTime:'',
										createdByAccountID:null,
									modifiedDateTime:'',
										modifiedByAccountID:null,
									
						z:''
	                };
                
                	entities['StockAdjustmentDelivery'] = {"createdDateTime":{"name":"createdDateTime","ormtype":"timestamp","hb_populateenabled":false},"emailTemplates":{"name":"emailTemplates","persistent":false,"type":"struct"},"printTemplates":{"name":"printTemplates","persistent":false,"type":"struct"},"processObjects":{"name":"processObjects","persistent":false,"type":"struct"},"settingValueFormatted":{"name":"settingValueFormatted","persistent":false,"type":"any"},"auditSmartList":{"name":"auditSmartList","persistent":false,"type":"any"},"modifiedDateTime":{"name":"modifiedDateTime","ormtype":"timestamp","hb_populateenabled":false},"newFlag":{"name":"newFlag","persistent":false,"type":"boolean"},"validations":{"name":"validations","persistent":false,"type":"struct"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"},"createdByAccountID":{"name":"createdByAccountID","ormtype":"string","hb_populateenabled":false},"stockAdjustmentDeliveryItems":{"inverse":true,"name":"stockAdjustmentDeliveryItems","fieldtype":"one-to-many","singularname":"stockAdjustmentDeliveryItem","cascade":"all-delete-orphan","cfc":"StockAdjustmentDeliveryItem","fkcolumn":"stockAdjustmentDeliveryID"},"attributeValuesByAttributeIDStruct":{"name":"attributeValuesByAttributeIDStruct","persistent":false,"type":"struct"},"modifiedByAccountID":{"name":"modifiedByAccountID","ormtype":"string","hb_populateenabled":false},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"assignedAttributeSetSmartList":{"name":"assignedAttributeSetSmartList","persistent":false,"type":"any"},"stockAdjustmentDeliveryID":{"generator":"uuid","name":"stockAdjustmentDeliveryID","fieldtype":"id","ormtype":"string","unsavedvalue":"","length":32,"default":""},"modifiedByAccount":{"name":"modifiedByAccount","persistent":false},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"simpleRepresentation":{"name":"simpleRepresentation","persistent":false,"type":"string"},"createdByAccount":{"name":"createdByAccount","persistent":false},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"deliveryOpenDateTime":{"name":"deliveryOpenDateTime","ormtype":"timestamp"},"persistableErrors":{"name":"persistableErrors","persistent":false,"type":"array"},"stockAdjustment":{"name":"stockAdjustment","fieldtype":"many-to-one","cfc":"StockAdjustment","fkcolumn":"stockAdjustmentID"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"encryptedPropertiesExistFlag":{"name":"encryptedPropertiesExistFlag","persistent":false,"type":"boolean"},"rollbackProcessedFlag":{"name":"rollbackProcessedFlag","persistent":false,"type":"boolean"},"attributeValuesByAttributeCodeStruct":{"name":"attributeValuesByAttributeCodeStruct","persistent":false,"type":"struct"},"deliveryCloseDateTime":{"name":"deliveryCloseDateTime","ormtype":"timestamp"}};
                	entities['StockAdjustmentDelivery'].className = 'StockAdjustmentDelivery';
                	validations['StockAdjustmentDelivery'] = {"properties":{}};
                	defaultValues['StockAdjustmentDelivery'] = {
                	stockAdjustmentDeliveryID:'',
										deliveryOpenDateTime:null,
									deliveryCloseDateTime:null,
									createdDateTime:'',
										createdByAccountID:null,
									modifiedDateTime:'',
										modifiedByAccountID:null,
									
						z:''
	                };
                
                	entities['Setting'] = {"subscriptionUsage":{"name":"subscriptionUsage","fieldtype":"many-to-one","cfc":"SubscriptionUsage","fkcolumn":"subscriptionUsageID"},"createdDateTime":{"name":"createdDateTime","ormtype":"timestamp","hb_populateenabled":false},"emailTemplates":{"name":"emailTemplates","persistent":false,"type":"struct"},"settingValueFormatted":{"name":"settingValueFormatted","persistent":false,"type":"any"},"auditSmartList":{"name":"auditSmartList","persistent":false,"type":"any"},"modifiedDateTime":{"name":"modifiedDateTime","ormtype":"timestamp","hb_populateenabled":false},"account":{"name":"account","fieldtype":"many-to-one","cfc":"Account","fkcolumn":"accountID"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"},"subscriptionTerm":{"name":"subscriptionTerm","fieldtype":"many-to-one","cfc":"SubscriptionTerm","fkcolumn":"subscriptionTermID"},"fulfillmentMethod":{"name":"fulfillmentMethod","fieldtype":"many-to-one","cfc":"FulfillmentMethod","fkcolumn":"fulfillmentMethodID"},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"emailTemplate":{"name":"emailTemplate","fieldtype":"many-to-one","cfc":"EmailTemplate","fkcolumn":"emailTemplateID"},"productType":{"name":"productType","fieldtype":"many-to-one","cfc":"ProductType","fkcolumn":"productTypeID"},"cmsContentID":{"name":"cmsContentID","ormtype":"string"},"modifiedByAccount":{"name":"modifiedByAccount","persistent":false},"settingID":{"generator":"uuid","name":"settingID","fieldtype":"id","ormtype":"string","unsavedvalue":"","length":32,"default":""},"simpleRepresentation":{"name":"simpleRepresentation","persistent":false,"type":"string"},"createdByAccount":{"name":"createdByAccount","persistent":false},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"product":{"name":"product","fieldtype":"many-to-one","hb_cascadecalculate":true,"cfc":"Product","fkcolumn":"productID"},"settingName":{"name":"settingName","ormtype":"string"},"shippingMethod":{"name":"shippingMethod","fieldtype":"many-to-one","cfc":"ShippingMethod","fkcolumn":"shippingMethodID"},"rollbackProcessedFlag":{"name":"rollbackProcessedFlag","persistent":false,"type":"boolean"},"attributeValuesByAttributeCodeStruct":{"name":"attributeValuesByAttributeCodeStruct","persistent":false,"type":"struct"},"settingValue":{"name":"settingValue","ormtype":"string","length":4000},"shippingMethodRate":{"name":"shippingMethodRate","fieldtype":"many-to-one","cfc":"ShippingMethodRate","fkcolumn":"shippingMethodRateID"},"settingValueEncryptionProcessedFlag":{"name":"settingValueEncryptionProcessedFlag","persistent":false,"type":"boolean"},"printTemplates":{"name":"printTemplates","persistent":false,"type":"struct"},"processObjects":{"name":"processObjects","persistent":false,"type":"struct"},"newFlag":{"name":"newFlag","persistent":false,"type":"boolean"},"validations":{"name":"validations","persistent":false,"type":"struct"},"site":{"name":"site","fieldtype":"many-to-one","hb_cascadecalculate":true,"cfc":"Site","fkcolumn":"siteID"},"createdByAccountID":{"name":"createdByAccountID","ormtype":"string","hb_populateenabled":false},"task":{"name":"task","fieldtype":"many-to-one","cfc":"Task","fkcolumn":"taskID"},"content":{"name":"content","fieldtype":"many-to-one","cfc":"Content","fkcolumn":"contentID"},"modifiedByAccountID":{"name":"modifiedByAccountID","ormtype":"string","hb_populateenabled":false},"attributeValuesByAttributeIDStruct":{"name":"attributeValuesByAttributeIDStruct","persistent":false,"type":"struct"},"settingValueEncryptedDateTime":{"name":"settingValueEncryptedDateTime","ormtype":"timestamp","hb_auditable":false,"column":"settingValueEncryptDT"},"email":{"name":"email","fieldtype":"many-to-one","cfc":"Email","fkcolumn":"emailID"},"assignedAttributeSetSmartList":{"name":"assignedAttributeSetSmartList","persistent":false,"type":"any"},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"sku":{"name":"sku","fieldtype":"many-to-one","cfc":"Sku","fkcolumn":"skuID"},"persistableErrors":{"name":"persistableErrors","persistent":false,"type":"array"},"encryptedPropertiesExistFlag":{"name":"encryptedPropertiesExistFlag","persistent":false,"type":"boolean"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"paymentMethod":{"name":"paymentMethod","fieldtype":"many-to-one","cfc":"PaymentMethod","fkcolumn":"paymentMethodID"},"location":{"name":"location","fieldtype":"many-to-one","cfc":"Location","fkcolumn":"locationID"},"locationConfiguration":{"name":"locationConfiguration","fieldtype":"many-to-one","cfc":"LocationConfiguration","fkcolumn":"locationConfigurationID"},"brand":{"name":"brand","fieldtype":"many-to-one","cfc":"Brand","fkcolumn":"brandID"},"settingValueEncryptedGenerator":{"name":"settingValueEncryptedGenerator","ormtype":"string","hb_auditable":false,"column":"settingValueEncryptGen"}};
                	entities['Setting'].className = 'Setting';
                	validations['Setting'] = {"properties":{}};
                	defaultValues['Setting'] = {
                	settingID:'',
										settingName:null,
									settingValue:null,
									settingValueEncryptedDateTime:null,
									settingValueEncryptedGenerator:null,
									cmsContentID:null,
									createdDateTime:'',
										createdByAccountID:null,
									modifiedDateTime:'',
										modifiedByAccountID:null,
									
						z:''
	                };
                
                	entities['Promotion'] = {"emailTemplates":{"name":"emailTemplates","persistent":false,"type":"struct"},"createdDateTime":{"name":"createdDateTime","ormtype":"timestamp","hb_populateenabled":false},"printTemplates":{"name":"printTemplates","persistent":false,"type":"struct"},"currentFlag":{"name":"currentFlag","persistent":false,"type":"boolean"},"processObjects":{"name":"processObjects","persistent":false,"type":"struct"},"settingValueFormatted":{"name":"settingValueFormatted","persistent":false,"type":"any"},"auditSmartList":{"name":"auditSmartList","persistent":false,"type":"any"},"modifiedDateTime":{"name":"modifiedDateTime","ormtype":"timestamp","hb_populateenabled":false},"promotionSummary":{"name":"promotionSummary","ormtype":"string","length":1000},"currentPromotionPeriodFlag":{"name":"currentPromotionPeriodFlag","persistent":false,"type":"boolean"},"newFlag":{"name":"newFlag","persistent":false,"type":"boolean"},"validations":{"name":"validations","persistent":false,"type":"struct"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"},"createdByAccountID":{"name":"createdByAccountID","ormtype":"string","hb_populateenabled":false},"promotionCodes":{"inverse":true,"name":"promotionCodes","fieldtype":"one-to-many","singularname":"promotionCode","cascade":"all-delete-orphan","cfc":"PromotionCode","fkcolumn":"promotionID"},"promotionCodesDeletableFlag":{"name":"promotionCodesDeletableFlag","persistent":false,"type":"boolean"},"remoteID":{"name":"remoteID","ormtype":"string"},"modifiedByAccountID":{"name":"modifiedByAccountID","ormtype":"string","hb_populateenabled":false},"attributeValuesByAttributeIDStruct":{"name":"attributeValuesByAttributeIDStruct","persistent":false,"type":"struct"},"promotionPeriods":{"inverse":true,"name":"promotionPeriods","fieldtype":"one-to-many","singularname":"promotionPeriod","cascade":"all-delete-orphan","cfc":"PromotionPeriod","fkcolumn":"promotionID"},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"defaultImage":{"name":"defaultImage","fieldtype":"many-to-one","cfc":"Image","fkcolumn":"defaultImageID"},"assignedAttributeSetSmartList":{"name":"assignedAttributeSetSmartList","persistent":false,"type":"any"},"promotionName":{"name":"promotionName","ormtype":"string"},"promotionDescription":{"name":"promotionDescription","ormtype":"string","length":4000},"modifiedByAccount":{"name":"modifiedByAccount","persistent":false},"currentPromotionCodeFlag":{"name":"currentPromotionCodeFlag","persistent":false,"type":"boolean"},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"createdByAccount":{"name":"createdByAccount","persistent":false},"simpleRepresentation":{"name":"simpleRepresentation","persistent":false,"type":"string"},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"persistableErrors":{"name":"persistableErrors","persistent":false,"type":"array"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"encryptedPropertiesExistFlag":{"name":"encryptedPropertiesExistFlag","persistent":false,"type":"boolean"},"rollbackProcessedFlag":{"name":"rollbackProcessedFlag","persistent":false,"type":"boolean"},"attributeValuesByAttributeCodeStruct":{"name":"attributeValuesByAttributeCodeStruct","persistent":false,"type":"struct"},"promotionID":{"generator":"uuid","name":"promotionID","fieldtype":"id","ormtype":"string","unsavedvalue":"","length":32,"default":""},"appliedPromotions":{"inverse":true,"name":"appliedPromotions","fieldtype":"one-to-many","singularname":"appliedPromotion","cascade":"all","cfc":"PromotionApplied","fkcolumn":"promotionID"},"activeFlag":{"name":"activeFlag","ormtype":"boolean","default":1}};
                	entities['Promotion'].className = 'Promotion';
                	validations['Promotion'] = {"properties":{"promotionCodes":[{"contexts":"delete","method":"getPromotionCodesDeletableFlag"}],"appliedPromotions":[{"maxCollection":0,"contexts":"delete"}],"promotionName":[{"required":true,"contexts":"save"}]}};
                	defaultValues['Promotion'] = {
                	promotionID:'',
										promotionName:null,
									promotionSummary:null,
									promotionDescription:null,
									activeFlag:1,
									remoteID:null,
									createdDateTime:'',
										createdByAccountID:null,
									modifiedDateTime:'',
										modifiedByAccountID:null,
									
						z:''
	                };
                
                	entities['Product'] = {"optionGroupCount":{"name":"optionGroupCount","persistent":false,"type":"numeric"},"loyaltyAccruementExclusions":{"inverse":true,"name":"loyaltyAccruementExclusions","fieldtype":"many-to-many","singularname":"loyaltyAccruementExclusion","inversejoincolumn":"loyaltyAccruementID","cfc":"LoyaltyAccruement","fkcolumn":"productID","type":"array","linktable":"SwLoyaltyAccruExclProduct"},"emailTemplates":{"name":"emailTemplates","persistent":false,"type":"struct"},"productSchedules":{"inverse":true,"name":"productSchedules","fieldtype":"one-to-many","singularname":"productSchedule","cascade":"all-delete-orphan","cfc":"ProductSchedule","fkcolumn":"productID"},"promotionQualifiers":{"inverse":true,"name":"promotionQualifiers","fieldtype":"many-to-many","singularname":"promotionQualifier","inversejoincolumn":"promotionQualifierID","cfc":"PromotionQualifier","fkcolumn":"productID","linktable":"SwPromoQualProduct"},"createdDateTime":{"name":"createdDateTime","ormtype":"timestamp","hb_populateenabled":false},"placedOrderItemsSmartList":{"name":"placedOrderItemsSmartList","persistent":false,"type":"any"},"productDescription":{"name":"productDescription","ormtype":"string","length":4000,"hb_formfieldtype":"wysiwyg"},"vendors":{"inverse":true,"name":"vendors","fieldtype":"many-to-many","singularname":"vendor","inversejoincolumn":"vendorID","cfc":"Vendor","fkcolumn":"productID","type":"array","linktable":"SwVendorProduct"},"sortOrder":{"name":"sortOrder","ormtype":"integer"},"settingValueFormatted":{"name":"settingValueFormatted","persistent":false,"type":"any"},"auditSmartList":{"name":"auditSmartList","persistent":false,"type":"any"},"modifiedDateTime":{"name":"modifiedDateTime","ormtype":"timestamp","hb_populateenabled":false},"physicals":{"inverse":true,"name":"physicals","fieldtype":"many-to-many","singularname":"physical","inversejoincolumn":"physicalID","cfc":"Physical","fkcolumn":"productID","type":"array","linktable":"SwPhysicalProduct"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"},"allowAddOptionGroupFlag":{"name":"allowAddOptionGroupFlag","persistent":false,"type":"boolean"},"brandName":{"name":"brandName","persistent":false,"type":"string"},"listPrice":{"name":"listPrice","hb_formattype":"currency","persistent":false},"remoteID":{"name":"remoteID","ormtype":"string"},"redemptionAmountTypeOptions":{"name":"redemptionAmountTypeOptions","persistent":false,"type":"array"},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"salePrice":{"name":"salePrice","hb_formattype":"currency","persistent":false},"productType":{"name":"productType","fieldtype":"many-to-one","fetch":"join","cfc":"ProductType","fkcolumn":"productTypeID"},"bundleSkusSmartList":{"name":"bundleSkusSmartList","persistent":false},"modifiedByAccount":{"name":"modifiedByAccount","persistent":false},"createdByAccount":{"name":"createdByAccount","persistent":false},"simpleRepresentation":{"name":"simpleRepresentation","persistent":false,"type":"string"},"allowBackorderFlag":{"name":"allowBackorderFlag","persistent":false,"type":"boolean"},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"currentAccountPrice":{"name":"currentAccountPrice","hb_formattype":"currency","persistent":false},"schedulingOptions":{"name":"schedulingOptions","hb_formattype":"array","persistent":false},"calculatedSalePrice":{"name":"calculatedSalePrice","ormtype":"big_decimal"},"brandOptions":{"name":"brandOptions","persistent":false,"type":"array"},"unusedProductOptionGroups":{"name":"unusedProductOptionGroups","persistent":false,"type":"array"},"productID":{"generator":"uuid","name":"productID","fieldtype":"id","ormtype":"string","unsavedvalue":"","length":32,"default":""},"livePrice":{"name":"livePrice","hb_formattype":"currency","persistent":false},"rollbackProcessedFlag":{"name":"rollbackProcessedFlag","persistent":false,"type":"boolean"},"attributeValuesByAttributeCodeStruct":{"name":"attributeValuesByAttributeCodeStruct","persistent":false,"type":"struct"},"publishedFlag":{"name":"publishedFlag","ormtype":"boolean","default":false},"purchaseEndDateTime":{"name":"purchaseEndDateTime","ormtype":"timestamp"},"promotionRewardExclusions":{"inverse":true,"name":"promotionRewardExclusions","fieldtype":"many-to-many","singularname":"promotionRewardExclusion","inversejoincolumn":"promotionRewardID","cfc":"PromotionReward","fkcolumn":"productID","type":"array","linktable":"SwPromoRewardExclProduct"},"eventRegistrations":{"name":"eventRegistrations","persistent":false,"type":"array"},"availableForPurchaseFlag":{"name":"availableForPurchaseFlag","persistent":false,"type":"boolean"},"calculatedQATS":{"name":"calculatedQATS","ormtype":"integer"},"eventConflictExistsFlag":{"name":"eventConflictExistsFlag","persistent":false,"type":"boolean"},"unusedProductOptions":{"name":"unusedProductOptions","persistent":false,"type":"array"},"calculatedAllowBackorderFlag":{"name":"calculatedAllowBackorderFlag","ormtype":"boolean"},"price":{"name":"price","hb_formattype":"currency","persistent":false},"printTemplates":{"name":"printTemplates","persistent":false,"type":"struct"},"processObjects":{"name":"processObjects","persistent":false,"type":"struct"},"defaultSku":{"name":"defaultSku","fieldtype":"many-to-one","fetch":"join","cascade":"delete","cfc":"Sku","fkcolumn":"defaultSkuID"},"transactionExistsFlag":{"name":"transactionExistsFlag","persistent":false,"type":"boolean"},"promotionRewards":{"inverse":true,"name":"promotionRewards","fieldtype":"many-to-many","singularname":"promotionReward","inversejoincolumn":"promotionRewardID","cfc":"PromotionReward","fkcolumn":"productID","linktable":"SwPromoRewardProduct"},"loyaltyRedemptionExclusions":{"inverse":true,"name":"loyaltyRedemptionExclusions","fieldtype":"many-to-many","singularname":"loyaltyRedemptionExclusion","inversejoincolumn":"loyaltyRedemptionID","cfc":"LoyaltyRedemption","fkcolumn":"productID","type":"array","linktable":"SwLoyaltyRedempExclProduct"},"newFlag":{"name":"newFlag","persistent":false,"type":"boolean"},"validations":{"name":"validations","persistent":false,"type":"struct"},"productName":{"name":"productName","ormtype":"string","notnull":true},"createdByAccountID":{"name":"createdByAccountID","ormtype":"string","hb_populateenabled":false},"estimatedReceivalDetails":{"name":"estimatedReceivalDetails","persistent":false,"type":"struct"},"listingPages":{"name":"listingPages","fieldtype":"many-to-many","singularname":"listingPage","inversejoincolumn":"contentID","cfc":"Content","fkcolumn":"productID","linktable":"SwProductListingPage"},"relatedProducts":{"name":"relatedProducts","fieldtype":"many-to-many","singularname":"relatedProduct","inversejoincolumn":"relatedProductID","cfc":"Product","fkcolumn":"productID","linktable":"SwRelatedProduct","type":"array"},"baseProductType":{"name":"baseProductType","persistent":false,"type":"string"},"attributeValuesByAttributeIDStruct":{"name":"attributeValuesByAttributeIDStruct","persistent":false,"type":"struct"},"modifiedByAccountID":{"name":"modifiedByAccountID","ormtype":"string","hb_populateenabled":false},"unusedProductSubscriptionTerms":{"name":"unusedProductSubscriptionTerms","persistent":false,"type":"array"},"qats":{"name":"qats","persistent":false,"type":"numeric"},"assignedAttributeSetSmartList":{"name":"assignedAttributeSetSmartList","persistent":false,"type":"any"},"salePriceDetailsForSkus":{"name":"salePriceDetailsForSkus","persistent":false,"type":"struct"},"loyaltyAccruements":{"inverse":true,"name":"loyaltyAccruements","fieldtype":"many-to-many","singularname":"loyaltyAccruement","inversejoincolumn":"loyaltyAccruementID","cfc":"LoyaltyAccruement","fkcolumn":"productID","linktable":"SwLoyaltyAccruProduct"},"attributeValues":{"inverse":true,"name":"attributeValues","fieldtype":"one-to-many","singularname":"attributeValue","cascade":"all-delete-orphan","cfc":"AttributeValue","fkcolumn":"productID"},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"purchaseStartDateTime":{"name":"purchaseStartDateTime","ormtype":"timestamp"},"productCode":{"index":"PI_PRODUCTCODE","unique":true,"name":"productCode","ormtype":"string"},"nextSkuCodeCount":{"name":"nextSkuCodeCount","persistent":false},"persistableErrors":{"name":"persistableErrors","persistent":false,"type":"array"},"loyaltyRedemptions":{"inverse":true,"name":"loyaltyRedemptions","fieldtype":"many-to-many","singularname":"loyaltyRedemption","inversejoincolumn":"loyaltyRedemptionID","cfc":"LoyaltyRedemption","fkcolumn":"productID","type":"array","linktable":"SwLoyaltyRedemptionProduct"},"skus":{"inverse":true,"name":"skus","fieldtype":"one-to-many","singularname":"sku","cascade":"all-delete-orphan","cfc":"Sku","fkcolumn":"productID","type":"array"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"encryptedPropertiesExistFlag":{"name":"encryptedPropertiesExistFlag","persistent":false,"type":"boolean"},"renewalPrice":{"name":"renewalPrice","hb_formattype":"currency","persistent":false},"defaultProductImageFiles":{"name":"defaultProductImageFiles","persistent":false},"urlTitle":{"unique":true,"name":"urlTitle","ormtype":"string"},"calculatedTitle":{"name":"calculatedTitle","ormtype":"string"},"promotionQualifierExclusions":{"inverse":true,"name":"promotionQualifierExclusions","fieldtype":"many-to-many","singularname":"promotionQualifierExclusion","inversejoincolumn":"promotionQualifierID","cfc":"PromotionQualifier","fkcolumn":"productID","type":"array","linktable":"SwPromoQualExclProduct"},"categories":{"name":"categories","fieldtype":"many-to-many","singularname":"category","inversejoincolumn":"categoryID","cfc":"Category","fkcolumn":"productID","linktable":"SwProductCategory"},"productReviews":{"inverse":true,"name":"productReviews","fieldtype":"one-to-many","singularname":"productReview","cascade":"all-delete-orphan","cfc":"ProductReview","fkcolumn":"productID"},"activeFlag":{"name":"activeFlag","ormtype":"boolean"},"brand":{"name":"brand","fieldtype":"many-to-one","fetch":"join","cfc":"Brand","hb_optionsnullrbkey":"define.none","fkcolumn":"brandID"},"priceGroupRates":{"inverse":true,"name":"priceGroupRates","fieldtype":"many-to-many","singularname":"priceGroupRate","inversejoincolumn":"priceGroupRateID","cfc":"PriceGroupRate","fkcolumn":"productID","linktable":"SwPriceGroupRateProduct"},"productImages":{"inverse":true,"name":"productImages","fieldtype":"one-to-many","singularname":"productImage","cascade":"all-delete-orphan","cfc":"Image","fkcolumn":"productID","type":"array"},"currencyCode":{"name":"currencyCode","persistent":false},"title":{"name":"title","persistent":false,"type":"string"}};
                	entities['Product'].className = 'Product';
                	validations['Product'] = {"properties":{"productName":[{"required":true,"contexts":"save"}],"optionGroupCount":[{"eq":0,"contexts":"addSku"}],"price":[{"dataType":"numeric","required":true,"contexts":"save"}],"urlTitle":[{"unique":true,"required":true,"contexts":"save"}],"productCode":[{"unique":true,"regex":"^[a-zA-Z0-9-_.|:~^]+$","required":true,"contexts":"save"}],"physicalCounts":[{"maxCollection":0,"contexts":"delete"}],"baseProductType":[{"inList":"gift-card,event,merchandise","contexts":"addSku"},{"inList":"merchandise","contexts":"addOptionGroup,addOption"},{"inList":"subscription","contexts":"addSubscriptionSku"},{"inList":"event","contexts":"addEventSchedule,addSkuBundle"}],"transactionExistsFlag":[{"eq":false,"contexts":"delete"}],"unusedProductSubscriptionTerms":[{"minCollection":1,"contexts":"addSubscriptionTerm"}],"unusedProductOptionGroups":[{"minCollection":1,"contexts":"addOptionGroup"}],"productType":[{"required":true,"contexts":"save"}],"unusedProductOptions":[{"minCollection":1,"contexts":"addOption"}],"allowAddOptionGroupFlag":[{"eq":true,"contexts":"addOptionGroup,addOption"}]}};
                	defaultValues['Product'] = {
                	productID:'',
										activeFlag:1,
									urlTitle:null,
									productName:null,
									productCode:null,
									productDescription:null,
									publishedFlag:false,
									sortOrder:null,
									purchaseStartDateTime:null,
									purchaseEndDateTime:null,
									calculatedSalePrice:null,
									calculatedQATS:null,
									calculatedAllowBackorderFlag:null,
									calculatedTitle:null,
									remoteID:null,
									createdDateTime:'',
										createdByAccountID:null,
									modifiedDateTime:'',
										modifiedByAccountID:null,
									
						z:''
	                };
                
                	entities['Product_AddOptionGroup'] = {"populatedFlag":{"name":"populatedFlag"},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"optionGroup":{"name":"optionGroup"},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"preProcessDisplayedFlag":{"name":"preProcessDisplayedFlag"},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"product":{"name":"product"},"validations":{"name":"validations","persistent":false,"type":"struct"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"}};
                	entities['Product_AddOptionGroup'].className = 'Product_AddOptionGroup';
                	validations['Product_AddOptionGroup'] = {"properties":{}};
                	defaultValues['Product_AddOptionGroup'] = {
                	product:'',
										optionGroup:'',
									preProcessDisplayedFlag:0,
										populatedFlag:0,
										
						z:''
	                };
                
                	entities['Product_AddOption'] = {"populatedFlag":{"name":"populatedFlag"},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"option":{"name":"option"},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"preProcessDisplayedFlag":{"name":"preProcessDisplayedFlag"},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"product":{"name":"product"},"validations":{"name":"validations","persistent":false,"type":"struct"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"}};
                	entities['Product_AddOption'].className = 'Product_AddOption';
                	validations['Product_AddOption'] = {"properties":{}};
                	defaultValues['Product_AddOption'] = {
                	product:'',
										option:'',
									preProcessDisplayedFlag:0,
										populatedFlag:0,
										
						z:''
	                };
                
                	entities['Product_AddSubscriptionSku'] = {"renewalSubscriptionBenefits":{"name":"renewalSubscriptionBenefits"},"price":{"name":"price","hb_rbkey":"entity.sku.price"},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"preProcessDisplayedFlag":{"name":"preProcessDisplayedFlag"},"product":{"name":"product"},"validations":{"name":"validations","persistent":false,"type":"struct"},"renewalPrice":{"name":"renewalPrice","hb_rbkey":"entity.sku.renewalPrice"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"subscriptionBenefits":{"name":"subscriptionBenefits"},"listPrice":{"name":"listPrice","hb_rbkey":"entity.sku.listPrice"},"populatedFlag":{"name":"populatedFlag"},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"subscriptionTermID":{"name":"subscriptionTermID"}};
                	entities['Product_AddSubscriptionSku'].className = 'Product_AddSubscriptionSku';
                	validations['Product_AddSubscriptionSku'] = {"properties":{"renewalSubscriptionBenefits":[{"required":true}],"price":[{"dataType":"numeric","required":true}],"listPrice":[{"dataType":"numeric"}],"renewalPrice":[{"dataType":"numeric","required":true}],"subscriptionBenefits":[{"required":true}]}};
                	defaultValues['Product_AddSubscriptionSku'] = {
                	product:'',
										subscriptionTermID:'',
									price:0,
										renewalPrice:0,
										subscriptionBenefits:'',
									renewalSubscriptionBenefits:'',
									preProcessDisplayedFlag:0,
										populatedFlag:0,
										
						z:''
	                };
                
                	entities['Product_UpdateSkus'] = {"skuCurrencies":{"name":"skuCurrencies","hb_populatearray":true,"type":"array"},"price":{"name":"price","hb_rbkey":"entity.sku.price"},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"preProcessDisplayedFlag":{"name":"preProcessDisplayedFlag"},"product":{"name":"product"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"validations":{"name":"validations","persistent":false,"type":"struct"},"updateListPriceFlag":{"name":"updateListPriceFlag"},"listPrice":{"name":"listPrice","hb_rbkey":"entity.sku.listPrice"},"populatedFlag":{"name":"populatedFlag"},"updatePriceFlag":{"name":"updatePriceFlag"},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"}};
                	entities['Product_UpdateSkus'].className = 'Product_UpdateSkus';
                	validations['Product_UpdateSkus'] = {"properties":{"price":[{"dataType":"numeric","required":true,"conditions":"showPrice"}],"listPrice":[{"dataType":"numeric","required":true,"conditions":"showListPrice"}]},"conditions":{"showListPrice":{"updateListPriceFlag":{"eq":1}},"showPrice":{"updatePriceFlag":{"eq":1}}}};
                	defaultValues['Product_UpdateSkus'] = {
                	product:'',
										updatePriceFlag:'',
									price:'',
									updateListPriceFlag:'',
									listPrice:'',
									skuCurrencies:'',
									preProcessDisplayedFlag:0,
										populatedFlag:0,
										
						z:''
	                };
                
                	entities['Product_AddProductReview'] = {"populatedFlag":{"name":"populatedFlag"},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"preProcessDisplayedFlag":{"name":"preProcessDisplayedFlag"},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"newProductReview":{"name":"newProductReview","fieldtype":"many-to-one","persistent":false,"cfc":"ProductReview","fkcolumn":"productReviewID"},"product":{"name":"product"},"validations":{"name":"validations","persistent":false,"type":"struct"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"}};
                	entities['Product_AddProductReview'].className = 'Product_AddProductReview';
                	validations['Product_AddProductReview'] = {"properties":{}};
                	defaultValues['Product_AddProductReview'] = {
                	product:'',
										preProcessDisplayedFlag:0,
										populatedFlag:0,
										
						z:''
	                };
                
                	entities['ShortReference'] = {"referenceObjectID":{"index":"EI_REFERENCEOBJECTID","unique":true,"name":"referenceObjectID","ormtype":"string"},"createdDateTime":{"name":"createdDateTime","ormtype":"timestamp","hb_populateenabled":false},"emailTemplates":{"name":"emailTemplates","persistent":false,"type":"struct"},"printTemplates":{"name":"printTemplates","persistent":false,"type":"struct"},"processObjects":{"name":"processObjects","persistent":false,"type":"struct"},"settingValueFormatted":{"name":"settingValueFormatted","persistent":false,"type":"any"},"auditSmartList":{"name":"auditSmartList","persistent":false,"type":"any"},"modifiedDateTime":{"name":"modifiedDateTime","ormtype":"timestamp","hb_populateenabled":false},"newFlag":{"name":"newFlag","persistent":false,"type":"boolean"},"validations":{"name":"validations","persistent":false,"type":"struct"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"},"createdByAccountID":{"name":"createdByAccountID","ormtype":"string","hb_populateenabled":false},"attributeValuesByAttributeIDStruct":{"name":"attributeValuesByAttributeIDStruct","persistent":false,"type":"struct"},"modifiedByAccountID":{"name":"modifiedByAccountID","ormtype":"string","hb_populateenabled":false},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"assignedAttributeSetSmartList":{"name":"assignedAttributeSetSmartList","persistent":false,"type":"any"},"modifiedByAccount":{"name":"modifiedByAccount","persistent":false},"referenceEntity":{"name":"referenceEntity","persistent":false},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"simpleRepresentation":{"name":"simpleRepresentation","persistent":false,"type":"string"},"createdByAccount":{"name":"createdByAccount","persistent":false},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"referenceObject":{"index":"EI_REFERENCEOBJECT","name":"referenceObject","ormtype":"string"},"persistableErrors":{"name":"persistableErrors","persistent":false,"type":"array"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"encryptedPropertiesExistFlag":{"name":"encryptedPropertiesExistFlag","persistent":false,"type":"boolean"},"rollbackProcessedFlag":{"name":"rollbackProcessedFlag","persistent":false,"type":"boolean"},"attributeValuesByAttributeCodeStruct":{"name":"attributeValuesByAttributeCodeStruct","persistent":false,"type":"struct"},"shortReferenceID":{"name":"shortReferenceID","fieldtype":"id","ormtype":"integer","unsavedvalue":0,"default":0}};
                	entities['ShortReference'].className = 'ShortReference';
                	validations['ShortReference'] = {"properties":{}};
                	defaultValues['ShortReference'] = {
                	shortReferenceID:0,
									referenceObjectID:null,
									referenceObject:null,
									createdDateTime:'',
										createdByAccountID:null,
									modifiedDateTime:'',
										modifiedByAccountID:null,
									
						z:''
	                };
                
                	entities['ShippingMethod'] = {"createdDateTime":{"name":"createdDateTime","ormtype":"timestamp","hb_populateenabled":false},"promotionQualifiers":{"inverse":true,"name":"promotionQualifiers","fieldtype":"many-to-many","singularname":"promotionQualifier","inversejoincolumn":"promotionQualifierID","cfc":"PromotionQualifier","fkcolumn":"shippingMethodID","linktable":"SwPromoQualShippingMethod"},"emailTemplates":{"name":"emailTemplates","persistent":false,"type":"struct"},"printTemplates":{"name":"printTemplates","persistent":false,"type":"struct"},"processObjects":{"name":"processObjects","persistent":false,"type":"struct"},"sortOrder":{"sortcontext":"fulfillmentMethod","name":"sortOrder","ormtype":"integer"},"settingValueFormatted":{"name":"settingValueFormatted","persistent":false,"type":"any"},"auditSmartList":{"name":"auditSmartList","persistent":false,"type":"any"},"promotionRewards":{"inverse":true,"name":"promotionRewards","fieldtype":"many-to-many","singularname":"promotionReward","inversejoincolumn":"promotionRewardID","cfc":"PromotionReward","fkcolumn":"shippingMethodID","linktable":"SwPromoRewardShippingMethod"},"modifiedDateTime":{"name":"modifiedDateTime","ormtype":"timestamp","hb_populateenabled":false},"newFlag":{"name":"newFlag","persistent":false,"type":"boolean"},"validations":{"name":"validations","persistent":false,"type":"struct"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"},"createdByAccountID":{"name":"createdByAccountID","ormtype":"string","hb_populateenabled":false},"fulfillmentMethod":{"name":"fulfillmentMethod","fieldtype":"many-to-one","cfc":"FulfillmentMethod","fkcolumn":"fulfillmentMethodID"},"shippingMethodCode":{"name":"shippingMethodCode","ormtype":"string"},"remoteID":{"name":"remoteID","ormtype":"string"},"modifiedByAccountID":{"name":"modifiedByAccountID","ormtype":"string","hb_populateenabled":false},"attributeValuesByAttributeIDStruct":{"name":"attributeValuesByAttributeIDStruct","persistent":false,"type":"struct"},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"assignedAttributeSetSmartList":{"name":"assignedAttributeSetSmartList","persistent":false,"type":"any"},"orderFulfillments":{"inverse":true,"name":"orderFulfillments","fieldtype":"one-to-many","singularname":"orderFulfillment","lazy":"extra","cfc":"OrderFulfillment","fkcolumn":"shippingMethodID"},"shippingMethodName":{"name":"shippingMethodName","ormtype":"string"},"modifiedByAccount":{"name":"modifiedByAccount","persistent":false},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"createdByAccount":{"name":"createdByAccount","persistent":false},"simpleRepresentation":{"name":"simpleRepresentation","persistent":false,"type":"string"},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"persistableErrors":{"name":"persistableErrors","persistent":false,"type":"array"},"shippingMethodID":{"generator":"uuid","name":"shippingMethodID","fieldtype":"id","ormtype":"string","unsavedvalue":"","length":32,"default":""},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"encryptedPropertiesExistFlag":{"name":"encryptedPropertiesExistFlag","persistent":false,"type":"boolean"},"rollbackProcessedFlag":{"name":"rollbackProcessedFlag","persistent":false,"type":"boolean"},"attributeValuesByAttributeCodeStruct":{"name":"attributeValuesByAttributeCodeStruct","persistent":false,"type":"struct"},"shippingMethodRates":{"inverse":true,"name":"shippingMethodRates","fieldtype":"one-to-many","singularname":"shippingMethodRate","cascade":"all-delete-orphan","cfc":"ShippingMethodRate","fkcolumn":"shippingMethodID"},"activeFlag":{"name":"activeFlag","ormtype":"boolean"}};
                	entities['ShippingMethod'].className = 'ShippingMethod';
                	validations['ShippingMethod'] = {"properties":{"shippingMethodCode":[{"regex":"^[a-zA-Z0-9-_.|:~^]+$","uniqueOrNull":true,"contexts":"save"}],"orderFulfillments":[{"maxCollection":0,"contexts":"delete"}],"shippingMethodName":[{"required":true,"contexts":"save"}]}};
                	defaultValues['ShippingMethod'] = {
                	shippingMethodID:'',
										activeFlag:1,
									shippingMethodName:null,
									shippingMethodCode:null,
									sortOrder:null,
									remoteID:null,
									createdDateTime:'',
										createdByAccountID:null,
									modifiedDateTime:'',
										modifiedByAccountID:null,
									
						z:''
	                };
                
                	entities['Access'] = {"subscriptionUsage":{"name":"subscriptionUsage","fieldtype":"many-to-one","cfc":"SubscriptionUsage","hb_optionsnullrbkey":"define.select","fkcolumn":"subscriptionUsageID"},"createdDateTime":{"name":"createdDateTime","ormtype":"timestamp","hb_populateenabled":false},"emailTemplates":{"name":"emailTemplates","persistent":false,"type":"struct"},"printTemplates":{"name":"printTemplates","persistent":false,"type":"struct"},"processObjects":{"name":"processObjects","persistent":false,"type":"struct"},"settingValueFormatted":{"name":"settingValueFormatted","persistent":false,"type":"any"},"auditSmartList":{"name":"auditSmartList","persistent":false,"type":"any"},"modifiedDateTime":{"name":"modifiedDateTime","ormtype":"timestamp","hb_populateenabled":false},"newFlag":{"name":"newFlag","persistent":false,"type":"boolean"},"validations":{"name":"validations","persistent":false,"type":"struct"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"},"createdByAccountID":{"name":"createdByAccountID","ormtype":"string","hb_populateenabled":false},"subscriptionUsageBenefitAccount":{"name":"subscriptionUsageBenefitAccount","fieldtype":"many-to-one","cfc":"SubscriptionUsageBenefitAccount","hb_optionsnullrbkey":"define.select","fkcolumn":"subsUsageBenefitAccountID"},"subscriptionUsageBenefit":{"name":"subscriptionUsageBenefit","fieldtype":"many-to-one","cfc":"SubscriptionUsageBenefit","hb_optionsnullrbkey":"define.select","fkcolumn":"subscriptionUsageBenefitID"},"remoteID":{"name":"remoteID","ormtype":"string"},"attributeValuesByAttributeIDStruct":{"name":"attributeValuesByAttributeIDStruct","persistent":false,"type":"struct"},"modifiedByAccountID":{"name":"modifiedByAccountID","ormtype":"string","hb_populateenabled":false},"accessID":{"generator":"uuid","name":"accessID","fieldtype":"id","ormtype":"string","unsavedvalue":"","length":32,"default":""},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"accessCode":{"name":"accessCode","ormtype":"string"},"assignedAttributeSetSmartList":{"name":"assignedAttributeSetSmartList","persistent":false,"type":"any"},"modifiedByAccount":{"name":"modifiedByAccount","persistent":false},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"simpleRepresentation":{"name":"simpleRepresentation","persistent":false,"type":"string"},"createdByAccount":{"name":"createdByAccount","persistent":false},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"persistableErrors":{"name":"persistableErrors","persistent":false,"type":"array"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"encryptedPropertiesExistFlag":{"name":"encryptedPropertiesExistFlag","persistent":false,"type":"boolean"},"rollbackProcessedFlag":{"name":"rollbackProcessedFlag","persistent":false,"type":"boolean"},"attributeValuesByAttributeCodeStruct":{"name":"attributeValuesByAttributeCodeStruct","persistent":false,"type":"struct"}};
                	entities['Access'].className = 'Access';
                	validations['Access'] = {"properties":{"accessID":[{"contexts":"save","method":"hasUsageOrUsageBenefitOrUsageBenefitAccount"}]}};
                	defaultValues['Access'] = {
                	accessID:'',
										accessCode:null,
									remoteID:null,
									createdDateTime:'',
										createdByAccountID:null,
									modifiedDateTime:'',
										modifiedByAccountID:null,
									
						z:''
	                };
                
                	entities['ContentAccess'] = {"createdDateTime":{"name":"createdDateTime","ormtype":"timestamp","hb_populateenabled":false},"emailTemplates":{"name":"emailTemplates","persistent":false,"type":"struct"},"printTemplates":{"name":"printTemplates","persistent":false,"type":"struct"},"processObjects":{"name":"processObjects","persistent":false,"type":"struct"},"settingValueFormatted":{"name":"settingValueFormatted","persistent":false,"type":"any"},"auditSmartList":{"name":"auditSmartList","persistent":false,"type":"any"},"modifiedDateTime":{"name":"modifiedDateTime","ormtype":"timestamp","hb_populateenabled":false},"newFlag":{"name":"newFlag","persistent":false,"type":"boolean"},"validations":{"name":"validations","persistent":false,"type":"struct"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"},"account":{"name":"account","fieldtype":"many-to-one","cfc":"Account","fkcolumn":"accountID"},"createdByAccountID":{"name":"createdByAccountID","ormtype":"string","hb_populateenabled":false},"subscriptionUsageBenefit":{"name":"subscriptionUsageBenefit","fieldtype":"many-to-one","cfc":"SubscriptionUsageBenefit","fkcolumn":"subscriptionUsageBenefitID"},"remoteID":{"name":"remoteID","ormtype":"string"},"content":{"name":"content","fieldtype":"many-to-one","cfc":"Content","fkcolumn":"contentID"},"attributeValuesByAttributeIDStruct":{"name":"attributeValuesByAttributeIDStruct","persistent":false,"type":"struct"},"modifiedByAccountID":{"name":"modifiedByAccountID","ormtype":"string","hb_populateenabled":false},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"assignedAttributeSetSmartList":{"name":"assignedAttributeSetSmartList","persistent":false,"type":"any"},"modifiedByAccount":{"name":"modifiedByAccount","persistent":false},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"simpleRepresentation":{"name":"simpleRepresentation","persistent":false,"type":"string"},"createdByAccount":{"name":"createdByAccount","persistent":false},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"persistableErrors":{"name":"persistableErrors","persistent":false,"type":"array"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"encryptedPropertiesExistFlag":{"name":"encryptedPropertiesExistFlag","persistent":false,"type":"boolean"},"rollbackProcessedFlag":{"name":"rollbackProcessedFlag","persistent":false,"type":"boolean"},"attributeValuesByAttributeCodeStruct":{"name":"attributeValuesByAttributeCodeStruct","persistent":false,"type":"struct"},"accountContentAccess":{"name":"accountContentAccess","fieldtype":"many-to-one","cfc":"AccountContentAccess","fkcolumn":"accountContentAccessID"},"contentAccessID":{"generator":"uuid","name":"contentAccessID","fieldtype":"id","ormtype":"string","unsavedvalue":"","length":32,"default":""}};
                	entities['ContentAccess'].className = 'ContentAccess';
                	validations['ContentAccess'] = {"properties":{}};
                	defaultValues['ContentAccess'] = {
                	contentAccessID:'',
										remoteID:null,
									createdDateTime:'',
										createdByAccountID:null,
									modifiedDateTime:'',
										modifiedByAccountID:null,
									
						z:''
	                };
                
                	entities['WorkflowTask'] = {"taskConditionsConfigStruct":{"name":"taskConditionsConfigStruct","persistent":false,"type":"struct"},"createdDateTime":{"name":"createdDateTime","ormtype":"timestamp","hb_populateenabled":false},"emailTemplates":{"name":"emailTemplates","persistent":false,"type":"struct"},"printTemplates":{"name":"printTemplates","persistent":false,"type":"struct"},"processObjects":{"name":"processObjects","persistent":false,"type":"struct"},"settingValueFormatted":{"name":"settingValueFormatted","persistent":false,"type":"any"},"auditSmartList":{"name":"auditSmartList","persistent":false,"type":"any"},"modifiedDateTime":{"name":"modifiedDateTime","ormtype":"timestamp","hb_populateenabled":false},"newFlag":{"name":"newFlag","persistent":false,"type":"boolean"},"validations":{"name":"validations","persistent":false,"type":"struct"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"},"workflowTaskActions":{"inverse":true,"name":"workflowTaskActions","fieldtype":"one-to-many","singularname":"workflowTaskAction","cascade":"all-delete-orphan","cfc":"WorkflowTaskAction","fkcolumn":"workflowTaskID","type":"array"},"createdByAccountID":{"name":"createdByAccountID","ormtype":"string","hb_populateenabled":false},"remoteID":{"name":"remoteID","ormtype":"string","hb_populateenabled":false},"modifiedByAccountID":{"name":"modifiedByAccountID","ormtype":"string","hb_populateenabled":false},"attributeValuesByAttributeIDStruct":{"name":"attributeValuesByAttributeIDStruct","persistent":false,"type":"struct"},"taskName":{"name":"taskName","ormtype":"string"},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"assignedAttributeSetSmartList":{"name":"assignedAttributeSetSmartList","persistent":false,"type":"any"},"workflowTaskID":{"generator":"uuid","name":"workflowTaskID","fieldtype":"id","ormtype":"string","unsavedvalue":"","length":32,"default":""},"modifiedByAccount":{"name":"modifiedByAccount","persistent":false},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"createdByAccount":{"name":"createdByAccount","persistent":false},"simpleRepresentation":{"name":"simpleRepresentation","persistent":false,"type":"string"},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"persistableErrors":{"name":"persistableErrors","persistent":false,"type":"array"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"encryptedPropertiesExistFlag":{"name":"encryptedPropertiesExistFlag","persistent":false,"type":"boolean"},"rollbackProcessedFlag":{"name":"rollbackProcessedFlag","persistent":false,"type":"boolean"},"attributeValuesByAttributeCodeStruct":{"name":"attributeValuesByAttributeCodeStruct","persistent":false,"type":"struct"},"workflow":{"name":"workflow","fieldtype":"many-to-one","cfc":"Workflow","fkcolumn":"workflowID"},"activeFlag":{"name":"activeFlag","ormtype":"boolean","hb_formattype":"yesno"},"taskConditionsConfig":{"name":"taskConditionsConfig","ormtype":"string","hb_auditable":false,"length":8000,"hb_formfieldtype":"json"}};
                	entities['WorkflowTask'].className = 'WorkflowTask';
                	validations['WorkflowTask'] = {"properties":{}};
                	defaultValues['WorkflowTask'] = {
                	workflowTaskID:'',
										activeFlag:1,
									taskName:null,
									taskConditionsConfig:angular.fromJson('{"filterGroups":[{"filterGroup":[]}]}'),
										remoteID:null,
									createdDateTime:'',
										createdByAccountID:null,
									modifiedDateTime:'',
										modifiedByAccountID:null,
									
						z:''
	                };
                
                	entities['RoundingRule'] = {"createdDateTime":{"name":"createdDateTime","ormtype":"timestamp","hb_populateenabled":false},"emailTemplates":{"name":"emailTemplates","persistent":false,"type":"struct"},"printTemplates":{"name":"printTemplates","persistent":false,"type":"struct"},"roundingRuleDirection":{"name":"roundingRuleDirection","ormtype":"string"},"processObjects":{"name":"processObjects","persistent":false,"type":"struct"},"settingValueFormatted":{"name":"settingValueFormatted","persistent":false,"type":"any"},"auditSmartList":{"name":"auditSmartList","persistent":false,"type":"any"},"modifiedDateTime":{"name":"modifiedDateTime","ormtype":"timestamp","hb_populateenabled":false},"newFlag":{"name":"newFlag","persistent":false,"type":"boolean"},"validations":{"name":"validations","persistent":false,"type":"struct"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"},"createdByAccountID":{"name":"createdByAccountID","ormtype":"string","hb_populateenabled":false},"roundingRuleID":{"generator":"uuid","name":"roundingRuleID","fieldtype":"id","ormtype":"string","unsavedvalue":"","length":32,"default":""},"attributeValuesByAttributeIDStruct":{"name":"attributeValuesByAttributeIDStruct","persistent":false,"type":"struct"},"modifiedByAccountID":{"name":"modifiedByAccountID","ormtype":"string","hb_populateenabled":false},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"assignedAttributeSetSmartList":{"name":"assignedAttributeSetSmartList","persistent":false,"type":"any"},"modifiedByAccount":{"name":"modifiedByAccount","persistent":false},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"simpleRepresentation":{"name":"simpleRepresentation","persistent":false,"type":"string"},"createdByAccount":{"name":"createdByAccount","persistent":false},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"roundingRuleExpression":{"name":"roundingRuleExpression","ormtype":"string"},"persistableErrors":{"name":"persistableErrors","persistent":false,"type":"array"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"encryptedPropertiesExistFlag":{"name":"encryptedPropertiesExistFlag","persistent":false,"type":"boolean"},"rollbackProcessedFlag":{"name":"rollbackProcessedFlag","persistent":false,"type":"boolean"},"attributeValuesByAttributeCodeStruct":{"name":"attributeValuesByAttributeCodeStruct","persistent":false,"type":"struct"},"roundingRuleName":{"name":"roundingRuleName","ormtype":"string"},"priceGroupRates":{"inverse":true,"name":"priceGroupRates","fieldtype":"one-to-many","singularname":"priceGroupRate","cfc":"PriceGroupRate","fkcolumn":"roundingRuleID"}};
                	entities['RoundingRule'].className = 'RoundingRule';
                	validations['RoundingRule'] = {"properties":{"roundingRuleDirection":[{"required":true,"contexts":"save"}],"roundingRuleName":[{"required":true,"contexts":"save"}],"roundingRuleExpression":[{"required":true,"contexts":"save","method":"hasExpressionWithListOfNumericValuesOnly"}],"priceGroupRates":[{"maxCollection":0,"contexts":"delete"}]}};
                	defaultValues['RoundingRule'] = {
                	roundingRuleID:'',
										roundingRuleName:null,
									roundingRuleExpression:null,
									roundingRuleDirection:null,
									createdDateTime:'',
										createdByAccountID:null,
									modifiedDateTime:'',
										modifiedByAccountID:null,
									
						z:''
	                };
                
                	entities['Workflow'] = {"createdDateTime":{"name":"createdDateTime","ormtype":"timestamp","hb_populateenabled":false},"emailTemplates":{"name":"emailTemplates","persistent":false,"type":"struct"},"printTemplates":{"name":"printTemplates","persistent":false,"type":"struct"},"workflowName":{"name":"workflowName","ormtype":"string"},"processObjects":{"name":"processObjects","persistent":false,"type":"struct"},"settingValueFormatted":{"name":"settingValueFormatted","persistent":false,"type":"any"},"auditSmartList":{"name":"auditSmartList","persistent":false,"type":"any"},"modifiedDateTime":{"name":"modifiedDateTime","ormtype":"timestamp","hb_populateenabled":false},"workflowObject":{"name":"workflowObject","ormtype":"string","hb_formfieldtype":"select"},"newFlag":{"name":"newFlag","persistent":false,"type":"boolean"},"validations":{"name":"validations","persistent":false,"type":"struct"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"},"createdByAccountID":{"name":"createdByAccountID","ormtype":"string","hb_populateenabled":false},"remoteID":{"name":"remoteID","ormtype":"string","hb_populateenabled":false},"modifiedByAccountID":{"name":"modifiedByAccountID","ormtype":"string","hb_populateenabled":false},"attributeValuesByAttributeIDStruct":{"name":"attributeValuesByAttributeIDStruct","persistent":false,"type":"struct"},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"assignedAttributeSetSmartList":{"name":"assignedAttributeSetSmartList","persistent":false,"type":"any"},"workflowTasks":{"inverse":true,"name":"workflowTasks","fieldtype":"one-to-many","singularname":"workflowTask","cascade":"all-delete-orphan","cfc":"WorkflowTask","fkcolumn":"workflowID","type":"array"},"modifiedByAccount":{"name":"modifiedByAccount","persistent":false},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"createdByAccount":{"name":"createdByAccount","persistent":false},"simpleRepresentation":{"name":"simpleRepresentation","persistent":false,"type":"string"},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"persistableErrors":{"name":"persistableErrors","persistent":false,"type":"array"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"encryptedPropertiesExistFlag":{"name":"encryptedPropertiesExistFlag","persistent":false,"type":"boolean"},"workflowID":{"generator":"uuid","name":"workflowID","fieldtype":"id","ormtype":"string","unsavedvalue":"","length":32,"default":""},"workflowTriggers":{"inverse":true,"name":"workflowTriggers","fieldtype":"one-to-many","singularname":"workflowTrigger","cascade":"all-delete-orphan","cfc":"WorkflowTrigger","fkcolumn":"workflowID","type":"array"},"rollbackProcessedFlag":{"name":"rollbackProcessedFlag","persistent":false,"type":"boolean"},"attributeValuesByAttributeCodeStruct":{"name":"attributeValuesByAttributeCodeStruct","persistent":false,"type":"struct"},"workflowObjectOptions":{"name":"workflowObjectOptions","persistent":false},"activeFlag":{"name":"activeFlag","ormtype":"boolean","hb_formattype":"yesno"}};
                	entities['Workflow'].className = 'Workflow';
                	validations['Workflow'] = {"properties":{"workflowName":[{"required":true,"contexts":"save"}],"workflowObject":[{"required":true,"contexts":"save"}]}};
                	defaultValues['Workflow'] = {
                	workflowID:'',
										activeFlag:1,
									workflowName:null,
									workflowObject:null,
									remoteID:null,
									createdDateTime:'',
										createdByAccountID:null,
									modifiedDateTime:'',
										modifiedByAccountID:null,
									
						z:''
	                };
                
                	entities['Collection'] = {"collectionEntityObject":{"name":"collectionEntityObject","persistent":false,"type":"any"},"createdDateTime":{"name":"createdDateTime","ormtype":"timestamp","hb_populateenabled":false},"emailTemplates":{"name":"emailTemplates","persistent":false,"type":"struct"},"settingValueFormatted":{"name":"settingValueFormatted","persistent":false,"type":"any"},"auditSmartList":{"name":"auditSmartList","persistent":false,"type":"any"},"modifiedDateTime":{"name":"modifiedDateTime","ormtype":"timestamp","hb_populateenabled":false},"savedStateID":{"name":"savedStateID","persistent":false,"type":"string"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"},"collectionConfig":{"name":"collectionConfig","ormtype":"string","hb_auditable":false,"hint":"json object used to construct the base collection HQL query","length":8000,"hb_formfieldtype":"json"},"records":{"name":"records","persistent":false,"type":"array"},"remoteID":{"name":"remoteID","ormtype":"string"},"cacheable":{"name":"cacheable","persistent":false,"type":"boolean"},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"processContext":{"name":"processContext","persistent":false,"type":"string"},"modifiedByAccount":{"name":"modifiedByAccount","persistent":false},"simpleRepresentation":{"name":"simpleRepresentation","persistent":false,"type":"string"},"createdByAccount":{"name":"createdByAccount","persistent":false},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"rollbackProcessedFlag":{"name":"rollbackProcessedFlag","persistent":false,"type":"boolean"},"attributeValuesByAttributeCodeStruct":{"name":"attributeValuesByAttributeCodeStruct","persistent":false,"type":"struct"},"currentURL":{"name":"currentURL","persistent":false,"type":"string"},"nonPersistentColumn":{"name":"nonPersistentColumn","persistent":false,"type":"boolean"},"pageRecords":{"name":"pageRecords","persistent":false,"type":"array"},"collectionID":{"generator":"uuid","name":"collectionID","fieldtype":"id","ormtype":"string","unsavedvalue":"","length":32,"default":""},"cacheName":{"name":"cacheName","persistent":false,"type":"string"},"printTemplates":{"name":"printTemplates","persistent":false,"type":"struct"},"parentCollection":{"name":"parentCollection","fieldtype":"many-to-one","cfc":"Collection","fkcolumn":"parentCollectionID"},"processObjects":{"name":"processObjects","persistent":false,"type":"struct"},"collectionDescription":{"name":"collectionDescription","ormtype":"string"},"newFlag":{"name":"newFlag","persistent":false,"type":"boolean"},"validations":{"name":"validations","persistent":false,"type":"struct"},"hqlAliases":{"name":"hqlAliases","persistent":false,"type":"struct"},"collectionName":{"name":"collectionName","ormtype":"string"},"createdByAccountID":{"name":"createdByAccountID","ormtype":"string","hb_populateenabled":false},"collectionCode":{"index":"PI_COLLECTIONCODE","unique":true,"name":"collectionCode","ormtype":"string"},"postOrderBys":{"name":"postOrderBys","hint":"order bys added by the use in the UI, applied/overried the default collectionConfig order bys","persistent":false,"type":"array"},"modifiedByAccountID":{"name":"modifiedByAccountID","ormtype":"string","hb_populateenabled":false},"attributeValuesByAttributeIDStruct":{"name":"attributeValuesByAttributeIDStruct","persistent":false,"type":"struct"},"assignedAttributeSetSmartList":{"name":"assignedAttributeSetSmartList","persistent":false,"type":"any"},"pageRecordsStart":{"name":"pageRecordsStart","hint":"This represents the first record to display and it is used in paging.","persistent":false,"type":"numeric"},"currentPageDeclaration":{"name":"currentPageDeclaration","persistent":false,"type":"string"},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"pageRecordsShow":{"name":"pageRecordsShow","hint":"This is the total number of entities to display","persistent":false,"type":"numeric"},"postFilterGroups":{"name":"postFilterGroups","singularname":"postFilterGroup","hint":"where conditions that are added by the user through the UI, applied in addition to the collectionConfig.","persistent":false,"type":"array"},"collectionConfigStruct":{"name":"collectionConfigStruct","persistent":false,"type":"struct"},"persistableErrors":{"name":"persistableErrors","persistent":false,"type":"array"},"keywordArray":{"name":"keywordArray","persistent":false,"type":"array"},"hqlParams":{"name":"hqlParams","persistent":false,"type":"struct"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"encryptedPropertiesExistFlag":{"name":"encryptedPropertiesExistFlag","persistent":false,"type":"boolean"},"keywords":{"name":"keywords","persistent":false,"type":"string"},"collectionObjectOptions":{"name":"collectionObjectOptions","persistent":false},"collectionObject":{"name":"collectionObject","ormtype":"string","hb_formfieldtype":"select"}};
                	entities['Collection'].className = 'Collection';
                	validations['Collection'] = {"properties":{"collectionCode":[{"regex":"^[a-zA-Z0-9-_.|:~^]+$","uniqueOrNull":true,"contexts":"save"}],"collectionName":[{"required":true,"contexts":"save"}]}};
                	defaultValues['Collection'] = {
                	collectionID:'',
										collectionName:null,
									collectionCode:null,
									collectionDescription:null,
									collectionObject:null,
									collectionConfig:angular.fromJson('{}'),
										remoteID:null,
									createdDateTime:'',
										createdByAccountID:null,
									modifiedDateTime:'',
										modifiedByAccountID:null,
									
						z:''
	                };
                
                	entities['AttributeValue'] = {"emailTemplates":{"name":"emailTemplates","persistent":false,"type":"struct"},"createdDateTime":{"name":"createdDateTime","ormtype":"timestamp","hb_populateenabled":false},"orderDelivery":{"name":"orderDelivery","fieldtype":"many-to-one","cfc":"OrderDelivery","fkcolumn":"orderDeliveryID"},"optionGroup":{"name":"optionGroup","fieldtype":"many-to-one","cfc":"OptionGroup","fkcolumn":"optionGroupID"},"attributeValueEncryptedGenerator":{"name":"attributeValueEncryptedGenerator","ormtype":"string","hb_auditable":false,"column":"attributeValueEncryptGen"},"settingValueFormatted":{"name":"settingValueFormatted","persistent":false,"type":"any"},"auditSmartList":{"name":"auditSmartList","persistent":false,"type":"any"},"orderPayment":{"name":"orderPayment","fieldtype":"many-to-one","cfc":"OrderPayment","fkcolumn":"orderPaymentID"},"order":{"name":"order","fieldtype":"many-to-one","cfc":"Order","fkcolumn":"orderID"},"modifiedDateTime":{"name":"modifiedDateTime","ormtype":"timestamp","hb_populateenabled":false},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"},"account":{"name":"account","fieldtype":"many-to-one","cfc":"Account","fkcolumn":"accountID"},"attributeValueEncryptedDateTime":{"name":"attributeValueEncryptedDateTime","ormtype":"timestamp","hb_auditable":false,"column":"attributeValueEncryptDT"},"attribute":{"name":"attribute","fieldtype":"many-to-one","notnull":true,"cfc":"Attribute","fkcolumn":"attributeID"},"attributeOption":{"name":"attributeOption","fieldtype":"many-to-one","cfc":"AttributeOption","fkcolumn":"attributeOptionID"},"remoteID":{"name":"remoteID","ormtype":"string","hb_populateenabled":false},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"attributeID":{"update":false,"name":"attributeID","insert":false,"length":32},"attributeValueFileURL":{"name":"attributeValueFileURL","persistent":false},"productType":{"name":"productType","fieldtype":"many-to-one","cfc":"ProductType","fkcolumn":"productTypeID"},"type":{"name":"type","fieldtype":"many-to-one","cfc":"Type","fkcolumn":"typeID"},"modifiedByAccount":{"name":"modifiedByAccount","persistent":false},"createdByAccount":{"name":"createdByAccount","persistent":false},"simpleRepresentation":{"name":"simpleRepresentation","persistent":false,"type":"string"},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"productReview":{"name":"productReview","fieldtype":"many-to-one","cfc":"ProductReview","fkcolumn":"productReviewID"},"image":{"name":"image","fieldtype":"many-to-one","cfc":"Image","fkcolumn":"imageID"},"product":{"name":"product","fieldtype":"many-to-one","cfc":"Product","fkcolumn":"productID"},"attributeValueID":{"generator":"uuid","name":"attributeValueID","fieldtype":"id","ormtype":"string","unsavedvalue":"","length":32,"default":""},"rollbackProcessedFlag":{"name":"rollbackProcessedFlag","persistent":false,"type":"boolean"},"attributeValuesByAttributeCodeStruct":{"name":"attributeValuesByAttributeCodeStruct","persistent":false,"type":"struct"},"attributeValue":{"name":"attributeValue","ormtype":"string","hb_formattype":"custom","length":4000},"accountPayment":{"name":"accountPayment","fieldtype":"many-to-one","cfc":"AccountPayment","fkcolumn":"accountPaymentID"},"printTemplates":{"name":"printTemplates","persistent":false,"type":"struct"},"processObjects":{"name":"processObjects","persistent":false,"type":"struct"},"orderItem":{"name":"orderItem","fieldtype":"many-to-one","cfc":"OrderItem","fkcolumn":"orderItemID"},"productBundleGroup":{"name":"productBundleGroup","fieldtype":"many-to-one","cfc":"ProductBundleGroup","fkcolumn":"productBundleGroupID"},"newFlag":{"name":"newFlag","persistent":false,"type":"boolean"},"validations":{"name":"validations","persistent":false,"type":"struct"},"createdByAccountID":{"name":"createdByAccountID","ormtype":"string","hb_populateenabled":false},"content":{"name":"content","fieldtype":"many-to-one","cfc":"Content","fkcolumn":"contentID"},"modifiedByAccountID":{"name":"modifiedByAccountID","ormtype":"string","hb_populateenabled":false},"attributeValuesByAttributeIDStruct":{"name":"attributeValuesByAttributeIDStruct","persistent":false,"type":"struct"},"file":{"name":"file","fieldtype":"many-to-one","cfc":"File","fkcolumn":"fileID"},"attributeValueOption":{"name":"attributeValueOption","fieldtype":"many-to-one","cfc":"AttributeOption","fkcolumn":"attributeValueOptionID"},"assignedAttributeSetSmartList":{"name":"assignedAttributeSetSmartList","persistent":false,"type":"any"},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"sku":{"name":"sku","fieldtype":"many-to-one","cfc":"Sku","fkcolumn":"skuID"},"vendorOrder":{"name":"vendorOrder","fieldtype":"many-to-one","cfc":"VendorOrder","fkcolumn":"vendorOrderID"},"persistableErrors":{"name":"persistableErrors","persistent":false,"type":"array"},"orderFulfillment":{"name":"orderFulfillment","fieldtype":"many-to-one","cfc":"OrderFulfillment","fkcolumn":"orderFulfillmentID"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"encryptedPropertiesExistFlag":{"name":"encryptedPropertiesExistFlag","persistent":false,"type":"boolean"},"location":{"name":"location","fieldtype":"many-to-one","cfc":"Location","fkcolumn":"locationID"},"attributeValueType":{"name":"attributeValueType","ormtype":"string","hb_formattype":"custom","notnull":true,"hb_formfieldtype":"select"},"accountAddress":{"name":"accountAddress","fieldtype":"many-to-one","cfc":"AccountAddress","fkcolumn":"accountAddressID"},"locationConfiguration":{"name":"locationConfiguration","fieldtype":"many-to-one","cfc":"LocationConfiguration","fkcolumn":"locationConfigurationID"},"subscriptionBenefit":{"name":"subscriptionBenefit","fieldtype":"many-to-one","cfc":"SubscriptionBenefit","fkcolumn":"subscriptionBenefitID"},"attributeValueEncrypted":{"name":"attributeValueEncrypted","ormtype":"string","hb_auditable":false},"brand":{"name":"brand","fieldtype":"many-to-one","cfc":"Brand","fkcolumn":"brandID"},"vendor":{"name":"vendor","fieldtype":"many-to-one","cfc":"Vendor","fkcolumn":"vendorID"},"attributeValueOptions":{"name":"attributeValueOptions","persistent":false}};
                	entities['AttributeValue'].className = 'AttributeValue';
                	validations['AttributeValue'] = {"properties":{"attributeValue":[{"required":true,"contexts":"save","conditions":"attributeRequired"}],"attributeValueType":[{"required":true,"contexts":"save"}],"attribute":[{"required":true,"contexts":"save"}]},"conditions":{"attributeRequired":{"attribute.requiredFlag":{"eq":true}}}};
                	defaultValues['AttributeValue'] = {
                	attributeValueID:'',
										attributeValue:'',
										attributeValueEncrypted:null,
									attributeValueEncryptedDateTime:null,
									attributeValueEncryptedGenerator:null,
									attributeValueType:null,
									attributeID:null,
									remoteID:null,
									createdDateTime:'',
										createdByAccountID:null,
									modifiedDateTime:'',
										modifiedByAccountID:null,
									
						z:''
	                };
                
                	entities['SubscriptionOrderItem'] = {"subscriptionUsage":{"name":"subscriptionUsage","fieldtype":"many-to-one","cascade":"all","cfc":"SubscriptionUsage","fkcolumn":"subscriptionUsageID"},"createdDateTime":{"name":"createdDateTime","ormtype":"timestamp","hb_populateenabled":false},"emailTemplates":{"name":"emailTemplates","persistent":false,"type":"struct"},"printTemplates":{"name":"printTemplates","persistent":false,"type":"struct"},"processObjects":{"name":"processObjects","persistent":false,"type":"struct"},"subscriptionOrderItemType":{"name":"subscriptionOrderItemType","fieldtype":"many-to-one","hb_optionssmartlistdata":"f:parentType.systemCode=subscriptionOrderItemType","cfc":"Type","fkcolumn":"subscriptionOrderItemTypeID"},"settingValueFormatted":{"name":"settingValueFormatted","persistent":false,"type":"any"},"orderItem":{"name":"orderItem","fieldtype":"many-to-one","cfc":"OrderItem","fkcolumn":"orderItemID"},"auditSmartList":{"name":"auditSmartList","persistent":false,"type":"any"},"modifiedDateTime":{"name":"modifiedDateTime","ormtype":"timestamp","hb_populateenabled":false},"newFlag":{"name":"newFlag","persistent":false,"type":"boolean"},"validations":{"name":"validations","persistent":false,"type":"struct"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"},"createdByAccountID":{"name":"createdByAccountID","ormtype":"string","hb_populateenabled":false},"remoteID":{"name":"remoteID","ormtype":"string"},"attributeValuesByAttributeIDStruct":{"name":"attributeValuesByAttributeIDStruct","persistent":false,"type":"struct"},"modifiedByAccountID":{"name":"modifiedByAccountID","ormtype":"string","hb_populateenabled":false},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"assignedAttributeSetSmartList":{"name":"assignedAttributeSetSmartList","persistent":false,"type":"any"},"modifiedByAccount":{"name":"modifiedByAccount","persistent":false},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"simpleRepresentation":{"name":"simpleRepresentation","persistent":false,"type":"string"},"createdByAccount":{"name":"createdByAccount","persistent":false},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"persistableErrors":{"name":"persistableErrors","persistent":false,"type":"array"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"encryptedPropertiesExistFlag":{"name":"encryptedPropertiesExistFlag","persistent":false,"type":"boolean"},"subscriptionOrderItemID":{"generator":"uuid","name":"subscriptionOrderItemID","fieldtype":"id","ormtype":"string","unsavedvalue":"","length":32,"default":""},"rollbackProcessedFlag":{"name":"rollbackProcessedFlag","persistent":false,"type":"boolean"},"attributeValuesByAttributeCodeStruct":{"name":"attributeValuesByAttributeCodeStruct","persistent":false,"type":"struct"}};
                	entities['SubscriptionOrderItem'].className = 'SubscriptionOrderItem';
                	validations['SubscriptionOrderItem'] = {"properties":{}};
                	defaultValues['SubscriptionOrderItem'] = {
                	subscriptionOrderItemID:'',
										remoteID:null,
									createdDateTime:'',
										createdByAccountID:null,
									modifiedDateTime:'',
										modifiedByAccountID:null,
									
						z:''
	                };
                
                	entities['AccountPayment'] = {"emailTemplates":{"name":"emailTemplates","persistent":false,"type":"struct"},"createdDateTime":{"name":"createdDateTime","ormtype":"timestamp","hb_populateenabled":false},"amountUnauthorized":{"name":"amountUnauthorized","hb_formattype":"currency","persistent":false},"expirationMonth":{"name":"expirationMonth","ormtype":"string","hb_formfieldtype":"select"},"settingValueFormatted":{"name":"settingValueFormatted","persistent":false,"type":"any"},"accountPaymentID":{"generator":"uuid","name":"accountPaymentID","fieldtype":"id","ormtype":"string","unsavedvalue":"","length":32,"default":""},"auditSmartList":{"name":"auditSmartList","persistent":false,"type":"any"},"modifiedDateTime":{"name":"modifiedDateTime","ormtype":"timestamp","hb_populateenabled":false},"nameOnCreditCard":{"name":"nameOnCreditCard","ormtype":"string"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"},"account":{"name":"account","fieldtype":"many-to-one","cfc":"Account","hb_optionsnullrbkey":"define.select","fkcolumn":"accountID"},"accountPaymentType":{"name":"accountPaymentType","fieldtype":"many-to-one","hb_optionssmartlistdata":"f:parentType.systemCode=accountPaymentType","cfc":"Type","fkcolumn":"accountPaymentTypeID"},"creditCardNumberEncrypted":{"name":"creditCardNumberEncrypted","ormtype":"string"},"bankRoutingNumber":{"name":"bankRoutingNumber","persistent":false},"securityCode":{"name":"securityCode","persistent":false},"remoteID":{"name":"remoteID","ormtype":"string"},"creditCardNumber":{"name":"creditCardNumber","persistent":false},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"amountUnassigned":{"name":"amountUnassigned","hb_formattype":"currency","persistent":false,"type":"numeric"},"amountUncaptured":{"name":"amountUncaptured","hb_formattype":"currency","persistent":false},"modifiedByAccount":{"name":"modifiedByAccount","persistent":false},"createdByAccount":{"name":"createdByAccount","persistent":false},"simpleRepresentation":{"name":"simpleRepresentation","persistent":false,"type":"string"},"companyPaymentMethodFlag":{"name":"companyPaymentMethodFlag","ormtype":"boolean"},"paymentTransactions":{"inverse":true,"name":"paymentTransactions","fieldtype":"one-to-many","singularname":"paymentTransaction","cascade":"all","cfc":"PaymentTransaction","fkcolumn":"accountPaymentID","type":"array"},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"appliedAccountPaymentOptions":{"name":"appliedAccountPaymentOptions","persistent":false},"giftCardNumberEncrypted":{"name":"giftCardNumberEncrypted","ormtype":"string"},"amount":{"name":"amount","hb_formattype":"currency","persistent":false,"type":"numeric"},"amountUnreceived":{"name":"amountUnreceived","hb_formattype":"currency","persistent":false},"expirationYear":{"name":"expirationYear","ormtype":"string","hb_formfieldtype":"select"},"rollbackProcessedFlag":{"name":"rollbackProcessedFlag","persistent":false,"type":"boolean"},"attributeValuesByAttributeCodeStruct":{"name":"attributeValuesByAttributeCodeStruct","persistent":false,"type":"struct"},"creditCardLastFour":{"name":"creditCardLastFour","ormtype":"string"},"creditCardType":{"name":"creditCardType","ormtype":"string"},"originalChargeProviderTransactionID":{"name":"originalChargeProviderTransactionID","persistent":false},"amountCredited":{"name":"amountCredited","hb_formattype":"currency","persistent":false,"type":"numeric"},"checkNumberEncrypted":{"name":"checkNumberEncrypted","ormtype":"string"},"expirationDate":{"name":"expirationDate","persistent":false},"amountAuthorized":{"name":"amountAuthorized","hb_formattype":"currency","persistent":false,"type":"numeric"},"amountReceived":{"name":"amountReceived","hb_formattype":"currency","persistent":false,"type":"numeric"},"originalAuthorizationProviderTransactionID":{"name":"originalAuthorizationProviderTransactionID","persistent":false},"printTemplates":{"name":"printTemplates","persistent":false,"type":"struct"},"paymentMethodOptions":{"name":"paymentMethodOptions","persistent":false},"appliedAccountPayments":{"inverse":true,"name":"appliedAccountPayments","fieldtype":"one-to-many","singularname":"appliedAccountPayment","cascade":"all","cfc":"AccountPaymentApplied","fkcolumn":"accountPaymentID","type":"array"},"processObjects":{"name":"processObjects","persistent":false,"type":"struct"},"creditCardOrProviderTokenExistsFlag":{"name":"creditCardOrProviderTokenExistsFlag","persistent":false},"bankAccountNumberEncrypted":{"name":"bankAccountNumberEncrypted","ormtype":"string"},"newFlag":{"name":"newFlag","persistent":false,"type":"boolean"},"validations":{"name":"validations","persistent":false,"type":"struct"},"billingAddress":{"name":"billingAddress","fieldtype":"many-to-one","cascade":"all","cfc":"Address","hb_optionsnullrbkey":"define.select","fkcolumn":"billingAddressID"},"createdByAccountID":{"name":"createdByAccountID","ormtype":"string","hb_populateenabled":false},"accountPaymentMethod":{"name":"accountPaymentMethod","fieldtype":"many-to-one","cfc":"AccountPaymentMethod","hb_optionsnullrbkey":"define.select","fkcolumn":"accountPaymentMethodID"},"originalProviderTransactionID":{"name":"originalProviderTransactionID","persistent":false},"experationMonthOptions":{"name":"experationMonthOptions","persistent":false},"attributeValuesByAttributeIDStruct":{"name":"attributeValuesByAttributeIDStruct","persistent":false,"type":"struct"},"providerToken":{"name":"providerToken","ormtype":"string"},"modifiedByAccountID":{"name":"modifiedByAccountID","ormtype":"string","hb_populateenabled":false},"expirationYearOptions":{"name":"expirationYearOptions","persistent":false},"assignedAttributeSetSmartList":{"name":"assignedAttributeSetSmartList","persistent":false,"type":"any"},"paymentMethodType":{"name":"paymentMethodType","persistent":false},"checkNumber":{"name":"checkNumber","persistent":false},"attributeValues":{"inverse":true,"name":"attributeValues","fieldtype":"one-to-many","singularname":"attributeValue","cascade":"all-delete-orphan","cfc":"AttributeValue","fkcolumn":"accountPaymentID","type":"array"},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"persistableErrors":{"name":"persistableErrors","persistent":false,"type":"array"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"encryptedPropertiesExistFlag":{"name":"encryptedPropertiesExistFlag","persistent":false,"type":"boolean"},"bankRoutingNumberEncrypted":{"name":"bankRoutingNumberEncrypted","ormtype":"string"},"paymentMethod":{"name":"paymentMethod","fieldtype":"many-to-one","cfc":"PaymentMethod","hb_optionsnullrbkey":"define.select","fkcolumn":"paymentMethodID"},"amountUncredited":{"name":"amountUncredited","hb_formattype":"currency","persistent":false},"giftCardNumber":{"name":"giftCardNumber","persistent":false},"bankAccountNumber":{"name":"bankAccountNumber","persistent":false},"currencyCode":{"name":"currencyCode","ormtype":"string","length":3},"originalAuthorizationCode":{"name":"originalAuthorizationCode","persistent":false}};
                	entities['AccountPayment'].className = 'AccountPayment';
                	validations['AccountPayment'] = {"properties":{"paymentMethodType":[{"inList":"cash,check,creditCard,external,giftCard","required":true,"contexts":"save"}],"paymentMethod":[{"required":true,"contexts":"save"}],"paymentTransactions":[{"maxCollection":0,"contexts":"delete"}],"amount":[{"dataType":"numeric","minValue":0,"required":true,"contexts":"save"}],"accountPaymentType":[{"required":true,"contexts":"save"}]}};
                	defaultValues['AccountPayment'] = {
                	accountPaymentID:'',
										currencyCode:'USD',
										bankRoutingNumberEncrypted:null,
									bankAccountNumberEncrypted:null,
									checkNumberEncrypted:null,
									companyPaymentMethodFlag:null,
									creditCardNumberEncrypted:null,
									creditCardLastFour:null,
									creditCardType:null,
									expirationMonth:null,
									expirationYear:null,
									giftCardNumberEncrypted:null,
									nameOnCreditCard:null,
									providerToken:null,
									remoteID:null,
									createdDateTime:'',
										createdByAccountID:null,
									modifiedDateTime:'',
										modifiedByAccountID:null,
									
						z:''
	                };
                
                	entities['AccountPayment_CreateTransaction'] = {"transactionTypeOptions":{"name":"transactionTypeOptions"},"populatedFlag":{"name":"populatedFlag"},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"preProcessDisplayedFlag":{"name":"preProcessDisplayedFlag"},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"amount":{"name":"amount"},"accountPayment":{"name":"accountPayment"},"validations":{"name":"validations","persistent":false,"type":"struct"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"},"transactionType":{"name":"transactionType","hb_formfieldtype":"select"}};
                	entities['AccountPayment_CreateTransaction'].className = 'AccountPayment_CreateTransaction';
                	validations['AccountPayment_CreateTransaction'] = {"properties":{}};
                	defaultValues['AccountPayment_CreateTransaction'] = {
                	accountPayment:'',
										preProcessDisplayedFlag:0,
										populatedFlag:0,
										
						z:''
	                };
                
                	entities['AccountPaymentApplied'] = {"accountPaymentAppliedID":{"generator":"uuid","name":"accountPaymentAppliedID","fieldtype":"id","ormtype":"string","unsavedvalue":"","length":32,"default":""},"createdDateTime":{"name":"createdDateTime","ormtype":"timestamp","hb_populateenabled":false},"emailTemplates":{"name":"emailTemplates","persistent":false,"type":"struct"},"printTemplates":{"name":"printTemplates","persistent":false,"type":"struct"},"processObjects":{"name":"processObjects","persistent":false,"type":"struct"},"settingValueFormatted":{"name":"settingValueFormatted","persistent":false,"type":"any"},"auditSmartList":{"name":"auditSmartList","persistent":false,"type":"any"},"modifiedDateTime":{"name":"modifiedDateTime","ormtype":"timestamp","hb_populateenabled":false},"orderPayment":{"name":"orderPayment","fieldtype":"many-to-one","cfc":"OrderPayment","hb_optionsnullrbkey":"define.select","fkcolumn":"orderPaymentID"},"newFlag":{"name":"newFlag","persistent":false,"type":"boolean"},"validations":{"name":"validations","persistent":false,"type":"struct"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"},"accountPaymentType":{"name":"accountPaymentType","fieldtype":"many-to-one","hb_optionssmartlistdata":"f:parentType.systemCode=accountPaymentType","cfc":"Type","fkcolumn":"accountPaymentTypeID"},"createdByAccountID":{"name":"createdByAccountID","ormtype":"string","hb_populateenabled":false},"remoteID":{"name":"remoteID","ormtype":"string"},"attributeValuesByAttributeIDStruct":{"name":"attributeValuesByAttributeIDStruct","persistent":false,"type":"struct"},"modifiedByAccountID":{"name":"modifiedByAccountID","ormtype":"string","hb_populateenabled":false},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"assignedAttributeSetSmartList":{"name":"assignedAttributeSetSmartList","persistent":false,"type":"any"},"modifiedByAccount":{"name":"modifiedByAccount","persistent":false},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"simpleRepresentation":{"name":"simpleRepresentation","persistent":false,"type":"string"},"createdByAccount":{"name":"createdByAccount","persistent":false},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"persistableErrors":{"name":"persistableErrors","persistent":false,"type":"array"},"amount":{"name":"amount","ormtype":"big_decimal","notnull":true},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"encryptedPropertiesExistFlag":{"name":"encryptedPropertiesExistFlag","persistent":false,"type":"boolean"},"rollbackProcessedFlag":{"name":"rollbackProcessedFlag","persistent":false,"type":"boolean"},"attributeValuesByAttributeCodeStruct":{"name":"attributeValuesByAttributeCodeStruct","persistent":false,"type":"struct"},"accountPayment":{"name":"accountPayment","fieldtype":"many-to-one","cfc":"AccountPayment","hb_optionsnullrbkey":"define.select","fkcolumn":"accountPaymentID"}};
                	entities['AccountPaymentApplied'].className = 'AccountPaymentApplied';
                	validations['AccountPaymentApplied'] = {"properties":{}};
                	defaultValues['AccountPaymentApplied'] = {
                	accountPaymentAppliedID:'',
										amount:null,
									remoteID:null,
									createdDateTime:'',
										createdByAccountID:null,
									modifiedDateTime:'',
										modifiedByAccountID:null,
									
						z:''
	                };
                
                	entities['PhysicalCountItem'] = {"createdDateTime":{"name":"createdDateTime","ormtype":"timestamp","hb_populateenabled":false},"emailTemplates":{"name":"emailTemplates","persistent":false,"type":"struct"},"printTemplates":{"name":"printTemplates","persistent":false,"type":"struct"},"skuCode":{"index":"PI_SKUCODE","name":"skuCode","ormtype":"string"},"processObjects":{"name":"processObjects","persistent":false,"type":"struct"},"settingValueFormatted":{"name":"settingValueFormatted","persistent":false,"type":"any"},"auditSmartList":{"name":"auditSmartList","persistent":false,"type":"any"},"modifiedDateTime":{"name":"modifiedDateTime","ormtype":"timestamp","hb_populateenabled":false},"stock":{"name":"stock","fieldtype":"many-to-one","cfc":"Stock","fkcolumn":"stockID"},"newFlag":{"name":"newFlag","persistent":false,"type":"boolean"},"validations":{"name":"validations","persistent":false,"type":"struct"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"},"createdByAccountID":{"name":"createdByAccountID","ormtype":"string","hb_populateenabled":false},"remoteID":{"name":"remoteID","ormtype":"string"},"modifiedByAccountID":{"name":"modifiedByAccountID","ormtype":"string","hb_populateenabled":false},"attributeValuesByAttributeIDStruct":{"name":"attributeValuesByAttributeIDStruct","persistent":false,"type":"struct"},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"physicalCount":{"name":"physicalCount","fieldtype":"many-to-one","cfc":"PhysicalCount","fkcolumn":"physicalCountID"},"assignedAttributeSetSmartList":{"name":"assignedAttributeSetSmartList","persistent":false,"type":"any"},"quantity":{"name":"quantity","ormtype":"integer"},"physicalStatusTypeSystemCode":{"name":"physicalStatusTypeSystemCode","persistent":false},"modifiedByAccount":{"name":"modifiedByAccount","persistent":false},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"createdByAccount":{"name":"createdByAccount","persistent":false},"simpleRepresentation":{"name":"simpleRepresentation","persistent":false,"type":"string"},"sku":{"name":"sku","fieldtype":"many-to-one","persistent":false,"cfc":"Sku","fkcolumn":"skuID"},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"persistableErrors":{"name":"persistableErrors","persistent":false,"type":"array"},"physicalCountItemID":{"generator":"uuid","name":"physicalCountItemID","fieldtype":"id","ormtype":"string","unsavedvalue":"","length":32,"default":""},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"encryptedPropertiesExistFlag":{"name":"encryptedPropertiesExistFlag","persistent":false,"type":"boolean"},"rollbackProcessedFlag":{"name":"rollbackProcessedFlag","persistent":false,"type":"boolean"},"attributeValuesByAttributeCodeStruct":{"name":"attributeValuesByAttributeCodeStruct","persistent":false,"type":"struct"},"countPostDateTime":{"name":"countPostDateTime","ormtype":"timestamp"}};
                	entities['PhysicalCountItem'].className = 'PhysicalCountItem';
                	validations['PhysicalCountItem'] = {"properties":{"physicalStatusTypeSystemCode":[{"inList":"pstOpen","contexts":"delete,edit"}],"physicalCount":[{"required":true,"contexts":"save"}],"quantity":[{"required":true,"contexts":"save"}]}};
                	defaultValues['PhysicalCountItem'] = {
                	physicalCountItemID:'',
										quantity:null,
									skuCode:null,
									countPostDateTime:null,
									remoteID:null,
									createdDateTime:'',
										createdByAccountID:null,
									modifiedDateTime:'',
										modifiedByAccountID:null,
									
						z:''
	                };
                
                	entities['ShippingMethodRate'] = {"shippingIntegrationMethodOptions":{"name":"shippingIntegrationMethodOptions","persistent":false,"type":"array"},"emailTemplates":{"name":"emailTemplates","persistent":false,"type":"struct"},"createdDateTime":{"name":"createdDateTime","ormtype":"timestamp","hb_populateenabled":false},"printTemplates":{"name":"printTemplates","persistent":false,"type":"struct"},"processObjects":{"name":"processObjects","persistent":false,"type":"struct"},"sortOrder":{"sortcontext":"shippingMethod","name":"sortOrder","ormtype":"integer"},"settingValueFormatted":{"name":"settingValueFormatted","persistent":false,"type":"any"},"auditSmartList":{"name":"auditSmartList","persistent":false,"type":"any"},"shippingIntegrationMethod":{"name":"shippingIntegrationMethod","ormtype":"string"},"modifiedDateTime":{"name":"modifiedDateTime","ormtype":"timestamp","hb_populateenabled":false},"shippingMethodRateName":{"name":"shippingMethodRateName","persistent":false,"type":"string"},"newFlag":{"name":"newFlag","persistent":false,"type":"boolean"},"validations":{"name":"validations","persistent":false,"type":"struct"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"},"shipmentWeightRange":{"name":"shipmentWeightRange","persistent":false,"type":"string"},"addressZoneOptions":{"name":"addressZoneOptions","persistent":false,"type":"array"},"createdByAccountID":{"name":"createdByAccountID","ormtype":"string","hb_populateenabled":false},"remoteID":{"name":"remoteID","ormtype":"string"},"attributeValuesByAttributeIDStruct":{"name":"attributeValuesByAttributeIDStruct","persistent":false,"type":"struct"},"modifiedByAccountID":{"name":"modifiedByAccountID","ormtype":"string","hb_populateenabled":false},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"shippingMethodRateID":{"generator":"uuid","name":"shippingMethodRateID","fieldtype":"id","ormtype":"string","unsavedvalue":"","length":32,"default":""},"assignedAttributeSetSmartList":{"name":"assignedAttributeSetSmartList","persistent":false,"type":"any"},"modifiedByAccount":{"name":"modifiedByAccount","persistent":false},"defaultAmount":{"hb_nullrbkey":"define.0","name":"defaultAmount","ormtype":"big_decimal","hb_formattype":"currency"},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"createdByAccount":{"name":"createdByAccount","persistent":false},"simpleRepresentation":{"name":"simpleRepresentation","persistent":false,"type":"string"},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"minimumShipmentItemPrice":{"hb_nullrbkey":"define.0","name":"minimumShipmentItemPrice","ormtype":"big_decimal"},"persistableErrors":{"name":"persistableErrors","persistent":false,"type":"array"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"encryptedPropertiesExistFlag":{"name":"encryptedPropertiesExistFlag","persistent":false,"type":"boolean"},"maximumShipmentWeight":{"hb_nullrbkey":"define.unlimited","name":"maximumShipmentWeight","ormtype":"float"},"rollbackProcessedFlag":{"name":"rollbackProcessedFlag","persistent":false,"type":"boolean"},"shippingMethod":{"name":"shippingMethod","fieldtype":"many-to-one","cfc":"ShippingMethod","fkcolumn":"shippingMethodID"},"attributeValuesByAttributeCodeStruct":{"name":"attributeValuesByAttributeCodeStruct","persistent":false,"type":"struct"},"addressZone":{"hb_nullrbkey":"define.all","name":"addressZone","fieldtype":"many-to-one","cfc":"AddressZone","fkcolumn":"addressZoneID"},"shippingMethodOptions":{"inverse":true,"name":"shippingMethodOptions","fieldtype":"one-to-many","singularname":"shippingMethodOption","cascade":"delete-orphan","lazy":"extra","cfc":"ShippingMethodOption","fkcolumn":"shippingMethodRateID","type":"array"},"activeFlag":{"name":"activeFlag","ormtype":"boolean"},"shippingIntegration":{"name":"shippingIntegration","fieldtype":"many-to-one","cfc":"Integration","fkcolumn":"shippingIntegrationID"},"minimumShipmentWeight":{"hb_nullrbkey":"define.0","name":"minimumShipmentWeight","ormtype":"float"},"maximumShipmentItemPrice":{"hb_nullrbkey":"define.unlimited","name":"maximumShipmentItemPrice","ormtype":"big_decimal"},"shipmentItemPriceRange":{"name":"shipmentItemPriceRange","persistent":false,"type":"string"}};
                	entities['ShippingMethodRate'].className = 'ShippingMethodRate';
                	validations['ShippingMethodRate'] = {"properties":{"defaultAmount":[{"dataType":"numeric","contexts":"save"}],"minimumShipmentItemPrice":[{"dataType":"numeric","contexts":"save"}],"minimumShipmentWeight":[{"dataType":"numeric","contexts":"save"}],"maximumShipmentItemPrice":[{"dataType":"numeric","contexts":"save"}],"maximumShipmentWeight":[{"dataType":"numeric","contexts":"save"}]}};
                	defaultValues['ShippingMethodRate'] = {
                	shippingMethodRateID:'',
										sortOrder:null,
									minimumShipmentWeight:null,
									maximumShipmentWeight:null,
									minimumShipmentItemPrice:null,
									maximumShipmentItemPrice:null,
									defaultAmount:null,
									shippingIntegrationMethod:null,
									activeFlag:1,
									remoteID:null,
									createdDateTime:'',
										createdByAccountID:null,
									modifiedDateTime:'',
										modifiedByAccountID:null,
									
						z:''
	                };
                
                	entities['State'] = {"createdDateTime":{"name":"createdDateTime","ormtype":"timestamp","hb_populateenabled":false},"emailTemplates":{"name":"emailTemplates","persistent":false,"type":"struct"},"printTemplates":{"name":"printTemplates","persistent":false,"type":"struct"},"processObjects":{"name":"processObjects","persistent":false,"type":"struct"},"settingValueFormatted":{"name":"settingValueFormatted","persistent":false,"type":"any"},"auditSmartList":{"name":"auditSmartList","persistent":false,"type":"any"},"modifiedDateTime":{"name":"modifiedDateTime","ormtype":"timestamp","hb_populateenabled":false},"newFlag":{"name":"newFlag","persistent":false,"type":"boolean"},"validations":{"name":"validations","persistent":false,"type":"struct"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"},"stateCode":{"name":"stateCode","fieldtype":"id","ormtype":"string","length":40},"createdByAccountID":{"name":"createdByAccountID","ormtype":"string","hb_populateenabled":false},"attributeValuesByAttributeIDStruct":{"name":"attributeValuesByAttributeIDStruct","persistent":false,"type":"struct"},"modifiedByAccountID":{"name":"modifiedByAccountID","ormtype":"string","hb_populateenabled":false},"stateName":{"name":"stateName","ormtype":"string"},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"assignedAttributeSetSmartList":{"name":"assignedAttributeSetSmartList","persistent":false,"type":"any"},"modifiedByAccount":{"name":"modifiedByAccount","persistent":false},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"simpleRepresentation":{"name":"simpleRepresentation","persistent":false,"type":"string"},"createdByAccount":{"name":"createdByAccount","persistent":false},"country":{"update":false,"name":"country","fieldtype":"many-to-one","insert":false,"cfc":"Country","fkcolumn":"countryCode"},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"persistableErrors":{"name":"persistableErrors","persistent":false,"type":"array"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"encryptedPropertiesExistFlag":{"name":"encryptedPropertiesExistFlag","persistent":false,"type":"boolean"},"rollbackProcessedFlag":{"name":"rollbackProcessedFlag","persistent":false,"type":"boolean"},"attributeValuesByAttributeCodeStruct":{"name":"attributeValuesByAttributeCodeStruct","persistent":false,"type":"struct"},"countryCode":{"name":"countryCode","fieldtype":"id","ormtype":"string","length":2}};
                	entities['State'].className = 'State';
                	validations['State'] = {"properties":{"countryCode":[{"required":true,"contexts":"save"}],"stateName":[{"required":true,"contexts":"save"}],"stateCode":[{"required":true,"contexts":"save"}]}};
                	defaultValues['State'] = {
                	stateCode:null,
									countryCode:null,
									stateName:null,
									createdDateTime:'',
										createdByAccountID:null,
									modifiedDateTime:'',
										modifiedByAccountID:null,
									
						z:''
	                };
                
                	entities['PromotionPeriod'] = {"createdDateTime":{"name":"createdDateTime","ormtype":"timestamp","hb_populateenabled":false},"promotionQualifiers":{"inverse":true,"name":"promotionQualifiers","fieldtype":"one-to-many","singularname":"promotionQualifier","cascade":"all-delete-orphan","cfc":"PromotionQualifier","fkcolumn":"promotionPeriodID"},"emailTemplates":{"name":"emailTemplates","persistent":false,"type":"struct"},"currentFlag":{"name":"currentFlag","persistent":false,"type":"boolean"},"printTemplates":{"name":"printTemplates","persistent":false,"type":"struct"},"processObjects":{"name":"processObjects","persistent":false,"type":"struct"},"settingValueFormatted":{"name":"settingValueFormatted","persistent":false,"type":"any"},"auditSmartList":{"name":"auditSmartList","persistent":false,"type":"any"},"modifiedDateTime":{"name":"modifiedDateTime","ormtype":"timestamp","hb_populateenabled":false},"promotionRewards":{"inverse":true,"name":"promotionRewards","fieldtype":"one-to-many","singularname":"promotionReward","cascade":"all-delete-orphan","cfc":"PromotionReward","fkcolumn":"promotionPeriodID"},"newFlag":{"name":"newFlag","persistent":false,"type":"boolean"},"validations":{"name":"validations","persistent":false,"type":"struct"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"},"createdByAccountID":{"name":"createdByAccountID","ormtype":"string","hb_populateenabled":false},"remoteID":{"name":"remoteID","ormtype":"string"},"modifiedByAccountID":{"name":"modifiedByAccountID","ormtype":"string","hb_populateenabled":false},"attributeValuesByAttributeIDStruct":{"name":"attributeValuesByAttributeIDStruct","persistent":false,"type":"struct"},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"startDateTime":{"hb_nullrbkey":"define.forever","name":"startDateTime","ormtype":"timestamp","hb_formattype":"dateTime"},"promotionPeriodID":{"generator":"uuid","name":"promotionPeriodID","fieldtype":"id","ormtype":"string","unsavedvalue":"","length":32,"default":""},"assignedAttributeSetSmartList":{"name":"assignedAttributeSetSmartList","persistent":false,"type":"any"},"maximumUseCount":{"hb_nullrbkey":"define.unlimited","name":"maximumUseCount","ormtype":"integer","notnull":false},"modifiedByAccount":{"name":"modifiedByAccount","persistent":false},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"createdByAccount":{"name":"createdByAccount","persistent":false},"simpleRepresentation":{"name":"simpleRepresentation","persistent":false,"type":"string"},"maximumAccountUseCount":{"hb_nullrbkey":"define.unlimited","name":"maximumAccountUseCount","ormtype":"integer","notnull":false},"promotion":{"name":"promotion","fieldtype":"many-to-one","fetch":"join","cfc":"Promotion","fkcolumn":"promotionID"},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"persistableErrors":{"name":"persistableErrors","persistent":false,"type":"array"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"encryptedPropertiesExistFlag":{"name":"encryptedPropertiesExistFlag","persistent":false,"type":"boolean"},"rollbackProcessedFlag":{"name":"rollbackProcessedFlag","persistent":false,"type":"boolean"},"attributeValuesByAttributeCodeStruct":{"name":"attributeValuesByAttributeCodeStruct","persistent":false,"type":"struct"},"endDateTime":{"hb_nullrbkey":"define.forever","name":"endDateTime","ormtype":"timestamp","hb_formattype":"dateTime"}};
                	entities['PromotionPeriod'].className = 'PromotionPeriod';
                	validations['PromotionPeriod'] = {"properties":{"startDateTime":[{"dataType":"date","contexts":"save"}],"endDateTime":[{"dataType":"date","contexts":"save"},{"contexts":"save","conditions":"needsEndAfterStart","gtDateTimeProperty":"startDateTime"}]},"conditions":{"needsEndAfterStart":{"startDateTime":{"required":true},"endDateTime":{"required":true}}}};
                	defaultValues['PromotionPeriod'] = {
                	promotionPeriodID:'',
										startDateTime:null,
									endDateTime:null,
									maximumUseCount:null,
									maximumAccountUseCount:null,
									remoteID:null,
									createdDateTime:'',
										createdByAccountID:null,
									modifiedDateTime:'',
										modifiedByAccountID:null,
									
						z:''
	                };
                
                	entities['StockReceiver'] = {"boxCount":{"name":"boxCount","ormtype":"integer"},"createdDateTime":{"name":"createdDateTime","ormtype":"timestamp","hb_populateenabled":false},"emailTemplates":{"name":"emailTemplates","persistent":false,"type":"struct"},"printTemplates":{"name":"printTemplates","persistent":false,"type":"struct"},"processObjects":{"name":"processObjects","persistent":false,"type":"struct"},"settingValueFormatted":{"name":"settingValueFormatted","persistent":false,"type":"any"},"auditSmartList":{"name":"auditSmartList","persistent":false,"type":"any"},"modifiedDateTime":{"name":"modifiedDateTime","ormtype":"timestamp","hb_populateenabled":false},"order":{"name":"order","fieldtype":"many-to-one","cfc":"Order","fkcolumn":"orderID"},"newFlag":{"name":"newFlag","persistent":false,"type":"boolean"},"validations":{"name":"validations","persistent":false,"type":"struct"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"},"createdByAccountID":{"name":"createdByAccountID","ormtype":"string","hb_populateenabled":false},"receiverType":{"name":"receiverType","ormtype":"string","hb_formattype":"rbKey","notnull":true},"packingSlipNumber":{"name":"packingSlipNumber","ormtype":"string"},"modifiedByAccountID":{"name":"modifiedByAccountID","ormtype":"string","hb_populateenabled":false},"attributeValuesByAttributeIDStruct":{"name":"attributeValuesByAttributeIDStruct","persistent":false,"type":"struct"},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"assignedAttributeSetSmartList":{"name":"assignedAttributeSetSmartList","persistent":false,"type":"any"},"modifiedByAccount":{"name":"modifiedByAccount","persistent":false},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"createdByAccount":{"name":"createdByAccount","persistent":false},"simpleRepresentation":{"name":"simpleRepresentation","persistent":false,"type":"string"},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"vendorOrder":{"name":"vendorOrder","fieldtype":"many-to-one","cfc":"VendorOrder","fkcolumn":"vendorOrderID"},"persistableErrors":{"name":"persistableErrors","persistent":false,"type":"array"},"stockAdjustment":{"name":"stockAdjustment","fieldtype":"many-to-one","cfc":"StockAdjustment","fkcolumn":"stockAdjustmentID"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"encryptedPropertiesExistFlag":{"name":"encryptedPropertiesExistFlag","persistent":false,"type":"boolean"},"rollbackProcessedFlag":{"name":"rollbackProcessedFlag","persistent":false,"type":"boolean"},"attributeValuesByAttributeCodeStruct":{"name":"attributeValuesByAttributeCodeStruct","persistent":false,"type":"struct"},"stockReceiverItems":{"inverse":true,"name":"stockReceiverItems","fieldtype":"one-to-many","singularname":"stockReceiverItem","cascade":"all-delete-orphan","cfc":"StockReceiverItem","fkcolumn":"stockReceiverID"},"stockReceiverID":{"generator":"uuid","name":"stockReceiverID","fieldtype":"id","ormtype":"string","unsavedvalue":"","length":32,"default":""}};
                	entities['StockReceiver'].className = 'StockReceiver';
                	validations['StockReceiver'] = {"properties":{"stockReceiverID":[{"maxLength":0,"contexts":"delete"}]}};
                	defaultValues['StockReceiver'] = {
                	stockReceiverID:'',
										packingSlipNumber:null,
									boxCount:null,
									receiverType:null,
									createdDateTime:'',
										createdByAccountID:null,
									modifiedDateTime:'',
										modifiedByAccountID:null,
									
						z:''
	                };
                
                	entities['StockAdjustmentItem'] = {"createdDateTime":{"name":"createdDateTime","ormtype":"timestamp","hb_populateenabled":false},"emailTemplates":{"name":"emailTemplates","persistent":false,"type":"struct"},"printTemplates":{"name":"printTemplates","persistent":false,"type":"struct"},"processObjects":{"name":"processObjects","persistent":false,"type":"struct"},"settingValueFormatted":{"name":"settingValueFormatted","persistent":false,"type":"any"},"auditSmartList":{"name":"auditSmartList","persistent":false,"type":"any"},"modifiedDateTime":{"name":"modifiedDateTime","ormtype":"timestamp","hb_populateenabled":false},"newFlag":{"name":"newFlag","persistent":false,"type":"boolean"},"validations":{"name":"validations","persistent":false,"type":"struct"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"},"createdByAccountID":{"name":"createdByAccountID","ormtype":"string","hb_populateenabled":false},"stockAdjustmentDeliveryItems":{"inverse":true,"name":"stockAdjustmentDeliveryItems","fieldtype":"one-to-many","singularname":"stockAdjustmentDeliveryItem","cascade":"all-delete-orphan","cfc":"StockAdjustmentDeliveryItem","fkcolumn":"stockAdjustmentItemID","type":"array"},"toStock":{"name":"toStock","fieldtype":"many-to-one","hb_cascadecalculate":true,"cfc":"Stock","fkcolumn":"toStockID"},"modifiedByAccountID":{"name":"modifiedByAccountID","ormtype":"string","hb_populateenabled":false},"attributeValuesByAttributeIDStruct":{"name":"attributeValuesByAttributeIDStruct","persistent":false,"type":"struct"},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"assignedAttributeSetSmartList":{"name":"assignedAttributeSetSmartList","persistent":false,"type":"any"},"quantity":{"name":"quantity","ormtype":"integer","default":0},"modifiedByAccount":{"name":"modifiedByAccount","persistent":false},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"createdByAccount":{"name":"createdByAccount","persistent":false},"simpleRepresentation":{"name":"simpleRepresentation","persistent":false,"type":"string"},"sku":{"name":"sku","fieldtype":"many-to-one","cfc":"Sku","fkcolumn":"skuID"},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"persistableErrors":{"name":"persistableErrors","persistent":false,"type":"array"},"stockAdjustment":{"name":"stockAdjustment","fieldtype":"many-to-one","cfc":"StockAdjustment","fkcolumn":"stockAdjustmentID"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"fromStock":{"name":"fromStock","fieldtype":"many-to-one","hb_cascadecalculate":true,"cfc":"Stock","fkcolumn":"fromStockID"},"encryptedPropertiesExistFlag":{"name":"encryptedPropertiesExistFlag","persistent":false,"type":"boolean"},"rollbackProcessedFlag":{"name":"rollbackProcessedFlag","persistent":false,"type":"boolean"},"attributeValuesByAttributeCodeStruct":{"name":"attributeValuesByAttributeCodeStruct","persistent":false,"type":"struct"},"stockReceiverItems":{"inverse":true,"name":"stockReceiverItems","fieldtype":"one-to-many","singularname":"stockReceiverItem","cascade":"all-delete-orphan","cfc":"StockReceiverItem","fkcolumn":"stockAdjustmentItemID","type":"array"},"stockAdjustmentItemID":{"generator":"uuid","name":"stockAdjustmentItemID","fieldtype":"id","ormtype":"string","unsavedvalue":"","length":32,"default":""}};
                	entities['StockAdjustmentItem'].className = 'StockAdjustmentItem';
                	validations['StockAdjustmentItem'] = {"properties":{"quantity":[{"dataType":"numeric","minValue":0,"required":true,"contexts":"save"}]}};
                	defaultValues['StockAdjustmentItem'] = {
                	stockAdjustmentItemID:'',
										quantity:0,
									createdDateTime:'',
										createdByAccountID:null,
									modifiedDateTime:'',
										modifiedByAccountID:null,
									
						z:''
	                };
                
                	entities['SkuCurrency'] = {"createdDateTime":{"name":"createdDateTime","ormtype":"timestamp","hb_populateenabled":false},"price":{"name":"price","ormtype":"big_decimal","hb_formattype":"currency","hb_rbkey":"entity.sku.price"},"emailTemplates":{"name":"emailTemplates","persistent":false,"type":"struct"},"printTemplates":{"name":"printTemplates","persistent":false,"type":"struct"},"processObjects":{"name":"processObjects","persistent":false,"type":"struct"},"settingValueFormatted":{"name":"settingValueFormatted","persistent":false,"type":"any"},"auditSmartList":{"name":"auditSmartList","persistent":false,"type":"any"},"modifiedDateTime":{"name":"modifiedDateTime","ormtype":"timestamp","hb_populateenabled":false},"newFlag":{"name":"newFlag","persistent":false,"type":"boolean"},"validations":{"name":"validations","persistent":false,"type":"struct"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"},"createdByAccountID":{"name":"createdByAccountID","ormtype":"string","hb_populateenabled":false},"listPrice":{"name":"listPrice","ormtype":"big_decimal","hb_formattype":"currency","hb_rbkey":"entity.sku.listPrice","default":0},"remoteID":{"name":"remoteID","ormtype":"string"},"modifiedByAccountID":{"name":"modifiedByAccountID","ormtype":"string","hb_populateenabled":false},"attributeValuesByAttributeIDStruct":{"name":"attributeValuesByAttributeIDStruct","persistent":false,"type":"struct"},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"assignedAttributeSetSmartList":{"name":"assignedAttributeSetSmartList","persistent":false,"type":"any"},"modifiedByAccount":{"name":"modifiedByAccount","persistent":false},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"createdByAccount":{"name":"createdByAccount","persistent":false},"simpleRepresentation":{"name":"simpleRepresentation","persistent":false,"type":"string"},"skuCurrencyID":{"generator":"uuid","name":"skuCurrencyID","fieldtype":"id","ormtype":"string","unsavedvalue":"","length":32,"default":""},"sku":{"name":"sku","fieldtype":"many-to-one","cfc":"Sku","fkcolumn":"skuID"},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"persistableErrors":{"name":"persistableErrors","persistent":false,"type":"array"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"renewalPrice":{"name":"renewalPrice","ormtype":"big_decimal","hb_formattype":"currency","hb_rbkey":"entity.sku.renewalPrice","default":0},"encryptedPropertiesExistFlag":{"name":"encryptedPropertiesExistFlag","persistent":false,"type":"boolean"},"rollbackProcessedFlag":{"name":"rollbackProcessedFlag","persistent":false,"type":"boolean"},"attributeValuesByAttributeCodeStruct":{"name":"attributeValuesByAttributeCodeStruct","persistent":false,"type":"struct"},"currency":{"name":"currency","fieldtype":"many-to-one","cfc":"Currency","fkcolumn":"currencyCode"},"currencyCode":{"update":false,"name":"currencyCode","insert":false}};
                	entities['SkuCurrency'].className = 'SkuCurrency';
                	validations['SkuCurrency'] = {"properties":{"price":[{"dataType":"numeric","minValue":0,"required":true,"contexts":"save"}],"listPrice":[{"dataType":"numeric","minValue":0,"contexts":"save"}],"renewalPrice":[{"dataType":"numeric","minValue":0,"contexts":"save"}]}};
                	defaultValues['SkuCurrency'] = {
                	skuCurrencyID:'',
										price:null,
									renewalPrice:0,
									listPrice:0,
									currencyCode:null,
									remoteID:null,
									createdDateTime:'',
										createdByAccountID:null,
									modifiedDateTime:'',
										modifiedByAccountID:null,
									
						z:''
	                };
                
                	entities['PrintTemplate'] = {"printTemplateID":{"generator":"uuid","name":"printTemplateID","fieldtype":"id","ormtype":"string","unsavedvalue":"","length":32,"default":""},"createdDateTime":{"name":"createdDateTime","ormtype":"timestamp","hb_populateenabled":false},"emailTemplates":{"name":"emailTemplates","persistent":false,"type":"struct"},"printTemplates":{"name":"printTemplates","persistent":false,"type":"struct"},"processObjects":{"name":"processObjects","persistent":false,"type":"struct"},"settingValueFormatted":{"name":"settingValueFormatted","persistent":false,"type":"any"},"auditSmartList":{"name":"auditSmartList","persistent":false,"type":"any"},"modifiedDateTime":{"name":"modifiedDateTime","ormtype":"timestamp","hb_populateenabled":false},"printContent":{"name":"printContent","ormtype":"string","length":4000,"hb_formfieldtype":"wysiwyg"},"newFlag":{"name":"newFlag","persistent":false,"type":"boolean"},"validations":{"name":"validations","persistent":false,"type":"struct"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"},"createdByAccountID":{"name":"createdByAccountID","ormtype":"string","hb_populateenabled":false},"remoteID":{"name":"remoteID","ormtype":"string"},"printTemplateFileOptions":{"name":"printTemplateFileOptions","persistent":false},"modifiedByAccountID":{"name":"modifiedByAccountID","ormtype":"string","hb_populateenabled":false},"attributeValuesByAttributeIDStruct":{"name":"attributeValuesByAttributeIDStruct","persistent":false,"type":"struct"},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"assignedAttributeSetSmartList":{"name":"assignedAttributeSetSmartList","persistent":false,"type":"any"},"printTemplateFile":{"name":"printTemplateFile","ormtype":"string","hb_formfieldtype":"select"},"printTemplateName":{"name":"printTemplateName","ormtype":"string"},"modifiedByAccount":{"name":"modifiedByAccount","persistent":false},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"createdByAccount":{"name":"createdByAccount","persistent":false},"simpleRepresentation":{"name":"simpleRepresentation","persistent":false,"type":"string"},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"persistableErrors":{"name":"persistableErrors","persistent":false,"type":"array"},"printTemplateObject":{"name":"printTemplateObject","ormtype":"string","hb_formfieldtype":"select"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"encryptedPropertiesExistFlag":{"name":"encryptedPropertiesExistFlag","persistent":false,"type":"boolean"},"printTemplateObjectOptions":{"name":"printTemplateObjectOptions","persistent":false},"rollbackProcessedFlag":{"name":"rollbackProcessedFlag","persistent":false,"type":"boolean"},"attributeValuesByAttributeCodeStruct":{"name":"attributeValuesByAttributeCodeStruct","persistent":false,"type":"struct"}};
                	entities['PrintTemplate'].className = 'PrintTemplate';
                	validations['PrintTemplate'] = {"properties":{}};
                	defaultValues['PrintTemplate'] = {
                	printTemplateID:'',
										printTemplateName:null,
									printTemplateObject:null,
									printTemplateFile:null,
									printContent:null,
									remoteID:null,
									createdDateTime:'',
										createdByAccountID:null,
									modifiedDateTime:'',
										modifiedByAccountID:null,
									
						z:''
	                };
                
                	entities['Site'] = {"emailTemplates":{"name":"emailTemplates","persistent":false,"type":"struct"},"createdDateTime":{"name":"createdDateTime","ormtype":"timestamp","hb_populateenabled":false},"printTemplates":{"name":"printTemplates","persistent":false,"type":"struct"},"processObjects":{"name":"processObjects","persistent":false,"type":"struct"},"assetsPath":{"name":"assetsPath","persistent":false},"settingValueFormatted":{"name":"settingValueFormatted","persistent":false,"type":"any"},"auditSmartList":{"name":"auditSmartList","persistent":false,"type":"any"},"modifiedDateTime":{"name":"modifiedDateTime","ormtype":"timestamp","hb_populateenabled":false},"domainNames":{"name":"domainNames","ormtype":"string"},"newFlag":{"name":"newFlag","persistent":false,"type":"boolean"},"validations":{"name":"validations","persistent":false,"type":"struct"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"},"createdByAccountID":{"name":"createdByAccountID","ormtype":"string","hb_populateenabled":false},"siteCode":{"index":"PI_SITECODE","unique":true,"name":"siteCode","ormtype":"string"},"app":{"name":"app","fieldtype":"many-to-one","hb_populateenabled":"public","hb_cascadecalculate":true,"cfc":"App","fkcolumn":"appID"},"remoteID":{"name":"remoteID","ormtype":"string"},"cmsSiteID":{"index":"RI_CMSSITEID","name":"cmsSiteID","ormtype":"string"},"siteID":{"generator":"uuid","name":"siteID","fieldtype":"id","ormtype":"string","unsavedvalue":"","length":32,"default":""},"modifiedByAccountID":{"name":"modifiedByAccountID","ormtype":"string","hb_populateenabled":false},"attributeValuesByAttributeIDStruct":{"name":"attributeValuesByAttributeIDStruct","persistent":false,"type":"struct"},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"assignedAttributeSetSmartList":{"name":"assignedAttributeSetSmartList","persistent":false,"type":"any"},"modifiedByAccount":{"name":"modifiedByAccount","persistent":false},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"createdByAccount":{"name":"createdByAccount","persistent":false},"simpleRepresentation":{"name":"simpleRepresentation","persistent":false,"type":"string"},"contents":{"inverse":true,"name":"contents","fieldtype":"one-to-many","singularname":"content","cascade":"all-delete-orphan","lazy":"extra","cfc":"Content","fkcolumn":"siteID","type":"array"},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"persistableErrors":{"name":"persistableErrors","persistent":false,"type":"array"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"encryptedPropertiesExistFlag":{"name":"encryptedPropertiesExistFlag","persistent":false,"type":"boolean"},"rollbackProcessedFlag":{"name":"rollbackProcessedFlag","persistent":false,"type":"boolean"},"allowAdminAccessFlag":{"name":"allowAdminAccessFlag","ormtype":"boolean"},"templatesPath":{"name":"templatesPath","persistent":false},"attributeValuesByAttributeCodeStruct":{"name":"attributeValuesByAttributeCodeStruct","persistent":false,"type":"struct"},"siteName":{"name":"siteName","ormtype":"string"},"sitePath":{"name":"sitePath","persistent":false}};
                	entities['Site'].className = 'Site';
                	validations['Site'] = {"properties":{"siteCode":[{"required":true,"contexts":"save","conditions":"isSlatwallCMS"}],"app":[{"required":true,"contexts":"save","conditions":"isSlatwallCMS"}],"contents":[{"maxCollection":0,"contexts":"delete"}],"siteID":[{"required":true,"contexts":"save","conditions":"notSlatwallCMS"}],"domainNames":[{"required":true,"contexts":"save","conditions":"isSlatwallCMS"}]},"conditions":{"isSlatwallCMS":{"app.integration.integrationPackage":{"eq":"slatwallcms"}},"notSlatwallCMS":{"app.integration.integrationPackage":{"neq":"slatwallcms"}}}};
                	defaultValues['Site'] = {
                	siteID:'',
										siteName:null,
									siteCode:null,
									domainNames:null,
									allowAdminAccessFlag:0,
									cmsSiteID:null,
									remoteID:null,
									createdDateTime:'',
										createdByAccountID:null,
									modifiedDateTime:'',
										modifiedByAccountID:null,
									
						z:''
	                };
                
                	entities['SkuBundle'] = {"createdDateTime":{"name":"createdDateTime","ormtype":"timestamp"},"emailTemplates":{"name":"emailTemplates","persistent":false,"type":"struct"},"printTemplates":{"name":"printTemplates","persistent":false,"type":"struct"},"processObjects":{"name":"processObjects","persistent":false,"type":"struct"},"settingValueFormatted":{"name":"settingValueFormatted","persistent":false,"type":"any"},"auditSmartList":{"name":"auditSmartList","persistent":false,"type":"any"},"modifiedDateTime":{"name":"modifiedDateTime","ormtype":"timestamp"},"skuBundleID":{"generator":"uuid","name":"skuBundleID","fieldtype":"id","ormtype":"string","unsavedvalue":"","length":32,"default":""},"newFlag":{"name":"newFlag","persistent":false,"type":"boolean"},"validations":{"name":"validations","persistent":false,"type":"struct"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"},"bundledQuantity":{"name":"bundledQuantity","ormtype":"integer"},"remoteID":{"name":"remoteID","ormtype":"string"},"attributeValuesByAttributeIDStruct":{"name":"attributeValuesByAttributeIDStruct","persistent":false,"type":"struct"},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"assignedAttributeSetSmartList":{"name":"assignedAttributeSetSmartList","persistent":false,"type":"any"},"modifiedByAccount":{"name":"modifiedByAccount","persistent":false},"bundledSku":{"name":"bundledSku","fieldtype":"many-to-one","cfc":"Sku","fkcolumn":"bundledSkuID"},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"createdByAccount":{"name":"createdByAccount","persistent":false},"simpleRepresentation":{"name":"simpleRepresentation","persistent":false,"type":"string"},"sku":{"name":"sku","fieldtype":"many-to-one","cfc":"Sku","fkcolumn":"skuID"},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"persistableErrors":{"name":"persistableErrors","persistent":false,"type":"array"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"encryptedPropertiesExistFlag":{"name":"encryptedPropertiesExistFlag","persistent":false,"type":"boolean"},"rollbackProcessedFlag":{"name":"rollbackProcessedFlag","persistent":false,"type":"boolean"},"attributeValuesByAttributeCodeStruct":{"name":"attributeValuesByAttributeCodeStruct","persistent":false,"type":"struct"}};
                	entities['SkuBundle'].className = 'SkuBundle';
                	validations['SkuBundle'] = {"properties":{"bundledQuantity":[{"dataType":"numeric","required":true}]}};
                	defaultValues['SkuBundle'] = {
                	skuBundleID:'',
										bundledQuantity:null,
									remoteID:null,
									createdDateTime:'',
										modifiedDateTime:'',
										
						z:''
	                };
                
                	entities['AccountPaymentMethod'] = {"createdDateTime":{"name":"createdDateTime","ormtype":"timestamp","hb_populateenabled":false},"emailTemplates":{"name":"emailTemplates","persistent":false,"type":"struct"},"creditCardNumberEncryptedDateTime":{"name":"creditCardNumberEncryptedDateTime","ormtype":"timestamp","hb_auditable":false,"column":"creditCardNumberEncryptDT"},"expirationMonth":{"name":"expirationMonth","ormtype":"string","hb_populateenabled":"public","hb_formfieldtype":"select"},"settingValueFormatted":{"name":"settingValueFormatted","persistent":false,"type":"any"},"auditSmartList":{"name":"auditSmartList","persistent":false,"type":"any"},"modifiedDateTime":{"name":"modifiedDateTime","ormtype":"timestamp","hb_populateenabled":false},"nameOnCreditCard":{"name":"nameOnCreditCard","ormtype":"string","hb_populateenabled":"public"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"},"account":{"name":"account","fieldtype":"many-to-one","cfc":"Account","hb_optionsnullrbkey":"define.select","fkcolumn":"accountID"},"creditCardNumberEncrypted":{"name":"creditCardNumberEncrypted","ormtype":"string","hb_auditable":false},"bankRoutingNumber":{"name":"bankRoutingNumber","hb_populateenabled":"public","persistent":false},"securityCode":{"name":"securityCode","hb_populateenabled":"public","persistent":false},"remoteID":{"name":"remoteID","ormtype":"string"},"creditCardNumber":{"name":"creditCardNumber","hb_populateenabled":"public","persistent":false},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"modifiedByAccount":{"name":"modifiedByAccount","persistent":false},"createdByAccount":{"name":"createdByAccount","persistent":false},"simpleRepresentation":{"name":"simpleRepresentation","persistent":false,"type":"string"},"companyPaymentMethodFlag":{"name":"companyPaymentMethodFlag","ormtype":"boolean","hb_populateenabled":"public"},"paymentTransactions":{"inverse":true,"name":"paymentTransactions","fieldtype":"one-to-many","singularname":"paymentTransaction","cascade":"all","cfc":"PaymentTransaction","fkcolumn":"accountPaymentMethodID","type":"array"},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"giftCardNumberEncrypted":{"name":"giftCardNumberEncrypted","ormtype":"string"},"expirationYear":{"name":"expirationYear","ormtype":"string","hb_populateenabled":"public","hb_formfieldtype":"select"},"rollbackProcessedFlag":{"name":"rollbackProcessedFlag","persistent":false,"type":"boolean"},"attributeValuesByAttributeCodeStruct":{"name":"attributeValuesByAttributeCodeStruct","persistent":false,"type":"struct"},"accountPaymentMethodName":{"name":"accountPaymentMethodName","ormtype":"string","hb_populateenabled":"public"},"creditCardLastFour":{"name":"creditCardLastFour","ormtype":"string"},"creditCardType":{"name":"creditCardType","ormtype":"string"},"paymentMethodOptions":{"name":"paymentMethodOptions","persistent":false},"printTemplates":{"name":"printTemplates","persistent":false,"type":"struct"},"processObjects":{"name":"processObjects","persistent":false,"type":"struct"},"bankAccountNumberEncrypted":{"name":"bankAccountNumberEncrypted","ormtype":"string"},"newFlag":{"name":"newFlag","persistent":false,"type":"boolean"},"validations":{"name":"validations","persistent":false,"type":"struct"},"billingAddress":{"name":"billingAddress","fieldtype":"many-to-one","hb_populateenabled":"public","cfc":"Address","hb_optionsnullrbkey":"define.select","fkcolumn":"billingAddressID"},"billingAccountAddress":{"name":"billingAccountAddress","fieldtype":"many-to-one","hb_populateenabled":"public","cfc":"AccountAddress","hb_optionsnullrbkey":"define.select","fkcolumn":"billingAccountAddressID"},"createdByAccountID":{"name":"createdByAccountID","ormtype":"string","hb_populateenabled":false},"creditCardNumberEncryptedGenerator":{"name":"creditCardNumberEncryptedGenerator","ormtype":"string","hb_auditable":false,"column":"creditCardNumberEncryptGen"},"providerToken":{"name":"providerToken","ormtype":"string"},"modifiedByAccountID":{"name":"modifiedByAccountID","ormtype":"string","hb_populateenabled":false},"attributeValuesByAttributeIDStruct":{"name":"attributeValuesByAttributeIDStruct","persistent":false,"type":"struct"},"accountPaymentMethodID":{"generator":"uuid","name":"accountPaymentMethodID","fieldtype":"id","ormtype":"string","unsavedvalue":"","length":32,"default":""},"paymentMethodOptionsSmartList":{"name":"paymentMethodOptionsSmartList","persistent":false},"assignedAttributeSetSmartList":{"name":"assignedAttributeSetSmartList","persistent":false,"type":"any"},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"orderPayments":{"inverse":true,"name":"orderPayments","fieldtype":"one-to-many","singularname":"orderPayment","lazy":"extra","cascade":"all","cfc":"OrderPayment","fkcolumn":"accountPaymentMethodID"},"persistableErrors":{"name":"persistableErrors","persistent":false,"type":"array"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"encryptedPropertiesExistFlag":{"name":"encryptedPropertiesExistFlag","persistent":false,"type":"boolean"},"bankRoutingNumberEncrypted":{"name":"bankRoutingNumberEncrypted","ormtype":"string"},"paymentMethod":{"name":"paymentMethod","fieldtype":"many-to-one","hb_optionsadditionalproperties":"paymentMethodType","hb_populateenabled":"public","hb_optionssmartlistdata":"f:activeFlag=1&f:paymentMethodType=creditCard,termPayment,check,giftCard","cfc":"PaymentMethod","hb_optionsnullrbkey":"define.select","fkcolumn":"paymentMethodID"},"paymentTerm":{"name":"paymentTerm","fieldtype":"many-to-one","fetch":"join","hb_populateenabled":"public","cfc":"PaymentTerm","fkcolumn":"paymentTermID"},"activeFlag":{"name":"activeFlag","ormtype":"boolean"},"giftCardNumber":{"name":"giftCardNumber","hb_populateenabled":"public","persistent":false},"bankAccountNumber":{"name":"bankAccountNumber","hb_populateenabled":"public","persistent":false}};
                	entities['AccountPaymentMethod'].className = 'AccountPaymentMethod';
                	validations['AccountPaymentMethod'] = {"properties":{"paymentMethod":[{"required":true,"contexts":"save"}],"paymentTransactions":[{"maxCollection":0,"contexts":"delete"}],"orderPayments":[{"maxCollection":0,"contexts":"delete"}],"expirationMonth":[{"dataType":"numeric","required":true,"contexts":"save","conditions":"paymentTypeCreditCard"}],"creditCardNumber":[{"dataType":"creditCard","required":true,"contexts":"save","conditions":"paymentTypeCreditCardAndNew,editExistingCreditCardNumber"}],"nameOnCreditCard":[{"required":true,"contexts":"save","conditions":"paymentTypeCreditCard"}],"expirationYear":[{"dataType":"numeric","required":true,"contexts":"save","conditions":"paymentTypeCreditCard"}]},"conditions":{"editExistingCreditCardNumber":{"creditCardNumber":{"minLength":1},"newFlag":{"eq":false},"paymentMethod.paymentMethodType":{"eq":"creditCard"}},"paymentTypeCreditCard":{"paymentMethod.paymentMethodType":{"eq":"creditCard"}},"paymentTypeCreditCardAndNew":{"newFlag":{"eq":true},"paymentMethod.paymentMethodType":{"eq":"creditCard"}}},"populatedPropertyValidation":{"billingAddress":[{"validate":"full"}]}};
                	defaultValues['AccountPaymentMethod'] = {
                	accountPaymentMethodID:'',
										activeFlag:1,
									accountPaymentMethodName:null,
									bankRoutingNumberEncrypted:null,
									bankAccountNumberEncrypted:null,
									companyPaymentMethodFlag:null,
									creditCardNumberEncrypted:null,
									creditCardNumberEncryptedDateTime:null,
									creditCardNumberEncryptedGenerator:null,
									creditCardLastFour:null,
									creditCardType:null,
									expirationMonth:null,
									expirationYear:null,
									giftCardNumberEncrypted:null,
									nameOnCreditCard:null,
									providerToken:null,
									remoteID:null,
									createdDateTime:'',
										createdByAccountID:null,
									modifiedDateTime:'',
										modifiedByAccountID:null,
									
						z:''
	                };
                
                	entities['PostalCode'] = {"state":{"name":"state","fieldtype":"many-to-one","cfc":"State","fkcolumn":"stateCode,countryCode"},"createdDateTime":{"name":"createdDateTime","ormtype":"timestamp","hb_populateenabled":false},"emailTemplates":{"name":"emailTemplates","persistent":false,"type":"struct"},"printTemplates":{"name":"printTemplates","persistent":false,"type":"struct"},"processObjects":{"name":"processObjects","persistent":false,"type":"struct"},"settingValueFormatted":{"name":"settingValueFormatted","persistent":false,"type":"any"},"auditSmartList":{"name":"auditSmartList","persistent":false,"type":"any"},"modifiedDateTime":{"name":"modifiedDateTime","ormtype":"timestamp","hb_populateenabled":false},"newFlag":{"name":"newFlag","persistent":false,"type":"boolean"},"validations":{"name":"validations","persistent":false,"type":"struct"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"},"latitude":{"name":"latitude","ormtype":"string"},"createdByAccountID":{"name":"createdByAccountID","ormtype":"string","hb_populateenabled":false},"postalCode":{"displayname":"Postal Code","name":"postalCode","fieldtype":"id","ormtype":"string"},"attributeValuesByAttributeIDStruct":{"name":"attributeValuesByAttributeIDStruct","persistent":false,"type":"struct"},"modifiedByAccountID":{"name":"modifiedByAccountID","ormtype":"string","hb_populateenabled":false},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"assignedAttributeSetSmartList":{"name":"assignedAttributeSetSmartList","persistent":false,"type":"any"},"modifiedByAccount":{"name":"modifiedByAccount","persistent":false},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"simpleRepresentation":{"name":"simpleRepresentation","persistent":false,"type":"string"},"createdByAccount":{"name":"createdByAccount","persistent":false},"country":{"update":false,"name":"country","fieldtype":"many-to-one","insert":false,"cfc":"Country","fkcolumn":"countryCode"},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"persistableErrors":{"name":"persistableErrors","persistent":false,"type":"array"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"encryptedPropertiesExistFlag":{"name":"encryptedPropertiesExistFlag","persistent":false,"type":"boolean"},"rollbackProcessedFlag":{"name":"rollbackProcessedFlag","persistent":false,"type":"boolean"},"attributeValuesByAttributeCodeStruct":{"name":"attributeValuesByAttributeCodeStruct","persistent":false,"type":"struct"},"longitude":{"name":"longitude","ormtype":"string"},"city":{"name":"city","ormtype":"string"}};
                	entities['PostalCode'].className = 'PostalCode';
                	validations['PostalCode'] = {"properties":{}};
                	defaultValues['PostalCode'] = {
                	postalCode:null,
									city:null,
									latitude:null,
									longitude:null,
									createdDateTime:'',
										createdByAccountID:null,
									modifiedDateTime:'',
										modifiedByAccountID:null,
									
						z:''
	                };
                
                	entities['AccountRelationship'] = {"createdDateTime":{"name":"createdDateTime","ormtype":"timestamp","hb_populateenabled":false},"emailTemplates":{"name":"emailTemplates","persistent":false,"type":"struct"},"printTemplates":{"name":"printTemplates","persistent":false,"type":"struct"},"processObjects":{"name":"processObjects","persistent":false,"type":"struct"},"settingValueFormatted":{"name":"settingValueFormatted","persistent":false,"type":"any"},"auditSmartList":{"name":"auditSmartList","persistent":false,"type":"any"},"modifiedDateTime":{"name":"modifiedDateTime","ormtype":"timestamp","hb_populateenabled":false},"newFlag":{"name":"newFlag","persistent":false,"type":"boolean"},"validations":{"name":"validations","persistent":false,"type":"struct"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"},"account":{"name":"account","fieldtype":"many-to-one","cfc":"Account","hb_optionsnullrbkey":"define.select","fkcolumn":"accountID"},"createdByAccountID":{"name":"createdByAccountID","ormtype":"string","hb_populateenabled":false},"attributeValuesByAttributeIDStruct":{"name":"attributeValuesByAttributeIDStruct","persistent":false,"type":"struct"},"modifiedByAccountID":{"name":"modifiedByAccountID","ormtype":"string","hb_populateenabled":false},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"assignedAttributeSetSmartList":{"name":"assignedAttributeSetSmartList","persistent":false,"type":"any"},"modifiedByAccount":{"name":"modifiedByAccount","persistent":false},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"simpleRepresentation":{"name":"simpleRepresentation","persistent":false,"type":"string"},"createdByAccount":{"name":"createdByAccount","persistent":false},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"persistableErrors":{"name":"persistableErrors","persistent":false,"type":"array"},"relatedAccount":{"name":"relatedAccount","fieldtype":"many-to-one","cfc":"Account","hb_optionsnullrbkey":"define.select","fkcolumn":"relatedAccountID"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"encryptedPropertiesExistFlag":{"name":"encryptedPropertiesExistFlag","persistent":false,"type":"boolean"},"rollbackProcessedFlag":{"name":"rollbackProcessedFlag","persistent":false,"type":"boolean"},"attributeValuesByAttributeCodeStruct":{"name":"attributeValuesByAttributeCodeStruct","persistent":false,"type":"struct"},"relationshipType":{"name":"relationshipType","fieldtype":"many-to-one","hb_optionssmartlistdata":"f:parentType.systemCode=relationshipType","cfc":"Type","hb_optionsnullrbkey":"define.select","fkcolumn":"relationshipTypeID"},"accountRelationshipID":{"generator":"uuid","name":"accountRelationshipID","fieldtype":"id","ormtype":"string","unsavedvalue":"","length":32,"default":""}};
                	entities['AccountRelationship'].className = 'AccountRelationship';
                	validations['AccountRelationship'] = {"properties":{}};
                	defaultValues['AccountRelationship'] = {
                	accountRelationshipID:'',
										createdDateTime:'',
										createdByAccountID:null,
									modifiedDateTime:'',
										modifiedByAccountID:null,
									
						z:''
	                };
                
                	entities['Session'] = {"emailTemplates":{"name":"emailTemplates","persistent":false,"type":"struct"},"createdDateTime":{"name":"createdDateTime","ormtype":"timestamp","hb_populateenabled":false},"printTemplates":{"name":"printTemplates","persistent":false,"type":"struct"},"processObjects":{"name":"processObjects","persistent":false,"type":"struct"},"settingValueFormatted":{"name":"settingValueFormatted","persistent":false,"type":"any"},"auditSmartList":{"name":"auditSmartList","persistent":false,"type":"any"},"order":{"name":"order","fieldtype":"many-to-one","cfc":"Order","fkcolumn":"orderID","type":"any"},"modifiedDateTime":{"name":"modifiedDateTime","ormtype":"timestamp","hb_populateenabled":false},"shippingAddressPostalCode":{"name":"shippingAddressPostalCode","ormtype":"string"},"requestAccount":{"name":"requestAccount","persistent":false,"type":"any"},"newFlag":{"name":"newFlag","persistent":false,"type":"boolean"},"validations":{"name":"validations","persistent":false,"type":"struct"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"},"account":{"name":"account","fieldtype":"many-to-one","fetch":"join","cfc":"Account","fkcolumn":"accountID","type":"any"},"deviceID":{"name":"deviceID","ormtype":"string","default":""},"lastPlacedOrderID":{"name":"lastPlacedOrderID","ormtype":"string"},"accountAuthentication":{"name":"accountAuthentication","fieldtype":"many-to-one","fetch":"join","cfc":"AccountAuthentication","fkcolumn":"accountAuthenticationID"},"rbLocale":{"name":"rbLocale","ormtype":"string"},"attributeValuesByAttributeIDStruct":{"name":"attributeValuesByAttributeIDStruct","persistent":false,"type":"struct"},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"assignedAttributeSetSmartList":{"name":"assignedAttributeSetSmartList","persistent":false,"type":"any"},"sessionID":{"generator":"uuid","name":"sessionID","fieldtype":"id","ormtype":"string","unsavedvalue":"","length":32,"default":""},"modifiedByAccount":{"name":"modifiedByAccount","persistent":false},"lastRequestDateTime":{"name":"lastRequestDateTime","ormtype":"timestamp"},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"createdByAccount":{"name":"createdByAccount","persistent":false},"simpleRepresentation":{"name":"simpleRepresentation","persistent":false,"type":"string"},"lastRequestIPAddress":{"name":"lastRequestIPAddress","ormtype":"string"},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"sessionCookieNPSID":{"name":"sessionCookieNPSID","ormtype":"string","length":64},"persistableErrors":{"name":"persistableErrors","persistent":false,"type":"array"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"encryptedPropertiesExistFlag":{"name":"encryptedPropertiesExistFlag","persistent":false,"type":"boolean"},"rollbackProcessedFlag":{"name":"rollbackProcessedFlag","persistent":false,"type":"boolean"},"attributeValuesByAttributeCodeStruct":{"name":"attributeValuesByAttributeCodeStruct","persistent":false,"type":"struct"},"sessionExpirationDateTime":{"name":"sessionExpirationDateTime","ormtype":"timestamp"},"sessionCookiePSID":{"name":"sessionCookiePSID","ormtype":"string","length":64}};
                	entities['Session'].className = 'Session';
                	validations['Session'] = {"properties":{}};
                	defaultValues['Session'] = {
                	sessionID:'',
										shippingAddressPostalCode:null,
									lastRequestDateTime:null,
									lastRequestIPAddress:null,
									lastPlacedOrderID:null,
									rbLocale:null,
									sessionCookiePSID:null,
									sessionCookieNPSID:null,
									sessionExpirationDateTime:null,
									deviceID:'',
										createdDateTime:'',
										modifiedDateTime:'',
										
						z:''
	                };
                
                	entities['PhysicalCount'] = {"createdDateTime":{"name":"createdDateTime","ormtype":"timestamp","hb_populateenabled":false},"physicalCountItems":{"inverse":true,"name":"physicalCountItems","fieldtype":"one-to-many","singularname":"physicalCountItem","cascade":"all-delete-orphan","cfc":"PhysicalCountItem","fkcolumn":"physicalCountID","type":"array"},"emailTemplates":{"name":"emailTemplates","persistent":false,"type":"struct"},"printTemplates":{"name":"printTemplates","persistent":false,"type":"struct"},"processObjects":{"name":"processObjects","persistent":false,"type":"struct"},"settingValueFormatted":{"name":"settingValueFormatted","persistent":false,"type":"any"},"auditSmartList":{"name":"auditSmartList","persistent":false,"type":"any"},"modifiedDateTime":{"name":"modifiedDateTime","ormtype":"timestamp","hb_populateenabled":false},"newFlag":{"name":"newFlag","persistent":false,"type":"boolean"},"validations":{"name":"validations","persistent":false,"type":"struct"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"},"createdByAccountID":{"name":"createdByAccountID","ormtype":"string","hb_populateenabled":false},"remoteID":{"name":"remoteID","ormtype":"string"},"modifiedByAccountID":{"name":"modifiedByAccountID","ormtype":"string","hb_populateenabled":false},"attributeValuesByAttributeIDStruct":{"name":"attributeValuesByAttributeIDStruct","persistent":false,"type":"struct"},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"assignedAttributeSetSmartList":{"name":"assignedAttributeSetSmartList","persistent":false,"type":"any"},"physicalStatusTypeSystemCode":{"name":"physicalStatusTypeSystemCode","persistent":false},"modifiedByAccount":{"name":"modifiedByAccount","persistent":false},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"createdByAccount":{"name":"createdByAccount","persistent":false},"simpleRepresentation":{"name":"simpleRepresentation","persistent":false,"type":"string"},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"persistableErrors":{"name":"persistableErrors","persistent":false,"type":"array"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"encryptedPropertiesExistFlag":{"name":"encryptedPropertiesExistFlag","persistent":false,"type":"boolean"},"rollbackProcessedFlag":{"name":"rollbackProcessedFlag","persistent":false,"type":"boolean"},"location":{"name":"location","fieldtype":"many-to-one","cfc":"Location","fkcolumn":"locationID"},"attributeValuesByAttributeCodeStruct":{"name":"attributeValuesByAttributeCodeStruct","persistent":false,"type":"struct"},"physical":{"name":"physical","fieldtype":"many-to-one","cfc":"Physical","fkcolumn":"physicalID"},"physicalCountID":{"generator":"uuid","name":"physicalCountID","fieldtype":"id","ormtype":"string","unsavedvalue":"","length":32,"default":""},"countPostDateTime":{"name":"countPostDateTime","ormtype":"timestamp"}};
                	entities['PhysicalCount'].className = 'PhysicalCount';
                	validations['PhysicalCount'] = {"properties":{"physicalStatusTypeSystemCode":[{"inList":"pstOpen","contexts":"delete"}],"location":[{"required":true,"contexts":"save"}],"countPostDateTime":[{"dataType":"date","required":true,"contexts":"save"}]}};
                	defaultValues['PhysicalCount'] = {
                	physicalCountID:'',
										countPostDateTime:null,
									remoteID:null,
									createdDateTime:'',
										createdByAccountID:null,
									modifiedDateTime:'',
										modifiedByAccountID:null,
									
						z:''
	                };
                
                	entities['Print'] = {"printID":{"generator":"uuid","name":"printID","fieldtype":"id","ormtype":"string","unsavedvalue":"","length":32,"default":""},"createdDateTime":{"name":"createdDateTime","ormtype":"timestamp","hb_populateenabled":false},"emailTemplates":{"name":"emailTemplates","persistent":false,"type":"struct"},"printTemplates":{"name":"printTemplates","persistent":false,"type":"struct"},"processObjects":{"name":"processObjects","persistent":false,"type":"struct"},"settingValueFormatted":{"name":"settingValueFormatted","persistent":false,"type":"any"},"auditSmartList":{"name":"auditSmartList","persistent":false,"type":"any"},"newFlag":{"name":"newFlag","persistent":false,"type":"boolean"},"printContent":{"name":"printContent","ormtype":"string"},"validations":{"name":"validations","persistent":false,"type":"struct"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"},"createdByAccountID":{"name":"createdByAccountID","ormtype":"string","hb_populateenabled":false},"remoteID":{"name":"remoteID","ormtype":"string"},"attributeValuesByAttributeIDStruct":{"name":"attributeValuesByAttributeIDStruct","persistent":false,"type":"struct"},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"assignedAttributeSetSmartList":{"name":"assignedAttributeSetSmartList","persistent":false,"type":"any"},"logPrintFlag":{"name":"logPrintFlag","persistent":false},"modifiedByAccount":{"name":"modifiedByAccount","persistent":false},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"simpleRepresentation":{"name":"simpleRepresentation","persistent":false,"type":"string"},"createdByAccount":{"name":"createdByAccount","persistent":false},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"persistableErrors":{"name":"persistableErrors","persistent":false,"type":"array"},"encryptedPropertiesExistFlag":{"name":"encryptedPropertiesExistFlag","persistent":false,"type":"boolean"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"rollbackProcessedFlag":{"name":"rollbackProcessedFlag","persistent":false,"type":"boolean"},"attributeValuesByAttributeCodeStruct":{"name":"attributeValuesByAttributeCodeStruct","persistent":false,"type":"struct"}};
                	entities['Print'].className = 'Print';
                	validations['Print'] = {"properties":{}};
                	defaultValues['Print'] = {
                	printID:'',
										printContent:null,
									remoteID:null,
									createdDateTime:'',
										createdByAccountID:null,
									
						z:''
	                };
                
                	entities['SubscriptionStatus'] = {"subscriptionStatusType":{"name":"subscriptionStatusType","fieldtype":"many-to-one","hb_optionssmartlistdata":"f:parentType.systemCode=subscriptionStatusType","cfc":"Type","fkcolumn":"subscriptionStatusTypeID"},"subscriptionUsage":{"name":"subscriptionUsage","fieldtype":"many-to-one","cfc":"SubscriptionUsage","fkcolumn":"subscriptionUsageID"},"createdDateTime":{"name":"createdDateTime","ormtype":"timestamp","hb_populateenabled":false},"emailTemplates":{"name":"emailTemplates","persistent":false,"type":"struct"},"printTemplates":{"name":"printTemplates","persistent":false,"type":"struct"},"processObjects":{"name":"processObjects","persistent":false,"type":"struct"},"settingValueFormatted":{"name":"settingValueFormatted","persistent":false,"type":"any"},"auditSmartList":{"name":"auditSmartList","persistent":false,"type":"any"},"modifiedDateTime":{"name":"modifiedDateTime","ormtype":"timestamp","hb_populateenabled":false},"newFlag":{"name":"newFlag","persistent":false,"type":"boolean"},"validations":{"name":"validations","persistent":false,"type":"struct"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"},"subscriptionStatusChangeReasonType":{"name":"subscriptionStatusChangeReasonType","fieldtype":"many-to-one","hb_optionssmartlistdata":"f:parentType.systemCode=subscriptionStatusChangeReasonType","cfc":"Type","fkcolumn":"subsStatusChangeReasonTypeID"},"createdByAccountID":{"name":"createdByAccountID","ormtype":"string","hb_populateenabled":false},"remoteID":{"name":"remoteID","ormtype":"string"},"modifiedByAccountID":{"name":"modifiedByAccountID","ormtype":"string","hb_populateenabled":false},"attributeValuesByAttributeIDStruct":{"name":"attributeValuesByAttributeIDStruct","persistent":false,"type":"struct"},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"assignedAttributeSetSmartList":{"name":"assignedAttributeSetSmartList","persistent":false,"type":"any"},"modifiedByAccount":{"name":"modifiedByAccount","persistent":false},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"createdByAccount":{"name":"createdByAccount","persistent":false},"simpleRepresentation":{"name":"simpleRepresentation","persistent":false,"type":"string"},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"subscriptionStatusID":{"generator":"uuid","name":"subscriptionStatusID","fieldtype":"id","ormtype":"string","unsavedvalue":"","length":32,"default":""},"persistableErrors":{"name":"persistableErrors","persistent":false,"type":"array"},"effectiveDateTime":{"name":"effectiveDateTime","ormtype":"timestamp"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"encryptedPropertiesExistFlag":{"name":"encryptedPropertiesExistFlag","persistent":false,"type":"boolean"},"changeDateTime":{"name":"changeDateTime","ormtype":"timestamp"},"rollbackProcessedFlag":{"name":"rollbackProcessedFlag","persistent":false,"type":"boolean"},"attributeValuesByAttributeCodeStruct":{"name":"attributeValuesByAttributeCodeStruct","persistent":false,"type":"struct"}};
                	entities['SubscriptionStatus'].className = 'SubscriptionStatus';
                	validations['SubscriptionStatus'] = {"properties":{}};
                	defaultValues['SubscriptionStatus'] = {
                	subscriptionStatusID:'',
										changeDateTime:null,
									effectiveDateTime:null,
									remoteID:null,
									createdDateTime:'',
										createdByAccountID:null,
									modifiedDateTime:'',
										modifiedByAccountID:null,
									
						z:''
	                };
                
                	entities['Address'] = {"middleInitial":{"name":"middleInitial","ormtype":"string","hb_populateenabled":"public"},"emailTemplates":{"name":"emailTemplates","persistent":false,"type":"struct"},"createdDateTime":{"name":"createdDateTime","ormtype":"timestamp","hb_populateenabled":false},"printTemplates":{"name":"printTemplates","persistent":false,"type":"struct"},"salutation":{"name":"salutation","ormtype":"string","hb_populateenabled":"public","hb_formfieldtype":"select"},"processObjects":{"name":"processObjects","persistent":false,"type":"struct"},"settingValueFormatted":{"name":"settingValueFormatted","persistent":false,"type":"any"},"auditSmartList":{"name":"auditSmartList","persistent":false,"type":"any"},"modifiedDateTime":{"name":"modifiedDateTime","ormtype":"timestamp","hb_populateenabled":false},"newFlag":{"name":"newFlag","persistent":false,"type":"boolean"},"salutationOptions":{"name":"salutationOptions","persistent":false,"type":"array"},"validations":{"name":"validations","persistent":false,"type":"struct"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"},"locality":{"name":"locality","ormtype":"string","hb_populateenabled":"public"},"stateCode":{"name":"stateCode","ormtype":"string","hb_populateenabled":"public"},"street2Address":{"name":"street2Address","ormtype":"string","hb_populateenabled":"public"},"countryCodeOptions":{"name":"countryCodeOptions","persistent":false,"type":"array"},"middleName":{"name":"middleName","ormtype":"string","hb_populateenabled":"public"},"createdByAccountID":{"name":"createdByAccountID","ormtype":"string","hb_populateenabled":false},"firstName":{"name":"firstName","ormtype":"string","hb_populateenabled":"public"},"postalCode":{"name":"postalCode","ormtype":"string","hb_populateenabled":"public"},"addressID":{"generator":"uuid","name":"addressID","fieldtype":"id","ormtype":"string","unsavedvalue":"","length":32,"default":""},"stateCodeOptions":{"name":"stateCodeOptions","persistent":false,"type":"array"},"remoteID":{"name":"remoteID","ormtype":"string"},"attributeValuesByAttributeIDStruct":{"name":"attributeValuesByAttributeIDStruct","persistent":false,"type":"struct"},"modifiedByAccountID":{"name":"modifiedByAccountID","ormtype":"string","hb_populateenabled":false},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"assignedAttributeSetSmartList":{"name":"assignedAttributeSetSmartList","persistent":false,"type":"any"},"emailAddress":{"name":"emailAddress","ormtype":"string","hb_populateenabled":"public"},"company":{"name":"company","ormtype":"string","hb_populateenabled":"public"},"modifiedByAccount":{"name":"modifiedByAccount","persistent":false},"name":{"name":"name","ormtype":"string","hb_populateenabled":"public"},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"createdByAccount":{"name":"createdByAccount","persistent":false},"simpleRepresentation":{"name":"simpleRepresentation","persistent":false,"type":"string"},"country":{"name":"country","persistent":false},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"persistableErrors":{"name":"persistableErrors","persistent":false,"type":"array"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"encryptedPropertiesExistFlag":{"name":"encryptedPropertiesExistFlag","persistent":false,"type":"boolean"},"rollbackProcessedFlag":{"name":"rollbackProcessedFlag","persistent":false,"type":"boolean"},"streetAddress":{"name":"streetAddress","ormtype":"string","hb_populateenabled":"public"},"attributeValuesByAttributeCodeStruct":{"name":"attributeValuesByAttributeCodeStruct","persistent":false,"type":"struct"},"countryCode":{"name":"countryCode","ormtype":"string","hb_populateenabled":"public"},"phoneNumber":{"name":"phoneNumber","ormtype":"string","hb_populateenabled":"public"},"city":{"name":"city","ormtype":"string","hb_populateenabled":"public"},"lastName":{"name":"lastName","ormtype":"string","hb_populateenabled":"public"}};
                	entities['Address'].className = 'Address';
                	validations['Address'] = {"properties":{"streetAddress":[{"required":true,"contexts":"full,location","conditions":"streetAddressRequired"}],"postalCode":[{"required":true,"contexts":"full,location","conditions":"postalCodeRequired"}],"name":[{"required":true,"contexts":"full"}],"country":[{"required":true,"contexts":"save,full"}],"city":[{"required":true,"contexts":"full,location","conditions":"cityRequired"}],"locality":[{"required":true,"contexts":"full,location","conditions":"localityRequired"}],"emailAddress":[{"dataType":"email","contexts":"save"}],"stateCode":[{"required":true,"contexts":"full,location","conditions":"stateCodeRequired"}],"street2Address":[{"required":true,"contexts":"full,location","conditions":"street2AddressRequired"}]},"conditions":{"localityRequired":{"country.localityRequiredFlag":{"eq":true}},"streetAddressRequired":{"country.streetAddressRequiredFlag":{"eq":true}},"cityRequired":{"country.cityRequiredFlag":{"eq":true}},"postalCodeRequired":{"country.postalCodeRequiredFlag":{"eq":true}},"street2AddressRequired":{"country.street2AddressRequiredFlag":{"eq":true}},"stateCodeRequired":{"country.stateCodeRequiredFlag":{"eq":true}}}};
                	defaultValues['Address'] = {
                	addressID:'',
										name:null,
									company:null,
									streetAddress:null,
									street2Address:null,
									locality:null,
									city:null,
									stateCode:null,
									postalCode:null,
									countryCode:null,
									salutation:null,
									firstName:null,
									lastName:null,
									middleName:null,
									middleInitial:null,
									phoneNumber:null,
									emailAddress:null,
									remoteID:null,
									createdDateTime:'',
										createdByAccountID:null,
									modifiedDateTime:'',
										modifiedByAccountID:null,
									
						z:''
	                };
                
                	entities['StockReceiverItem'] = {"createdDateTime":{"name":"createdDateTime","ormtype":"timestamp","hb_populateenabled":false},"emailTemplates":{"name":"emailTemplates","persistent":false,"type":"struct"},"printTemplates":{"name":"printTemplates","persistent":false,"type":"struct"},"stockReceiver":{"name":"stockReceiver","fieldtype":"many-to-one","cfc":"StockReceiver","fkcolumn":"stockReceiverID"},"processObjects":{"name":"processObjects","persistent":false,"type":"struct"},"settingValueFormatted":{"name":"settingValueFormatted","persistent":false,"type":"any"},"orderItem":{"name":"orderItem","fieldtype":"many-to-one","cfc":"OrderItem","fkcolumn":"orderItemID"},"auditSmartList":{"name":"auditSmartList","persistent":false,"type":"any"},"stock":{"name":"stock","fieldtype":"many-to-one","hb_cascadecalculate":true,"cfc":"Stock","fkcolumn":"stockID"},"newFlag":{"name":"newFlag","persistent":false,"type":"boolean"},"validations":{"name":"validations","persistent":false,"type":"struct"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"},"stockAdjustmentItem":{"name":"stockAdjustmentItem","fieldtype":"many-to-one","cfc":"StockAdjustmentItem","fkcolumn":"stockAdjustmentItemID"},"vendorOrderItem":{"name":"vendorOrderItem","fieldtype":"many-to-one","cfc":"VendorOrderItem","fkcolumn":"vendorOrderItemID"},"createdByAccountID":{"name":"createdByAccountID","ormtype":"string","hb_populateenabled":false},"attributeValuesByAttributeIDStruct":{"name":"attributeValuesByAttributeIDStruct","persistent":false,"type":"struct"},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"cost":{"name":"cost","ormtype":"big_decimal"},"assignedAttributeSetSmartList":{"name":"assignedAttributeSetSmartList","persistent":false,"type":"any"},"quantity":{"name":"quantity","ormtype":"integer"},"modifiedByAccount":{"name":"modifiedByAccount","persistent":false},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"createdByAccount":{"name":"createdByAccount","persistent":false},"simpleRepresentation":{"name":"simpleRepresentation","persistent":false,"type":"string"},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"persistableErrors":{"name":"persistableErrors","persistent":false,"type":"array"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"encryptedPropertiesExistFlag":{"name":"encryptedPropertiesExistFlag","persistent":false,"type":"boolean"},"rollbackProcessedFlag":{"name":"rollbackProcessedFlag","persistent":false,"type":"boolean"},"attributeValuesByAttributeCodeStruct":{"name":"attributeValuesByAttributeCodeStruct","persistent":false,"type":"struct"},"currencyCode":{"name":"currencyCode","ormtype":"string","length":3},"stockReceiverItemID":{"generator":"uuid","name":"stockReceiverItemID","fieldtype":"id","ormtype":"string","unsavedvalue":"","length":32,"default":""}};
                	entities['StockReceiverItem'].className = 'StockReceiverItem';
                	validations['StockReceiverItem'] = {"properties":{}};
                	defaultValues['StockReceiverItem'] = {
                	stockReceiverItemID:'',
										quantity:null,
									cost:null,
									currencyCode:null,
									createdDateTime:'',
										createdByAccountID:null,
									
						z:''
	                };
                
                	entities['AddressZone'] = {"createdDateTime":{"name":"createdDateTime","ormtype":"timestamp","hb_populateenabled":false},"promotionQualifiers":{"inverse":true,"name":"promotionQualifiers","fieldtype":"many-to-many","singularname":"promotionQualifier","inversejoincolumn":"promotionQualifierID","cfc":"PromotionQualifier","fkcolumn":"addressZoneID","linktable":"SwPromoQualShipAddressZone"},"emailTemplates":{"name":"emailTemplates","persistent":false,"type":"struct"},"printTemplates":{"name":"printTemplates","persistent":false,"type":"struct"},"processObjects":{"name":"processObjects","persistent":false,"type":"struct"},"settingValueFormatted":{"name":"settingValueFormatted","persistent":false,"type":"any"},"auditSmartList":{"name":"auditSmartList","persistent":false,"type":"any"},"modifiedDateTime":{"name":"modifiedDateTime","ormtype":"timestamp","hb_populateenabled":false},"addressZoneID":{"generator":"uuid","name":"addressZoneID","fieldtype":"id","ormtype":"string","unsavedvalue":"","length":32,"default":""},"newFlag":{"name":"newFlag","persistent":false,"type":"boolean"},"validations":{"name":"validations","persistent":false,"type":"struct"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"},"addressZoneLocations":{"name":"addressZoneLocations","fieldtype":"many-to-many","singularname":"addressZoneLocation","inversejoincolumn":"addressID","cascade":"all-delete-orphan","cfc":"Address","fkcolumn":"addressZoneID","linktable":"SwAddressZoneLocation"},"createdByAccountID":{"name":"createdByAccountID","ormtype":"string","hb_populateenabled":false},"modifiedByAccountID":{"name":"modifiedByAccountID","ormtype":"string","hb_populateenabled":false},"shippingMethods":{"inverse":true,"name":"shippingMethods","fieldtype":"one-to-many","singularname":"shippingMethod","cfc":"ShippingMethod","fkcolumn":"addressZoneID"},"attributeValuesByAttributeIDStruct":{"name":"attributeValuesByAttributeIDStruct","persistent":false,"type":"struct"},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"assignedAttributeSetSmartList":{"name":"assignedAttributeSetSmartList","persistent":false,"type":"any"},"taxCategoryRates":{"inverse":true,"name":"taxCategoryRates","fieldtype":"one-to-many","singularname":"taxCategoryRate","cfc":"TaxCategoryRate","fkcolumn":"addressZoneID"},"modifiedByAccount":{"name":"modifiedByAccount","persistent":false},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"createdByAccount":{"name":"createdByAccount","persistent":false},"simpleRepresentation":{"name":"simpleRepresentation","persistent":false,"type":"string"},"addressZoneName":{"name":"addressZoneName","ormtype":"string"},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"persistableErrors":{"name":"persistableErrors","persistent":false,"type":"array"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"encryptedPropertiesExistFlag":{"name":"encryptedPropertiesExistFlag","persistent":false,"type":"boolean"},"rollbackProcessedFlag":{"name":"rollbackProcessedFlag","persistent":false,"type":"boolean"},"attributeValuesByAttributeCodeStruct":{"name":"attributeValuesByAttributeCodeStruct","persistent":false,"type":"struct"},"shippingMethodRates":{"inverse":true,"name":"shippingMethodRates","fieldtype":"one-to-many","singularname":"shippingMethodRate","cfc":"ShippingMethodRate","fkcolumn":"addressZoneID"}};
                	entities['AddressZone'].className = 'AddressZone';
                	validations['AddressZone'] = {"properties":{"taxCategoryRates":[{"maxCollection":0,"contexts":"delete"}],"addressZoneName":[{"required":true,"contexts":"save"}],"shippingMethods":[{"maxCollection":0,"contexts":"delete"}],"shippingRates":[{"maxCollection":0,"contexts":"delete"}]}};
                	defaultValues['AddressZone'] = {
                	addressZoneID:'',
										addressZoneName:null,
									createdDateTime:'',
										createdByAccountID:null,
									modifiedDateTime:'',
										modifiedByAccountID:null,
									
						z:''
	                };
                
                	entities['VendorPhoneNumber'] = {"createdDateTime":{"name":"createdDateTime","ormtype":"timestamp","hb_populateenabled":false},"emailTemplates":{"name":"emailTemplates","persistent":false,"type":"struct"},"printTemplates":{"name":"printTemplates","persistent":false,"type":"struct"},"processObjects":{"name":"processObjects","persistent":false,"type":"struct"},"settingValueFormatted":{"name":"settingValueFormatted","persistent":false,"type":"any"},"auditSmartList":{"name":"auditSmartList","persistent":false,"type":"any"},"modifiedDateTime":{"name":"modifiedDateTime","ormtype":"timestamp","hb_populateenabled":false},"newFlag":{"name":"newFlag","persistent":false,"type":"boolean"},"validations":{"name":"validations","persistent":false,"type":"struct"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"},"createdByAccountID":{"name":"createdByAccountID","ormtype":"string","hb_populateenabled":false},"attributeValuesByAttributeIDStruct":{"name":"attributeValuesByAttributeIDStruct","persistent":false,"type":"struct"},"modifiedByAccountID":{"name":"modifiedByAccountID","ormtype":"string","hb_populateenabled":false},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"assignedAttributeSetSmartList":{"name":"assignedAttributeSetSmartList","persistent":false,"type":"any"},"vendorPhoneNumberID":{"generator":"uuid","name":"vendorPhoneNumberID","fieldtype":"id","ormtype":"string","unsavedvalue":"","length":32,"default":""},"modifiedByAccount":{"name":"modifiedByAccount","persistent":false},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"simpleRepresentation":{"name":"simpleRepresentation","persistent":false,"type":"string"},"createdByAccount":{"name":"createdByAccount","persistent":false},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"persistableErrors":{"name":"persistableErrors","persistent":false,"type":"array"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"encryptedPropertiesExistFlag":{"name":"encryptedPropertiesExistFlag","persistent":false,"type":"boolean"},"rollbackProcessedFlag":{"name":"rollbackProcessedFlag","persistent":false,"type":"boolean"},"attributeValuesByAttributeCodeStruct":{"name":"attributeValuesByAttributeCodeStruct","persistent":false,"type":"struct"},"phoneNumber":{"name":"phoneNumber","ormtype":"string"},"vendor":{"name":"vendor","fieldtype":"many-to-one","cfc":"Vendor","fkcolumn":"vendorID"}};
                	entities['VendorPhoneNumber'].className = 'VendorPhoneNumber';
                	validations['VendorPhoneNumber'] = {"properties":{}};
                	defaultValues['VendorPhoneNumber'] = {
                	vendorPhoneNumberID:'',
										phoneNumber:null,
									createdDateTime:'',
										createdByAccountID:null,
									modifiedDateTime:'',
										modifiedByAccountID:null,
									
						z:''
	                };
                
                	entities['PriceGroup'] = {"emailTemplates":{"name":"emailTemplates","persistent":false,"type":"struct"},"createdDateTime":{"name":"createdDateTime","ormtype":"timestamp","hb_populateenabled":false},"printTemplates":{"name":"printTemplates","persistent":false,"type":"struct"},"priceGroupCode":{"index":"PI_PRICEGROUPCODE","name":"priceGroupCode","ormtype":"string"},"processObjects":{"name":"processObjects","persistent":false,"type":"struct"},"childPriceGroups":{"inverse":true,"name":"childPriceGroups","fieldtype":"one-to-many","singularname":"ChildPriceGroup","cfc":"PriceGroup","fkcolumn":"parentPriceGroupID"},"priceGroupID":{"generator":"uuid","name":"priceGroupID","fieldtype":"id","ormtype":"string","unsavedvalue":"","length":32,"default":""},"settingValueFormatted":{"name":"settingValueFormatted","persistent":false,"type":"any"},"auditSmartList":{"name":"auditSmartList","persistent":false,"type":"any"},"promotionRewards":{"inverse":true,"name":"promotionRewards","fieldtype":"many-to-many","singularname":"promotionReward","inversejoincolumn":"promotionRewardID","cfc":"PromotionReward","fkcolumn":"priceGroupID","type":"array","linktable":"SwPromoRewardEligiblePriceGrp"},"modifiedDateTime":{"name":"modifiedDateTime","ormtype":"timestamp","hb_populateenabled":false},"parentPriceGroup":{"name":"parentPriceGroup","fieldtype":"many-to-one","cfc":"PriceGroup","hb_optionsnullrbkey":"define.none","fkcolumn":"parentPriceGroupID"},"newFlag":{"name":"newFlag","persistent":false,"type":"boolean"},"validations":{"name":"validations","persistent":false,"type":"struct"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"},"subscriptionBenefits":{"inverse":true,"name":"subscriptionBenefits","fieldtype":"many-to-many","singularname":"subscriptionBenefit","inversejoincolumn":"subscriptionBenefitID","cfc":"SubscriptionBenefit","fkcolumn":"priceGroupID","type":"array","linktable":"SwSubsBenefitPriceGroup"},"accounts":{"inverse":true,"name":"accounts","fieldtype":"many-to-many","singularname":"account","inversejoincolumn":"accountID","cfc":"Account","fkcolumn":"priceGroupID","linktable":"SwAccountPriceGroup"},"createdByAccountID":{"name":"createdByAccountID","ormtype":"string","hb_populateenabled":false},"subscriptionUsageBenefits":{"inverse":true,"name":"subscriptionUsageBenefits","fieldtype":"many-to-many","singularname":"subscriptionUsageBenefit","inversejoincolumn":"subscriptionUsageBenefitID","cfc":"SubscriptionUsageBenefit","fkcolumn":"priceGroupID","type":"array","linktable":"SwSubsUsageBenefitPriceGroup"},"remoteID":{"name":"remoteID","ormtype":"string"},"modifiedByAccountID":{"name":"modifiedByAccountID","ormtype":"string","hb_populateenabled":false},"attributeValuesByAttributeIDStruct":{"name":"attributeValuesByAttributeIDStruct","persistent":false,"type":"struct"},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"assignedAttributeSetSmartList":{"name":"assignedAttributeSetSmartList","persistent":false,"type":"any"},"modifiedByAccount":{"name":"modifiedByAccount","persistent":false},"parentPriceGroupOptions":{"name":"parentPriceGroupOptions","persistent":false},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"createdByAccount":{"name":"createdByAccount","persistent":false},"simpleRepresentation":{"name":"simpleRepresentation","persistent":false,"type":"string"},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"persistableErrors":{"name":"persistableErrors","persistent":false,"type":"array"},"loyaltyRedemptions":{"inverse":true,"name":"loyaltyRedemptions","fieldtype":"one-to-many","singularname":"loyaltyRedemption","cascade":"all-delete-orphan","cfc":"LoyaltyRedemption","fkcolumn":"priceGroupID","type":"array"},"priceGroupName":{"name":"priceGroupName","ormtype":"string"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"encryptedPropertiesExistFlag":{"name":"encryptedPropertiesExistFlag","persistent":false,"type":"boolean"},"rollbackProcessedFlag":{"name":"rollbackProcessedFlag","persistent":false,"type":"boolean"},"appliedOrderItems":{"inverse":true,"name":"appliedOrderItems","fieldtype":"one-to-many","singularname":"appliedOrderItem","cfc":"OrderItem","fkcolumn":"appliedPriceGroupID","type":"array"},"attributeValuesByAttributeCodeStruct":{"name":"attributeValuesByAttributeCodeStruct","persistent":false,"type":"struct"},"priceGroupIDPath":{"name":"priceGroupIDPath","ormtype":"string","length":4000},"activeFlag":{"name":"activeFlag","ormtype":"boolean"},"priceGroupRates":{"inverse":true,"name":"priceGroupRates","fieldtype":"one-to-many","singularname":"priceGroupRate","cascade":"all-delete-orphan","cfc":"PriceGroupRate","fkcolumn":"priceGroupID"}};
                	entities['PriceGroup'].className = 'PriceGroup';
                	validations['PriceGroup'] = {"properties":{"accounts":[{"maxCollection":0,"contexts":"delete"}],"appliedOrderItems":[{"maxCollection":0,"contexts":"delete"}],"subscriptionUsageBenefits":[{"maxCollection":0,"contexts":"delete"}],"priceGroupCode":[{"required":true,"contexts":"save"}],"childPriceGroups":[{"maxCollection":0,"contexts":"delete"}],"promotionRewards":[{"maxCollection":0,"contexts":"delete"}],"priceGroupName":[{"required":true,"contexts":"save"}],"subscriptionBenefits":[{"maxCollection":0,"contexts":"delete"}]}};
                	defaultValues['PriceGroup'] = {
                	priceGroupID:'',
										priceGroupIDPath:'',
										activeFlag:1,
									priceGroupName:null,
									priceGroupCode:null,
									remoteID:null,
									createdDateTime:'',
										createdByAccountID:null,
									modifiedDateTime:'',
										modifiedByAccountID:null,
									
						z:''
	                };
                
                	entities['AccountContentAccess'] = {"createdDateTime":{"name":"createdDateTime","ormtype":"timestamp","hb_populateenabled":false},"emailTemplates":{"name":"emailTemplates","persistent":false,"type":"struct"},"printTemplates":{"name":"printTemplates","persistent":false,"type":"struct"},"processObjects":{"name":"processObjects","persistent":false,"type":"struct"},"settingValueFormatted":{"name":"settingValueFormatted","persistent":false,"type":"any"},"orderItem":{"name":"orderItem","fieldtype":"many-to-one","fetch":"join","cfc":"OrderItem","fkcolumn":"orderItemID"},"auditSmartList":{"name":"auditSmartList","persistent":false,"type":"any"},"modifiedDateTime":{"name":"modifiedDateTime","ormtype":"timestamp","hb_populateenabled":false},"newFlag":{"name":"newFlag","persistent":false,"type":"boolean"},"validations":{"name":"validations","persistent":false,"type":"struct"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"},"account":{"name":"account","fieldtype":"many-to-one","cfc":"Account","fkcolumn":"accountID"},"createdByAccountID":{"name":"createdByAccountID","ormtype":"string","hb_populateenabled":false},"remoteID":{"name":"remoteID","ormtype":"string"},"attributeValuesByAttributeIDStruct":{"name":"attributeValuesByAttributeIDStruct","persistent":false,"type":"struct"},"modifiedByAccountID":{"name":"modifiedByAccountID","ormtype":"string","hb_populateenabled":false},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"assignedAttributeSetSmartList":{"name":"assignedAttributeSetSmartList","persistent":false,"type":"any"},"modifiedByAccount":{"name":"modifiedByAccount","persistent":false},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"accountContentAccessID":{"generator":"uuid","name":"accountContentAccessID","fieldtype":"id","ormtype":"string","unsavedvalue":"","length":32,"default":""},"simpleRepresentation":{"name":"simpleRepresentation","persistent":false,"type":"string"},"createdByAccount":{"name":"createdByAccount","persistent":false},"contents":{"name":"contents","fieldtype":"many-to-many","singularname":"content","inversejoincolumn":"contentID","cfc":"Content","fkcolumn":"accountContentAccessID","linktable":"SwAccountContentAccessContent","type":"array"},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"persistableErrors":{"name":"persistableErrors","persistent":false,"type":"array"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"encryptedPropertiesExistFlag":{"name":"encryptedPropertiesExistFlag","persistent":false,"type":"boolean"},"rollbackProcessedFlag":{"name":"rollbackProcessedFlag","persistent":false,"type":"boolean"},"attributeValuesByAttributeCodeStruct":{"name":"attributeValuesByAttributeCodeStruct","persistent":false,"type":"struct"},"accessContents":{"name":"accessContents","fieldtype":"many-to-many","singularname":"accessContent","inversejoincolumn":"contentID","cfc":"Content","fkcolumn":"accountContentAccessID","linktable":"SwAccountContentAccessContent","type":"array"}};
                	entities['AccountContentAccess'].className = 'AccountContentAccess';
                	validations['AccountContentAccess'] = {"properties":{}};
                	defaultValues['AccountContentAccess'] = {
                	accountContentAccessID:'',
										remoteID:null,
									createdDateTime:'',
										createdByAccountID:null,
									modifiedDateTime:'',
										modifiedByAccountID:null,
									
						z:''
	                };
                
                	entities['LocationConfiguration'] = {"createdDateTime":{"name":"createdDateTime","ormtype":"timestamp","hb_populateenabled":false},"emailTemplates":{"name":"emailTemplates","persistent":false,"type":"struct"},"printTemplates":{"name":"printTemplates","persistent":false,"type":"struct"},"processObjects":{"name":"processObjects","persistent":false,"type":"struct"},"settingValueFormatted":{"name":"settingValueFormatted","persistent":false,"type":"any"},"auditSmartList":{"name":"auditSmartList","persistent":false,"type":"any"},"modifiedDateTime":{"name":"modifiedDateTime","ormtype":"timestamp","hb_populateenabled":false},"locationConfigurationCapacity":{"name":"locationConfigurationCapacity","ormtype":"integer"},"locationPathName":{"name":"locationPathName","persistent":false},"newFlag":{"name":"newFlag","persistent":false,"type":"boolean"},"validations":{"name":"validations","persistent":false,"type":"struct"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"},"locationConfigurationName":{"name":"locationConfigurationName","ormtype":"string"},"remoteID":{"name":"remoteID","ormtype":"string"},"attributeValuesByAttributeIDStruct":{"name":"attributeValuesByAttributeIDStruct","persistent":false,"type":"struct"},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"assignedAttributeSetSmartList":{"name":"assignedAttributeSetSmartList","persistent":false,"type":"any"},"modifiedByAccount":{"name":"modifiedByAccount","persistent":false},"attributeValues":{"inverse":true,"name":"attributeValues","fieldtype":"one-to-many","singularname":"attributeValue","cascade":"all-delete-orphan","cfc":"AttributeValue","fkcolumn":"locationConfigurationID","type":"array"},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"createdByAccount":{"name":"createdByAccount","persistent":false},"simpleRepresentation":{"name":"simpleRepresentation","persistent":false,"type":"string"},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"persistableErrors":{"name":"persistableErrors","persistent":false,"type":"array"},"skus":{"inverse":true,"name":"skus","fieldtype":"many-to-many","singularname":"sku","inversejoincolumn":"skuID","cfc":"Sku","fkcolumn":"locationConfigurationID","type":"array","linktable":"SwSkuLocationConfiguration"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"encryptedPropertiesExistFlag":{"name":"encryptedPropertiesExistFlag","persistent":false,"type":"boolean"},"locationConfigurationID":{"generator":"uuid","name":"locationConfigurationID","fieldtype":"id","ormtype":"string","unsavedvalue":"","length":32,"default":""},"rollbackProcessedFlag":{"name":"rollbackProcessedFlag","persistent":false,"type":"boolean"},"location":{"name":"location","fieldtype":"many-to-one","cfc":"Location","fkcolumn":"locationID"},"locationTree":{"name":"locationTree","persistent":false},"attributeValuesByAttributeCodeStruct":{"name":"attributeValuesByAttributeCodeStruct","persistent":false,"type":"struct"},"activeFlag":{"name":"activeFlag","ormtype":"boolean"}};
                	entities['LocationConfiguration'].className = 'LocationConfiguration';
                	validations['LocationConfiguration'] = {"properties":{"location":[{"required":true,"contexts":"save"}],"skus":[{"maxCollection":0,"contexts":"delete"}],"locationConfigurationName":[{"required":true,"contexts":"save"}]}};
                	defaultValues['LocationConfiguration'] = {
                	locationConfigurationID:'',
										locationConfigurationName:null,
									locationConfigurationCapacity:null,
									activeFlag:1,
									remoteID:null,
									createdDateTime:'',
										modifiedDateTime:'',
										
						z:''
	                };
                
                	entities['Brand'] = {"loyaltyAccruementExclusions":{"inverse":true,"name":"loyaltyAccruementExclusions","fieldtype":"many-to-many","singularname":"loyaltyAccruementExclusion","hb_populateenabled":false,"inversejoincolumn":"loyaltyAccruementID","cfc":"LoyaltyAccruement","fkcolumn":"brandID","type":"array","linktable":"SwLoyaltyAccruExclBrand"},"emailTemplates":{"name":"emailTemplates","persistent":false,"type":"struct"},"promotionQualifiers":{"inverse":true,"name":"promotionQualifiers","fieldtype":"many-to-many","singularname":"promotionQualifier","hb_populateenabled":false,"inversejoincolumn":"promotionQualifierID","cfc":"PromotionQualifier","fkcolumn":"brandID","linktable":"SwPromoQualBrand"},"createdDateTime":{"name":"createdDateTime","ormtype":"timestamp","hb_populateenabled":false},"printTemplates":{"name":"printTemplates","persistent":false,"type":"struct"},"vendors":{"inverse":true,"name":"vendors","fieldtype":"many-to-many","singularname":"vendor","inversejoincolumn":"vendorID","cfc":"Vendor","fkcolumn":"brandID","linktable":"SwVendorBrand"},"processObjects":{"name":"processObjects","persistent":false,"type":"struct"},"settingValueFormatted":{"name":"settingValueFormatted","persistent":false,"type":"any"},"auditSmartList":{"name":"auditSmartList","persistent":false,"type":"any"},"promotionRewards":{"inverse":true,"name":"promotionRewards","fieldtype":"many-to-many","singularname":"promotionReward","hb_populateenabled":false,"inversejoincolumn":"promotionRewardID","cfc":"PromotionReward","fkcolumn":"brandID","linktable":"SwPromoRewardBrand"},"modifiedDateTime":{"name":"modifiedDateTime","ormtype":"timestamp","hb_populateenabled":false},"loyaltyRedemptionExclusions":{"inverse":true,"name":"loyaltyRedemptionExclusions","fieldtype":"many-to-many","singularname":"loyaltyRedemptionExclusion","inversejoincolumn":"loyaltyRedemptionID","cfc":"LoyaltyRedemption","fkcolumn":"brandID","type":"array","linktable":"SwLoyaltyRedemptionExclBrand"},"physicals":{"inverse":true,"name":"physicals","fieldtype":"many-to-many","singularname":"physical","hb_populateenabled":false,"inversejoincolumn":"physicalID","cfc":"Physical","fkcolumn":"brandID","type":"array","linktable":"SwPhysicalBrand"},"newFlag":{"name":"newFlag","persistent":false,"type":"boolean"},"validations":{"name":"validations","persistent":false,"type":"struct"},"hibachiMessages":{"name":"hibachiMessages","persistent":false,"type":"any"},"brandName":{"name":"brandName","ormtype":"string","hint":"This is the common name that the brand goes by."},"createdByAccountID":{"name":"createdByAccountID","ormtype":"string","hb_populateenabled":false},"remoteID":{"name":"remoteID","ormtype":"string"},"attributeValuesByAttributeIDStruct":{"name":"attributeValuesByAttributeIDStruct","persistent":false,"type":"struct"},"modifiedByAccountID":{"name":"modifiedByAccountID","ormtype":"string","hb_populateenabled":false},"hibachiErrors":{"name":"hibachiErrors","persistent":false,"type":"any"},"assignedAttributeSetSmartList":{"name":"assignedAttributeSetSmartList","persistent":false,"type":"any"},"loyaltyAccruements":{"inverse":true,"name":"loyaltyAccruements","fieldtype":"many-to-many","singularname":"loyaltyAccruement","hb_populateenabled":false,"inversejoincolumn":"loyaltyAccruementID","cfc":"LoyaltyAccruement","fkcolumn":"brandID","linktable":"SwLoyaltyAccruBrand"},"modifiedByAccount":{"name":"modifiedByAccount","persistent":false},"attributeValues":{"inverse":true,"name":"attributeValues","fieldtype":"one-to-many","singularname":"attributeValue","cascade":"all-delete-orphan","cfc":"AttributeValue","fkcolumn":"brandID","type":"array"},"hibachiInstanceApplicationScopeKey":{"NAME":"hibachiInstanceApplicationScopeKey","PERSISTENT":false,"TYPE":"string"},"createdByAccount":{"name":"createdByAccount","persistent":false},"simpleRepresentation":{"name":"simpleRepresentation","persistent":false,"type":"string"},"products":{"inverse":true,"name":"products","fieldtype":"one-to-many","singularname":"product","cfc":"Product","fkcolumn":"brandID","type":"array"},"brandID":{"generator":"uuid","name":"brandID","fieldtype":"id","ormtype":"string","unsavedvalue":"","length":32,"default":""},"announceEvent":{"name":"announceEvent","persistent":false,"default":true,"type":"boolean"},"persistableErrors":{"name":"persistableErrors","persistent":false,"type":"array"},"loyaltyRedemptions":{"inverse":true,"name":"loyaltyRedemptions","fieldtype":"many-to-many","singularname":"loyaltyredemption","inversejoincolumn":"loyaltyRedemptionID","cfc":"LoyaltyRedemption","fkcolumn":"brandID","type":"array","linktable":"SwLoyaltyRedemptionBrand"},"populatedSubProperties":{"name":"populatedSubProperties","persistent":false,"type":"struct"},"encryptedPropertiesExistFlag":{"name":"encryptedPropertiesExistFlag","persistent":false,"type":"boolean"},"rollbackProcessedFlag":{"name":"rollbackProcessedFlag","persistent":false,"type":"boolean"},"brandWebsite":{"name":"brandWebsite","ormtype":"string","hb_formattype":"url","hint":"This is the Website of the brand"},"attributeValuesByAttributeCodeStruct":{"name":"attributeValuesByAttributeCodeStruct","persistent":false,"type":"struct"},"urlTitle":{"unique":true,"name":"urlTitle","ormtype":"string","hint":"This is the name that is used in the URL string"},"promotionRewardExclusions":{"inverse":true,"name":"promotionRewardExclusions","fieldtype":"many-to-many","singularname":"promotionRewardExclusion","hb_populateenabled":false,"inversejoincolumn":"promotionRewardID","cfc":"PromotionReward","fkcolumn":"brandID","type":"array","linktable":"SwPromoRewardExclBrand"},"publishedFlag":{"name":"publishedFlag","ormtype":"boolean"},"promotionQualifierExclusions":{"inverse":true,"name":"promotionQualifierExclusions","fieldtype":"many-to-many","singularname":"promotionQualifierExclusion","hb_populateenabled":false,"inversejoincolumn":"promotionQualifierID","cfc":"PromotionQualifier","fkcolumn":"brandID","type":"array","linktable":"SwPromoQualExclBrand"},"activeFlag":{"name":"activeFlag","ormtype":"boolean","hint":"As Brands Get Old, They would be marked as Not Active"}};
                	entities['Brand'].className = 'Brand';
                	validations['Brand'] = {"properties":{"brandWebsite":[{"dataType":"url","contexts":"save"}],"brandName":[{"required":true,"contexts":"save"}],"urlTitle":[{"unique":true,"required":true,"contexts":"save"}],"physicalCounts":[{"maxCollection":0,"contexts":"delete"}],"products":[{"maxCollection":0,"contexts":"delete"}]}};
                	defaultValues['Brand'] = {
                	brandID:'',
										activeFlag:1,
									publishedFlag:null,
									urlTitle:null,
									brandName:null,
									brandWebsite:null,
									remoteID:null,
									createdDateTime:'',
										createdByAccountID:null,
									modifiedDateTime:'',
										modifiedByAccountID:null,
									
						z:''
	                };
                
                	
                angular.forEach(entities,function(entity){
                	$delegate['get'+entity.className] = function(options){
						var entityInstance = $delegate.newEntity(entity.className);
						var entityDataPromise = $delegate.getEntity(entity.className.toLowerCase(),options);
						entityDataPromise.then(function(response){
							
							if(angular.isDefined(response.processData)){
								entityInstance.$$init(response.data);
								var processObjectInstance = $delegate['new'+entity.className+'_'+options.processContext.charAt(0).toUpperCase()+options.processContext.slice(1)]();
								processObjectInstance.$$init(response.processData);
								processObjectInstance.data[entity.className.charAt(0).toLowerCase()+entity.className.slice(1)] = entityInstance;
								entityInstance.processObject = processObjectInstance;
							}else{
								entityInstance.$$init(response);
							}
						});
						return {
							promise:entityDataPromise,
							value:entityInstance	
						}
					}
					
					 
					$delegate['get'+entity.className] = function(options){
						var entityInstance = $delegate.newEntity(entity.className);
						var entityDataPromise = $delegate.getEntity(entity.className.toLowerCase(),options);
						entityDataPromise.then(function(response){
							
							if(angular.isDefined(response.processData)){
								entityInstance.$$init(response.data);
								var processObjectInstance = $delegate['new'+entity.className+options.processContext.charAt(0).toUpperCase()+options.processContext.slice(1)]();
								processObjectInstance.$$init(response.processData);
								processObjectInstance.data[entity.className.charAt(0).toLowerCase()+entity.className.slice(1)] = entityInstance;
								entityInstance.processObject = processObjectInstance;
							}else{
								entityInstance.$$init(response);
							}
						});
						return {
							promise:entityDataPromise,
							value:entityInstance	
						}
					}
					
					$delegate['new'+entity.className] = function(){
						return $delegate.newEntity(entity.className);
					}
					
					entity.isProcessObject = entity.className.indexOf('_') >= 0;
					
					 _jsEntities[ entity.className ]=function() {
				
						this.validations = validations[entity.className];
						
						this.metaData = entity;
						this.metaData.className = entity.className;
						
						this.metaData.$$getRBKey = function(rbKey,replaceStringData){
							return $delegate.rbKey(rbKey,replaceStringData);
						};
						
						
						this.metaData.$$getPropertyTitle = function(propertyName){
							return _getPropertyTitle(propertyName,this);
						}
						
						this.metaData.$$getPropertyHint = function(propertyName){
							return _getPropertyHint(propertyName,this);
						}
		
						this.metaData.$$getManyToManyName = function(singularname){
							var metaData = this;
							for(var i in metaData){
								if(metaData[i].singularname === singularname){
									return metaData[i].name;
								}
							}
						}
						
						
						
						this.metaData.$$getPropertyFieldType = function(propertyName){
							return _getPropertyFieldType(propertyName,this);
						}
						
						this.metaData.$$getPropertyFormatType = function(propertyName){
							return _getPropertyFormatType(propertyName,this);
						}
						
						this.metaData.$$getDetailTabs = function(){
							var deferred = $q.defer();
							var urlString = _config.baseURL+'/index.cfm/?slatAction=api:main.getDetailTabs&entityName='+this.className;
                  	 		var detailTabs = [];
							$http.get(urlString)
		                    .success(function(data){
		                        deferred.resolve(data);
		                    }).error(function(reason){
		                        deferred.reject(reason);
		                    });
		                    
							return deferred.promise;
						}
						
						this.$$getFormattedValue = function(propertyName,formatType){
							return _getFormattedValue(propertyName,formatType,this);
						}
						
						this.data = {};
						this.modifiedData = {};
						
						var jsEntity = this;
						if(entity.isProcessObject){
							(function(entity){jsEntities[ entity.className ].prototype = {
								$$getID:function(){
									
									return '';
								}
								,$$getIDName:function(){
									var IDNameString = '';
									return IDNameString;
								}
							}})(entity);
						}
						
						angular.forEach(entity,function(property){
							if(angular.isObject(property) && angular.isDefined(property.name)){
								
								if(angular.isDefined(defaultValues[entity.className][property.name])){
									jsEntity.data[property.name] = defaultValues[entity.className][property.name]; 
								}
							}
						});
							
					};
					 _jsEntities[ entity.className ].prototype = {
						$$getPropertyByName:function(propertyName){
							return this['$$get'+propertyName.charAt(0).toUpperCase() + propertyName.slice(1)]();
						},
						$$isPersisted:function(){
							if(this.$$getID() === ''){
								return false;
							}else{
								return true;
							}
						},
						$$init:function( data ) {
							_init(this,data);
						},
						$$save:function(){
							return _save(this);
						},
						$$delete:function(){
							var deletePromise =_delete(this)
							return deletePromise;
						},
						
						$$getValidationsByProperty:function(property){
							return _getValidationsByProperty(this,property);
						},
						$$getValidationByPropertyAndContext:function(property,context){
							return _getValidationByPropertyAndContext(this,property,context);
						}
						
						,$$getMetaData:function( propertyName ) {
							if(propertyName === undefined) {
								return this.metaData
							}else{
								if(angular.isDefined(this.metaData[propertyName].name) && angular.isUndefined(this.metaData[propertyName].nameCapitalCase)){
									this.metaData[propertyName].nameCapitalCase = this.metaData[propertyName].name.charAt(0).toUpperCase() + this.metaData[propertyName].name.slice(1);
								}
								if(angular.isDefined(this.metaData[propertyName].cfc) && angular.isUndefined(this.metaData[propertyName].cfcProperCase)){
									this.metaData[propertyName].cfcProperCase = this.metaData[propertyName].cfc.charAt(0).toLowerCase()+this.metaData[propertyName].cfc.slice(1);
								}
								return this.metaData[ propertyName ];
							}
						}
					};
					angular.forEach(entity,function(property){
						if(angular.isObject(property) && angular.isDefined(property.name)){
							if(angular.isUndefined(property.persistent)){
								if(angular.isDefined(property.fieldtype)){
									if(['many-to-one'].indexOf(property.fieldtype) >= 0){
										
										
										
										_jsEntities[ entity.className ].prototype['$$get'+property.name.charAt(0).toUpperCase()+property.name.slice(1)]=function() {
										
											var thisEntityInstance = this;
											if(angular.isDefined(this['$$get'+this.$$getIDName().charAt(0).toUpperCase()+this.$$getIDName().slice(1)]())){
												var options = {
													columnsConfig:angular.toJson([
														{
															"propertyIdentifier":"_"+this.metaData.className.toLowerCase()+"_"+property.name
														}
													]),
													joinsConfig:angular.toJson([
														{
															"associationName":property.name,
															"alias":"_"+this.metaData.className.toLowerCase()+"_"+property.name
														}
													]),
													filterGroupsConfig:angular.toJson([{
														"filterGroup":[
															{
																"propertyIdentifier":"_"+this.metaData.className.toLowerCase()+"."+this.$$getIDName(),
																"comparisonOperator":"=",
																"value":this['$$get'+this.$$getIDName()]
															}
														]
													}]),
													allRecords:true
												};
												
												var collectionPromise = $delegate.getEntity(entity.className,options);
												collectionPromise.then(function(response){
													for(var i in response.records){
														var entityInstance = $delegate.newEntity(thisEntityInstance.metaData[property.name].cfc);
														//Removed the array index here at the end of local.property.name.
														if(angular.isArray(response.records[i][property.name])){
															entityInstance.$$init(response.records[i][property.name][0]);
														}else{
															entityInstance.$$init(response.records[i][property.name]);//Shouldn't have the array index'
														}
														thisEntityInstance['$$set'+property.name.charAt(0).toUpperCase()+property.name.slice(1)](entityInstance);
													}
												});
												return collectionPromise;
												
											}
											
											return null;
										};
										_jsEntities[ entity.className ].prototype['$$set'+property.name.charAt(0).toUpperCase()+property.name.slice(1)]=function(entityInstance) {
										
											
											var thisEntityInstance = this;
											var metaData = this.metaData;
											var manyToManyName = '';
											if(property.name === 'parent'+this.metaData.className){
												var childName = 'child'+this.metaData.className;
												manyToManyName = entityInstance.metaData.$$getManyToManyName(childName);
												
											}else{
												manyToManyName = entityInstance.metaData.$$getManyToManyName(metaData.className.charAt(0).toLowerCase() + this.metaData.className.slice(1));
											}
											
											if(angular.isUndefined(thisEntityInstance.parents)){
												thisEntityInstance.parents = [];
											}
											
											thisEntityInstance.parents.push(thisEntityInstance.metaData[property.name]);
											
											
											if(angular.isDefined(manyToManyName)){
												if(angular.isUndefined(entityInstance.children)){
													entityInstance.children = [];
												}
												
												var child = entityInstance.metaData[manyToManyName];;
												
												if(entityInstance.children.indexOf(child) === -1){
													entityInstance.children.push(child);
												}
												
												if(angular.isUndefined(entityInstance.data[manyToManyName])){
													entityInstance.data[manyToManyName] = [];
												}
												entityInstance.data[manyToManyName].push(thisEntityInstance);
											}
		
											thisEntityInstance.data[property.name] = entityInstance;
										};
									
									}else if(['one-to-many','many-to-many'].indexOf(property.fieldtype) >= 0){
									
									
									
									
										_jsEntities[ entity.className ].prototype['$$add'+property.singularname.charAt(0).toUpperCase()+property.singularname.slice(1)]=function(){
										
										var entityInstance = $delegate.newEntity(this.metaData[property.name].cfc);
										var metaData = this.metaData;
										
										if(metaData[property.name].fieldtype === 'one-to-many'){
											entityInstance.data[metaData[property.name].fkcolumn.slice(0,-2)] = this;
										
										}else if(metaData[property.name].fieldtype === 'many-to-many'){
											
											var manyToManyName = entityInstance.metaData.$$getManyToManyName(metaData.className.charAt(0).toLowerCase() + this.metaData.className.slice(1));
											if(angular.isUndefined(entityInstance.data[manyToManyName])){
												entityInstance.data[manyToManyName] = [];
											}
											entityInstance.data[manyToManyName].push(this);
										}
										
										if(angular.isDefined(metaData[property.name])){
											if(angular.isDefined(entityInstance.metaData[metaData[property.name].fkcolumn.slice(0,-2)])){
												
												if(angular.isUndefined(entityInstance.parents)){
													entityInstance.parents = [];
												}
	
												entityInstance.parents.push(entityInstance.metaData[metaData[property.name].fkcolumn.slice(0,-2)]);
											}
											
											if(angular.isUndefined(this.children)){
												this.children = [];
											}
	
											var child = metaData[property.name];
											
											if(this.children.indexOf(child) === -1){
												this.children.push(child);
											}
										}
										if(angular.isUndefined(this.data[property.name])){
											this.data[property.name] = [];
										}
										
										this.data[property.name].push(entityInstance);
										return entityInstance;
									};
									
									
									
										_jsEntities[ entity.className ].prototype['$$get'+property.name.charAt(0).toUpperCase()+property.name.slice(1)]=function() {

										var thisEntityInstance = this;
										if(angular.isDefined(this['$$get'+this.$$getIDName().charAt(0).toUpperCase()+this.$$getIDName().slice(1)])){
											var options = {
												filterGroupsConfig:angular.toJson([{
													"filterGroup":[
														{
															"propertyIdentifier":"_"+property.cfc.toLowerCase()+"."+property.fkcolumn.replace('ID','')+"."+this.$$getIDName(),
															"comparisonOperator":"=",
															"value":this['$$get'+this.$$getIDName()]
														}
													]
												}]),
												allRecords:true
											};
											
											var collectionPromise = $delegate.getEntity(property.cfc,options);
											collectionPromise.then(function(response){
												
												for(var i in response.records){
													
													var entityInstance = thisEntityInstance['$$add'+thisEntityInstance.metaData[property.name].singularname.charAt(0).toUpperCase()+thisEntityInstance.metaData[property.name].singularname.slice(1)]();
													entityInstance.$$init(response.records[i]);
													if(angular.isUndefined(thisEntityInstance[property.name])){
														thisEntityInstance[property.name] = [];
													}
													thisEntityInstance[property.name].push(entityInstance);
												}
											});
											return collectionPromise;
										}
									};
								}else{

									if(['id'].indexOf(property.fieldtype >= 0)){
										_jsEntities[ entity.className ].prototype['$$getID']=function(){
											//this should retreive id from the metadata
											return this.data[this.$$getIDName()];
										};
										_jsEntities[ entity.className ].prototype['$$getIDName']=function(){
											var IDNameString = property.name;
											return IDNameString;
										};
									}
									
										_jsEntities[ entity.className ].prototype['$$get'+property.name.charAt(0).toUpperCase()+property.name.slice(1)]=function(){
										return this.data[property.name];
									};
								}
							}else{
								_jsEntities[ entity.className ].prototype['$$get'+property.name.charAt(0).toUpperCase()+property.name.slice(1)]=function() {
									return this.data[property.name];
								};
							}
						}
						}
					});
                });
				$delegate.setJsEntities(_jsEntities);
				
				var _init = function(entityInstance,data){
	                for(var key in data) {
	                    if(key.charAt(0) !== '$' && angular.isDefined(entityInstance.metaData[key])){
	                        var propertyMetaData = entityInstance.metaData[key];
	                        
	                        if(angular.isDefined(propertyMetaData) && angular.isDefined(propertyMetaData.hb_formfieldtype) && propertyMetaData.hb_formfieldtype === 'json'){
	                            if(data[key].trim() !== ''){
	                                entityInstance.data[key] = angular.fromJson(data[key]);
	                            }
	                            
	                        }else{
		                        entityInstance.data[key] = data[key];   
		                    }
	                	}
	           	 	}
	            }
	            
	            var _getPropertyTitle = function(propertyName,metaData){
	                var propertyMetaData = metaData[propertyName];
	                if(angular.isDefined(propertyMetaData['hb_rbkey'])){
	                    return metaData.$$getRBKey(propertyMetaData['hb_rbkey']);
	                }else if (angular.isUndefined(propertyMetaData['persistent'])){
	                    if(angular.isDefined(propertyMetaData['fieldtype']) 
	                    && angular.isDefined(propertyMetaData['cfc'])
	                    && ["one-to-many","many-to-many"].indexOf(propertyMetaData.fieldtype) > -1){
	                        
	                        return metaData.$$getRBKey("entity."+metaData.className.toLowerCase()+"."+propertyName+',entity.'+propertyMetaData.cfc+'_plural');
	                    }else if(angular.isDefined(propertyMetaData.fieldtype)
	                    && angular.isDefined(propertyMetaData.cfc)
	                    && ["many-to-one"].indexOf(propertyMetaData.fieldtype) > -1){
	                        return metaData.$$getRBKey("entity."+metaData.className.toLowerCase()+'.'+propertyName.toLowerCase()+',entity.'+propertyMetaData.cfc);
	                    }
	                    return metaData.$$getRBKey('entity.'+metaData.className.toLowerCase()+'.'+propertyName.toLowerCase());
	                }else if(metaData.isProcessObject){
	                    if(angular.isDefined(propertyMetaData.fieldtype) 
	                        && angular.isDefined(propertyMetaData.cfc) 
	                        && ["one-to-many","many-to-many"].indexOf(propertyMetaData.fieldtype) > -1
	                    ){
	                        return metaData.$$getRBKey('processObject.'+metaData.className.toLowerCase()+'.'+propertyName.toLowerCase()+',entity.'+propertyMetaData.cfc.toLowerCase()+'_plural');
	                    }else if(angular.isDefined(propertyMetaData.fieldtype) 
	                        && angular.isDefined(propertyMetaData.cfc) 
	                    ){
	                        return metaData.$$getRBKey('processObject.'+metaData.className.toLowerCase()+'.'+propertyName.toLowerCase()+',entity.'+propertyMetaData.cfc.toLowerCase());
	                    }
	                    return metaData.$$getRBKey('processObject.'+metaData.className.toLowerCase()+'.'+propertyName.toLowerCase());
	                    
	                }
	                return metaData.$$getRBKey('object.'+metaData.className.toLowerCase()+'.'+propertyName.toLowerCase());
	            }
	            
	            var _getPropertyHint = function(propertyName,metaData){
	                var propertyMetaData = metaData[propertyName];
	                var keyValue = '';
	                if(angular.isDefined(propertyMetaData['hb_rbkey'])){
	                    keyValue = metaData.$$getRBKey(propertyMetaData['hb_rbkey']+'_hint');
	                }else if (angular.isUndefined(propertyMetaData['persistent']) || (angular.isDefined(propertyMetaData['persistent']) && propertyMetaData['persistent'] === true)){
	                    keyValue = metaData.$$getRBKey('entity.'+metaData.className.toLowerCase()+'.'+propertyName.toLowerCase()+'_hint');
	                }else{
	                    keyValue = metaData.$$getRBKey('object.'+metaData.className.toLowerCase()+'.'+propertyName.toLowerCase());
	                }
	                if(keyValue.slice(-8) !== '_missing'){
	                    return keyValue;
	                }
	                return '';
	            }
	            
	            
	            
	            var _getPropertyFieldType = function(propertyName,metaData){
	                var propertyMetaData = metaData[propertyName];
	                if(angular.isDefined(propertyMetaData['hb_formfieldtype'])){
	                    return propertyMetaData['hb_formfieldtype'];
	                }
	                
	                if(angular.isUndefined(propertyMetaData.fieldtype) || propertyMetaData.fieldtype === 'column'){
	                    var dataType = "";
	                    
	                    if(angular.isDefined(propertyMetaData.ormtype)){
	                        dataType = propertyMetaData.ormtype;
	                    }else if (angular.isDefined(propertyMetaData.type)){
	                        dataType = propertyMetaData.type;
	                    }
	                    if(["boolean","yes_no","true_false"].indexOf(dataType) > -1){
	                        return "yesno";
	                    }else if (["date","timestamp"].indexOf(dataType) > -1){
	                        return "dateTime";
	                    }else if ("array" === dataType){
	                        return "select";
	                    }else if ("struct" === dataType){
	                        return "checkboxgroup";
	                    }else if(propertyName.indexOf('password') > -1){
	                        return "password";
	                    }
	                    
	                }else if(angular.isDefined(propertyMetaData.fieldtype) && propertyMetaData.fieldtype === 'many-to-one'){
	                    return 'select';
	                }else if(angular.isDefined(propertyMetaData.fieldtype) && propertyMetaData.fieldtype === 'one-to-many'){
	                    return 'There is no property field type for one-to-many relationship properties, which means that you cannot get a fieldtype for '+propertyName;
	                }else if(angular.isDefined(propertyMetaData.fieldtype) && propertyMetaData.fieldtype === 'many-to-many'){
	                    return "listingMultiselect";
	                }
	            
	                return "text";
	            }
	            
	            var _getPropertyFormatType = function(propertyName,metaData){
	                var propertyMetaData = metaData[propertyName];
	                
	                if(angular.isDefined(propertyMetaData['hb_formattype'])){
	                    return propertyMetaData['hb_formattype'];
	                }else if(angular.isUndefined(propertyMetaData.fieldtype) || propertyMetaData.fieldtype === 'column'){
	                    var dataType = "";
	                    
	                    if(angular.isDefined(propertyMetaData.ormtype)){
	                        dataType = propertyMetaData.ormtype;
	                    }else if (angular.isDefined(propertyMetaData.type)){
	                        dataType = propertyMetaData.type;
	                    }
	                    
	                    if(["boolean","yes_no","true_false"].indexOf(dataType) > -1){
	                        return "yesno";
	                    }else if (["date","timestamp"].indexOf(dataType) > -1){
	                        return "dateTime";
	                    }else if (["big_decimal"].indexOf(dataType) > -1 && propertyName.slice(-6) === 'weight'){
	                        return "weight";
	                    }else if (["big_decimal"].indexOf(dataType) > -1){
	                        return "currency";
	                    }
	                }
	                return 'none';
	            }
	            
	            var _isSimpleValue = function(value){
	                
	                if( 
	                    angular.isString(value) || angular.isNumber(value) 
	                    || angular.isDate(value) || value === false || value === true
	                ){
	                    return true;
	                }else{
	                    return false;
	                }
	            }
	            
	            var utilityService = {
	                formatValue:function(value,formatType,formatDetails,entityInstance){
	                    if(angular.isUndefined(formatDetails)){
	                        formatDetails = {};
	                    }
	                    var typeList = ["currency","date","datetime","pixels","percentage","second","time","truefalse","url","weight","yesno"];
	                    
	                    if(typeList.indexOf(formatType)){
	                        utilityService['format_'+formatType](value,formatDetails,entityInstance);
	                    }
	                    return value;
	                },
	                format_currency:function(value,formatDetails,entityInstance){
	                    if(angular.isUndefined){
	                        formatDetails = {};
	                    }
	                },
	                format_date:function(value,formatDetails,entityInstance){
	                    if(angular.isUndefined){
	                        formatDetails = {};
	                    }
	                },
	                format_datetime:function(value,formatDetails,entityInstance){
	                    if(angular.isUndefined){
	                        formatDetails = {};
	                    }
	                },
	                format_pixels:function(value,formatDetails,entityInstance){
	                    if(angular.isUndefined){
	                        formatDetails = {};
	                    }
	                },
	                format_yesno:function(value,formatDetails,entityInstance){
	                    if(angular.isUndefined){
	                        formatDetails = {};
	                    }
	                    if(Boolean(value) === true ){
	                        return entityInstance.metaData.$$getRBKey("define.yes");
	                    }else if(value === false || value.trim() === 'No' || value.trim === 'NO' || value.trim() === '0'){
	                        return entityInstance.metaData.$$getRBKey("define.no");
	                    }
	                }
	            }
	            
	            var _getFormattedValue = function(propertyName,formatType,entityInstance){
	                var value = entityInstance.$$getPropertyByName(propertyName);
	                
	                if(angular.isUndefined(formatType)){
	                    formatType = entityInstance.metaData.$$getPropertyFormatType(propertyName);
	                }
	                
	                if(formatType === "custom"){
	                    return entityInstance['$$get'+propertyName+Formatted]();
	                }else if(formatType === "rbkey"){
	                    if(angular.isDefined(value)){
	                        return entityInstance.$$getRBKey('entity.'+entityInstance.metaData.className.toLowerCase()+'.'+propertyName.toLowerCase()+'.'+value);
	                    }else{
	                        return '';
	                    }
	                }
	                if(angular.isUndefined(value)){
	                    var propertyMeta = entityInstance.metaData[propertyName];
	                    if(angular.isDefined(propertyMeta['hb_nullRBKey'])){
	                        return entityInstance.$$getRbKey(propertyMeta['hb_nullRBKey']);
	                    }
	                    
	                    return "";
	                }else if (_isSimpleValue(value)){
	                    var formatDetails = {};
	                    if(angular.isDefined(entityInstance.data['currencyCode'])){
	                        formatDetails.currencyCode = entityInstance.$$getCurrencyCode();
	                    }
	                    
	                    
	                    return utilityService.formatValue(value,formatType,formatDetails,entityInstance);
	                }
	            }
	            
	            var _delete = function(entityInstance){
	                var entityName = entityInstance.metaData.className;
	                var entityID = entityInstance.$$getID();
	                var context = 'delete';
	                var deletePromise = $delegate.saveEntity(entityName,entityID,{},context);
	                return deletePromise;
	            }
	            
	            var _setValueByPropertyPath = function (obj,path, value) {
	                var a = path.split('.');
	                var context = obj;
	                var selector;
	                var myregexp = /([a-zA-Z]+)(\[(\d)\])+/; // matches:  item[0]
	                var match = null;
	
	                for (var i = 0; i < a.length - 1; i += 1) {
	                    match = myregexp.exec(a[i]);
	                    if (match !== null) context = context[match[1]][match[3]];
	                    else context = context[a[i]];
	
	                }
	
	                // check for ending item[xx] syntax
	                match = myregexp.exec([a[a.length - 1]]);
	
	                if (match !== null) context[match[1]][match[3]] = value;
	                else context[a[a.length - 1]] = value;
	
	                
	            }
	            
	            var _getValueByPropertyPath = function(obj,path) {
	                  var paths = path.split('.')
	                    , current = obj
	                    , i;
	
	                  for (i = 0; i < paths.length; ++i) {
	                    if (current[paths[i]] == undefined) {
	                      return undefined;
	                    } else {
	                      current = current[paths[i]];
	                    }
	                  }
	                  return current;
	            }
	            
	            var _addReturnedIDs = function(returnedIDs,entityInstance){
	                
	                for(var key in returnedIDs){
	                    if(angular.isArray(returnedIDs[key])){
	                        var arrayItems = returnedIDs[key];
	                        var entityInstanceArray = entityInstance.data[key];
	                        for(var i in arrayItems){
	                            var arrayItem = arrayItems[i];
	                            var entityInstanceArrayItem = entityInstance.data[key][i];
	                            _addReturnedIDs(arrayItem,entityInstanceArrayItem)
	                        }
	                    }else if(angular.isObject(returnedIDs[key])){
	                        for(var k in returnedIDs[key]){
	                            addReturnedIDs(returnedIDs[key][k],entityInstance.data[key][k]);
	                        }
	                    }else{
	                        entityInstance.data[key] = returnedIDs[key];
	                    }
	                }
	            }
	            
	            
	
	            var _save = function(entityInstance){
	                 var timeoutPromise = $timeout(function(){
	                    //$log.debug('save begin');
	                    //$log.debug(entityInstance);
	                    
	                    var entityID = entityInstance.$$getID();
	                    
	                    var modifiedData = _getModifiedData(entityInstance);
	                    //$log.debug('modifiedData complete');
	                    //$log.debug(modifiedData);
	                    timeoutPromise.valid = modifiedData.valid;
	                    if(modifiedData.valid){
	                        var params = {};
	                        params.serializedJsonData = angular.toJson(modifiedData.value);
	                        //if we have a process object then the context is different from the standard save
	                        var entityName = '';
	                        var context = 'save';
	                        if(entityInstance.metaData.isProcessObject === 1){
	                            var processStruct = modifiedData.objectLevel.metaData.className.split('_');
	                            entityName = processStruct[0];
	                            context = processStruct[1];
	                        }else{
	                            entityName = modifiedData.objectLevel.metaData.className;
	                        }
	                        
	                        var savePromise = $delegate.saveEntity(entityName,entityInstance.$$getID(),params,context);
	                        savePromise.then(function(response){
	                            var returnedIDs = response.data;
	                            
	                            
	                            _addReturnedIDs(returnedIDs,modifiedData.objectLevel);
	                        });
	                    }else{
	                        
	                        //select first, visible, and enabled input with a class of ng-invalid
	                    
	                        var target = $('input.ng-invalid:first:visible:enabled');
	                        //$log.debug('input is invalid');
	                        //$log.debug(target);
	                        target.focus();
	                    var targetID = target.attr('id');
	                        $anchorScroll();
	                        
	                    }
	                });
	                return timeoutPromise;
	                /*
	                
	                
	                
	                
	                */
	            }
	            
	            var _getModifiedData = function(entityInstance){
	                var modifiedData = {};
	                modifiedData = getModifiedDataByInstance(entityInstance);
	                return modifiedData;
	            }
	            
	            var getObjectSaveLevel = function(entityInstance){
	                var objectLevel = entityInstance;
	                
	                var entityID = entityInstance.$$getID();    
	                
	                angular.forEach(entityInstance.parents,function(parentObject){
	                    if(angular.isDefined(entityInstance.data[parentObject.name]) && entityInstance.data[parentObject.name].$$getID() === '' && (angular.isUndefined(entityID) || !entityID.trim().length)){
	                        
	                        
	                        var parentEntityInstance = entityInstance.data[parentObject.name]; 
	                        var parentEntityID = parentEntityInstance.$$getID();
	                        if(parentEntityID === '' && parentEntityInstance.forms){
	                            objectLevel = getObjectSaveLevel(parentEntityInstance);
	                        }
	                    }
	                });
	                
	                return objectLevel;
	            }
	
	            var validateObject = function(entityInstance){
	                
	                var modifiedData = {};
	                var valid = true;
	                
	                var forms = entityInstance.forms;
	                //$log.debug('process base level data');
	                for(var f in forms){
	                    
	                    var form = forms[f];
	                    form.$setSubmitted();   //Sets the form to submitted for the validation errors to pop up.
	                    if(form.$dirty && form.$valid){
	                        for(var key in form){
	                            //$log.debug('key:'+key);
	                            if(key.charAt(0) !== '$'){
	                                var inputField = form[key];
	                                if(angular.isDefined(inputField.$valid) && inputField.$valid === true && inputField.$dirty === true){
	                                    
	                                    
	                                    if(angular.isDefined(entityInstance.metaData[key]) 
	                                    && angular.isDefined(entityInstance.metaData[key].hb_formfieldtype) 
	                                    && entityInstance.metaData[key].hb_formfieldtype === 'json'){
	                                        modifiedData[key] = angular.toJson(form[key].$modelValue);      
	                                    }else{
	                                        modifiedData[key] = form[key].$modelValue;
	                                    }
	                                }
	                            }
	                        }
	                    }else{
	                        if(!form.$valid){
	                            valid = false;
	                        }
	                        
	                    }
	                }
	                modifiedData[entityInstance.$$getIDName()] = entityInstance.$$getID();
	                //$log.debug(modifiedData); 
	
	
	                
	                //$log.debug('process parent data');
	                if(angular.isDefined(entityInstance.parents)){
	                    for(var p in entityInstance.parents){
	                        var parentObject = entityInstance.parents[p];
	                        var parentInstance = entityInstance.data[parentObject.name];
	                        if(angular.isUndefined(modifiedData[parentObject.name])){
	                            modifiedData[parentObject.name] = {};
	                        }
	                        var forms = parentInstance.forms;
	                        for(var f in forms){
	                            var form = forms[f];
	                            form.$setSubmitted();
	                            if(form.$dirty && form.$valid){
	                            for(var key in form){
	                                if(key.charAt(0) !== '$'){
	                                    var inputField = form[key];
	                                    if(angular.isDefined(inputField) && angular.isDefined(inputField.$valid) && inputField.$valid === true && inputField.$dirty === true){
	                                        
	                                        if(angular.isDefined(parentInstance.metaData[key]) 
	                                        && angular.isDefined(parentInstance.metaData[key].hb_formfieldtype) 
	                                        && parentInstance.metaData[key].hb_formfieldtype === 'json'){
	                                            modifiedData[parentObject.name][key] = angular.toJson(form[key].$modelValue);       
	                                        }else{
	                                            modifiedData[parentObject.name][key] = form[key].$modelValue;
	                                        }
	                                    }
	                                }
	                            }
	                            }else{
	                                if(!form.$valid){
	                                    valid = false;
	                                }
	                                
	                            }
	                        }
	                        modifiedData[parentObject.name][parentInstance.$$getIDName()] = parentInstance.$$getID();
	                    }
	                }
	                //$log.debug(modifiedData);
	
	                
	                //$log.debug('begin child data');
	                var childrenData = validateChildren(entityInstance);
	                //$log.debug('child Data');
	                //$log.debug(childrenData);
	                angular.extend(modifiedData,childrenData);
	                return {
	                    valid:valid,
	                    value:modifiedData
	                };
	                
	            }
	
	            
	            var validateChildren = function(entityInstance){
	                var data = {}
	                
	                if(angular.isDefined(entityInstance.children) && entityInstance.children.length){
	                    
	                    data = getDataFromChildren(entityInstance);
	                }
	                return data;
	            }
	            
	            var processChild = function(entityInstance,entityInstanceParent){
	     
	                var data = {};
	                var forms = entityInstance.forms;
	                
	                for(var f in forms){
	                    
	                    var form = forms[f];
	                    
	                    angular.extend(data,processForm(form,entityInstance));
	                }
	                
	                if(angular.isDefined(entityInstance.children) && entityInstance.children.length){
	                    
	                    var childData = getDataFromChildren(entityInstance);
	                    angular.extend(data,childData);
	                }
	                if(angular.isDefined(entityInstance.parents) && entityInstance.parents.length){
	                    
	                    var parentData = getDataFromParents(entityInstance,entityInstanceParent);
	                    angular.extend(data,parentData);
	                }
	                
	                return data;
	            }
	
	            var processParent = function(entityInstance){
	                var data = {};
	                if(entityInstance.$$getID() !== ''){
	                    data[entityInstance.$$getIDName()] = entityInstance.$$getID();
	                }
	                
	                //$log.debug('processParent');
	                //$log.debug(entityInstance);
	                var forms = entityInstance.forms;
	                    
	                for(var f in forms){
	                    var form = forms[f];
	                    
	                    data = angular.extend(data,processForm(form,entityInstance));
	                }
	                
	                return data;
	            }
	
	            var processForm = function(form,entityInstance){
	                //$log.debug('begin process form');
	                var data = {};
	                form.$setSubmitted();   
	                for(var key in form){
	                    if(key.charAt(0) !== '$'){
	                        var inputField = form[key];
	                        if(angular.isDefined(inputField) && angular.isDefined(inputField) && inputField.$valid === true && inputField.$dirty === true){ 
	                            
	                            if(angular.isDefined(entityInstance.metaData[key]) && angular.isDefined(entityInstance.metaData[key].hb_formfieldtype) && entityInstance.metaData[key].hb_formfieldtype === 'json'){
	                                data[key] = angular.toJson(form[key].$modelValue);      
	                            }else{
	                                data[key] = form[key].$modelValue;      
	                            }
	                                        
	                        }
	                    }
	                }
	                data[entityInstance.$$getIDName()] = entityInstance.$$getID();
	                //$log.debug('process form data');
	                //$log.debug(data);
	                return data;
	            }
	
	            var getDataFromParents = function(entityInstance,entityInstanceParent){
	                var data = {};
	                
	                for(var c in entityInstance.parents){
	                    var parentMetaData = entityInstance.parents[c];
	                    if(angular.isDefined(parentMetaData)){
	                        var parent = entityInstance.data[parentMetaData.name];
	                        if(angular.isObject(parent) && entityInstanceParent !== parent && parent.$$getID() !== '') {
	                            if(angular.isUndefined(data[parentMetaData.name])){
	                                data[parentMetaData.name] = {};
	                            }
	                            var parentData = processParent(parent);
	                            //$log.debug('parentData:'+parentMetaData.name);
	                            //$log.debug(parentData);
	                            angular.extend(data[parentMetaData.name],parentData);
	                        }else{
	                            
	                        }
	                    }
	                    
	                };
	                
	                return data;
	            }
	
	            var getDataFromChildren = function(entityInstance){
							var data = {};
							
							//$log.debug('childrenFound');
							//$log.debug(entityInstance.children);
				    		for(var c in entityInstance.children){
				    			var childMetaData = entityInstance.children[c];
								var children = entityInstance.data[childMetaData.name];
								//$log.debug(childMetaData);
								//$log.debug(children);
								if(angular.isArray(entityInstance.data[childMetaData.name])){
									if(angular.isUndefined(data[childMetaData.name])){
										data[childMetaData.name] = [];
									}
									angular.forEach(entityInstance.data[childMetaData.name],function(child,key){
										//$log.debug('process child array item')
										var childData = processChild(child,entityInstance);
										//$log.debug('process child return');
										//$log.debug(childData);
										data[childMetaData.name].push(childData);
									});
								}else{
									if(angular.isUndefined(data[childMetaData.name])){
										data[childMetaData.name] = {};
									}
									var child = entityInstance.data[childMetaData.name];
									//$log.debug('begin process child');
									var childData = processChild(child,entityInstance);
									//$log.debug('process child return');
									//$log.debug(childData);
									angular.extend(data,childData);
								}
								 
							}
							//$log.debug('returning child data');
							//$log.debug(data);

							return data;
				    	}
				    	
				    	var getModifiedDataByInstance = function(entityInstance){
				    		var modifiedData = {};
				    		
				    		
				    		
				    		
				    		
				    		var objectSaveLevel = getObjectSaveLevel(entityInstance);
							//$log.debug('objectSaveLevel : ' + objectSaveLevel );
							var valueStruct = validateObject(objectSaveLevel);
							//$log.debug('validateObject data');
							//$log.debug(valueStruct.value);
							
							modifiedData = {
								objectLevel:objectSaveLevel,
								value:valueStruct.value,
								valid:valueStruct.valid
							}
				    		return modifiedData;
				    	}
				    	
				    	var _getValidationsByProperty = function(entityInstance,property){
				    		return entityInstance.validations.properties[property];
				    	}
	            
	            var _getValidationByPropertyAndContext = function(entityInstance,property,context){
	                var validations = _getValidationsByProperty(entityInstance,property);
	                for(var i in validations){
	                    
	                    var contexts = validations[i].contexts.split(',');
	                    for(var j in contexts){
	                        if(contexts[j] === context){
	                            return validations[i];
	                        }
	                    }
	                    
	                }
	            }
				
				return $delegate;
			}]);
		 }]);		
		
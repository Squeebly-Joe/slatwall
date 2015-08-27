var slatwalladmin;
(function (slatwalladmin) {
    'use strict';
    class OrderItemGiftRecipientControl {
        constructor($scope, $injector, $slatwall) {
            this.$scope = $scope;
            this.$injector = $injector;
            this.$slatwall = $slatwall;
            this.getQuantity = () => {
                if (isNaN(this.quantity)) {
                    return 0;
                }
                else {
                    return this.quantity;
                }
            };
            this.updateResults = (keyword) => {
                console.log("searching for:" + keyword);
                var accountConfig = new slatwalladmin.CollectionConfig($slatwall, "Account");
                accountConfig.addFilter("firstName", "%" + keyword + "%", "like", "OR");
                accountConfig.addFilter("lastName", "%" + keyword + "%", "like", "OR");
                accountConfig.addFilter("primaryEmailAddress", "%" + keyword + "%", "like", "OR");
                accountConfig.setDisplayProperties("primaryEmailAddress", "firstName", "lastName");
                console.log(accountConfig.getJson());
                var accountPromise = $slatwall.getEntity('account', accountConfig.getJson());
                accountPromise.then((response) => {
                    this.$scope.collection = response;
                    console.log(this.$scope.collection);
                });
                return this.$scope.collection;
            };
            this.getUnassignedCountArray = () => {
                var unassignedCountArray = new Array();
                if (this.getUnassignedCount() > 1) {
                    for (var i = 1; i < this.getUnassignedCount(); i++) {
                        unassignedCountArray.push(i);
                    }
                }
                else {
                    unassignedCountArray.push(1);
                }
                console.log(unassignedCountArray);
                return unassignedCountArray;
            };
            this.getUnassignedCount = () => {
                var unassignedCount = this.getQuantity();
                angular.forEach(this.orderItemGiftRecipients, (orderItemGiftRecipient) => {
                    unassignedCount -= orderItemGiftRecipient.quantity;
                });
                return unassignedCount;
            };
            this.addGiftRecipient = () => {
                var giftRecipient = new slatwalladmin.GiftRecipient();
                angular.extend(giftRecipient, this.currentGiftRecipient);
                this.orderItemGiftRecipients.push(giftRecipient);
                this.currentGiftRecipient = new slatwalladmin.GiftRecipient();
                ;
            };
            this.getTotalQuantity = () => {
                var totalQuantity = 0;
                angular.forEach(this.orderItemGiftRecipients, (orderItemGiftRecipient) => {
                    totalQuantity += orderItemGiftRecipient.quantity;
                });
                return totalQuantity;
            };
            this.getMessageCharactersLeft = () => {
                var totalChar = 250;
                //get chars subtract return
            };
            this.orderItemGiftRecipients = $scope.orderItemGiftRecipients = [];
            $scope.collection = {};
            this.quantity = angular.element("input[ng-model='giftRecipientControl.quantity']").val();
            var count = 1;
            this.currentGiftRecipient = new slatwalladmin.GiftRecipient();
        }
    }
    OrderItemGiftRecipientControl.$inject = ["$scope", "$injector", "$slatwall"];
    slatwalladmin.OrderItemGiftRecipientControl = OrderItemGiftRecipientControl;
    angular.module('slatwalladmin').controller('preprocessorderitem_addorderitemgiftrecipient', OrderItemGiftRecipientControl);
})(slatwalladmin || (slatwalladmin = {}));

//# sourceMappingURL=../controllers/preprocessorderitem_addorderitemgiftrecipient.js.map
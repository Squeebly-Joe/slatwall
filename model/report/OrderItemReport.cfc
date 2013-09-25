<!---

    Slatwall - An Open Source eCommerce Platform
    Copyright (C) 2011 ten24, LLC

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
    
    Linking this library statically or dynamically with other modules is
    making a combined work based on this library.  Thus, the terms and
    conditions of the GNU General Public License cover the whole
    combination.
 
    As a special exception, the copyright holders of this library give you
    permission to link this library with independent modules to produce an
    executable, regardless of the license terms of these independent
    modules, and to copy and distribute the resulting executable under
    terms of your choice, provided that you also meet, for each linked
    independent module, the terms and conditions of the license of that
    module.  An independent module is a module which is not derived from
    or based on this library.  If you modify this library, you may extend
    this exception to your version of the library, but you are not
    obligated to do so.  If you do not wish to do so, delete this
    exception statement from your version.

Notes:

--->
<cfcomponent accessors="true" persistent="false" output="false" extends="HibachiReport">
	
	<cffunction name="getReportDateTimeDefinitions">
		<cfreturn [
			{alias='orderOpenDateTime', dataColumn='SwOrder.orderOpenDateTime', title=rbKey('entity.order.orderOpenDateTime')},
			{alias='orderCloseDateTime', dataColumn='SwOrder.orderCloseDateTime', title=rbKey('entity.order.orderCloseDateTime')}
		] />
	</cffunction>
	
	<cffunction name="getMetricDefinitions">
		<cfreturn [
			{alias='revenue', calculation='(SUM(salePreDiscount) - SUM(itemDiscount)) + (SUM(returnPreDiscount) - SUM(itemDiscount))', formatType="currency"},
			{alias='salePreDiscount', function='sum', formatType="currency"},
			{alias='returnPreDiscount', function='sum', formatType="currency"},
			{alias='quantity', function='sum', title=rbKey('entity.orderItem.quantity')},
			{alias='itemDiscount', function='sum', formatType="currency"},
			{alias='itemTax', function='sum', formatType="currency"},
			{alias='saleAfterDiscount', calculation='SUM(salePreDiscount) - SUM(itemDiscount)', formatType="currency"},
			{alias='returnAfterDiscount', calculation='SUM(returnPreDiscount) - SUM(itemDiscount)', formatType="currency"}
		] />
	</cffunction>
	
	<cffunction name="getDimensionDefinitions">
		<cfreturn [
			{alias='productName', filterAlias='productID', filterDimension='skuCode', title=rbKey('entity.product.productName')},
			{alias='skuCode', title=rbKey('entity.sku.skuCode')},
			{alias='productTypeName', filterAlias='productTypeID', filterDimension='productName', title=rbKey('entity.productType.productTypeName')},
			{alias='brandName', title=rbKey('entity.brand.brandName')},
			{alias='currencyCode', title=rbKey('entity.currency.currencyCode')},
			{alias='price', formatType="currency", title=rbKey('entity.orderItem.price')},
			{alias='type', title=rbKey('entity.orderItem.orderItemType')},
			{alias='orderNumber', title=rbKey('entity.order.orderNumber')},
			{alias='countryCode', title=rbKey('entity.address.countryCode')},
			{alias='stateCode', title=rbKey('entity.address.stateCode')},
			{alias='city', title=rbKey('entity.address.city')}
		] />
	</cffunction>
	
	<cffunction name="getData" returnType="Query">
		<cfif not structKeyExists(variables, "data")>
			<cfquery name="variables.data">
				SELECT
					SwSku.skuID,
					SwSku.skuCode,
					SwProduct.productID,
					SwProduct.productName,
					SwProductType.productTypeID,
					SwProductType.productTypeName,
					SwBrand.brandID,
					SwBrand.brandName,
					SwOrder.orderID,
					SwOrder.orderNumber,
					SwOrder.currencyCode,
					ort.type,
					SwAddress.countryCode,
					SwAddress.stateCode,
					SwAddress.city,
					SwOrderItem.quantity,
					SwOrderItem.price,
					CASE
    					WHEN SwOrderItem.orderItemTypeID = '444df2e9a6622ad1614ea75cd5b982ce' THEN
    						(SwOrderItem.price * SwOrderItem.quantity)
						ELSE
							0
					END as salePreDiscount,
					CASE
    					WHEN SwOrderItem.orderItemTypeID = '444df2eac18fa589af0f054442e12733' THEN
    						(SwOrderItem.price * SwOrderItem.quantity) * -1
    					ELSE
    						0
					END as returnPreDiscount,
					( SELECT COALESCE(SUM(swpa.discountAmount), 0) FROM SwPromotionApplied swpa WHERE swpa.orderItemID = SwOrderItem.orderItemID ) as itemDiscount,
					( SELECT COALESCE(SUM(swta.taxAmount), 0) FROM SwTaxApplied swta WHERE swta.orderItemID = SwOrderItem.orderItemID ) as itemTax,
					#getReportDateTimeSelect()#
				FROM
					SwOrderItem
				  INNER JOIN
				  	SwType ort on SwOrderItem.orderItemTypeID = ort.typeID
				  LEFT JOIN
				  	SwOrderFulfillment on SwOrderItem.orderFulfillmentID = SwOrderFulfillment.orderFulfillmentID
				  INNER JOIN
				  	SwOrder on SwOrderItem.orderID = SwOrder.orderID
				  INNER JOIN
				  	SwAccount on SwOrder.accountID = SwAccount.accountID
				  INNER JOIN
				  	SwSku on SwOrderItem.skuID = SwSku.skuID
				  INNER JOIN
				  	SwProduct on SwSku.productID = SwProduct.productID
				  INNER JOIN
				  	SwProductType on SwProduct.productTypeID = SwProductType.productTypeID
				  LEFT JOIN
				  	SwBrand on SwProduct.brandID = SwBrand.brandID
				  LEFT JOIN
				  	SwAddress on SwOrderFulfillment.shippingAddressID = SwAddress.addressID
				WHERE
					SwOrder.orderOpenDateTime is not null
				  AND
					#getReportDateTimeWhere()#
			</cfquery>
		</cfif>
		
		<cfreturn variables.data />
	</cffunction>
	
</cfcomponent>
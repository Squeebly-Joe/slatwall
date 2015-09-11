/*

    Slatwall - An Open Source eCommerce Platform
    Copyright (C) ten24, LLC
	
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
    
    Linking this program statically or dynamically with other modules is
    making a combined work based on this program.  Thus, the terms and
    conditions of the GNU General Public License cover the whole
    combination.
	
    As a special exception, the copyright holders of this program give you
    permission to combine this program with independent modules and your 
    custom code, regardless of the license terms of these independent
    modules, and to copy and distribute the resulting program under terms 
    of your choice, provided that you follow these specific guidelines: 

	- You also meet the terms and conditions of the license of each 
	  independent module 
	- You must not alter the default display of the Slatwall name or logo from  
	  any part of the application 
	- Your custom code must not alter or create any files inside Slatwall, 
	  except in the following directories:
		/integrationServices/

	You may copy and distribute the modified version of this program that meets 
	the above guidelines as a combined work under the terms of GPL for this program, 
	provided that you include the source code of that other code when and as the 
	GNU GPL requires distribution of source code.
    
    If you modify this program, you may extend this exception to your version 
    of the program, but you are not obligated to do so.

Notes:

*/
component extends="Slatwall.meta.tests.unit.SlatwallUnitTestBase" {

	// @hint put things in here that you want to run befor EACH test
	public void function setUp() {
		super.setup();
		
	}

	public void function test_creating_card(){ 
		
		var giftCardData = { 
			giftCardID=""
		}; 
		
		var giftCard = createPersistedTestEntity('GiftCard', giftCardData); 
		var processGiftCard = giftCard.getProcessObject( 'Create' );
		
		var termData = { 
			termID="",
			termName="testy",
			termHours="1",
			termDays="2", 
			termMonths="3", 
			termYears="4"
		};
		
		var giftExpirationTerm = createPersistedTestEntity("term", termData); 
		
		assertFalse(giftCard.hasGiftCardExpirationTerm(giftExpirationTerm)); 
		
		giftCard.setGiftCardExpirationTerm(giftExpirationTerm); 
		processGiftCard.setGiftCardExpirationTerm(giftExpirationTerm); 
		
		assertTrue(giftCard.hasGiftCardExpirationTerm(giftExpirationTerm));
		
		assertTrue(giftCard.getGiftCardExpirationTerm().getTermID()==processGiftCard.getGiftCardExpirationTerm().getTermID()); 
		
		giftCard.setGiftCardCode("1234432112344321");
		processGiftCard.setGiftCardCode("1234432112344321");
		
		assertTrue(giftCard.getGiftCardCode() != processGiftCard.getGiftCardCode()); //these will be autogenerated based on settings
		
		giftCard.setGiftCardPin("1234"); 
		processGiftCard.setGiftCardPin("1234"); 
		
		assertTrue(giftCard.getGiftCardPin() == processGiftCard.getGiftCardPin()); 
		
		giftCard.setExpirationDate(processGiftCard.getExpirationDate()); 
		
		assertTrue(giftCard.getExpirationDate() == giftExpirationTerm.getEndDate()); 
		
		var orderItemData = {
			orderItemID='',
			price='5'
		};
		var giftOrderItem = createPersistedTestEntity('orderItem',orderItemData);
		
		assertFalse(giftCard.hasOriginalOrderItem(giftOrderItem));
		
		giftCard.setOriginalOrderItem(giftOrderItem); 		
		processGiftCard.setOriginalOrderItem(giftOrderItem); 
		
		assertTrue(giftCard.hasOriginalOrderItem(giftOrderItem)); 
	
		assertTrue(giftCard.hasOriginalOrderItem(giftOrderItem)); 
		assertTrue(processGiftCard.getOriginalOrderItem().getOrderItemID() == giftOrderItem.getOrderItemID()); 
		
		var accountData = {
			accountID=''
		};
		var account = createPersistedTestEntity('Account', accountData);
		
		giftCard.setOwnerAccount(account); 
		processGiftCard.setOwnerAccount(account);
		
		assertTrue(giftCard.hasOwnerAccount(account)); 
		assertTrue(processGiftCard.getOwnerAccount().getAccountID() == account.getAccountID());
		
		giftCard = request.slatwallScope.getService("giftCardService").saveGiftCard(giftCard);
		
		assertTrue(!giftCard.hasErrors()); 
		
		request.slatwallScope.getService("giftCardService").deleteGiftCard(giftCard);
		
		
	} 
}
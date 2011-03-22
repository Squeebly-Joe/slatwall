﻿<cfparam name="rc.edit" default="false" />
<cfparam name="rc.optiongroup" type="any" />
 
<cfoutput>
<ul id="navTask">
	<cfif !rc.optionGroup.isNew()><cf_ActionCaller action="admin:option.create" querystring="optiongroupid=#rc.optiongroup.getoptiongroupid()#" type="list"></cfif>
    <cfif !rc.edit><cf_ActionCaller action="admin:option.editoptiongroup" querystring="optiongroupid=#rc.optionGroup.getOptionGroupID()#" type="list"></cfif>
	<cf_ActionCaller action="admin:option.list" type="list">
</ul>
<cfif rc.edit>
<form name="OptionGroupForm" id="OptionGroupForm" enctype="multipart/form-data" action="#buildURL(action='admin:option.saveoptiongroup')#" method="post">
<input type="hidden" id="optionGroupID" name="optionGroupID" value="#rc.optionGroup.getOptionGroupID()#" />
</cfif>
    <dl class="oneColumn optionDetail">
    	<cf_PropertyDisplay object="#rc.OptionGroup#" property="optionGroupName" edit="#rc.edit#" />
		<cf_PropertyDisplay object="#rc.OptionGroup#" property="isImageGroup" edit="#rc.edit#" tooltip=true />
		<cfif rc.edit>
		<!--- if editing, display field for image uploading --->
		<cf_PropertyDisplay object="#rc.OptionGroup#" property="OptionGroupImage" edit="#rc.edit#" editType="file" tooltip=true>
		</cfif>
		<cfif len(rc.OptionGroup.getOptionGroupImage())>
		<!--- if editing, and optiongroup has an image, display it  --->
		<dt>
			#rc.$.Slatwall.rbKey("entity.optiongroup.optiongroupimage")#
		</dt>
		<dd>
			<a href="#rc.OptionGroup.getImagePath()#">#rc.OptionGroup.displayImage("40")#</a>
		<cfif rc.edit>
			<input type="checkbox" name="removeImage" value="1" id="chkRemoveImage"> <label for="chkRemoveImage">#rc.$.Slatwall.rbKey("admin.option.removeimage")#</label>
		</cfif>
		</dd>
		</cfif>
		<cf_PropertyDisplay object="#rc.OptionGroup#" property="OptionGroupDescription" edit="#rc.edit#" toggle="show" toggletext="#rc.$.Slatwall.rbKey('sitemanager.content.fields.expand')#,#rc.$.Slatwall.rbKey('sitemanager.content.fields.close')#" editType="wysiwyg" />
	</dl>
<cfif rc.edit>
<div id="actionButtons" class="clearfix">
	<cf_actionCaller action="admin:option.list" type="link" class="button" text="#rc.$.Slatwall.rbKey('sitemanager.cancel')#">
	<cfif rc.optiongroup.getOptionsCount() eq 0 and !rc.optionGroup.isNew()>
	<cf_ActionCaller action="admin:option.deleteoptiongroup" querystring="optionGroupID=#rc.optionGroup.getOptionGroupID()#" type="link" class="button" confirmrequired="true" text="#rc.$.Slatwall.rbKey('sitemanager.delete')#">
	</cfif>
	<cf_ActionCaller action="admin:option.saveoptiongroup" type="submit">
</div>
</form>
<cfelse>
<h4>#rc.$.Slatwall.rbKey('entity.optiongroup.options')#</h4>
<ul id="optionList">
<cfloop array="#rc.optionGroup.getOptions()#" index="local.thisOption">
	<li>#local.thisOption.getOptionName()#</li>
</cfloop>
</ul>
</cfif>
</cfoutput>
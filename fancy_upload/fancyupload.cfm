<cfparam name="variables.FUrequired" default="0">
<cfparam name="variables.FUmessage" default="Please enter an image">
<cfparam name="variables.FUtype" default="jpg">
<cfparam name="variables.FUloadbase" default="1">
<cfparam name="variables.FUlabelposition" default="bottom">
<cfparam name="variables.FUwidth" default="100px">
<cfparam name="variables.FUheight" default="20px">
<cfparam name="variables.FUinputname" default="image">

<cfif FUloadbase is 1>
	<script type="text/javascript" src="/includes/js/fancy_upload/fancyupload.js"></script>
	<style type="text/css">
		.filefield {
		background:transparent;
		-moz-opacity:0.0 ;
		filter:alpha(opacity: 000);
		opacity: 0.0;
	}
	</style>
</cfif>

<cfoutput>
<div style="width:#FUwidth#; height:#FUheight#;">
<div style="white-space:nowrap; position:absolute;">
	<input type="text" size="1" style="visibility:hidden;" id="mover" name="mover"><input type="button" value="Pick File" style="width:width:60px;"><cfif FUlabelposition is 'right'> <span id="#FUinputname#attach"><img src="/includes/js/fancy_upload/icons/null.gif" height="16" width="16">No file selected</span></cfif></div>
	
<div style="position: absolute;" id="#FUinputname#holder" class="filefield">
	<cfinput type="file" size="1" name="#FUinputname#" id="#FUinputname#"  onchange="showfile(this.name, this.value, '#FUinputname#attach', '#FUtype#');" required="#FUrequired#" message="#FUmessage#" style="width:width:60px;">
</div>
</div>
<cfif FUlabelposition is 'bottom'><span id="#FUinputname#attach"><img src="/includes/js/fancy_upload/icons/null.gif" height="16" width="16">No file selected</span></cfif>
</cfoutput>
		
<!--- WHEN A PAGE IS RELOADED --->
<script type="text/javascript">
<cfoutput>showfile('#FUinputname#', $('#FUinputname#').value, '#FUinputname#attach', '#FUtype#');</cfoutput>
</script>

<cfset structDelete(variables, "FUrequired")>
<cfset structDelete(variables, "FUmessage")>
<cfset structDelete(variables, "FUtype")>
<cfset structDelete(variables, "FUloadbase")>
<cfset structDelete(variables, "FUlabelposition")>
<cfset structDelete(variables, "FUwidth")>
<cfset structDelete(variables, "FUheight")>
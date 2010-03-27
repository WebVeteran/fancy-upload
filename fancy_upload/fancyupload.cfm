<cfparam name="request.FUrequired" default="0">
<cfparam name="request.FUmessage" default="Please enter an image">
<cfparam name="request.FUtype" default="jpg">
<cfparam name="request.FUlabelposition" default="bottom">
<cfparam name="request.FUwidth" default="100px">
<cfparam name="request.FUheight" default="20px">
<cfparam name="request.FUinputname" default="image">

<cfif not isdefined("Request.FUbaseloaded")>
	<script type="text/javascript" src="/includes/js/fancy_upload/fancyupload.js"></script>
	<style type="text/css">
		.filefield {
		background:transparent;
		-moz-opacity:0.0 ;
		filter:alpha(opacity: 000);
		opacity: 0.0;
		}
		
		.pickfile {
			width:width:60px !important;
			BACKGROUND: #5F893D !important;
			color: white !important;
		}
	</style>
<cfset Request.FUbaseloaded="1">
</cfif>

<cfoutput>
<div style="width:#request.FUwidth#; height:#request.FUheight#;">
<div style="white-space:nowrap; position:absolute;">
	<input type="text" size="1" style="visibility:hidden;" id="mover" name="mover"><input type="button" value="Pick File" class="pickfile"><cfif request.FUlabelposition is 'right'> <span id="#request.FUinputname#attach"><img src="/includes/js/fancy_upload/icons/null.gif" height="16" width="16">No file selected</span></cfif></div>
	
<div style="position: absolute;" id="#request.FUinputname#holder" class="filefield">
	<cfinput type="file" size="1" name="#request.FUinputname#" id="#request.FUinputname#"  onchange="showfile(this.name, this.value, '#request.FUinputname#attach', '#request.FUtype#');" required="#request.FUrequired#" message="#request.FUmessage#" style="width:width:60px;">
</div>
</div>
<cfif request.FUlabelposition is 'bottom'><span id="#request.FUinputname#attach"><img src="/includes/js/fancy_upload/icons/null.gif" height="16" width="16">No file selected</span></cfif>
</cfoutput>
		
<!--- WHEN A PAGE IS RELOADED --->
<script type="text/javascript">
<cfoutput>showfile('#request.FUinputname#', $('#request.FUinputname#').value, '#request.FUinputname#attach', '#request.FUtype#');</cfoutput>
</script>

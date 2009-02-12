function showfile(thisfile, path, ffile, doctype) {
	var myDocPath = path;
	var aPathComps = myDocPath.split("/");
	if (aPathComps.length == 1) {
		var aPathComps = myDocPath.split("\\");
	}
	var myFilename = aPathComps[aPathComps.length-1];
	
	var ext = myFilename.split(".");
	if (ext.length == 1) {
		var myext = "unknown";
	} else {
		var myext = ext[ext.length-1].toLowerCase();
	}
	
	var myfileext = "unknown.png";
	
	filetypes = new Array(34);
		filetypes[0] = new Array(2);
		filetypes[0][0] = 'png'; filetypes[0][1] = 'jpg.gif';
		filetypes[1] = new Array(2);
		filetypes[1][0] = 'jpeg'; filetypes[1][1] = 'jpg.gif';
		filetypes[2] = new Array(2);
		filetypes[2][0] = 'bmp'; filetypes[2][1] = 'jpg.gif';
		filetypes[3] = new Array(2);
		filetypes[3][0] = 'jpg'; filetypes[3][1] = 'jpg.gif';
		filetypes[4] = new Array(2);
		filetypes[4][0] = 'gif'; filetypes[4][1] = 'gif.gif';
		filetypes[5] = new Array(2);
		filetypes[5][0] = 'zip'; filetypes[5][1] = 'archive.png';
		filetypes[6] = new Array(2);
		filetypes[6][0] = 'rar'; filetypes[6][1] = 'archive.png';
		filetypes[7] = new Array(2);
		filetypes[7][0] = 'gz'; filetypes[7][1] = 'archive.png';
		filetypes[8] = new Array(2);
		filetypes[8][0] = 'exe'; filetypes[8][1] = 'exe.gif';
		filetypes[9] = new Array(2);
		filetypes[9][0] = 'setup'; filetypes[9][1] = 'setup.gif';
		filetypes[10] = new Array(2);
		filetypes[10][0] = 'txt'; filetypes[10][1] = 'text.png';
		filetypes[11] = new Array(2);
		filetypes[11][0] = 'htm'; filetypes[11][1] = 'html.gif';
		filetypes[12] = new Array(2);
		filetypes[12][0] = 'html'; filetypes[12][1] = 'html.gif';
		filetypes[13] = new Array(2);
		filetypes[13][0] = 'php'; filetypes[13][1] = 'html.gif';
		filetypes[14] = new Array(2);
		filetypes[14][0] = 'cfm'; filetypes[14][1] = 'html.gif';
		filetypes[15] = new Array(2);
		filetypes[15][0] = 'js'; filetypes[15][1] = 'html.gif';
		filetypes[16] = new Array(2);
		filetypes[16][0] = 'fla'; filetypes[16][1] = 'fla.gif';
		filetypes[17] = new Array(2);
		filetypes[17][0] = 'swf'; filetypes[17][1] = 'swf.gif';
		filetypes[18] = new Array(2);
		filetypes[18][0] = 'xls'; filetypes[18][1] = 'xls.gif';
		filetypes[19] = new Array(2);
		filetypes[19][0] = 'doc'; filetypes[19][1] = 'doc.gif';
		filetypes[20] = new Array(2);
		filetypes[20][0] = 'sig'; filetypes[20][1] = 'sig.gif';
		filetypes[21] = new Array(2);
		filetypes[21][0] = 'fh10'; filetypes[21][1] = 'fh10.gif';
		filetypes[22] = new Array(2);
		filetypes[22][0] = 'pdf'; filetypes[22][1] = 'pdf.gif';
		filetypes[23] = new Array(2);
		filetypes[23][0] = 'psd'; filetypes[23][1] = 'psd.gif';
		filetypes[24] = new Array(2);
		filetypes[24][0] = 'rm'; filetypes[24][1] = 'real.gif';
		filetypes[25] = new Array(2);
		filetypes[25][0] = 'mpg'; filetypes[25][1] = 'video.gif';
		filetypes[26] = new Array(2);
		filetypes[26][0] = 'mpeg'; filetypes[26][1] = 'video.gif';
		filetypes[27] = new Array(2);
		filetypes[27][0] = 'mov'; filetypes[27][1] = 'video2.gif';
		filetypes[28] = new Array(2);
		filetypes[28][0] = 'avi'; filetypes[28][1] = 'video.gif';
		filetypes[29] = new Array(2);
		filetypes[29][0] = 'eps'; filetypes[29][1] = 'eps.gif';
		filetypes[30] = new Array(2);
		filetypes[30][0] = 'asc'; filetypes[30][1] = 'sig.gif';
		filetypes[31] = new Array(2);
		filetypes[31][0] = 'tif'; filetypes[31][1] = 'jpg.gif';
		filetypes[32] = new Array(2);
		filetypes[32][0] = 'tiff'; filetypes[32][1] = 'jpg.gif';
		filetypes[33] = new Array(2);
		filetypes[33][0] = 'mp3'; filetypes[33][1] = 'audio.gif';
		filetypes[34] = new Array(2);
		filetypes[34][0] = 'wav'; filetypes[33][1] = 'audio.gif';
		
	for (var i = 0; i < filetypes.length ; i++) {
		if (filetypes[i][0] == myext) {
			myfileext = filetypes[i][1];
		}
	}
	
	
	if (doctype && doctype != '' && doctype != myext) {
		alert("Only " + doctype + " files are accepted.");
		resetfield(thisfile, path, ffile, doctype);
		return false;
	}
	
	document.getElementById(ffile).innerHTML = "<img src='/includes/js/fancy_upload/icons/"+myfileext+"' height='16' width='16'> "+myFilename+"";

}

function resetfield(thisfile, path, ffile, doctype) {
		document.getElementById(thisfile+'holder').innerHTML = document.getElementById(thisfile+'holder').innerHTML;
		
		document.getElementById(ffile).innerHTML = "<img src='/includes/js/fancy_upload/icons/null.gif' height='16' width='16'>No file selected";
		//alert(document.getElementById(thisfile+'holder').innerHTML);
}
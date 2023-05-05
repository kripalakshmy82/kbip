$(document).ready(function() {

	$("#document1").click(function() {
		$("#url1").attr("disabled", true);
	});
	$("#url1").keyup(function() {
		$("#document1").attr("disabled", Checkmultiple());
	});
	$("#clear_multiple").click(function() {
		$("#document1").val("");
		$("#url1").attr("disabled", false);
	});

});
function disableurl(numrows)
{
	$('#url' + numrows).attr("disabled", true);
}
function disablefile(numrows)
{
	$('#document' + numrows).attr("disabled", checkaddmore(numrows));
	var inputElem = $('#url' + numrows);
	var input = $('#old' + numrows);
	if (inputElem.val())
	{
		input.addClass('modified');
		input.removeClass('basic');
	}
	else
	{
		input.addClass('basic');
		input.removeClass('modified');
	}
}
function remove(numrows)
{
	$('#document' + numrows).val("");
	$('#url' + numrows).attr("disabled", false);
}
function remove_attachment(numrows)
{
	$('#remove' + numrows).hide('fast');
}
function checkaddmore(numrows)
{
	var value = $.trim($('#url' + numrows).val());
	if (value.length != 0) {
		valid = true
	} else {
		valid = false
	}
	return valid;
}
function Checkmultiple()
{
	var value = $.trim($("#url1").val());
	if(value.length != 0)
	{
		valid = true
	}
	else
	{
		valid = false
	}
	return valid;
}
function validate(form, baseUrl, fun)
{
	var error = false;
	if(form.heading.value.trim() == '' && error == false)
	{
		error = true;
		loadErrorModal('Please enter the press release heading', 'heading');
		document.getElementById('heading').focus();
	}
	if(fun == 'add')
	{
		if(form.fdate.value.trim() != '' && error == false)
		{
			if(form.fdate.value.trim() != "" && error == false)
			{
				var yf;
				var d = new Date();
				var a = d.getDate();
				var c = d.getFullYear();
				var f = d.getMonth() + 1;
				if (f < 10)
					yf = "0" + f;
				else
					yf = f;

				var dt = a + "-" + yf + "-" + c;
				var from_date = form.fdate.value;
				var fromdate = from_date.split("/");
				var fmdate = fromdate[0] + "-" + fromdate[1] + "-" + fromdate[2];
				if(a < 10)
					dt = "0" + dt;
				if(Days_count(dt, fmdate) > 0)
				{
					error = true;
					loadErrorModal('From date should be on or after current date', 'fdate');
					document.getElementById('fdate').focus();
					return false;
				}
			}
		}
		if(form.fdate.value.trim() != '' && form.tdate.value.trim() != '' && error == false)
		{
			if(form.fdate.value.trim() != '' && form.tdate.value.trim() != '' && error == false)
			{
				var from_date = form.fdate.value;
				var fromdate = from_date.split("/");
				var fmdate = fromdate[0] + "-" + fromdate[1] + "-" + fromdate[2];
				var t_date = form.tdate.value;
				var todate = t_date.split("/");
				var to_date = todate[0] + "-" + todate[1] + "-" + todate[2];
				if (Days_count(fmdate, to_date) > 0)
				{
					error = true;
					loadErrorModal('To date should be on or after from date', 'tdate');
					document.getElementById('tdate').focus();
					return false;
				}
			}
		}
		if(form.fdate.value.trim() == '' && form.tdate.value.trim() != '' && error == false)
		{
			if(form.fdate.value.trim() == '' && form.tdate.value.trim() != '' && error == false)
			{
				var yf;
				var d = new Date();
				var a = d.getDate();
				var c = d.getFullYear();
				var f = d.getMonth() + 1;
				if (f < 10)
					yf = "0" + f;
				else
					yf = f;
				var dt = a + "-" + yf + "-" + c;
				var to_date = form.tdate.value;
				var todate = to_date.split("/");
				var toddate = todate[0] + "-" + todate[1] + "-" + todate[2];
				if (a < 10)
					dt = "0" + dt;
				if (Days_count(dt, toddate) > 0)
				{
					error = true;
					loadErrorModal('To date should be on or after current date', 'fdate');
					document.getElementById('tdate').focus();
					return false;
				}
			}
		}
	}
	if(fun == 'update')
	{
		if(form.fdate.value.trim() != '' && error == false)
		{
			if(form.fdate.value.trim() != '' && error == false)
			{
				var from_date = form.fdate.value;
				var fromdate = from_date.split("/");
				var fmdate = fromdate[0] + "-" + fromdate[1] + "-" + fromdate[2];
				var ad_date = form.addate.value;
				var addate = ad_date.split("/");
				var addate = addate[0] + "-" + addate[1] + "-" + addate[2];
				if (Days_count(addate, fmdate) > 0) {
					error = true;
					loadErrorModal('From date should be on or after added on date', 'fdate-old');
					document.getElementById('tdate').focus();
					return false;
				}
			}
		}
		if((form.fdate.value.trim() != '' && form.tdate.value.trim() != '') && error == false)
		{
			if((form.fdate.value.trim() != '' && form.tdate.value.trim() != '') && error == false)
			{
				var from_date = form.fdate.value;
				var fromdate = from_date.split("/");
				var fmdate = fromdate[0] + "-" + fromdate[1] + "-" + fromdate[2];
				var t_date = form.tdate.value;
				var todate = t_date.split("/");
				var to_date = todate[0] + "-" + todate[1] + "-" + todate[2];
				if (Days_count(fmdate, to_date) > 0)
				{
					error = true;
					loadErrorModal('To date should be on or after added on date', 'fdate-old');
					document.getElementById('tdate').focus();
					return false;
				}
			}
		}
	}
	var cnt = document.getElementById('cnnumrows').value;
	var mlsetflag = false;
	for(var i = 1; i <= cnt; i++)
	{
		if(fun == 'add')
		{
			if((document.getElementById('imgcaption' + i).value != "" || document.getElementById('document' + i).value != '' || document.getElementById('url' + i).value != '' || document.getElementById('target_type' + i).value != '') && error == false) {
				mlsetflag = true;
				if(document.getElementById('imgcaption' + i).value == "" && error == false)
				{
					error = true;
					loadErrorModal('Please enter the caption', 'imgcaption' + i);
					document.getElementById('imgcaption' + i).focus();
					return false;
				}
				if((document.getElementById('document' + i).value == '' && document.getElementById('url' + i).value == '' ) && error == false) {
					error = true;
					loadErrorModal('Please enter the file or url', 'document' + i);
					document.getElementById('document' + i).focus();
				}
				if(document.getElementById('target_type' + i).value == '' && error == false)
				{
					error = true;
					loadErrorModal('Please enter the target type', 'target_type' + i);
					document.getElementById('target_type' + i).focus();
				}
				if(document.getElementById('document' + i).value != "" && error == false)
				{
					var filereturn = FileExtension_Validate(document.getElementById('document' + i).value);
					if (filereturn == false)
					{
						error = true;
						loadErrorModal('Please select a file with pdf,doc.docx,jpeg,jpg extension', 'document' + i);
						document.getElementById('document' + i).focus();
						return false;
					}

				}
				if(document.getElementById('url' + i).value != "" && error == false)
				{
					var urlcheck = is_valid_url(document.getElementById('url' + i).value);
					if(urlcheck == false)
					{
						error = true;
						loadErrorModal('Please enter a valid URL', 'url' + i);
						document.getElementById('url' + i).focus();
						return false;
					}
				}
			}
		}
		if (fun == 'update')
		{
			if (document.getElementById('imgcaption' + i).value == "")
			{
				break;
			}
			if((document.getElementById('imgcaption' + i).value != "" || document.getElementById('document' + i).value != '' || document.getElementById('url' + i).value != '' || document.getElementById('target_type' + i).value != '' || document.getElementById('olddocument' + i).value != "" ) && error == false)
			{
				mlsetflag = true;
				if (document.getElementById('imgcaption' + i).value == "" && error == false) {
					error = true;
					loadErrorModal('Please enter the caption', 'imgcaption' + i);
					document.getElementById('imgcaption' + i).focus();
					return false;
				}

				if ((document.getElementById('document' + i).value == '' && document.getElementById('url' + i).value == '' && document.getElementById('olddocument' + i).value == '' ) && error == false) {
					error = true;
					loadErrorModal('Please enter the file or url', 'document' + i);
					document.getElementById('document' + i).focus();
				}

				if (document.getElementById('target_type' + i).value == '0' && error == false) {
					error = true;
					loadErrorModal('Please enter the target type', 'target_type' + i);
					document.getElementById('target_type' + i).focus();
				}
				if (document.getElementById('document' + i).value != "" && error == false) {
					var filereturn = FileExtension_Validate(document.getElementById('document' + i).value);
					if (filereturn == false) {
						error = true;
						loadErrorModal('Please select a file with pdf,doc.docx,jpeg,jpg extension', 'document' + i);
						document.getElementById('document' + i).focus();
						return false;
					}

				}
				if (document.getElementById('url' + i).value != "" && error == false) {
					var urlcheck = is_valid_url(document.getElementById('url' + i).value);
					if (urlcheck == false) {
						error = true;
						loadErrorModal('Please enter a valid URL', 'url' + i);
						document.getElementById('url' + i).focus();
						return false;
					}

				}

			}
		}
	}
	if (error == false) {
		if (fun == 'add') {
			form.action = baseUrl + "press_release/add/";
			loadConfirmModal('Are you sure to continue');
			$('#yesBtn').click(function() {
				form.submit()
			});
		}
		if (fun == 'update') {
			form.action = baseUrl + "press_release/update/";
			loadConfirmModal('Are you sure to continue');
			$('#yesBtn').click(function() {
				form.submit()
			});
		}
	}

}

function txtValidate1(txt) {
	txt = document.getElementById(txt);
	txt.value = txt.value.replace(/[^0-9\n\r]+/g, '');
}

function is_valid_url(url) 
{
	if (!url.match(/^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/)) {
		return false;
	} else {
		return true;
	}
}

function FileExtension_Validate(txt) 
{
	if (!txt.match(/\.(pdf)|(PDF)|(doc)|(DOC)|(docx)|(DOCX)|(jpg)|(jpeg)|(JPG)|(png)|(JPEG)$/)) {
		return false;
	} else {
		return true;
	}
}

function add_more(baseurl) 
{
	var numrows = parseInt(document.frm_pressrelease.cnnumrows.value) + 1;
	var strinner = "";
	var ni = document.getElementById('content');
	var newdiv = document.createElement('div');
	var divIdName = 'my' + numrows + 'Div1';
	newdiv.setAttribute('id', divIdName);
	document.frm_pressrelease.cnnumrows.value = numrows;
	//alert("asdAS");

	strinner = "<div class='row'> <div class='col-md-2'><div class='form-group'><input type='text' id='imgcaption" + numrows + "' name='imgcaption" + numrows + "'  class='form-control' placeholder='Caption'/></div> </div><div class='col-md-3'><div class='form-group'><input type='file' id='custom_document" + numrows + "' name='custom_document" + numrows + "' onclick='disableurl(" + numrows + ")'  onchange='loadImage("+numrows+")' accept='.doc, .docx, .pdf, .jpg, .jpeg '/><input type='hidden'  id='oldcustomdocument" + numrows + "' name='oldcustomdocument" + numrows + "' value=''/><span class='label label-default'>Format: .doc, .docx, .pdf, .jpg, .jepg</span><img src='" + baseurl + "images/admin/close3.png' title='Click to remove File'  id='clear_multiple" + numrows + "' height='20px'  style='cursor:pointer' onclick='remove(" + numrows + ")'/></div></div><div class='col-md-3'><div class='form-group'><input type='file' id='document" + numrows + "' name='document" + numrows + "' onclick='disableurl(" + numrows + ")'  /><input type='hidden'  id='olddocument" + numrows + "' name='olddocument" + numrows + "' value=''/><span class='label label-default'>Format: .doc, .docx, .pdf, .jpg, .jepg</span><img src='" + baseurl + "images/admin/close3.png' title='Click to remove File'  id='clear_multiple" + numrows + "' height='20px'  style='cursor:pointer' onclick='remove(" + numrows + ")'/></div></div><div class='col-md-2'><div class='form-group'><select class='form-control' id='target_type" + numrows + "' name='target_type" + numrows + "'  ><option value=''>-Choose-</option></select></div></div><div class='col-md-2'><div class='form-group'><input type='text'  id='url" + numrows + "' name='url" + numrows + "' onkeyup='disablefile(" + numrows + ")' class='form-control' placeholder='Url'/><span class='label label-default'>https://www.google.com</span></div></div></div>";

	newdiv.innerHTML = strinner;
	ni.appendChild(newdiv);
	var presslength = document.getElementById('target_type1').options.length;
	for (var z = 0; z < presslength; z++) {
		cmbdts = document.getElementById('target_type1').options[z];

		document.getElementById('target_type'+numrows).options[z] = new Option(cmbdts.text, cmbdts.value);
	}

}
function search_pressrelease(form, baseurl) 
{
	form.action = baseurl + "press_release/list_view/";
	form.submit();
}

function listAll(form, baseurl) 
{
	window.location.href = baseurl + "press_release/list_view/";
}

function deletePressRelease(baseUrl, prrlse_id, page) {
	if (prrlse_id != "") {
		loadConfirmModal("Do you want to Delete this Press release");
		$('#yesBtn').click(function() {
			if (window.XMLHttpRequest) {
				xmlhttp = new XMLHttpRequest();
			} else {
				xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
			}
			xmlhttp.onreadystatechange = function() {
				if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
					var rtext = xmlhttp.responseText;

					if (rtext == '1') {
						window.location.href = baseUrl + 'press_release/list_view/' + page;
					}

				}
			}
			xmlhttp.open("GET", baseUrl + "press_release/delete_press_release/" + prrlse_id, true);
			xmlhttp.send();
		});
	}
}

function StatusChangePressRelease(baseUrl, prrlse_id, page, status,vrble) 
{
	if (prrlse_id != "") 
	{
		if (status == 0) {
			loadConfirmModal("Do you want to Inactivate this Press release?");
		}
		if (status == 1) {
			loadConfirmModal("Do you want to Activate this Press release?");
		}
		if (status == 3) {
			loadConfirmModal("Do you want to add this to archive list?");
		}

		$('#yesBtn').click(function() {
			if (window.XMLHttpRequest) {
				xmlhttp = new XMLHttpRequest();
			} else {
				xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
			}
			xmlhttp.onreadystatechange = function() {
				if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
					var rtext = xmlhttp.responseText;

					if (rtext == '1') {
						window.location.href = baseUrl + 'press_release/'+vrble+'/' +prrlse_id + "/" + page;
					}

				}
			}
			xmlhttp.open("GET", baseUrl + "press_release/change_status_pressrelease/" + prrlse_id + "/" + status, true);
			xmlhttp.send();
		});
	}
}

function deletePressReleasedoc(baseUrl, prrlse_id, rw)
{
	if (prrlse_id != "") 
	{
		loadConfirmModal("Do you want to Delete this Press release file");
		$('#yesBtn').click(function()
		{
			if (window.XMLHttpRequest)
			{
				xmlhttp2 = new XMLHttpRequest();
			} else {
				xmlhttp2 = new ActiveXObject("Microsoft.XMLHTTP");
			}
			xmlhttp2.onreadystatechange = function() {
				if (xmlhttp2.readyState == 4 && xmlhttp2.status == 200) {
					var rtext2 = xmlhttp2.responseText;
					if (rtext2 == '1') 
					{
						document.getElementById('spid' + prrlse_id).innerHTML = "<span style='color:#B22222;' >Removed</span>";
						document.getElementById('olddocument' + rw).value = "";
					}

				}
			}
			xmlhttp2.open("GET", baseUrl + "press_release/delete_press_release_doc/" + prrlse_id, true);
			xmlhttp2.send();
		});
	}
}

function seturlvalue(rw)
{
	if (document.getElementById('document' + rw).value != "" && document.getElementById('url' + rw).value != "") {
		loadConfirmModal("You can add either file or url");

	}

}

function clearfile(rw, val) 
{
	var val = document.getElementById('document' + rw).value
}

function searchPress(form, baseurl) {
	form.action = baseurl + "press_release/list_view/";
	form.submit();
}

function listAllPress(form, baseurl) 
{
	document.getElementById('search').value = '';
	document.getElementById('searchdtrange').value = '';
	form.action = baseurl + "press_release/list_view/";
	form.submit();
}
function searchArchive(form, baseurl) 
{
	form.action = baseurl + "press_release/archive_view/";
	form.submit();
}
function listAllArchive(form, baseurl) {
	document.getElementById('search').value = '';
	document.getElementById('searchdtrange').value = '';
	form.action = baseurl + "press_release/archive_view/";
	form.submit();
}
function loadImage(vl) {
  // alert(num);

        var input, file, fr, img;
		
		//alert(document.getElementById('document'+vl).value);
        if (typeof window.FileReader !== 'function') {
            write("The file API isn't supported on this browser yet.");
            return;
        }

        input = document.getElementById('custom_document'+vl);
        if (!input) {
            write("Um, couldn't find the imgfile element.");
        }
        else if (!input.files) {
            write("This browser doesn't seem to support the `files` property of file inputs.");
        }
        else if (!input.files[0]) {
            write("Please select a file before clicking 'Load'");
        }
        else {
            file = input.files[0];
            fr = new FileReader();
            fr.onload = createImage;
            fr.readAsDataURL(file);
        }

        function createImage() {
            img = document.createElement('img');
            img.onload = imageLoaded;
            img.style.display = 'none'; // If you don't want it showing
            img.src = fr.result;
            document.body.appendChild(img);
        }

        function imageLoaded() {
        	//alert("aa");
        	//if(img.width>400 || img.height>400)
        	if(img.width>118 || img.height>88)
        	{
        		alert('Check Image Dimension. Image should  117 width and 87 height  ');
        		fimg=1;
        		document.getElementById('custom_document'+vl).value = '';
        		      		
        		return false;
        		
        	}
        	else
        	{
        		return true;
        	}
        	
           // write(img.width + "x" + img.height);
            // This next bit removes the image, which is obviously optional -- perhaps you want
            // to do something with it!
            img.parentNode.removeChild(img);
            img = undefined;
        }

        function write(msg) {
            var p = document.createElement('p');
            p.innerHTML = msg;
            document.body.appendChild(p);
        }
    }
function delete_custom_thumb_image(baseUrl,pid,page)
{
	if(pid!="")
	{
		loadConfirmModal("Do you want to Delete this thumb image");
		$("#yesBtn").unbind().click(function()
		{
			if (window.XMLHttpRequest)
			{
			  xmlhttp=new XMLHttpRequest();
			  
			}
			else
			{
				xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
			}
			xmlhttp.onreadystatechange=function()
			{	
				if (xmlhttp.readyState==4 && xmlhttp.status==200)
				{
					var rtext = xmlhttp.responseText;
					if(rtext=='1')
					{
						alert('Successfully Removed');
						location.reload(baseUrl+"press_release/delete_custom_thumb_image/"+pid);
					}
				}
			}
			xmlhttp.open("GET",baseUrl+"press_release/delete_custom_thumb_image/"+pid,true);
			xmlhttp.send();
		});
	}
}
function validate(form, baseUrl, fun)
{
	var error = false;
	if(form.gtitle.value.trim() == '' && error == false)
	{
		error = true;
		loadErrorModal('Please enter the gallery title', 'gtitle');
		document.getElementById('gtitle').focus();
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
				if(f < 10)
				yf = "0" + f;
				else
				yf = f;
				var dt = a + "-" + yf + "-" + c;
				var from_date = form.fdate.value;
				var fromdate = from_date.split("/");
				var fmdate = fromdate[0] + "-" + fromdate[1] + "-" + fromdate[2];
				//alert(fmdate);
				if (a < 10)
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
		if(form.fdate.value.trim()!= '' && form.tdate.value.trim()!= '' && error == false)
		{
			if(form.fdate.value.trim()!= '' && form.tdate.value.trim()!= '' && error == false)
			{
				//alert(form.tdate.value);
				var from_date = form.fdate.value;
				var fromdate = from_date.split("/");
				var fmdate = fromdate[0] + "-" + fromdate[1] + "-" + fromdate[2];
				var t_date = form.tdate.value;
				var todate = t_date.split("/");
				var to_date = todate[0] + "-" + todate[1] + "-" + todate[2];
				if(Days_count(fmdate, to_date) > 0)
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
				if(f < 10)
					yf = "0" + f;
				else
					yf = f;
				var dt = a + "-" + yf + "-" + c;
				var to_date = form.tdate.value;
				var todate = to_date.split("/");
				var toddate = todate[0] + "-" + todate[1] + "-" + todate[2];
				//alert(fmdate);
				if (a < 10)
					dt = "0" + dt;

				if (Days_count(dt, toddate) > 0) {
					error = true;
					loadErrorModal('To date should be on or after current date', 'tdate');
					return false;
				}
			}
		}
	}
	if (fun == 'update') {
		if (form.fdate.value.trim() != '' && error == false) {

			if (form.fdate.value.trim() != '' && error == false) {
				//alert(form.addate.value);
				var from_date = form.fdate.value;
				var fromdate = from_date.split("/");
				var fmdate = fromdate[0] + "-" + fromdate[1] + "-" + fromdate[2];

				var ad_date = form.addate.value;
				var addate = ad_date.split("/");
				var addate = addate[0] + "-" + addate[1] + "-" + addate[2];
				if (Days_count(addate, fmdate) > 0) {
					error = true;
					loadErrorModal('From date should be on or after added on date', 'fdate');
					document.getElementById('tdate').focus();
					return false;
				}
			}
		}
		if ((form.fdate.value.trim() != '' && form.tdate.value.trim() != '') && error == false) {

			if ((form.fdate.value.trim() != '' && form.tdate.value.trim() != '') && error == false) {
				//alert(form.addate.value);
				var from_date = form.fdate.value;
				var fromdate = from_date.split("/");
				var fmdate = fromdate[0] + "-" + fromdate[1] + "-" + fromdate[2];
				var t_date = form.tdate.value;
				var todate = t_date.split("/");
				var to_date = todate[0] + "-" + todate[1] + "-" + todate[2];

				if (Days_count(fmdate, to_date) > 0) {
					error = true;
					loadErrorModal('To date should be on or after added on date', 'tdate');
					document.getElementById('tdate').focus();
					return false;
				}
			}
		}
	}
	
	if (fun == 'add') {//alert("k");

		var cnt = document.getElementById('cnnumrows').value;
		var mlsetflag = false;
		for (var i = 1; i <= cnt; i++) {
			if((document.getElementById('imgcaption' + i).value != "" || document.getElementById('document' + i).value != "") && error == false)
			{
				mlsetflag = true;
				if (document.getElementById('video_code' + i).value == '' && error == false) 
				{
					error = true;
					loadErrorModal('Please enter the video code', 'video_code' + i);
					document.getElementById('video_code' + i).focus();
				}
			
			}
			if((document.getElementById('video_code' + i).value != "" || document.getElementById('document' + i).value != "" || document.getElementById('vdo_desc' + i).value != "") && error == false)
			{
				mlsetflag = true;
				if (document.getElementById('imgcaption' + i).value == '' && error == false) 
				{
					error = true;
					loadErrorModal('Please enter the caption', 'imgcaption' + i);
					document.getElementById('imgcaption' + i).focus();
				}
			
			}
				if (document.getElementById('document' + i).value != "" && error == false) {
					var filereturn = FileExtension_Validate(document.getElementById('document' + i).value);
					if (filereturn == false) {
						error = true;
						loadErrorModal('Please select a file with jpeg,jpg,JPEG,JPG extension', 'document' + i);
						document.getElementById('document' + i).focus();
						return false;
					}
				}
				if (document.getElementById('video_code' + i).value != "" && error == false) {
					var filereturn = Videocode_Validate(document.getElementById('video_code' + i).value);
					if (filereturn == false) {
						error = true;
						loadErrorModal('Please enter a valid You tube URL', 'video_code' + i);
						document.getElementById('video_code' + i).focus();
						return false;
					}
				}
			
		}
	}
	if (form.file_name.value.trim() == '' && error == false) {
		error = true;
		loadErrorModal('Please enter the filename', 'file_name');
		document.getElementById('file_name').focus();
	}
	if (form.page_title.value.trim() == '' && error == false) {
		error = true;
		loadErrorModal('Please enter the page title', 'page_title');
		document.getElementById('page_title').focus();
	}
	if (form.meta_keywords.value.trim() == '' && error == false) {
		error = true;
		loadErrorModal('Please enter the meta keywords', 'meta_keywords');
		document.getElementById('meta_keywords').focus();
	}
	if (form.meta_descr.value.trim() == '' && error == false) {
		error = true;
		loadErrorModal('Please enter the meta description', 'meta_descr');
		document.getElementById('meta_descr').focus();
	}
	if (error == false) {
		if (fun == 'add') {
			form.action = baseUrl + "video_gallery/add/";
			loadConfirmModal('Are you sure to continue');
			$('#yesBtn').click(function() {
				form.submit()
			});
		}
		if (fun == 'update') {
			form.action = baseUrl + "video_gallery/update/";
			loadConfirmModal('Are you sure to continue');
			$('#yesBtn').click(function() {
				form.submit()
			});
		}

	}
}

function validate_video(form, baseUrl, fun, vid)
{
	var error = false;
	if (form.gallery_id.value.trim() == '0' && error == false) {
		error = true;
		loadErrorModal('Please enter the gallery', 'gallery_id');
		document.getElementById('gallery_id').focus();
	}
	/*if(document.getElementById('imgcaption1').value =="" && error==false )
	 {
	 error=true;
	 loadErrorModal('Please enter the caption','imgcaption1');
	 document.getElementById('imgcaption1').focus();
	 return false;
	 }

	 if(document.getElementById('document1').value =='' && error==false)
	 {
	 error=true;
	 loadErrorModal('Please enter the file','document1');
	 document.getElementById('document1').focus();
	 }*/
	if(document.getElementById('video_code1').value == '' && error == false)
	{
		error = true;
		loadErrorModal('Please enter the video code', 'video_code1');
		document.getElementById('video_code1').focus();
	}
	if (document.getElementById('document1').value != "" && error == false)
	{
		var filereturn = FileExtension_Validate(document.getElementById('document1').value);
		if (filereturn == false) {
			error = true;
			loadErrorModal('Please select a file with jpeg,jpg extension', 'document');
			document.getElementById('document1').focus();
			return false;
		}

	}
	if (document.getElementById('video_code1').value != "" && error == false) {
		var filereturn = Videocode_Validate(document.getElementById('video_code1').value);
		if (filereturn == false) {
			error = true;
			loadErrorModal('Please enter a valid You tube URL', 'video_code');
			document.getElementById('video_code1').focus();
			return false;
		}

	}
	var cnt = document.getElementById('cnnumrows').value;
	var mlsetflag = false;
	for (var i = 1; i <= cnt; i++) {

		if ((document.getElementById('video_code' + i).value == "" ) && error == false)
		{
			mlsetflag = true;
			//alert(document.getElementById('coverflag').value);
			/*if(document.getElementById('imgcaption'+i).value =="" && error==false )
			 {
			 error=true;
			 loadErrorModal('Please enter the caption','imgcaption'+i);
			 document.getElementById('imgcaption'+i).focus();
			 return false;
			 }

			 if(document.getElementById('document'+i).value =='' && error==false)
			 {
			 error=true;
			 loadErrorModal('Please enter the file ','document'+i);
			 document.getElementById('document'+i).focus();
			 }*/
			if (document.getElementById('video_code' + i).value == '' && error == false)
			{
				error = true;
				loadErrorModal('Please enter the video code', 'video_code' + i);
				document.getElementById('video_code' + i).focus();
			}

			if (document.getElementById('document' + i).value != "" && error == false) {
				var filereturn = FileExtension_Validate(document.getElementById('document' + i).value);
				if (filereturn == false) {
					error = true;
					loadErrorModal('Please select a file with jpeg,jpg,JPEG,JPG extension', 'document' + i);
					document.getElementById('document' + i).focus();
					return false;
				}
			}
			if (document.getElementById('video_code' + i).value != "" && error == false) {
				var filereturn = Videocode_Validate(document.getElementById('video_code' + i).value);
				if (filereturn == false) {
					error = true;
					loadErrorModal('Please enter a valid You tube URL', 'video_code' + i);
					document.getElementById('video_code' + i).focus();
					return false;
				}
			}
		}
	}
	
	if (fun == 'update') 
	{
		if (document.getElementById('file_name').value.trim() != '' && error == false)
		{
			if (document.getElementById('page_title').value.trim() == '' && error == false)
			{
				error = true;
				loadErrorModal('Please enter the page title', 'page_title');
				document.getElementById('page_title').focus();
			}
			if (document.getElementById('meta_keyword').value.trim() == '' && error == false)
			{
				error = true;
				loadErrorModal('Please enter the meta keywords', 'meta_keyword');
				document.getElementById('meta_keyword').focus();
			}
			if (document.getElementById('meta_description').value.trim() == '' && error == false)
			{
				error = true;
				loadErrorModal('Please enter the meta description', 'meta_description');
				document.getElementById('meta_description').focus();
			}
		}
	}
	
	
	if(error == false)
	{
		if(fun == 'add')
		{
			form.action = baseUrl + "video_gallery/video_add/";
			loadConfirmModal('Are you sure to continue');
			$('#yesBtn').click(function() {
				form.submit()
			});
		}
		if (fun == 'update') {
			form.action = baseUrl + "video_gallery/update_video_details/";
			loadConfirmModal('Are you sure to continue');
			$('#yesBtn').click(function() {
				form.submit()
			});
		}
	}
}

function FileExtension_Validate(txt) {
	if (!txt.match(/\.(jpg)|(jpeg)|(JPG)|(png)|(JPEG)|(PNG)|(bmp)|(BMP)|(tif)|(TIF)|(GIF)|(gif)$/)) {
		return false;
	} else {
		return true;
	}
}

function Videocode_Validate(txt) {
	if (!txt.match(/^(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?(?=.*v=((\w|-){11}))(?:\S+)?$/)) {
		return false;
	} else {
		return true;
	}
}

function add_more(baseurl) {
	var numrows = parseInt(document.frm_vgallery.cnnumrows.value) + 1;
	var strinner = "";
	var ni = document.getElementById('content');
	var newdiv = document.createElement('div');
	var divIdName = 'my' + numrows + 'Div1';
	newdiv.setAttribute('id', divIdName);
	document.frm_vgallery.cnnumrows.value = numrows;
	strinner = "<div class='row'> <div class='col-md-3'><div class='form-group'><input type='text' id='imgcaption" + numrows + "' name='imgcaption" + numrows + "'  class='form-control' onkeyup='txtValidateName(this.id)' onkeypress='txtValidateName(this.id)' placeholder='Image Caption'/></div> </div><div class='col-md-3'><div class='form-group'><input type='file' id='document" + numrows + "' name='document" + numrows + "' accept=' .jpg, .jepg' /><span class='label label-default'>Format:.jpg, .jepg, .JPG, .JEPG</span><img src='" + baseurl + "images/admin/close3.png' title='Click to remove File'  id='clear_multiple" + numrows + "' height='20px'  style='cursor:pointer' onclick='remove(" + numrows + ")'/></div></div><div class='col-md-3'><div class='form-group'><input type='text' id='video_code" + numrows + "' name='video_code" + numrows + "'  class='form-control' placeholder='Video code'/></div> </div><div class='col-md-3'><div class='form-group'><textarea id='vdo_desc" + numrows + "'  name='vdo_desc" + numrows + "' class='form-control' onkeyup='txtValidateName(this.id)' onkeypress='txtValidateName(this.id)' placeholder='Description'> </textarea></div> </div></div>";
	newdiv.innerHTML = strinner;
	ni.appendChild(newdiv);
}
function add_more_video(baseurl) {
	var numrows = parseInt(document.frm_video.cnnumrows.value) + 1;
	var strinner = "";
	var ni = document.getElementById('content');
	var newdiv = document.createElement('div');
	var divIdName = 'my' + numrows + 'Div1';
	newdiv.setAttribute('id', divIdName);
	document.frm_video.cnnumrows.value = numrows;
	//alert("asdAS");
	strinner = "<div class='row'> <div class='col-md-3'><div class='form-group'><input type='text' id='imgcaption" + numrows + "' name='imgcaption" + numrows + "'  class='form-control' onkeyup='txtValidateName(this.id)' onkeypress='txtValidateName(this.id)' placeholder='Image Caption'/></div> </div><div class='col-md-3'><div class='form-group'><input type='file' accept='.jpg, .jepg' id='document" + numrows + "' name='document" + numrows + "' /><span class='label label-default'>Format:.jpg, .jepg, .JPG, .JEPG</span><img src='" + baseurl + "images/admin/close3.png'  title='Click to remove File'  id='clear_multiple" + numrows + "' height='20px'  style='cursor:pointer' onclick='remove(" + numrows + ")'/></div></div><div class='col-md-3'><div class='form-group'><input type='text' id='video_code" + numrows + "' name='video_code" + numrows + "'  class='form-control' placeholder='Video code'/></div> </div><div class='col-md-3'><div class='form-group'><textarea id='vdo_desc" + numrows + "'  name='vdo_desc" + numrows + "' class='form-control' onkeyup='txtValidateName(this.id)' onkeypress='txtValidateName(this.id)' placeholder='Description'> </textarea></div> </div></div>";
	newdiv.innerHTML = strinner;
	ni.appendChild(newdiv);
}

function search_val(form, baseurl) {
	form.action = baseurl + "video_gallery/list_view/";
	form.submit();
}

function listAll(form, baseurl)
{
	window.location.href = baseurl + "video_gallery/list_view/";
}

function deleteVgallery(baseUrl, vgallery_id, page) {
	if (vgallery_id != "")
	{
		loadConfirmModal('Do you want to Delete this video gallery');
		$("#yesBtn").unbind().click(function() {
			if (window.XMLHttpRequest) {
				xmlhttp = new XMLHttpRequest();
			} else {
				xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
			}
			xmlhttp.onreadystatechange = function() {
				if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
					var rtext = xmlhttp.responseText;

					if (rtext == '1') {
						window.location.href = baseUrl + 'video_gallery/list_view/' + page;
					}
				}
			}
			xmlhttp.open("GET", baseUrl + "video_gallery/delete_vgallery/" + vgallery_id, true);
			xmlhttp.send();
		});
	}
}
function StatusChangeVgallery(baseUrl, vgallery_id, page, status)
{
	if (vgallery_id != "")
	{
		if (status == 0)
		{
			loadConfirmModal('Do you want to Inactivate this video gallery?');
		}
		if (status == 1) {
			loadConfirmModal('Do you want to Activate this video gallery?');
		}

		$("#yesBtn").unbind().click(function() {
			if (window.XMLHttpRequest) {
				xmlhttp = new XMLHttpRequest();
			} else {
				xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
			}
			xmlhttp.onreadystatechange = function() {
				if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
					var rtext = xmlhttp.responseText;

					if (rtext == '1') {
						window.location.href = baseUrl + 'video_gallery/list_view/' + page;
					}

				}
			}
			xmlhttp.open("GET", baseUrl + "video_gallery/change_status_vgallery/" + vgallery_id + "/" + status, true);
			xmlhttp.send();
		});
	}
}

function setevent(value) {
	if (value == 'n') {
		if (document.getElementById('evt').style.display == 'block') {
			document.getElementById('evt').style.display = 'none';
		}
		if (document.getElementById('evt').style.display == 'none') {
			document.getElementById('evt').style.display = 'none';
		}
	}
	if (value == 'y') {
		if (document.getElementById('evt').style.display == 'none') {
			document.getElementById('evt').style.display = 'block';
		}
		if (document.getElementById('evt').style.display == 'block') {
			document.getElementById('evt').style.display = 'block';
		}
	}
}

function getrdvalue(vl) {
	document.getElementById('cimg').value = vl;
}

function get_radio_value(rw, vl)
{
	if (vl == 'y')
	{
		document.getElementById('cimg').value = rw;
	}
}

function deleteVideo(baseUrl, video_id, g_id)
{
	if (video_id != "")
	{
		loadConfirmModal("Do you want to Delete this video");
		$("#yesBtn").unbind().click(function()
		{
			if (window.XMLHttpRequest) {
				xmlhttp = new XMLHttpRequest();
			} else {
				xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
			}
			xmlhttp.onreadystatechange = function() {
				if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
					var rtext = xmlhttp.responseText;
					if (rtext == '1') {
						alert('Successfully Removed');
						window.location.href = baseUrl + 'video_gallery/edit_view_video/' + g_id;
						document.getElementById('spid' + video_id).innerHTML = "Removed";
					}
				}
			}
			xmlhttp.open("GET", baseUrl + "video_gallery/delete_video/" + video_id, true);
			xmlhttp.send();
		});
	}
}
function StatusChangevideo(bsurl, video_id, page, status)
{
	if (video_id != "")
	{
		if (status == 0)
		{
			loadConfirmModal("Do you want to Inactivate this Picture?");
		}
		if (status == 1) {
			loadConfirmModal("Do you want to Activate this Picture?");
		}
		$("#yesBtn").unbind().click(function() {

			if (window.XMLHttpRequest) {
				xmlhttp = new XMLHttpRequest();
			} else {
				xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
			}
			xmlhttp.onreadystatechange = function() {
				if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
					var rtext = xmlhttp.responseText;

					if (rtext == '1') {
						if (status == 0) {
							alert('Successfully changed as private');
							document.getElementById('spprid' + video_id).innerHTML = "<a class='btn-xs btn-warning' onclick=\"StatusChangevideo('" + bsurl + "'," + video_id + "," + page + "," + 1 + ")\">Public</a>";
						}
						if (status == 1) {
							alert('Successfully changed as public');
							document.getElementById('spprid' + video_id).innerHTML = "<a class='btn-xs btn-warning' onclick=\"StatusChangevideo('" + bsurl + "'," + video_id + "," + page + "," + 0 + ")\">Private</a>";
						}
					}
				}
			}
			xmlhttp.open("GET", bsurl + "video_gallery/change_status_video/" + video_id + "/" + status, true);
			xmlhttp.send();
		});
	}
}

function updateVideo(baseUrl, video_id, page)
{
	if(video_id != "")
	{
		var caption = encodeURI(document.getElementById('v_caption' + video_id).value);
		if (caption != "") {
			var cap = caption;
		} else {
			var cap = video_id;
		}
		var coverimg = document.getElementById('cimg').value;
		var vgallery_id = document.getElementById('galleryid').value;

		loadConfirmModal("Do you want to update ");
		$("#yesBtn").unbind().click(function() {

			if (window.XMLHttpRequest) {
				xmlhttp = new XMLHttpRequest();
			} else {
				xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
			}
			xmlhttp.onreadystatechange = function() {
				if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
					var rtext = xmlhttp.responseText;

					if (rtext == '1') {

						alert("Successfully updated");
					}
				}
			}
			//alert('test');
			xmlhttp.open("GET", baseUrl + "video_gallery/update_caption/" + video_id + "/" + cap + "/" + coverimg + "/" + vgallery_id, true);
			xmlhttp.send();
		});
	}
}

function getgalleryid(bsurl) 
{
	document.getElementById('coverflag').value = 0;
	document.getElementById('cvrimg').innerHTML = "<input type='hidden' name='coverflag' id='coverflag' value = '0' />";
	if (document.getElementById('gallery_id').value != 0)
	{
		if (document.getElementById('gallery_id').value != "")
		{
			var galleryId = document.getElementById('gallery_id').value;
		}
		else
		{
			var galleryId = null;
		}
		if (window.XMLHttpRequest)
			xmlhttp = new XMLHttpRequest();
		else
			xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
			xmlhttp.onreadystatechange = function()
			{
				if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
				document.getElementById('cvrimg').innerHTML = xmlhttp.responseText;
			}
		}
		xmlhttp.open("GET", bsurl + "video_gallery/getCoverImage/" + galleryId, true);
		xmlhttp.send();
	}
}

function loadImage(vl)
{
	var input, file, fr, img;
	if( typeof window.FileReader !== 'function')
	{
		write("The file API isn't supported on this browser yet.");
		return;
	}
	input = document.getElementById('document' + vl);
	if(!input)
	{
		write("Um, couldn't find the imgfile element.");
	}
	else if (!input.files) {
		write("This browser doesn't seem to support the `files` property of file inputs.");
	} else if (!input.files[0]) {
		write("Please select a file before clicking 'Load'");
	} else {
		file = input.files[0];
		fr = new FileReader();
		fr.onload = createImage;
		fr.readAsDataURL(file);
	}

	function createImage() {
		img = document.createElement('img');
		img.onload = imageLoaded;
		img.style.display = 'none';
		// If you don't want it showing
		img.src = fr.result;
		document.body.appendChild(img);
	}

	function imageLoaded() {
		//alert("aa");
		//if(img.width>400 || img.height>400)
		if (img.width < 320 || img.height < 180) {
			alert('Check Image Dimension. Image should have 320 width and 180 height  ');
			fimg = 1;
			document.getElementById('document' + vl).value = '';

			return false;

		} else {
			return true;
		}
		img.parentNode.removeChild(img);
		img = undefined;
	}

	function write(msg) {
		var p = document.createElement('p');
		p.innerHTML = msg;
		document.body.appendChild(p);
	}
}
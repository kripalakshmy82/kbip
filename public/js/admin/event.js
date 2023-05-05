$(document).ready(function ()
{
	$("#document1").click(function ()
	{
		$("#url1").attr("disabled", true);
    });
	$("#url1").keyup(function ()
	{
    	$("#document1").attr("disabled", Checkmultiple());
    });
	$("#clear_multiple").click(function ()
	{
		$("#document1").val("");
		$("#url1").attr("disabled", false);
	});
});		
function disableurl(numrows)
{
	$('#url'+numrows).attr("disabled", true);
}
function disablefile(numrows)
{            		
	$('#document'+numrows).attr("disabled", checkaddmore(numrows));
	 var inputElem = $('#url'+numrows);
	
	var input = $('#old'+numrows);
	   
	    if (inputElem.val()) {
	      input.addClass('modified');
	  input.removeClass('basic');
	 
	} else {
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
	$('#remove'+ numrows).hide('fast');
}
function checkaddmore(numrows)
{
	var value = $.trim($('#url'+numrows).val());
    if(value.length!=0)
    {
    	valid=true
    }
    else
    {valid=false}
	return valid;
}
						
function Checkmultiple()
{
	var value = $.trim($("#url1").val());
    if(value.length!=0)
    {
    	valid=true
    }
    else
    {valid=false}
	return valid;
} 

function validate(form,baseUrl,fun)
{
	var error=false;
	if(form.etitle.value.trim()=='' && error==false)
	{
		error=true;
		loadErrorModal('Please enter the event title','etitle');
		document.getElementById('etitle').focus();
	}
	if(form.etitlemal.value.trim()=='' && error==false)
	{
		error=true;
		loadErrorModal('Please enter the event title in malayalam','etitlemal');
		document.getElementById('etitlemal').focus();
	}
	

		
	
	if(fun=='add')
  	{
		if(document.frm_event.thb_img1.value.trim()=="" && error==false)
		{
			error=true;
			loadErrorModal('Please Upload the thumb image','thb_img1');
		}
		if(document.frm_event.thb_img1.value != "")
		{
			var filereturn=FileExtension_Validate(document.frm_event.thb_img1.value);
			if (filereturn ==false)
		   {
			error=true;
			loadErrorModal("Please select a file with jpg.jpeg,pdf extension","thb_img1");			
		   } 						
		}
		if(document.frm_event.thb_img1.value != "")
		{
			var fi = document.getElementById('thb_img1');
			var fsInBytes = fi.files.item(0).size;
			var maxSize = 2097152;
			if (fsInBytes > maxSize)
			{
				loadErrorModal('Sorry! the file size of photo exceeds the maximum allowed limit of 2 MB\nYour file is of ' + showFileSize(fsInBytes) + ' size.',"thb_img1");
				error=true;
			}
		}

		if(document.frm_event.document1.value.trim()=="" && error==false)
		{
			error=true;
			loadErrorModal('Please Upload the document','document1');
		}
		if(document.frm_event.document1.value != "")
		{
			var filereturn=FileExtension_Validate(document.frm_event.document1.value);
			if (filereturn ==false)
		   {
			error=true;
			loadErrorModal("Please select a file with jpg.jpeg,pdf extension","document1");			
		   } 						
		}
		if(document.frm_event.document1.value != "")
		{
			var fi = document.getElementById('document1');
			var fsInBytes = fi.files.item(0).size;
			var maxSize = 2097152;
			if (fsInBytes > maxSize)
			{
				loadErrorModal('Sorry! the file size of photo exceeds the maximum allowed limit of 2 MB\nYour file is of ' + showFileSize(fsInBytes) + ' size.',"document1");
				error=true;
			}
		}
  		
	}
	if(fun=='update')
  	{

		if((document.getElementById('thb_img1').value =='' && document.getElementById('oldthb_img').value =="") && error==false)
		{
			error=true;
			loadErrorModal('Please Upload the thumb image','thb_img1');
		}
		if(document.frm_event.thb_img1.value != "")
		{
			var filereturn=FileExtension_Validate(document.frm_event.thb_img1.value);
			if (filereturn ==false)
		   {
			error=true;
			loadErrorModal("Please select a file with jpg.jpeg,pdf extension","thb_img1");			
		   } 						
		}
		if(document.frm_event.thb_img1.value != "")
		{
			var fi = document.getElementById('thb_img1');
			var fsInBytes = fi.files.item(0).size;
			var maxSize = 2097152;
			if (fsInBytes > maxSize)
			{
				loadErrorModal('Sorry! the file size of photo exceeds the maximum allowed limit of 2 MB\nYour file is of ' + showFileSize(fsInBytes) + ' size.',"thb_img1");
				error=true;
			}
		}

		if((document.getElementById('document1').value =='' && document.getElementById('olddocument').value =="") && error==false)
		{
			error=true;
			loadErrorModal('Please Upload the document','document1');
		}
		if(document.frm_event.document1.value != "")
		{
			var filereturn=FileExtension_Validate(document.frm_event.document1.value);
			if (filereturn ==false)
		   {
			error=true;
			loadErrorModal("Please select a file with jpg.jpeg,pdf extension","document1");			
		   } 						
		}
		if(document.frm_event.document1.value != "")
		{
			var fi = document.getElementById('document1');
			var fsInBytes = fi.files.item(0).size;
			var maxSize = 2097152;
			if (fsInBytes > maxSize)
			{
				loadErrorModal('Sorry! the file size of photo exceeds the maximum allowed limit of 2 MB\nYour file is of ' + showFileSize(fsInBytes) + ' size.',"document1");
				error=true;
			}
		}




  		
	}	 
		
	
	
	if(error == false)
	{
		if(fun=='add')
		{
			form.action=baseUrl+"event/add/";
			loadConfirmModal('Are you sure to continue');	
			$('#yesBtn').click(function(){form.submit()});
		}
		if(fun=='update')
			
		{
		form.action=baseUrl+"event/update/";
		loadConfirmModal('Are you sure to continue');	
		$('#yesBtn').click(function(){form.submit()});
		}
	}
}

function txtValidateName(txt) 
{ 
	txt = document.getElementById(txt);
    txt.value = txt.value.replace(/[^ a-zA-Z\n\r]+/g, '');
}
function txtValidate1(txt) 
{ 
	txt = document.getElementById(txt);
	txt.value = txt.value.replace(/[^0-9\n\r]+/g, '');
}
function is_valid_url(url)
{
	if( !url.match(/^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/)) { return false; } else  {return true; }
}
function FileExtension_Validate(txt)
{
	if( !txt.match(/\.(pdf)|(PDF)|(doc)|(DOC)|(docx)|(DOCX)|(jpg)|(jpeg)|(JPG)|(png)|(JPEG)|(PNG)$/)) { return false; } else  {return true; }
}
function add_more(baseurl)
{
	var numrows=parseInt(document.frm_event.cnnumrows.value)+1;
	var strinner="";
    var ni = document.getElementById('content');      
    var newdiv = document.createElement('div');
    var divIdName = 'my'+numrows+'Div1';
    newdiv.setAttribute('id',divIdName);
    document.frm_event.cnnumrows.value=numrows;
   	strinner="<div class='row'> <div class='col-md-3'><div class='form-group'><input type='text'placeholder='image caption' id='imgcaption"+numrows+"' name='imgcaption"+numrows+"'  class='form-control'/></div> </div><div class='col-md-3'><div class='form-group'><input type='file' id='thb_img"+numrows+"' name='thb_img"+numrows+"'  accept='.jpg, .jepg' /><input type='hidden' id='oldthb_img"+numrows+"' name='oldthb_img"+numrows+"'  /><span class='label label-default'>Format:.jpg, .jepg</span></div></div><div class='col-md-3'><div class='form-group'><input type='file' id='document"+numrows+"' name='document"+numrows+"' onclick='disableurl("+numrows+")' accept='.doc, .docx, .pdf,.jpg, .jepg' /><input type='hidden' id='olddocument"+numrows+"' name='olddocument"+numrows+"'  /><span class='label label-default'>Format: .doc, .docx, .pdf, .jpg, .jepg</span></div></div><div class='col-md-3'><div class='form-group'><input type='text' placeholder='url' id='url"+numrows+"' name='url"+numrows+"'  onkeyup='disablefile("+numrows+")' class='form-control'/><span class='label label-default'>https://www.google.com</span></div></div></div>";
 		
    newdiv.innerHTML=strinner;
    ni.appendChild(newdiv);
}
function search_list(form,baseurl)
{
	form.action =baseurl+"event/list_view/";
	 form.submit();
}
function listAll(form,baseurl)
{
	window.location.href=baseurl+"event/list_view/";
}
function deleteEvent(baseUrl,evt_id,page)
{
	if(evt_id!="")
	{
		loadConfirmModal("Do you want to Delete this Event");
		$('#yesBtn').click(function()
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
						 window.location.href=baseUrl+'event/list_view/'+page;
					}				
				}
			}
			xmlhttp.open("GET",baseUrl+"event/delete_event/"+evt_id,true);
			xmlhttp.send();
		});
	}
}

function StatusChangeEvent(baseUrl,evt_id,page,status,fun_dtl)
{
	if (evt_id != "")
	{
		if(status == 0)
		{
			loadConfirmModal("Do you want to Inactivate this event?");
		}
		if(status == 1)
		{
			loadConfirmModal("Do you want to Activate this event?");
		}
		if(status == 3)
		{
			loadConfirmModal("Do you want to add this to archive list?");
		}
		$('#yesBtn').click(function()
		{
			if (window.XMLHttpRequest)
			{
			  xmlhttp=new XMLHttpRequest();
			}
			else
			{
		  	xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
			}
			xmlhttp.onreadystatechange = function()
			{	
				if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
				{
					var rtext = xmlhttp.responseText;	
					if(rtext == '1')
					{
						if(fun_dtl == 'dtls_view')
						{
							window.location.href = baseUrl+"event/view/"+evt_id+'/'+page;
						}
						else if(fun_dtl == 'lst_view')
						{
							window.location.href = baseUrl+'event/list_view/'+page;
						}	
						
					}			
				}
			}
			xmlhttp.open("GET",baseUrl+"event/change_status_event/"+evt_id+"/"+status,true);
			xmlhttp.send();
		});
	}
}
function deleteEventImage(baseUrl,evt_id,rw)
{
	
	if(evt_id != "")
	{
		loadConfirmModal("Do you want to Delete this Event File");
		$('#yesBtn').click(function()
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
						document.getElementById('spid'+evt_id).innerHTML = "<span style='color:#B22222;' >Removed</span>";
						document.getElementById('olddocument'+rw).value ="";
					}			
				}
			}
			xmlhttp.open("GET",baseUrl+"event/delete_eventimage/"+evt_id,true);
			xmlhttp.send();
		});
	}
}
function deleteEventThumb(baseUrl,evt_id,rw)
{
	
	if(evt_id != "")
	{
		loadConfirmModal("Do you want to Delete this Event File");
		$('#yesBtn').click(function()
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
						document.getElementById('spidd'+evt_id).innerHTML = "<span style='color:#B22222;' >Removed</span>";
						document.getElementById('oldthb_img'+rw).value ="";
					}			
				}
			}
			xmlhttp.open("GET",baseUrl+"event/delete_eventthumb/"+evt_id,true);
			xmlhttp.send();
		});
	}
}
function loadImage(vl,h,w) {
  // alert(num);

        var input, file, fr, img;
		
		//alert(document.getElementById('document'+vl).value);
        if (typeof window.FileReader !== 'function') {
            write("The file API isn't supported on this browser yet.");
            return;
        }

        input = document.getElementById('thb_img'+vl);
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
        	if(img.width != w && img.height !=h)
        	{
        		loadErrorModal('Check Image Dimension. Image should  '+h+' height and '+w+' width','document'+vl);
        		fimg=1;
        		document.getElementById('thb_img'+vl).value = '';
        		      		
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
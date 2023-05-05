function validateForm(form,baseUrl,fun) 
{
	var error=false;
	if (document.getElementById('issue_number').value.trim()=="" && error==false)
	{
		loadErrorModal('Please provide issue number','issue_number');
		document.getElementById('issue_number').focus();
		error=true;
		return false;
	}	
	if (document.getElementById('nl_caption').value.trim()=="" && error==false)
	{
		loadErrorModal('Please provide caption','issue_number');
		document.getElementById('nl_caption').focus();
		error=true;
		return false;
	}	
	if (document.getElementById('nl_caption_mal').value.trim()=="" && error==false)
	{
		loadErrorModal('Please provide caption in malayalam','issue_number');
		document.getElementById('nl_caption_mal').focus();
		error=true;
		return false;
	}	
	// if (document.getElementById('atype').value.trim()=="" && error==false)
	// {
	// 	loadErrorModal('Please choose the type','atype');
	// 	document.getElementById('atype').focus();
	// 	error=true;
	// 	return false;
	// }	
	if(fun=="add")
	{
		if (document.getElementById('captionfile').value.trim()=="" && error==false)
		{
			loadErrorModal('Please choose the file','captionfile');
			document.getElementById('captionfile').focus();
			error=true;
			return false;
		}	
		if(document.getElementById('captionfile').value !="" && error==false)
		{
			var filereturn=FileExtension_Validate(document.getElementById('captionfile').value);
			if (filereturn ==false)
			{
				error=true;
				loadErrorModal('Please enter a file with allowed extensions','captionfile');								
				document.getElementById('captionfile').focus();
				return false;
			} 
		}		
	}
	if (document.getElementById('mnth').value.trim()=="" && error==false)
	{
		loadErrorModal('Please choose the month','mnth');
		document.getElementById('mnth').focus();
		error=true;
		return false;
	}	
	if (document.getElementById('years').value.trim()=="" && error==false)
	{
		loadErrorModal('Please choose the years','years');
		document.getElementById('years').focus();
		error=true;
		return false;
	}	
	if(fun=="update")
	{	
		if(document.getElementById('captionfile').value !="" && error==false)
		{
			var filereturn=FileExtension_Validate(document.getElementById('captionfile').value);
			if (filereturn ==false)
			{
				error=true;
				loadErrorModal('Please enter a file with allowed extensions','captionfile');								
				document.getElementById('captionfile').focus();
				return false;
			} 
		}		
	}
	if(!error)
	{
		if(fun=="add")
		{	  
			form.action=baseUrl+"vyavasayakeralam/insert/";
			loadConfirmModal('Do you want to add the newsletter?');	
			$('#yesBtn').click(function(){form.submit()});
   		}
   		if(fun=="update")
		{
			form.action=baseUrl+"vyavasayakeralam/update/";
			loadConfirmModal('Do you want to add the newsletter?');	
			$('#yesBtn').click(function(){form.submit()});	
 		}
 	}
}
function change_status(form,baseUrl,fun,id) 
{
	if(fun!="")
	{	  
		form.action=baseUrl+"vyavasayakeralam/change_status/"+id+'/'+fun;
		loadConfirmModal('Do you want to update the status?');	
		$('#yesBtn').click(function(){form.submit()});
	}
	
}

function search(form,baseurl)
{
	 form.action =baseurl+"newsletter/list_view/";
	 form.submit();
}
function listAll(form,baseurl)
{
	window.location.href=baseurl+"newsletter/list_view/";
}
/*function searchfrontend(form,baseurl,type)
{
	 form.action =baseurl+type+"/list_view/";
	 form.submit();
}
function listAllfrontend(form,baseurl,type)
{
	
	window.location.href=baseurl+type+"/list_view/";
}
*/
function FileExtension_Validate(txt)
{
	if( !txt.match(/\.(pdf)|(doc)|(PDF)|(DOC)|(docx)|(DOCX)|(jpeg)|(jpg)|(JPEG)|(JPG)|(xlsx)|(XLSX)$/)) { return false; } else  {return true; }
}
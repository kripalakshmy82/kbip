function validateform(form,baseUrl,fun)
{
	var error=false;
	if(document.getElementById('name').value.trim()=='' && error==false)
	{
		loadErrorModal('Please enter category name','name');
		error=true;
	}
	if(document.getElementById('display_order').value.trim()=='' && error==false)
	{
		loadErrorModal('Please enter display order','display_order');
		error=true;
	}
	if(document.getElementById('document').value !="" && error==false)
	{
		var filereturn=FileExtension_Validate(document.getElementById('document').value);
		if (filereturn ==false)
		{
			error=true;
			loadErrorModal('Please enter a file with allowed extensions','document');								
			document.getElementById('document').focus();
			return false;
		} 
	}
	if(document.getElementById('file_name').value.trim()=='' && error==false)
	{
		loadErrorModal('Please enter filename','file_name');
		error=true;
	}
	if(document.getElementById('page_title').value.trim()=='' && error==false)
	{
		loadErrorModal('Please enter page title','page_title');
		error=true;
	}
	if(document.getElementById('meta_keywords').value.trim()=='' && error==false)
	{
		loadErrorModal('Please enter meta keywords','meta_keywords');
		error=true;
	}
	if(document.getElementById('meta_descr').value.trim()=='' && error==false)
	{
		loadErrorModal('Please enter meta description','meta_descr');
		error=true;
	}
	
	if(!error)
	{
		if(fun=='add')
		{
			form.action=baseUrl+"downloads/add/";
			loadConfirmModal('Are you sure to continue');	
			$('#yesBtn').click(function(){form.submit()});
		}
		if(fun=='update')
		{
			form.action=baseUrl+"downloads/update/";	
			loadConfirmModal('Are you sure to continue');	
			$('#yesBtn').click(function(){form.submit()});
		}
	}
}

function closeDetail(form,baseUrl,fun)
{
	if(fun=='dc_list')
	{
		form.action=baseUrl+"downloads/list_view/";	
		loadConfirmModal('Are you sure to close this page?');	
		$('#yesBtn').click(function(){form.submit()});
	}
	if(fun=='unlist')
	{
		form.action=baseUrl+"downloads/un_list/"+page;	
		loadConfirmModal('Are you sure to close this page?');	
		$('#yesBtn').click(function(){form.submit()});
	}
}
function status(form,baseUrl,id,var1,fun)
{
	if(fun=='public')
	{
		form.action=baseUrl+"downloads/active/"+var1+"/"+id;	
		loadConfirmModal('Are you sure to change this status?');	
		$('#yesBtn').click(function(){form.submit()});
	}
	if(fun=='private')
	{
		form.action=baseUrl+"downloads/deactive/"+var1+"/"+id;	
		loadConfirmModal('Are you sure to close this page?');	
		$('#yesBtn').click(function(){form.submit()});
	}
	if(fun=='remove')
	{
		form.action=baseUrl+"downloads/remove/"+id;	
		loadConfirmModal('Are you sure to remove this page?');	
		$('#yesBtn').click(function(){form.submit()});
	}
}
function FileExtension_Validate(txt)
{
	if( !txt.match(/\.(jpg)|(JPG)|(png)|(PNG)|(jpeg)|(JPEG)$/)) { return false; } else  {return true; }
}
function search(form,baseurl)
{
	 form.action =baseurl+"downloads/list_view/";
	 form.submit();
}
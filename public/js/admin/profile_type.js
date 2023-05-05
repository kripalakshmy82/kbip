function validateform(form,baseUrl,fun)
{
	var error=false;
	if(document.getElementById('name').value.trim()=='' && error==false)
	{
		loadErrorModal('Please enter profile type','name');
		error=true;
	}
	if(!error)
	{
		if(fun=='add')
		{
			form.action=baseUrl+"profile_type/add/";
			loadConfirmModal('Are you sure to continue');	
			$('#yesBtn').click(function(){form.submit()});
		}
		if(fun=='update')
		{
			form.action=baseUrl+"profile_type/update/";	
			loadConfirmModal('Are you sure to continue');	
			$('#yesBtn').click(function(){form.submit()});
		}
	}
}
function closeDetail(form,baseUrl,fun)
{
	if(fun=='dc_list')
	{
		form.action=baseUrl+"profile_type/list_view/";	
		loadConfirmModal('Are you sure to close this page?');	
		$('#yesBtn').click(function(){form.submit()});
	}
	if(fun=='unlist')
	{
		form.action=baseUrl+"profile_type/un_list/"+page;	
		loadConfirmModal('Are you sure to close this page?');	
		$('#yesBtn').click(function(){form.submit()});
	}
}
function status(form,baseUrl,id,var1,fun)
{
	if(fun=='public')
	{
		form.action=baseUrl+"profile_type/active/"+var1+"/"+id;	
		loadConfirmModal('Are you sure to change this status?');	
		$('#yesBtn').click(function(){form.submit()});
	}
	if(fun=='private')
	{
		form.action=baseUrl+"profile_type/deactive/"+var1+"/"+id;	
		loadConfirmModal('Are you sure to change this status?');	
		$('#yesBtn').click(function(){form.submit()});
	}
	if(fun=='remove')
	{
		form.action=baseUrl+"profile_type/remove/"+id;	
		loadConfirmModal('Are you sure to remove this page?');	
		$('#yesBtn').click(function(){form.submit()});
	}
}
function search_list(form,baseurl)
{
	 form.action =baseurl+"profile_type/list_view/";
	 form.submit();
}
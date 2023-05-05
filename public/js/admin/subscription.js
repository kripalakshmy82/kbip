function validateform(form,baseUrl,fun)
{
	var error=false;
	if(document.getElementById('email').value.trim()=='' && error==false)
	{
		loadErrorModal('Please enter your email','email');
		error=true;
	}
	if(form.email.value.trim()!='' && error==false)
	{
		var email_id = document.getElementById('email_id');
		var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		if (!filter.test(email.value))
	 	{
	 		loadErrorModal('Please provide a valid email address','email');
			return false;
		}			
	}
	if(form.phone.value.trim()!='' && error==false)
	{
		var phone = document.getElementById('phone');
		var filter =/(^[0-9]+[-]*[0-9]+$)/;
		if (!filter.test(phone.value))
	 	{
	 		loadErrorModal('Please provide a valid phone number','phone');
			return false;
		}
	}
	if(!error)
	{
		if(fun=='add')
		{
			form.action=baseUrl+"subscription/add/";
			loadConfirmModal('Are you sure to continue');	
			$('#yesBtn').click(function(){form.submit()});
		}
		if(fun=='update')
		{
			form.action=baseUrl+"subscription/update/";	
			loadConfirmModal('Are you sure to continue');	
			$('#yesBtn').click(function(){form.submit()});
		}
	}
}
function closeDetail(form,baseUrl,page,fun)
{
	if(fun=='list')
	{
		form.action=baseUrl+"subscription/list_view/";	
		loadConfirmModal('Are you sure to close this page?');	
		$('#yesBtn').click(function(){form.submit()});
	}
	if(fun=='unlist')
	{
		form.action=baseUrl+"subscription/un_list/";	
		loadConfirmModal('Are you sure to close this page?');	
		$('#yesBtn').click(function(){form.submit()});
	}
	if(fun=='close_add')
	{
		form.action=baseUrl+"subscription/list_view/";	
		loadConfirmModal('Are you sure to close this page?');	
		$('#yesBtn').click(function(){form.submit()});
	}
}
function status(form,baseUrl,id,fun)
{
	if(fun=='public')
	{
		form.action=baseUrl+"subscription/active/"+id;	
		loadConfirmModal('Are you sure to publish?');	
		$('#yesBtn').click(function(){form.submit()});
	}
	if(fun=='private')
	{
		form.action=baseUrl+"subscription/deactive/"+id;	
		loadConfirmModal('Are you sure to change this status?');	
		$('#yesBtn').click(function(){form.submit()});
	}
}
function remove(form,baseUrl,id,var1,fun)
{
	if(fun=='unlist')
	{
		form.action=baseUrl+"subscription/remove/"+id+'/'+var1;	
		loadConfirmModal('Are you sure to publish?');	
		$('#yesBtn').click(function(){form.submit()});
	}
	if(fun=='list')
	{
		form.action=baseUrl+"subscription/remove/"+id+'/'+var1;	
		loadConfirmModal('Are you sure to change this status?');	
		$('#yesBtn').click(function(){form.submit()});
	}
}
function closeEdit(form,baseUrl,id,fun)
{
	if(fun=='list')
	{
		form.action=baseUrl+"subscription/view/"+id;	
		loadConfirmModal('Are you sure to close this page?');	
		$('#yesBtn').click(function(){form.submit()});
	}
	if(fun=='un_list')
	{
		form.action=baseUrl+"subscription/unlist_view/"+id;	
		loadConfirmModal('Are you sure to close this page?');	
		$('#yesBtn').click(function(){form.submit()});
	}
}
function search_list(form,baseurl)
{
	 form.action =baseurl+"subscription/list_view/";
	 form.submit();
}
function search_unlist(form,baseurl)
{
	 form.action =baseurl+"subscription/un_list/";
	 form.submit();
}
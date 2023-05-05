function validateform(form,baseUrl,fun)
{
	var error=false;
	if(document.getElementById('contact_name').value.trim()=='' && error==false)
	{
		loadErrorModal('Please enter contact name','contact_name');
		error=true;
	}
	if(document.getElementById('address').value.trim()=='' && error==false)
	{
		loadErrorModal('Please enter address','address');
		error=true;
	}
	if(document.getElementById('email').value.trim()=='' && error==false)
	{
		loadErrorModal('Please enter email','email');
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
	
	
	if(!error)
	{
		if(fun=='add')
		{
			form.action=baseUrl+"contact/add/";
			loadConfirmModal('Are you sure to continue');	
			$('#yesBtn').click(function(){form.submit()});
		}
		if(fun=='update')
		{
			form.action=baseUrl+"contact/update/";	
			loadConfirmModal('Are you sure to continue');	
			$('#yesBtn').click(function(){form.submit()});
		}
	}
}

function closeDetail(form,baseUrl,fun)
{
	if(fun=='list')
	{
		form.action=baseUrl+"contact/list_view/";	
		loadConfirmModal('Are you sure to close this page?');	
		$('#yesBtn').click(function(){form.submit()});
	}
}
function status(form,baseUrl,id,var1,fun)
{
	if(fun=='public')
	{
		form.action=baseUrl+"contact/active/"+id+"/"+var1;	
		loadConfirmModal('Are you sure to change this status?');	
		$('#yesBtn').click(function(){form.submit()});
	}
	if(fun=='private')
	{
		form.action=baseUrl+"contact/deactive/"+id+"/"+var1;	
		loadConfirmModal('Are you sure to close this page?');	
		$('#yesBtn').click(function(){form.submit()});
	}
	if(fun=='remove')
	{
		form.action=baseUrl+"contact/remove/"+id;	
		loadConfirmModal('Are you sure to remove this page?');	
		$('#yesBtn').click(function(){form.submit()});
	}
}
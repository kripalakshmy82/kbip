function updateContent(form,baseUrl)
{
	var error=false;
	if(form.old_password.value=='')
	{
		error=true;
		alert("Please specify the current password");
		form.old_password.focus();
	}
	if(form.new_password.value=='' && error==false)
	{
		error=true;
		alert("Please specify the new password");
		form.new_password.focus();
	}
	if(form.new_password.value!='' && error==false)
	{
		var pwd=form.new_password.value;
		if(pwd.length<6)
		{
			error=true;
			alert("Password must have atleast six characters");
		}
	}	
	if(form.confirm_password.value=='' && error==false)
	{
		error=true;
		alert("Please re-enter the new password");
		form.confirm_password.focus();
	}
	
	if((form.new_password.value!=form.confirm_password.value) && (error==false))
	{
		error=true;
		alert("Password mismatch");
		form.new_password.value='';
		form.confirm_password.value='';
	}
	if(!error)
	{
		
			form.action=baseUrl+"change_password/update";
			form.submit();
		
	}
}


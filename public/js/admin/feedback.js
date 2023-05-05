function validateform(form,baseUrl,fun)
{
	var error=false;
	if(document.getElementById('to_id').value.trim()=='' && error==false)
	{
		loadErrorModal('Please enter TO email address','to_id');
		error=true;
	}
	if(document.getElementById('to_id').value.trim()!='' && error==false)
	{
		var email_id = document.getElementById('to_id');
		var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		if (!filter.test(email_id.value))
	 	{
	 		loadErrorModal('Please provide a valid email address','to_id');
			return false;
		}			
	}
	if(document.getElementById('subject').value.trim()=='' && error==false)
	{
		loadErrorModal('Please enter subject','subject');
		error=true;
	}
	if(document.getElementById('message').value.trim()=='' && error==false)
	{
		loadErrorModal('Please enter your message','message');
		error=true;
	}
	if(!error)
	{
		if(fun=='add')
		{
			form.action=baseUrl+"feedback/save_data/";
			loadConfirmModal('Are you sure to continue');	
			$('#yesBtn').click(function(){form.submit()});
		}
	}
}
function closeDetail(form,baseUrl,fun,id)
{
	if(fun=='remove')
	{
		form.action=baseUrl+"feedback/remove_read/"+id;	
		loadConfirmModal('Are you sure to delete?');	
		$('#yesBtn').click(function(){form.submit()});
	}
	if(fun=='sent')
	{
		form.action=baseUrl+"feedback/remove_sent/"+id;	
		loadConfirmModal('Are you sure to delete?');	
		$('#yesBtn').click(function(){form.submit()});
	}
}
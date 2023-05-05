function validate(form,baseUrl,fun)
{
	var fg=0;
	var error=false;
	for(var i=1; i<=9;i++)
	{
		if(document.getElementById('ban_width'+i).value!='' || document.getElementById('ban_height'+i).value!='' || document.getElementById('max_size'+i).value!='' || document.getElementById('sup_file_format'+i).value!='')
		{
			fg=1;			
			break;
		}

	}
	if(fg==0  && error==false)
		{
			error=true;
			loadErrorModal('Please enter atleast one value','ban_width1');
			
		}
	
	
	if(error == false)
	{
		form.action=baseUrl+"common_settings/add_image_settings/";
			loadConfirmModal('Are you sure you want to add this details');	
			$('#yesBtn').click(function(){form.submit()});
	
	}	
}

function validateform(form,baseUrl)
{
	var fg=0;
	var error=false;
	if(document.getElementById('contact_to').value=='')
	{
		error=true;
		loadErrorModal('Please enter contact to','contact_to');
	}
	if(document.getElementById('contact_to').value!="")
	    {
	        var e1 = document.getElementById('contact_to').value.trim();
	       
					valid=validateEmail(e1);
					if(valid==false)
					{
						
						loadErrorModal('Please specify a valid contact to email ','contact_to');
					    form.contact_to.focus();
					    return false;
					}			
	    }	
	
	if(document.getElementById('contact_from').value=='')
	{
		error=true;
		loadErrorModal('Please enter contact from','contact_from');
	}
	
	if(document.getElementById('contact_from').value!="")
	    {
	        var e2 = document.getElementById('contact_from').value.trim();
	       
					valid=validateEmail(e2);
					if(valid==false)
					{
						loadErrorModal('Please specify a valid contact from email ','contact_from');
					    form.contact_from.focus();
					    return false;
					}			
	    }	
	if(document.getElementById('feedback_to').value=='')
	{
		error=true;
		loadErrorModal('Please enter feedback to','feedback_to');
	}
	if(document.getElementById('feedback_to').value!="")
	    {
	        var e3 = document.getElementById('feedback_to').value.trim();
	       
					valid=validateEmail(e3);
					if(valid==false)
					{
						loadErrorModal('Please specify a  valid feedback to email ','feedback_to');
					    form.feedback_to.focus();
					    return false;
					}			
	    }	
	if(document.getElementById('feedback_from').value=='')
	{
		error=true;
		loadErrorModal('Please enter feedback from','feedback_from');
	}
	if(document.getElementById('feedback_from').value!="")
	    {
	        var e4 = document.getElementById('feedback_from').value.trim();
	       
					valid=validateEmail(e4);
					if(valid==false)
					{
						loadErrorModal('Please specify a valid feedback from email ','feedback_from');
					    form.feedback_from.focus();
					    return false;
					}			
	    }	
	
	
	if(error == false)
	{
		form.action=baseUrl+"common_settings/add_mail_settings/";
		loadConfirmModal('Are you sure you want to add this details');	
		$('#yesBtn').click(function(){form.submit()});
	
	}	
}

function txtValidate1(txt) 
{ 
	txt = document.getElementById(txt);
	txt.value = txt.value.replace(/[^0-9\n\r]+/g, '');
}

function txtValidate2(txt) 
{ 
	txt = document.getElementById(txt);
	txt.value = txt.value.replace(/[^0a-zA-Z,\n\r]+/g, '');
}

function setBannerInner(form)
{
	form.ban_width2.value=form.ban_width1.value;
	form.ban_height2.value=form.ban_height1.value;
	form.max_size2.value=form.max_size1.value;
	form.sup_file_format2.value=form.sup_file_format1.value;
}

function unsetBannerInner(form)
{
	form.ban_width2.value='';
	form.ban_height2.value='';
	form.max_size2.value='';
	form.sup_file_format2.value='';
}

function validateEmail(email_value) {
   var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
   var address = email_value;
   if(reg.test(address) == false) {
      return false;
   }
   else
   {
	return true;
   }
}


function validateUser(form,baseUrl,fun)
{
	
	var error=false;
	if(form.name.value.trim()=='' && error==false)
	{
		error=true;
		loadErrorModal('Please enter the name','name');
		
	}
	if(form.user_name.value.trim()=='' && error==false)
	{
		error=true;
		loadErrorModal('Please enter the user name','user_name');
	}
	
/*	if(fun=='add')
	{
		if(form.password.value.trim()=='' && error==false)
		{
			error=true;
			alert("Please enter the password");
			document.getElementById('password').focus();
		}
	}*/
	
	if(form.email.value.trim()=='' && error==false)
	{
		error=true;
		loadErrorModal('Please enter the email','email');
		
	}
	
	if(form.email.value!="")
	    {
	        var myString = form.email.value.trim();
	        var mySplitResult = myString.split(',');
			   
					valid=validateEmail(myString);
					if(valid==false)
					{
						loadErrorModal('Please specify a valid email id','email');
						
					    return false;
					}			
			  
	    }

	if(form.acc_menus.value.trim()=='' && error==false)
	{
		error=true;
		loadErrorModal('Please select the access menus','acc_menus');
		
	}
	
	if(document.getElementById('user_photo').value != "")
	{
	var filereturn=FileExtension_Validate(document.getElementById('user_photo').value);
	if (filereturn ==false)
	   {
		error=true;
		loadErrorModal('Please select a file with jpg,jpeg,png extension','user_photo');
		
		return false;
	   } 
						
	}


	
	
	
	if(error == false)
	{
		if(fun=='add')
		{
			form.action=baseUrl+"user/add_user/";
			loadConfirmModal('Are you sure you want to add this user');	
			$('#yesBtn').click(function(){form.submit()});
			
			
		}
		if(fun=='update')
		{
			form.action=baseUrl+"user/update_user/";
			loadConfirmModal('Are you sure you want to update this user');	
			$('#yesBtn').click(function(){form.submit()});
			
			
		}
	}
}

function FileExtension_Validate(txt)
{if( !txt.match(/\.(jpg)|(jpeg)|(JPG)|(png)|(JPEG)|(PNG)$/)) { return false; } else  {return true; }}

function Delete_Photo(baseUrl,id,file)
	{
		loadConfirmModal('Do you want to Delete this Photo');
		$('#yesBtn').click(function()
		{
			window.location.href=baseUrl+'user/delete_photo/'+id+'/'+file;
		});
	}

function StatusChangeUser(baseUrl,cl_id,page,status)
{

	if(cl_id!="")
	{
		if(status==0)
		{
			loadConfirmModal('Do you want to Inactivate this User?');
			
		}
		if(status==1)
		{
			loadConfirmModal('Do you want to Activate this User?');
		}
		
		$('#yesBtn').click(function()
		{
			//alert(baseUrl+"ajax_functions/delete_rtioffice/"+office_id);
			
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
					
					if(rtext==1)
					{
						 window.location.href=baseUrl+'user/list_view/'+page;
					}
								
				}
			}
			xmlhttp.open("GET",baseUrl+"user/change_status_user/"+cl_id+"/"+status,true);
			xmlhttp.send();
		});
	}
}


function deleteUser(baseUrl,cl_id,page)
{

	if(cl_id!="")
	{
		loadConfirmModal('Do you want to Delete this User');
	
		$('#yesBtn').click(function()
		{
			//alert(baseUrl+"ajax_functions/delete_rtioffice/"+office_id);
			
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
					
					if(rtext==1)
					{
						 window.location.href=baseUrl+'user/list_view/'+page;
					}
								
				}
			}
			xmlhttp.open("GET",baseUrl+"user/delete_user/"+cl_id,true);
			xmlhttp.send();
		});
	}
}

function search(form,baseurl)
{
	var error=false;
	if((form.name.value.trim()=='' && form.mail_id.value.trim()=='') && error==false)
	{
		error=true;
		loadErrorModal('Please enter name or mail id','name');
	
	}
	if(error == false)
	{
	 form.action=baseurl+"user/list_view/";
	 form.submit();
	}
}
function listAll(form,baseurl)
{
	 document.getElementById('name').value='';
	  document.getElementById('mail_id').value='';
	 form.action =baseurl+"user/list_view/";
	 form.submit();
}

function check_username(username,base_url)
    {
    	
    var username=username;
     var form_data = 
        {
           user_name:username,
         
         };  
        
                $.ajax(
                {
                    url:base_url+"user/check_username_exist",
                    type: "POST",
                    async : false,
                    data: form_data,
                    success:   function(response) 
                        {
                  //   alert(response);
                        if(response==1)
                        {
                        	loadErrorModal('This username is already registered please use another one.','user_name');
                       
						return false;                           
                        }
                }
    });
    }
    
 function check_email(email,base_url)
    {
    	
    var email=email;
     var form_data = 
        {
           email:email,
         
         };  
        
                $.ajax(
                {
                    url:base_url+"user/check_email_exist",
                    type: "POST",
                    async : false,
                    data: form_data,
                    success:   function(response) 
                        {
                  //   alert(response);
                        if(response==1)
                        {
                        	loadErrorModal('This email is already registered please use another one.','email');
                        
						return false;                           
                        }
                }
    });
    }
    

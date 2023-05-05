function validate(form,baseUrl,fun)
{
	//alert("test2");
	
	var error=false;
	if(form.name.value.trim()=='' && error==false)
	{
		error=true;
		loadErrorModal('Please enter the faq category','name');

	}
	
	
	if(error == false)
	{
		if(fun=='add')
		{
			form.action=baseUrl+"faq/add_catagory/";
			loadConfirmModal('Are you sure to continue');	
			$('#yesBtn').click(function(){form.submit()});
			
		
		}
		if(fun=='update')
		{
			form.action=baseUrl+"faq/update_category/";
			loadConfirmModal('Are you sure you want to update this event details');	
			$('#yesBtn').click(function(){form.submit()});
			
			
		}
	}
}
function txtValidate1(txt) 
{ 
	txt = document.getElementById(txt);
	txt.value = txt.value.replace(/[^0-9\n\r]+/g, '');
}
function search1(form,baseurl)
{
	
	 form.action=baseurl+"faq/faq_catagory_list_view/";
	 form.submit();
}
function listAll(form,baseurl)
{
	 document.getElementById('search').value='';
	 form.action =baseurl+"faq/faq_catagory_list_view/";
	 form.submit();
}

function searchfaq(form,baseurl)
{
	 form.action=baseurl+"faq/faq_list_view/";
	 form.submit();
}
function listAllfaq(form,baseurl)
{
	 document.getElementById('search').value='';
	 form.action =baseurl+"faq/faq_list_view/";
	 form.submit();
}

function deleteFaqCategory(baseUrl,cl_id,page)
{

	if(cl_id!="")
	{
		//alert(baseUrl+"faq/delete_faq_category/"+cl_id);
		//form.action=baseUrl+"faq/insert_faq/";
			loadConfirmModal('Do you want to Delete this Category');	
			$('#yesBtn').click(function(){
		
		/*var ret=confirm("Do you want to Delete this Category");
		if(ret==true)
		{*/
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
					//alert(rtext);
					if(rtext=='1')
					{
						 window.location.href=baseUrl+'faq/faq_catagory_list_view/'+page;
					}
					if(rtext=='2')
					{
						loadErrorModal('This category is used in faq. So you canot delete this category.');
						
						// window.location.href=baseUrl+'faq/faq_catagory_list_view/'+page;
					}
								
				}
			}
			xmlhttp.open("GET",baseUrl+"faq/delete_faq_category/"+cl_id,true);
			xmlhttp.send();
		//}
		});
	}
}

function StatusChangeFaqCategory(baseUrl,cl_id,page,status)
{

	if(cl_id!="")
	{
		if(status==0)
		{
			loadConfirmModal('Do you want to change this Category to Private?');				
		}
		if(status==1)
		{
			loadConfirmModal('Do you want to change this Category to Public?');	
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
					
					if(rtext=='1')
					{
						 window.location.href=baseUrl+'faq/faq_catagory_list_view/'+page;
					}
								
				}
			}
			xmlhttp.open("GET",baseUrl+"faq/change_status_faq_category/"+cl_id+"/"+status,true);
			xmlhttp.send();
		});
	}
}

function validatefaq(form,baseUrl,fun)
{
	var error=false;
	if(form.question.value.trim()=='' && error==false)
	{
		error=true;
		loadErrorModal('Please enter the question','question');
		
	}
	
	if(form.category_id.value.trim()==0 && error==false)
	{
		error=true;
		loadErrorModal('Please choose the category','category_id');
		
	}
	
/*	if(form.editor1.value.trim()=='' && error==false)
	{
		error=true;
		loadErrorModal('Please enter the answer','editor1');
	}*/
	
	
	if(error == false)
	{
		if(fun=='add')
		{
			form.action=baseUrl+"faq/insert_faq/";
			loadConfirmModal('Are you sure you want to add this faq');	
			$('#yesBtn').click(function(){form.submit()});
			
			
		}
		if(fun=='update')
		{
			form.action=baseUrl+"faq/update_faq/";
			loadConfirmModal('Are you sure you want to update this faq');	
			$('#yesBtn').click(function(){form.submit()});
			
			
		}
	}
}	


function StatusChangeFaq(baseUrl,cl_id,page,status)
{

	if(cl_id!="")
	{
		if(status==0)
		{
			loadConfirmModal('Do you want to change this Faq to Private?');
			
		}
		if(status==1)
		{
			loadConfirmModal('Do you want to change this Faq to Public?');
			
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
					
					if(rtext=='1')
					{
						 window.location.href=baseUrl+'faq/faq_list_view/'+page;
					}
								
				}
			}
			xmlhttp.open("GET",baseUrl+"faq/change_status_faq/"+cl_id+"/"+status,true);
			xmlhttp.send();
		});
	}
}


function deleteFaq(baseUrl,cl_id,page)
{

	if(cl_id!="")
	{
		loadConfirmModal('Do you want to Delete this Faq');
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
					
					if(rtext=='1')
					{
						 window.location.href=baseUrl+'faq/faq_list_view/'+page;
					}
								
				}
			}
			xmlhttp.open("GET",baseUrl+"faq/delete_faq/"+cl_id,true);
			xmlhttp.send();
		});
	}
}
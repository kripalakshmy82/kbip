// FOR BACKEND
function validatemenu(form,baseUrl,fun)
{
	var error=false;
	if(form.menu_name.value.trim()=='' && error==false)
	{
		error=true;
		loadErrorModal('Please enter the menu name','menu_name');
	}
	if(form.type_id.value.trim()==0 && error==false)
	{
		error=true;
		loadErrorModal('Please select the type','type_id');
	}
	if(form.menu_name.value.trim()!='' && form.type_id.value.trim()!=0 && form.parent.value.trim()!='' && error==false)
	{
		var name=form.menu_name.value;
		var display=form.type_id.value;
		var parent=form.parent.value;
		
		
		if(fun=='add')
		{
			checkNameExist(baseUrl,name,display,parent,'');
		}
		else{
			var id=form.c_id.value;
			rslt=checkNameExist(baseUrl,name,display,parent,id);
			//rslt1=checkLimit(baseUrl,val,pos);
		}
		var ab=form.aja.value; 
		//var ab1=form.aja1.value;
		if(ab==1)
		{
			error=true;
		}
		else{
			error=false;
		}
	}
	if(error == false)
	{
		if(fun=='add')
		{
			form.action=baseUrl+"menu_items/insert_menu/";
			loadConfirmModal('Are you sure you want to add this menu');	
			$('#yesBtn').click(function(){form.submit()});
		}
		if(fun=='update')
		{
			form.action=baseUrl+"menu_items/update_menu/";
			loadConfirmModal('Are you sure you want to update this menu');	
			$('#yesBtn').click(function(){form.submit()});
			
		}
	}
}

function StatusChangeMenu(baseUrl,cl_id,page,status)
{
	if(cl_id!="")
	{
		if(status==0)
		{
			loadConfirmModal('Do you want to Inactivate this Menu?');
		}
		if(status==1)
		{
			loadConfirmModal('Do you want to Activate this Menu?');
		}
		$('#yesBtn').click(function()
		{
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
						 window.location.href=baseUrl+'menu_items/list_view/'+page;
					}
								
				}
			}
			xmlhttp.open("GET",baseUrl+"menu_items/change_status_menu/"+cl_id+"/"+status,true);
			xmlhttp.send();
		
		});
	}
}

function deleteMenu(baseUrl,cl_id,page)
{
	if(cl_id!="")
	{
		loadConfirmModal('Do you want to Delete this Menu');
			$('#yesBtn').click(function(){
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
						 window.location.href=baseUrl+'menu_items/list_view/'+page;
					}				
				}
			}
			xmlhttp.open("GET",baseUrl+"menu_items/delete_menu/"+cl_id,true);
			xmlhttp.send();
		});
	}
}
function checkNameExist(baseUrl,name,display,parent,id)
{
	//alert(baseUrl+"menu_items/check_name_exist/"+display+"/"+parent+"/"+name);
	if (window.XMLHttpRequest)
	{
  		xmlhttp1=new XMLHttpRequest();
	}
	else
	{
  		xmlhttp1=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp1.onreadystatechange=function()
	{	
		if (xmlhttp1.readyState==4 && xmlhttp1.status==200)
		{
			var rtext = xmlhttp1.responseText;
			//alert(rtext);
			if(rtext==1)
			{
				loadErrorModal('Name already exist under choosen parent','parent');
				document.getElementById('parent').value='0';
				document.getElementById('aja').value='1';
				//return '1';	
			}
				else 
				{
					document.getElementById('aja').value='0';
				}
		}	
	}
	xmlhttp1.open("GET",baseUrl+"menu_items/check_name_exist/"+display+"/"+parent+"/"+name+"/"+id, false);
	xmlhttp1.send();	
}
function listAll(form,baseurl)
{
	 document.getElementById('search').value='';
	 form.action =baseurl+"menu_items/list_view/";
	 form.submit();
}
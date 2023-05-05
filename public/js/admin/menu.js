

// FOR FRONTEND


function displayParent(baseUrl,val)
{
	if(val)
	{
		//alert(baseUrl+"menu/showDiv/"+val);
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
					
					if(rtext)
					{
						document.getElementById("prnt").innerHTML =rtext;
						// window.location.href=baseUrl+'menu_items/list_view/'+page;
					}
								
				}
			}
			xmlhttp.open("GET",baseUrl+"menu/showDiv/"+val,true);
			xmlhttp.send();
	}		
}

function displayOrder(baseUrl,val)
{
	
	if(val)
	{
		
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
				var rtext1 = xmlhttp1.responseText;
					
					if(rtext1)
					{
						
						document.getElementById("order").innerHTML =rtext1;
						// window.location.href=baseUrl+'menu_items/list_view/'+page;
					}
								
				}
			}
			xmlhttp1.open("GET",baseUrl+"menu/showDivOrder/"+val,true);
			xmlhttp1.send();
	}		
}

function selectAfterRadio()
{ document.menu_add_view.display_order[2].checked=true;}

function validate(form,baseUrl,fun)
{
	//alert("test2");
	
	var error=false;
	if(form.menu_name.value.trim()=='' && error==false)
	{
		error=true;
		loadErrorModal('Please enter the menu name','menu_name');
	}
	if(form.display_type_id.value.trim()=='' && error==false)
	{
		error=true;
		loadErrorModal('Please select the display type','display_type_id');
	}
	/*if(form.menu_url.value.trim()=='' && error==false)
	{
		error=true;
		loadErrorModal('Please enter the url','menu_url');
	}*/
	if(form.target_type.value.trim()=='' && error==false)
	{
		error=true;
		loadErrorModal('Please select the target type','target_type');
	}
	if(form.menu_name.value.trim()!='' && form.display_type_id.value.trim()!='' && form.parent.value.trim()!='' && error==false)
	{
		var val=form.parent.value;
		var pos=form.display_type_id.value;
		
		if(fun=='add')
		{
			rslt=checkNameExist(baseUrl,val,pos);
			rslt1=checkLimit(baseUrl,val,pos);
		}
		else{
			var id=form.c_id.value;
			rslt=checkNameExistEdit(baseUrl,val,pos,id);
			//rslt1=checkLimit(baseUrl,val,pos);
			
		}
	
		
		var ab=form.aja.value; 
		
		var ab1=form.aja1.value;
		
	
		if(ab==1 || ab1==1)
		{
			error=true;
		}
		else{
			error=false;
		}
		
		/*alert(ab1);
		if(ab1==1)
		{
			error=true;
		}
		else{
			error=false;
		}*/
	}
	
	
	if(error == false)
	{
		if(fun=='add')
		{
			form.action=baseUrl+"menu/insert_menu/";
			loadConfirmModal('Are you sure you want to add this menu');	
			$('#yesBtn').click(function(){form.submit()});
			
		}
		if(fun=='update')
		{
			
			form.action=baseUrl+"menu/update_menu/";
			loadConfirmModal('Are you sure you want to update this menu');	
			$('#yesBtn').click(function(){form.submit()});
			
		}
	}
}

function displayOrderEdit(baseUrl,val,display_type,parent,dis_order)
{
	
	if(val)
	{
		
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
				var rtext1 = xmlhttp1.responseText;
					
					if(rtext1)
					{
						
						document.getElementById("order").innerHTML =rtext1;
						// window.location.href=baseUrl+'menu_items/list_view/'+page;
					}
								
				}
			}
			xmlhttp1.open("GET",baseUrl+"menu/showDivOrderEdit/"+val+"/"+display_type+"/"+parent+"/"+dis_order,true);
			xmlhttp1.send();
	}		
}

function displayParentEdit(baseUrl,val,parent,dis_order)
{
	if(val)
	{
		//alert(baseUrl+"menu/showDiv/"+val);
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
						loadErrorModal('You cant add this menu in the selected position. You may either add this menu in any other parent or you may change the postion.','parent');
						 document.getElementById('parent').value='0';
					}
					else{
						document.getElementById("prnt").innerHTML =rtext;
						// window.location.href=baseUrl+'menu_items/list_view/'+page;
					}
								
				}
			}
			xmlhttp.open("GET",baseUrl+"menu/showDivEdit/"+val+"/"+parent+"/"+dis_order,true);
			xmlhttp.send();
	}		
}

function search1(form,baseurl)
{
	
	 form.action=baseurl+"menu/list_view/";
	 form.submit();
}
function listAll(form,baseurl)
{
	 document.getElementById('search').value='';
	 form.action =baseurl+"menu/list_view/";
	 form.submit();
}

function StatusChangeMenu(baseUrl,cl_id,page,status)
{

	if(cl_id!="")
	{
		if(status==0)
		{
			loadConfirmModal('Do you want to change this Menu to Private?');	
		}
		if(status==1)
		{
			loadConfirmModal('Do you want to change this Menu to Public?');
		}
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
					
					if(rtext==1)
					{
						 window.location.href=baseUrl+'menu/list_view/'+page;
					}
								
				}
			}
			xmlhttp.open("GET",baseUrl+"menu/change_status_menu/"+cl_id+"/"+status,true);
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
						 window.location.href=baseUrl+'menu/list_view/'+page;
					}
								
				}
			}
			xmlhttp.open("GET",baseUrl+"menu/delete_menu/"+cl_id,true);
			xmlhttp.send();
		});
	}
}

function checkLimit(baseUrl,val,pos)
{
	if(val!="")
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
						loadErrorModal('You cant add this menu in the selected position. You may either add this menu in any other parent or you may change the postion.','parent');
						 document.getElementById('parent').value='0';
						 document.getElementById('aja1').value='1';
					}
					else
					{
						document.getElementById('aja1').value='0';
					}
								
				}
			}
			xmlhttp.open("GET",baseUrl+"menu/check_lmt/"+val+"/"+pos,false);
			xmlhttp.send();
		
	}
}

function checkLimitPos(baseUrl,cparnt)
{
	val=document.getElementById('parent').value;
	if(val!="")
	{
		//if(val!=cparnt)
		//{		
		
		pos=document.getElementById('display_type_id').value;
			//alert(baseUrl+"menu/check_lmt/"+val+"/"+pos);
		
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
					if(rtext==1)
					{
						loadErrorModal('You cant add this menu in the selected position. You may either add this menu in any other parent or you may change the postion.','parent');
						 document.getElementById('parent').value='0';
					}
								
				}
			}
			xmlhttp.open("GET",baseUrl+"menu/check_lmt/"+val+"/"+pos,true);
			xmlhttp.send();
		//}
	}
}

function checkNameExist(baseUrl,val,pos)
{
	
	menu_name=document.getElementById('menu_name').value;
	//alert(baseUrl+"menu/check_name_exist/"+val+"/"+pos+"/"+menu_name);
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
			
			xmlhttp1.open("GET",baseUrl+"menu/check_name_exist/"+val+"/"+pos+"/"+menu_name, false);
			xmlhttp1.send();
			
}

function checkNameExistEdit(baseUrl,val,pos,id)
{
//alert("asdfasdf");	
menu_name=document.getElementById('menu_name').value;
	//alert(baseUrl+"menu/check_name_exist_edit/"+val+"/"+pos+"/"+menu_name+"/"+id);
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
	
					 //callback(1);	
			
				}
				
			}
			
			xmlhttp1.open("GET",baseUrl+"menu/check_name_exist_edit/"+val+"/"+pos+"/"+menu_name+"/"+id, false);
			xmlhttp1.send();
		
}

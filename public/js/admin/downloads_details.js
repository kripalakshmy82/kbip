$(document).ready(function ()
{
	$("#document1").click(function ()
	{
		$("#captionurl").attr("disabled", true);
    });
	$("#captionurl").keyup(function ()
	{
    	$("#document1").attr("disabled", Checkmultiple());
    });
	$("#clear_multiple").click(function ()
	{
		$("#document1").val("");
		$("#captionurl").attr("disabled", false);
	});
});	

function validateform(form,baseUrl,fun)
{
	var error=false;
	if(document.getElementById('categoryname').value.trim()=='' && error==false)
	{
		loadErrorModal('Please select category name','categoryname');
		error=true;
	}
	if(form.fdate.value.trim()!='' && error==false)
		{
			if (form.fdate.value.trim()!="" && error==false)
			{
				var yf;
				var d = new Date();
				var a=d.getDate();
				var c=d.getFullYear();
				var f=d.getMonth()+1;
				if(f<10) 
					yf = "0"+f;
				else 
					yf=f;
				
				var dt=a+"-"+yf+"-"+c;
				var from_date=form.fdate.value;
				var fromdate = from_date.split("/");	
				var fmdate= fromdate[0]+"-"+fromdate[1]+"-"+fromdate[2];
				//alert(fmdate);
				if(a<10) dt="0"+dt;	
				if( Days_count(dt,fmdate)<0)
				{
					error=true;
					loadErrorModal('Reference date should be on or before current date','fdate');					
					document.getElementById('fdate').focus();
					return false;
			  	}
			}
		}
	if(document.getElementById('subject').value.trim()=='' && error==false)
	{
		loadErrorModal('Please enter subject','subject');
		error=true;
	}
	if(document.getElementById('captionurl').value !="" && error==false)
	{
		var urlcheck=is_valid_url(document.getElementById('captionurl').value);
		if (urlcheck ==false)
		{
			loadErrorModal('Please enter a valid URL','captionurl');				
			document.getElementById('captionurl').focus();
			error=true;
			return false;
		} 
	}
	if(fun=='add')
  	{
		if(document.getElementById('captionurl').value =="" && document.getElementById('document1').value =="" && error==false)
		{
			loadErrorModal('Please select file','document1');
			error=true;
		}
	}
	if(fun=='update')
  	{
		if(document.getElementById('captionurl').value =="" && document.getElementById('document1').value =="" && document.getElementById('olddocument').value ==""  && error==false)
		{
			loadErrorModal('Please select file','document1');
			error=true;
		}
	}
	
	if(document.getElementById('captionurl').value =="" && document.getElementById('document1').value !="" && error==false)
	{
		var filereturn=FileExtension_Validate(document.getElementById('document1').value);
		if (filereturn ==false)
		{
			error=true;
			loadErrorModal('Please enter a file with allowed extensions','document1');								
			document.getElementById('document1').focus();
			return false;
		} 
	}
	
	// if(document.getElementById('dp_order').value.trim()=='' && error==false)
	// {
		// loadErrorModal('Please enter display order','dp_order');
		// error=true;
	// }
	if(!error)
	{
		if(fun=='add')
		{
			form.action=baseUrl+"downloads_details/add/";
			loadConfirmModal('Are you sure to continue');	
			$('#yesBtn').click(function(){form.submit()});
		}
		if(fun=='update')
		{
			form.action=baseUrl+"downloads_details/update/";	
			loadConfirmModal('Are you sure to continue');	
			$('#yesBtn').click(function(){form.submit()});
		}
	}
}

function closeDetail(form,baseUrl,fun)
{
	if(fun=='edit')
	{
		form.action=baseUrl+"downloads_details/list_view/";	
		loadConfirmModal('Are you sure to close this page?');	
		$('#yesBtn').click(function(){form.submit()});
	}
	if(fun=='unlist')
	{
		form.action=baseUrl+"downloads_details/un_list/"+page;	
		loadConfirmModal('Are you sure to close this page?');	
		$('#yesBtn').click(function(){form.submit()});
	}
}
function status(form,baseUrl,id,var1,fun)
{
	if(fun=='public')
	{
		form.action=baseUrl+"downloads_details/active/"+var1+"/"+id;	
		loadConfirmModal('Are you sure to change this status?');	
		$('#yesBtn').click(function(){form.submit()});
	}
	if(fun=='private')
	{
		form.action=baseUrl+"downloads_details/deactive/"+var1+"/"+id;	
		loadConfirmModal('Are you sure to close this page?');	
		$('#yesBtn').click(function(){form.submit()});
	}
	if(fun=='remove')
	{
		form.action=baseUrl+"downloads_details/remove/"+id;	
		loadConfirmModal('Are you sure to remove this page?');	
		$('#yesBtn').click(function(){form.submit()});
	}
}
function FileExtension_Validate(txt)
{
	if( !txt.match(/\.(pdf)|(doc)|(PDF)|(DOC)|(docx)|(DOCX)$/)) { return false; } else  {return true; }
}
function search(form,baseurl)
{
	 form.action =baseurl+"downloads_details/list_view/";
	 form.submit();
}
function delete_downloadDoc(baseUrl,dw_id)
{
	if(dw_id!="")
	{
		loadConfirmModal("Do you want to Delete this docment");
		$("#yesBtn").unbind().click(function()
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
					if(rtext=='1')
					{
						alert('Successfully Removed');
						location.reload(baseUrl+"downloads_details/delete_downloaddoc/"+dw_id);
					}
				}
			}
			xmlhttp.open("GET",baseUrl+"downloads_details/delete_downloaddoc/"+dw_id,true);
			xmlhttp.send();
		});
	}
}
function is_valid_url(url)
{if( !url.match(/^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/)) { return false; } else  {return true; }}
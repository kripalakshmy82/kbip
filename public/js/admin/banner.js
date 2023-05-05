var openFile = function(event) {
	
    var input = event.target;
    var reader = new FileReader();
    reader.onload = function(){
      var dataURL = reader.result;
      var output = document.getElementById('output');
      output.src = dataURL;
    };
    reader.readAsDataURL(input.files[0]);
  };
  
   function changestatus_banner_detail(banner_id,status)
 {
 	var baseurl = $('#baseurl').val();
 	loadConfirmModal('Are you sure to continue');
 	$('#yesBtn').click(function(){
		$.ajax({
		url: baseurl + "banner/changestatus_banner",
		async: false,
		type:"POST",
		data:{'banner_id':banner_id,
		'status':status,
		},
		datatype: 'html',
		success: function(status) {
						if(status=='2')
			{
				window.location.href=baseurl+"banner/listing/";
			}
			else{
				window.location.href=baseurl+"banner/detail_view/"+banner_id;
			}
		
	}
});
		//window.location.href=baseurl+"image_scroll/listing/";
 	});	
 	}
  	function listAll(form,baseurl)
	{
		window.location.href=baseurl+"banner/listing/";
	}
 	function search_banner(form,baseurl)
	{
	 	document.frm_search.action = baseurl+"banner/listing/";
	 	// frm_search.submit();
	 	document.frm_search.submit();
	}
	function apply_theme(form,baseurl)
	{
	 form.action =baseurl+"banner/apply_effect/";
	 loadConfirmModal('Are you sure to continue');
	 $('#yesBtn').click(function(){
	 form.submit();
	 });
}
 function innerbanner()
{
	
	loadErrorModal('Try to enter a single banner image for inner pages.Otherwise it will increase page load','banner_type');
	$('#innerbanner').show('fast');		
	$('#indexbanner').hide('fast');								
						
	//document.getElementById('banner_type').focus();
}
function indexbanner()
{
	
	//loadErrorModal('Try to enter a single banner image for inner pages.Otherwise it will increase page load','banner_type');
		$('#indexbanner').show('fast');								

	$('#innerbanner').hide('fast');		
	//document.getElementById('banner_type').focus();
} function changestatus_banner(banner_id,status1) 
 {
	//var flag=false;								
	var baseurl = $('#baseurl').val();
						
	//if(status='1')
	loadConfirmModal('Are you sure to continue');
	$('#yesBtn').click(function(){
					$.ajax({
								url: baseurl + "banner/changestatus_banner",
								async: false,
								type:"POST",
								data:{'banner_id':banner_id,
								'status':status1,
								},
								datatype: 'html',
								success: function(status) {
								
								//alert(status1);

								if(status1=='1')
											{
												$('div#result'+banner_id).hide();
												$('div#private'+banner_id).hide();
												$('div#public'+banner_id).show();
												$('#privatelires'+banner_id).hide();
												$('#publiclires'+banner_id).hide();
												$('#privateli'+banner_id).show();
												$('#publicli'+banner_id).hide();
											}
									else if(status1=='0')
										{
											$('div#result'+banner_id).hide();
											$('div#public'+banner_id).hide();
											$('div#private'+banner_id).show();
											$('#privatelires'+banner_id).hide();
											$('#publiclires'+banner_id).hide();
											$('#publicli'+banner_id).show();
											$('#privateli'+banner_id).hide();
										}
									else if(status1=='2')
										{
											window.location.href=baseurl+"banner/listing/";
										}
									
										}
									});
								//}								 
								});					
																      
} 

function validateForm(form,baseUrl,fun)
{
	var error=false;
	if (document.getElementById('caption').value.trim()=="" && error==false)
	{
		loadErrorModal('Please provide a caption','caption');
		document.getElementById('caption').focus();
		error=true;
		return false;
	}
		var c = document.getElementById('current').value;
		var split = c.split('-');
		var date3 = new Date(split[0], split[1], split[2]);
		var b,e;
		if(document.getElementById('from_date').value.trim()!="")
		{
		b=document.getElementById('from_date').value;
		var split = b.split('/');
		var date1 = new Date(split[2], split[1], split[0]); //Y M D
		}
		//var b = date;
		else
		{
				//var t=cur_date();
			var t = document.getElementById('current').value;
			//alert(t);
			var split = t.split('-');
			var date1 = new Date(split[0], split[1], split[2]);
			//alert(date1);
			
		}
		e=document.getElementById('to_date').value;
		var split = e.split('/');
		var date2 = new Date(split[2], split[1], split[0]); //Y M D
		//alert(date2);
		
		if(date1<date3)
		{
			loadErrorModal('Please enter a From date after current date','to_date');
			document.getElementById('to_date').focus();
			error=true;
		}
		if(date2<date3)
		{
			loadErrorModal('Please enter a To date after current date','to_date');
			document.getElementById('to_date').focus();
			error=true;
		}
		//alert(today);
		if(date1>date2) 
		{
			loadErrorModal('Please check From date or To date. The To date should be after From date','from_date');
			//alert("Please check From date or To date. The To date should be after From date");
			document.getElementById('from_date').focus();
			error=true;
		}

	if(document.getElementById('url').value !="" && error==false)
				{
					var urlcheck=is_valid_url(document.getElementById('url').value);
					if (urlcheck ==false)
					   {
						loadErrorModal('Please enter a valid URL','url');				
						document.getElementById('url').focus();
						error=true;
						return false;
					   }
					   if(document.getElementById('target_type').value =='' && error==false)
				{
					error=true;
					loadErrorModal('Please enter the target type','target_type');
					document.getElementById('target_type').focus();	
				} 
				
				}
				
				if(document.getElementById('document').value !="" && error==false)
					{		
						var name=document.getElementById('document').value;
						var ext =name.split('.')[name.split('.').length - 1];
							//var ext = name.split('.'); 
							//alert(ext);
						var filereturn=FileExtension_Validate(ext);
						if (filereturn ==false)
						   {
							error=true;
							loadErrorModal('Please enter a image with allowed extensions','document');								
							document.getElementById('document').focus();
							return false;
						   } 
					}
	
	if(fun=="add")
	{
		if( document.getElementById("document").files.length == 0  && error==false)
		{
			loadErrorModal('Please provide a image','document');
			document.getElementById('document').focus();
			error=true;
			return false;
			
			
		}
		if ( ( frm_add_banner.banner_type[0].checked == false && frm_add_banner.banner_type[1].checked == false && error==false))
		{
			loadErrorModal('Please select the banner type','banner_type');
			document.getElementById('banner_type').focus();
			error=true;
			return false;
			
		}
	}
	
	if(!error)
	{
		
		if(fun=="add")
		{	    
			form.action=baseUrl+"banner/save/";
			loadConfirmModal('Do you want to add the banner?');	
			$('#yesBtn').click(function(){form.submit()});
   		}
   		if(fun=="update")
		{	
		
			   
			form.action=baseUrl+"banner/update/";
			loadConfirmModal('Are you sure to continue?');	
			$('#yesBtn').click(function(){form.submit()});
   		
 		}
 	}
		
}
function is_valid_url(url)
// {if( !url.match(/^(ht|f)tps?:\/\/[a-z0-9-\.]+\.[a-z]{2,4}\/?([^\s<>\#%"\,\{\}\\|\\\^\[\]`]+)?$/)) { return false; } else  {return true; }}
{if( !url.match(/^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/)) { return false; } else  {return true; }}

function FileExtension_Validate(txt)
{
	//alert(txt);
	var extension=document.getElementById('extension').value;
	 var piece = extension.split(',');
	 var split=extension.split(',').length
	 var flag=0;
	//alert(piece[0]);
	  for (var i = 0; i <split; i++) 
		 {
			 var test=piece[i];
			 //alert(test);
			 if( txt!=test) { flag++;} 
			   //else  {return true; }
		 }
		// alert(flag);
		 if(flag==split)
		 {
		  return false;
		 }
		 else{
	return true;
	}
	
}
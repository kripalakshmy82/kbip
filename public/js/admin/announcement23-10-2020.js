 $(document).ready(function () {
var count = $('#count').val();

	$("select#atype").change(function(){
		for (var i = 0; i <= count; i++) 
{
	var test = $('#tets'+i).val();
    var selectedtype = $("#atype option:selected").val();
	if(selectedtype==test){

		$("#"+test).show();
		$("#hide"+i).show('fast');
		$("#display_ordero").removeAttr("name");

	}
	else
	{
		$("#"+test).hide();
		$("#hide"+i).hide('fast');
		$("#select").hide();
		
	}
}
});

 $('select#display_in').change(function() {
 	    		
 		var selectedextratype = $(this).val();
        if(selectedextratype!=null)
        {        	
       	var piece = selectedextratype.toString().split(',');
        var split=selectedextratype.toString().split(',').length
        for (var i = 0; i <split; i++) 
		 {
			var display=piece[i];
			var select = $('#t'+display).val();
			
			$("#"+display).show('fast');
			if( $('#selected'+display).css('display') == 'block' ) 
			{
			$("#rest"+display).hide('fast');
			} else 
			{
			$("#rest"+display).show('fast');
			$("#displayo"+display).removeAttr("name");
			
			}
		 }	
        }
        var yo=[];
		$('select#display_in option:not(:selected)').each(function(){
            yo.push($(this).val());
        });        
        var pieces = yo.toString().split(',');
        var splits=yo.toString().split(',').length
        for (var i = 0; i <splits; i++) 
		 {		 	
		 	var displays=pieces[i];
		 	$("#"+displays).hide('fast');
		 	$("#selected"+displays).hide('fast');
		 	
		 	$("#rest"+displays).hide('fast');
		 }
    });
$('#id_radio1').click(function () {
     $('#div2').hide('fast');
     $('#div1').show('fast');
});
$('#id_radio2').click(function () {
     $('#div1').hide('fast');
     $('#div2').show('fast');
});
$('#id_radio3').click(function () {
      $('#div2').hide('fast');
      $('#div1').hide('fast');
});
                
function change() {
     $('#div3').show('fast');
}
$('#id_no').click(function () {
      $('#div3').hide('fast');
});
                
$("input[name=sublink]").each(function(index,elem){
		if($(this).prop("checked")){
								    console.log("radio (with checked) has value: "+elem.value);
								    if(elem.value == "0"){
								        	$('#div1').hide('fast');
                      					 	$('#div2').show('fast');
								    } else if(elem.value == "1"){
								         	$('#div2').hide('fast');
                       						$('#div1').show('fast');
								    } else if(elem.value == "2"){
								        	$('#div2').hide('fast');
                       						$('#div1').hide('fast');
								    }
								 }
});
                
//                 
// $("#captionfile").change(function () {
	// $("#captionurl").attr("disabled", true);
// });
// $("#captionurl").keyup(function () {
	// $("#captionfile").attr("disabled", CheckInputs());
// 
// });
$(document).ready(function() {
		var inputElem = $('#captionurl');
		inputElem.keyup(function() {
		var input = $('#anchor');
		if (inputElem.val()) {
								input.addClass('modified');
								input.removeClass('basic');
								$('#test').attr("disabled", true);
							} 
							else 
							{
								input.addClass('basic');
								input.removeClass('modified');
								$('#test').attr("disabled", false);
							}
						});
});

// $("#captionurl").ready(function () {
	// $("#captionfile").attr("disabled", CheckInputs());
// });
// 
// $("#clear").click(function () {
    // $("#captionfile").val("");
    // $("#captionurl").attr("disabled", false);
// });
$("#document1").change(function () {
	$("#url1").attr("disabled", true);
});
$("#url1").keyup(function () {
	$("#document1").attr("disabled", Checkmultiple());
});
$("#clear_multiple").click(function () {
    $("#document1").val("");
    $("#url1").attr("disabled", false);
});
});

function change_show() 
{
   $('#div3').show('fast');
}
function change_hide() 
{
   $('#div3').hide('fast');
}
function disableurl(numrows) 
{
	$('#url'+numrows).attr("disabled", true);
}
               							
function disablefile(numrows) 
{
	$('#document'+numrows).attr("disabled", checkaddmore(numrows));
	var inputElem = $('#url'+numrows);
	var input = $('#old'+numrows);
	if (inputElem.val()) 
	{
		input.addClass('modified');
		input.removeClass('basic');
	} 
	else 
	{
		input.addClass('basic');
		input.removeClass('modified');
	}
 }
               
               
function remove(numrows) 
{
	$('#document' + numrows).val("");
	$('#url' + numrows).attr("disabled", false);
}
function remove_attachment(numrows) {
	$('#remove'+ numrows).hide('fast');
}															
function removeattachment(attachment_id,i) 
{
	var test = $('#cnnumrows').val();
	//alert(test);
	// var $input = $('#change');
									// $input.val( +$input.val() -1);	
									// var change = $('#change').val();
											// alert(change);	
	var baseurl = $('#baseurl').val();
	loadConfirmModal('Sure you want to delete this attachment??');
	$('#yesBtn').click(function(){
																	
									$.ajax({
											url: baseurl + "announcement/remove_attachment",
											type:"POST",
											data:{'attachment_id':attachment_id},
											datatype: "json",
											success: function(result) {
																        $('#url'+i).val("");
																        $('#attachment_caption'+i).val("");
																        $('#oldurl'+i).val("");
																        $('#olddocument'+i).val("");
																        $('#remove'+i).hide('fast');
																      }
											})
											
											// if(change==0){
											// $("#id_radio3").prop( "checked", true );
											// $('#div2').hide('fast');
      										// $('#div1').hide('fast');}
									});
}
               
function checkaddmore(numrows)
{
	var value = $.trim($('#url'+numrows).val());
	if(value.length!=0)
	{
		valid=true
	}
	else
	{valid=false}
	return valid;
}
						
function Checkmultiple() 
{
	var value = $.trim($("#url1").val());
	if(value.length!=0)
	{
		valid=true
	}
	else
	{valid=false}
	return valid;
} 				
function CheckInputs() 
{
	var value = $.trim($("#captionurl").val());
	if(value.length!=0)
	{
		valid=true
	}
	else
	{valid=false}
	return valid;
}    
						
function validateForm(form,baseUrl,fun) 
{
	//alert(form);
	var error=false;
	var n=document.getElementById('cnnumrows').value;
	if (document.getElementById('acaption').value.trim()=="" && error==false)
	{
		loadErrorModal('Please provide announcement title','acaption');
		document.getElementById('acaption').focus();
		error=true;
		return false;
	}
	if(document.getElementById('acaption').value.trim()!="" && error==false)
	{
		var filereturn=validateField(document.getElementById('acaption').value,'Announcement title');
		if (filereturn ==false)
		   {			
			loadErrorModal('Announcement title has special characters. \nThese are not allowed.\n Please remove them and try again','acaption');				
			document.getElementById('acaption').focus();
			error=true;
			return false;
		   } 
	}	
	if (document.getElementById('atype').value.trim()=="" && error==false)
	{
		loadErrorModal('Please enter the announcement type','atype');
		document.getElementById('atype').focus();
		error=true;
		return false;
	} 
	if(form.website_type.value.trim()==0 && error==false)
	{
		error=true;
		loadErrorModal('Please choose website type','website_type');
		document.getElementById('website_type').focus();
	} 
		var c = document.getElementById('current').value;
		var split = c.split('-');
		var date3 = new Date(split[0], split[1], split[2]);
		var b,e;
		if(document.getElementById('from_date').value.trim()!="")
		{
			b=document.getElementById('from_date').value;
			var split = b.split('/');
			var date1 = new Date(split[2], split[1], split[0]);
		}
		else
		{
			var t = document.getElementById('current').value;
			var split = t.split('-');
			var date1 = new Date(split[0], split[1], split[2]);
		}
		e=document.getElementById('to_date').value;
		var split = e.split('/');
		var date2 = new Date(split[2], split[1], split[0]);
		f=document.getElementById('reference_date').value;
		var split = f.split('/');
		var date4= new Date(split[2], split[1], split[0]);
		if(document.getElementById('reference_date').value.trim()!="" )
		{
			if(date4>date3)
			{
				loadErrorModal('Please enter a Reference date before current date','reference_date');
				document.getElementById('from_date').focus();
				error=true;
			}
		}
		if(document.getElementById('from_date').value.trim()!="" || document.getElementById('to_date').value.trim()!="" )
		{
			if(date1>date2 ) 
			{
				loadErrorModal('Please check From date or To date. The To date should be after From date','from_date');
				document.getElementById('to_date').focus();
				error=true;
			}
			if(date1<date3)
			{
				loadErrorModal('Please enter a From date after current date','from_date');
				document.getElementById('from_date').focus();
				error=true;
			}
			if(date2<date3)
			{
				loadErrorModal('Please enter a To date after current date','to_date');
				document.getElementById('to_date').focus();
				error=true;
			}
			// if(date4>date3)
			// {
				// loadErrorModal('Please enter a reference date before current date or current date','reference_date');
				// document.getElementById('reference_date').focus();
				// error=true;
			// }
		}
	
		if (document.frm_add_announcement.announcemnt_type[0].checked ==false && document.frm_add_announcement.announcemnt_type[1].checked ==false &&  document.frm_add_announcement.announcemnt_type[2].checked ==false &&  document.frm_add_announcement.announcemnt_type[3].checked ==false && error==false)
		{
			loadErrorModal('Please select a type','announcemnt_type');
			document.frm_add_announcement.announcemnt_type[0].focus();
			error=true;
		}
		
		if (document.frm_add_announcement.announcemnt_type[1].checked ==true && error==false)
		{
			if(fun=="add")
			{	
				if(document.getElementById('captionfile').value=="" && error==false)
					{
						
						error=true;
						loadErrorModal('Please upload a file','captionfile');								
						document.getElementById('captionfile').focus();
						return false;
						
					}
			}
			if(fun=="update")
			{	
				if(document.getElementById('captionfile').value=="" && document.getElementById('oldcaptiondocument').value=="" && error==false)
					{
						
						error=true;
						loadErrorModal('Please upload a file','captionfile');								
						document.getElementById('captionfile').focus();
						return false;
						
					}
			}
				if(document.getElementById('captionfile').value !="" && error==false)
				{
					var filereturn=FileExtension_Validate(document.getElementById('captionfile').value);
					if (filereturn ==false)
					{
							error=true;
							loadErrorModal('Please enter a file with allowed extensions','captionfile');								
							document.getElementById('captionfile').focus();
							return false;
					} 
				}	
				
				if(document.getElementById('target_type_file').value =='' && error==false)
					{
					error=true;
					loadErrorModal('Please enter the target type','target_type_file');
					document.getElementById('target_type_file').focus();	
					}
		}
		if (document.frm_add_announcement.announcemnt_type[2].checked ==true && error==false)
		{
			
			if(document.getElementById('captionurl').value =="" && error==false)
			{
				
					loadErrorModal('Please enter a website URL','captionurl');				
					document.getElementById('captionurl').focus();
					error=true;
					return false;
				   
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
				if(document.getElementById('target_type_url').value =='' && error==false)
					{
					error=true;
					loadErrorModal('Please enter the target type','target_type_url');
					document.getElementById('target_type_url').focus();	
					}
				
		}
		
	if ((frm_add_announcement.sublink[0].checked==true && error==false)) 
	{
		
		var someValue = false;
		for (var i = 1; i <= n; i++) 
		{
			if (document.getElementById('url' + i).value || document.getElementById("document" + i).files.length || document.getElementById('attachment_caption' + i).value.trim()!="") 
			{   
				someValue = true;
			}
			
		}
		if (!someValue) 
		{
			loadErrorModal('Enter a subpart or select none option','attachment_caption1');
			document.getElementById('attachment_caption1').focus();
			error=true;
			return false;  
		}
		
		for (var i = 1; i <= n; i++) 
		{
			if (document.getElementById('url' + i).value || document.getElementById("document" + i).files.length) 
			{
				if (document.getElementById('attachment_caption' + i).value.trim()=="")
				{
					error=true;
					loadErrorModal('Add a  caption','attachment_caption'+i);
					document.getElementById('attachment_caption'+i).focus();					
					return false;  	
				}
				if(document.getElementById('attachment_caption' + i).value.trim()!="" && error==false)
				{
					var filereturn=validateField(document.getElementById('attachment_caption' + i).value,'Caption');
					if (filereturn ==false)
					   {			
						loadErrorModal('Captione has special characters. \nThese are not allowed.\n Please remove them and try again','attachment_caption' + i);				
						document.getElementById('attachment_caption'+i).focus();
						error=true;
						return false;
					   } 
				}
				if(document.getElementById('target_type'+i).value =='' && error==false)
				{
					error=true;
					loadErrorModal('Please enter the target type','target_type'+i);
					document.getElementById('target_type'+i).focus();	
				}
						      
			}
			
			if(document.getElementById('url'+i).value !="" && error==false)
				{
					var urlcheck=is_valid_url(document.getElementById('url'+i).value);
					if (urlcheck ==false)
					   {
						loadErrorModal('Please enter a valid URL','url'+i);				
						document.getElementById('url'+i).focus();
						error=true;
						return false;
					   } 
				
				}
				if(document.getElementById('document'+i).value !="" && error==false)
					{
						var filereturn=FileExtension_Validate(document.getElementById('document'+i).value);
						if (filereturn ==false)
						   {
							error=true;
							loadErrorModal('Please enter a file with allowed extensions','captionfile');								
							document.getElementById('document'+i).focus();
							return false;
						   } 
					}
				
			
		}
	}
	

	
	
    if(!error)
	{
		
		if(fun=="add")
		{	  
			form.action=baseUrl+"announcement/save/";
			loadConfirmModal('Do you want to add the announcement?');	
			$('#yesBtn').click(function(){form.submit()});
   		}
   		if(fun=="update")
		{
			 form.action=baseUrl+"announcement/update/";
			loadConfirmModal('Do you want to update the announcement?');	
			$('#yesBtn').click(function(){form.submit()});	
 		}
 	}
   		

}



// function Validate_description(desc)
   // {
	// //alert(desc);
        // var editor_val = CKEDITOR.instances.editor1.document.getBody().getChild(0).getText() ;   
		// if (editor_val == '') {
			// alert('Please enter the description!') ;
			// return false ;
		// }
// 	    
		// return true ;
    // }

function closevalidation(form,baseUrl,info) 
{		
	var n=form;
	if ((info=='1')) 
	{
	
		var someValue = false;
		for (var i = 1; i <= n; i++) 
		{
			if (document.getElementById('oldurl'+i).value.trim()!=""  || (document.getElementById("olddocument"+i).value.trim()!="" )  || document.getElementById('attachment_caption' + i).value.trim()!="" ) 
			{   
				someValue = true;
			}
		}
		if (!someValue) 
		{
			loadErrorModal('Enter a subpart or select none option and save','attachment_caption1','url'+i);
			//document.getElementById('url'+i).focus();
			error=true;
			return false;  
		}
		else
		{
				window.location.href=baseUrl+"announcement/";

		}
	}
	else
		{
				window.location.href=baseUrl+"announcement/";

		}
	
}
function add_more(action)
{
	if(action=="add"){var numrows=parseInt(document.frm_add_announcement.cnnumrows.value)+1;}
	if(action=="update"){var numrows=parseInt(document.frm_add_announcement.cnnumrows.value)+1;}
	var strinner="";
    var ni = document.getElementById('content');
    var newdiv = document.createElement('div');
    var divIdName = 'my'+numrows+'Div1';
    newdiv.setAttribute('id',divIdName);
    if(action=="add"){document.frm_add_announcement.cnnumrows.value=numrows;}
     if(action=="update"){document.frm_add_announcement.cnnumrows.value=numrows;}
     if(action=="add")
     {
	  strinner="<legend>Sublink #"+numrows+" </legend><div class='row'> <div class='col-md-3'><div class='form-group'><input type='text' id='attachment_caption"+numrows+"' name='attachment_caption"+numrows+"' onkeyup='txtValidateName(this.id)' onkeypress='txtValidateName(this.id)' placeholder='Caption'  class='form-control'/></div> </div><div class='col-md-2'><div class='form-group'><input type='file' id='document"+numrows+"' name='document"+numrows+"' onchange='disableurl("+numrows+")' /><span class='label label-default'>Format:  PDF/DOC/DOCX</span></div></div><div class='col-md-1'><label for=''></label><br>&nbsp;&nbsp;<img src='https://cdn0.iconfinder.com/data/icons/very-basic-android-l-lollipop-icon-pack/24/close-128.png' title='Click to remove File'  id='clear_multiple"+numrows+"' height='20px'  style='cursor:pointer' onclick='remove("+numrows+")'/></div><div class='col-md-1'><label for=''></label><br>&nbsp;&nbsp;<b> OR &nbsp;&nbsp;</b></div><div class='col-md-2'><div class='form-group'><input type='text'  id='url"+numrows+"' name='url"+numrows+"' placeholder='Website URL' onkeyup='disablefile("+numrows+")'   class='form-control'/><span class='label label-default'>https://www.google.com</span></div></div><div class='col-md-3'><div class='form-group'><select class='form-control' id='target_type"+numrows+"' name='target_type"+numrows+"'  ></select></div></div></div>";
	  	   			//  strinner="<legend>Attachment "+numrows+" </legend><div class='row'> <div class='col-md-'><div class='form-group'><input type='text' id='attachment_caption"+numrows+"' name='attachment_caption"+numrows+"' placeholder='Attachment caption'  class='form-control'/></div> </div><div class='col-md-3'><div class='form-group'><input type='file' id='document"+numrows+"' name='document"+numrows+"' onclick='disableurl("+numrows+")' /></div></div><div class='col-md-1'><label for=''></label><br>&nbsp;&nbsp;<img src='https://cdn2.iconfinder.com/data/icons/basic-4/512/close-128.png' title='Click to remove File'  id='clear_multiple"+numrows+"' height='18px'  style='cursor:pointer' onclick='remove("+numrows+")'/></div><div class='col-md-4'><div class='form-group'><input type='text'  id='url"+numrows+"' name='url"+numrows+"' placeholder='Attachment URL' onkeyup='disablefile("+numrows+")'   class='form-control'/></div></div></div><div class='row'><div class='col-md-4'><div class='form-group'><label>From Date:</label><div class='input-group'><div class='input-group-addon'><i class='fa fa-calendar'></i></div><input type='text' class='form-control' id='from_date1'  name='from_date1'  data-inputmask='alias':'dd/mm/yyyy' data-mask></div></div></div></div>";
	}
	  	 if(action=="update")
	  	 {
	  	 	var numrows=numrows;
	  	  	strinner="<legend> Attachment "+numrows+" </legend><div class='row'> <div class='col-md-3'><div class='form-group'><input type='text' id='attachment_caption"+numrows+"' name='attachment_caption"+numrows+"' onkeyup='txtValidateName(this.id)' onkeypress='txtValidateName(this.id)' placeholder=' caption'  class='form-control'/></div> </div><div class='col-md-2'><div class='form-group'><input type='file' id='document"+numrows+"' name='document"+numrows+"' onchange='disableurl("+numrows+")' /><input type='hidden' id='olddocument"+numrows+"' name='olddocument"+numrows+"' value=''><span class='label label-default'>Format:  PDF/DOC/DOCX</span></div></div><div class='col-md-1'><label for=''></label><br>&nbsp;&nbsp;<img src='https://cdn0.iconfinder.com/data/icons/very-basic-android-l-lollipop-icon-pack/24/close-128.png' title='Click to remove File'  id='clear_multiple"+numrows+"' height='20px'  style='cursor:pointer' onclick='remove("+numrows+")'/></div><div class='col-md-3'><div class='form-group'><input type='text'  id='url"+numrows+"' name='url"+numrows+"' placeholder='Attachment URL' onkeyup='disablefile("+numrows+")'   class='form-control'/><span class='label label-default'>https://www.google.com</span></div></div><div class='col-md-3'><div class='form-group'><select class='form-control' id='target_type"+numrows+"' name='target_type"+numrows+"'  ></select></div></div></div>";

		}
    newdiv.innerHTML=strinner;
    ni.appendChild(newdiv);

    
  var presslength = document.getElementById('target_type1').options.length;
    
    for(var z=0; z<presslength; z++)
    {
        cmbdts = document.getElementById('target_type1').options[z];
       
        document.getElementById('target_type'+numrows).options[z] = new Option(cmbdts.text, cmbdts.value);
    }  
     
   
}

/*function changestatus_announcement(announcement_id,status) 
{
	var baseurl = $('#baseurl').val();
	var csrt_tkn = document.frm_search.csrf_test_name.value;
	//alert(csrt_tkn);
 	loadConfirmModal('Are you sure to continue');
 	$('#yesBtn').click(function(){
							$.ajax({
								url: baseurl + "announcement/changestatus_announcement",
								async: false,
								type:"POST",
								data:{'announcement_id':announcement_id,
								'status':status,
								'csrf_test_name': csrt_tkn,
								},
								datatype: 'html',
								success: function(status) {
									//alert(status);
									window.location.href=baseurl+"announcement/listing/";	
										}
									});
							 	});			
}*/

function changestatus_announcement(baseUrl,announcement_id,page,status)
{
	//alert(baseUrl+"announcement/changestatus_announcement/"+announcement_id+"/"+status);
	if(announcement_id!="")
	{
		if(status==0)
		{
			loadConfirmModal("Do you want to Inactivate this Announcement?");
		}
		if(status==1)
		{
			loadConfirmModal("Do you want to Activate this Announcement?");
		}
		
		
		$("#yesBtn").unbind().click(function()
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
						 window.location.href=baseUrl+'announcement/listing/'+page;
					}
								
				}
			}
			xmlhttp.open("GET",baseUrl+"announcement/changestatus_announcement/"+announcement_id+"/"+status,true);
			xmlhttp.send();
		});
	}
}  
function changestatus_announcement_detail(baseUrl,announcement_id,status)
{
	alert(baseUrl);
	if(announcement_id!="")
	{
		if(status==0)
		{
			loadConfirmModal("Do you want to Inactivate this Announcement?");
		}
		if(status==1)
		{
			loadConfirmModal("Do you want to Activate this Announcement?");
		}
		
		
		$("#yesBtn").unbind().click(function()
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
						window.location.href=baseUrl+'announcement/listing/';
					}
								
				}
			}
			xmlhttp.open("GET",baseUrl+"announcement/changestatus_announcement/"+announcement_id+"/"+status,true);
			xmlhttp.send();
		});
	}
} 

/*function changestatus_announcement_detail(announcement_id,status) 
 {
	var baseurl = $('#baseurl').val();
 	loadConfirmModal('Are you sure to continue');
 	$('#yesBtn').click(function(){			
								$.ajax({
										url: baseurl + "announcement/changestatus_announcement",
										async: false,
										type:"POST",
										data:{'announcement_id':announcement_id,
										'status':status,
										},
										datatype: 'html',
										success: function(statuss) 
										{
												if(status=='2')
												{
													window.location.href=baseurl+"announcement/listing/";
												}
												else{
													window.location.href=baseurl+"announcement/detail_view/"+announcement_id;
												}
										}
									});
 								});																		      
}*/
function search(form,baseurl)
{
	 form.action =baseurl+"announcement/listing/";
	 form.submit();
}
function listAll(form,baseurl)
{
	
	window.location.href=baseurl+"announcement/listing/";
}
function searchfrontend(form,baseurl,type)
{
	
	 form.action =baseurl+type+"/list_view/";
	 form.submit();
}
function listAllfrontend(form,baseurl,type)
{
	
	window.location.href=baseurl+type+"/list_view/";
}


function is_valid_url(url)

// {if( !url.match(/^(ht|f)tps?:\/\/[a-z0-9-\.]+\.[a-z]{2,4}\/?([^\s<>\#%"\,\{\}\\|\\\^\[\]`]+)?$/)) { return false; } else  {return true; }}
{if( !url.match(/^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/)) { return false; } else  {return true; }}

function FileExtension_Validate(txt)
{
	
	if( !txt.match(/\.(pdf)|(doc)|(PDF)|(DOC)|(docx)|(DOCX)$/)) { return false; } else  {return true; }
}
/*function deleteAnnouncementFile(baseUrl,announcement_id) 
 {
	//alert(baseUrl);
	 var csrt_tkn = document.frm_search.csrf_test_name.value;
 	loadConfirmModal('Are you sure to remove the file?');
 	$('#yesBtn').click(function(){			
								$.ajax({
										url: baseUrl + "announcement/deleteAnnouncementFile",
										async: false,
										type:"POST",
										data:{'announcement_id':announcement_id,
										'csrf_test_name': csrf_test_name
										//'status':status,
										},
										datatype: 'html',
										success: function() 
										{
														document.getElementById('span').innerHTML = "<span style='color:#B22222;' >Removed</span>";
														document.getElementById('oldcaptiondocument').value ="";
														document.getElementById('target_type').value ="";
														//$("#span").hide('fast');

										}
									});
 								});																		      
}*/
 function deleteAnnouncementFile(baseUrl,announcement_id)
{
	
	if(announcement_id!="")
	{
		
			loadConfirmModal("Do you want to delete  this Announcement file?");
		
		
		
		$("#yesBtn").unbind().click(function()
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
						alert(" Successfully Removed")
						window.location.href=baseUrl+'announcement/detail_edit/'+announcement_id;
					}
								
				}
			}
			xmlhttp.open("GET",baseUrl+"announcement/deleteAnnouncementFile/"+announcement_id,true);
			xmlhttp.send();
		});
	}
} 
function paginate(page,url)
{
	document.frm_search.action=url+page;
	document.getElementById('page').value=page;
	document.frm_search.submit();
}

function get_type(val)
{
	if(val)
	{
		document.getElementById('editor1').value="";
		document.getElementById('captionurl').value="";
		document.getElementById('target_type_file').value="";
		document.getElementById('captionfile').value="";
		document.getElementById('target_type_url').value="";
		if(val==1)
		{
			document.getElementById('desc_block').style.display="none";
			document.getElementById('url_block').style.display="none";
			document.getElementById('file_block').style.display="none";
		}
		if(val==2)
		{
			document.getElementById('desc_block').style.display="none";
			document.getElementById('url_block').style.display="none";
			document.getElementById('file_block').style.display="block";
		}
		if(val==3)
		{
			document.getElementById('desc_block').style.display="none";
			document.getElementById('url_block').style.display="block";
			document.getElementById('file_block').style.display="none";
		}
		if(val==4)
		{
			document.getElementById('desc_block').style.display="block";
			document.getElementById('url_block').style.display="none";
			document.getElementById('file_block').style.display="none";
		}
	}
}
function validateField(checkString,field)
{
	var iChars = "!#$%^&*+=[]\\\';/{}|\":<>?";
	for (var i = 0; i < checkString.length; i++) 
	{
	    if (iChars.indexOf(checkString.charAt(i)) != -1) 
	    {
	       // alert (id +" has special characters. \nThese are not allowed.\n Please remove them and try again.");
	       // document.getElementById(id).value="";
	       loadErrorModal(field +" has special characters. \nThese are not allowed.\n Please remove them and try again.",'acaption');
			document.getElementById('acaption').focus();
	        return false;
	    }
	    
	}	     
}


function validate(form,baseUrl,fun)
{
	//alert(baseUrl);
	var error=false;
	
	if(form.gtitle.value.trim()=='' && error==false)
	{
		
		error=true;
		loadErrorModal('Please provide a title','gtitle');
		//alert("Please enter the gallery title");
		document.getElementById('gtitle').focus();
	}
	if(document.frm_pgallery.evtrelated[0].checked == true && error==false)
	{
		if(form.event_id.value.trim()=='0' && error==false)
		{
			error=true;
			loadErrorModal('Please specify an event','event_id');
			document.getElementById('event_id').focus();
		}
	}
	if(fun=='add')
	{
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
				
				if( Days_count(dt,fmdate)>0)
				{
					error=true;
					loadErrorModal('From date should be on or after current date','fdate');					
					document.getElementById('fdate').focus();
					return false;
			  	}
			}
		}
		
		if(form.fdate.value.trim()!='' && form.tdate.value.trim()!='' && error==false)
		{
			
			if (form.fdate.value.trim()!='' && form.tdate.value.trim()!='' && error==false)
			{
				
				var from_date=form.fdate.value;
				var fromdate = from_date.split("/");	
				var fmdate= fromdate[0]+"-"+fromdate[1]+"-"+fromdate[2];
				var t_date=form.tdate.value;
				var todate = t_date.split("/");	
				var to_date= todate[0]+"-"+todate[1]+"-"+todate[2];
				
				if( Days_count(fmdate,to_date)>0)
				{
					error=true;
					loadErrorModal('To date should be on or after from date','tdate');					
					document.getElementById('tdate').focus();
					return false;
			  	}
			}
		}
		if(form.fdate.value.trim()=='' && form.tdate.value.trim()!='' && error==false)
		{
			
			if (form.fdate.value.trim()=='' && form.tdate.value.trim()!='' && error==false)
			{
				//alert(document.getElementById('tdate').value);
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
				var to_date=form.tdate.value;
				var todate = to_date.split("/");	
				var toddate= todate[0]+"-"+todate[1]+"-"+todate[2];
				//alert(fmdate);
				if(a<10) dt="0"+dt;
				
				if( Days_count(dt,toddate)>0)
				{
					error=true;
					loadErrorModal('To date should be on or after current date','tdate');					
					return false;
			  	}
			}
		}
	}
  	if(fun=='update')
	{
		
		if( form.fdate.value.trim()!='' && error==false)
		{
			
			if (form.fdate.value.trim()!=''  && error==false)
			{
				//alert(form.addate.value);
				var from_date=form.fdate.value;
				var fromdate = from_date.split("/");	
				var fmdate= fromdate[0]+"-"+fromdate[1]+"-"+fromdate[2];
				
				var ad_date=form.addate.value;
				var addate = ad_date.split("/");	
				var addate= addate[0]+"-"+addate[1]+"-"+addate[2];
				if( Days_count(addate,fmdate)>0)
				{
					error=true;
					loadErrorModal('From date should be on or after added on date','fdate');					
					document.getElementById('tdate').focus();
					return false;
			  	}
			}
		}
		if( (form.fdate.value.trim()!='' && form.tdate.value.trim()!='') && error==false)
		{
			
			if ((form.fdate.value.trim()!='' && form.tdate.value.trim()!='')  && error==false)
			{
				//alert(form.addate.value);
				var from_date=form.fdate.value;
				var fromdate = from_date.split("/");	
				var fmdate= fromdate[0]+"-"+fromdate[1]+"-"+fromdate[2];
				var t_date=form.tdate.value;
				var todate = t_date.split("/");	
				var to_date= todate[0]+"-"+todate[1]+"-"+todate[2];
				
				if( Days_count(fmdate,to_date)>0)
				{
					error=true;
					loadErrorModal('To date should be on or after added on date','tdate');					
					document.getElementById('tdate').focus();
					return false;
			  	}
			}
		}		
	}	
	if(fun=='add')
	{
		var cnt=document.getElementById('cnnumrows').value;
		var mlsetflag = false;
		for(var i=1; i<=cnt; i++)
		{
		  //alert("k");
			  if((document.getElementById('imgcaption'+i).value !="" || document.getElementById('document'+i).value !='' ) && error==false )
				{
					mlsetflag = true;					
					/*if( (document.getElementById('document'+i).value =='' ) && error==false)
					{
						error=true;
						loadErrorModal('Please enter the file ','document'+i);
						document.getElementById('document'+i).focus();	
					}*/
					if(document.getElementById('document'+i).value !="" && error==false)
					{
						var filereturn=FileExtension_Validate(document.getElementById('document'+i).value);
						if (filereturn ==false)
						   {
							error=true;
							loadErrorModal('Please select a file with jpeg,jpg,JPEG,JPG extension','document'+i);					
							document.getElementById('document'+i).focus();
							return false;
						   } 
					}
					if(document.getElementById('cimg').value =='' && error==false)
					{
						error=true;
						loadErrorModal('Please enter the cover image','cimg');
						document.getElementById('cimg').focus();	
					}
				
			  }
 		 }	
  }	
  if(form.file_name.value.trim()=='' && error==false)
	{
		error=true;
		loadErrorModal('Please enter the filename','file_name');
		document.getElementById('file_name').focus();
	}
	if(form.page_title.value.trim()=='' && error==false)
	{
		error=true;
		loadErrorModal('Please enter the page title','page_title');
		document.getElementById('page_title').focus();
	}
	if(form.meta_keywords.value.trim()=='' && error==false)
	{
		error=true;
		loadErrorModal('Please enter the meta keywords','meta_keywords');
		document.getElementById('meta_keywords').focus();
	}
	if(form.meta_descr.value.trim()=='' && error==false)
	{
		error=true;
		loadErrorModal('Please enter the meta description','meta_descr');
		document.getElementById('meta_descr').focus();
	}
	if(error == false)
	{
		if(fun=='add')
		{
			form.action=baseUrl+"picture_gallery/add/";
			loadConfirmModal('Are you sure to continue');	
			$('#yesBtn').click(function(){form.submit()});
		}
		if(fun=='update')
			
		{
		form.action=baseUrl+"picture_gallery/update/";
		loadConfirmModal('Are you sure to continue');	
		$('#yesBtn').click(function(){form.submit()});
		}
		
	}
}
function FileExtension_Validate(txt)
{if( !txt.match(/\.(jpg)|(jpeg)|(JPG)|(png)|(JPEG)|(PNG)|(GIF)|(gif)$/)) { return false; } else  {return true; }}
function validate_pic(form,baseUrl)
{
	
	var error=false;
	
	if(form.gallery_id.value.trim()=='0' && error==false)
	{
		error=true;
		loadErrorModal('Please enter the gallery','gallery_id');
		document.getElementById('gallery_id').focus();
	}
	/*if(document.getElementById('imgcaption1').value =="" && error==false )
	{
		error=true;
		loadErrorModal('Please enter the caption');
		document.getElementById('imgcaption1','imgcaption1').focus();
		return false;
	}*/
	
	if(document.getElementById('document1').value =='' && error==false)
	{
		error=true;
		loadErrorModal('Please enter the file','document1');
		document.getElementById('document1').focus();	
	}
	
	
		var cnt=document.getElementById('cnnumrows').value;
		var mlsetflag = false;
		for(var i=1; i<=cnt; i++)
		{
		  //alert("k");
			  if(( document.getElementById('document'+i).value !='' ) && error==false )
				{
					//alert(i);
					mlsetflag = true;
					//alert(mlsetflag);
					/*if(document.getElementById('imgcaption'+i).value =="" && error==false )
					{
						error=true;
						loadErrorModal('Please enter the caption','imgcaption'+i);
						document.getElementById('imgcaption'+i).focus();
						return false;
					}*/
					
					if( (document.getElementById('document'+i).value =='' ) && error==false)
					{
						error=true;
						loadErrorModal('Please enter the file ','document'+i);
						document.getElementById('document'+i).focus();	
					}
					if(document.getElementById('document'+i).value !="" && error==false)
					{
						var filereturn=FileExtension_Validate(document.getElementById('document'+i).value);
						if (filereturn ==false)
						   {
							error=true;
							loadErrorModal('Please select a file with jpeg,jpg,JPEG,JPG extension','document'+i);					
							document.getElementById('document'+i).focus();
							return false;
						   } 
					}
					if(document.getElementById('coverflag').value =='0'  && document.getElementById('cimg').value ==''  && error==false)
					{
						//alert(document.getElementById('coverflag').value);
						error=true;
						loadErrorModal('Please enter the cover image','cimg');
						document.getElementById('cimg').focus();	
					}
					
					
				
			  }
 		 }
	if(error == false)
	{
		form.action=baseUrl+"picture_gallery/picture_add/";
		loadConfirmModal('Are you sure to continue');	
		$('#yesBtn').click(function(){form.submit()});
				
		
	}
}

function add_more(baseurl)
{
	var numrows=parseInt(document.frm_pgallery.cnnumrows.value)+1;
	var strinner="";
    var ni = document.getElementById('content');      
    var newdiv = document.createElement('div');
    var divIdName = 'my'+numrows+'Div1';
    newdiv.setAttribute('id',divIdName);
    document.frm_pgallery.cnnumrows.value=numrows;
    //alert("asdAS");
     
  strinner="<div class='row'> <div class='col-md-4'><div class='form-group'><input type='text' id='imgcaption"+numrows+"' name='imgcaption"+numrows+"'  class='form-control' placeholder='Image Caption'/></div> </div><div class='col-md-4'><div class='form-group'><input type='file' id='document"+numrows+"' name='document"+numrows+"' onchange='loadImage("+numrows+")' accept='.jpg, .jepg' /><span class='label label-default'>Format:.jpg, .jepg, .JPG, .JEPG</span><img src='"+baseurl+"images/close3.png' title='Click to remove File'  id='clear_multiple"+numrows+"' height='20px'  style='cursor:pointer' onclick='remove("+numrows+")'/></div></div><div class='col-md-4'><div class='form-group'><input type='radio' id='coverimg' name='coverimg' value='y'  onclick='getrdvalue("+numrows+")'/>Yes</div> </div></div>";
 
   		
    newdiv.innerHTML=strinner;
    ni.appendChild(newdiv);
    
  } 
  
  function getrdvalue(vl)
  {
	 document.getElementById('cimg').value =  vl;
  }
  
  function add_more_pic(baseurl)
{
	var numrows=parseInt(document.frm_picture.cnnumrows.value)+1;
	var strinner="";
    var ni = document.getElementById('content');      
    var newdiv = document.createElement('div');
    var divIdName = 'my'+numrows+'Div1';
    newdiv.setAttribute('id',divIdName);
    document.frm_picture.cnnumrows.value=numrows;
    //alert("asdAS");
     
  strinner="<div class='row'> <div class='col-md-4'><div class='form-group'><input type='text' id='imgcaption"+numrows+"' name='imgcaption"+numrows+"'  class='form-control' placeholder='Image Caption'/></div> </div><div class='col-md-4'><div class='form-group'><input type='file' id='document"+numrows+"' name='document"+numrows+"' onchange='loadImage("+numrows+")'  /><span class='label label-default'>Format:.jpg, .jepg, .JPG, .JEPG</span><img src='"+baseurl+"images/close3.png' title='Click to remove File'  id='clear_multiple"+numrows+"' height='20px'  style='cursor:pointer' onclick='remove("+numrows+")'/></div></div><div class='col-md-4'><div class='form-group'><input type='radio' id='coverimg' name='coverimg' value='y'  onclick='getrdvalue("+numrows+")'/>Yes</div></div></div>";
 
   		
    newdiv.innerHTML=strinner;
    ni.appendChild(newdiv);
    
  } 
function search(form,baseurl)
{
	 form.action =baseurl+"picture_gallery/list_view/";
	 form.submit();
}
function listAll(form,adminpath)
{
	
	window.location.href=adminpath+"picture_gallery/list_view/";
}

function get_radio_value(rw, vl) 
{
	if(vl=='y')
	{
		document.getElementById('cimg').value = rw;
	}
    /*var inputs = document.getElementsByName("coverimg");
    for (var i = 0; i < inputs.length; i++) 
    {
      if (inputs[i].checked) 
      {
        return inputs[i].value;
      }
    }*/
 }
 function deletePgallery(baseUrl,pgallery_id,page)
{

	if(pgallery_id!="")
	{
		
		loadConfirmModal("Do you want to Delete this picture gallery");
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
						 window.location.href=baseUrl+'picture_gallery/list_view/'+page;
					}
								
				}
			}
			xmlhttp.open("GET",baseUrl+"picture_gallery/delete_pgallery/"+pgallery_id,true);
			xmlhttp.send();
		});
	}
} 
function StatusChangePgallery(baseUrl,pgallery_id,page,status)
{

	if(pgallery_id!="")
	{
		if(status==0)
		{
			loadConfirmModal("Do you want to Inactivate this Picture gallery?");
		}
		if(status==1)
		{
			loadConfirmModal("Do you want to Activate this Picture gallery?");
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
						 window.location.href=baseUrl+'picture_gallery/list_view/'+page;
					}
								
				}
			}
			xmlhttp.open("GET",baseUrl+"picture_gallery/change_status_pgallery/"+pgallery_id+"/"+status,true);
			xmlhttp.send();
		});
	}
}  
function setevent(value)
{
	if(value=='n')
	{
		if(document.getElementById('evt').style.display=='block') 
		{
	      document.getElementById('evt').style.display='none';
	    }
	    if(document.getElementById('evt').style.display=='none') 
		{
	      document.getElementById('evt').style.display='none';
	    }
	   
	}
	if(value=='y')
	{
		if(document.getElementById('evt').style.display=='none') 
		{
	      document.getElementById('evt').style.display='block';
	    }
	    if(document.getElementById('evt').style.display=='block') 
		{
	      document.getElementById('evt').style.display='block';
	    }
	   
	}
} 
function get_urlvalue() 
{
	
		document.getElementById('document1').value !=""
		
 }
 function deletePicture(baseUrl,pic_id,page)
{


	if(pic_id!="")
	{
		
		loadConfirmModal("Do you want to Delete this picture");
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
						document.getElementById('spid'+pic_id).innerHTML = "Removed";
						//document.getElementById('spid').innerHTML = Removed;
					}
								
				}
			}
			xmlhttp.open("GET",baseUrl+"picture_gallery/delete_picture/"+pic_id,true);
			xmlhttp.send();
		});
	}
}
function StatusChangepicture(bsurl,pic_id,page,status)
{

	if(pic_id!="")
	{
		if(status==0)
		{
			loadConfirmModal("Do you want to Inactivate this Picture?");
		}
		if(status==1)
		{
			loadConfirmModal("Do you want to Activate this Picture?");
		}
		
		
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
						if(status==0)
						{
							alert('Successfully changed as private');
						 document.getElementById('spprid'+pic_id).innerHTML ="<a class='btn-xs btn-warning' onclick=\"StatusChangepicture('"+bsurl+"',"+pic_id+","+page+","+1+")\">Public</a>";		
						}
						if(status==1)
						{
							alert('Successfully changed as public');
						  document.getElementById('spprid'+pic_id).innerHTML ="<a class='btn-xs btn-warning' onclick=\"StatusChangepicture('"+bsurl+"',"+pic_id+","+page+","+0+")\">Private</a>";		
						}
						
						// window.location.href=bsurl+'picture_gallery/list_view/'+page;
					}
								
				}
			}
			xmlhttp.open("GET",bsurl+"picture_gallery/change_status_picture/"+pic_id+"/"+status,true);
			xmlhttp.send();
		});
	}
}
function updatePicture(baseUrl,pic_id,page)
{

	if(pic_id!="")
	{
		
		var caption = encodeURI(document.getElementById('p_caption'+pic_id).value);
		if(caption!="")
		{
			var cap= caption;
		}
		else
		{
			var cap=pic_id;
		}
	    var coverimg = document.getElementById('cimg').value;
		 var pgallery_id = document.getElementById('galleryid').value;
	  
		loadConfirmModal("Do you want to update ");
		$("#yesBtn").unbind().click(function()
		{
			if (window.XMLHttpRequest)
			{
			  xmlhttpk=new XMLHttpRequest();
			}
			else
			{
			  xmlhttpk=new ActiveXObject("Microsoft.XMLHTTP");
			}
			xmlhttpk.onreadystatechange=function()
			{	
				if (xmlhttpk.readyState==4 && xmlhttpk.status==200)
				{
					var rtext = xmlhttpk.responseText;
					//alert(rtext);
					if(rtext=='1')
					{
						 
						 alert('Successfully updated');
						 
					}
								
				}
			}
			xmlhttpk.open("GET",baseUrl+"picture_gallery/update_caption/"+pic_id+"/"+cap+"/"+coverimg+"/"+pgallery_id,true);
			xmlhttpk.send();
			
		});
		
	}
}



  function getgalleryid(bsurl)
	{
		
		//alert("test");
		document.getElementById('coverflag').value = 0;
		document.getElementById('cvrimg').innerHTML ="<input type='hidden' name='coverflag' id='coverflag' value = '0' />";
		//alert(document.getElementById('gallery_id').value);
		if(document.getElementById('gallery_id').value!=0)
		{
			if(document.getElementById('gallery_id').value != "")
			{
				
				var galleryId = document.getElementById('gallery_id').value;
			}
			else
			{
				var galleryId = null;
			}
			//alert(bsurl+"picture_gallery/getCoverImage/"+galleryId);
			if (window.XMLHttpRequest)
					xmlhttp=new XMLHttpRequest();
			else
				xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
				
			xmlhttp.onreadystatechange=function() {
				//alert(xmlhttp.responseText);
				if (xmlhttp.readyState==4 && xmlhttp.status==200)
				{
					document.getElementById('cvrimg').innerHTML = xmlhttp.responseText;			
				}
			}
			xmlhttp.open("GET",bsurl+"picture_gallery/getCoverImage/"+galleryId,true);		
			xmlhttp.send();
		}
	}

function loadImage(vl) {
  // alert(num);

        var input, file, fr, img;
		
		//alert(document.getElementById('document'+vl).value);
        if (typeof window.FileReader !== 'function') {
            write("The file API isn't supported on this browser yet.");
            return;
        }

        input = document.getElementById('document'+vl);
        if (!input) {
            write("Um, couldn't find the imgfile element.");
        }
        else if (!input.files) {
            write("This browser doesn't seem to support the `files` property of file inputs.");
        }
        else if (!input.files[0]) {
            write("Please select a file before clicking 'Load'");
        }
        else {
            file = input.files[0];
            fr = new FileReader();
            fr.onload = createImage;
            fr.readAsDataURL(file);
        }

        function createImage() {
            img = document.createElement('img');
            img.onload = imageLoaded;
            img.style.display = 'none'; // If you don't want it showing
            img.src = fr.result;
            document.body.appendChild(img);
        }

        function imageLoaded() {
        	//alert("aa");
        	//if(img.width>400 || img.height>400)
        	if(img.width<720 || img.height<540)
        	{
        		alert('Check Image Dimension. Image should have 720 width and 540 height  ');
        		fimg=1;
        		document.getElementById('document'+vl).value = '';
        		      		
        		return false;
        		
        	}
        	else
        	{
        		return true;
        	}
        	
           // write(img.width + "x" + img.height);
            // This next bit removes the image, which is obviously optional -- perhaps you want
            // to do something with it!
            img.parentNode.removeChild(img);
            img = undefined;
        }

        function write(msg) {
            var p = document.createElement('p');
            p.innerHTML = msg;
            document.body.appendChild(p);
        }
    }

        
  




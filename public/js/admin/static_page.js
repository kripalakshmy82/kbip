
function validateStatic(form,baseUrl,fun)
{
	var error=false;
	if(form.heading.value.trim()=='' && error==false)
	{
		error=true;
		loadErrorModal('Please enter the heading','heading');
	
	}
	
	
	if(document.getElementById('baner_image').value !="" && error==false)
					{		
						var name=document.getElementById('baner_image').value;
						var ext =name.split('.')[name.split('.').length - 1];
							//var ext = name.split('.'); 
							//alert(ext);
						var filereturn=FileExtension_Validate(ext);
						if (filereturn ==false)
						   {
							error=true;
							loadErrorModal('Please enter a image with allowed extensions','baner_image');								
							document.getElementById('baner_image').focus();
							return false;
						   } 
					}
	
	if(form.file_name.value.trim()==0 && error==false)
	{
		error=true;
		loadErrorModal('Please enter the file name','file_name');
	}
	
	if(form.page_title.value.trim()==0 && error==false)
	{
		error=true;
		loadErrorModal('Please enter the page title','page_title');
	}
	
	if(form.meta_keywords.value.trim()=='' && error==false)
	{
		error=true;
		loadErrorModal('Please enter the meta keywords','meta_keywords');
	}
	if(form.meta_descr.value.trim()=='' && error==false)
	{
		error=true;
		loadErrorModal('Please enter the meta description','meta_descr');
	}
	
	
	
	if(error == false)
	{
		if(fun=='add')
		{
			form.action=baseUrl+"static_page/insert_page/";
			loadConfirmModal('Are you sure you want to add this static page');	
			$('#yesBtn').click(function(){form.submit()});
			
		}
		if(fun=='update')
		{
			form.action=baseUrl+"static_page/update_page/";
			loadConfirmModal('Are you sure you want to update this static page');	
			$('#yesBtn').click(function(){form.submit()});
			
			
		}
	}
}	

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
		//return true;
	//if( !txt.match(/\.(jpg)|(jpeg)|(JPG)|(png)|(JPEG)|(PNG)|(bmp)|(BMP)|(tif)|(TIF)|(GIF)|(gif)$/)) { return false; } else  {return true; }
	//alert(test);
	
}
function loadImage(h,w) {
  
        var input, file, fr, img;
        
        if (typeof window.FileReader !== 'function') {
            write("The file API isn't supported on this browser yet.");
            return;
        }

        input = document.getElementById('baner_image');
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
            if(img.width<w || img.height<h)
            
            {
            	loadErrorModal('Check Image Dimension. Image should have '+h+' height and '+w+' width','baner_image');
               // alert('Check Image Dimension. Image should have '+h+' height and '+w+' width');
                fimg=1;
               // document.getElementById('baner_image').value = '';
                              
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


function StatusChangeStatic(baseUrl,cl_id,page,status)
{

	if(cl_id!="")
	{
		if(status==0)
		{
			loadConfirmModal('Do you want to change this Static Page to Private?');
		}
		if(status==1)
		{
			loadConfirmModal('Do you want to change this Static Page to Public?');
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
						 window.location.href=baseUrl+'static_page/static_list_view/'+page;
					}
								
				}
			}
			xmlhttp.open("GET",baseUrl+"static_page/change_status_static/"+cl_id+"/"+status,true);
			xmlhttp.send();
		});
	}
}

function deleteStatic(baseUrl,cl_id,page)
{

	if(cl_id!="")
	{
		loadConfirmModal('Do you want to Delete this Static Page?');
		$('#yesBtn').click(function()
		{
		
			//alert(baseUrl+"static_page/delete_static/"+cl_id);
			
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
						 window.location.href=baseUrl+'static_page/static_list_view/'+page;
					}
								
				}
			}
			xmlhttp.open("GET",baseUrl+"static_page/delete_static/"+cl_id,true);
			xmlhttp.send();
		});
	}
}

function Delete_Photo(baseUrl,id,file)
	{
		loadConfirmModal('Do you want to Delete this Photo');
	$('#yesBtn').click(function()
		{
			window.location.href=baseUrl+'static_page/delete_photo/'+id+'/'+file;
		});
	}
	

function search(form,baseurl)
{
	var error=false;
	if(form.heading.value.trim()=='' && error==false)
	{
		error=true;
		loadErrorModal('Please enter  heading','heading');
		//alert("Please enter caption or heading");
		//document.getElementById('caption').focus();
	}
	if(error == false)
	{
	 form.action=baseurl+"static_page/static_list_view/";
	 form.submit();
	}
}
function listAll(form,baseurl)
{
	 
	  document.getElementById('heading').value='';
	 form.action =baseurl+"static_page/static_list_view/";
	 form.submit();
}

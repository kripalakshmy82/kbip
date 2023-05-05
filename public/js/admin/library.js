function paginate(page,url)
{
	document.frm_search.action=url+page;
	document.getElementById('page').value=page;
	document.frm_search.submit();
}

	/* Start Alert Message */
	
function loadErrorModal(txt,eleId)
{
	$('#error-modal').modal('show');
	$('#errorText').html(txt);
	$('#error-modal').on('hidden.bs.modal', function () {
	if(eleId!="") document.getElementById(eleId).focus();
	});
}

function loadSuccessModal(txt,eleId)
{
	$('#success-modal').modal('show');
	$('#successText').html(txt);
	$('#success-modal').on('hidden.bs.modal', function () {
	if(eleId!="") document.getElementById(eleId).focus();
	});
}

function loadConfirmModal(txt)
{
	$('#confirm-modal').modal('show');
	$('#confirmText').html(txt);
}
  /* End Alert Message*/
 function Days_count($EndDate1,$StartDate1)
{
	var stringSplitArray = $StartDate1.split("-");
	var StartDate1 = stringSplitArray[2]+"-"+stringSplitArray[1]+"-"+stringSplitArray[0];//date formatted to "y-mm-dd"
	var stringSplitArray = $EndDate1.split("-");
	var EndDate1 = stringSplitArray[2]+"-"+stringSplitArray[1]+"-"+stringSplitArray[0];//date formatted to "y-mm-dd"
	var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
	var secondDate  = new Date(StartDate1);
	var firstDate  = new Date(EndDate1);
	var diffDays = ((firstDate.getTime() - secondDate.getTime())/(oneDay));
	return diffDays;
}
function checkDate(input_date) 
{
	var EnteredDate = input_date; //for javascript
	//var EnteredDate = $("#txtdate").val(); // For JQuery
	var date = EnteredDate.substring(0, 2);
	var month = EnteredDate.substring(3, 5);
	var year = EnteredDate.substring(6, 10);
	
	var myDate = new Date(year, month - 1, date);
	
	var today = new Date();
	
	if (myDate > today) {
	    return false;
	}
	else {
	    return true;
	}
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
function limitText(limitField, limitNum,dname) 
{
    if (limitField.value.length > limitNum) {
        limitField.value = limitField.value.substring(0, limitNum);		
    }
	document.getElementById(dname).innerHTML=limitNum-limitField.value.length;
}
function txtValidateName(txt) 
{ 
	txt = document.getElementById(txt);
	txt.value = txt.value.replace(/[^,-: 0-9a-zA-Z.\n]+/g, '');
}
function txtValidateFileName(txt) 
{ 
	txt = document.getElementById(txt);
	txt.value = txt.value.replace(/[^,0-9a-zA-Z.\-\ \n\r]+/g, '');
}
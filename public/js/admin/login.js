function frmvalidation(bsurl)
{
	alert(bsurl);
	alert("dd");
	if(document.frm_login.username.value.trim() == "")
	{
		alert("Please specify the username");
		document.frm_login.username.focus();
		return false;
	}
	if(document.frm_login.password.value == "")
	{
		alert("Please specify the password");
		document.frm_login.password.focus();
		return false;
	}
	document.frm_login.action=bsurl+"login";
	document.frm_login.submit();
}

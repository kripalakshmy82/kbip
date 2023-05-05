function validateform(form, baseUrl, fun, format, file_format) {
    var error = false;
    if (document.getElementById('ptype').value.trim() == '' && error == false) {
        loadErrorModal('Please select profile type ', 'ptype');
        error = true;
    }
    if (document.getElementById('fname').value.trim() == '' && error == false) {
        loadErrorModal('Please enter your first name', 'fname');
        error = true;
    }
    if (document.getElementById('lname').value.trim() == '' && error == false) {
        loadErrorModal('Please enter your last name', 'lname');
        error = true;
    }
    if (document.getElementById('designation1').value.trim() == '' && error == false) {
        loadErrorModal('Please enter your designation', 'designation1');
        error = true;
    }
    if (form.email.value.trim() != '' && error == false) {
        var email_id = document.getElementById('email_id');
        var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (!filter.test(email.value)) {
            loadErrorModal('Please provide a valid email address', 'email');
            return false;
        }
    }
    if (form.phone.value.trim() != '' && error == false) {
        var phone = document.getElementById('phone');
        var filter = /(^(?!0+$)\d{8,}$)/;
        //var filter = /(^[0-9]+[-]*[0-9]+$)/;
        if (!filter.test(phone.value)) {
            loadErrorModal('Please provide a valid phone number', 'phone');
            return false;
        }
    }
    if (form.fax.value.trim() != '' && error == false) {
        var fax = document.getElementById('fax');
        // var filter = /(^[0-9]+[-]*[0-9]+$)/;
        var filter = /(^(?!0+$)\d{8,}$)/;
        if (!filter.test(fax.value)) {
            loadErrorModal('Please provide a valid fax number', 'fax');
            return false;
        }
    }
    if (document.getElementById('profile_images').value != "" && error == false) {
        var name = document.getElementById('profile_images').value;
        var ext = name.split('.')[name.split('.').length - 1];
        var filereturn = FileExtension_Validate(ext);
        if (filereturn == false) {
            error = true;
            loadErrorModal('Please enter a image with allowed extensions', 'profile_images');
            document.getElementById('profile_images').focus();
            return false;
        }
    }
    if (document.getElementById('Profile_Related_File').value != "" && error == false) {
        var urlcheck = FileExtension_Validate1(document.getElementById('Profile_Related_File').value);
        if (urlcheck == false) {
            loadErrorModal('Please choose a file with allowed extensions', 'Profile_Related_File');
            document.getElementById('Profile_Related_File').focus();
            error = true;
            return false;
        }
    }
    if (document.getElementById('profile_link').value != "" && error == false) {
        var urlcheck = is_valid_url(document.getElementById('profile_link').value);
        if (urlcheck == false) {
            loadErrorModal('Please enter a valid URL', 'profile_link');
            document.getElementById('profile_link').focus();
            error = true;
            return false;
        }
    }
    if (!error) {
        if (fun == 'add') {
            form.action = baseUrl + "profile/add/";
            loadConfirmModal('Are you sure to continue');
            $('#yesBtn').click(function() { form.submit() });
        }
        if (fun == 'update') {
            form.action = baseUrl + "profile/update/";
            loadConfirmModal('Are you sure to continue');
            $('#yesBtn').click(function() { form.submit() });
        }
    }
}

function closeDetail(form, baseUrl, fun) {
    if (fun == 'list') {
        form.action = baseUrl + "profile/list_view/";
        loadConfirmModal('Are you sure to close this page?');
        $('#yesBtn').click(function() { form.submit() });
    }
}

function status(form, baseUrl, id, var1, fun) {
    if (fun == 'public') {
        form.action = baseUrl + "profile/active/" + id + "/" + var1;
        loadConfirmModal('Are you sure to change this status?');
        $('#yesBtn').click(function() { form.submit() });
    }
    if (fun == 'private') {
        form.action = baseUrl + "profile/deactive/" + id + "/" + var1;
        loadConfirmModal('Are you sure to change this status?');
        $('#yesBtn').click(function() { form.submit() });
    }
    if (fun == 'remove') {
        form.action = baseUrl + "profile/remove/" + id;
        loadConfirmModal('Are you sure to remove this page?');
        $('#yesBtn').click(function() { form.submit() });
    }
}

function DeleteDateRange() {
    document.getElementById('searchdtrange').value = '';
}

function is_valid_url(url) {
    if (!url.match(/^(ht|f)tps?:\/\/[a-z0-9-\.]+\.[a-z]{2,4}\/?([^\s<>\#%"\,\{\}\\|\\\^\[\]`]+)?$/)) {
        return false;
    } else {
        return true;
    }
}

function FileExtension_Validate1(txt) {
    if (!txt.match(/\.(jpg)|(jpeg)|(JPG)|(png)|(JPEG)|(PNG)|(PDF)|(pdf)$/)) {
        return false;
    } else {
        return true;
    }
}

function FileExtension_Validate(txt) {
    var extension = document.getElementById('extension').value;
    var piece = extension.split(',');
    var split = extension.split(',').length
    var flag = 0;
    for (var i = 0; i < split; i++) {
        var test = piece[i];
        if (txt != test) { flag++; }
    }
    if (flag == split) {
        return false;
    } else {
        return true;
    }
}

function search_list(form, baseurl) {
    form.action = baseurl + "profile/list_view/";
    form.submit();
}
function txtValidatePhone(txt) 
{ 
	txt = document.getElementById(txt);
	txt.value = txt.value.replace(/[^+\-, 0-9.\n\r]+/g, '');
}
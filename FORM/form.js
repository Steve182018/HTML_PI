function validation() {
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var email = document.getElementById('email').value;
    var pw = document.getElementById('pw').value;
    var dob = document.getElementById('dob').value;
    var tob = document.getElementById('time').value;
    var cnum = document.getElementById('cnum').value;
    // var gen = document.getElementById('fname').value;
    var add = document.getElementById('add').value;
    var city = document.getElementById('city').value;
    var hobby1 = document.getElementById('cricket');
    var hobby2 = document.getElementById('football');
    var hobby3 = document.getElementById('basketball');
    var car = document.getElementById('car').value;
    var file = document.getElementById('file').value;

    var checkedhobbies = [];
    var cb = document.getElementsByName('hobby');

    cb.forEach(function(checkbox){
        if(checkbox.checked){
            checkedhobbies.push(checkbox.value);

        }
    });

    alert(checkedhobbies.join(', '));
    // if(hobby1.checked == true){
    //     var cri = document.getElementById('cricket').value;
    //     alert(cri);
    // }else if(hobby2.checked == true){
    //     var foo = document.getElementById('football').value;
    //     alert(foo);
    // }else if(hobby3.checked == true){
    //     var bas = document.getElementById('basketball').value;
    //     alert(bas);
    // }else{
    //     alert("Please Select Hobby")
    // }

    // var checkbox = document.getElementsByName("hobby").value;
    // var result= "";

    // for(var i =0; i< checkbox.length; i++){
    //     if(checkbox[i].checked){
    //         alert(result += checkbox.value )
    //     }
    // }

    var m = document.getElementById("male");
    var f = document.getElementById("female");

    var fnamech = /^[a-zA-Z]*$/;
    var emailch = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})$/;
    var pwch = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
    var cnoch = /^[6789][0-9]{9}$/;

    if (fname == "" || lname == "" || email == "" || pw == "" || cnum == "" || add == "" || file == "") {
        document.getElementById("AllErr").innerHTML = "Please Fill All Fileds!!!"
        
    }else{

    }

    if(fnamech.test(fname)){
        document.getElementById("fErr").innerHTML = " ";
    }else{
        document.getElementById("fErr").innerHTML = "Please Enter Correct First Name!!!"
        return false;
    }

    if(fnamech.test(lname)){
        document.getElementById("lErr").innerHTML = " ";
    }else{
        document.getElementById("lErr").innerHTML = "Please Enter Correct Last Name!!!"
        return false;
    }

    if(emailch.test(email)){
        document.getElementById("eErr").innerHTML = " ";
    }else{
        document.getElementById("eErr").innerHTML = "Please Enter Correct Email!!!"
        return false;
    }

    if(pwch.test(pw)){
        document.getElementById("pwErr").innerHTML = " ";
    }else{
        document.getElementById("pwErr").innerHTML = "Please Enter Correct Password!!!"
        return false;
    }

    if(cnoch.test(cnum)){
        document.getElementById("cnErr").innerHTML = " ";
    }else{
        document.getElementById("cnErr").innerHTML = "Please Enter Correct Contact Number!!!"
        return false;
    }

    if (!m.checked && !f.checked) {
        alert("select your gender");
        return false;
    }
    else {
    }
















    // var fErr = lErr = eErr = pwErr = cnErr = true;

    // if (fname == "" || lname == "" || email == "" || pw == "" || cnum == "" || add == "" || file == "") {
    //     alert("Please Enter All Fields!!!");
    //     return false;
    // }else{
    //         function printError(elemId, hintMsg){
    //         document.getElementById(elemId).innerHTML = hintMsg;
    //     }

    //     if(fname == ""){
    //         printError("fErr", "Please Enter First Name!!!");
    //     }else{
    //         if (fnamech.test(fname)) {
    //         }
    //         else {
    //             printError("fErr", "Please Enter Correct First Name!!!");
    //             fname.value=''
    //             return false;
    //         }
    //     }

    //     if(lname == ""){
    //         printError("lErr", "Please Enter Last Name!!!");
    //     }else{
    //         if (fnamech.test(lname)) {
    //         }
    //         else {
    //             printError("lErr", "Please Enter Correct Last Name !!!");
    //             return false;
    //         }
    //     }

    //     if(email == ""){
    //         printError("eErr", "Please Enter Email!!!");
    //     }else{
    //         if (emailch.test(email)) {
    //         }
    //         else {
    //             printError("eErr", "Please Enter Correct Email!!!");
    //             return false;
    //         }
    //     }

    //     if(pw == ""){
    //         printError("pwErr", "Please Enter Password!!!");
    //     }else{
    //         if (pwch.test(pw)) {
    //         }
    //         else {
    //             printError("pwErr", "Please Enter Correct Password!!!");
    //             return false;
    //         }
    //     }

    //     if(cnum == ""){
    //         printError("cnErr", "Please Enter Contact Number!!!");
    //     }else{
    //         if (cnoch.test(cnum)) {
    //         }
    //         else {
    //             printError("cnErr", "Please Enter Correct Contact Number!!!");
    //             return false;
    //         }
    //     }

        
    
    // }

    

}

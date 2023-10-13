document.getElementById("formId").addEventListener("submit",

    function validation(e) {
        e.preventDefault()
        var fname = document.getElementById('fname').value;
        var lname = document.getElementById('lname').value;
        // var emailid = document.getElementById('email').value;
        var pw = document.getElementById('pw').value;
        var cnum = document.getElementById('cnum').value;
        var add = document.getElementById('add').value;
        var city = document.getElementById('city').value;
        var h1 = document.getElementById('cricket');
        var h2 = document.getElementById('football');
        var h3 = document.getElementById('basketball');
        var car = document.getElementById('car').value;
        var file = document.getElementById('file').value;

        var checkedhobbies = [];
        var cb = document.getElementsByName('hobby');

        cb.forEach(function (checkbox) {
            if (checkbox.checked) {
                checkedhobbies.push(checkbox.value);
            }
        });

        var m = document.getElementById("male");
        var f = document.getElementById("female");

        var fnamech = /^[a-zA-Z]*$/;
        var emailch = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})$/;
        var pwch = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
        var cnoch = /^[6789][0-9]{9}$/;
        var allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;


        if (fname == "" || lname == "" || pw == "" || cnum == "" || add == "" || file == "" || add == "") {
            // document.getElementById("AllErr").innerHTML = "Please Fill All Fileds!!!"
            document.getElementById("fErr").innerHTML = "Please Enter Only Alphabets!!!"
            document.getElementById("lErr").innerHTML = "Please Enter Only Alphabets!!!"
            // document.getElementById("eErr").innerHTML = "Please Enter Correct Email!!!"
            document.getElementById("pwErr").innerHTML = "Password must contain minimum 8 charachters one captital letter, one small letter & one special charachter!!!"
            document.getElementById("cnErr").innerHTML = "Contact Number contain 10 digits!!!"
            document.getElementById("addErr").innerHTML = "Please Enter Address!!!"
            document.getElementById("genErr").innerHTML = "Please Select Your Gender"
            document.getElementById("fileErr").innerHTML = "Please Select file contains extension as jpg,jpeg,png,gif!!!!"
            return false;
        } else {
            if (fnamech.test(fname)) {
                document.getElementById("fErr").innerHTML = " ";
                document.getElementById("dfname").innerHTML = fname;
            } else {
                document.getElementById("fErr").innerHTML = "Please Enter Only Alphabets!!!"
                return false;
            }

            if (fnamech.test(lname)) {
                document.getElementById("lErr").innerHTML = " ";
                document.getElementById("dlname").innerHTML = lname;
            } else {
                document.getElementById("lErr").innerHTML = "Please Enter Only Alphabets!!!"
                return false;
            }

            if (add != "") {
                document.getElementById("addErr").innerHTML = " ";
                document.getElementById("dadd").innerHTML = add;
            } else {
                document.getElementById("addErr").innerHTML = "Please Enter Address!!!"
                return false;
            }

            document.getElementById("dcar").innerHTML = car;
            document.getElementById("dcity").innerHTML = city;

            // if (emailch.test(emailid)) {
            //     document.getElementById("eErr").innerHTML = " ";
            //     document.getElementById("demail").innerHTML = emailid;
            // } else {
            //     document.getElementById("eErr").innerHTML = "Please Enter Correct Email!!!"
            //     return false;
            // }

            if (pwch.test(pw)) {
                document.getElementById("pwErr").innerHTML = " ";
                document.getElementById("dpw").innerHTML = pw;
            } else {
                document.getElementById("pwErr").innerHTML = "Password must contain minimum 8 charachters one captital letter, one small letter & one special charachter!!!"
                return false;
            }

            if(!allowedExtensions.exec(file)){
                document.getElementById("fileErr").innerHTML = "Please Select file contains extension as jpg,jpeg,png,gif!!!!"
                return false;
            }else{
                document.getElementById("fileErr").innerHTML = ""
                document.getElementById("dres").innerHTML = file
            }

            if (cnoch.test(cnum)) {
                document.getElementById("cnErr").innerHTML = " ";
                document.getElementById("dcn").innerHTML = cnum;
            } else {
                document.getElementById("cnErr").innerHTML = "Contact Number contain 10 digits!!!"
                return false;
            }

            if (!m.checked && !f.checked) {
                document.getElementById("genErr").innerHTML = "Please Select Your Gender!!!!"
                return false;
            }
            else {
                document.getElementById("genErr").innerHTML = " "
                if (m.checked) {
                    document.getElementById("dgen").innerHTML = m.value
                } else {
                    document.getElementById("dgen").innerHTML = f.value
                }
            }

            if (!h1.checked && !h2.checked && !h3.checked) {
                document.getElementById("hoErr").innerHTML = "Please Select Any Hobby!!!"
                return false
            } else {
                document.getElementById("hoErr").innerHTML = " "
                if (h1.checked) {
                    document.getElementById("dhobby").innerHTML = h1.value
                }
                else if (h2.checked) {
                    document.getElementById("dhobby").innerHTML = h2.value
                } else if (h3.checked) {
                    document.getElementById("dhobby").innerHTML = h3.value
                }
                // double check hobby
                if (h1.checked && h2.checked) {
                    document.getElementById("dhobby").innerHTML = [h1.value, h2.value]
                } else if (h1.checked && h3.checked) {
                    document.getElementById("dhobby").innerHTML = [h1.value, h3.value]
                } else if (h2.checked && h3.checked) {
                    document.getElementById("dhobby").innerHTML = [h2.value, h3.value]
                }
                // all check hobby
                if (h1.checked && h2.checked && h3.checked) {
                    document.getElementById("dhobby").innerHTML = [h1.value, h2.value, h3.value]
                }
            }

        }

    }
)

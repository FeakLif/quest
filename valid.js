function valid(form) {
    var fail = false;
    var login = form.login.value;
    var passw = form.passw.value;
    if (login == "" || login == " ")
        fail = "Insert The Login Name!";
    else if (passw == "")
        fail = "Insert The Passord!";
    if(fail) alert(fail);
}
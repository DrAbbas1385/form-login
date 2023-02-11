"use scrict";


function check() {
    const text_login = document.getElementById("user").value;
    const password_login = document.getElementById("pass").value;
    if (text_login != "Amir" || password_login != "0000") {
        window.alert("یکیشون اشتباهه");
    }
    else {
        location.replace("../factor/1index.html")
    }
}
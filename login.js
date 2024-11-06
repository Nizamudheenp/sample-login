document.getElementById("loginForm").addEventListener("submit", function(e){
    e.preventDefault();

    username = document.getElementById("username").value;
    password = document.getElementById("password").value;

    let user = localStorage.getItem(username);

    if(user){
        let parsedUser = JSON.parse(user);
        if(parsedUser.password === password){
            localStorage.setItem("user", JSON.stringify(parsedUser));
            window.location.href = "index.html";
        }else{
            alert("incorrect password");
        }
    }else{
        alert("user not found");
    }

})
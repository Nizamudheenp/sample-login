document.getElementById("register").addEventListener("submit", function(e){
    e.preventDefault();

    let name = document.getElementById("name").value;
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let conformPassword = document.getElementById("conform-password").value;

    if(password !==conformPassword){
        alert("password don't match")
        return;
    }

    const user ={
        name : name,
        username :username,
        password :password
    }

    localStorage.setItem(username,JSON.stringify(user));
    alert("registration successful!  please login..")
    window.location.href= "login.html";
})
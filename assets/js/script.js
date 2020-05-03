
var isAdmin = 0
document.getElementById("loginButton").addEventListener("click", getIsAdmin);

console.log(isAdmin);

function getIsAdmin()
{
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
    if (user == "admin" && pass == 'admin')
        isAdmin = 1;
    console.log(isAdmin);
}
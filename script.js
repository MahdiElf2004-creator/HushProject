function checkPassword(){

let pass=document.getElementById("password").value;

if(pass==="hush2004"){

document.getElementById("loginBox").style.display="none";

document.getElementById("content").style.display="block";

}else{

document.getElementById("error").innerHTML="رمز اشتباه است";

}

}

let formfeild   = document.querySelectorAll("form input");

const [userName,userEmail,userPassword] = formfeild;
console.log(userName,userEmail,userPassword);

let userArryData = [];

const login =()=>{
    event.preventDefault();
    if(userName.value !=="" && userEmail.value !=="" && userPassword.value !==""){

let obj ={

    loginEmail : userEmail.value,
    loginPassword : userPassword.value,
    user : userName.value,
    

}

localStorage.setItem("userData", JSON.stringify(obj));
window.location.href = "dashboard.html"

userArryData.push(obj); 
console.log(userArryData);

        console.log(userName.value,userEmail.value,userPassword.value);
    }

    else{ 
    alert("plese Enter your data");
}

}


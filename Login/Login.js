function loginUsers() {
    var loginEmail = userEmail.value;
    var loginPassWord = userPassWord.value;
    userDetails = JSON.parse(localStorage.getItem("allItems"))
    d = userDetails[0].email;
    var emm = userDetails.find((emmanuel) => emmanuel.email == loginEmail && emmanuel.passWord == loginPassWord)
    accountUsers = [];

    if (loginEmail == "" || loginPassWord == "") {
        userEmail.style.borderColor="red"
        userPassWord.style.borderColor="red"
        loginBtn.style.borderColor = ""
        loginBtn.disabled=false;
        loginBtn.style.backgroundColor =""
        loginBtn.style.color=""
        document.getElementById("display").innerHTML = ("Dear Valued Customer, Kindly Fill-in Login Details!...")
    } else {
        if (emm) {
            accountUsers.push(emm);
            Us = JSON.stringify(accountUsers);
            localStorage.setItem("richard", Us);
            userEmail.value = " ";
            userPassWord.value = " ";
            console.log("Correct Logins");
            window.location.href = ("../Dashboard/Dashboard.html");
        } else if (emm == false) {
            console.log("Incorrect Logins");
            document.getElementById("display").innerHTML = ("Bad Request::Wrong details!.")
        } else {
            console.log("Incorrect Logins");
            document.getElementById("display").innerHTML = ("Bad Request:: Wrong details!(PassWord or Email).")
        }
    }
}
// document.getElementById("userEmail").addEventListener("click",()=>{
//     userEmail.style.borderColor = ""
//     userPassWord.style.borderColor = ""
//     loginBtn.style.borderColor = ""
//     loginBtn.disabled=false;
//     loginBtn.style.backgroundColor = ""
//     loginBtn.style.color = ""
//     document.getElementById("display").innerHTML = ""
// });
// document.getElementById("userPassWord").addEventListener("click",()=>{
//     userEmail.style.borderColor = ""
//     userPassWord.style.borderColor = ""
//     loginBtn.style.borderColor = ""
//     loginBtn.disabled=false;
//     loginBtn.style.backgroundColor = ""
//     loginBtn.style.color = ""
//     document.getElementById("display").innerHTML = ""
// });

function showPassWord() {
    var xW = document.getElementById("userPassWord");
    if (xW.type === "password") {
        xW.type = "text"
    } else {
        xW.type = "password"
    }

}
function goToAdmin(){
    let passCode = prompt("Input Admin Passcode!!")
    if(passCode == "2a3s4d5f6g7h8j9k0l"){
        document.getElementById("display").innerHTML = "Access Granted!"
        location.href="../adminpage/admin.html"
    }else if (passCode !== "2a3s4d5f6g7h8j9k0l") {
        document.getElementById("display").innerHTML = "Access Not Granted!, Incorrect pasword."
    }
}
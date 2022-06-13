function procedure2() {
    alert("Kindly Sign-Up, If You Are Not Registered, Or Have An Account Yet.")
}

function showPassWord() {
    var xW = document.getElementById("pWd");
    if (xW.type === "password") {
        xW.type = "text"
    } else {
        xW.type = "password"
    }
}


var customers = {};
var general = [];

document.getElementById("fName").addEventListener("click",()=>{
    fName.style.borderColor =""
    e.style.borderColor =""
    pN.style.borderColor =""
    pWd.style.borderColor =""
    registerBtn.disabled=false;
    registerBtn.style.backgroundColor =""
    registerBtn.style.color=""
    registerBtn.style.borderColor =""
    document.getElementById("disp").innerHTML = "";

})
document.getElementById("e").addEventListener("click",()=>{
    fName.style.borderColor =""
    e.style.borderColor =""
    pN.style.borderColor =""
    pWd.style.borderColor =""
    registerBtn.disabled=false;
    registerBtn.style.backgroundColor =""
    registerBtn.style.color=""
    registerBtn.style.borderColor =""
    document.getElementById("disp").innerHTML = "";

})
document.getElementById("pN").addEventListener("click",()=>{
    fName.style.borderColor =""
    e.style.borderColor =""
    pN.style.borderColor =""
    pWd.style.borderColor =""
    registerBtn.disabled=false;
    registerBtn.style.backgroundColor =""
    registerBtn.style.color=""
    registerBtn.style.borderColor =""
    document.getElementById("disp").innerHTML = "";

})
document.getElementById("pWd").addEventListener("click",()=>{
    fName.style.borderColor =""
    e.style.borderColor =""
    pN.style.borderColor =""
    pWd.style.borderColor =""
    registerBtn.disabled=false;
    registerBtn.style.backgroundColor =""
    registerBtn.style.color=""
    registerBtn.style.borderColor =""
    document.getElementById("disp").innerHTML = "";

})
function registerUsers() {
    customers = {
        fullname: fName.value.toUpperCase(),
        email: e.value.toLowerCase(),
        phoneNumber: (pN.value),
        passWord: (pWd.value),
        acctNumber: acc.value,
        userBalance: 5000,
        transactionH: [],
        date:new Date().toLocaleDateString(),
        time: new Date().toLocaleTimeString()

    }
    
    if (customers.fullname == "" || customers.email == "" || customers.phoneNumber == "" || customers.passWord == "") {
        document.getElementById("disp").innerHTML = ("Kindly Fill Out The Required Fields!.");
        fName.style.borderColor ="red"
        e.style.borderColor ="red"
        pN.style.borderColor ="red"
        pWd.style.borderColor ="red"
        registerBtn.disabled=true;
        registerBtn.style.backgroundColor ="red"
        registerBtn.style.color="white"
        registerBtn.style.borderColor ="white"

    } else if (pWd.value.length <= 7) {
        document.getElementById("disp").innerHTML = ("Password Must Include Atleast 8 Charactrers!")
        pWd.style.borderColor ="red"
        registerBtn.disabled=true;
        registerBtn.style.backgroundColor ="red"
        registerBtn.style.color="white"
        registerBtn.style.borderColor ="white"

    } else if (pN.value.length != 11) {
        document.getElementById("disp").innerHTML = ("Phone Number must 11 numbers @length!.")
        pN.style.borderColor ="red"
        registerBtn.disabled=true;
    } 
    else{
        var great = JSON.parse(localStorage.getItem("allItems"));
        if (great) {

            var sameEmail = great.find(thre => (thre.email == e.value));

            if (sameEmail) {
                document.getElementById("disp").innerHTML = "Email Has Been Registered By A User."
                e.style.borderColor ="red"

                
            } else {
                if (localStorage.allItems != null) {
                    general = JSON.parse(localStorage.getItem("allItems"))
                    console.log("Users Available");
                }
                console.log(customers);
                general.push(customers);
                sgeneral = JSON.stringify(general);
                localStorage.setItem("allItems", sgeneral)
                console.log(general);
                document.getElementById("disp").innerHTML = ""
                alert("Successfully Registered" + " " + "Mr/Mrs " + " " + customers.fullname + " " + "Kindly Proceed To Login Page");
                fName.value = " ";
                e.value = " ";
                pN.value = " ";
                pWd.value = " ";
                window.location.href = ("../Login/Login.html");
            }
        } else {
            if (localStorage.allItems != null) {
                general = JSON.parse(localStorage.getItem("allItems"))
                console.log("Users Available");
            }
            console.log(customers);
            general.push(customers);
            sgeneral = JSON.stringify(general);
            localStorage.setItem("allItems", sgeneral)
            console.log(general);
            document.getElementById("disp").innerHTML = ""
            alert("Successfully Registered" + " " + "Mr/Mrs " + " " + customers.fullname + " " + "Kindly Proceed To Login Page");
            fName.value = " ";
            e.value = " ";
            pN.value = " ";
            pWd.value = " ";
            window.location.href = ("../Login/Login.html");

        }
    }

}
function goToAdmin(){
    let passCode = prompt("Input Admin Passcode!!")
    if(passCode == "2a3s4d5f6g7h8j9k0l"){
        document.getElementById("disp").innerHTML = "Access Granted!"
        location.href="../adminpage/admin.html"
    }else if (passCode !== "2a3s4d5f6g7h8j9k0l") {
        document.getElementById("disp").innerHTML = "Access Not Granted!, Incorrect pasword."
    }
}
function logUserOut() {
    if (confirm("Warning:: You are going to be logged out!") == true) {
        window.location.href = ("../Login/Login.html");
    } else {

    }

}

function notifyUser() {
    if (confirm("Get Notified On Recent Account Activities?.") == true) {
        window.location.href = ("../Dashboard/accountHistory.html");
    } else {

    }
}


function showDashBoard() {
    document.getElementById('userFullName').innerText = us[0].fullname.toUpperCase();
    document.getElementById("userBal").innerHTML = ("****")
    document.getElementById('accNumberDisp').innerText = ("**********");
    document.getElementById('userAccountNumber').innerText = ("**********");
    dispContent.style.display = "block";
    border1.style.display = "block";
    bDa.style.backgroundColor = "orangered"
}

var us = JSON.parse(localStorage.getItem('richard'));
var pWa = document.getElementById("userBal")

function showBal() {
  
    if (pWa.type == "password") {
        pWa.type = "text"
        pWa.value = us[0].userBalance;
        document.getElementById('accNumberDisp').innerText = us[0].acctNumber;
        document.getElementById('userAccountNumber').innerText = us[0].acctNumber;
    } else {
        pWa.type = "password"
        document.getElementById('accNumberDisp').innerText = ("**********");
        document.getElementById('userAccountNumber').innerText = ("**********");
    }
  
}
bB = document.getElementById("dispContent");
gG = document.getElementById("textDeco");
function showContentTransfer() {
    dispContent.style.display = "block";
    dispContentAcc.style.display = "none";
    dispContentLs.style.display = "none"
    border1.style.display = "block"
    border2.style.display = "none"
    border3.style.display = "none"
}
aA = document.getElementById("dispContentAcc");
function showContentADT() {
    dispContentAcc.style.display = "block";
    dispContent.style.display = "none";
    dispContentLs.style.display = "none"
    border2.style.display = "block"
    border3.style.display = "none"
    border1.style.display = "none"
}
cC = document.getElementById("dispContentLs");
function showContentLS() {
    dispContentLs.style.display = "block"
    dispContentAcc.style.display = "none";
    dispContent.style.display = "none";
    border3.style.display = "block"
    border1.style.display = "none"
    border2.style.display = "none"
}



function dBtrans() {
    if (confirm("You are proceeding to Transfer section") == true) {
        window.location.href = ("../Dashboard/transfer.html")
    }
}

function dBAir() {
    if (confirm("You are proceeding to Airtime/Data Top-up section") == true) {
        window.location.href = ("../Dashboard/airtimeTopUp.html")
    }
}

function dBDepo() {
    if (confirm("You are proceeding to Deposit section") == true) {
        window.location.href = ("../Dashboard/deposits.html")
    }
}
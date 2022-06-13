document.getElementById("preventTabBtnHere").addEventListener("keydown", (e) => {
    if (e.key == "Tab") {
        e.preventDefault();
    }
})
var us = JSON.parse(localStorage.getItem('richard'));

function showAccNumber() {
    document.getElementById('accNumberDispTop').innerText = ("*********");
    borderAir.style.display = "block";
    aT.style.display = "block";
    aq.style.backgroundColor = "orangered"
}

function showAir() {
    borderAir.style.display = "block";
    aT.style.display = "block";
    dT.style.display = "none";
    borderData.style.display = "none";
}

function showData() {
    borderAir.style.display = "none";
    borderData.style.display = "block";
    dT.style.display = "block";
    aT.style.display = "none";
}

function globacomSection() {
    wholeDisplay.style.display = "none"
    globacomSect.style.display = "block"
    airtimeGloText.style.backgroundColor = "rgb(39, 36, 36)"
    airtimeGlodiv.style.display = "block"
}

function NmobileSection() {
    wholeDisplay.style.display = "none"
    NmobileSect.style.display = "block"
    airtime9mobileText.style.backgroundColor = "rgb(39, 36, 36)"
    airtime9mobilediv.style.display = "block"
}

function airtelSection() {
    airtelSect.style.display = "block"
    wholeDisplay.style.display = "none"
    airtimeAirtelText.style.backgroundColor = "rgb(39, 36, 36)"
    airtimeAirteldiv.style.display = "block "
}

function cancelSection() {
    mtnSect.style.display = "none"
    airtelSect.style.display = "none"
    window.location.reload()
    wholeDisplay.style.display = "block"
    NmobileSect.style.display = "none"
    globacomSect.style.display = "none"
}

function mtnSection() {
    mtnSect.style.display = "block"
    wholeDisplay.style.display = "none"
    airtimeText.style.backgroundColor = "rgb(39, 36, 36)"
    airtimediv.style.display = "block"

}

function airtimePart() {
    airtimeText.style.backgroundColor = "rgb(39, 36, 36)"
    airtimediv.style.display = "block"
    datadiv.style.display = "none"
    dataText.style.backgroundColor = "rgb(224, 66, 8)"
    airtimeAirteldiv.style.display = "block "
    airtimeAirtelText.style.backgroundColor = "rgb(39, 36, 36)"
    dataAirtelText.style.backgroundColor = "rgb(224, 66, 8)"
    dataAirteldiv.style.display = "none "
    airtime9mobileText.style.backgroundColor = "rgb(39, 36, 36)"
    airtime9mobilediv.style.display = "block "
    data9mobileText.style.backgroundColor = "rgb(224, 66, 8)"
    data9mobilediv.style.display = "none "
    dataGloText.style.backgroundColor = "rgb(224, 66, 8)"
    dataGlodiv.style.display = "none"
    airtimeGlodiv.style.display = "block"
    airtimeGloText.style.backgroundColor = "rgb(39, 36, 36)"
}

function dataPart() {
    dataText.style.backgroundColor = "rgb(39, 36, 36)"
    airtimeText.style.backgroundColor = "rgb(224, 66, 8)"
    datadiv.style.display = "block"
    airtimediv.style.display = "none"
    airtimeAirteldiv.style.display = "none"
    dataAirtelText.style.backgroundColor = "rgb(39, 36, 36)"
    airtimeAirtelText.style.backgroundColor = "rgb(224, 66, 8)"
    dataAirteldiv.style.display = "block"
    data9mobileText.style.backgroundColor = "rgb(39, 36, 36)"
    data9mobilediv.style.display = "block"
    airtime9mobileText.style.backgroundColor = "rgb(224, 66, 8)"
    airtime9mobilediv.style.display = "none"
    dataGloText.style.backgroundColor = "rgb(39, 36, 36)"
    dataGlodiv.style.display = "block"
    airtimeGlodiv.style.display = "none"
    airtimeGloText.style.backgroundColor = "rgb(224, 66, 8)"
}

document.getElementById("accountOfSender").addEventListener("click", () => {
    accountOfSender.style.borderColor = ""
    amountOfAirtime.style.borderColor = ""
    phoneNumberOfSender.style.borderColor = ""
    passwordOfSender.style.borderColor = ""
    document.getElementById("airtimeDBtn").disabled = false;
    document.getElementById("airtimeDBtn").style.backgroundColor = "rgb(224, 66, 8)";
    document.getElementById("dangerText").innerText = "Perfect!";
    document.getElementById("dangerText").style.color="green"
});
document.getElementById("amountOfAirtime").addEventListener("click", () => {
    accountOfSender.style.borderColor = ""
    amountOfAirtime.style.borderColor = ""
    phoneNumberOfSender.style.borderColor = ""
    passwordOfSender.style.borderColor = ""
    document.getElementById("airtimeDBtn").disabled = false;
    document.getElementById("airtimeDBtn").style.backgroundColor = "rgb(224, 66, 8)";
    document.getElementById("dangerText").innerText = "Perfect!";
    document.getElementById("dangerText").style.color="green"
});
document.getElementById("phoneNumberOfSender").addEventListener("click", () => {
    accountOfSender.style.borderColor = ""
    amountOfAirtime.style.borderColor = ""
    phoneNumberOfSender.style.borderColor = ""
    passwordOfSender.style.borderColor = ""
    document.getElementById("airtimeDBtn").disabled = false;
    document.getElementById("airtimeDBtn").style.backgroundColor = "rgb(224, 66, 8)";
    document.getElementById("dangerText").innerText = "Perfect!";
    document.getElementById("dangerText").style.color="green"
});
document.getElementById("passwordOfSender").addEventListener("click", () => {
    accountOfSender.style.borderColor = ""
    amountOfAirtime.style.borderColor = ""
    phoneNumberOfSender.style.borderColor = ""
    passwordOfSender.style.borderColor = ""
    document.getElementById("airtimeDBtn").disabled = false;
    document.getElementById("airtimeDBtn").style.backgroundColor = "rgb(224, 66, 8)";
    document.getElementById("dangerText").innerText = "Perfect!";
    document.getElementById("dangerText").style.color="green"
});






function confirmAirtimeTransaction() {
    var tt = JSON.parse(localStorage.getItem("allItems"));
    var vAA = JSON.parse(localStorage.getItem("richard"));
    var aOS = accountOfSender.value;
    var aOA = amountOfAirtime.value;
    var pNOS = phoneNumberOfSender.value;
    var pOS = passwordOfSender.value;
    scissors = vAA[0].passWord;
    acc = vAA[0].acctNumber
    if (aOS == "" || aOA == "" || pNOS == "" || pOS == "") {
        accountOfSender.style.borderColor = "red"
        amountOfAirtime.style.borderColor = "red"
        phoneNumberOfSender.style.borderColor = "red"
        passwordOfSender.style.borderColor = "red"
        document.getElementById("airtimeDBtn").disabled = true;
        document.getElementById("airtimeDBtn").style.backgroundColor = "red";
        document.getElementById("dangerText").innerText = "Kindly fill out the required field!.";
    }else {
        if (aOA >= vAA[0].userBalance) {
            amountOfAirtime.style.borderColor = "red"
            document.getElementById("airtimeDBtn").disabled = true;
            document.getElementById("airtimeDBtn").style.backgroundColor = "red";
            document.getElementById("dangerText").innerText = "Bad Request:: Insufficient Funds !.";
        }else if (acc === aOS && scissors === pOS) {
            if (confirm("Are you sure you want to go on with this transaction?") == true) {
                var tt = JSON.parse(localStorage.getItem("allItems"))
                var vAA = JSON.parse(localStorage.getItem("richard"))
                dev = tt.find(bal => bal.acctNumber == acc);
                var some = parseInt(dev.userBalance) - parseInt(aOA);
                for (d = 0; d < tt.length;) {
                    if (tt[d].acctNumber === acc) {
                        tt[d].userBalance = some
                        break
                    }
                    d++
                }
                for (t = 0; t < vAA.length;) {
                    if (vAA[t].acctNumber === acc) {
                        vAA[t].userBalance = some
                        break
                    }
                    t++
                }
                localStorage.setItem("richard", JSON.stringify(vAA));
                localStorage.setItem("allItems", JSON.stringify(tt));
                mtnSect.style.display = "none"
                wholeDisplay.style.display = "block"
                window.location.reload();
            }
            
        }else {
            document.getElementById("dangerText").innerText = "Bad Request:: Wrong Account Number or Password!!.";
            document.getElementById("airtimeDBtn").disabled = true;
            document.getElementById("airtimeDBtn").style.backgroundColor = "red";
            accountOfSender.style.borderColor = "red"
            passwordOfSender.style.borderColor = "red"
        }
    }
}
document.getElementById("accountOfSenderD").addEventListener("click", () => {
    document.getElementById("dataDoneBtn").disabled = false;
    document.getElementById("dataDoneBtn").style.backgroundColor = "rgb(224, 66, 8)";
    accountOfSenderD.style.borderColor = ""
    amountOfData.style.borderColor = ""
    phoneNumberOfSenderD.style.borderColor = ""
    passwordOfSenderD.style.borderColor = ""
    document.getElementById("dangerText").innerText = "Perfect!";
    document.getElementById("dangerText").style.color="green"
})
document.getElementById("amountOfData").addEventListener("click", () => {
    document.getElementById("dataDoneBtn").disabled = false;
    document.getElementById("dataDoneBtn").style.backgroundColor = "rgb(224, 66, 8)";
    document.getElementById("dangerText").innerText = "Perfect!";
    document.getElementById("dangerText").style.color="green"
    accountOfSenderD.style.borderColor = ""
    amountOfData.style.borderColor = ""
    phoneNumberOfSenderD.style.borderColor = ""
    passwordOfSenderD.style.borderColor = ""
})

document.getElementById("phoneNumberOfSenderD").addEventListener("click", () => {
    document.getElementById("dataDoneBtn").disabled = false;
    document.getElementById("dataDoneBtn").style.backgroundColor = "rgb(224, 66, 8)";
    document.getElementById("dangerText").innerText = "Perfect!";
    document.getElementById("dangerText").style.color="green"
    accountOfSenderD.style.borderColor = ""
    amountOfData.style.borderColor = ""
    phoneNumberOfSenderD.style.borderColor = ""
    passwordOfSenderD.style.borderColor = ""
})
document.getElementById("passwordOfSenderD").addEventListener("click", () => {
    document.getElementById("dataDoneBtn").disabled = false;
    document.getElementById("dataDoneBtn").style.backgroundColor = "rgb(224, 66, 8)";
    document.getElementById("dangerText").innerText = "Perfect!";
    document.getElementById("dangerText").style.color="green"
    accountOfSenderD.style.borderColor = ""
    amountOfData.style.borderColor = ""
    phoneNumberOfSenderD.style.borderColor = ""
    passwordOfSenderD.style.borderColor = ""
})

function confirmDataTransaction() {
    var oP = JSON.parse(localStorage.getItem("allItems"));
    var vAT = JSON.parse(localStorage.getItem("richard"));
    var aOSD = accountOfSenderD.value;
    var aOD = amountOfData.value;
    var pNOSD = phoneNumberOfSenderD.value;
    var pOSD = passwordOfSenderD.value
    scis = vAT[0].passWord;
    acP = vAT[0].acctNumber
    if (aOSD == "" || aOD == "" || pNOSD == "" || pOSD == "") {
        accountOfSenderD.style.borderColor = "red "
        amountOfData.style.borderColor = "red"
        phoneNumberOfSenderD.style.borderColor = "red"
        passwordOfSenderD.style.borderColor = "red"
        document.getElementById("dataDoneBtn").disabled = true;
        document.getElementById("dataDoneBtn").style.backgroundColor = "red";
        document.getElementById("dangerText").innerText = "Kindly fill out the required field!.";
    } else {
        if (aOD >= vAT[0].userBalance) {
            amountOfData.style.borderColor = "red"
            document.getElementById("dataDoneBtn").disabled = true;
            document.getElementById("dataDoneBtn").style.backgroundColor = "red";
            document.getElementById("dangerText").innerText = "Bad Request:: Insufficient Funds !.";
        }else if (acP === aOSD && scis === pOSD) {
            if (confirm("Are you sure you want to go on with this transaction?") == true) {
                var oP = JSON.parse(localStorage.getItem("allItems"))
                var vAT = JSON.parse(localStorage.getItem("richard"))
                deve = oP.find(bal => bal.acctNumber == acP);
                var some = parseInt(deve.userBalance) - parseInt(aOD);
                for (d = 0; d < oP.length;) {
                    if (oP[d].acctNumber === acP) {
                        oP[d].userBalance = some
                        break
                    }
                    d++
                }
                for (t = 0; t < vAT.length;) {
                    if (vAT[t].acctNumber === acP) {
                        vAT[t].userBalance = some
                        break
                    }
                    t++
                }            
                localStorage.setItem("richard", JSON.stringify(vAT));
                localStorage.setItem("allItems", JSON.stringify(oP));
                mtnSect.style.display = "none"
                wholeDisplay.style.display = "block"
                window.location.reload();
            }
            
        }else {
            document.getElementById("dangerText").innerText = "Bad Request:: Wrong Account Number or Password!!.";
            passwordOfSenderD.style.borderColor = "red"
            document.getElementById("airtimeDBtn").disabled = true;
            document.getElementById("airtimeDBtn").style.backgroundColor = "red";
            accountOfSenderD.style.borderColor = "red "
            accountOfSender.style.borderColor = "red"
            passwordOfSender.style.borderColor = "red"
        }

    }
}


document.getElementById("accountOfSenderAir").addEventListener("click",()=>{
    accountOfSenderAir.style.borderColor = ""
    amountOfAirtimeAir.style.borderColor = ""
    phoneNumberOfSenderAir.style.borderColor = ""
    passwordOfSenderAir.style.borderColor = ""
    dangerTextAir.innerText=""
    airtimeDBtnAir.disabled=false;
    airtimeDBtnAir.style.backgroundColor= "rgb(224, 66, 8)"
    document.getElementById("dangerTextAir").innerText = "Perfect!";
    document.getElementById("dangerTextAir").style.color="green"
});
document.getElementById("amountOfAirtimeAir").addEventListener("click",()=>{
    accountOfSenderAir.style.borderColor = ""
    amountOfAirtimeAir.style.borderColor = ""
    phoneNumberOfSenderAir.style.borderColor = ""
    passwordOfSenderAir.style.borderColor = ""
    document.getElementById("dangerTextAir").innerText = "Perfect!";
    document.getElementById("dangerTextAir").style.color="green"
    airtimeDBtnAir.disabled=false;
    airtimeDBtnAir.style.backgroundColor="rgb(224, 66, 8)"
});
document.getElementById("phoneNumberOfSenderAir").addEventListener("click",()=>{
    accountOfSenderAir.style.borderColor = ""
    amountOfAirtimeAir.style.borderColor = ""
    phoneNumberOfSenderAir.style.borderColor = ""
    passwordOfSenderAir.style.borderColor = ""
    document.getElementById("dangerTextAir").innerText = "Perfect!";
    document.getElementById("dangerTextAir").style.color="green"
    airtimeDBtnAir.disabled=false;
    airtimeDBtnAir.style.backgroundColor="rgb(224, 66, 8)"
});
document.getElementById("passwordOfSenderAir").addEventListener("click",()=>{
    accountOfSenderAir.style.borderColor = ""
    amountOfAirtimeAir.style.borderColor = ""
    phoneNumberOfSenderAir.style.borderColor = ""
    passwordOfSenderAir.style.borderColor = ""
    document.getElementById("dangerTextAir").innerText = "Perfect!";
    document.getElementById("dangerTextAir").style.color="green"
    airtimeDBtnAir.disabled=false;
    airtimeDBtnAir.style.backgroundColor="rgb(224, 66, 8)"
});
function confirmAirtimeTransactionAir(){
    var rb = JSON.parse(localStorage.getItem("richard"))
    var tB = JSON.parse(localStorage.getItem("allItems"))
    var aOSA = accountOfSenderAir.value;
    var aOAA = amountOfAirtimeAir.value;
    var pNOSA = phoneNumberOfSenderAir.value;
    var pOSA = passwordOfSenderAir.value;
    var td = rb[0].acctNumber;
    var pQ= rb[0].passWord;
    if (aOSA == "" || aOAA == "" || pNOSA == "" || pOSA == "") {
        accountOfSenderAir.style.borderColor = "red"
        amountOfAirtimeAir.style.borderColor = "red"
        phoneNumberOfSenderAir.style.borderColor = "red"
        passwordOfSenderAir.style.borderColor = "red"
        dangerTextAir.innerText="Kindly fill-out the required field!."
        airtimeDBtnAir.disabled=true;
        airtimeDBtnAir.style.backgroundColor="red"
    }else{
        if (aOAA >= rb[0].userBalance) {
            amountOfAirtimeAir.style.borderColor = "red"
            document.getElementById("airtimeDBtnAir").disabled = true;
            document.getElementById("airtimeDBtnAir").style.backgroundColor = "red";
            document.getElementById("dangerTextAir").innerText = "Bad Request:: Insufficient Funds !.";
        }else if(td == aOSA && pQ == pOSA){
            if(confirm("Are you sure you want to go on with this transaction?") == true){
                var rb = JSON.parse(localStorage.getItem("richard"))
                var tB = JSON.parse(localStorage.getItem("allItems"))
                var sam = tB.find(best => best.acctNumber == td);
                var pEE = parseInt(sam.userBalance) - parseInt(aOAA);
                for(r=0; r < tB.length;){
                    if (tB[r].acctNumber === td) {
                        tB[r].userBalance = pEE
                        break
                    }
                    r++
                }
                for(v=0; v < rb.length;){
                    if (rb[v].acctNumber === td) {
                        rb[v].userBalance = pEE
                        break
                    }
                    v++
                }
            }
            localStorage.setItem("richard", JSON.stringify(rb));
            localStorage.setItem("allItems", JSON.stringify(tB));
            airtelSect.style.display = "none"
            wholeDisplay.style.display = "block"
            window.location.reload();
           
        }else{
            document.getElementById("dangerTextAir").innerText = "Bad Request:: Wrong Account Number or Password!!.";
            passwordOfSenderAir.style.borderColor = "red"
            document.getElementById("airtimeDBtnAir").disabled = true;
            document.getElementById("airtimeDBtnAir").style.backgroundColor = "red";
            accountOfSenderAir.style.borderColor = "red"
            passwordOfSenderAir.style.borderColor = "red"
        }
    }
}
document.getElementById("accountOfSenderDAir").addEventListener("click",()=>{
         accountOfSenderDAir.style.borderColor = ""
        amountOfDataDAir.style.borderColor = ""
        phoneNumberOfSenderDAir.style.borderColor = ""
        passwordOfSenderDAir.style.borderColor = ""
        document.getElementById("dataDoneBtnAir").disabled = false;
        document.getElementById("dataDoneBtnAir").style.backgroundColor = "rgb(224, 66, 8)";
        document.getElementById("dangerTextAir").innerText = "Perfect!";
        document.getElementById("dangerTextAir").style.color="green"
})
document.getElementById("amountOfDataDAir").addEventListener("click",()=>{
        accountOfSenderDAir.style.borderColor = ""
        amountOfDataDAir.style.borderColor = ""
        phoneNumberOfSenderDAir.style.borderColor = ""
        passwordOfSenderDAir.style.borderColor = ""
        document.getElementById("dataDoneBtnAir").disabled = false;
        document.getElementById("dataDoneBtnAir").style.backgroundColor = "rgb(224, 66, 8)";
        document.getElementById("dangerTextAir").innerText = "Perfect!";
        document.getElementById("dangerTextAir").style.color="green"
})
document.getElementById("phoneNumberOfSenderDAir").addEventListener("click",()=>{
        accountOfSenderDAir.style.borderColor = ""
        amountOfDataDAir.style.borderColor = ""
        phoneNumberOfSenderDAir.style.borderColor = ""
        passwordOfSenderDAir.style.borderColor = ""
        document.getElementById("dataDoneBtnAir").disabled = false;
        document.getElementById("dataDoneBtnAir").style.backgroundColor = "rgb(224, 66, 8)";
        document.getElementById("dangerTextAir").innerText = "Perfect!";
        document.getElementById("dangerTextAir").style.color="green"
})
document.getElementById("passwordOfSenderDAir").addEventListener("click",()=>{
        accountOfSenderDAir.style.borderColor = ""
        amountOfDataDAir.style.borderColor = ""
        phoneNumberOfSenderDAir.style.borderColor = ""
        passwordOfSenderDAir.style.borderColor = ""
        document.getElementById("dataDoneBtnAir").disabled = false;
        document.getElementById("dataDoneBtnAir").style.backgroundColor = "rgb(224, 66, 8)";
        document.getElementById("dangerTextAir").innerText = "Perfect!";
    document.getElementById("dangerTextAir").style.color="green"
})
function confirmDataTransactionAir() {
    var big = JSON.parse(localStorage.getItem("richard"))
    var fat = JSON.parse(localStorage.getItem("allItems"))
    var aOSDA = accountOfSenderDAir.value;
    var aODA = amountOfDataDAir.value;
    var pNOSDA = phoneNumberOfSenderDAir.value;
    var pOSDA = passwordOfSenderDAir.value
    var tiv = big[0].acctNumber
    var biv= big[0].passWord
    if (aOSDA == "" || aODA == "" || pNOSDA == "" || pOSDA == "") {
        accountOfSenderDAir.style.borderColor = "red"
        amountOfDataDAir.style.borderColor = "red"
        phoneNumberOfSenderDAir.style.borderColor = "red"
        passwordOfSenderDAir.style.borderColor = "red"
        document.getElementById("dataDoneBtnAir").disabled = true;
        document.getElementById("dataDoneBtnAir").style.backgroundColor = "red";
        document.getElementById("dangerTextAir").innerText = "Kindly fill out the required field!.";
    } else {
        if (aODA >= big[0].userBalance) {
            document.getElementById("dangerTextNM").innerText = "Bad Request:: Insufficient Funds!.";
            amountOfDataDAir.style.borderColor = "red"
            document.getElementById("dataDoneBtnAir").disabled = true;
            document.getElementById("dataDoneBtnAir").style.backgroundColor = "red";
            document.getElementById("dangerTextAir").innerText = "Bad Request:: Insufficient Funds !.";
        }else if(tiv==aOSDA && biv==pOSDA){
            if (confirm("Are you sure you want to go on with this transaction?") == true) {
                var big = JSON.parse(localStorage.getItem("richard"))
                var fat = JSON.parse(localStorage.getItem("allItems"))
                var best = fat.find(bee => bee.acctNumber == tiv  )
                var tewa = parseInt(best.userBalance) -parseInt(aODA)
                for(n=0; n < big.length;){
                    if (big[n].acctNumber === tiv) {
                        big[n].userBalance = tewa
                        break
                    }
                    n++
                }
                for(y=0; y < fat.length;){
                    if (fat[y].acctNumber === tiv) {
                        fat[y].userBalance = tewa
                        break
                    }
                    y++
                }
                localStorage.setItem("richard", JSON.stringify(big));
                localStorage.setItem("allItems", JSON.stringify(fat));
                airtelSect.style.display = "none"
                window.location.reload()
                wholeDisplay.style.display = "block"
               
            }
        }else{
            document.getElementById("dangerTextAir").innerText = "Bad Request:: Wrong Account Number or Password!!.";
            passwordOfSenderDAir.style.borderColor = "red"
            document.getElementById("dataDoneBtnAir").disabled = true;
            document.getElementById("dataDoneBtnAir").style.backgroundColor = "red";
            accountOfSenderDAir.style.borderColor = "red"
        }
        
    }
}
document.getElementById("accountOfSenderNM").addEventListener("click", () => {
    document.getElementById("airtimeBtnNM").disabled = false;
    document.getElementById("airtimeBtnNM").style.backgroundColor = "rgb(224, 66, 8) ";
    accountOfSenderNM.style.borderColor = ""
    amountOfAirtimeNM.style.borderColor = ""
    phoneNumberOfSenderNM.style.borderColor = ""
    passwordOfSenderNM.style.borderColor = ""
    document.getElementById("dangerTextNM").innerText = "Perfect!";
    document.getElementById("dangerTextNM").style.color="green"
})
document.getElementById("amountOfAirtimeNM").addEventListener("click", () => {
    document.getElementById("airtimeBtnNM").disabled = false;
    document.getElementById("airtimeBtnNM").style.backgroundColor = "rgb(224, 66, 8) ";
    document.getElementById("dangerTextNM").innerText = "Perfect!";
    document.getElementById("dangerTextNM").style.color="green"
    accountOfSenderNM.style.borderColor = ""
    amountOfAirtimeNM.style.borderColor = ""
    phoneNumberOfSenderNM.style.borderColor = ""
    passwordOfSenderNM.style.borderColor = ""
})
document.getElementById("phoneNumberOfSenderNM").addEventListener("click", () => {
    document.getElementById("airtimeBtnNM").disabled = false;
    document.getElementById("airtimeBtnNM").style.backgroundColor = "rgb(224, 66, 8)";
    document.getElementById("dangerTextNM").innerText = "Perfect!";
    document.getElementById("dangerTextNM").style.color="green"
    accountOfSenderNM.style.borderColor = ""
    amountOfAirtimeNM.style.borderColor = ""
    phoneNumberOfSenderNM.style.borderColor = ""
    passwordOfSenderNM.style.borderColor = ""
})
document.getElementById("passwordOfSenderNM").addEventListener("click", () => {
    document.getElementById("airtimeBtnNM").disabled = false;
    document.getElementById("airtimeBtnNM").style.backgroundColor = "rgb(224, 66, 8)";
    document.getElementById("dangerTextNM").innerText = "Perfect!";
    document.getElementById("dangerTextNM").style.color="green"
    accountOfSenderNM.style.borderColor = ""
    amountOfAirtimeNM.style.borderColor = ""
    phoneNumberOfSenderNM.style.borderColor = ""
    passwordOfSenderNM.style.borderColor = ""
})
function confirmAirtimeTransactionNM() {
    hh = JSON.parse(localStorage.getItem("allItems"))
    uu = JSON.parse(localStorage.getItem("richard"))
    var acSNM = accountOfSenderNM.value;
    var aOANM = amountOfAirtimeNM.value;
    var pNOSNM = phoneNumberOfSenderNM.value;
    var pOSNM = passwordOfSenderNM.value;
    tk = uu[0].acctNumber;
    az = uu[0].passWord;
    if (acSNM == "" || aOANM == "" || pNOSNM == "" || pOSNM == "") {
        accountOfSenderNM.style.borderColor = "red"
        amountOfAirtimeNM.style.borderColor = "red"
        phoneNumberOfSenderNM.style.borderColor = "red"
        passwordOfSenderNM.style.borderColor = "red"
        document.getElementById("airtimeBtnNM").disabled = true;
        document.getElementById("airtimeBtnNM").style.backgroundColor = "red";
        document.getElementById("dangerTextNM").innerText = "Kindly fill out the required field!.";
    }else {
        if (aOANM >= uu[0].userBalance) {
            document.getElementById("dangerTextNM").innerText = "Bad Request:: Insufficient Funds!.";
            amountOfAirtimeNM.style.borderColor = "red"
            document.getElementById("airtimeBtnNM").disabled = true;
            document.getElementById("airtimeBtnNM").style.backgroundColor = "red";
            document.getElementById("dangerTextNM").innerText = "Bad Request:: Insufficient Funds !.";
        }else if (tk == acSNM && az == pOSNM){
            if (confirm("Are you sure you want to go on with this transaction?") == true) {
                hh = JSON.parse(localStorage.getItem("allItems"))
                uu = JSON.parse(localStorage.getItem("richard"))
                bw = hh.find(ww => ww.acctNumber == tk)
                ty = parseInt(bw.userBalance) - parseInt(aOANM)
                for(w = 0; w < hh.length;){
                    if (hh[w].acctNumber == tk) {
                        hh[w].userBalance = ty
                        break;
                    } w++
                   
                }
                for(o = 0; o < uu.length;){
                    if (uu[o].acctNumber == tk) {
                        uu[o].userBalance = ty
                        break;
                    }o++
                }
                localStorage.setItem("richard", JSON.stringify(uu))
                localStorage.setItem("allItems", JSON.stringify(hh))
                wholeDisplay.style.display = "block"
                NmobileSect.style.display = "none"
                window.location.reload()
                
            }
        }else{
            document.getElementById("dangerTextNM").innerText = "Bad Request:: Wrong Account Number or Password!!.";
            passwordOfSenderNM.style.borderColor = "red"
            document.getElementById("airtimeBtnNM").disabled = true;
            document.getElementById("airtimeBtnNM").style.backgroundColor = "red";
            accountOfSenderNM.style.borderColor = "red"
        }
       
    }
}
document.getElementById("accountOfSenderDNM").addEventListener("click", () => {
    document.getElementById("dataBtnNM").disabled = false;
    document.getElementById("dataBtnNM").style.backgroundColor = "rgb(224, 66, 8)";
    document.getElementById("dangerTextNM").innerText = "Perfect!";
    document.getElementById("dangerTextNM").style.color="green"
    accountOfSenderDNM.style.borderColor = ""
    amountOfDataNM.style.borderColor = ""
    phoneNumberOfSenderDNM.style.borderColor = ""
    passwordOfSenderDataNM.style.borderColor = ""
})
document.getElementById("amountOfDataNM").addEventListener("click", () => {
    document.getElementById("dataBtnNM").disabled = false;
    document.getElementById("dataBtnNM").style.backgroundColor = "rgb(224, 66, 8)";
    document.getElementById("dangerTextNM").innerText = "Perfect!";
    document.getElementById("dangerTextNM").style.color="green"
    accountOfSenderDNM.style.borderColor = ""
    amountOfDataNM.style.borderColor = ""
    phoneNumberOfSenderDNM.style.borderColor = ""
    passwordOfSenderDataNM.style.borderColor = ""
})
document.getElementById("phoneNumberOfSenderDNM").addEventListener("click", () => {
    document.getElementById("dataBtnNM").disabled = false;
    document.getElementById("dataBtnNM").style.backgroundColor = "rgb(224, 66, 8)";
    document.getElementById("dangerTextNM").innerText = "Perfect!";
    document.getElementById("dangerTextNM").style.color="green"
    accountOfSenderDNM.style.borderColor = ""
    amountOfDataNM.style.borderColor = ""
    phoneNumberOfSenderDNM.style.borderColor = ""
    passwordOfSenderDataNM.style.borderColor = ""
})
document.getElementById("passwordOfSenderDataNM").addEventListener("click", () => {
    document.getElementById("dataBtnNM").disabled = false;
    document.getElementById("dataBtnNM").style.backgroundColor = "rgb(224, 66, 8)";
    document.getElementById("dangerTextNM").innerText = "Perfect!";
    document.getElementById("dangerTextNM").style.color="green"
    accountOfSenderDNM.style.borderColor = ""
    amountOfDataNM.style.borderColor = ""
    phoneNumberOfSenderDNM.style.borderColor = ""
    passwordOfSenderDataNM.style.borderColor = ""
})

function confirmDataTransactionNM() {
    var ui = JSON.parse(localStorage.getItem("richard"))
    var ki = JSON.parse(localStorage.getItem("allItems"))
    var account = accountOfSenderDNM.value;
    var amount = amountOfDataNM.value;
    var phone = phoneNumberOfSenderDNM.value;
    var password = passwordOfSenderDataNM.value;
    var gh = ui[0].acctNumber;
    var cd = ui[0].passWord;

    if (account == "" || amount == "" || phone == "" || password == "") {
        accountOfSenderDNM.style.borderColor = "red"
        amountOfDataNM.style.borderColor = "red"
        phoneNumberOfSenderDNM.style.borderColor = "red"
        passwordOfSenderDataNM.style.borderColor = "red"
        document.getElementById("dataBtnNM").disabled = true;
        document.getElementById("dataBtnNM").style.backgroundColor = "red";
        document.getElementById("dangerTextNM").innerText = "Kindly fill out the required field!.";

    } else {
        if (amount >= ui[0].userBalance) {
            document.getElementById("dangerTextNM").innerText = "Bad Request:: Insufficient Funds!.";
            amountOfDataNM.style.borderColor = "red"
            document.getElementById("dataBtnNM").disabled = true;
            document.getElementById("dataBtnNM").style.backgroundColor = "red";
        }else if(gh == account && cd == password){
                if (confirm("Are you sure you want to go on with this transaction? ") == true) {
                    var ui = JSON.parse(localStorage.getItem("richard"));
                    var ki = JSON.parse(localStorage.getItem("allItems"));
                    var hd = ki.find(telling => telling.acctNumber == gh)
                    var sd = parseInt(hd.userBalance) - parseInt(amount)

                    for(x=0; x < ui.length;){
                        if(ui[x].acctNumber == gh){
                            ui[x].userBalance = sd;
                            break;
                        }x++
                    }
                    for(f=0; f < ki.length;){
                        if(ki[f].acctNumber == gh){
                            ki[f].userBalance = sd;
                            break;
                        }f++

                    }
                    localStorage.setItem("richard", JSON.stringify(ui))
                    localStorage.setItem("allItems", JSON.stringify(ki))
                    window.location.reload()
                    wholeDisplay.style.display = "block"
                    globacomSect.style.display = "none"
                }
        }else{
            document.getElementById("dangerTextNM").innerText = "Bad Request:: Wrong Account Number or Password!!.";
            passwordOfSenderDataNM.style.borderColor = "red"
            document.getElementById("dataBtnNM").disabled = true;
            document.getElementById("dataBtnNM").style.backgroundColor = "red";
            accountOfSenderDNM.style.borderColor = "red"
        }
    }

}
document.getElementById("accountOfSenderglo").addEventListener("click", () => {
    accountOfSenderglo.style.borderColor = ""
    amountOfAirtimeglo.style.borderColor = ""
    phoneNumberOfSenderglo.style.borderColor = ""
    passwordOfSenderglo.style.borderColor = ""
    airtimeDoneBtnglo.disabled = false;
    airtimeDoneBtnglo.style.backgroundColor = "rgb(224, 66, 8) "
    document.getElementById("dangerTextglo").innerText = "Perfect!";
    document.getElementById("dangerTextglo").style.color="green"
})
document.getElementById("amountOfAirtimeglo").addEventListener("click", () => {
    accountOfSenderglo.style.borderColor = ""
    amountOfAirtimeglo.style.borderColor = ""
    phoneNumberOfSenderglo.style.borderColor = ""
    passwordOfSenderglo.style.borderColor = ""
    document.getElementById("dangerTextglo").innerText = "Perfect!";
    document.getElementById("dangerTextglo").style.color="green"
    airtimeDoneBtnglo.disabled = false;
    airtimeDoneBtnglo.style.backgroundColor = "rgb(224, 66, 8)"
})
document.getElementById("phoneNumberOfSenderglo").addEventListener("click", () => {
    accountOfSenderglo.style.borderColor = ""
    amountOfAirtimeglo.style.borderColor = ""
    phoneNumberOfSenderglo.style.borderColor = ""
    passwordOfSenderglo.style.borderColor = ""
    document.getElementById("dangerTextglo").innerText = "Perfect!";
    document.getElementById("dangerTextglo").style.color="green"
    airtimeDoneBtnglo.disabled = false;
    airtimeDoneBtnglo.style.backgroundColor = "rgb(224, 66, 8)"
})
document.getElementById("passwordOfSenderglo").addEventListener("click", () => {
    accountOfSenderglo.style.borderColor = ""
    amountOfAirtimeglo.style.borderColor = ""
    phoneNumberOfSenderglo.style.borderColor = ""
    passwordOfSenderglo.style.borderColor = ""
    document.getElementById("dangerTextglo").innerText = "Perfect!";
    document.getElementById("dangerTextglo").style.color="green"
    airtimeDoneBtnglo.disabled = false;
    airtimeDoneBtnglo.style.backgroundColor = "rgb(224, 66, 8)"
});

function confirmAirtimeTransactionglo() {
    var joa = JSON.parse(localStorage.getItem("richard"))
    var cy = JSON.parse(localStorage.getItem("allItems"))
    var aOSg = accountOfSenderglo.value;
    var aOAg = amountOfAirtimeglo.value
    var pNOSg = phoneNumberOfSenderglo.value;
    var pOSg = passwordOfSenderglo.value;
    var bk = joa[0].acctNumber;
    var ck = joa[0].passWord;
    if (aOSg == "" || aOAg == "" || pNOSg == "" || pOSg == "") {
        accountOfSenderglo.style.borderColor = "red"
        amountOfAirtimeglo.style.borderColor = "red"
        phoneNumberOfSenderglo.style.borderColor = "red"
        passwordOfSenderglo.style.borderColor = "red"
        dangerTextglo.innerText = "kindly fill-out the required field!."
        airtimeDoneBtnglo.disabled = true;
        airtimeDoneBtnglo.style.backgroundColor = "red"
    }else{
        if(aOAg >= joa[0].userBalance){
            document.getElementById("dangerTextglo").innerText = "Bad Request:: Insufficient Funds!.";
            amountOfAirtimeglo.style.borderColor = "red"
            document.getElementById("airtimeDoneBtnglo").disabled = true;
            document.getElementById("airtimeDoneBtnglo").style.backgroundColor = "red";
        }else if(bk == aOSg && ck == pOSg){
            if (confirm("Are you sure you want to go on with this transaction? ") == true) {
                var joa = JSON.parse(localStorage.getItem("richard"));
                var cy = JSON.parse(localStorage.getItem("allItems"));
                var dh = cy.find(tell => tell.acctNumber == bk)
                var ds = parseInt(dh.userBalance) - parseInt(aOAg)

                for(p=0; p < joa.length;){
                    if(joa[p].acctNumber == bk){
                        joa[p].userBalance = ds;
                        break;
                    }p++
                }
                for(j=0; j < cy.length;){
                    if(cy[j].acctNumber == bk){
                        cy[j].userBalance = ds;
                        break;
                    }j++

                }
                localStorage.setItem("richard", JSON.stringify(joa))
                localStorage.setItem("allItems", JSON.stringify(cy))
                window.location.reload()
                wholeDisplay.style.display = "block"
                globacomSect.style.display = "none"
            }
        }else{
            document.getElementById("dangerTextglo").innerText = "Bad Request:: Wrong Account Number or Password!!.";
            passwordOfSenderglo.style.borderColor = "red"
            document.getElementById("airtimeDoneBtnglo").disabled = true;
            document.getElementById("airtimeDoneBtnglo").style.backgroundColor = "red";
            accountOfSenderglo.style.borderColor = "red"
        }

    }
}
document.getElementById("accountOfSenderDataglo").addEventListener("click", () => {
    accountOfSenderDataglo.style.borderColor = ""
    amountOfDataglo.style.borderColor = ""
    phoneNumberOfSenderDataglo.style.borderColor = ""
    passwordOfSenderDataglo.style.borderColor = ""
    document.getElementById("dangerTextglo").innerText = "Perfect!";
    document.getElementById("dangerTextglo").style.color="green"
    dataDoneBtnglo.disabled = false;
    dataDoneBtnglo.style.backgroundColor = "rgb(224, 66, 8)"
})
document.getElementById("amountOfDataglo").addEventListener("click", () => {
    accountOfSenderDataglo.style.borderColor = ""
    amountOfDataglo.style.borderColor = ""
    phoneNumberOfSenderDataglo.style.borderColor = ""
    passwordOfSenderDataglo.style.borderColor = ""
    document.getElementById("dangerTextglo").innerText = "Perfect!";
    document.getElementById("dangerTextglo").style.color="green"
    dataDoneBtnglo.disabled = false;
    dataDoneBtnglo.style.backgroundColor = "rgb(224, 66, 8)"
})
document.getElementById("phoneNumberOfSenderDataglo").addEventListener("click", () => {
    accountOfSenderDataglo.style.borderColor = ""
    amountOfDataglo.style.borderColor = ""
    phoneNumberOfSenderDataglo.style.borderColor = ""
    passwordOfSenderDataglo.style.borderColor = ""
    document.getElementById("dangerTextglo").innerText = "Perfect!";
    document.getElementById("dangerTextglo").style.color="green"
    dataDoneBtnglo.disabled = false;
    dataDoneBtnglo.style.backgroundColor = "rgb(224, 66, 8)"
})
document.getElementById("passwordOfSenderDataglo").addEventListener("click", () => {
    accountOfSenderDataglo.style.borderColor = ""
    amountOfDataglo.style.borderColor = ""
    phoneNumberOfSenderDataglo.style.borderColor = ""
    passwordOfSenderDataglo.style.borderColor = ""
    document.getElementById("dangerTextglo").innerText = "Perfect!";
    document.getElementById("dangerTextglo").style.color="green"
    dataDoneBtnglo.disabled = false;
    dataDoneBtnglo.style.backgroundColor = "rgb(224, 66, 8)"
})

function confirmDataTransactionglo() {
    var qw = JSON.parse(localStorage.getItem("richard"))
    var ht = JSON.parse(localStorage.getItem("allItems"))
    var accountGlo = accountOfSenderDataglo.value;
    var amountGlo = amountOfDataglo.value;
    var phoneGlo = phoneNumberOfSenderDataglo.value;
    var passwordGlo = passwordOfSenderDataglo.value;
    var pk = qw[0].acctNumber
    var nb = qw[0].passWord
    if (accountGlo == "" || amountGlo == "" || phoneGlo == "" || passwordGlo == "") {
        accountOfSenderDataglo.style.borderColor = "red"
        amountOfDataglo.style.borderColor = "red"
        phoneNumberOfSenderDataglo.style.borderColor = "red"
        passwordOfSenderDataglo.style.borderColor = "red"
        dangerTextglo.innerText = "Kindly fill-out required field!."
        dataDoneBtnglo.disabled = true;
        dataDoneBtnglo.style.backgroundColor = "red"
    }else{
        if(amountGlo >= qw[0].userBalance){
            document.getElementById("dangerTextglo").innerText = "Bad Request:: Insufficient Funds!.";
            amountOfDataglo.style.borderColor = "red"
            document.getElementById("dataDoneBtnglo").disabled = true;
            document.getElementById("dataDoneBtnglo").style.backgroundColor = "red";
        }else if(pk == accountGlo && nb == passwordGlo){
            if (confirm("Are you sure you want to go on with this transaction? ") == true) {
                var qw = JSON.parse(localStorage.getItem("richard"));
                var ht = JSON.parse(localStorage.getItem("allItems"));
                var tr = ht.find(oil => oil.acctNumber == pk)
                var df = parseInt(tr.userBalance) - parseInt(amountGlo)

                for(s=0; s < qw.length;){
                    if(qw[s].acctNumber == pk){
                        qw[s].userBalance = df;
                        break;
                    }s++
                }
                for(u=0; u < ht.length;){
                    if(ht[u].acctNumber == pk){
                        ht[u].userBalance = df;
                        break;
                    }u++

                }
                localStorage.setItem("richard", JSON.stringify(qw))
                localStorage.setItem("allItems", JSON.stringify(ht))
                window.location.reload()
                wholeDisplay.style.display = "block"
                globacomSect.style.display = "none"
            }
        }else{
            document.getElementById("dangerTextglo").innerText = "Bad Request:: Wrong Account Number or Password!!.";
            passwordOfSenderDataglo.style.borderColor = "red"
            document.getElementById("dataDoneBtnglo").disabled = true;
            document.getElementById("dataDoneBtnglo").style.backgroundColor = "red";
            accountOfSenderDataglo.style.borderColor = "red"
        }
    }
}

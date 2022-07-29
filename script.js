function compute()
{
    var pamount = document.getElementById("pamount").value;
    var rate = document.getElementById("rate").value;
     var years = document.getElementById("years").value;
    if (pamount == "") {
        alert("Enter a positive number");
        document.getElementById("pamount").focus();
        return false;
    }else {
        if (pamount <= 0) {
            alert("Enter a positive number");
            document.getElementById("pamount").focus();
            return false;
        }
    }
    var HDB = new Date().getFullYear();
    var future= parseInt(HDB,10) + parseInt(years,10);
    var interest= pamount * years * rate / 100;
    var result= "If you deposit <mark>" + pamount + "</mark>,<br> at an interest rate of <mark>" + rate + "</mark>%. <br> You will receive an amount of <mark>" + interest + ",</mark><br> in the year <mark>" + future + "</mark>";
    document.getElementById("result").innerHTML=result;
}

function showVal(newVal){ 
    document.getElementById("InterestRate").innerHTML=newVal + '%';
}
        

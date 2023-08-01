// JavaScript code here
 function hideAllDetails() {
    document.getElementById("creditDebitCardDetails").style.display = "none";
    document.getElementById("upiDetails").style.display = "none";
    document.getElementById("netBankingDetails").style.display = "none";
  }
  
  function showCreditDebitCardDetails() {
    hideAllDetails();
    document.getElementById("creditDebitCardDetails").style.display = "block";
  }
  
  function showUpiDetails() {
    hideAllDetails();
    document.getElementById("upiDetails").style.display = "block";
  }
  
  function showNetBankingDetails() {
    hideAllDetails();
    document.getElementById("netBankingDetails").style.display = "block";
  }
  
  function validateUpi() {
    const upiId = document.getElementById("upiId").value;
    const upiRegex = /^[\w.-]+@[A-Za-z]+\w*(?:\.[A-Za-z]+)*$/;
    if (upiRegex.test(upiId)) {
      document.getElementById("upiStatus").style.display = "block";
      document.getElementById("invalidUpiStatus").style.display = "none";
    } else {
      document.getElementById("invalidUpiStatus").style.display = "block";
      document.getElementById("upiStatus").style.display = "none";
    }
  }
  
var passConfirm = function () {
    if (document.getElementById("pass").value == document.getElementById("cpass").value) 
    {
      document.getElementById("info").style.color = "Green";
      document.getElementById("info").innerHTML = "Passwords match!";
    }
    else {
      document.getElementById("info").style.color = "Red";
      document.getElementById("info").innerHTML = "Passwords do NOT match!";
    }
  };
const sendButton = document.getElementById("send");

function submitForm(){
    var name = document.forms["contactUs"]["name"].value;
    var email = document.forms["contactUs"]["email"].value;
    document.getElementById('notification').play();
    alert("Thank you for contacting us " + name + ". We will email you at " + email + " when we are available.");
  }


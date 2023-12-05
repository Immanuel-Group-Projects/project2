const sendButton = document.getElementById("send");

function submitForm(){
    var name = document.forms["contactUs"]["name"].value;
    var email = document.forms["contactUs"]["email"].value;
    document.getElementById('notification').play();
    alert("Thank you for contacting us " + name + ". We will email you at " + email + " when we are available.");
  }

  sendButton.addEventListener("click", function(event) {
    event.preventDefault(); // Prevents the form from being submitted
    alert("Thank you for adding your bio!");
   });
   
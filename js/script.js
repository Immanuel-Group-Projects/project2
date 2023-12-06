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
function checkType() {
  var input = document.getElementById('resume');
  var path = input.value;
  
  if (/.pdf/.exec(path) || /.docx/.exec(path)) {
	  return;
  } else {
	  alert('File Type Invalid, must be a .pdf or .docx file');
	  input.value = '';
	  return;
  }
}
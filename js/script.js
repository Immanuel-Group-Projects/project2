jQuery(function($) {
  $('html').addClass('hasjs');
  $('#send').on("click", function(){
	if (document.getElementById('name').value && document.getElementById('email').value && document.getElementById('bio').value && document.getElementById('resume').value) {
      alert('Thank you for reaching out to us. Expect a message within the next few days.');
	} else {
	  alert('Please fill out all fields.');	
	}
  });
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

var accordion = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < accordion.length; i++) {
	accordion[i].addEventListener("click", function() {
		this.classList.toggle("active");
		
		var panel = this.nextElementSibling;
		if (panel.style.display === "block") {
			panel.style.display = "none";
		} else {
			panel.style.display = "block";
		}
	});
}
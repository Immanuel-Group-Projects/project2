jQuery(function($) {
  $('html').addClass('hasjs');
  $('#send').on("click", function(){
	alert('Thank you for reaching out to us. Expect a message within the next few days.');
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
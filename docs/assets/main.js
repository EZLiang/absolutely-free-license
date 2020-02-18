(function() {
  for (i of document.getElementsByClassName("quotes")) {
    var txt = i.innerText.replace("``", "&#x201C;").replace("\"", "&#201D;");
    i.innerText = txt;
  }

  var button = document.getElementById("copy");
  var license = document.getElementById("license");
  var field = document.getElementById("input");
  field.value = license.innerText;

  function copylicense() {
    field.select();
    field.setSelectionRange(0, 1000);
    document.execCommand("copy");
  }

  button.onclick = copylicense;
} ());
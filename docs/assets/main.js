(function() {
  for (i of document.getElementsByClassName("quotes")) {
    var txt = i.innerText.replace("``", "&#x201C;").replace("\"", "&#201D;");
    i.innerText = txt;
  }

  var button = document.getElementById("copy");
  var license = document.getElementById("license");

  function copylicense() {
    license.select();
    license.setSelectionRange(0, 9999);
    document.execCommand("copy");
  }

  button.onclick = copylicense;
} ());
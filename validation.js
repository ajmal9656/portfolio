function validateForm() {
  var name = document.getElementById("fname").value;
  var email = document.getElementById("email").value;

  var message = document.getElementById("textarea").value;

  if (name == "") {
    document.getElementById("one").innerHTML = "Name must be filled out";
    setTimeout(function () {
      document.getElementById("one").innerHTML = "";
    }, 5000);
    return false;
  }
  if (/\d/.test(name)) {
    document.getElementById("one").innerHTML = "Name must be a character ";
    setTimeout(function () {
      document.getElementById("one").innerHTML = "";
    }, 5000);
    return false;
  }

  if (message == "") {
    document.getElementById("error").innerHTML = "Message must be filled out";
    setTimeout(function () {
      document.getElementById("error").innerHTML = "";
    }, 5000);
    return false;
  }

  return true;
}

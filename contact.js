  function getValue() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var country = document.getElementById("country").value;
    var inquiry = document.getElementById("inquiry").value;

    alert("NAME: " +name+ "\nEMAIL: "+email+"\nCOUNTRY: "+country+"\nINQUIRY: "+inquiry);
  }
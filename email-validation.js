function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
  
  function validate() {
    const $result = $("#result");
    const email = $("#email-text").val();
    $result.text("");
    const $inp= $("#email-text");
  
    if (!validateEmail(email)) {
      $result.text("Please provide a valid email address");
      $result.css("color", "red");
      $result.css("margin","5px 5px auto");
      $inp.css("border-color","red");
    }
    else{
        alert("success");
        $("#email-text").reset();
    }
    return false;
  }

  function clear(){
    const $result = $("#result");
    $inp= $("#email-text"); 
    $result.text("");
    $inp.css("border-color","#ced4da");
    
  }
  
  $("#validate").on("click", validate);
  $("#email-text").on("click",clear);
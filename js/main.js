function login() {
  $("#result").text("Inside send");

  var id = $("#id").val(); 
  var pass = $("#pass").val();

  $.ajax({
    type: "POST",
    url: "http://bling-test.000webhostapp.com/login.php",
    data: {
      id: id,
      pass: pass
    },
    
    success: function(response) {
      var res = JSON.parse(response);

      if (res.res_type == "failed") {
        $("#result").text("Incorrect ID/Password");
        console.log("Incorrect ID/Password");
      }

      else if(res.res_type == "faculty") {
        $("#result").text("Logged in as " + res.fac_name);
        console.log("Logged in as " + res.fac_name);
        localStorage.id = id;
        location.href = "sentmsg.html";
      }
    },

    error: function(error){
      console.log(error);
    }

  });
}

function logout() {
  localStorage.id = null;
  location.href = "index.html";
}
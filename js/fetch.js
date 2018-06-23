function displayMessage (){
    		
    		var id = $("#id").val(); 

    		$.ajax({
    			 type: "POST",
			      url: "http://bling-test.000webhostapp.com/get-sent-msg-data.php",
			      data: {
			        fac_id: id
			      },
			      success: function (data){
			      	var res = JSON.parse(data);
			      	console.log(res);
			      	
			      	var html = "";
			      	for(var a = 0; a<res.length; a++ ){
			      		var date = res[a].date;
			      		var subject = res[a].subject;
			      		var message = res[a].message;

			      		html += date + subject + message;
			      		html += "<br>"
			      	}
			      	document.getElementById("show").innerHTML = html;
			      },

			      error: function(error){
			        console.log(error);
			      }
   		});
   	}
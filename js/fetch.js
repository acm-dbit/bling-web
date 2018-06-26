function displayMessage (){
	var id = localStorage.id; 

	$.ajax({
		type: "POST",
		url: "http://bling-test.000webhostapp.com/get-sent-msg-data.php",
		data: {
			fac_id: id
		},
		success: function (data){
			var res = JSON.parse(data);
			console.log(res);
			
			var msg_html = "";
			for(var a = 0; a<res.length; a++ ){
				
				var msg_date = res[a].date;
				var msg_time = res[a].time;
				var msg_subject = res[a].subject;
				var message_content = res[a].message;

		      
		      var msg_html =
		       '<div class="col-4-lg">'+
		        '<div class="card border-secondary mb-3">'+
		            '<div class="card-body">'+
		                '<div class="card-title">'+
		                    '<ul>'+
		                        '<li>'+
		                                '<div > <b>Subject</b> : '+msg_subject+'</div>'+
		                                '<b>Message</b> : '+message_content+
		                        '</li>'+
		                  ' </ul>'+
		                '</div>'+
		            '</div>'+
		            '<div class="card-footer">'+
		                '<span>'+msg_date+'</span>'+ '&emsp;' +
		                '<span>'+msg_time+'</span>'+
		            '</div>'+
		         '</div>'+
		        '</div>';
		         $("#show").append(msg_html);

			}
			
		},

		error: function(error){
			console.log(error);
		}
	});
}
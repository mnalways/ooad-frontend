$(document).ready(function() {
  $("#registerButton").click(function(event) {
    event.preventDefault();
		var v1=document.getElementById("mob2").value;
		var v2=document.getElementById("pass").value;
		var v3=document.getElementById("dob").value;
		//console.log(v1+ " "  +v2+" "+v3);

		var formData = {}
	    formData["mobileNum"] = v1;
	    formData["password"] = v2;
	    formData["DOB"]=v3;
	    var formJson = JSON.stringify(formData);
	    //console.log(formJson);


	var url="http://localhost:8080/ooad/api/buyer/signup";


    jQuery.ajax({
        url: url,
        type: "POST",
        data: formJson,
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: function(response) {
          var returnedData = JSON.parse(response);
					var x=response;
					console.log(returnedData);
					console.log(x);
					if(x==true){
					window.location.href = "http://localhost:8080/frontend/"
        }
				else {
					document.getElementById("amit1").innerText="user already exists";
				}
			},
        error: function() {
					console.log("error");
					console.log(response);
        }
      });
		});
	});

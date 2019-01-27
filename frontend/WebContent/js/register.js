function register()
{
	sendInfo();
}

var request;  
function sendInfo()  
{  
	var v1=document.getElementById("mob2").value;  
	var v2=document.getElementById("pass").value;
	console.log(v1+ " "  +v2);
	
	var formData = {}
    formData["mobileNum"] = v1;    
    formData["password"] = v2;    
    
    var formJson = JSON.stringify(formData);
    console.log(formJson);

	
	
	var url="http://localhost:8080/ooad/api/buyer/signup";  
	  
	
    jQuery.ajax({
        url: url,
        type: "POST",
        data: formJson,
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: function(response) {
          //
          console.log(response);
        },
        error: function() {
          console.log("error");
        }
      });

}  

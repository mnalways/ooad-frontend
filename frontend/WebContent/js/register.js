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
	
	var url="http://localhost:8080/ooad/api/buyer/signup";  
	  
	if(window.XMLHttpRequest)
	{  
		request=new XMLHttpRequest();  
	}  
	else if(window.ActiveXObject)
	{  
		request=new ActiveXObject("Microsoft.XMLHTTP");  
	}  
	  
	try  
	{  
		request.onreadystatechange=getInfo;  
		request.open("POST",url,true);  
		request.send();  
	}  
	catch(e)  
	{  
		alert("Unable to connect to server");  
	}  
}  
  
function getInfo()
{  
	if(request.readyState==4)
	{  
		var val=request.responseText;  
		console.log(val);
//		document.getElementById('amit').innerHTML=val;  
	}  
}  
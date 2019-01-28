$(document).ready(function() {

  // jQuery methods go here...
  $(".logInb1").click(function() { //changed from trigger on '._2f5Jjv', as it was the class of 'more' and 'cart' as well

	  $("#loginModal").css("display", "block");
	  $("#signUpModal1").css("display", "none");
	  $("#signUpModal2").css("display", "none");

//	  $('#signUpModal1').modal('hide');
//	  $('#signUpModal2').modal('hide');
//	  $('#loginModal').modal('show');
  });


  var loginModal = document.getElementById('loginModal');
  var signUpModal1 = document.getElementById('signUpModal1');
  /*not required as we r using modal now
  // When the user clicks anywhere outside of the modal, close it
//  window.onclick = function(event) {
//    console.log(loginModal.id);
//    if (event.target == loginModal || event.target == signUpModal1 || event.target == signUpModal2) {
//      $(".uMF2cc").css("display", "none");
//      $("._32LSmx").css("display", "none");
//    }
//  }
*/
  $('.signUpb1').click(function() { //changed to class, as it is also applied for 'change' button once mobile number is entered for signup
    console.log("sign up");
    $("#loginModal").css("display", "none");
    $("#signUpModal1").css("display", "block");
    $("#signUpModal2").css("display", "none");

//	$('#loginModal').modal('hide');
//    $('#signUpModal1').modal('show');
//	$('#signUpModal2').modal('hide');
  });
  //shardul from this point on
  $('#continue').click(function(){
		var v99=$('#mob1').val();
		console.log(v99);
//		alert(mobileNo);

var url="http://localhost:8080/ooad/api/buyer/validate";


  jQuery.ajax({
      url: url,
      type: "POST",
      data: v99,
      dataType: "text",
      contentType: "text/plain; charset=utf-8",
      success: function(response) {

        //var returnedData = JSON.parse(response);
        var x=response;
        //console.log(returnedData);
        console.log("x="+x);
        if(x=="true")
        {
          console.log("user already exists. give error");
          document.getElementById("amit3").innerText="user already exists";

          //window.location.href = "http://localhost:8080/frontend/"
        }
      else 
      {
        console.log("user dont already exists");
		$('#mob1').val('');
		$("#loginModal").css("display", "none");
		$("#signUpModal1").css("display", "none");
		$("#signUpModal2").css("display", "block");

//		$('#loginModal').modal('hide');
//	    $('#signUpModal1').modal('hide');
//		$('#signUpModal2').modal('show');

		$("#mob2").val(v99);
//		document.getElementById("amit1").innerText="user already exists";
      }
    },
      error: function() {
        console.log("error");
        console.log(response);
      }
    });
	  });
});

$(document).ready(function() {
  //	clear all the display tags hide them
  $('.birthday').css('display', 'none');
  $('.not-birthday').css('display', 'inline-block');
  //	show display tags accordingly
  console.log(localStorage);
  $(".username").empty();
  if (localStorage.getItem("mobileNum") != null) {
	  $(".user").css("display", "inline-block");
	  var name = localStorage.getItem("mobileNum");
    $("#printName").empty();
    $(".username").text("Logout");
    $("#printName").text(name);
    // birthday check
    if (localStorage.getItem("date") != null) {
      var curDate = new Date();
      var DOB = new Date(localStorage.getItem("date"));
      if (
        curDate.getDate() == DOB.getDate() &&
        curDate.getMonth() == DOB.getMonth()
      ) {
        $('.not-birthday').css('display', 'none');
        $('.birthday').css('display', 'inline-block');
      } else {
        $('.birthday').css('display', 'none');
        $('.not-birthday').css('display', 'inline-block'); //not birthday
      }
    } else {
      console.log("no"); // not birthday defined
    }
  } else {
	   $(".username").text("Login & Signup"); 
	  $(".user").css("display", "none");
  }// check if storage mobileNum is set
  // jQuery methods go here...
  $(".logInb1").click(function() { //changed from trigger on '._2f5Jjv', as it was the class of 'more' and 'cart' as well
	  if(localStorage.getItem("mobileNum") != null) {
		  localStorage.clear();
		  window.location.href = "http://localhost:8080/frontend/";
	  }
	  console.log("click function");
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
  $('#continue').click(function() {
    var mobileNo = $('#mob1').val();
    //		alert(mobileNo);
    $('#mob1').val('');
    $("#loginModal").css("display", "none");
    $("#signUpModal1").css("display", "none");
    $("#signUpModal2").css("display", "block");

    //		$('#loginModal').modal('hide');
    //	    $('#signUpModal1').modal('hide');
    //		$('#signUpModal2').modal('show');

    $("#mob2").val(mobileNo);
  });
});
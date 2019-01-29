$(document).ready(function() {
  $("#loginButton").click(function(event) {
    event.preventDefault();
    var loginForm = document.forms.namedItem("loginForm");
    var formData = {}
    for (i = 0; i < loginForm.length - 1; i++) {
      formData[loginForm.elements[i].name] = loginForm.elements[i].value;
    }
    var formJson = JSON.stringify(formData);
    var url = "http://localhost:8080/ooad/api/buyer/login";

    // $.post(url, formJson, function(data, status, jqXHR) {
    //     console.log(data);
    //     console.log(status);
    //     //window.location.href = "http://localhost:8080/frontend/";
    //   }).done(function() {
    //     alert('Request done!');
    //   })
    //   .fail(function(jqxhr, settings, ex) {
    //     alert('failed, ' + ex);
    //   });;
    jQuery.ajax({
      url: url,
      type: "POST",
      data: formJson,
      dataType: "json",
      contentType: "application/json; charset=utf-8",
      success: function(response) {
        if (response != undefined) {
          for (var key in response) {
            localStorage.setItem(key, response[key]);
          }
          console.log(localStorage);
           window.location.href = "http://localhost:8080/frontend/";
        } else {
          //error
        }
      },
      error: function() {
        console.log("error");
      }
    });
  });
});
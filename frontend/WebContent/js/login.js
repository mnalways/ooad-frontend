$(document).ready(function() {
  $("#loginButton").click(function(event) {
    event.preventDefault();
    var loginForm = document.forms.namedItem("loginForm");
    var formData = {}
    for (i = 0; i < loginForm.length - 1; i++) {
      console.log(loginForm.elements[i].value);
      console.log(loginForm.elements[i].name);
      formData[loginForm.elements[i].name] = loginForm.elements[i].value;
    }
    var formJson = JSON.stringify(formData);
    console.log(formJson);
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
        //
        console.log(response);
      },
      error: function() {
        console.log("error");
      }
    });
  });
});
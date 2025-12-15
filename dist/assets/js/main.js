$(document).ready(function() {
  
   // user singin 
   var base_url = $('#txt_base_url').val();
   
  $("#frm_contact").validate({
    
    errorPlacement: function(error, element) {
      error.insertAfter(element.parent());
  },
  
      rules: {
          txt_name: {
              required: true
          },
          txt_phone: {
              required: true,
              digits: true
          },
          txt_email: {
              required: true,
              email: true
          },
          
      },
      messages: {
          txt_name: {
              required: "Please enter your name"
          },
          txt_phone: {
              required: "Please enter your phone number",
              digits: "Please enter a valid phone number"
          },
          txt_email: {
              required: "Please enter your email",
              email: "Please enter a valid email address"
          },
          
      },
      submitHandler: function(form) {
          // Ajax call here to submit the form data to the backend
          var formData = new FormData(form);
          $.ajax({
            url: 'contact_us_code',
              data: formData,
              type: "POST",
              processData: false,
              contentType: false,
              success: function(response) {
                  // Handle success response
                  alert(response)
                 if(response=='success') {
                  $('#contact_msg').html("<div class='alert alert-success'>Thank you for contacting us! Your message has been successfully submitted, and a member of our team will get back to you shortly.</div>");
                 } else {
                   $('#contact_msg').html("<div class='alert alert-danger'>Oops! Something went wrong with your submission. Please try again later, or contact us directly at info@wadinaif.ae for assistance.</div>");
                 }
                 
              },
              error: function() {
                  // Handle error
                  alert('Something went wrong. Please try again.');
              }
          });
      }
  });

  $(document).on("click", ".thumbnail-50", function () {
        var newSrc = $(this).attr("src");
        $("#main-product-image img").attr("src", newSrc);
    });

    
});
// display.js
function submitForm() {
    // Serialize the form data
    var formData = $('#myForm').serialize();

    // Submit the form using AJAX
    $.ajax({
        type: 'POST',
        url: 'dbconnect.php',
        data: formData,
        success: function(response) {
            // Display the notification below the submit button
            $('#notification').show();

            // Hide the notification after 10 seconds
            setTimeout(function() {
                $('#notification').hide();
            }, 10000);
        },
        error: function(error) {
            console.log('Error:', error);
        }
    });
}
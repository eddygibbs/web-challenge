<?php
// Establish a database connection
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "messages";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Process form data
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitize and validate input
    $full_name = htmlspecialchars($_POST['full_name']);
    $email = filter_var($_POST['email'], FILTER_VALIDATE_EMAIL);
    $contact = preg_replace("/[^0-9]/", "", $_POST['contact']); // Remove non-numeric characters
    $association = htmlspecialchars($_POST['association']);
    $user_message = htmlspecialchars($_POST['user_message']);

    // Validate email
    if (!$email) {
        die("Invalid email format");
    }

    // Prepare SQL query using prepared statement
    $sql = $conn->prepare("INSERT INTO messages (full_name, email, contact, association, user_message)
                           VALUES (?, ?, ?, ?, ?)");

    $sql->bind_param("sssss", $full_name, $email, $contact, $association, $user_message);

    if ($sql->execute()) {
        // Echo a message to be captured by JavaScript
        echo '<script>var messageSent = true;</script>';
    } else {
        echo "Error: " . $sql->error;
    }

    // Close statement
    $sql->close();
}

// Close connection
$conn->close();
?>

<!DOCTYPE html>
<html>
<head>
    <!-- Include jQuery for the JavaScript -->
    <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>

    <!-- Your existing head content -->
    <!-- ... -->
</head>
<body>

    <!-- Your existing HTML content -->
    <!-- ... -->

    <!-- JavaScript to display a message -->
    <script>
        // Check if the messageSent variable is set (message was sent successfully)
        if (typeof messageSent !== 'undefined' && messageSent) {
            // Display a popup or a message on the page
            alert("Message sent successfully");
            // You can use a more sophisticated modal or notification library here if needed
        }
    </script>

</body>
</html>
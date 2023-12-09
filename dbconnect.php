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
    $full_name = $_POST['full_name'];
    $email = $_POST['email'];
    $contact = $_POST['contact'];
    $association = $_POST['association'];
    $user_message = $_POST['user_message'];

    // Prepare SQL query
    $sql = "INSERT INTO messages (full_name, email, contact, association, user_message)
    VALUES ('$full_name', '$email', '$contact', '$association', '$user_message')";

    if ($conn->query($sql) === TRUE) {
        echo "New record created successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

// Close connection
$conn->close();
?>
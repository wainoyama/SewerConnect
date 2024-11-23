<?php
if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $to = "your-email@example.com";
    $subject = "New Message from $name";
    $body = "Name: $name\nEmail: $email\nMessage: $message";

    if (mail($to, $subject, $body)) {
        echo "<script>
                alert('Thank you! Your message has been sent.');
                window.location.href = 'index.html';
              </script>";
    } else {
        echo "<script>
                alert('Sorry, there was an issue sending your message.');
                window.location.href = 'index.html';
              </script>";
    }
}
?>

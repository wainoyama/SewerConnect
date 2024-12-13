<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require '../PHPMailer-master/src/Exception.php';
require '../PHPMailer-master/src/PHPMailer.php';
require '../PHPMailer-master/src/SMTP.php';

function sendEmail($to, $subject, $message) {
    $mail = new PHPMailer(true);

    try {
        //Server settings
        $mail->isSMTP();
        $mail->Host       = 'smtp.gmail.com';
        $mail->SMTPAuth   = true;
        $mail->Username   = 'sewerconnect.system@gmail.com';
        $mail->Password   = 'vsnj slyq cktv mzgw'; 
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port       = 587;

        //Recipients
        $mail->setFrom('sewerconnect.system@gmail.com', 'Sewer Connect System');
        $mail->addAddress($to);

        //Content
        $mail->isHTML(false);
        $mail->Subject = $subject;
        $mail->Body    = $message;

        $mail->send();
        return true;
    } catch (Exception $e) {
        error_log("Email sending failed: " . $mail->ErrorInfo);
        return false;
    }
}

function bookSewer($customerName, $customerPhone, $customerEmail, $sewerName, $sewerEmail, $projectDate, $projectDescription) {
    $to = $sewerEmail;
    $subject = "Abiso: May Bagong Booking para sa Inyong Serbisyo";
    
    $message = "
Magandang araw, $sewerName,

Isang paalala mula sa aming sistema na may natanggap kayong bagong booking mula sa isang customer. Narito ang mga detalye ng proyekto:

Detalye ng Customer:
Pangalan: $customerName
Numero ng Telepono: $customerPhone
Email Address: $customerEmail

Inaasahang Petsa ng Pagtatapos: $projectDate
Paglalarawan ng Proyekto: $projectDescription

Maari mong kumpirmahin ang iyong pagtanggap sa proyekto sa pamamagitan ng direktang pakikipag-ugnayan sa iyong customer gamit ang mga impormasyong ibinigay.

Maraming salamat at patuloy kaming nagpapasalamat sa inyong serbisyo.

Lubos na gumagalang,
Sewer Connect
";

    return sendEmail($to, $subject, $message);
}

// Ensure we're outputting JSON
header('Content-Type: application/json');

// Handle form submission
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $customerName = $_POST["customerName"] ?? '';
    $customerPhone = $_POST["customerPhone"] ?? '';
    $customerEmail = $_POST["customerEmail"] ?? '';
    $sewerName = $_POST["sewerName"] ?? '';
    $sewerEmail = $_POST["sewerEmail"] ?? '';
    $projectDate = $_POST["projectDate"] ?? '';
    $projectDescription = $_POST["projectDescription"] ?? '';

    // Validate inputs
    if (empty($customerName) || empty($customerPhone) || empty($customerEmail) || 
        empty($sewerName) || empty($sewerEmail) || empty($projectDate) || empty($projectDescription)) {
        echo json_encode(["success" => false, "message" => "All fields are required."]);
        exit;
    }

    $result = bookSewer($customerName, $customerPhone, $customerEmail, $sewerName, $sewerEmail, $projectDate, $projectDescription);

    if ($result) {
        echo json_encode(["success" => true, "message" => "Booking successful. An email has been sent to the sewer."]);
    } else {
        echo json_encode(["success" => false, "message" => "Booking failed. Please try again later."]);
    }
} else {
    echo json_encode(["success" => false, "message" => "Invalid request method."]);
}
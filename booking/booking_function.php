<?php
header('Content-Type: application/json');
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Enable CORS
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    try {
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
            throw new Exception("All fields are required.");
        }

        $to = $sewerEmail;
        $subject = "Abiso: May Bagong Booking para sa Inyong Serbisyo";
        
        $message = "
        Magandang araw, $sewerName,

        Isang paalala mula sa aming sistema na may natanggap kayong bagong booking mula sa isang customer. Narito ang mga detalye ng proyekto:

        Detalye ng Customer:
        Pangalan: $customerName
        Numero ng Telepono: $customerPhone
        Email Address: $customerEmail

        Impormasyon Tungkol sa Proyekto:
        Inaasahang Petsa ng Pagtatapos: $projectDate
        Paglalarawan ng Proyekto: $projectDescription

        Maari mong kumpirmahin ang iyong pagtanggap sa proyekto sa pamamagitan ng direktang pakikipag-ugnayan sa iyong customer gamit ang mga impormasyong ibinigay.

        Maraming salamat at patuloy kaming nagpapasalamat sa inyong serbisyo.

        Lubos na gumagalang,
        SewerConnect System";

        $headers = "From: noreply@sewerconnect.com\r\n";
        $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

        if (mail($to, $subject, $message, $headers)) {
            echo json_encode([
                "success" => true,
                "message" => "Booking successful. The sewer has been notified."
            ]);
        } else {
            throw new Exception("Failed to send email notification.");
        }
    } catch (Exception $e) {
        http_response_code(500);
        echo json_encode([
            "success" => false,
            "message" => $e->getMessage()
        ]);
    }
} else {
    http_response_code(405);
    echo json_encode([
        "success" => false,
        "message" => "Method not allowed"
    ]);
}
?>
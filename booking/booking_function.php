<?php
header('Content-Type: application/json');

function bookSewer($sewerName, $sewerEmail) {
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $customerName = $_POST['customerName'] ?? '';
        $customerPhone = $_POST['customerPhone'] ?? '';
        $customerEmail = $_POST['customerEmail'] ?? '';
        $projectDate = $_POST['projectDate'] ?? '';
        $projectDescription = $_POST['projectDescription'] ?? '';

        // Validate inputs
        if (empty($customerName) || empty($customerPhone) || empty($customerEmail) || 
            empty($projectDate) || empty($projectDescription)) {
            return json_encode([
                'success' => false, 
                'message' => 'All fields are required.'
            ]);
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
        SewerConnect System
        ";

        $headers = "From: noreply@sewerconnect.com\r\n";
        $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

        if (mail($to, $subject, $message, $headers)) {
            return json_encode([
                'success' => true, 
                'message' => 'Booking successful. The sewer has been notified.'
            ]);
        } else {
            return json_encode([
                'success' => false, 
                'message' => 'Booking failed. Please try again later.'
            ]);
        }
    }
    
    return json_encode([
        'success' => false, 
        'message' => 'Invalid request method.'
    ]);
}
?>
<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
ini_set('log_errors', 1);
ini_set('error_log', 'php_errors.log');

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header('Access-Control-Allow-Headers: Content-Type');

$host = 'localhost';
$db   = 'sewerconnect';
$user = 'root';
$pass = '';

$conn = new mysqli($host, $user, $pass, $db);

try {
    if ($conn->connect_error) {
        throw new Exception('Connection failed: ' . $conn->connect_error);
    }

    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        if (!isset($_POST['sewerName']) || !isset($_POST['rating'])) {
            throw new Exception('Missing required parameters');
        }

        $sewerName = $conn->real_escape_string($_POST['sewerName']);
        $rating = intval($_POST['rating']);

        if ($rating < 1 || $rating > 5) {
            throw new Exception('Invalid rating value');
        }

        $stmt = $conn->prepare("INSERT INTO ratings (sewer_name, rating) VALUES (?, ?)");
        if (!$stmt) {
            throw new Exception('Prepare failed: ' . $conn->error);
        }

        $stmt->bind_param("si", $sewerName, $rating);

        if (!$stmt->execute()) {
            throw new Exception('Execute failed: ' . $stmt->error);
        }

        echo json_encode(['success' => true, 'message' => 'Rating submitted successfully']);
        $stmt->close();
    } elseif ($_SERVER['REQUEST_METHOD'] === 'GET') {
        if (!isset($_GET['sewerName'])) {
            throw new Exception('Missing sewerName parameter');
        }

        $sewerName = $conn->real_escape_string($_GET['sewerName']);

        $stmt = $conn->prepare("SELECT AVG(rating) as average_rating, COUNT(*) as total_ratings FROM ratings WHERE sewer_name = ?");
        if (!$stmt) {
            throw new Exception('Prepare failed: ' . $conn->error);
        }

        $stmt->bind_param("s", $sewerName);

        if (!$stmt->execute()) {
            throw new Exception('Execute failed: ' . $stmt->error);
        }

        $result = $stmt->get_result();
        $row = $result->fetch_assoc();

        echo json_encode([
            'success' => true,
            'averageRating' => round($row['average_rating'], 1),
            'totalRatings' => $row['total_ratings']
        ]);

        $stmt->close();
    } else {
        throw new Exception('Invalid request method');
    }
} catch (Exception $e) {
    error_log('Rating error: ' . $e->getMessage());
    echo json_encode(['success' => false, 'error' => $e->getMessage()]);
}

$conn->close();


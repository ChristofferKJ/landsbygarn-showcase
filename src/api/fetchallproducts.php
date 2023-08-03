<?php
// Replace these variables with your actual database credentials
$servername = "landsbygarn.dk.mysql";
$username = "landsbygarn_dklager";
$password = "ElvisPresley123";
$dbname = "landsbygarn_dklager";

// Create a connection to the MySQL database
$connection = mysqli_connect($servername, $username, $password, $dbname);

// Check if the connection was successful
if (!$connection) {
    die("Connection failed: " . mysqli_connect_error());
}

// Query to select all data from the "lager" table
$sql = "SELECT *
FROM lager l
INNER JOIN yarnshades y ON l.product_id = y.product_id";

// Execute the query
$result = mysqli_query($connection, $sql);

// Check if the query was successful
if ($result) {
    // Fetch the data and store it in an array
    $products = array();
    while ($row = mysqli_fetch_assoc($result)) {
        $products[] = $row;
    }

    // Convert the array to JSON format
    $json_data = json_encode($products);

    // Set the response content type to JSON
    header('Content-Type: application/json');

    // Output the JSON data
    echo $json_data;
} else {
    echo "Error: " . mysqli_error($connection);
}

// Close the connection
mysqli_close($connection);
?>

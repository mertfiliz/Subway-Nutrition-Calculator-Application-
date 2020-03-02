<?php
header("Access-Control-Allow-Origin: *");

// Connection to database
$conn = mysqli_connect('localhost', 'root', '','subway') or die(mysqli_error());

// Selecting database
$db = mysqli_select_db($conn,'subway') or die(mysqli_error()) or die(mysqli_error());

// Array for values
$response = array();

// Calling the dom.php
include('simple_html_dom.php');
// The website for nutritions.
$html = file_get_html('http://calorielab.com/restaurants/subway/6');


   // ID
    for ($i = 0; $i <= 34; $i++) {
        $e_id[$i]= $i;
    }

    // PRODUCT NAME -- Getting the product names from the website with dom.php
    $e = $html->find('table td.stub ');
    for ($i = 0; $i <= 34; $i++) {
        $e_urun_adi[$i]= htmlspecialchars_decode($e[$i+132]->plaintext);
    }

    // PRODUCT PROTEIN -- Getting the protein values from the website with dom.php
    $e = $html->find('table td.prot ');
    for ($i = 0; $i <=34; $i++) {
        $e_prot[$i]= htmlspecialchars_decode($e[$i+132]->plaintext);        
    }

    // PRODUCT CARB -- Getting the carb values from the website with dom.php
    $e = $html->find('table td.carb ');
    for ($i =0; $i <=34; $i++) {
        $e_carb[$i]= htmlspecialchars_decode($e[$i+132]->plaintext);
    }

    // PRODUCT FAT -- Getting the fat values from the website with dom.php
    $e = $html->find('table td.fat ');
    for ($i = 0; $i <= 34; $i++) {
        $e_fat[$i]= htmlspecialchars_decode($e[$i+132]->plaintext);
    }

     // PRODUCT PTS -- Getting the pts values from the website with dom.php
    $e = $html->find('table td.pts ');
    for ($i = 0; $i <= 34; $i++) {
        $e_pts[$i]= htmlspecialchars_decode($e[$i+132]->plaintext);
    }

    // PRODUCT CALS -- Getting the cals values from the website with dom.php
    $e = $html->find('table td.cals ');
    for ($i = 0; $i <= 34; $i++) {
        $e_cals[$i]= htmlspecialchars_decode($e[$i+132]->plaintext);
    }

 // This is for inserting data. We are running only once. Because we are going to update later. 
   
 /*
    for ($i = 0; $i <= 34; $i++) {
        $sqlInsert = "INSERT INTO ekstralar (id, urun_adi, protein, carb, fat, potasium, calories) VALUES 
            ('$e_id[$i]','$e_urun_adi[$i] ',' $e_prot[$i]','$e_carb[$i]','$e_fat[$i]','$e_pts[$i]','$e_cals[$i]')"; 
        mysqli_query($conn, $sqlInsert);
    }
    */

    // UPDATE FUNCTION
    for ($i = 0; $i <= 34; $i++) {
        mysqli_query($conn, "UPDATE ekstralar SET protein = '$e_prot[$i] ', carb = '$e_carb[$i] ', fat = '$e_fat[$i] ', potasium = '$e_pts[$i] ', calories = '$e_cals[$i] ', urun_adi = '$e_urun_adi[$i] ' WHERE id='$e_id[$i] '");
    }

//RETRIEVE DATA FROM DATABASE
$result = mysqli_query($conn,"select *from ekstralar");

if (mysqli_num_rows($result) > 0) {
    while ($row = mysqli_fetch_array($result)) {

    $response[] = array(
        "e_id" => $row["id"],
        "e_urun_adi" => $row["urun_adi"],
        "e_protein" => $row["protein"],
        "e_carb" => $row["carb"],
        "e_fat" => $row["fat"],
        "e_pts" => $row["potasium"],
        "e_calories" => $row["calories"],        
            // print_r($row);
        );
    }
    echo json_encode($response);
}



?>

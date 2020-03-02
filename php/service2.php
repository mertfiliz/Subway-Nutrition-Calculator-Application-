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
// The website for images.
$html_img = file_get_html('http://www.subway.com/en-us/menunutrition/menu/salads');

    // ID
    for ($i = 0; $i <= 10; $i++) {
        $s_id[$i]= $i;
    }

    // PRODUCT NAME -- Getting the product names from the website with dom.php
    $e = $html->find('table td.stub ');
    for ($i = 0; $i <= 10; $i++) {
        $s_urun_adi[$i]= htmlspecialchars_decode($e[$i+84]->plaintext);
    }

    // PRODUCT PROTEIN -- Getting the protein values from the website with dom.php
    $e = $html->find('table td.prot ');
    for ($i = 0; $i <= 10; $i++) {
        $s_prot[$i]= htmlspecialchars_decode($e[$i+84]->plaintext);
    }

    // PRODUCT CARB -- Getting the carb values from the website with dom.php
    $e = $html->find('table td.carb ');
    for ($i =0; $i <= 10; $i++) {
        $s_carb[$i]= htmlspecialchars_decode($e[$i+84]->plaintext);
    }

    // PRODUCT FAT -- Getting the fat values from the website with dom.php
    $e = $html->find('table td.fat ');
    for ($i = 0; $i <= 10; $i++) {
        $s_fat[$i]= htmlspecialchars_decode($e[$i+84]->plaintext);
    }

    // PRODUCT PTS -- Getting the pts values from the website with dom.php
    $e = $html->find('table td.pts ');
    for ($i = 0; $i <= 10; $i++) {
        $s_pts[$i]= htmlspecialchars_decode($e[$i+84]->plaintext);
    }

    // PRODUCT CALS -- Getting the cals values from the website with dom.php
    $e = $html->find('table td.cals ');
    for ($i = 0; $i <= 10; $i++) {
        $s_cals[$i]= htmlspecialchars_decode($e[$i+84]->plaintext);
    }

    // PRODUCT IMAGES -- Getting the product images from the website with dom.php
    $e = $html_img->find('.menu-category-type');
    $full = 'http://www.subway.com';
    for($i=0; $i <= 10; $i++) {
        $s_link[$i] = $full . $e[0]->find('img',$i)->src;
    }  
 


// This is for inserting data. We are running only once. Because we are going to update later. 
 /*
    for ($i = 0; $i <= 10; $i++) {
        $sqlInsert2 = "INSERT INTO salatalar (id, urun_adi, protein, carb, fat, potasium, calories, gorsel) VALUES 
            ('$s_id[$i]','$s_urun_adi[$i] ',' $s_prot[$i]','$s_carb[$i]','$s_fat[$i]','$s_pts[$i]','$s_cals[$i]', '$s_link[$i]')"; 
        mysqli_query($conn, $sqlInsert2);
    } 
 */

//UPDATE FUNCTION 
 
    for ($i = 0; $i <= 10; $i++) {
        mysqli_query($conn, "UPDATE salatalar SET  protein = '$s_prot[$i] ', carb = '$s_carb[$i] ', fat = '$s_fat[$i] ', potasium = '$s_pts[$i] ', calories = '$s_cals[$i] ', urun_adi = '$s_urun_adi[$i] ', gorsel = '$s_link[$i]' WHERE id='$s_id[$i] '");
    } 


//RETRIEVE DATA FROM DATABASE
$result = mysqli_query($conn,"select *from salatalar");

if (mysqli_num_rows($result) > 0) {
    while ($row = mysqli_fetch_array($result)) {

    $response[] = array(
        "s_id" => $row["id"],
        "s_urun_adi" => $row["urun_adi"],
        "s_protein" => $row["protein"],
        "s_carb" => $row["carb"],
        "s_fat" => $row["fat"],
        "s_pts" => $row["potasium"],
        "s_calories" => $row["calories"],
        "s_gorsel" => $row["gorsel"]
            // print_r($row);
        );
    }
    echo json_encode($response);
}



?>

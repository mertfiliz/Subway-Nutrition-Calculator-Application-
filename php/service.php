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
$html_img = file_get_html('http://www.subway.com/en-us/menunutrition/menu/all');


// ID
for ($i = 0; $i < 15; $i++) {
    $id[$i]= $i;
}

// PRODUCT NAME -- Getting the product names from the website with dom.php
$e = $html->find('table td.stub ');
for ($i = 0; $i < 15; $i++) {
    $urun_adi[$i]= htmlspecialchars_decode($e[$i]->plaintext); 
}

// PRODUCT PROTEIN -- Getting the protein values from the website with dom.php
$e = $html->find('table td.prot ');
for ($i = 0; $i < 15; $i++) {
    $prot[$i]= htmlspecialchars_decode($e[$i]->plaintext);        
}

// PRODUCT CARB -- Getting the carb values from the website with dom.php
$e = $html->find('table td.carb ');
for ($i = 0; $i < 15; $i++) {
    $carb[$i]= htmlspecialchars_decode($e[$i]->plaintext);
}

// PRODUCT FAT -- Getting the fat values from the website with dom.php
$e = $html->find('table td.fat ');
for ($i = 0; $i < 15; $i++) {
    $fat[$i]= htmlspecialchars_decode($e[$i]->plaintext);
}

// PRODUCT PTS -- Getting the pts values from the website with dom.php
$e = $html->find('table td.pts ');
for ($i = 0; $i < 15; $i++) {
    $pts[$i]= htmlspecialchars_decode($e[$i]->plaintext);
}

// PRODUCT CALS -- Getting the cals values from the website with dom.php
$e = $html->find('table td.cals ');
for ($i = 0; $i < 15; $i++) {
    $cals[$i]= htmlspecialchars_decode($e[$i]->plaintext);
}

// PRODUCT IMAGES -- Getting the product images from the website with dom.php
$e = $html_img->find('.menu-category-type');
$full = 'http://www.subway.com';
for($i=0; $i < 15; $i++) {
    $link[$i] = $full . $e[0]->find('img',$i)->src;
}  


// This is for inserting data. We are running only once. Because we are going to update later. 

/*
for ($i = 0; $i < 15; $i++) {
    $sqlInsert = "INSERT INTO sandvicler (id, urun_adi, protein, carb, fat, potasium, calories, gorsel) VALUES 
        ('$id[$i]','$urun_adi[$i] ',' $prot[$i]','$carb[$i]','$fat[$i]','$pts[$i]','$cals[$i]', '$link[$i]')"; 
    mysqli_query($conn, $sqlInsert);
} 
*/



//UPDATE FUNCTION

for ($i = 0; $i < 15; $i++) {
    mysqli_query($conn, "UPDATE sandvicler SET protein = '$prot[$i] ', carb = '$carb[$i] ', fat = '$fat[$i] ', potasium = '$pts[$i] ', calories = '$cals[$i] ', urun_adi = '$urun_adi[$i] ', gorsel = '$link[$i]' WHERE id='$id[$i] '");
} 


//RETRIEVE DATA FROM DATABASE
$result = mysqli_query($conn,"select *from sandvicler");

if (mysqli_num_rows($result) > 0) {
    while ($row = mysqli_fetch_array($result)) {

    $response[] = array(
        "id" => $row["id"],
        "urun_adi" => $row["urun_adi"],
        "protein" => $row["protein"],
        "carb" => $row["carb"],
        "fat" => $row["fat"],
        "pts" => $row["potasium"],
        "calories" => $row["calories"],
        "gorsel" => $row["gorsel"]
            // print_r($row);
        );
    }

    echo json_encode($response);
}

?>

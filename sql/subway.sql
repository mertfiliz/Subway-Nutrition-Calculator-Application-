-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Anamakine: 127.0.0.1
-- Üretim Zamanı: 10 May 2018, 19:46:53
-- Sunucu sürümü: 10.1.22-MariaDB
-- PHP Sürümü: 7.1.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Veritabanı: `subway`
--

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `ekstralar`
--

CREATE TABLE `ekstralar` (
  `id` int(11) NOT NULL,
  `urun_adi` text NOT NULL,
  `calories` text NOT NULL,
  `carb` text NOT NULL,
  `fat` text NOT NULL,
  `potasium` text NOT NULL,
  `protein` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Tablo döküm verisi `ekstralar`
--

INSERT INTO `ekstralar` (`id`, `urun_adi`, `calories`, `carb`, `fat`, `potasium`, `protein`) VALUES
(0, ' 6\" Honey Oat   ', '	250 ', '	48 ', '	3.5 ', '	4.5 ', '	10 '),
(1, ' 6\" Italian &#40;White&#41; Bread   ', '	190 ', '	38 ', '	2.5 ', '	4 ', '	7 '),
(2, ' 6\" Italian Herbs & Cheese   ', '	240 ', '	40 ', '	6 ', '	5 ', '	10 '),
(3, ' 6\" Monterey Cheddar   ', '	240 ', '	39 ', '	6 ', '	5 ', '	10 '),
(4, ' 6\" Parmesan Oregano Bread   ', '	210 ', '	40 ', '	3.5 ', '	4.5 ', '	8 '),
(5, ' 6\" Roasted Garlic   ', '	230 ', '	45 ', '	3 ', '	4.5 ', '	8 '),
(6, ' 6\" Sourdough Bread   ', '	210 ', '	41 ', '	3 ', '	4 ', '	8 '),
(7, ' 6\" Wheat Bread   ', '	200 ', '	40 ', '	2.5 ', '	4 ', '	8 '),
(8, ' Atkins&#45;Friendly Wrap   ', '	120 ', '	13 ', '	4.5 ', '	2 ', '	14 '),
(9, ' Deli Style Roll   ', '	170 ', '	32 ', '	2.5 ', '	3 ', '	6 '),
(10, ' Bacon   ', '	45 ', '	0 ', '	3.5 ', '	1.5 ', '	3 '),
(11, ' Cheddar Cheese   ', '	60 ', '	0 ', '	5 ', '	2 ', '	4 '),
(12, ' Light Mayonnaise   ', '	50 ', '	1 ', '	5 ', '	1.5 ', '	0 '),
(13, ' Mayonnaise   ', '	110 ', '	0 ', '	12 ', '	3.5 ', '	0 '),
(14, ' Mustard, Yellow & Deli Brown   ', '	5 ', '	1 ', '	0 ', '	0.5 ', '	0 '),
(15, ' Olive Oil Blend   ', '	45 ', '	0 ', '	5 ', '	1.5 ', '	0 '),
(16, ' Pepperjack Cheese   ', '	50 ', '	0 ', '	4 ', '	1.5 ', '	2 '),
(17, ' Processed American Cheese   ', '	40 ', '	1 ', '	3.5 ', '	1.5 ', '	2 '),
(18, ' Provolone Cheese   ', '	50 ', '	0 ', '	4 ', '	1.5 ', '	4 '),
(19, ' Ranch &#40;amount on wrap&#41;   ', '	70 ', '	0 ', '	8 ', '	2.5 ', '	0 '),
(20, ' Shredded Monterey Blend   ', '	50 ', '	1 ', '	4.5 ', '	1.5 ', '	3 '),
(21, ' Swiss Cheese   ', '	50 ', '	0 ', '	4.5 ', '	1.5 ', '	4 '),
(22, ' Vinegar   ', '	0 ', '	0 ', '	0 ', '	0 ', '	0 '),
(23, ' Chipotle Southwest   ', '	100 ', '	1 ', '	10 ', '	3 ', '	0 '),
(24, ' Fat Free Honey Mustard   ', '	30 ', '	7 ', '	0 ', '	1 ', '	0 '),
(25, ' Fat Free Sweet Onion   ', '	40 ', '	9 ', '	0 ', '	1 ', '	0 '),
(26, ' Banana Peppers   ', '	0 ', '	0 ', '	0 ', '	0 ', '	0 '),
(27, ' Cucumbers   ', '	0 ', '	0 ', '	0 ', '	0 ', '	0 '),
(28, ' Green Peppers   ', '	0 ', '	0 ', '	0 ', '	0 ', '	0 '),
(29, ' Jalapeno Peppers   ', '	0 ', '	0 ', '	0 ', '	0 ', '	0 '),
(30, ' Lettuce   ', '	0 ', '	0 ', '	0 ', '	0 ', '	0 '),
(31, ' Olives   ', '	0 ', '	0 ', '	0 ', '	0 ', '	0 '),
(32, ' Onions   ', '	5 ', '	1 ', '	0 ', '	0.5 ', '	0 '),
(33, ' Pickles   ', '	0 ', '	0 ', '	0 ', '	0 ', '	0 '),
(34, ' Tomato   ', '	5 ', '	2 ', '	0 ', '	0.5 ', '	0 ');

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `salatalar`
--

CREATE TABLE `salatalar` (
  `id` int(11) NOT NULL,
  `urun_adi` text NOT NULL,
  `protein` text NOT NULL,
  `carb` text NOT NULL,
  `fat` text NOT NULL,
  `potasium` text NOT NULL,
  `calories` text NOT NULL,
  `gorsel` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Tablo döküm verisi `salatalar`
--

INSERT INTO `salatalar` (`id`, `urun_adi`, `protein`, `carb`, `fat`, `potasium`, `calories`, `gorsel`) VALUES
(0, ' BMT   ', '	17 ', '	15 ', '	19 ', '	7 ', '	290 ', 'http://www.subway.com/ns/images/menu/USA/ENG/menu-category-salads-veggiedelite.jpg'),
(1, ' Cold Cut Combo   ', '	15 ', '	14 ', '	15 ', '	5.5 ', '	250 ', 'http://www.subway.com/ns/images/menu/USA/ENG/menu-category-salads.jpg'),
(2, ' Grilled Chicken Breast & Baby Spinach  (Chicken breast strips, baby spinach, red onions, tomatoes, cucumbers, peppers, olives and carrots)    ', '	20 ', '	11 ', '	3 ', '	2.5 ', '	140 ', 'http://www.subway.com/ns/images/menu/USA/ENG/menu-category-salads.jpg'),
(3, ' Grilled Chicken Breast Strips   ', '	19 ', '	12 ', '	3 ', '	2.5 ', '	140 ', 'http://www.subway.com/ns/images/menu/USA/ENG/menu-category-salads.jpg'),
(4, ' Ham   ', '	12 ', '	15 ', '	3 ', '	2 ', '	120 ', 'http://www.subway.com/ns/images/menu/USA/ENG/menu-category-salads.jpg'),
(5, ' Roast Beef   ', '	13 ', '	13 ', '	3.5 ', '	2.5 ', '	130 ', 'http://www.subway.com/ns/images/menu/USA/ENG/menu-category-salads.jpg'),
(6, ' Subway Club  (Roast beef, turkey, ham, chopped lettuce, baby spinach, red onions, tomatoes, cucumbers, peppers, olives and carrots)    ', '	18 ', '	15 ', '	4 ', '	3 ', '	160 ', 'http://www.subway.com/ns/images/menu/USA/ENG/menu-category-salads.jpg'),
(7, ' Turkey Breast   ', '	12 ', '	14 ', '	2.5 ', '	2 ', '	120 ', 'http://www.subway.com/ns/images/menu/USA/ENG/menu-category-salads.jpg'),
(8, ' Turkey Breast & Ham   ', '	14 ', '	15 ', '	3 ', '	2.5 ', '	130 ', 'http://www.subway.com/ns/images/menu/USA/ENG/menu-category-salads.jpg'),
(9, ' Veggie Delite  (Chopped lettuce, baby spinach, red onions, tomatoes, cucumbers, peppers, olives and carrots)    ', '	3 ', '	12 ', '	1 ', '	0.5 ', '	60 ', 'http://www.subway.com/ns/images/menu/USA/ENG/menu-category-salads.jpg'),
(10, ' Atkins Sweet as Honey Mustard   ', '	1 ', '	1 ', '	22 ', '	6 ', '	200 ', 'http://www.subway.com/ns/images/menu/USA/ENG/menu-category-salads.jpg');

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `sandvicler`
--

CREATE TABLE `sandvicler` (
  `id` int(11) NOT NULL,
  `protein` int(11) NOT NULL,
  `carb` int(11) NOT NULL,
  `fat` int(11) NOT NULL,
  `potasium` int(11) NOT NULL,
  `calories` int(11) NOT NULL,
  `urun_adi` text NOT NULL,
  `gorsel` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Tablo döküm verisi `sandvicler`
--

INSERT INTO `sandvicler` (`id`, `protein`, `carb`, `fat`, `potasium`, `calories`, `urun_adi`, `gorsel`) VALUES
(0, 18, 47, 5, 6, 290, ' 6\" Ham  (Sliced ham and standard vegetables)    ', 'http://www.subway.com/ns/images/menu/USA/ENG/menu-category-sandwich-BlackForestHam.jpg'),
(1, 24, 47, 5, 7, 330, ' 6\" Oven Roasted Chicken Breast  (Boneless roasted chicken breast patty and standard vegetables)    ', 'http://www.subway.com/ns/images/menu/USA/ENG/allsandiwhces_cbrm_PT.jpg'),
(2, 19, 45, 5, 6, 290, ' 6\" Roast Beef  (Sliced roast beef and standard vegetables)    ', 'http://www.subway.com/ns/images/menu/USA/ENG/allsandiwhces_coldcut_PT.jpg'),
(3, 24, 47, 6, 7, 320, ' 6\" Subway Club  (Sliced turkey breast, roast beef, ham and standard vegetables)    ', 'http://www.subway.com/ns/images/menu/USA/ENG/W2B_Subway.com_Silos_ProductMenu_234x140_BMT_PT.jpg'),
(4, 26, 59, 5, 8, 370, ' 6\" Sweet Onion Chicken Teriyaki  (Teriyaki glazed chicken strips, lettuce, tomatoes, red onions, green peppers, olives and sweet onion sauce)    ', 'http://www.subway.com/ns/images/menu/USA/ENG/W2B_Subway.com_Silos_ProductMenu_234x140_Meatball_PT.jpg'),
(5, 18, 46, 5, 6, 280, ' 6\" Turkey Breast  (Sliced turkey breast and standard vegetables)    ', 'http://www.subway.com/ns/images/menu/USA/ENG/menu-category-sandwich-OvenRoastChicken.jpg'),
(6, 20, 47, 5, 6, 290, ' 6\" Turkey Breast & Ham  (Sliced turkey breast and ham and standard vegetables)    ', 'http://www.subway.com/ns/images/menu/USA/ENG/menu-category-sandwich-RoastBeef.jpg'),
(7, 9, 44, 3, 5, 230, ' 6\" Veggie Delite  (Standard vegetables)    ', 'http://www.subway.com/ns/images/menu/USA/ENG/menu-category-sandwich-RotisserieChicken.jpg'),
(8, 21, 47, 17, 9, 410, ' 6\" Cold Cut Combo  (Cold)    ', 'http://www.subway.com/ns/images/menu/USA/ENG/menu-category-sandwich-spcyital.jpg'),
(9, 22, 45, 31, 13, 530, ' 6\" Tuna  (Cold)    ', 'http://www.subway.com/ns/images/menu/USA/ENG/W2_Subway.com_Silo_Steak-Cheese_6In_234-140_PT.jpg'),
(10, 11, 36, 4, 4, 210, ' Ham Deli   ', 'http://www.subway.com/ns/images/menu/USA/ENG/menu-category-sandwich-SubwayClub.jpg'),
(11, 13, 35, 5, 5, 220, ' Roast Beef Deli   ', 'http://www.subway.com/ns/images/menu/USA/ENG/menu-category-sandwich-SweetOnionChickenTeriyaki.jpg'),
(12, 14, 35, 18, 8, 350, ' Tuna Deli   ', 'http://www.subway.com/ns/images/menu/USA/ENG/W2B_Subway.com_Silos_ProductMenu_234x140_Tuna_PT.jpg'),
(13, 13, 36, 4, 4, 210, ' Turkey Breast Deli   ', 'http://www.subway.com/ns/images/menu/USA/ENG/menu-category-sandwich-TurkeyBreast.jpg'),
(14, 24, 47, 10, 8, 360, ' 6\" Toasted Cheese Steak  (Hot steak, melted cheese and standard vegetables)    ', 'http://www.subway.com/ns/images/menu/USA/ENG/menu-category-sandwich-VeggieDelite.jpg');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

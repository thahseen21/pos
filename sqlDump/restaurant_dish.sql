-- MySQL dump 10.13  Distrib 8.0.22, for macos10.15 (x86_64)
--
-- Host: localhost    Database: restaurant
-- ------------------------------------------------------
-- Server version	8.0.24

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `dish`
--

DROP TABLE IF EXISTS `dish`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dish` (
  `id` int NOT NULL AUTO_INCREMENT,
  `cat_id` int NOT NULL,
  `dish_name` varchar(25) NOT NULL,
  `price` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `dish_cat_fk_idx` (`cat_id`),
  CONSTRAINT `dish_cat_fk` FOREIGN KEY (`cat_id`) REFERENCES `category` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dish`
--

LOCK TABLES `dish` WRITE;
/*!40000 ALTER TABLE `dish` DISABLE KEYS */;
INSERT INTO `dish` VALUES (1,1,'Mayonnaise',30),(2,1,'Tender Coconut Pudding',15),(3,1,'Arabian Grape Juice 1 Ltr',180),(4,2,'Shawarma Roll',120),(5,2,'Spl Shawarma Roll',160),(6,2,'Mexican Shawarma Roll',130),(7,2,'Mexican Shawarma Plate',140),(8,2,'Italian Shawarma',160),(9,2,'Chicken Tikka Roll',150),(10,2,'Chicken Seekh Roll',170),(11,2,'Shawarma Plate',170),(12,3,'Afghani BBQ Chicken',260),(13,3,'Malay BBQ Chicken',150),(14,3,'Alfaham Dajaj',150),(15,3,'Pepper BBQ',150),(16,3,'Grill Chicken',150),(17,3,'BBQ Chicken',150),(18,3,'BBQ Fish',290),(19,4,'Tandoori Chicken',230),(20,4,'Chicken Seekh',230),(21,4,'Chicken Tikka',230),(22,4,'Malay Chicken Tikka',230),(23,4,'Hariyali Chicken Tikka',230),(24,4,'Kali Mirch Tikka',230),(25,4,'Achari Chicken Tikka',230),(26,4,'Chicken Tangdi Kebab',230),(27,4,'Chicken Reshmi Kebab',230),(28,4,'Chicken Kalmi Kebab',230),(29,5,'Paneer Tikka',200),(30,6,'Chicken Biriyani',15),(31,6,'Special Chicken Biriyani',130),(32,6,'Mutton Biriyani',330),(33,6,'Egg Biriyani',180),(34,6,'Chicken Tikka Biriyani',130),(35,6,'Fish Biriyani',120);
/*!40000 ALTER TABLE `dish` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-08-22 22:39:27

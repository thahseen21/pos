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
-- Table structure for table `order_map`
--

DROP TABLE IF EXISTS `order_map`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order_map` (
  `id` int NOT NULL AUTO_INCREMENT,
  `order_id` int NOT NULL,
  `dish_id` int NOT NULL,
  `count` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `order_dish_fk_idx` (`dish_id`),
  KEY `order_order_fk_idx` (`order_id`),
  CONSTRAINT `order_dish_fk` FOREIGN KEY (`dish_id`) REFERENCES `dish` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `order_order_fk` FOREIGN KEY (`order_id`) REFERENCES `order` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=115 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_map`
--

LOCK TABLES `order_map` WRITE;
/*!40000 ALTER TABLE `order_map` DISABLE KEYS */;
INSERT INTO `order_map` VALUES (1,1,2,3),(5,1,4,2),(6,13,4,2),(7,13,7,2),(8,13,7,2),(9,14,5,1),(10,14,7,1),(11,14,12,1),(12,44,12,1),(13,45,12,1),(14,46,12,1),(15,47,12,1),(16,48,22,1),(17,49,22,1),(18,45,22,1),(19,45,22,1),(20,50,22,1),(21,54,1,0),(22,55,3,0),(23,56,2,0),(24,57,15,0),(25,58,1,0),(26,59,2,0),(27,60,2,0),(28,61,3,0),(29,62,3,0),(30,63,3,0),(31,64,2,0),(32,65,3,0),(33,66,2,0),(34,67,2,0),(35,68,2,0),(36,69,3,0),(37,70,2,0),(38,71,2,0),(39,72,3,0),(40,73,3,0),(41,74,2,0),(42,75,2,0),(43,76,3,0),(44,76,2,0),(45,76,35,0),(46,77,3,0),(47,77,2,0),(48,77,1,0),(49,78,3,0),(50,78,2,0),(51,79,3,0),(52,79,2,0),(53,80,3,0),(54,80,2,0),(55,81,3,0),(56,81,2,0),(57,82,3,0),(58,82,2,0),(59,82,1,0),(60,83,3,0),(61,83,2,0),(62,84,3,0),(63,84,3,0),(64,84,2,0),(65,85,3,0),(66,85,2,0),(67,85,1,0),(68,86,3,0),(69,87,3,0),(70,88,3,0),(71,88,2,0),(72,89,3,0),(73,89,27,0),(74,90,25,0),(75,90,21,0),(76,90,20,0),(77,90,24,0),(78,91,3,0),(79,92,3,4),(80,92,2,2),(81,93,2,1),(82,94,3,1),(83,95,3,1),(84,95,2,1),(85,96,3,3),(86,96,3,3),(87,97,2,7),(88,98,2,0),(89,99,3,1),(90,99,2,1),(91,99,6,3),(92,99,5,3),(93,100,19,1),(94,100,20,4),(95,101,22,1),(96,101,22,1),(97,101,3,1),(98,101,2,5),(99,102,3,1),(100,103,3,1),(101,103,2,1),(102,104,3,2),(103,104,2,2),(104,105,4,1),(105,105,5,1),(106,105,9,0),(107,106,34,1),(108,106,30,1),(109,106,35,1),(110,107,1,1),(111,107,2,1),(112,108,4,1),(113,108,5,1),(114,108,6,4);
/*!40000 ALTER TABLE `order_map` ENABLE KEYS */;
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

-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 16, 2024 at 08:53 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.0.28

CREATE DATABASE icons_database;

USE icons_database;


SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `icons1`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_accounts`
--

CREATE TABLE `tbl_accounts` (
  `id` int(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `recovery_email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_comments`
--

CREATE TABLE `tbl_comments` (
  `id` int(255) NOT NULL,
  `comment` varchar(255) NOT NULL,
  `community_post_fkid` int(255) NOT NULL,
  `account_fkid` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_community_post`
--

CREATE TABLE `tbl_community_post` (
  `id` int(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `author` varchar(255) NOT NULL,
  `content` varchar(255) NOT NULL,
  `timestamp` timestamp(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6),
  `account_fkid` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_conversation`
--

CREATE TABLE `tbl_conversation` (
  `id` int(255) NOT NULL,
  `message_content` int(255) NOT NULL,
  `timestamp` timestamp(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6),
  `message_fkid` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_engagement`
--

CREATE TABLE `tbl_engagement` (
  `id` int(255) NOT NULL,
  `is_liked` tinyint(1) NOT NULL,
  `is_disliked` tinyint(1) NOT NULL,
  `community_post_fkid` int(255) NOT NULL,
  `accounts_fkid` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_gallery`
--

CREATE TABLE `tbl_gallery` (
  `id` int(255) NOT NULL,
  `timestamp` timestamp(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6),
  `image` longblob NOT NULL,
  `description` varchar(255) NOT NULL,
  `account_fkid` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_home_contents`
--

CREATE TABLE `tbl_home_contents` (
  `id` int(255) NOT NULL,
  `type` int(255) NOT NULL,
  `title` int(255) NOT NULL,
  `content` int(255) NOT NULL,
  `image` int(255) NOT NULL,
  `account_fkid` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_message`
--

CREATE TABLE `tbl_message` (
  `id` int(255) NOT NULL,
  `room` varchar(255) NOT NULL,
  `account_fkid` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_profile`
--

CREATE TABLE `tbl_profile` (
  `id` int(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `location` varchar(255) NOT NULL,
  `photo` longblob NOT NULL,
  `account_fkid` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_services`
--

CREATE TABLE `tbl_services` (
  `id` int(255) NOT NULL,
  `name_of_service` varchar(255) NOT NULL,
  `profile_fkid` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_startup_info`
--

CREATE TABLE `tbl_startup_info` (
  `id` int(255) NOT NULL,
  `name` int(255) NOT NULL,
  `description` int(255) NOT NULL,
  `link` int(255) NOT NULL,
  `profile_fkid` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_accounts`
--
ALTER TABLE `tbl_accounts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_comments`
--
ALTER TABLE `tbl_comments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `community_post_fkid` (`community_post_fkid`),
  ADD KEY `account_fkid` (`account_fkid`);

--
-- Indexes for table `tbl_community_post`
--
ALTER TABLE `tbl_community_post`
  ADD PRIMARY KEY (`id`),
  ADD KEY `account_fkid` (`account_fkid`);

--
-- Indexes for table `tbl_conversation`
--
ALTER TABLE `tbl_conversation`
  ADD PRIMARY KEY (`id`),
  ADD KEY `message_fkid` (`message_fkid`);

--
-- Indexes for table `tbl_engagement`
--
ALTER TABLE `tbl_engagement`
  ADD PRIMARY KEY (`id`),
  ADD KEY `community_post_fkid` (`community_post_fkid`),
  ADD KEY `accounts_fkid` (`accounts_fkid`);

--
-- Indexes for table `tbl_gallery`
--
ALTER TABLE `tbl_gallery`
  ADD PRIMARY KEY (`id`),
  ADD KEY `account_fkid` (`account_fkid`);

--
-- Indexes for table `tbl_home_contents`
--
ALTER TABLE `tbl_home_contents`
  ADD PRIMARY KEY (`id`),
  ADD KEY `account_fkid` (`account_fkid`);

--
-- Indexes for table `tbl_message`
--
ALTER TABLE `tbl_message`
  ADD PRIMARY KEY (`id`),
  ADD KEY `account_fkid` (`account_fkid`);

--
-- Indexes for table `tbl_profile`
--
ALTER TABLE `tbl_profile`
  ADD PRIMARY KEY (`id`),
  ADD KEY `account_fkid` (`account_fkid`);

--
-- Indexes for table `tbl_services`
--
ALTER TABLE `tbl_services`
  ADD PRIMARY KEY (`id`),
  ADD KEY `profile_fkid` (`profile_fkid`);

--
-- Indexes for table `tbl_startup_info`
--
ALTER TABLE `tbl_startup_info`
  ADD PRIMARY KEY (`id`),
  ADD KEY `profile_fkid` (`profile_fkid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_accounts`
--
ALTER TABLE `tbl_accounts`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tbl_comments`
--
ALTER TABLE `tbl_comments`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tbl_community_post`
--
ALTER TABLE `tbl_community_post`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tbl_conversation`
--
ALTER TABLE `tbl_conversation`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tbl_engagement`
--
ALTER TABLE `tbl_engagement`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tbl_gallery`
--
ALTER TABLE `tbl_gallery`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tbl_home_contents`
--
ALTER TABLE `tbl_home_contents`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tbl_message`
--
ALTER TABLE `tbl_message`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tbl_profile`
--
ALTER TABLE `tbl_profile`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tbl_services`
--
ALTER TABLE `tbl_services`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tbl_startup_info`
--
ALTER TABLE `tbl_startup_info`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `tbl_comments`
--
ALTER TABLE `tbl_comments`
  ADD CONSTRAINT `tbl_comments_ibfk_1` FOREIGN KEY (`account_fkid`) REFERENCES `tbl_accounts` (`id`),
  ADD CONSTRAINT `tbl_comments_ibfk_2` FOREIGN KEY (`community_post_fkid`) REFERENCES `tbl_community_post` (`id`);

--
-- Constraints for table `tbl_community_post`
--
ALTER TABLE `tbl_community_post`
  ADD CONSTRAINT `tbl_community_post_ibfk_1` FOREIGN KEY (`account_fkid`) REFERENCES `tbl_accounts` (`id`);

--
-- Constraints for table `tbl_conversation`
--
ALTER TABLE `tbl_conversation`
  ADD CONSTRAINT `tbl_conversation_ibfk_1` FOREIGN KEY (`message_fkid`) REFERENCES `tbl_message` (`id`);

--
-- Constraints for table `tbl_engagement`
--
ALTER TABLE `tbl_engagement`
  ADD CONSTRAINT `tbl_engagement_ibfk_1` FOREIGN KEY (`community_post_fkid`) REFERENCES `tbl_community_post` (`id`),
  ADD CONSTRAINT `tbl_engagement_ibfk_2` FOREIGN KEY (`accounts_fkid`) REFERENCES `tbl_accounts` (`id`);

--
-- Constraints for table `tbl_home_contents`
--
ALTER TABLE `tbl_home_contents`
  ADD CONSTRAINT `tbl_home_contents_ibfk_1` FOREIGN KEY (`account_fkid`) REFERENCES `tbl_accounts` (`id`);

--
-- Constraints for table `tbl_message`
--
ALTER TABLE `tbl_message`
  ADD CONSTRAINT `tbl_message_ibfk_1` FOREIGN KEY (`account_fkid`) REFERENCES `tbl_accounts` (`id`);

--
-- Constraints for table `tbl_profile`
--
ALTER TABLE `tbl_profile`
  ADD CONSTRAINT `tbl_profile_ibfk_1` FOREIGN KEY (`account_fkid`) REFERENCES `tbl_accounts` (`id`);

--
-- Constraints for table `tbl_services`
--
ALTER TABLE `tbl_services`
  ADD CONSTRAINT `tbl_services_ibfk_1` FOREIGN KEY (`profile_fkid`) REFERENCES `tbl_profile` (`id`);

--
-- Constraints for table `tbl_startup_info`
--
ALTER TABLE `tbl_startup_info`
  ADD CONSTRAINT `tbl_startup_info_ibfk_1` FOREIGN KEY (`profile_fkid`) REFERENCES `tbl_profile` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

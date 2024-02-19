CREATE DATABASE icons;
USE icons;

CREATE TABLE `tbl_role` (
  `id` int NOT NULL AUTO_INCREMENT,
  `role` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE `tbl_account` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `recovery_email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `timestamp` timestamp(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6),
  `role_fkid` int NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`role_fkid`) REFERENCES `tbl_role`(`id`)
);

CREATE TABLE `tbl_profile` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `location` varchar(255) NOT NULL,
  `photo` longblob NOT NULL,
  `timestamp` timestamp(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6),
  `account_fkid` int NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`account_fkid`) REFERENCES `tbl_account`(`id`)
);

CREATE TABLE `tbl_gallery` (
  `id` int NOT NULL AUTO_INCREMENT,
  `timestamp` timestamp(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6),
  `image` longblob NOT NULL,
  `description` varchar(8000) NOT NULL,
  `account_fkid` int NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`account_fkid`) REFERENCES `tbl_account`(`id`)
);

CREATE TABLE `tbl_home_content` (
  `id` int NOT NULL AUTO_INCREMENT,
  `type` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `content` varchar(8000) NOT NULL,
  `image` longblob NOT NULL,
  `timestamp` timestamp(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6),
  `account_fkid` int NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`account_fkid`) REFERENCES `tbl_account`(`id`)
);

CREATE TABLE `tbl_community_post` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `author` varchar(255) NOT NULL,
  `content` JSON NOT NULL,
  `image` longblob NOT NULL,
  `timestamp` timestamp(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6),
  `account_fkid` int NOT NULL,
  `profile_fkid` int,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`account_fkid`) REFERENCES `tbl_account`(`id`),
  FOREIGN KEY (`profile_fkid`) REFERENCES `tbl_profile`(`id`)
);

CREATE TABLE `tbl_comment` (
  `id` int NOT NULL AUTO_INCREMENT,
  `comment` varchar(8000) NOT NULL,
  `timestamp` timestamp(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6),
  `image` longblob NOT NULL,
  `community_post_fkid` int NOT NULL,
  `account_fkid` int NOT NULL,
  `profile_fkid` int,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`community_post_fkid`) REFERENCES `tbl_community_post`(`id`),
  FOREIGN KEY (`account_fkid`) REFERENCES `tbl_account`(`id`),
  FOREIGN KEY (`profile_fkid`) REFERENCES `tbl_profile`(`id`)
);

CREATE TABLE `tbl_engagement` (
  `id` int NOT NULL AUTO_INCREMENT,
  `is_liked` BOOLEAN NOT NULL,
  `is_disliked` BOOLEAN NOT NULL,
  `timestamp` timestamp(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6),
  `community_post_fkid` int NOT NULL,
  `account_fkid` int NOT NULL,
  `profile_fkid` int,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`community_post_fkid`) REFERENCES `tbl_community_post`(`id`),
  FOREIGN KEY (`account_fkid`) REFERENCES `tbl_account`(`id`),
  FOREIGN KEY (`profile_fkid`) REFERENCES `tbl_profile`(`id`)
);

CREATE TABLE `tbl_message` (
  `id` int NOT NULL AUTO_INCREMENT,
  `room` varchar(255) NOT NULL UNIQUE,
  `timestamp` timestamp(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6),
  `account_fkid_1` int NOT NULL,
  `account_fkid_2` int NOT NULL,
  `profile_fkid_1` int,
  `profile_fkid_2` int,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`account_fkid_1`) REFERENCES `tbl_account`(`id`),
  FOREIGN KEY (`account_fkid_2`) REFERENCES `tbl_account`(`id`),
  FOREIGN KEY (`profile_fkid_1`) REFERENCES `tbl_profile`(`id`),
  FOREIGN KEY (`profile_fkid_2`) REFERENCES `tbl_profile`(`id`)
);

CREATE TABLE `tbl_conversation` (
  `id` int NOT NULL AUTO_INCREMENT,
  `message_content` varchar(8000) NOT NULL,
  `image` longblob NOT NULL,
  `timestamp` timestamp(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6),
  `message_fkid` int NOT NULL,
  `sender` int NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`message_fkid`) REFERENCES `tbl_message`(`id`)
);

CREATE TABLE `tbl_service` (
  `id` int(255) NOT NULL AUTO_INCREMENT,
  `name_of_service` varchar(255) NOT NULL,
  `description` varchar(8000) NOT NULL,
  `profile_fkid` int(255) NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`profile_fkid`) REFERENCES `tbl_profile`(`id`)
);

CREATE TABLE `tbl_startup_info` (
  `id` int(255) NOT NULL AUTO_INCREMENT,
  `name` int(255) NOT NULL,
  `description` varchar(8000) NOT NULL,
  `link` int(255) NOT NULL,
  `profile_fkid` int(255) NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`profile_fkid`) REFERENCES `tbl_profile`(`id`)
);

INSERT INTO `tbl_role` (`role`) VALUES ('admin');
INSERT INTO `tbl_role` (`role`) VALUES ('startup');
INSERT INTO `tbl_role` (`role`) VALUES ('partner');

INSERT INTO `tbl_account` (`email`, `username`, `recovery_email`, `password`, `role_fkid`) VALUES ('cti@g.batstate-u.edu.ph', 'cti', 'innovation@g.batstate-u.edu.ph', 'default', '1');
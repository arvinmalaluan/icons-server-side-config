-- How to insert value in tbl_community_post
INSERT INTO `tbl_community_post` (`title`, `author`, `content`, `account_fkid`, `profile_fkid`) VALUES ('', '', '', '', '')

-- How to insert value in tbl_profile
INSERT INTO `tbl_profile` (`name`, `location`, `account_fkid`) VALUES ('', '', '')

-- How to insert value in tbl_comment
INSERT INTO `tbl_comment` (`comment`, `community_post_fkid`, `account_fkid`, `profile_fkid`) VALUES ('', '', '', '')

-- How to insert value in tbl_engagement
INSERT INTO `tbl_engagement` (`is_liked`, `is_disliked`, `community_post_fkid`, `accounts_fkid`, `profile_fkid`) VALUES ('', '', '', '', '')



-- ! Patch Notes
-- UNIQUE property on some tables
/*
Navicat MySQL Data Transfer

Source Server         : MySqlDbC
Source Server Version : 50617
Source Host           : localhost:3306
Source Database       : jkstudy

Target Server Type    : MYSQL
Target Server Version : 50617
File Encoding         : 65001

Date: 2016-06-13 23:55:13
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for news
-- ----------------------------
DROP TABLE IF EXISTS `news`;
CREATE TABLE `news` (
  `date` varchar(50) NOT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `summary` varchar(255) NOT NULL,
  `imgdir` varchar(255) DEFAULT NULL,
  `type` varchar(20) NOT NULL,
  `state` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of news
-- ----------------------------
INSERT INTO `news` VALUES ('2016-06-13 23:48:17', '1', '1111', '2222', '', '推荐', '猜你喜欢');
INSERT INTO `news` VALUES ('2016-06-13 09:17:24', '3', '11', '22', 'upload/admin_160612022832.JPG', '百家', '顶置');
INSERT INTO `news` VALUES ('2016-06-13 09:17:24', '4', '111', '2222', 'upload/admin_160612023232.JPG', '百家', '顶置');
INSERT INTO `news` VALUES ('2016-06-13 09:17:24', '5', '34', '22', 'upload/admin_160612023340.JPG', '推荐', '顶置');
INSERT INTO `news` VALUES ('2016-06-13 09:17:24', '6', '1111', '2222', 'upload/admin_160612020742.JPG', '推荐', '顶置');
INSERT INTO `news` VALUES ('2016-06-13 09:17:24', '7', '1111', '2222', 'upload/admin_160612020742.JPG', '推荐', '顶置');
INSERT INTO `news` VALUES ('2016-06-13 09:17:24', '8', 'dasdasas', 'dsa', 'upload/admin_160612020742.JPG', '推荐', '顶置');
INSERT INTO `news` VALUES ('2016-06-13 09:17:24', '9', 'asd', 'sa', 'upload/admin_160612020742.JPG', '推荐', '顶置');
INSERT INTO `news` VALUES ('2016-06-13 09:17:24', '10', 'sad', 'sa', 'upload/admin_160612020742.JPG', '推荐', '顶置');
INSERT INTO `news` VALUES ('2016-06-13 09:17:24', '11', 'sa', 'sa', 'upload/admin_160612020742.JPG', '推荐', '顶置');
INSERT INTO `news` VALUES ('2016-06-13 09:17:24', '12', 'sad', 'sa', 'upload/admin_160612020742.JPG', '推荐', '顶置');
INSERT INTO `news` VALUES ('2016-06-13 09:17:24', '13', 'sa', 'sda', 'upload/admin_160612020742.JPG', '推荐', '顶置');
INSERT INTO `news` VALUES ('2016-06-13 09:17:24', '16', '11', '22111', '', '百家', '顶置');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `loginId` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL,
  PRIMARY KEY (`loginId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('admin', 'admin');
INSERT INTO `user` VALUES ('admin1', 'admin1');
INSERT INTO `user` VALUES ('admin2', 'admin2');
INSERT INTO `user` VALUES ('user', 'user');
